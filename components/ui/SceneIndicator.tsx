"use client";

import { useEffect, useState } from "react";
import { sceneDefinitions, type SceneDefinition } from "@/lib/scenes";
import { useI18n } from "@/lib/i18n/provider";

export function SceneIndicator() {
  const { t } = useI18n();
  const sceneTitle = (scene: SceneDefinition) =>
    t(`scenes.${scene.id}.title`);
  const [activeId, setActiveId] = useState(sceneDefinitions[0].id);
  const [mountedAfterHero, setMountedAfterHero] = useState(false);
  const [idle, setIdle] = useState(true);

  useEffect(() => {
    const ids = sceneDefinitions.map((s) => s.id);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    const hero = document.getElementById("scene-hero");
    const heroObs = new IntersectionObserver(
      (entries) => setMountedAfterHero(!entries.some((e) => e.isIntersecting)),
      { threshold: 0.15 }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    if (hero) heroObs.observe(hero);

    let idleTimer: number | undefined;
    const poke = () => {
      setIdle(false);
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => setIdle(true), 4000);
    };
    window.addEventListener("scroll", poke, { passive: true });
    window.addEventListener("pointermove", poke, { passive: true });
    poke();

    return () => {
      io.disconnect();
      heroObs.disconnect();
      window.removeEventListener("scroll", poke);
      window.removeEventListener("pointermove", poke);
      window.clearTimeout(idleTimer);
    };
  }, []);

  useEffect(() => {
    const go = (dir: 1 | -1) => {
      const index = sceneDefinitions.findIndex((s) => s.id === activeId);
      const next = sceneDefinitions[Math.min(
        sceneDefinitions.length - 1,
        Math.max(0, index + dir)
      )];
      document.getElementById(next.id)?.scrollIntoView({ behavior: "smooth" });
    };

    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if (typing) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (e.key === "End") {
        e.preventDefault();
        document
          .getElementById(sceneDefinitions[sceneDefinitions.length - 1].id)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeId]);

  return (
    <nav
      aria-label={t("sceneIndicator.label")}
      className={`fixed right-3 top-1/2 z-50 -translate-y-1/2 flex-col items-center gap-2 print:hidden sm:right-5 ${
        mountedAfterHero ? "flex" : "hidden"
      } transition-opacity duration-500 ${idle ? "opacity-30" : "opacity-100"}`}
    >
      {sceneDefinitions.map((scene) => {
        const isActive = scene.id === activeId;
        return (
          <button
            key={scene.id}
            type="button"
            onClick={() =>
              document
                .getElementById(scene.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label={t("sceneIndicator.goTo", {
              chapter: scene.chapter,
              title: sceneTitle(scene),
            })}
            title={`${scene.chapter} · ${sceneTitle(scene)}`}
            className="group relative flex h-6 w-5 items-center justify-center"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "h-3 w-3 bg-yellow"
                  : "h-1.5 w-1.5 border border-fog/60 bg-midnight group-hover:bg-fog"
              }`}
            />
            <span
              className={`pointer-events-none absolute right-5 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-cream opacity-0 transition-opacity group-hover:opacity-100 ${
                isActive ? "!opacity-100" : ""
              }`}
            >
              {String(scene.chapter).padStart(2, "0")} — {sceneTitle(scene)}
            </span>
          </button>
        );
      })}
    </nav>
  );
}