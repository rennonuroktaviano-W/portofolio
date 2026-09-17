"use client";

import { skillCategories } from "@/data/skills";
import { SceneHeader } from "@/components/ui/SceneHeader";
import { useReveals } from "@/lib/motion";

export function TechArsenal() {
  const sectionRef = useReveals<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="scene-arsenal"
      aria-labelledby="arsenal-title"
      className="scene"
      style={{ padding: "10svh 0" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,#08090b,#111827_35%,#08090b)] opacity-60"
      />
      <div className="scene-inner">
        <SceneHeader
          id="arsenal-title"
          chapter={4}
          label="equipment locker"
          title="Tech Arsenal"
          caption="The tools on the evidence wall. Every piece here has seen real production work."
        />
        <p className="mb-6 font-mono text-[11px] uppercase tracking-widest text-fog">
          hover or tap a device for deployment notes
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, ci) => (
            <div
              key={category.id}
              className="comic-panel paper-sheet flex flex-col p-5 sm:p-6"
              data-reveal
              data-reveal-delay={(ci % 3) * 110}
            >
              <div className="mb-5 flex items-baseline justify-between border-b border-cream/15 pb-3">
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-yellow">
                  {category.label}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-fog">
                  {String(ci + 1).padStart(2, "0")} / {category.code}
                </span>
              </div>

              <ul className="flex flex-1 flex-col gap-4">
                {category.items.map((skill) => (
                  <li key={skill.name} className="group">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-sm text-cream">
                        {skill.name}
                      </span>
                      <span
                        aria-hidden="true"
                        className="rounded-sm border border-neon/50 px-1.5 py-0.5 text-[9px] font-bold text-neon transition-colors group-hover:bg-neon/15"
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div
                      aria-hidden="true"
                      className="mt-2 h-px w-full bg-cream/10"
                    >
                      <div
                        className="h-px bg-gradient-to-r from-yellow to-blood transition-[width] duration-500 group-hover:from-gold"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="mt-2 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-28 group-hover:opacity-100">
                      <p className="text-xs leading-relaxed text-fog">
                        {skill.description}
                      </p>
                      <p className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-gold">
                        {skill.tags?.join(" · ")}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}