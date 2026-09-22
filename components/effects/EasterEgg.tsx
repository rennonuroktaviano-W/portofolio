"use client";

import { useEffect, useState } from "react";

const SFX = ["KRAKOOM!", "NKLE!", "CRACKLE!", "BLAM!", "BZZZT!"] as const;

type Burst = { x: number; y: number; label: string; id: number };

export function EasterEgg() {
  const [burst, setBurst] = useState<Burst | null>(null);
  const [crtFlash, setCrtFlash] = useState(false);

  useEffect(() => {
    let buffer = "";
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      buffer = (buffer + e.key.toLowerCase()).slice(-3);
      if (buffer === "crt") {
        buffer = "";
        setCrtFlash(true);
        window.setTimeout(() => setCrtFlash(false), 850);
      }
    };

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      const target = (e.target as HTMLElement | null)?.closest(
        "[data-comic-target]"
      );
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const id = Date.now();
      setBurst({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        label: SFX[Math.floor(Math.random() * SFX.length)]!,
        id,
      });
      window.setTimeout(
        () => setBurst((prev) => (prev?.id === id ? null : prev)),
        920
      );
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <>
      {crtFlash ? (
        <div
          aria-hidden="true"
          className="crt-overlay pointer-events-none fixed inset-0 z-[60]"
        />
      ) : null}
      {burst ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed z-[70]"
          style={{ left: burst.x, top: burst.y }}
        >
          <span
            className="comic-burst block -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-3xl font-black uppercase text-blood sm:text-6xl"
            style={{ textShadow: "3px 3px 0 rgba(230,184,74,0.9)" }}
          >
            {burst.label}
          </span>
        </div>
      ) : null}
    </>
  );
}