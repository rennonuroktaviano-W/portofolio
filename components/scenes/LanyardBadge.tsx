"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));
import { usePrefersReducedMotion } from "@/lib/motion";
import { BatGrapple } from "@/components/effects/BatGrapple";

const HOOK_WRAP_Y = -30;
const SVG_TOP = -56;
const HANDLE_WRAP_Y = -9;

export function LanyardBadge({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const cableRef = useRef<SVGPathElement | null>(null);
  const highlightRef = useRef<SVGPathElement | null>(null);
  const dottedRef = useRef<SVGPathElement | null>(null);
  const [size, setSize] = useState({ w: 384, h: 480 });
  const [paused, setPaused] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tiltTarget = useMotionValue(0);
  const rotate = useSpring(tiltTarget, {
    stiffness: 140,
    damping: 12,
    mass: 0.7,
  });

  const applyTilt = () => {
    const xv = x.get();
    const yv = y.get();
    const whip = clamp(x.getVelocity() * 0.006, -9, 9);
    tiltTarget.set(clamp(xv * 0.13 + whip + yv * 0.02, -16, 16));
  };

  const paintRope = (w: number, xv: number, yv: number) => {
    const toY = HANDLE_WRAP_Y - SVG_TOP + yv;
    const sag = 16 + Math.min(12, Math.abs(xv) * 0.1);
    const c1y = (toY - 26) * 0.32 + 26 + sag;
    const c2y = (toY - 26) * 0.68 + 26 + sag;
    const p = `M ${w / 2} 26 C ${w / 2 + xv * 0.28} ${c1y}, ${w / 2 + xv * 0.72} ${c2y}, ${w / 2 + xv} ${toY}`;
    cableRef.current?.setAttribute("d", p);
    highlightRef.current?.setAttribute("d", p);
    dottedRef.current?.setAttribute("d", p);
  };

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth || 384;
      const h = el.clientHeight || 480;
      setSize({ w, h });
      paintRope(w, x.get(), y.get());
    };
    measure();
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [x, y]);

  useMotionValueEvent(x, "change", (v) => {
    paintRope(size.w, v, y.get());
    applyTilt();
  });
  useMotionValueEvent(y, "change", (v) => {
    paintRope(size.w, x.get(), v);
    applyTilt();
  });

  const dragProps = reduced
    ? {}
    : {
        drag: true,
        dragConstraints: { top: -150, left: -140, right: 140, bottom: 110 },
        dragElastic: 0.55,
        dragMomentum: false,
        dragSnapToOrigin: true,
        dragTransition: { bounceStiffness: 420, bounceDamping: 26 },
        whileDrag: { scale: 1.04 },
        onDragStart: () => setPaused(true),
        onDragEnd: () => setPaused(false),
      } as const;

  const svgH = size.h + 96;

  return (
    <div ref={wrapRef} className="relative w-full">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 z-[18]"
        style={{ top: SVG_TOP }}
        width={size.w}
        height={svgH}
        viewBox={`0 0 ${size.w} ${svgH}`}
      >
        <path ref={cableRef} d="" stroke="#1a1e27" strokeWidth="4" fill="none" />
        <path
          ref={highlightRef}
          d=""
          stroke="#3a4150"
          strokeWidth="1.6"
          fill="none"
        />
        <path
          ref={dottedRef}
          d=""
          stroke="#565f6e"
          strokeWidth="0.8"
          fill="none"
          strokeDasharray="1 7"
        />
      </svg>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 z-20 -translate-x-1/2"
        style={{ top: HOOK_WRAP_Y - 46 }}
      >
        <BatGrapple className="h-[46px] w-auto" />
      </div>

      <motion.div
        {...dragProps}
        style={{ x, y, rotate, originX: 0.5, originY: 0 }}
        className="relative z-10 w-full will-change-transform"
      >
        <div
          className="lanyard-sway"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {children}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-9px] z-30 h-[18px] w-[18px] -translate-x-1/2 rounded-full border-2 border-[#4a5363] bg-[#1a1e27] shadow-[inset_0_1px_2px_rgba(255,255,255,0.18),0_3px_8px_rgba(0,0,0,0.65)]"
        />
      </motion.div>
    </div>
  );
}