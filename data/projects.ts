export type ProjectLink = { label: "github" | "live" | "article"; url: string };
export type GalleryItem = { src: string | null; alt: string };

export type Project = {
  id: string;
  slug: string;
  title: string;
  oneLiner: string;
  problem: string;
  solution: string;
  role: string;
  stack: string[];
  features: string[];
  challenge: string;
  outcome: string;
  year: string;
  status: "LIVE" | "ARCHIVED" | "IN PROGRESS";
  links: ProjectLink[];
  gallery: GalleryItem[];
};

export const projects: Project[] = [
  {
    id: "casebreak",
    slug: "casebreak",
    title: "CASEBREAK",
    oneLiner:
      "A case-management platform that turned a paper trail into a searchable evidence room.",
    problem:
      "A local agency tracked client cases in spreadsheets and printed folders. Records were duplicated, deadlines missed, and nothing was searchable.",
    solution:
      "I designed a Laravel + MySQL back office with role-based access, case status boards, deadline alerts, and a document vault with full-text search.",
    role: "Full-Stack Developer",
    stack: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js", "Docker"],
    features: [
      "Role-based dashboards for officers & admins",
      "Kanban-style case status boards",
      "Scheduled deadline reminder emails",
      "Full-text document search & tagging",
    ],
    challenge:
      "Migrating 4 years of messy legacy records without losing data was the real fight — I built a stepwise importer with dry-run validation.",
    outcome:
      "Search time dropped from minutes to seconds and the team closed out a backlog of 200+ stale cases within two months.",
    year: "2025",
    status: "LIVE",
    links: [{ label: "github", url: "https://github.com/rennonuroktaviano-W" }],
    gallery: [{ src: null, alt: "CASEBREAK dashboard preview" }],
  },
  {
    id: "kode-ledger",
    slug: "kode-ledger",
    title: "KODELEDGER",
    oneLiner:
      "A minimal double-entry bookkeeping API for a side-business invoicing pipeline.",
    problem:
      "Freelance invoicing was lost in chat apps; there was no reliable record of what was billed, paid, or overdue.",
    solution:
      "I built a Node.js + PostgreSQL service exposing a typed REST API with idempotent invoice creation, PDF generation, and payment reminders.",
    role: "Backend Developer",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Express", "BullMQ"],
    features: [
      "Idempotent invoice & payment endpoints",
      "Automated PDF invoice generation",
      "Overdue-payment reminder workers",
      "Audit log for every mutation",
    ],
    challenge:
      "Getting money math right under concurrency — I added row-level locking and a reconciliation job to keep the books exact.",
    outcome:
      "Zero lost invoices in the first quarter of use, and reminders recovered roughly a week of unpaid work.",
    year: "2025",
    status: "LIVE",
    links: [
      { label: "github", url: "https://github.com/rennonuroktaviano-W" },
    ],
    gallery: [{ src: null, alt: "KodeLedger API docs preview" }],
  },
  {
    id: "kode-street",
    slug: "kode-street",
    title: "KODESTREET",
    oneLiner:
      "This portfolio — an interactive motion-comic built with Next.js, TypeScript, and cinematic scroll storytelling.",
    problem:
      "A portfolio should feel like a place, not a PDF. Generic card grids fail to communicate craft or personality.",
    solution:
      "I built a single-page cinematic experience: CSS/canvas atmosphere layers, GSAP ScrollTrigger storytelling, and a terminal scene that actually talks back.",
    role: "Designer + Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    features: [
      "Scroll-driven scene transitions",
      "Preference-aware motion",
      "Interactive retro terminal",
      "Fully typed content data layer",
    ],
    challenge:
      "Keeping atmosphere heavy without wrecking Core Web Vitals meant drawing rain, fog, and grain with CSS + a single lightweight canvas.",
    outcome:
      "A portfolio that loads fast, reads clearly without JavaScript, and leaves visitors feeling like they walked through a city.",
    year: "2026",
    status: "LIVE",
    links: [
      { label: "github", url: "https://github.com/rennonuroktaviano-W/portofolio" },
      { label: "live", url: "https://rennonuroktaviano.dev" },
    ],
    gallery: [{ src: null, alt: "KodeStreet cinematic hero preview" }],
  },
  {
    id: "signaldesk",
    slug: "signaldesk",
    title: "SIGNALDESK",
    oneLiner:
      "A real-time support ticketing desk for a small product team drowning in message threads.",
    problem:
      "Support came through four chat channels at once; issues fell through the cracks and nobody owned a resolution.",
    solution:
      "I built a React + Vite front-end over a thin Laravel API: unified inbox, assignment rules, and a live pulse of open tickets.",
    role: "Frontend Developer",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Laravel API"],
    features: [
      "Unified inbox across support sources",
      "Auto-assignment by team availability",
      "Live ticket pulse via server-sent events",
    ],
    challenge:
      "Reconciling message ordering from multiple sources — I implemented a client-side event log with deduplication and replay.",
    outcome:
      "Median first-response time dropped from ~4 hours to under 40 minutes during business hours.",
    year: "2024",
    status: "ARCHIVED",
    links: [{ label: "github", url: "https://github.com/rennonuroktaviano-W" }],
    gallery: [{ src: null, alt: "SignalDesk unified inbox preview" }],
  },
  {
    id: "retromart",
    slug: "retromart",
    title: "RETROMART",
    oneLiner:
      "A Laravel e-commerce storefront themed around vintage tech — carts, payments, and a retro admin.",
    problem:
      "A vintage-tech reseller needed a store that felt like its catalog: playful, credible, and fast on mobile.",
    solution:
      "I delivered a full Laravel storefront with product variants, promo engine, payment gateway integration, and an admin panel for inventory.",
    role: "Full-Stack Developer",
    stack: ["Laravel", "MySQL", "Livewire", "Tailwind CSS"],
    features: [
      "Cart, checkout & payment gateway",
      "Promo codes with stacking rules",
      "Inventory management & low-stock alerts",
      "Admin reporting dashboard",
    ],
    challenge:
      "Nailing transaction safety across stock, discount, and payment states required careful queueing and idempotent order creation.",
    outcome:
      "Launched and processed hundreds of orders in the first season without a single double-charge.",
    year: "2023",
    status: "LIVE",
    links: [
      { label: "github", url: "https://github.com/rennonuroktaviano-W" },
      { label: "live", url: "https://rennonuroktaviano.dev" },
    ],
    gallery: [{ src: null, alt: "Retromart storefront preview" }],
  },
  {
    id: "weathermono",
    slug: "weathermono",
    title: "WEATHERMONO",
    oneLiner:
      "A tiny, offline-capable weather PWA in a monospace aesthetic — weather, but terminal-flavored.",
    problem:
      "I wanted a weather app that respected the reader: no trackers, no fluff, quick glanceable data on slow phones.",
    solution:
      "A PWA built with vanilla TypeScript that caches forecasts, works offline, and renders a dated mono-grid forecast map.",
    role: "Solo Developer",
    stack: ["TypeScript", "Service Worker", "CSS", "Open-Meteo API"],
    features: [
      "Offline forecast caching",
      "Monospace typeset weather grid",
      "Zero advertising & zero analytics",
    ],
    challenge:
      "Shrinking the bundle under 12 kB while keeping a real weather map rendered client-side.",
    outcome:
      "A 10 kB core app that still works when the network doesn't — a small monument to restraint.",
    year: "2023",
    status: "LIVE",
    links: [
      { label: "github", url: "https://github.com/rennonuroktaviano-W" },
      { label: "live", url: "https://rennonuroktaviano.dev" },
    ],
    gallery: [{ src: null, alt: "WeatherMono offline forecast preview" }],
  },
];