// QA-responsive v2: after loading, scrolls to the NFT scene, waits for reveal
// animations, then verifies horizontal overflow (ignoring elements inside
// overflow-clipping ancestors and invisible animated states) and also checks
// the lightbox while open. Saves viewport screenshots per width.
// Usage: node scripts/qa-responsive.mjs [url]
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import puppeteer from "puppeteer-core";

const url = process.argv[2] ?? "http://localhost:3000";
const outDir = join(process.cwd(), "node_modules", ".qa");
mkdirSync(outDir, { recursive: true });

const edge =
  process.env.MSEDGE ??
  [
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  ].find((p) => existsSync(p));

if (!edge) {
  console.error("Edge not found — set MSEDGE env var.");
  process.exit(1);
}

const viewports = [
  { w: 320, h: 568 },
  { w: 360, h: 640 },
  { w: 375, h: 667 },
  { w: 390, h: 844 },
  { w: 412, h: 890 },
  { w: 430, h: 932 },
  { w: 768, h: 1024 },
  { w: 820, h: 1180 },
  { w: 1024, h: 768 },
  { w: 1280, h: 800 },
  { w: 1440, h: 900 },
  { w: 1920, h: 1080 },
  { w: 667, h: 375 },
  { w: 844, h: 390 },
];

const measure = (page) =>
  page.evaluate(() => {
    const docEl = document.documentElement;
    const clipped = (el) => {
      let p = el.parentElement;
      while (p) {
        const o = getComputedStyle(p);
        if (o.overflowX === "hidden" || o.overflowX === "clip" || o.overflowX === "scroll")
          return true;
        p = p.parentElement;
      }
      return false;
    };
    const scrollable = docEl.scrollWidth;
    const offenders = [];
    for (const el of document.querySelectorAll("body *")) {
      const cs = getComputedStyle(el);
      if (cs.position === "fixed" || cs.opacity === "0" || cs.visibility === "hidden") continue;
      if (clipped(el)) continue;
      const r = el.getBoundingClientRect();
      const vw = window.innerWidth;
      if (r.width > 0 && (r.right > vw + 1 || r.left < -1)) {
        const cls =
          typeof el.className === "string" ? el.className.split(/\s+/).slice(0, 3).join(".") : "";
        offenders.push(
          `${el.tagName.toLowerCase()}${el.id ? "#" + el.id : ""}${cls ? "." + cls : ""} [l=${Math.round(r.left)}, r=${Math.round(r.right)}] "${(el.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 40)}"`
        );
      }
    }
    return { scrollable, client: docEl.clientWidth, offenders: offenders.slice(0, 10) };
  });

const browser = await puppeteer.launch({
  executablePath: edge,
  headless: "shell",
  args: ["--no-sandbox", "--disable-gpu"],
});

let failures = 0;

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.w, height: vp.h, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1000));
  await page.evaluate(() => document.getElementById("scene-nft")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 1500));

  const layout = await measure(page);
  const shot = join(outDir, `${vp.w}x${vp.h}.nft.png`);
  await page.screenshot({ path: shot });

  const hasCtrl =
    (await page.$('#scene-nft button[aria-label*="Open artwork"]')) !== null;
  let boxStatus = "n/a";
  if (hasCtrl) {
    await page.click('#scene-nft button[aria-label*="Open artwork"]');
    await new Promise((r) => setTimeout(r, 600));
    const box = await measure(page);
    boxStatus = box.offenders.length ? "OVERFLOW" : "ok";
    if (box.offenders.length) {
      for (const o of box.offenders) console.log(`      [box] ${o}`);
    }
    await page.keyboard.press("Escape");
    await new Promise((r) => setTimeout(r, 200));
  }

  console.log(
    `[${String(vp.w).padStart(4)}x${String(vp.h).padStart(4)}] layout=${layout.offenders.length ? "OVERFLOW" : "ok"} scrollW=${layout.scrollable}/${layout.client} box=${boxStatus} shot=${shot}`
  );
  if (layout.offenders.length) {
    failures++;
    for (const o of layout.offenders) console.log(`      ${o}`);
  }
  if (boxStatus === "OVERFLOW") failures++;
  await page.close();
}

await browser.close();
console.log(failures === 0 ? "\nALL VIEWPORTS CLEAN" : `\n${failures} issue(s) found`);
process.exit(failures === 0 ? 0 : 1);