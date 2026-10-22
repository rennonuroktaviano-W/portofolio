import { mkdir, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

/**
 * Rasterises the vector social/OG artwork into PNG so that crawlers and
 * social platforms (LinkedIn, X, WhatsApp …) that do not render SVG still
 * get a preview image.
 */
const targets = [
  {
    svg: "public/og/cover.svg",
    png: "public/og/cover.png",
    width: 1200,
    height: 630,
  },
  ...["casebreak", "kodeledger", "weathermono"].map((slug) => ({
    svg: `public/images/projects/${slug}/cover.svg`,
    png: `public/images/projects/${slug}/cover.png`,
    width: 1200,
    height: 675,
  })),
];

const root = resolve(import.meta.dirname, "..");

for (const target of targets) {
  const source = await readFile(resolve(root, target.svg));
  const output = resolve(root, target.png);
  await mkdir(dirname(output), { recursive: true });
  await sharp(source, { density: 384 })
    .resize(target.width, target.height, { fit: "cover" })
    .png({ compressionLevel: 9, quality: 90 })
    .toFile(output);
  console.log(`generated ${target.png} (${target.width}x${target.height})`);
}
