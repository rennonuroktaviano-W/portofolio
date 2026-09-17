"use client";

import { site } from "@/data/site";
import { Skyline } from "@/components/ui/Skyline";

export function FinalScene() {
  return (
    <section
      id="scene-final"
      aria-labelledby="final-title"
      className="scene"
      style={{ minHeight: "100svh" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,#08090b_0%,#111827_60%,#0a0c12_100%)]"
      />
      <Skyline />
      <div className="scene-inner relative z-20 flex min-h-svh flex-col items-center justify-end pb-40 pt-24 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-gold">
          closing caption
        </p>
        <h2
          id="final-title"
          className="mt-4 max-w-2xl font-display text-3xl font-semibold uppercase leading-none tracking-tight text-cream sm:text-5xl"
        >
          The city dims its lights.
          <span className="block text-outline-gold">The work keeps going.</span>
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-fog">
          Every scene on this page is a real build, a real lesson, or a real
          scar. Thanks for walking the streets.
        </p>

        <a
          href="#scene-hero"
          className="group mt-10 inline-flex items-center gap-3 border border-cream/30 bg-midnight/60 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-cream transition-colors hover:border-yellow hover:text-yellow"
        >
          <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
            ⟲
          </span>
          Return to the beginning
        </a>

        <dl
          aria-label="Site credits"
          className="mt-16 grid max-w-md grid-cols-3 gap-4 font-mono text-[9px] uppercase tracking-widest text-fog/70"
        >
          <div>
            <dt>built in</dt>
            <dd className="mt-1 text-cream">{site.city}</dd>
          </div>
          <div>
            <dt>designed</dt>
            <dd className="mt-1 text-cream">the rain</dd>
          </div>
          <div>
            <dt>powered by</dt>
            <dd className="mt-1 text-cream">Next.js</dd>
          </div>
        </dl>
        <p className="mt-8 font-mono text-[9px] uppercase tracking-widest text-fog/50">
          © {new Date().getFullYear()} {site.name} — no capes were used.
        </p>
      </div>
    </section>
  );
}