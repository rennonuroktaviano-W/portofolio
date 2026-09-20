"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { GothamSkyline } from "@/components/effects/GothamSkyline";
import { Vignette } from "@/components/effects/Vignette";
import { gsap, usePrefersReducedMotion } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/provider";

export function HeroCityScene() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const { t } = useI18n();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from("[data-hero-item]", {
          y: 34,
          autoAlpha: 0,
          stagger: 0.14,
          duration: 0.9,
        })
        .fromTo(
          ".light-sweep",
          { xPercent: -170 },
          { xPercent: 170, duration: 1.15, ease: "power2.inOut" },
          "-=0.75"
        );

      gsap.fromTo(
        ".city-stage",
        { scale: 0.92, y: 30 },
        {
          scale: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "45% top",
            scrub: true,
          },
        }
      );

      gsap.to(".gotham-front", {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".gotham-back", {
        y: 55,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-hero-copy]", {
        yPercent: -34,
        autoAlpha: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "60% top",
          scrub: true,
        },
      });

      gsap.to("[data-scroll-cue]", {
        autoAlpha: 0,
        y: 16,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "12% top",
          end: "30% top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
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
        <div
          aria-hidden="true"
          className="light-sweep absolute inset-0 z-[5] bg-[linear-gradient(105deg,transparent_42%,rgba(230,184,74,0.16)_50%,transparent_58%)]"
        />

        <div className="city-stage absolute inset-0 will-change-transform">
          <div className="absolute inset-0 flex items-end justify-center pb-[12vh]">
            <p
              data-comic-target
              className="select-none whitespace-nowrap font-mono text-[clamp(0.7rem,1.6vw,1.3rem)] uppercase tracking-[0.55em] text-yellow/70"
            >
              {site.city}
            </p>
          </div>
          <GothamSkyline />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,9,11,0.55)_0%,transparent_45%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,rgba(8,9,11,0.85),transparent_100%)]"
        />

        <Vignette />
      </div>

      <div
        data-hero-copy
        className="scene-inner relative z-20 flex min-h-svh flex-col items-center justify-end pb-28 text-center will-change-transform sm:justify-center sm:pb-0"
      >
        <p
          className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-gold"
          data-hero-item
        >
          {t("hero.cityLine", { city: site.city })}
        </p>
        <h1
          id="hero-title"
          className="mx-auto max-w-4xl font-display text-[clamp(2.8rem,10vw,7.5rem)] font-semibold uppercase leading-[0.9] tracking-tight text-cream"
          data-hero-item
        >
          <span className="block text-glow-yellow">{site.brand}</span>
          <span className="block text-outline">{t("hero.role")}</span>
        </h1>
        <p
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-fog sm:text-lg"
          data-hero-item
        >
          {t("hero.tagline")}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6" data-hero-item>
          <motion.div
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 24 }}
            className="inline-flex"
          >
            <a
              href="#scene-about"
              className="group inline-flex items-center gap-3 border border-yellow/60 bg-yellow/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-yellow transition-colors hover:bg-yellow hover:text-midnight"
            >
              {t("hero.enterArchive")}
              <span
                aria-hidden="true"
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </motion.div>
          <a
            href="#scene-identity"
            className="font-mono text-xs uppercase tracking-[0.3em] text-fog transition-colors hover:text-cream"
          >
            {t("hero.readOn")}
          </a>
        </div>
      </div>

      <div
        data-scroll-cue
        className="absolute inset-x-0 bottom-6 z-30 flex justify-center"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 text-fog transition-colors hover:text-cream"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M12 2a6 6 0 0 1 6 6v8a6 6 0 0 1-12 0V8a6 6 0 0 1 6-6Z" />
          <circle className="scroll-dot" cx="12" cy="8" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      </div>
    </section>
  );
}