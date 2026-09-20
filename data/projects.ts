import { site } from "@/data/site";

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
    gallery: [{ src: "/images/projects/casebreak/cover.svg", alt: "CASEBREAK dashboard preview" }],
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
    gallery: [{ src: "/images/projects/kodeledger/cover.svg", alt: "KodeLedger API docs preview" }],
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
      { label: "live", url: site.url },
    ],
    gallery: [{ src: "/images/projects/weathermono/cover.svg", alt: "WeatherMono offline forecast preview" }],
  },
];