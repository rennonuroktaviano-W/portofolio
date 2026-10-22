#!/usr/bin/env node
/**
 * Google Search Console automation.
 *
 *   GOOGLE_CLIENT_ID=... GOOGLE_CLIENT_SECRET=... GOOGLE_API_KEY=... npm run gsc
 *
 * One-time setup in the browser (only the human can do this part):
 *   1. console.cloud.google.com → create a project.
 *   2. Enable "Search Console API" and "Indexing API" for that project.
 *   3. Credentials → OAuth client ID → Application type: "Web application" →
 *      Authorised redirect URI: http://127.0.0.1:8765
 *   4. Put the client id and client secret into `.gsc-credentials.json`
 *      (git-ignored) or into the environment variables.
 *
 * What this script does afterwards:
 *   - lists the properties the account owns,
 *   - adds the URL-prefix property for the portfolio if it is missing,
 *   - submits sitemap.xml,
 *   - requests indexing for every URL in the sitemap (Indexing API).
 *
 * Tokens are cached in `.gsc-token.json` (git-ignored) so the browser step is
 * only needed once.
 */

import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = path.resolve(".");
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://rennonuroktaviano.vercel.app"
).replace(/\/+$/, "");
const SITE_URL_PREFIX = `${SITE_URL}/`;
const SCOPES = [
  "https://www.googleapis.com/auth/webmasters",
  "https://www.googleapis.com/auth/indexing",
];
const REDIRECT_URI = "http://127.0.0.1:8765";
const TOKEN_FILE = path.join(ROOT, ".gsc-token.json");
const CREDENTIALS_FILE = path.join(ROOT, ".gsc-credentials.json");

async function readJson(file) {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch {
    return undefined;
  }
}

const fileCredentials = await readJson(CREDENTIALS_FILE);
const clientId =
  process.env.GOOGLE_CLIENT_ID?.trim() || fileCredentials?.client_id;
const clientSecret =
  process.env.GOOGLE_CLIENT_SECRET?.trim() || fileCredentials?.client_secret;
const apiKey = process.env.GOOGLE_API_KEY?.trim() || fileCredentials?.api_key;

if (!clientId || !clientSecret) {
  console.error(
    [
      "Missing Google OAuth credentials.",
      "",
      "Create them once at console.cloud.google.com:",
      "  1. create a project",
      "  2. enable the Search Console API and the Indexing API",
      "  3. create an OAuth client (web application) with redirect URI",
      "     http://127.0.0.1:8765",
      "  4. save them to .gsc-credentials.json:",
      '     { "client_id": "...", "client_secret": "...", "api_key": "..." }',
    ].join("\n")
  );
  process.exit(1);
}

async function accessToken() {
  const cached = await readJson(TOKEN_FILE);
  if (cached?.access_token && cached.expires_at > Date.now() + 60000) {
    return cached.access_token;
  }
  if (cached?.refresh_token) {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: cached.refresh_token,
        grant_type: "refresh_token",
      }),
    });
    const body = await response.json();
    if (!response.ok) {
      throw new Error(`token refresh failed: ${JSON.stringify(body)}`);
    }
    return body.access_token;
  }
  return authorize();
}

async function authorize() {
  const state = Math.random().toString(36).slice(2);
  const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  authUrl.search = new URLSearchParams({
    client_id: clientId,
    redirect_uri: REDIRECT_URI,
    response_type: "code",
    scope: SCOPES.join(" "),
    access_type: "offline",
    prompt: "consent",
    state,
  }).toString();

  const code = await new Promise((resolve, reject) => {
    const server = createServer((request, response) => {
      const url = new URL(request.url ?? "/", REDIRECT_URI);
      if (url.pathname !== "/") {
        response.writeHead(404).end();
        return;
      }
      const params = url.searchParams;
      if (params.get("error")) {
        response.writeHead(400).end(`Error: ${params.get("error")}`);
        reject(new Error(params.get("error")));
        server.close();
        return;
      }
      if (params.get("state") !== state) {
        response.writeHead(400).end("State mismatch");
        reject(new Error("state mismatch"));
        server.close();
        return;
      }
      response.writeHead(200, { "content-type": "text/html" });
      response.end(
        "<h1>Search Console authorised</h1><p>You can close this tab and go back to the terminal.</p>"
      );
      server.close();
      resolve(params.get("code"));
    });
    server.listen(8765, "127.0.0.1", () => {
      console.log("Open this URL in your browser to authorise:\n");
      console.log(authUrl.toString());
      console.log("");
    });
  });

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code: code ?? "",
      grant_type: "authorization_code",
      redirect_uri: REDIRECT_URI,
    }),
  });
  const tokenBody = await tokenResponse.json();
  if (!tokenResponse.ok) {
    throw new Error(`token exchange failed: ${JSON.stringify(tokenBody)}`);
  }

  await writeFile(
    TOKEN_FILE,
    JSON.stringify(
      {
        access_token: tokenBody.access_token,
        refresh_token: tokenBody.refresh_token,
        expires_at: Date.now() + (tokenBody.expires_in ?? 3600) * 1000,
      },
      null,
      2
    ),
    "utf8"
  );
  console.log("Token cached in .gsc-token.json\n");
  return tokenBody.access_token;
}

async function api(token, url, init = {}) {
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
      ...(init.headers ?? {}),
    },
  });
  const text = await response.text();
  let body;
  try {
    body = text ? JSON.parse(text) : undefined;
  } catch {
    body = text;
  }
  if (!response.ok) {
    const error = new Error(
      `${init.method ?? "GET"} ${url} → ${response.status} ${body?.error?.message ?? text}`
    );
    error.status = response.status;
    throw error;
  }
  return body;
}

async function sitemapUrls() {
  const response = await fetch(`${SITE_URL}/sitemap.xml`);
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const token = await accessToken();

  // 1) Properties on the account.
  const list = await api(token, "https://www.googleapis.com/webmasters/v3/sites");
  const properties = list.siteEntry ?? [];
  console.log("Search Console properties:");
  for (const property of properties) {
    console.log(`  ${property.siteUrl} (${property.permissionLevel})`);
  }

  // 2) Add the portfolio property when it is missing.
  const known = properties.find(
    (property) => property.siteUrl.replace(/\/$/, "") === SITE_URL
  );
  if (!known) {
    try {
      await api(token, "https://www.googleapis.com/webmasters/v3/sites", {
        method: "POST",
        body: JSON.stringify({ siteUrl: SITE_URL_PREFIX }),
      });
      console.log(`Added property: ${SITE_URL_PREFIX}`);
    } catch (error) {
      if (error.status === 403) {
        console.log(
          `Could not add the property automatically (${error.message}). Add it manually in the Search Console UI and re-run.`
        );
      } else {
        throw error;
      }
    }
  } else {
    console.log(`Property already present: ${known.siteUrl}`);
  }

  // 3) Submit the sitemap.
  const feedUrl = `${SITE_URL}/sitemap.xml`;
  try {
    await api(
      token,
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
        SITE_URL_PREFIX
      )}/sitemaps/${encodeURIComponent(feedUrl)}`,
      { method: "PUT" }
    );
    console.log(`Sitemap submitted: ${feedUrl}`);
  } catch (error) {
    console.log(`Sitemap submit failed: ${error.message}`);
  }

  // 4) Request indexing for every URL in the sitemap.
  if (!apiKey) {
    console.log(
      "\nNo GOOGLE_API_KEY set — skipping the Indexing API step. Add the key to also request indexing for every URL."
    );
    return;
  }

  const urls = await sitemapUrls();
  let ok = 0;
  for (const url of urls) {
    try {
      await api(
        token,
        `https://www.googleapis.com/indexing/v3/urlNotifications?key=${apiKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            url,
            type: "URL_LINKS",
            requestSource: "URL_SUBMISSION",
          }),
        }
      );
      ok += 1;
      console.log(`  queued ${url}`);
    } catch (error) {
      console.log(`  failed ${url}: ${error.message}`);
    }
  }
  console.log(`\nIndexing requested for ${ok}/${urls.length} URLs.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
