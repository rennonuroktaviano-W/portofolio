"use client";

import { useEffect, useRef } from "react";

type Drop = {
  x: number;
  y: number;
  len: number;
  speed: number;
  wind: number;
  opacity: number;
};

type Ripple = { x: number; y: number; r: number; alpha: number };

export function RainLayer() {
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
    let drops: Drop[] = [];
    const ripples: Ripple[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    const density = width < 768 ? 45 : width < 1440 ? 130 : 190;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      drops = Array.from({ length: density }, () => makeDrop());
    };

    const makeDrop = (): Drop => ({
      x: Math.random() * width,
      y: Math.random() * height,
      len: 9 + Math.random() * 14,
      speed: 320 + Math.random() * 320,
      wind: -70 - Math.random() * 90,
      opacity: 0.18 + Math.random() * 0.35,
    });

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(190,200,214,0.7)";

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i]!;
        d.x += d.wind * dt;
        d.y += d.speed * dt;
        if (d.y > height + 20 || d.x < -20) {
          drops[i] = makeDrop();
          continue;
        }
        ctx.globalAlpha = d.opacity;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - d.wind * 0.045, d.y - d.len);
        ctx.stroke();
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

    resize();
    last = performance.now();
    raf = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);
    window.addEventListener("pointerdown", onPointer, { passive: true });
    const reduceWatch = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onReduce = (e: MediaQueryListEvent) => {
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
    reduceWatch.addEventListener("change", onReduce);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", onPointer);
      reduceWatch.removeEventListener("change", onReduce);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 h-full w-full opacity-70"
    />
  );
}