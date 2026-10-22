# KODECITY — 80s Neo-Noir Interactive Portfolio

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

### Search Console checklist

1. Deploy with `NEXT_PUBLIC_SITE_URL` set to the final domain.
2. Add the property in Search Console and paste the HTML-tag token into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (or keep using DNS verification, which needs no code change).
3. Submit `https://<domain>/sitemap.xml` — the sitemap lists the six localized homes, the six bio pages, `/projects`, and every case file (16 URLs).
4. Use the URL Inspection tool on `/`, `/about` and one locale path to request indexing. Expect "URL is unknown to Google" on a brand-new property — that is the normal state before the first crawl.
5. Watch Core Web Vitals (LCP/INP/CLS) in the Page Insights report; the loading screen is skipped on repeat visits, so the hero is the LCP element.
6. Check "Links" once the site is crawled: the bio page should be reachable from the home page and from the Case Files navigation.

### Off-site checklist for name searches

On-page signals are only half of it; the rest is what other sites say about the name.

- GitHub profile: name in the display name, the profile README, and the repo descriptions.
- LinkedIn: headline `Full-Stack Developer`, and the About section states the location (Indonesia) and the stack.
- X / Twitter: the display name should read "Renno Nur Oktaviano" — currently the handle is `@rennuroktavW` while GitHub is `@rennonuroktaviano-W`; keeping the display name identical across both matters more than the handle.
- Keep the handle consistent wherever possible, and make sure every profile links back to `https://rennonuroktaviano.vercel.app`.

## Feedback loop

Content lives entirely in `data/`. Edit it to make the city yours; the scenes render whatever you type.

Deploy on Vercel with a single `git push` — the site is fully static plus one lightweight contact handler.
