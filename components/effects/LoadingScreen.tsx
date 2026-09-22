"use client";

import { useEffect } from "react";
import { GothamSkyline } from "@/components/effects/GothamSkyline";
import { RainLayer } from "@/components/effects/RainLayer";
import { Searchlight } from "@/components/effects/Searchlight";
import { Vignette } from "@/components/effects/Vignette";
import { gsap, ScrollTrigger } from "@/lib/motion";
import { site } from "@/data/site";

export function LoadingScreenMarkup() {
  const chars = Array.from(site.brand);

  return (
    <div
      data-loading-screen
      role="status"
      aria-live="polite"
      aria-label={`Loading ${site.name}'s portfolio`}
      className="fixed inset-0 z-[95] overflow-hidden bg-midnight"
    >
      <span className="sr-only">Loading portfolio…</span>

      <div className="absolute inset-0">
        <div data-loading-sky className="absolute inset-0 will-change-transform">
          <div className="absolute inset-0">
            <GothamSkyline />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="fog-layer absolute -left-1/4 bottom-[4%] h-40 w-[170vw] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(140,150,165,0.2) 40%, rgba(140,150,165,0.28) 50%, rgba(140,150,165,0.14) 62%, transparent)",
            animationDuration: "14s",
          }}
        />

        <RainLayer className="pointer-events-none absolute inset-0 z-[5] h-full w-full opacity-100" />
        <Searchlight />
        <Vignette />
      </div>

      <div className="relative z-50 flex h-full flex-col items-center justify-center px-5 pb-10 text-center">
        <div
          data-loading-signal
          className="pointer-events-none absolute left-1/2 top-[9%] -translate-x-1/2"
        >
          <div className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
            <div className="loading-pulse absolute inset-0 rounded-full border border-gold/50" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(230,184,74,0.28),rgba(230,184,74,0.06)_60%,transparent_74%)] blur-md" />
            <span className="relative font-mono text-lg font-bold tracking-[0.2em] text-yellow sm:text-xl">
              RN
            </span>
          </div>
        </div>

        <div
          role="presentation"
          className="min-h-[1.4em] font-mono text-[11px] uppercase tracking-[0.35em] text-gold/80 sm:text-xs"
        >
          <span data-loading-line className="block" />
        </div>

        <h2
          data-loading-title
          className="loading-title mt-3 font-display text-[clamp(1.7rem,6.5vw,4.4rem)] font-semibold uppercase leading-[0.95] tracking-[0.06em] text-cream"
          style={{ textShadow: "0 0 24px rgba(230,184,74,0.35)" }}
        >
          {chars.map((c, i) => (
            <span key={i} data-loading-char className="inline-block">
              {c === " " ? "\u00A0" : c}
            </span>
          ))}
        </h2>

        <div className="mt-7 w-56 sm:w-80">
          <div className="h-px w-full bg-gold/25">
            <div
              data-loading-bar
              className="h-px origin-left bg-yellow will-change-transform"
            />
          </div>
          <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-fog/70">
            <span>system boot</span>
            <span>
              <span data-loading-pct className="text-gold">
                0
              </span>
              &#37;
            </span>
          </div>
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

const LINES = [
  "// ACCESSING CITYSCAPE",
  "// SYNCING SYSTEMS",
  "// CALIBRATING BEACON",
];
const FINAL = "ENTERING RENNO NUR OKTAVIANO";

export function LoadingScreenEffect() {
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
      window.dispatchEvent(new CustomEvent("loading:done"));
      overlay?.classList.add("is-done");
      later(() => ScrollTrigger.refresh(), 450);
      later(() => overlay?.classList.add("is-hidden"), 1050);
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
      const sky = overlay.querySelector("[data-loading-sky]");
      const chars = overlay.querySelectorAll("[data-loading-char]");
      const line = overlay.querySelector("[data-loading-line]");
      const bar = overlay.querySelector("[data-loading-bar]");
      const pct = overlay.querySelector("[data-loading-pct]");
      const signal = overlay.querySelector("[data-loading-signal]");

      gsap.set(sky, { yPercent: 70, autoAlpha: 0 });
      gsap.set(chars, { y: 26, autoAlpha: 0 });
      gsap.set(bar, { scaleX: 0 });
      gsap.set(line, { autoAlpha: 0 });
      gsap.set(signal, { autoAlpha: 0, scale: 0.7 });

      const counter = { v: 0 };
      tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(sky, { yPercent: 0, autoAlpha: 1, duration: 1.15 }, 0.05)
        .add(() => flashStrike(14 + Math.random() * 22), 0.5)
        .to(chars, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.05 }, 1.1)
        .add(() => {
          if (line) line.textContent = LINES[0]!;
        }, 1.5)
        .to(line, { autoAlpha: 1, duration: 0.12 }, 1.52)
        .add(() => {
          if (line) line.textContent = LINES[1]!;
        }, 1.78)
        .add(() => {
          if (line) line.textContent = LINES[2]!;
        }, 2.04)
        .add(() => {
          if (line) {
            line.textContent = FINAL;
            line.classList.remove("text-gold/80");
            line.classList.add("text-gold");
          }
        }, 2.3)
        .to(
          bar,
          { scaleX: 1, duration: 1.15, ease: "power2.inOut" },
          1.9
        )
        .to(
          counter,
          {
            v: 100,
            duration: 1.15,
            ease: "power2.inOut",
            onUpdate: () => {
              if (pct)
                pct.textContent = String(
                  Math.min(100, Math.max(0, Math.round(counter.v)))
                );
            },
          },
          1.9
        )
        .add(() => flashStrike(68 + Math.random() * 22), 2.6)
        .to(signal, { autoAlpha: 1, scale: 1, duration: 0.7 }, 2.55)
        .add(() => flashStrike(38 + Math.random() * 16), 3.1)
        .add(() => finish(), 3.18);
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

  return null;
}