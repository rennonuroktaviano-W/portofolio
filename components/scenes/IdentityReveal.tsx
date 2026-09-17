"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";
import { site } from "@/data/site";
import { gsap, usePrefersReducedMotion } from "@/lib/motion";

export function IdentityReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage || reduced) return;

    const mm = gsap.matchMedia();
    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const isCompact = window.matchMedia("(max-width: 767px)").matches;
        const windowStart = isCompact ? 0.6 : 0.34;

        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=110%",
              scrub: 1,
              pin: stage,
              anticipatePin: 1,
            },
          });

          tl.fromTo(
            ".identity-window",
            { scale: windowStart, autoAlpha: 0.25 },
            { scale: 1, autoAlpha: 1, ease: "power1.inOut", duration: 1 }
          )
            .fromTo(
              "[data-panel-left]",
              { x: -90, autoAlpha: 0 },
              { x: 0, autoAlpha: 1, duration: 0.7 },
              0.25
            )
            .fromTo(
              "[data-panel-right]",
              { x: 90, autoAlpha: 0 },
              { x: 0, autoAlpha: 1, duration: 0.7 },
              0.32
            );
        }, section);

        return () => ctx.revert();
      }
    );

    return () => mm.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="scene-identity"
      aria-labelledby="identity-title"
      className="scene"
      style={{ minHeight: "110svh" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,#08090b,#111318_70%,#08090b)]"
      />
      <div
        ref={stageRef}
        className="scene-inner grid h-svh items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="max-w-xl" data-panel-left>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-gold">
            scene 02 · introduction
          </p>
          <h2
            id="identity-title"
            className="font-display text-4xl font-semibold uppercase leading-[0.95] text-cream sm:text-5xl"
          >
            So the city asks…
            <span className="block text-outline-gold">
              who&apos;s behind the lights?
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-fog sm:text-lg">
            {profile.shortBio}
          </p>
          <p className="mt-4 max-w-md border-l-2 border-yellow/50 pl-4 font-mono text-sm text-cream/80">
            {profile.positioning}
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm" data-panel-right>
          <div className="identity-window comic-panel paper-sheet relative aspect-[4/5] origin-center will-change-transform overflow-hidden">
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
              <span className="bg-midnight px-2 py-0.5 text-cream">
                {profile.caseNumber}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}