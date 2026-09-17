"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";

const STORAGE_KEY = "kodecity:ambience";

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
      style={{ display: "none" }}
    />
  );
}

function buildGraph(ctx: AudioContext) {
  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);

  const makeNoise = (freq: number, volume: number) => {
    const length = ctx.sampleRate * 3;
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = freq;
    const gain = ctx.createGain();
    gain.gain.value = volume;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    src.start();
    return { src, gain };
  };

  const hiss = makeNoise(1700, 0.5);
  const rumble = makeNoise(320, 0.22);
  const suss = makeNoise(90, 0.6);

  return {
    master,
    fadeTo: (target: number, seconds: number) => {
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(
        target,
        ctx.currentTime + seconds
      );
    },
    stop: () => {
      [hiss, rumble, suss].forEach(({ src }) => {
        try {
          src.stop();
        } catch {
          /* already stopped */
        }
      });
    },
  };
}

export function AmbientAudioControl() {
  const ctxRef = useRef<AudioContext | null>(null);
  const graphRef = useRef<ReturnType<typeof buildGraph> | null>(null);
  const [on, setOn] = useStateFromStorage();
  const { t } = useI18n();

  const toggle = () => {
    const next = !on;
    setOn(next);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch {
      /* storage unavailable */
    }

    if (next) {
      const Ctx =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!Ctx) return;
      const ctx = ctxRef.current ?? new Ctx();
      ctxRef.current = ctx;
      const graph = graphRef.current ?? buildGraph(ctx);
      graphRef.current = graph;
      if (ctx.state === "suspended") void ctx.resume();
      graph.fadeTo(0.65, 2.4);
    } else {
      graphRef.current?.fadeTo(0, 0.8);
      const t = window.setTimeout(() => graphRef.current?.stop(), 900);
      window.setTimeout(() => window.clearTimeout(t), 1200);
    }
  };

  useEffect(() => {
    return () => {
      graphRef.current?.stop();
      void ctxRef.current?.close();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? t("audio.disable") : t("audio.enable")}
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-sm border border-cream/25 bg-midnight/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-cream backdrop-blur-sm transition-colors hover:border-yellow hover:text-yellow"
    >
      {on ? (
        <Volume2 aria-hidden="true" className="h-4 w-4 text-yellow" />
      ) : (
        <VolumeOff aria-hidden="true" className="h-4 w-4 text-fog" />
      )}
      <span className="hidden sm:inline">
        {on ? t("audio.ambienceOn") : t("audio.ambienceOff")}
      </span>
    </button>
  );
}

function useStateFromStorage() {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });
  return [value, setValue] as const;
}