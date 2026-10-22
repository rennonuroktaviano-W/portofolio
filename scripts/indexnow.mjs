#!/usr/bin/env node
/**
 * IndexNow submission.
 *
 * Reads every URL from the published sitemap and notifies the IndexNow
 * endpoint so search engines can recrawl the site right away.
 *
 *   node scripts/indexnow.mjs                 # submit all sitemap URLs
 *   node scripts/indexnow.mjs /about /id/about # submit specific URLs
 *
 * The API key is resolved from INDEXNOW_KEY, or from the key file that is
 * already hosted in `public/` (the file name is the key, its content the key).
 */

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rennonuroktaviano.vercel.app"
).replace(/\/+$/, "");

const ENDPOINT =
  process.env.INDEXNOW_ENDPOINT ?? "https://api.indexnow.org/indexnow";

const MAX_URLS_PER_REQUEST = 10000;

async function resolveKey() {
  const fromEnv = process.env.INDEXNOW_KEY?.trim();
  if (fromEnv) return fromEnv;

  const publicDir = path.resolve("public");
  const files = await readdir(publicDir);
  for (const file of files) {
    if (!file.endsWith(".txt")) continue;
    const content = (await readFile(path.join(publicDir, file), "utf8")).trim();
    if (content === path.basename(file, ".txt")) return content;
  }

  throw new Error(
    "No IndexNow key found. Set INDEXNOW_KEY or add public/<key>.txt with the key as content."
  );
}

async function sitemapUrls() {
  const response = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!response.ok) {
    throw new Error(`Could not read sitemap.xml (HTTP ${response.status})`);
  }
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
    decodeURI(match[1].trim())
  );
}

function chunk(items, size) {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

async function main() {
  const key = await resolveKey();
  const requested = process.argv.slice(2);
  const urls = requested.length > 0 ? requested : await sitemapUrls();

  if (urls.length === 0) {
    console.log("No URLs to submit.");
    return;
  }

  console.log(`Host: ${SITE_URL}`);
  console.log(`URLs: ${urls.length}`);

  let status = 0;

  for (const batch of chunk(urls, MAX_URLS_PER_REQUEST)) {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: SITE_URL, key, urlList: batch }),
    });

    status = response.status;
    const body = (await response.text()).slice(0, 400);

    if (response.ok) {
      console.log(`Submitted ${batch.length} URLs → HTTP ${response.status} ${body}`);
    } else {
      console.error(`Submission failed → HTTP ${response.status} ${body}`);
      process.exitCode = 1;
    }
  }

  if (status === 202) {
    console.log("IndexNow accepted the request and is validating the key file.");
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
