"use client";

import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { GothamSkyline } from "@/components/effects/GothamSkyline";
import { gsap, usePrefersReducedMotion, useReveals } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/provider";

type Token = { text: string; space: boolean };

function splitTokens(text: string): Token[] {
  if (/[\u3000-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/.test(text)) {
    return Array.from(text).map((ch) => ({ text: ch, space: false }));
  }
  return text.split(" ").map((word, i, arr) => ({
    text: word,
    space: i < arr.length - 1,
  }));
}

function RevealText({ text }: { text: string }) {
  const tokens = splitTokens(text);
  return (
    <>
      {tokens.map((tok, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span className="final-token inline-block will-change-transform">
            {tok.text}
            {tok.space ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </>
  );
}

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

      const tokens = gsap.utils.toArray<HTMLElement>(
        "[data-final-copy] .final-token"
      );
      gsap.fromTo(
        tokens,
        { yPercent: 115, opacity: 0, filter: "blur(6px)" },
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.045,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 62%",
            once: true,
            immediateRender: false,
          },
        }
      );

      gsap.fromTo(
        "[data-final-divider]",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 62%",
            once: true,
            immediateRender: false,
          },
        }
      );

      gsap.fromTo(
        "[data-final-kicker]",
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 62%",
            once: true,
            immediateRender: false,
          },
        }
      );

      gsap.fromTo(
        "[data-final-meta]",
        { autoAlpha: 0, y: 22 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.12,
          delay: 0.45,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 62%",
            once: true,
            immediateRender: false,
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
        ref={skyRef}
        className="absolute inset-0 will-change-transform"
        aria-hidden="true"
      >
        <GothamSkyline />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_58%_52%_at_50%_108%,rgba(230,184,74,0.15),transparent_72%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 vignette" />
      <div
        data-final-copy
        className="scene-inner relative z-20 flex min-h-svh flex-col items-center justify-end pb-40 pt-24 text-center"
      >
        <p
          data-final-kicker
          className="final-flicker font-mono text-xs uppercase tracking-[0.4em] text-gold"
        >
          {t("final.closing")}
        </p>
        <span
          data-final-divider
          aria-hidden="true"
          className="mt-5 block h-px w-44 origin-center bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)]"
        />
        <h2
          id="final-title"
          className="mt-5 max-w-2xl font-display text-3xl font-semibold uppercase leading-none tracking-tight text-cream sm:text-5xl"
        >
          <span className="block">
            <RevealText text={t("final.title1")} />
          </span>
          <span className="block text-outline-gold">
            <RevealText text={t("final.title2")} />
          </span>
        </h2>
        <p
          data-final-meta
          className="mt-6 max-w-md text-sm leading-relaxed text-fog"
        >
          {t("final.para")}
        </p>
        <p
          data-final-meta
          className="mt-12 font-mono text-[10px] uppercase tracking-widest text-fog/50"
        >
          {t("final.footer", {
            year: String(new Date().getFullYear()),
            name: site.name,
          })}
        </p>
      </div>
    </section>
  );
}