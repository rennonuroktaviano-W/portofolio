#!/usr/bin/env node
/**
 * Publishes a small landing page for the GitHub user site
 * (https://<user>.github.io) that links to the portfolio.
 *
 *   npm run github:pages
 *
 * Why: a github.io page is crawled by Google within days, while a brand-new
 * custom domain can take weeks. It gives the name one more indexable surface
 * that points at the real site.
 *
 * The page lives in the `<login>.github.io` repository on its `gh-pages`
 * branch. The old project-style Pages site (the profile repository) is
 * removed afterwards so there is only one canonical surface.
 */

import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const LOGIN = "rennonuroktaviano-W";
const PROFILE_REPO = `${LOGIN}/${LOGIN}`;
const USER_REPO = `${LOGIN}/${LOGIN}.github.io`;
const SITE =
  process.env.PORTFOLIO_SITE?.trim() || "https://rennonuroktaviano.vercel.app";
const API = "https://api.github.com";

async function tokenFromFile() {
  try {
    return (
      await readFile(path.resolve(".github-token.txt"), "utf8")
    ).trim();
  } catch {
    return undefined;
  }
}

async function tokenFromGitCredentialManager() {
  try {
    const { spawn } = await import("node:child_process");
    const child = spawn("git", ["credential", "fill"], {
      stdio: ["pipe", "pipe", "ignore"],
    });
    let out = "";
    child.stdout.on("data", (chunk) => {
      out += chunk.toString();
    });
    const finished = new Promise((resolve) => child.on("close", resolve));
    child.stdin.write("protocol=https\nhost=github.com\n\n");
    child.stdin.end();
    await Promise.race([
      finished,
      new Promise((resolve) => setTimeout(resolve, 5000)),
    ]);
    child.kill();
    const line = out.split("\n").find((l) => l.startsWith("password="));
    return line ? line.slice("password=".length).trim() : undefined;
  } catch {
    return undefined;
  }
}

const token =
  process.env.GITHUB_TOKEN?.trim() ||
  (await tokenFromFile()) ||
  (await tokenFromGitCredentialManager());

if (!token) {
  console.error("No GitHub token found.");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${token}`,
  "User-Agent": "opencode",
  Accept: "application/vnd.github+json",
  "Content-Type": "application/json",
};

async function api(endpoint, init = {}) {
  const response = await fetch(`${API}${endpoint}`, { ...init, headers });
  const text = await response.text();
  let body;
  try {
    body = text ? JSON.parse(text) : undefined;
  } catch {
    body = text;
  }
  if (!response.ok) {
    const error = new Error(
      `${init.method ?? "GET"} ${endpoint} → ${response.status} ${body?.message ?? text}`
    );
    error.status = response.status;
    throw error;
  }
  return body;
}

const socials = [
  {
    label: "GitHub",
    handle: "@rennonuroktaviano-W",
    url: "https://github.com/rennonuroktaviano-W",
  },
  {
    label: "LinkedIn",
    handle: "Renno Nur Oktaviano",
    url: "https://www.linkedin.com/in/renno-nur-oktaviano-869675380",
  },
  { label: "X", handle: "@rennuroktavW", url: "https://x.com/rennuroktavW" },
];

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: "Renno Nur Oktaviano",
  alternateName: ["Renno", "Renno N. Oktaviano"],
  url: SITE,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack web developer from Indonesia building production websites and applications with Next.js, TypeScript, Laravel and Node.js.",
  image: `${SITE}/images/dev/profile.png`,
  email: "mailto:rennonuroktaviano@gmail.com",
  homeLocation: { "@type": "Country", name: "Indonesia" },
  knowsAbout: [
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "Laravel",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  knowsLanguage: ["en", "id", "es", "fr", "de", "ja"],
  sameAs: socials.map((social) => social.url),
};

const webPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Renno Nur Oktaviano — Full-Stack Developer",
  description:
    "Portfolio of Renno Nur Oktaviano, a full-stack web developer from Indonesia.",
  inLanguage: "en",
  about: { "@id": `${SITE}/#person` },
};

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Renno Nur Oktaviano — Full-Stack Developer (Next.js, Laravel)</title>
    <meta
      name="description"
      content="Renno Nur Oktaviano is a full-stack web developer from Indonesia building production websites and applications with Next.js, TypeScript and Laravel. Portfolio: ${SITE}"
    />
    <link rel="canonical" href="${SITE}" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="Renno Nur Oktaviano — Full-Stack Developer" />
    <meta
      property="og:description"
      content="Full-stack web developer from Indonesia. Portfolio, case files and bio."
    />
    <meta property="og:url" content="${SITE}" />
    <meta property="og:image" content="${SITE}/og/cover.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Renno Nur Oktaviano — Full-Stack Developer" />
    <meta name="twitter:image" content="${SITE}/og/cover.png" />
    <style>
      :root {
        color-scheme: dark;
        --midnight: #08090b;
        --cream: #f4efe4;
        --fog: #9aa0aa;
        --gold: #e6b84a;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100svh;
        display: grid;
        place-items: center;
        background:
          radial-gradient(ellipse 80% 60% at 50% -10%, rgba(230, 184, 74, 0.12), transparent 70%),
          var(--midnight);
        color: var(--cream);
        font-family: ui-sans-serif, system-ui, "Segoe UI", sans-serif;
        padding: 2rem 1.25rem;
      }
      main { width: min(44rem, 100%); }
      .kicker {
        font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
        font-size: 0.7rem;
        letter-spacing: 0.4em;
        text-transform: uppercase;
        color: var(--gold);
        margin: 0 0 1rem;
      }
      h1 {
        font-size: clamp(2.1rem, 7vw, 3.6rem);
        line-height: 0.98;
        letter-spacing: -0.02em;
        margin: 0 0 0.75rem;
        text-transform: uppercase;
      }
      p.role {
        font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
        font-size: 0.8rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: var(--gold);
        margin: 0 0 1.5rem;
      }
      p.lead { color: var(--fog); line-height: 1.7; margin: 0 0 2rem; }
      .cta {
        display: inline-block;
        border: 1px solid var(--gold);
        background: rgba(230, 184, 74, 0.12);
        color: var(--gold);
        text-decoration: none;
        font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
        font-size: 0.72rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        padding: 0.9rem 1.4rem;
      }
      .cta:hover { background: var(--gold); color: var(--midnight); }
      ul.links {
        list-style: none;
        margin: 2.5rem 0 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem;
        font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
        font-size: 0.72rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }
      ul.links a { color: var(--fog); text-decoration: none; }
      ul.links a:hover { color: var(--gold); }
      footer {
        margin-top: 3rem;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(244, 239, 228, 0.12);
        color: #6b7078;
        font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
        font-size: 0.65rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
      }
    </style>
  </head>
  <body>
    <main>
      <p class="kicker">Portfolio</p>
      <h1>Renno Nur Oktaviano</h1>
      <p class="role">Full-Stack Developer &middot; Indonesia</p>
      <p class="lead">
        I build production websites and full-stack applications — interface, API,
        database and deployment. Stack: Next.js, TypeScript, Laravel,
        PostgreSQL, Tailwind CSS. The full portfolio, the case files and the
        bio live on my own domain.
      </p>
      <a class="cta" href="${SITE}">Open the portfolio &rarr;</a>
      <ul class="links">
${socials
  .map(
    (social) =>
      `        <li><a href="${social.url}" rel="noopener noreferrer" target="_blank">${social.label} &middot; ${social.handle}</a></li>`
  )
  .join("\n")}
        <li><a href="mailto:rennonuroktaviano@gmail.com">Email</a></li>
      </ul>
      <footer>&copy; ${new Date().getFullYear()} Renno Nur Oktaviano &middot; ${SITE}</footer>
    </main>
    <script type="application/ld+json">${JSON.stringify(personLd)}</script>
    <script type="application/ld+json">${JSON.stringify(webPageLd)}</script>
  </body>
</html>
`;

// 1) The user site repository (<login>.github.io) has to exist first.
try {
  await api(`/repos/${USER_REPO}`);
  console.log(`Repository ${USER_REPO} already exists`);
} catch (error) {
  if (error.status !== 404) throw error;
  await api("/user/repos", {
    method: "POST",
    body: JSON.stringify({
      name: `${LOGIN}.github.io`,
      description:
        "Landing page for Renno Nur Oktaviano, full-stack developer. Portfolio: " +
        SITE,
      private: false,
      has_issues: false,
      has_wiki: false,
      auto_init: false,
    }),
  });
  console.log(`Created repository ${USER_REPO}`);
}

// 2) Write the page through the contents API (works on empty repositories).
async function putFile(repo, filePath, content, message) {
  let sha;
  try {
    const existing = await api(
      `/repos/${repo}/contents/${filePath}?ref=gh-pages`
    );
    sha = existing.sha;
  } catch {
    sha = undefined;
  }
  await api(`/repos/${repo}/contents/${filePath}`, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: Buffer.from(content, "utf8").toString("base64"),
      branch: "gh-pages",
      ...(sha ? { sha } : {}),
    }),
  });
}

await putFile(
  USER_REPO,
  "index.html",
  html,
  "docs: landing page pointing at the portfolio"
);
console.log("Published index.html on gh-pages");

// 3) Mirror the IndexNow key file so this URL can also use IndexNow.
let indexNowKey = process.env.INDEXNOW_KEY?.trim();
if (!indexNowKey) {
  try {
    const { readdir } = await import("node:fs/promises");
    const files = await readdir(path.resolve("public"));
    const candidate = files.find((file) => /^[0-9a-f]{16,}\.txt$/i.test(file));
    if (candidate) indexNowKey = candidate.replace(/\.txt$/i, "");
  } catch {
    indexNowKey = undefined;
  }
}

if (indexNowKey) {
  await putFile(
    USER_REPO,
    `${indexNowKey}.txt`,
    `${indexNowKey}\n`,
    "chore: publish IndexNow key file"
  );
  console.log(`Published the IndexNow key file (${indexNowKey}.txt)`);
}

// 4) Enable Pages for that branch.
try {
  await api(`/repos/${USER_REPO}/pages`, {
    method: "POST",
    body: JSON.stringify({ source: { branch: "gh-pages", path: "/" } }),
  });
  console.log("GitHub Pages enabled on gh-pages");
} catch (error) {
  if (error.status !== 409) console.log(`Pages setup: ${error.message}`);
}

// 4) The profile repository no longer needs its own project Pages site.
if (process.env.KEEP_PROFILE_PAGES !== "1") {
  try {
    await api(`/repos/${PROFILE_REPO}/pages`, { method: "DELETE" });
    console.log("Removed the project Pages site from the profile repository");
  } catch (error) {
    console.log(`Profile Pages cleanup skipped: ${error.message}`);
  }
  try {
    await api(`/repos/${PROFILE_REPO}/git/refs/heads/gh-pages`, {
      method: "DELETE",
    });
    console.log("Removed the gh-pages branch from the profile repository");
  } catch (error) {
    console.log(`Profile branch cleanup skipped: ${error.message}`);
  }
}

console.log(`\nLanding page: https://${LOGIN}.github.io/`);
console.log(`Points at:     ${SITE}`);
