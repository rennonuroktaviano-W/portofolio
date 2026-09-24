"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { Searchlight } from "@/components/effects/Searchlight";
import { LanyardBadge } from "@/components/scenes/LanyardBadge";
import { gsap, usePrefersReducedMotion } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/provider";

export function IdentityReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const { t } = useI18n();

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
              pin: isCompact ? false : stage,
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
        ref={stageRef}
        className="scene-inner grid h-svh items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="max-w-xl" data-panel-left>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-gold">
            {t("identity.intro")}
          </p>
          <h2
            id="identity-title"
            className="font-display text-4xl font-semibold uppercase leading-[0.95] text-cream sm:text-5xl"
          >
            {t("identity.titleAsk")}
            <span className="block text-outline-gold">
              {t("identity.titleWho")}
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-fog sm:text-lg">
            {t("profile.shortBio")}
          </p>
          <p className="mt-4 max-w-md border-l-2 border-yellow/50 pl-4 font-mono text-sm text-cream/80">
            {t("profile.positioning")}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm" data-panel-right>
          <Searchlight />
          <LanyardBadge>
            <div className="identity-window comic-panel paper-sheet relative z-10 aspect-[4/5] origin-center will-change-transform overflow-hidden bg-[radial-gradient(circle_at_50%_35%,#1b1e26,#0d0f14_70%)]">
              <Image
                src={profile.photo}
                alt={t("identity.devProfile")}
                fill
                priority
                sizes="(min-width: 1024px) 25rem, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,9,11,0.78),rgba(8,9,11,0.1)_45%,rgba(8,9,11,0.22))]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 halftone opacity-[0.12]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-2 z-10 border border-cream/25"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-2 top-2 z-10 h-5 w-5 border-l-2 border-t-2 border-gold"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-2 top-2 z-10 h-5 w-5 border-r-2 border-t-2 border-gold"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-2 left-2 z-10 h-5 w-5 border-b-2 border-l-2 border-gold"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-2 right-2 z-10 h-5 w-5 border-b-2 border-r-2 border-gold"
              />
              <div className="absolute inset-x-3 bottom-3 z-20 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-midnight">
                <span className="bg-yellow px-2 py-0.5">{t("identity.devProfile")}</span>
                <span className="bg-midnight px-2 py-0.5 text-cream">
                  {profile.caseNumber}
                </span>
              </div>
            </div>
          </LanyardBadge>
        </div>
      </div>
    </section>
  );
}