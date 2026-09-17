"use client";

import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { GothamSkyline } from "@/components/effects/GothamSkyline";
import { gsap, usePrefersReducedMotion, useReveals } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/provider";

export function FinalScene() {
  const sectionRef = useReveals<HTMLElement>();
  const skyRef = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const { t } = useI18n();

  useEffect(() => {
    const section = sectionRef.current;
    const sky = skyRef.current;
    if (!section || !sky || reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sky,
        { scale: 1.28, y: 70 },
        {
          scale: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        "[data-final-copy]",
        { autoAlpha: 0, y: 42 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 55%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reduced, sectionRef]);

  return (
    <section
      ref={sectionRef}
      id="scene-final"
      aria-labelledby="final-title"
      className="scene"
      style={{ minHeight: "100svh" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,#08090b_0%,#111827_60%,#0a0c12_100%)]"
      />
      <div
        ref={skyRef}
        className="absolute inset-0 will-change-transform"
        aria-hidden="true"
      >
        <GothamSkyline />
      </div>
      <div
        data-final-copy
        className="scene-inner relative z-20 flex min-h-svh flex-col items-center justify-end pb-40 pt-24 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-gold">
          {t("final.closing")}
        </p>
        <h2
          id="final-title"
          className="mt-4 max-w-2xl font-display text-3xl font-semibold uppercase leading-none tracking-tight text-cream sm:text-5xl"
        >
          {t("final.title1")}
          <span className="block text-outline-gold">{t("final.title2")}</span>
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-fog">
          {t("final.para")}
        </p>

        <a
          href="#scene-hero"
          className="group mt-10 inline-flex items-center gap-3 border border-cream/30 bg-midnight/60 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-cream transition-colors hover:border-yellow hover:text-yellow"
        >
          <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
            ⟲
          </span>
          {t("final.returnLabel")}
        </a>

        <dl
          aria-label={t("final.credits.aria")}
          className="mt-16 grid max-w-md grid-cols-3 gap-4 font-mono text-[9px] uppercase tracking-widest text-fog/70"
        >
          <div>
            <dt>{t("final.credits.builtIn")}</dt>
            <dd className="mt-1 text-cream">{site.city}</dd>
          </div>
          <div>
            <dt>{t("final.credits.designed")}</dt>
            <dd className="mt-1 text-cream">{t("final.credits.designedValue")}</dd>
          </div>
          <div>
            <dt>{t("final.credits.poweredBy")}</dt>
            <dd className="mt-1 text-cream">Next.js</dd>
          </div>
        </dl>
        <p className="mt-8 font-mono text-[9px] uppercase tracking-widest text-fog/50">
          {t("final.footer", {
            year: String(new Date().getFullYear()),
            name: site.name,
          })}
        </p>
      </div>
    </section>
  );
}