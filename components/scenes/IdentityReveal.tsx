"use client";

import { profile } from "@/data/profile";
import { site } from "@/data/site";

export function IdentityReveal() {
  return (
    <section
      id="scene-identity"
      aria-labelledby="identity-title"
      className="scene flex items-center"
      style={{ minHeight: "100svh" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,#08090b,#111318_70%,#08090b)]"
      />
      <div className="scene-inner grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-xl" data-panel-left>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-gold">
            scene 02 · introduction
          </p>
          <h2
            id="identity-title"
            className="font-display text-4xl font-semibold uppercase leading-[0.95] text-cream sm:text-5xl"
          >
            So the city asks…
            <span className="block text-outline-gold">who&apos;s behind the lights?</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-fog sm:text-lg">
            {profile.shortBio}
          </p>
          <p className="mt-4 max-w-md border-l-2 border-yellow/50 pl-4 font-mono text-sm text-cream/80">
            {profile.positioning}
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm" data-panel-right>
          <div className="comic-panel paper-sheet relative aspect-[4/5] overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_35%,#1b1e26,#0d0f14_70%)]"
            >
              <span className="font-display text-[8rem] font-semibold text-outline-gold">
                {site.initials}
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 halftone opacity-40"
              />
            </div>
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-midnight">
              <span className="bg-yellow px-2 py-0.5">DEV PROFILE</span>
              <span className="bg-midnight px-2 py-0.5 text-cream">{profile.caseNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}