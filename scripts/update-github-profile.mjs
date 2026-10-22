#!/usr/bin/env node
/**
 * Updates the public GitHub profile so the portfolio is discoverable from an
 * already-indexed page.
 *
 *   GITHUB_TOKEN=ghp_xxx npm run github:profile
 *   npm run github:profile -- --dry-run
 *
 * What it does:
 *   1. Sets the account display name and the profile website (needs a token
 *      with the `user` scope).
 *   2. Adds the portfolio badge, the portfolio link in the ABOUT ME box, a
 *      featured-project entry and a CONTACT badge to the profile README.
 *
 * Without the `user` scope step 1 is skipped and only the README is updated.
 */

import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const REPO = "rennonuroktaviano-W/rennonuroktaviano-W";
const SITE =
  process.env.PORTFOLIO_SITE?.trim() || "https://rennonuroktaviano.vercel.app";
const API = "https://api.github.com";
const dryRun = process.argv.includes("--dry-run");

async function tokenFromGitCredentialManager() {
  try {
    const { spawn } = await import("node:child_process");
    const child = spawn("git", ["credential", "fill"], { stdio: ["pipe", "pipe", "ignore"] });
    let out = "";
    child.stdout.on("data", (chunk) => {
      out += chunk.toString();
    });
    const finished = new Promise((resolve) => child.on("close", resolve));
    child.stdin.write("protocol=https\nhost=github.com\n\n");
    child.stdin.end();
    const timeout = new Promise((resolve) => setTimeout(resolve, 5000));
    await Promise.race([finished, timeout]);
    child.kill();
    const line = out.split("\n").find((l) => l.startsWith("password="));
    return line ? line.slice("password=".length).trim() : undefined;
  } catch {
    return undefined;
  }
}

async function tokenFromFile() {
  try {
    const value = (
      await readFile(path.resolve(".github-token.txt"), "utf8")
    ).trim();
    return value || undefined;
  } catch {
    return undefined;
  }
}

const token =
  process.env.GITHUB_TOKEN?.trim() ||
  (await tokenFromFile()) ||
  (await tokenFromGitCredentialManager());

if (!token) {
  console.error(
    "No GitHub token found. Set GITHUB_TOKEN=<pat> (a PAT with the `user` scope also updates the display name)."
  );
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${token}`,
  "User-Agent": "opencode",
  Accept: "application/vnd.github+json",
  "Content-Type": "application/json",
};

async function github(path, init = {}) {
  const response = await fetch(`${API}${path}`, { ...init, headers });
  const text = await response.text();
  let body;
  try {
    body = text ? JSON.parse(text) : undefined;
  } catch {
    body = text;
  }
  if (!response.ok) {
    const error = new Error(
      `${init.method ?? "GET"} ${path} → ${response.status} ${body?.message ?? text}`
    );
    error.status = response.status;
    throw error;
  }
  return body;
}

// 1) Account profile: display name + website.
try {
  const user = await github("/user");
  const current = {
    name: user.name ?? "",
    blog: user.blog ?? "",
  };
  const wanted = {
    name: "Renno Nur Oktaviano",
    blog: SITE,
  };
  const needsUpdate =
    current.name !== wanted.name || current.blog !== wanted.blog;

  if (!needsUpdate) {
    console.log(`Profile up to date: name="${current.name}" blog="${current.blog}"`);
  } else if (dryRun) {
    console.log(`[dry-run] would set name="${wanted.name}" blog="${wanted.blog}"`);
  } else {
    const updated = await github("/user", {
      method: "PATCH",
      body: JSON.stringify(wanted),
    });
    console.log(
      `Profile updated: name="${updated.name}" blog="${updated.blog}"`
    );
  }
} catch (error) {
  if (error.status === 404 || error.status === 403) {
    console.log(
      `Skipped display name / website: the token lacks the \`user\` scope (${error.message}).`
    );
  } else {
    throw error;
  }
}

// 2) Profile README.
const file = await github(`/repos/${REPO}/contents/README.md`);
let readme = Buffer.from(file.content, "base64").toString("utf8").replace(/\r\n/g, "\n");

const edits = [
  {
    label: "badge row",
    already: "Portfolio-Live%20Site",
    find: `    <a href="https://github.com/rennonuroktaviano-W">
      <img src="https://img.shields.io/badge/Level-Pro%20Dev-22D3EE?style=for-the-badge&logo=gamepad&logoColor=black" alt="Level"/>
    </a>`,
    replace: (anchor) => `${anchor}
    <a href="${SITE}" target="_blank">
      <img src="https://img.shields.io/badge/Portfolio-Live%20Site-00F5FF?style=for-the-badge&logo=vercel&logoColor=black" alt="Portfolio"/>
    </a>`,
  },
  {
    label: "about me",
    already: "Saya <b>Renno Nur Oktaviano</b>",
    find: `    👋 Halo! Saya seorang <b>Full Stack Web & Mobile Developer</b> yang berfokus pada pembuatan aplikasi modern, performa tinggi, dan scalable.`,
    replace: () =>
      `    👋 Halo! Saya <b>Renno Nur Oktaviano</b>, seorang <b>Full Stack Web & Mobile Developer</b> yang berfokus pada pembuatan aplikasi modern, performa tinggi, dan scalable.`,
  },
  {
    label: "about me link",
    already: "Website portofolio saya:",
    find: `    🎮 Ketika tidak sedang menatap baris kode, kamu akan menemukan saya sedang mengasah kemampuan di dunia game kompetitif maupun menjelajahi dunia game <i>Open World</i>.`,
    replace: (anchor) => `${anchor}
  </p>
  <p style="justify-content: center; color: #E2E8F0; font-family: sans-serif; font-size: 15px; line-height: 1.6; margin: 10px 0 0 0;">
    🌐 Website portofolio saya: <a href="${SITE}" target="_blank"><b>${SITE}</b></a> — full-stack web (Next.js, TypeScript, Laravel, PostgreSQL) dengan 6 bahasa, plus halaman bio dan study kasus proyek.`,
  },
  {
    label: "contact badges",
    already: "badge/Portfolio-00F5FF",
    find: `    <a href="mailto:rennonuroktaviano@gmail.com">
      <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
    </a>`,
    replace: (anchor) => `    <a href="${SITE}" target="_blank">
      <img src="https://img.shields.io/badge/Portfolio-00F5FF?style=for-the-badge&logo=vercel&logoColor=black" alt="Portfolio"/>
    </a>
${anchor}`,
  },
  {
    label: "featured project",
    already: "KODECITY — 80s Neo-Noir Portfolio",
    find: `    <td width="50%" style="background: #0F172A; border: 1px solid #8B5CF6; border-radius: 10px; padding: 15px;">
      <h3 style="color: #00F5FF; margin: 0;">📱 Flutter Mobile Application</h3>
      <p style="color: #94A3B8; font-size: 13px;">Cross-platform mobile app with rich UI animations and seamless REST API integration.</p>
    </td>`,
    replace: (anchor) => `${anchor}
    <td width="50%" style="background: #0F172A; border: 1px solid #00F5FF; border-radius: 10px; padding: 15px;">
      <h3 style="color: #38BDF8; margin: 0;">🌆 KODECITY — 80s Neo-Noir Portfolio</h3>
      <p style="color: #94A3B8; font-size: 13px;">Interactive full-stack portfolio (Next.js 16, TypeScript, Tailwind, GSAP): 9 scroll scenes, 6 languages, case files and bio page — <a href="${SITE}" target="_blank">live site</a>.</p>
    </td>`,
  },
];

let changed = 0;
for (const edit of edits) {
  if (readme.includes(edit.already)) {
    console.log(`Kept "${edit.label}" — already applied.`);
    continue;
  }
  if (!readme.includes(edit.find)) {
    console.log(`Skipped "${edit.label}" — anchor not found (README shape changed).`);
    continue;
  }
  readme = readme.replace(edit.find, edit.replace(edit.find));
  changed += 1;
}

const links = (readme.match(new RegExp(SITE, "g")) || []).length;

if (changed === 0) {
  console.log("Profile README already up to date.");
} else if (dryRun) {
  console.log(`[dry-run] ${changed} README edits, ${links} links to ${SITE}`);
} else {
  const result = await github(`/repos/${REPO}/contents/README.md`, {
    method: "PUT",
    body: JSON.stringify({
      message: "docs: link the live portfolio and spell the name correctly",
      content: Buffer.from(readme, "utf8").toString("base64"),
      sha: file.sha,
    }),
  });
  console.log(
    `Profile README updated: ${result.commit.html_url} (${changed} edits, ${links} links to ${SITE})`
  );
}
