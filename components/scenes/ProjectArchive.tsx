"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import { SceneHeader } from "@/components/ui/SceneHeader";
import { gsap, usePrefersReducedMotion } from "@/lib/motion";

const statusTone: Record<string, string> = {
  LIVE: "bg-gold/15 text-gold border-gold/50",
  ARCHIVED: "bg-fog/10 text-fog border-fog/40",
  "IN PROGRESS": "bg-blood/20 text-neon border-neon/50",
};

export function ProjectArchive() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const stage = pinRef.current;
    const track = trackRef.current;
    if (!section || !stage || !track || reduced) return;

    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          const amount = () =>
            Math.max(0, track.scrollWidth - window.innerWidth + 96);

          if (amount() <= 0) return;

          gsap.to(track, {
            x: () => -amount(),
            ease: "none",
            scrollTrigger: {
              trigger: stage,
              start: "top top",
              end: () => "+=" + amount(),
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        }, stage);
        return () => ctx.revert();
      }
    );

    return () => mm.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="scene-archive"
      aria-labelledby="archive-title"
      className="scene"
      style={{ paddingTop: "8svh" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,#08090b,#0c0e13_40%,#08090b)]"
      />

      <div ref={pinRef} className="overflow-hidden">
        <div className="scene-inner">
          <SceneHeader
            id="archive-title"
            chapter={5}
            label="the vault · case folders"
            title="Project Archive"
            caption="The basement archive. Pull a folder — every case below shipped for real."
          />
          <p className="mb-8 font-mono text-[11px] uppercase tracking-widest text-fog">
            the vault runs sideways on wide screens — keep scrolling to flip folders
          </p>
        </div>

        <ul
          ref={trackRef}
          className="flex flex-col gap-4 px-5 sm:px-8 lg:w-max lg:flex-row lg:items-stretch lg:gap-6 lg:px-10 lg:pb-10 lg:will-change-transform"
        >
          {projects.map((project, index) => (
            <li key={project.id} className="shrink-0 lg:w-[30rem]">
              <article className="comic-panel flex h-full flex-col bg-midnight/70 p-5 transition-colors duration-300 hover:border-yellow/50 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-3xl font-bold text-fog/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest ${statusTone[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold uppercase tracking-wide text-cream">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  {project.oneLiner}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[10px] uppercase tracking-widest text-gold">
                  <span>✦ {project.year}</span>
                  <span>{project.stack.join(" · ")}</span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-cream/10 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cream/60">
                    role: {project.role}
                  </span>
                  <a
                    href="#scene-showcase"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-yellow underline decoration-yellow/30 underline-offset-4 hover:text-cream"
                  >
                    open case <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </li>
          ))}

          <li
            aria-hidden="true"
            className="flex shrink-0 items-center px-6 lg:w-72"
          >
            <div>
              <p className="font-display text-5xl font-semibold text-outline">
                end of the vault
              </p>
              <p className="mt-3 max-w-[16rem] font-mono text-[11px] uppercase tracking-widest text-fog">
                deeper dossiers live in the cinematics below
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}