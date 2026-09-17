import Link from "next/link";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-svh flex-col items-center justify-center gap-6 overflow-hidden bg-midnight px-6 text-center"
      style={{ colorScheme: "dark" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,#08090b_0%,#111827_46%,#0b0d14_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-10 h-40 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(230,184,74,0.10),transparent_70%)]" />

      <div className="relative">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-gold">
          dead end — lost in the rain
        </p>
        <p
          className="mt-4 font-mono text-[clamp(4rem,18vw,10rem)] font-bold leading-none text-blood"
          aria-hidden="true"
          style={{ textShadow: "0 0 40px rgba(216,58,58,0.35)" }}
        >
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold uppercase text-cream sm:text-4xl">
          This street doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-fog">
          The address you punched in leads nowhere in {site.city}. Head back to
          the plaza before the fog closes in.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-3 border border-yellow/60 bg-yellow/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-yellow transition-colors hover:bg-yellow hover:text-midnight"
        >
          back to the plaza →
        </Link>
      </div>
    </main>
  );
}