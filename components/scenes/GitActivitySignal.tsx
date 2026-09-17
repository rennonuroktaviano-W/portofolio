"use client";

import { projects } from "@/data/projects";
import { SceneHeader } from "@/components/ui/SceneHeader";

export function GitActivitySignal() {
  const repoProjects = projects.filter((p) =>
    p.links.some((l) => l.label === "github")
  );

  return (
    <section
      id="scene-git"
      aria-labelledby="git-title"
      className="scene"
      style={{ padding: "6svh 0" }}
    >
      <div className="scene-inner">
        <SceneHeader
          id="git-title"
          chapter={9}
          label="monitor room · optional feed"
          title="Activity Signal"
          caption="Live-ish pulses from the version control tower. Static stamps — refreshed on every deploy."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repoProjects.map((project) => (
            <li key={project.id}>
              <article className="comic-panel bg-midnight/70 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate font-mono text-xs text-cream">
                    {project.title.toLowerCase()}
                  </p>
                  <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-cream/70">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow" />
                    signal
                  </span>
                </div>
                <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-fog">
                  {project.oneLiner}
                </p>
                <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-fog">
                  <span>{project.year}</span>
                  <span className="text-gold">commits: steady</span>
                </div>
                <a
                  href={project.links.find((l) => l.label === "github")?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border border-cream/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-cream transition-colors hover:border-yellow hover:text-yellow"
                >
                  open repository ↗
                </a>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-fog">
          feeds are static by design — the archive never waits on a third-party API.
        </p>
      </div>
    </section>
  );
}