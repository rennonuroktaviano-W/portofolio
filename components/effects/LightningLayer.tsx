"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type StrikeDetail = { x: number; seed: number };

type BoltStrike = { id: number; x: number; seed: number };

type Flash = { id: number; x: number };

const STRIKE_EVENT = "lightning:strike";

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function toPoints(pts: [number, number][]): string {
  return pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
}

function makeBolt(seed: number): {
  core: string;
  aura: string;
  branch: string;
} {
  const rnd = mulberry32(seed);
  const segments = 5 + Math.floor(rnd() * 4);
  const core: [number, number][] = [[(rnd() - 0.5) * 40, 6]];

  for (let i = 0; i < segments; i++) {
    const prev = core[core.length - 1]!;
    const y = prev[1] + 70 + rnd() * 75;
    let x = prev[0] + (rnd() - 0.5) * 110;
    x = Math.min(60, Math.max(-60, x));
    core.push([x, Math.min(556, y)]);
  }

  const aura = core.map(([x, y]) => [x + 5, y - 7] as [number, number]);

  let branch = "";
  const branchAt = 2 + Math.floor(rnd() * (segments - 2));
  const from = core[branchAt];
  if (from) {
    const dir = rnd() < 0.5 ? -1 : 1;
    branch = toPoints([
      from,
      [from[0] + dir * (28 + rnd() * 30), from[1] + 34 + rnd() * 26],
      [from[0] + dir * (40 + rnd() * 40), from[1] + 88 + rnd() * 44],
    ]);
  }

  return { core: toPoints(core), aura: toPoints(aura), branch };
}

function SkylineBoltView({ x, seed }: { x: number; seed: number }) {
  const bolt = useMemo(() => makeBolt(seed), [seed]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-0 z-0"
      style={{ left: `${x}%`, transform: "translateX(-50%)" }}
    >
      <div className="lightning-bolt will-change-[opacity]">
        <svg
          width="140"
          height="560"
          viewBox="-70 0 140 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            points={bolt.aura}
            stroke="rgba(160,180,255,0.18)"
            strokeWidth="9"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <polyline
            points={bolt.core}
            stroke="rgba(214,228,255,0.25)"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <polyline
            points={bolt.core}
            stroke="rgba(238,244,255,0.95)"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 5px rgba(190,208,255,0.85))" }}
          />
          {bolt.branch ? (
            <polyline
              points={bolt.branch}
              stroke="rgba(200,216,255,0.75)"
              strokeWidth="1"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ) : null}
        </svg>
      </div>
    </div>
  );
}

export function SkylineBolt() {
  const [strikes, setStrikes] = useState<BoltStrike[]>([]);
  const idRef = useRef(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onStrike = (e: Event) => {
      const { x, seed } = (e as CustomEvent<StrikeDetail>).detail;
      const id = idRef.current++;
      setStrikes((s) => [...s, { id, x, seed }]);
      window.setTimeout(() => {
        if (mountedRef.current) {
          setStrikes((s) => s.filter((st) => st.id !== id));
        }
      }, 700);
    };

    window.addEventListener(STRIKE_EVENT, onStrike);
    return () => {
      mountedRef.current = false;
      window.removeEventListener(STRIKE_EVENT, onStrike);
    };
  }, []);

  return (
    <>
      {strikes.map((s) => (
        <SkylineBoltView key={s.id} x={s.x} seed={s.seed} />
      ))}
    </>
  );
}

export function LightningLayer() {
  const [flashes, setFlashes] = useState<Flash[]>([]);
  const idRef = useRef(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const strike = (x: number) => {
      const id = idRef.current++;
      window.dispatchEvent(
        new CustomEvent<StrikeDetail>(STRIKE_EVENT, {
          detail: { x, seed: Math.floor(Math.random() * 1e9) },
        })
      );
      setFlashes((s) => [...s, { id, x }]);
      window.setTimeout(() => {
        if (mountedRef.current) {
          setFlashes((s) => s.filter((f) => f.id !== id));
        }
      }, 650);
    };

    let timeout: number;
    const schedule = () => {
      timeout = window.setTimeout(() => {
        if (!mountedRef.current) return;
        const x = 8 + Math.random() * 84;
        strike(x);
        if (Math.random() < 0.28) {
          window.setTimeout(
            () => strike(Math.min(94, x + 6 + Math.random() * 16)),
            120 + Math.random() * 180
          );
        }
        schedule();
      }, 4300 + Math.random() * 4200);
    };

    schedule();
    return () => {
      mountedRef.current = false;
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {flashes.map((f) => (
        <div
          key={f.id}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[40]"
        >
          <div
            className="lightning-flash absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 120% 90% at ${f.x}% 0%, rgba(226,236,255,0.5), rgba(214,228,255,0.17) 45%, rgba(200,214,255,0.06) 70%, transparent 86%)`,
            }}
          />
        </div>
      ))}
    </>
  );
}