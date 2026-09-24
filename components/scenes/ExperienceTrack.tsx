"use client";

import { useEffect, useRef } from "react";
import { milestones } from "@/data/experience";
import { SceneHeader } from "@/components/ui/SceneHeader";
import { gsap, usePrefersReducedMotion, useReveals } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/provider";

export function ExperienceTrack() {
  const sectionRef = useReveals<HTMLElement>();
  const lineRef = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const { t } = useI18n();

  useEffect(() => {
    const line = lineRef.current;
    const section = sectionRef.current;
    if (!line || !section || reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 55%",
            end: "bottom 75%",
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reduced, sectionRef]);

  return (
    <section
      ref={sectionRef}
      id="scene-experience"
      aria-labelledby="experience-title"
      className="scene"
      style={{ padding: "10svh 0" }}
    >
      <div className="scene-inner">
        <SceneHeader
          id="experience-title"
          chapter={7}
          label={t("experience.label")}
          title={t("experience.title")}
          caption={t("experience.caption")}
        />

        <ol className="relative space-y-10 border-l border-cream/15 pl-8 sm:pl-10">
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute -left-px top-0 bottom-0 w-px origin-top bg-gradient-to-b from-yellow via-blood to-transparent"
          />
          {milestones.map((milestone) => (
            <li key={milestone.id} className="relative" data-reveal>
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-1 flex h-3 w-3 items-center justify-center sm:-left-[45px]"
              >
                <span className="h-2 w-2 rounded-full bg-midnight ring-2 ring-yellow" />
              </span>
              <article className="comic-panel bg-midnight/70 p-5 transition-colors hover:border-gold/50 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-cream">
                    {t(`experience.items.${milestone.id}.title`)}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold">
                    {milestone.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-fog">
                  {t(`experience.items.${milestone.id}.org`)} ·{" "}
                  <span className="text-yellow">
                    {t(`experience.type.${milestone.type}`)}
                  </span>
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fog">
                  {t(`experience.items.${milestone.id}.description`)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(milestone.tags as string[]).map((tag) => (
                    <span
                      key={tag}
                      className="border border-cream/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-cream/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}