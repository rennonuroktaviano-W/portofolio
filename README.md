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
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint (flat config)
```

> This version of Next.js is newer than most training data. Before editing Next-specific code, read the bundled docs under `node_modules/next/dist/docs/`.

## Experience

- **8 scroll scenes**, no navbar/footer: Hero → Identity Reveal → Case File → Tech Arsenal → NFT Studio → Experience Timeline → Contact → Final Night.
- **Atmosphere**: CSS grain/fog/halftone/vignette, canvas rain with click ripples, cursor spotlight on fine-pointer devices.
- **Interaction**: keyboard scene nav (↑/↓/PgUp/PgDn/Home/End), 6-language UI (en/id/es/fr/de/ja).
- **Easter eggs**: type `crt` anywhere; tap the KODECITY sign in the hero.
- **Accessibility**: `prefers-reduced-motion` honored end-to-end, labelled scenes, skip link, visible focus rings.

## Structure

```
app/            layout, page composition, metadata, manifest, robots, sitemap, /api/contact
components/
  scenes/       8 scene components
  ui/           headers, indicators, language switcher
  nft/          lightbox + artwork cover
  effects/      rain, fog, grain, skyline, cursor spotlight, easter eggs
data/           typed content layer (site, profile, skills, projects, experience, socials)
lib/            scene definitions + GSAP motion helpers
public/
  images/projects/<slug>/cover.svg   original case-cover art
  og/cover.svg                        social share banner
```

## Feedback loop

Content lives entirely in `data/`. Edit it to make the city yours; the scenes render whatever you type.

Deploy on Vercel with a single `git push` — the site is fully static plus one lightweight contact handler.