"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type StrikeDetail = { x: number; seed: number };

type BoltStrike = { id: number; x: number; seed: number };

type Flash = { id: number; x: number };

type BoltPath = { core: string; aura: string };

type Bolt = {
  main: BoltPath;
  secondaries: BoltPath[];
  branch: string;
};

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

function genBoltPoints(
  seed: number,
  startX: number,
  startY: number,
  heightCap: number,
  wander: number,
  segMin: number,
  segMax: number
): [number, number][] {
  const rnd = mulberry32(seed);
  const segments = segMin + Math.floor(rnd() * (segMax - segMin + 1));
  const pts: [number, number][] = [[Math.min(120, Math.max(-120, startX)), startY]];
  for (let i = 0; i < segments; i++) {
    const prev = pts[pts.length - 1]!;
    const y = prev[1] + 55 + rnd() * 75;
    let x = prev[0] + (rnd() - 0.5) * wander;
    x = Math.min(120, Math.max(-120, x));
    pts.push([x, Math.min(heightCap, y)]);
  }
  return pts;
}

function makeBolt(seed: number): Bolt {
  const rnd = mulberry32(seed);

  const main = genBoltPoints(seed, (rnd() - 0.5) * 40, 4, 756, 120, 6, 9);
  const sec1 = genBoltPoints(seed ^ 0x9e3779b9, 60 + rnd() * 70, 90 + rnd() * 70, 700, 100, 4, 7);
  const sec2 = genBoltPoints(seed ^ 0x85ebca6b, -(60 + rnd() * 70), 150 + rnd() * 80, 680, 100, 4, 7);

  const toPath = (pts: [number, number][]): BoltPath => {
    const aura = pts.map(([x, y]) => [x + 5, y - 7] as [number, number]);
    return { core: toPoints(pts), aura: toPoints(aura) };
  };

  let branch = "";
  const branchAt = 2 + Math.floor(rnd() * (main.length - 3));
  const from = main[branchAt];
  if (from) {
    const dir = rnd() < 0.5 ? -1 : 1;
    branch = toPoints([
      from,
      [from[0] + dir * (34 + rnd() * 34), from[1] + 38 + rnd() * 30],
      [from[0] + dir * (50 + rnd() * 46), from[1] + 96 + rnd() * 48],
    ]);
  }

  return {
    main: toPath(main),
    secondaries: [toPath(sec1), toPath(sec2)],
    branch,
  };
}

const MAIN_GLOW =
  "drop-shadow(0 0 8px rgba(200,220,255,0.9)) drop-shadow(0 0 26px rgba(160,195,255,0.55))";
const SEC_GLOW = "drop-shadow(0 0 6px rgba(185,205,255,0.7))";

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
          width="280"
          height="760"
          viewBox="-140 0 280 760"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {bolt.secondaries.map((sec, i) => (
            <g key={i}>
              <polyline
                points={sec.aura}
                stroke="rgba(160,180,255,0.1)"
                strokeWidth="12"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <polyline
                points={sec.core}
                stroke="rgba(210,226,255,0.9)"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                style={{ filter: SEC_GLOW }}
              />
            </g>
          ))}
          <polyline
            points={bolt.main.aura}
            stroke="rgba(160,180,255,0.16)"
            strokeWidth="17"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <polyline
            points={bolt.main.core}
            stroke="rgba(214,228,255,0.28)"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <polyline
            points={bolt.main.core}
            stroke="rgba(240,246,255,0.98)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            style={{ filter: MAIN_GLOW }}
          />
          {bolt.branch ? (
            <polyline
              points={bolt.branch}
              stroke="rgba(200,216,255,0.85)"
              strokeWidth="1.6"
              strokeLinejoin="round"
              strokeLinecap="round"
              style={{ filter: SEC_GLOW }}
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
      }, 720);
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
      }, 680);
    };

    let timeout = 0;
    let loaded = document.documentElement.dataset.loaded === "1";
    let visible = !document.hidden;
    let stormOn = false;
    let scheduling = false;

    const canStrike = () => loaded && visible && stormOn;

    const maybeStart = () => {
      if (!mountedRef.current || !canStrike() || scheduling) return;
      scheduling = true;
      const base = window.innerWidth < 768 ? 3800 : 2500;
      timeout = window.setTimeout(() => {
        scheduling = false;
        if (!mountedRef.current || !canStrike()) return;
        const x = 10 + Math.random() * 80;
        strike(x);
        if (Math.random() < 0.35) {
          window.setTimeout(
            () => strike(Math.min(94, x + 8 + Math.random() * 20)),
            90 + Math.random() * 160
          );
        }
        if (Math.random() < 0.15) {
          window.setTimeout(
            () => strike(Math.max(6, x - 14 - Math.random() * 22)),
            450 + Math.random() * 200
          );
        }
        maybeStart();
      }, base + Math.random() * 3000);
    };

    const pause = () => {
      scheduling = false;
      window.clearTimeout(timeout);
    };

    const onLoaded = () => {
      loaded = true;
      maybeStart();
    };
    if (!loaded) {
      window.addEventListener("loading:done", onLoaded, { once: true });
    }

    const onVis = () => {
      const now = !document.hidden;
      if (visible === now) return;
      visible = now;
      if (!visible) pause();
      else maybeStart();
    };

    const io = new IntersectionObserver(
      (entries) => {
        const prev = stormOn;
        stormOn = entries.some((e) => e.isIntersecting);
        if (prev && !stormOn) pause();
        else if (!prev && stormOn) maybeStart();
      },
      { threshold: 0.05 }
    );
    const hero = document.getElementById("scene-hero");
    const fin = document.getElementById("scene-final");
    if (hero) io.observe(hero);
    if (fin) io.observe(fin);

    document.addEventListener("visibilitychange", onVis);
    maybeStart();

    return () => {
      mountedRef.current = false;
      window.clearTimeout(timeout);
      window.removeEventListener("loading:done", onLoaded);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
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
              mixBlendMode: "screen",
              background: `linear-gradient(rgba(255,255,255,0.22),rgba(255,255,255,0.22)), radial-gradient(ellipse 95% 85% at ${f.x}% 2%, rgba(255,255,255,0.95), rgba(228,238,255,0.4) 42%, rgba(205,220,255,0.18) 68%, rgba(190,205,245,0.08) 88%, transparent 100%)`,
            }}
          />
        </div>
      ))}
    </>
  );
}