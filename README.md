# KODECITY — 80s Neo-Noir Interactive Portfolio

**Live site → https://rennonuroktaviano.vercel.app** · bio → https://rennonuroktaviano.vercel.app/about · case files → https://rennonuroktaviano.vercel.app/projects

A cinematic, single-page portfolio built like a rainy metropolis of interfaces. Scroll-driven storytelling with a comic-panel aesthetic: grain, fog, rain, CRT flicker, a live retro terminal — all told in original type, tone, and art.

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger (scroll storytelling, pinning, parallax)
- Web Canvas (rain, ripples)
- Framer Motion (installed for micro-interactions)

## Get started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint (flat config)
npm run typecheck  # tsc --noEmit
npm run og         # regenerate the PNG social images from the SVG artwork
npm run indexnow   # submit every sitemap URL to the IndexNow API
npm run verify:file  # create the Search Console verification file (needs GOOGLE_SITE_VERIFICATION=<token>)
npm run github:profile  # push the portfolio link + correct name to the GitHub profile
npm run gsc        # add the Search Console property, submit the sitemap, request indexing
```

> This version of Next.js is newer than most training data. Before editing Next-specific code, read the bundled docs under `node_modules/next/dist/docs/`.

## Experience

- **9 scroll scenes**, no navbar/footer: Hero → Identity Reveal → Case File → Tech Arsenal → Certificate Vault → NFT Studio → Experience Timeline → Contact → Final Night.
- **Atmosphere**: CSS grain/fog/halftone/vignette, canvas rain with click ripples, cursor spotlight on fine-pointer devices.
- **Interaction**: keyboard scene nav (↑/↓/PgUp/PgDn/Home/End), 6-language UI (en/id/es/fr/de/ja).
- **Easter eggs**: type `crt` anywhere; tap the KODECITY sign in the hero.
- **Accessibility**: `prefers-reduced-motion` honored end-to-end, labelled scenes, skip link, visible focus rings, per-locale `lang` on the content root.

## Structure

```
app/
  layout.tsx            root document: fonts, JSON-LD (Person, WebSite), global metadata
  page.tsx              English home (re-exports the [locale] page)
  [locale]/layout.tsx   locale segment: static params for /id /es /fr /de /ja
  [locale]/page.tsx     localized home: /id /es /fr /de /ja (SSG, hreflang, canonical)
  [locale]/about/page.tsx  localized bio page (SSG, hreflang, canonical)
  about/page.tsx        English bio page /about (SSG, hreflang, canonical)
  projects/             Case Files index + one static detail page per case study
  not-found.tsx         404 view (noindex, follow)
  robots.ts sitemap.ts manifest.ts   metadata routes
  api/contact/route.ts  contact handler (noindex, no-store)
components/
  PortfolioHome.tsx     locale provider + WebPage JSON-LD
  PortfolioPage.tsx     scene composition
  about/AboutPage.tsx   bio page (server rendered, ProfilePage JSON-LD)
  scenes/               scene components
  ui/                   headers, indicators, language switcher, 404 view
  nft/                  lightbox + artwork cover
  projects/             case-file navigation + footer
  effects/              rain, fog, grain, skyline, cursor spotlight, easter eggs
data/           typed content layer (site, seo, profile, skills, projects, experience, socials, certificates)
lib/            scene definitions, GSAP motion helpers, SEO helpers, i18n provider + dictionary
public/
  images/projects/<slug>/cover.svg   original case-cover art (+ generated .png)
  og/cover.svg                        social share banner (+ generated cover.png)
  <indexnow-key>.txt                  IndexNow verification file (key = file name)
scripts/
  generate-og-images.mjs  rasterises the SVG artwork to PNG via sharp
  indexnow.mjs            submits sitemap URLs to the IndexNow API
  generate-verification.mjs  writes the Search Console verification file to public/
  update-github-profile.mjs   keeps the GitHub profile (name, website, README) in sync
  gsc-setup.mjs           adds the Search Console property, submits the sitemap, requests indexing
.github/workflows/
  indexnow.yml            IndexNow submission on every push to main + daily cron
```

## Content model

Content lives entirely in `data/`. Edit it to make the city yours; the scenes render whatever you type. `data/site.ts` holds the brand, the canonical URL and the keyword list, `data/seo.ts` holds the per-locale titles and descriptions, `data/projects.ts` holds the case files that feed `/projects`.

## SEO / technical notes

- **Canonical + hreflang**: every localized home page emits a self-referencing canonical and a reciprocal hreflang cluster (`en`, `id`, `es`, `fr`, `de`, `ja`, plus `x-default` → English root). The `/about` bio page runs the same cluster over its own paths. English lives at `/`, so `/en` is a 308 redirect to `/`.
- **Static rendering**: `/`, all locale homes, `/about` and its locale variants, `/projects` and every case file are prerendered at build time; only `/api/contact` is dynamic.
- **Structured data**: `Person` + `WebSite` in the root layout, `WebPage` per locale, `ProfilePage` on the bio page, `CreativeWork` + `BreadcrumbList` per case file.
- **Crawlers**: `robots.txt` allows everything except `/api/`; `/api/*` responses also carry `X-Robots-Tag: noindex, nofollow` and `Cache-Control: no-store`; the 404 page is `noindex`.
- **Social**: Open Graph and Twitter cards point at the PNG version of the artwork (`/og/cover.png`, 1200×630) because most platforms do not render SVG.
- **Performance**: `next/image` with AVIF/WebP, `optimizePackageImports` for framer-motion and lucide-react, a compressed intro sequence and a session-scoped skip of the loading screen so the hero paints immediately on repeat visits.

### The `/about` bio page

- `/about` (English) plus `/id/about`, `/es/about`, `/fr/about`, `/de/about`, `/ja/about` — all prerendered, all with a self-referencing canonical and a reciprocal hreflang cluster.
- Content is assembled from `data/` (bio paragraphs, status, location, interests, stack, milestones, certificates, contact) and translated through `lib/i18n/messages/<locale>.ts` under the `aboutPage.*` key. Nothing is hard-coded in the component.
- The page is linked from the Identity Reveal scene and the Final scene (`Full bio →`) and from the Case Files navigation, so the bio is one click away from every page.

### IndexNow

- The key lives in `public/<key>.txt` — the file name is the key and the file content is the same key. It is served at `https://<domain>/<key>.txt`, which is what IndexNow validates.
- `npm run indexnow` reads `sitemap.xml` and POSTs every URL to `https://api.indexnow.org/indexnow`. Pass explicit paths to submit only a subset: `npm run indexnow -- /about /id/about`.
- `.github/workflows/indexnow.yml` runs the same script on every push to `main` and once a day. Set the repository variable `NEXT_PUBLIC_SITE_URL`; `INDEXNOW_KEY` is optional because the script also finds the key in `public/`.
- IndexNow only speeds up recrawling — it does not submit pages to Google. A fresh page still has to be discovered through the sitemap and internal links.

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | recommended | Canonical origin used for metadata, sitemap, robots and JSON-LD. Defaults to the production Vercel URL. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | optional | Value of the Search Console HTML-tag verification token; rendered as `<meta name="google-site-verification">`. |
| `CANONICAL_REDIRECT_ORIGIN` | optional | Extra host that permanently redirects to the canonical origin (useful while a custom domain is being migrated). Disabled when unset. |
| `INDEXNOW_KEY` | optional | IndexNow API key; falls back to the key file in `public/`. |
| `GOOGLE_SITE_VERIFICATION` | optional | Token used by `npm run verify:file` to generate the Search Console verification file. |

### Search Console in five minutes

The site is only discoverable once Google can reach it. Two things are needed: a way to tell Google the domain exists, and at least one external link pointing at it.

1. Add a **URL-prefix** property for `https://rennonuroktaviano.vercel.app/`. (DNS verification is not available for `*.vercel.app` — Vercel owns that zone.)
2. Verify it, either way:
   - **HTML tag** — copy the token into the Vercel env var `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and redeploy. The root layout renders the meta tag.
   - **File** — run `GOOGLE_SITE_VERIFICATION=<token> npm run verify:file` and commit the generated `public/google<token>.html`.
3. Submit `https://rennonuroktaviano.vercel.app/sitemap.xml` (16 URLs).
4. URL Inspection → **Request Indexing** for `/`, `/about` and one locale path.
5. Repeat in Bing Webmaster Tools (import the GSC property, submit the same sitemap). IndexNow is already wired up, and Bing is the engine that actually consumes it.

#### Automated variant (`npm run gsc`)

The steps above can be scripted. One browser step is needed once, to create Google OAuth credentials:

1. [Google Cloud console](https://console.cloud.google.com) → create a project.
2. Enable the **Search Console API** and the **Indexing API** for that project.
3. Credentials → **OAuth client ID** → application type *Web application* → authorised redirect URI `http://127.0.0.1:8765`.
4. Save them as `.gsc-credentials.json` (git-ignored):

```json
{
  "client_id": "....apps.googleusercontent.com",
  "client_secret": "....",
  "api_key": "...."
}
```

`npm run gsc` then lists the properties, adds the URL-prefix property, submits `sitemap.xml` and requests indexing for every URL in the sitemap. The OAuth token is cached in `.gsc-token.json`, so the browser step is only needed once.

### GitHub profile automation (`npm run github:profile`)

The GitHub profile is the strongest crawl path for a new domain, so the portfolio link lives in the profile README. `npm run github:profile` keeps it in sync:

- sets the display name and the profile website (needs a token with the `user` scope — a classic PAT with `user` + `repo` works, or the token that the git credential manager already stores),
- adds the portfolio badge, the portfolio link in the ABOUT ME box, a featured-project entry and a CONTACT badge to the profile README.

The script is idempotent — running it twice does not duplicate anything. Use `-- --dry-run` to preview the changes.

### Custom domain

No code change is needed — only env vars and Vercel settings.

1. Add the domain in Vercel (Project → Settings → Domains) and point the DNS record at Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the new origin, so canonical URLs, sitemap, robots and JSON-LD all point at it.
3. Set `CANONICAL_REDIRECT_ORIGIN` to the same origin, so the old `vercel.app` host permanently redirects to it (home, locales, `/about`, `/projects`, `/sitemap.xml`, `/robots.txt`). The redirect is read at build time, so the variable has to be present when the project is built — on Vercel, changing an env var triggers a fresh deployment.
4. Redeploy, then verify the old host returns `308` and the new host serves the canonical tags.

### Off-site checklist for name searches

On-page signals are only half of it; the rest is what other sites say about the name.

- GitHub profile: fix the display name (it was misspelled as `RennoNurOktavinao`), set the **Website** field to the live portfolio, and add a portfolio badge to the profile README. GitHub is the strongest crawl path for a new domain.
- Repository READMEs: link the live site at the top of `portofolio` — a plain link from an already-indexed page is what triggers the first crawl.
- LinkedIn: headline `Full-Stack Developer`, the About section states the location (Indonesia) and the stack, and the Featured/website field links the portfolio.
- X / Twitter: the display name should read "Renno Nur Oktaviano" — currently the handle is `@rennuroktavW` while GitHub is `@rennonuroktaviano-W`; keeping the display name identical across both matters more than the handle. Put the portfolio URL in the bio.
- Keep the handle consistent wherever possible, and make sure every profile links back to `https://rennonuroktaviano.vercel.app`.

## Feedback loop

Content lives entirely in `data/`. Edit it to make the city yours; the scenes render whatever you type.

Deploy on Vercel with a single `git push` — the site is fully static plus one lightweight contact handler.
