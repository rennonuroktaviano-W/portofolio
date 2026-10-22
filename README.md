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
  [locale]/page.tsx     localized home: /id /es /fr /de /ja (SSG, hreflang, canonical)
  projects/             Case Files index + one static detail page per case study
  not-found.tsx         404 view (noindex, follow)
  robots.ts sitemap.ts manifest.ts   metadata routes
  api/contact/route.ts  contact handler (noindex, no-store)
components/
  PortfolioHome.tsx     locale provider + WebPage JSON-LD
  PortfolioPage.tsx     scene composition
  scenes/               scene components
  ui/                   headers, indicators, language switcher, 404 view
  nft/                  lightbox + artwork cover
  projects/             case-file navigation + footer
  effects/              rain, fog, grain, skyline, cursor spotlight, easter eggs
data/           typed content layer (site, seo, profile, skills, projects, experience, socials)
lib/            scene definitions, GSAP motion helpers, SEO helpers, i18n provider
public/
  images/projects/<slug>/cover.svg   original case-cover art (+ generated .png)
  og/cover.svg                        social share banner (+ generated cover.png)
scripts/
  generate-og-images.mjs  rasterises the SVG artwork to PNG via sharp
```

## Content model

Content lives entirely in `data/`. Edit it to make the city yours; the scenes render whatever you type. `data/site.ts` holds the brand, the canonical URL and the keyword list, `data/seo.ts` holds the per-locale titles and descriptions, `data/projects.ts` holds the case files that feed `/projects`.

## SEO / technical notes

- **Canonical + hreflang**: every localized home page emits a self-referencing canonical and a reciprocal hreflang cluster (`en`, `id`, `es`, `fr`, `de`, `ja`, plus `x-default` → English root). English lives at `/`, so `/en` is a 308 redirect to `/`.
- **Static rendering**: `/`, all locale homes, `/projects` and every case file are prerendered at build time; only `/api/contact` is dynamic.
- **Structured data**: `Person` + `WebSite` in the root layout, `WebPage` per locale, `CreativeWork` + `BreadcrumbList` per case file.
- **Crawlers**: `robots.txt` allows everything except `/api/`; `/api/*` responses also carry `X-Robots-Tag: noindex, nofollow` and `Cache-Control: no-store`; the 404 page is `noindex`.
- **Social**: Open Graph and Twitter cards point at the PNG version of the artwork (`/og/cover.png`, 1200×630) because most platforms do not render SVG.
- **Performance**: `next/image` with AVIF/WebP, `optimizePackageImports` for framer-motion and lucide-react, a compressed intro sequence and a session-scoped skip of the loading screen so the hero paints immediately on repeat visits.

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | recommended | Canonical origin used for metadata, sitemap, robots and JSON-LD. Defaults to the production Vercel URL. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | optional | Value of the Search Console HTML-tag verification token; rendered as `<meta name="google-site-verification">`. |
| `CANONICAL_REDIRECT_ORIGIN` | optional | Extra host that permanently redirects to the canonical origin (useful while a custom domain is being migrated). Disabled when unset. |

### Search Console checklist

1. Deploy with `NEXT_PUBLIC_SITE_URL` set to the final domain.
2. Add the property in Search Console and paste the HTML-tag token into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (or keep using DNS verification, which needs no code change).
3. Submit `https://<domain>/sitemap.xml` — the sitemap lists the six localized homes, `/projects`, and every case file.
4. Use the URL Inspection tool on the root and one locale path to request indexing.
5. Watch Core Web Vitals (LCP/INP/CLS) in the Page Insights report; the loading screen is skipped on repeat visits, so the hero is the LCP element.

## Feedback loop

Content lives entirely in `data/`. Edit it to make the city yours; the scenes render whatever you type.

Deploy on Vercel with a single `git push` — the site is fully static plus one lightweight contact handler.
