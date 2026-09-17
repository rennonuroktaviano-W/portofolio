"use client";

import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import { SceneHeader } from "@/components/ui/SceneHeader";
import { useReveals } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/provider";

const featured: Project[] = [projects[0]!, projects[2]!];

function VisualPlaceholder({ project }: { project: Project }) {
  const cover = project.gallery[0]?.src;
  const { t } = useI18n();

  return (
    <div
      aria-hidden="true"
      className="comic-panel relative aspect-video overflow-hidden bg-[linear-gradient(160deg,#141821,#08090b_55%,#0c0e13)]"
    >
      <div className="absolute inset-0 halftone opacity-30" />
      {cover ? (
        <Image
          src={cover}
          alt={project.gallery[0]?.alt ?? project.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
              {t("showcase.caseVisual")}
            </p>
            <span className="mt-3 block font-display text-4xl font-semibold uppercase text-outline sm:text-6xl">
              {project.title}
            </span>
          </div>
        </div>
      )}
      {project.links.some((l) => l.label === "live") ? (
        <span className="absolute left-4 top-4 flex items-center gap-2 rounded-sm bg-neon/20 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
          {t("showcase.liveSignal")}
        </span>
      ) : null}
      <span className="absolute bottom-3 right-3 rounded-sm bg-midnight/70 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-gold">
        {t("showcase.artCaseCover")}
      </span>
    </div>
  );
}

export function ProjectShowcase() {
  const sectionRef = useReveals<HTMLElement>();
  const { t } = useI18n();

  return (
    <section
      ref={sectionRef}
      id="scene-showcase"
      aria-labelledby="showcase-title"
      className="scene"
      style={{ padding: "10svh 0" }}
    >
      <div className="scene-inner">
        <SceneHeader
          id="showcase-title"
          chapter={6}
          label={t("showcase.label")}
          title={t("showcase.title")}
          caption={t("showcase.caption")}
        />

        <div className="flex flex-col gap-20">
          {featured.map((project, index) => (
            <article
              key={project.id}
              aria-labelledby={`file-${project.id}-title`}
              className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""} data-reveal data-reveal-delay={index % 2 === 1 ? 120 : 0}>
                <VisualPlaceholder project={project} />
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""} data-reveal data-reveal-delay={index % 2 === 1 ? 0 : 120}>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
                  {t("showcase.evidenceFile", {
                    n: String(index + 1).padStart(2, "0"),
                    year: project.year,
                  })}
                </p>
                <h3
                  id={`file-${project.id}-title`}
                  className="font-display text-3xl font-semibold uppercase leading-none text-cream sm:text-4xl"
                >
                  {project.title}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-fog">
                  {t(`showcase.projects.${project.id}.role`)} · {project.stack.join(" / ")}
                </p>

                <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="font-display text-xs uppercase tracking-[0.3em] text-blood">
                      {t("showcase.problem")}
                    </dt>
                    <dd className="mt-1 text-cream/85">
                      {t(`showcase.projects.${project.id}.problem`)}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display text-xs uppercase tracking-[0.3em] text-yellow">
                      {t("showcase.solution")}
                    </dt>
                    <dd className="mt-1 text-cream/85">
                      {t(`showcase.projects.${project.id}.solution`)}
                    </dd>
                  </div>
                </dl>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature, fi) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 font-mono text-xs text-fog"
                    >
                      <span aria-hidden="true" className="mt-0.5 text-yellow">
                        ▸
                      </span>
                      {t(`showcase.projects.${project.id}.features.${fi}`)}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-l-2 border-gold/40 pl-4">
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
                    {t("showcase.momentItHurt")}
                  </p>
                  <p className="mt-1 text-sm text-fog">
                    {t(`showcase.projects.${project.id}.challenge`)}
                  </p>
                </div>

                <div className="mt-6 border-l-2 border-cream/30 pl-4">
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-cream">
                    {t("showcase.aftermath")}
                  </p>
                  <p className="mt-1 text-sm text-fog">
                    {t(`showcase.projects.${project.id}.outcome`)}
                  </p>
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
                      {link.label === "github" ? t("showcase.sourceCode") : t("showcase.liveDemo")} ↗
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