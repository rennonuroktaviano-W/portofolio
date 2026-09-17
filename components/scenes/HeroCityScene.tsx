"use client";

import { site } from "@/data/site";
import { Skyline } from "@/components/ui/Skyline";
import { Vignette } from "@/components/effects/Vignette";

export function HeroCityScene() {
  return (
    <section
      id="scene-hero"
      aria-labelledby="hero-title"
      className="scene"
      style={{ minHeight: "100svh" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,#08090b_0%,#111827_46%,#0b0d14_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(230,184,74,0.10),transparent_70%)]"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-[12vh]">
          <p className="select-none whitespace-nowrap font-mono text-[clamp(0.7rem,1.6vw,1.3rem)] uppercase tracking-[0.55em] text-yellow/70">
            {site.city}
          </p>
        </div>
        <Skyline />
        <Vignette />
      </div>

      <div className="scene-inner relative z-20 flex min-h-svh flex-col justify-end pb-28 sm:justify-center sm:pb-0">
        <p
          className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-gold"
          data-hero-item
        >
          {site.city} · a rainy metropolis of interfaces
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-display text-[clamp(2.8rem,10vw,7.5rem)] font-semibold uppercase leading-[0.9] tracking-tight text-cream"
          data-hero-item
        >
          <span className="block text-glow-yellow">{site.brand}</span>
          <span className="block text-outline">{site.role}</span>
        </h1>
        <p
          className="mt-6 max-w-xl text-sm leading-relaxed text-fog sm:text-lg"
          data-hero-item
        >
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6" data-hero-item>
          <a
            href="#scene-archive"
            className="group relative inline-flex items-center gap-3 border border-yellow/60 bg-yellow/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-yellow transition-colors hover:bg-yellow hover:text-midnight"
          >
            ENTER THE ARCHIVE
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="#scene-identity"
            className="font-mono text-xs uppercase tracking-[0.3em] text-fog transition-colors hover:text-cream"
          >
            Read on —
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-30 flex justify-center">
        <div className="border border-cream/20 bg-midnight/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.35em] text-fog">
          scroll to descend
        </div>
      </div>
    </section>
  );
}