"use client";

import { projects, type Project } from "@/data/projects";
import { SceneHeader } from "@/components/ui/SceneHeader";

const featured: Project[] = [projects[0]!, projects[2]!];

function VisualPlaceholder({ project }: { project: Project }) {
  return (
    <div
      aria-hidden="true"
      className="comic-panel relative aspect-video overflow-hidden bg-[linear-gradient(160deg,#141821,#08090b_55%,#0c0e13)]"
    >
      <div className="absolute inset-0 halftone opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
            case visual
          </p>
          <span className="mt-3 block font-display text-4xl font-semibold uppercase text-outline sm:text-6xl">
            {project.title}
          </span>
        </div>
      </div>
      {project.links.some((l) => l.label === "live") ? (
        <span className="absolute left-4 top-4 flex items-center gap-2 rounded-sm bg-neon/20 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
          LIVE SIGNAL
        </span>
      ) : null}
    </div>
  );
}

export function ProjectShowcase() {
  return (
    <section
      id="scene-showcase"
      aria-labelledby="showcase-title"
      className="scene"
      style={{ padding: "10svh 0" }}
    >
      <div className="scene-inner">
        <SceneHeader
          id="showcase-title"
          chapter={6}
          label="featured cinematics"
          title="Case Files — Deep Dive"
          caption="Two cases opened wide: the problem, the build, and what shipped."
        />

        <div className="flex flex-col gap-20">
          {featured.map((project, index) => (
            <article
              key={project.id}
              aria-labelledby={`file-${project.id}-title`}
              className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <VisualPlaceholder project={project} />
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
                  evidence file {String(index + 1).padStart(2, "0")} — {project.year}
                </p>
                <h3
                  id={`file-${project.id}-title`}
                  className="font-display text-3xl font-semibold uppercase leading-none text-cream sm:text-4xl"
                >
                  {project.title}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-fog">
                  {project.role} · {project.stack.join(" / ")}
                </p>

                <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="font-display text-xs uppercase tracking-[0.3em] text-blood">
                      The Problem
                    </dt>
                    <dd className="mt-1 text-cream/85">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-xs uppercase tracking-[0.3em] text-yellow">
                      The Solution
                    </dt>
                    <dd className="mt-1 text-cream/85">{project.solution}</dd>
                  </div>
                </dl>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 font-mono text-xs text-fog"
                    >
                      <span aria-hidden="true" className="mt-0.5 text-yellow">
                        ▸
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-l-2 border-gold/40 pl-4">
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
                    The Moment It Hurt
                  </p>
                  <p className="mt-1 text-sm text-fog">{project.challenge}</p>
                </div>

                <div className="mt-6 border-l-2 border-cream/30 pl-4">
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-cream">
                    The Aftermath
                  </p>
                  <p className="mt-1 text-sm text-fog">{project.outcome}</p>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-fog/40 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-cream transition-colors hover:border-yellow hover:text-yellow"
                    >
                      {link.label === "github" ? "source code" : "live demo"} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}