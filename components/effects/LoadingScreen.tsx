"use client";

import { useEffect, useState } from "react";
import { GothamSkyline } from "@/components/effects/GothamSkyline";
import { RainLayer } from "@/components/effects/RainLayer";
import { Searchlight } from "@/components/effects/Searchlight";
import { Vignette } from "@/components/effects/Vignette";
import { gsap, ScrollTrigger } from "@/lib/motion";
import { site } from "@/data/site";

const CAPTIONS = [
  "NEXT.JS + TYPESCRIPT",
  "REACT · LARAVEL",
  "AI-ASSISTED ENGINEERING",
];

function LoadingScreenMarkup() {
  const words = site.brand.split(" ");

  return (
    <div
      data-loading-screen
      role="status"
      aria-live="polite"
      aria-label={`Loading ${site.name}'s portfolio`}
      className="fixed inset-0 z-[95] overflow-hidden bg-midnight"
    >
      <span className="sr-only">Loading portfolio…</span>

      <div
        data-loading-bar-t
        className="absolute inset-x-0 top-0 z-[60] h-[13svh] bg-black will-change-transform"
      />
      <div
        data-loading-bar-b
        className="absolute inset-x-0 bottom-0 z-[60] h-[13svh] bg-black will-change-transform"
      />

      <div className="absolute inset-0">
        <div data-loading-sky className="absolute inset-0 will-change-transform">
          <div className="absolute inset-0">
            <GothamSkyline />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="fog-layer absolute -left-1/4 bottom-[4%] h-40 w-[170vw] rounded-full opacity-50 blur-xl md:blur-3xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(140,150,165,0.2) 40%, rgba(140,150,165,0.28) 50%, rgba(140,150,165,0.14) 62%, transparent)",
            animationDuration: "14s",
          }}
        />

        <RainLayer
          startImmediately
          className="pointer-events-none absolute inset-0 z-[5] h-full w-full opacity-100"
        />

        <div
          data-loading-scan
          className="cinema-scan pointer-events-none absolute inset-x-0 z-[30] hidden h-px bg-[linear-gradient(90deg,transparent,rgba(230,184,74,0.85),transparent)]"
        />

        <Searchlight />
        <Vignette />
      </div>

      <div className="relative z-50 flex h-full flex-col items-center justify-center px-5 py-24 text-center">
        <div className="flex flex-col items-center">
          <p
            data-loading-kicker
            className="mb-3 font-mono text-[10px] uppercase tracking-[0.45em] text-gold/80 sm:text-xs"
          >
            A FULL-STACK PORTFOLIO
          </p>
          <h2
            data-loading-title
            className="loading-title flex flex-col items-center font-display text-[clamp(1.9rem,7vw,4.8rem)] font-semibold uppercase leading-[0.95] tracking-[0.04em] text-cream"
          >
            {words.map((w, i) => (
              <span key={i} data-loading-word className="block">
                {w}
              </span>
            ))}
          </h2>
          <div className="mt-4 h-5 font-mono text-[10px] uppercase tracking-[0.35em] text-gold/70 sm:text-xs">
            <span data-loading-caption className="block" />
          </div>
        </div>

        <div className="mt-8 w-56 text-center sm:w-72">
          <p
            data-loading-label
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-fog/60"
          >
            Loading · Gotham
          </p>
          <div className="mt-2 h-px w-full bg-gold/25">
            <div
              data-loading-line
              className="h-px origin-left bg-yellow will-change-transform"
            />
          </div>
          <p className="mt-2 font-mono text-lg leading-none text-cream">
            <span data-loading-pct className="text-yellow">
              0
            </span>
            <span className="text-xs text-fog/50">&#37;</span>
          </p>
        </div>
      </div>

      <div data-loading-flashes className="pointer-events-none absolute inset-0 z-[70]" />
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none absolute inset-0 z-[80]"
      />
    </div>
  );
}

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const overlay = document.querySelector<HTMLElement>("[data-loading-screen]");
    const root = document.documentElement;
    root.style.overflow = "hidden";

    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(fn, ms));
    };

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      root.style.overflow = "";
      root.dataset.loaded = "1";
      window.dispatchEvent(new CustomEvent("loading:done"));
      overlay?.classList.add("is-done");
      later(() => ScrollTrigger.refresh(), 450);
      later(() => setDone(true), 950);
    };

    const flashStrike = (x: number) => {
      window.dispatchEvent(
        new CustomEvent("lightning:strike", {
          detail: { x, seed: Math.floor(Math.random() * 1e9) },
        })
      );
      const wrap = overlay?.querySelector("[data-loading-flashes]");
      if (wrap) {
        const el = document.createElement("div");
        el.className = "lightning-flash absolute inset-0 will-change-[opacity]";
        el.style.mixBlendMode = "screen";
        el.style.background = `linear-gradient(rgba(255,255,255,0.22),rgba(255,255,255,0.22)), radial-gradient(ellipse 95% 85% at ${x}% 2%, rgba(255,255,255,0.95), rgba(228,238,255,0.4) 42%, rgba(205,220,255,0.18) 68%, rgba(190,205,245,0.08) 88%, transparent 100%)`;
        wrap.appendChild(el);
        later(() => el.remove(), 740);
      }
    };

    let tl: gsap.core.Timeline | undefined;
    const onSkip = () => {
      tl?.kill();
      finish();
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      later(finish, 250);
    } else if (!overlay) {
      later(finish, 50);
    } else {
      const barT = overlay.querySelector("[data-loading-bar-t]");
      const barB = overlay.querySelector("[data-loading-bar-b]");
      const sky = overlay.querySelector("[data-loading-sky]");
      const kicker = overlay.querySelector("[data-loading-kicker]");
      const words = overlay.querySelectorAll("[data-loading-word]");
      const title = overlay.querySelector("[data-loading-title]");
      const caption = overlay.querySelector("[data-loading-caption]");
      const scan = overlay.querySelector("[data-loading-scan]");
      const label = overlay.querySelector("[data-loading-label]");
      const line = overlay.querySelector("[data-loading-line]");
      const pct = overlay.querySelector("[data-loading-pct]");

      gsap.set(barT, { yPercent: -105 });
      gsap.set(barB, { yPercent: 105 });
      gsap.set(sky, { yPercent: 70, autoAlpha: 0, scale: 1 });
      gsap.set(kicker, { autoAlpha: 0, y: 10 });
      gsap.set(words, { y: 26, autoAlpha: 0 });
      gsap.set(title, { textShadow: "0 0 0px rgba(230,184,74,0)" });
      gsap.set(caption, { autoAlpha: 0 });
      gsap.set(label, { autoAlpha: 0 });
      gsap.set(line, { scaleX: 0 });

      const counter = { v: 0 };

      const setCaption = (i: number) => {
        if (caption) caption.textContent = CAPTIONS[i]!;
      };

      tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(barT, { yPercent: 0, duration: 0.8 }, 0.12)
        .to(barB, { yPercent: 0, duration: 0.8 }, 0.12)
        .to(sky, { yPercent: 0, autoAlpha: 1, duration: 1.3 }, 0.15)
        .add(() => flashStrike(14 + Math.random() * 22), 0.5)
        .to(kicker, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.9)
        .to(words, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.34 }, 1.2)
        .to(
          title,
          {
            textShadow: "0 0 44px rgba(230,184,74,0.62)",
            duration: 2.4,
            ease: "sine.inOut",
          },
          1.7
        )
        .add(() => setCaption(0), 2.7)
        .to(caption, { autoAlpha: 1, duration: 0.35 }, 2.75)
        .add(() => setCaption(1), 3.4)
        .add(() => setCaption(2), 4.1)
        .to(sky, { scale: 1.18, duration: 1.8, ease: "power1.inOut" }, 3.5)
        .add(() => {
          if (scan) {
            scan.classList.remove("hidden");
            scan.classList.add("cinema-scan-run");
          }
        }, 4.2)
        .add(() => flashStrike(62 + Math.random() * 22), 4.35)
        .to(label, { autoAlpha: 1, duration: 0.4 }, 2.55)
        .to(pct, { autoAlpha: 1, duration: 0.4 }, 2.55)
        .to(line, { scaleX: 1, duration: 4.35, ease: "none" }, 2.55)
        .to(
          counter,
          {
            v: 100,
            duration: 4.35,
            ease: "none",
            onUpdate: () => {
              if (pct)
                pct.textContent = String(
                  Math.max(0, Math.min(100, Math.round(counter.v)))
                );
            },
          },
          2.55
        )
        .add(() => flashStrike(34 + Math.random() * 18), 6.2)
        .to(title, { opacity: 0.62, duration: 0.07, yoyo: true, repeat: 4 }, 6.6)
        .add(() => flashStrike(50), 6.92)
        .add(() => finish(), 7.0);
    }

    window.addEventListener("pointerdown", onSkip, { once: true, passive: true });
    window.addEventListener("keydown", onSkip, { once: true, passive: true });

    return () => {
      tl?.kill();
      timers.forEach((t) => window.clearTimeout(t));
      root.style.overflow = "";
      window.removeEventListener("pointerdown", onSkip);
      window.removeEventListener("keydown", onSkip);
    };
  }, []);

  if (done) return null;

  return <LoadingScreenMarkup />;
}