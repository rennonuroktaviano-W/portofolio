"use client";

import { useEffect, useRef } from "react";

type Drop = {
  x: number;
  y: number;
  len: number;
  speed: number;
  wind: number;
  opacity: number;
  layer: "back" | "front";
};

type Ripple = { x: number; y: number; r: number; alpha: number };

export function RainLayer({
  className,
  startImmediately = false,
}: {
  className?: string;
  startImmediately?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let reduceNow = false;
    let drops: Drop[] = [];
    const ripples: Ripple[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    const makeDrop = (layer: "back" | "front"): Drop =>
      layer === "back"
        ? {
            x: Math.random() * width,
            y: Math.random() * height,
            len: 8 + Math.random() * 8,
            speed: 300 + Math.random() * 220,
            wind: -80 - Math.random() * 80,
            opacity: 0.16 + Math.random() * 0.24,
            layer,
          }
        : {
            x: Math.random() * width,
            y: Math.random() * height,
            len: 16 + Math.random() * 20,
            speed: 420 + Math.random() * 340,
            wind: -110 - Math.random() * 90,
            opacity: 0.35 + Math.random() * 0.5,
            layer,
          };

    const rescale = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const density = width < 768 ? 60 : width < 1440 ? 180 : 280;
      const backCount = Math.round(density * 0.55);
      drops = [
        ...Array.from({ length: backCount }, () => makeDrop("back")),
        ...Array.from({ length: density - backCount }, () => makeDrop("front")),
      ];
    };

    const drawDrop = (d: Drop, dt: number) => {
      d.x += d.wind * dt;
      d.y += d.speed * dt;
      if (d.y > height + 20 || d.x < -40) {
        Object.assign(d, makeDrop(d.layer), { x: Math.random() * width });
        return;
      }
      ctx.lineWidth = d.layer === "back" ? 0.75 : 1.4;
      ctx.globalAlpha = d.opacity;
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - d.wind * 0.045, d.y - d.len);
      ctx.stroke();
    };

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(190,200,214,1)";

      for (let i = 0; i < drops.length; i++) {
        drawDrop(drops[i]!, dt);
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i]!;
        r.r += 34 * dt;
        r.alpha -= 1.1 * dt;
        if (r.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = Math.max(0, r.alpha) * 0.5;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(r.x, r.y, r.r, r.r * 0.35, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    let last = performance.now();
    const loop = (now: number) => {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      draw(dt);
      raf = requestAnimationFrame(loop);
    };

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "touch") return;
      ripples.push({ x: e.clientX, y: e.clientY, r: 2, alpha: 1 });
    };

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduceNow) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        rescale();
      }, 200);
    };

    const reduceWatch = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onReduce = (e: MediaQueryListEvent) => {
      reduceNow = e.matches;
      if (e.matches) {
        running = false;
        cancelAnimationFrame(raf);
        ctx.clearRect(0, 0, width, height);
      } else {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };

    let clean = () => {};
    let cleanExtra = () => {};

    const run = () => {
      rescale();
      last = performance.now();
      raf = requestAnimationFrame(loop);
      window.addEventListener("resize", onResize);
      window.addEventListener("pointerdown", onPointer, { passive: true });
      document.addEventListener("visibilitychange", onVis);
      reduceWatch.addEventListener("change", onReduce);
      clean = () => {
        running = false;
        cancelAnimationFrame(raf);
        window.clearTimeout(resizeTimer);
        window.removeEventListener("resize", onResize);
        window.removeEventListener("pointerdown", onPointer);
        document.removeEventListener("visibilitychange", onVis);
        reduceWatch.removeEventListener("change", onReduce);
      };
    };

    if (
      startImmediately ||
      document.documentElement.dataset.loaded === "1"
    ) {
      run();
    } else {
      const onLoaded = () => run();
      window.addEventListener("loading:done", onLoaded, { once: true });
      cleanExtra = () => window.removeEventListener("loading:done", onLoaded);
    }

    return () => {
      clean();
      cleanExtra();
    };
  }, [startImmediately]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={
        className ?? "pointer-events-none fixed inset-0 z-20 h-full w-full opacity-90"
      }
    />
  );
}