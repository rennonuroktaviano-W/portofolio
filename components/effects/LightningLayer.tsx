"use client";

import { useMemo, useRef, useState } from "react";
import { useEffect } from "react";

type Strike = {
  id: number;
  x: number;
  seed: number;
};

type Bolt = {
  core: string;
  aura: string;
  branch: string;
};

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

function makeBolt(seed: number): Bolt {
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

function StrikeView({ strike }: { strike: Strike }) {
  const bolt = useMemo(() => makeBolt(strike.seed), [strike.seed]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[35]">
      <div
        className="lightning-flash absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 120% 90% at ${strike.x}% 0%, rgba(214,228,255,0.15), rgba(214,228,255,0.05) 45%, transparent 75%)`,
        }}
      />
      <div
        className="lightning-bolt absolute top-0"
        style={{ left: `${strike.x}%`, transform: "translateX(-50%)" }}
      >
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

export function LightningLayer() {
  const [strikes, setStrikes] = useState<Strike[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let mounted = true;
    let timeout: number;

    const schedule = () => {
      timeout = window.setTimeout(() => {
        if (!mounted) return;
        const x = 8 + Math.random() * 84;
        const id = ++idRef.current;
        setStrikes((s) => [
          ...s,
          { id, x, seed: Math.floor(Math.random() * 1e9) },
        ]);

        if (Math.random() < 0.28) {
          window.setTimeout(() => {
            if (!mounted) return;
            setStrikes((s) => [
              ...s,
              {
                id: ++idRef.current,
                x: Math.min(94, x + 6 + Math.random() * 16),
                seed: Math.floor(Math.random() * 1e9),
              },
            ]);
          }, 120 + Math.random() * 180);
        }

        window.setTimeout(() => {
          if (!mounted) return;
          setStrikes((s) => s.filter((st) => st.id !== id));
        }, 720);

        schedule();
      }, 4300 + Math.random() * 4200);
    };

    schedule();
    return () => {
      mounted = false;
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {strikes.map((strike) => (
        <StrikeView key={strike.id} strike={strike} />
      ))}
    </>
  );
}