"use client";

import { projects } from "@/data/projects";
import { SceneHeader } from "@/components/ui/SceneHeader";

const statusTone: Record<string, string> = {
  LIVE: "bg-gold/15 text-gold border-gold/50",
  ARCHIVED: "bg-fog/10 text-fog border-fog/40",
  "IN PROGRESS": "bg-blood/20 text-neon border-neon/50",
};

export function ProjectArchive() {
  return (
    <section
      id="scene-archive"
      aria-labelledby="archive-title"
      className="scene"
      style={{ paddingTop: "8svh" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,#08090b,#0c0e13_40%,#08090b)]"
      />
      <div className="scene-inner">
        <SceneHeader
          id="archive-title"
          chapter={5}
          label="the vault · case folders"
          title="Project Archive"
          caption="The basement archive. Pull a folder — every case below shipped for real."
        />

        <ul className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <li key={project.id}>
              <article className="comic-panel bg-midnight/70 transition-colors duration-300 hover:border-yellow/50">
                <div className="grid gap-5 p-5 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:p-6">
                  <span className="font-mono text-2xl font-bold text-fog/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-cream sm:text-2xl">
                        {project.title}
                      </h3>
                      <span
                        className={`border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest ${statusTone[project.status]}`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fog">
                      {project.oneLiner}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[10px] uppercase tracking-widest text-gold">
                      <span>✦ {project.year}</span>
                      <span>Role: {project.role}</span>
                      <span>{project.stack.join(" · ")}</span>
                    </div>
                  </div>
                  <a
                    href="#scene-showcase"
                    className="group inline-flex items-center gap-2 justify-self-start font-mono text-[11px] uppercase tracking-[0.25em] text-yellow underline decoration-yellow/30 underline-offset-4 hover:text-cream sm:justify-self-end"
                  >
                    open case file
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}