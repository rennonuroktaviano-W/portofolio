"use client";

import { useEffect, useRef } from "react";

export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const finePtr = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePtr.matches || reduced.matches) return;

    let x = window.innerWidth / 2;
    let y = 320;
    let raf = 0;
    el.style.display = "block";

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const loop = () => {
      el.style.transform = `translate3d(${x - 170}px, ${y - 170}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", move, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[15] hidden h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(230,184,74,0.09),rgba(230,184,74,0.035)_45%,transparent_70%)] will-change-transform"
    />
  );
}