#!/usr/bin/env node
/**
 * Generates the Search Console file-based verification file.
 *
 *   GOOGLE_SITE_VERIFICATION=abc123 npm run verify:file
 *
 * Creates `public/google<token>.html` with the exact body Google expects and
 * removes verification files from earlier tokens. The file is served from the
 * site root, so the matching HTML tag is not needed.
 */

import { readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const token = (
  process.env.GOOGLE_SITE_VERIFICATION ??
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  ""
).trim();

if (!token) {
  console.error(
    "Missing verification token. Set GOOGLE_SITE_VERIFICATION=<token> and run again."
  );
  process.exit(1);
}

const publicDir = path.resolve("public");
const fileName = `google${token}.html`;

for (const file of await readdir(publicDir)) {
  if (/^google.*\.html$/.test(file) && file !== fileName) {
    await rm(path.join(publicDir, file));
    console.log(`Removed stale verification file: ${file}`);
  }
}

await writeFile(
  path.join(publicDir, fileName),
  `google-site-verification: ${fileName}\n`,
  "utf8"
);

console.log(`Created public/${fileName}`);
console.log(`Verify with: https://<domain>/${fileName}`);
