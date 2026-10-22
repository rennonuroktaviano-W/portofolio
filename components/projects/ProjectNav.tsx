import Link from "next/link";
import { site } from "@/data/site";

export function ProjectNav() {
  return (
    <header className="relative z-10 border-b border-cream/10 bg-midnight/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:text-yellow"
        >
          {site.brand}
        </Link>
        <nav aria-label="Breadcrumb" className="flex items-center gap-4">
          <Link
            href="/projects"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog transition-colors hover:text-yellow"
          >
            Case Files
          </Link>
          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold transition-colors hover:text-yellow"
          >
            ← Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function ProjectFooter() {
  return (
    <footer className="relative z-10 border-t border-cream/10 px-5 py-10 text-center sm:px-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-fog/60">
        © {new Date().getFullYear()} {site.name} — Next.js + TypeScript
      </p>
    </footer>
  );
}
