import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { seoByLocale } from "@/data/seo";
import { ProjectFooter, ProjectNav } from "@/components/projects/ProjectNav";

export const metadata: Metadata = {
  title: "Case Files — Full-Stack Projects by Renno Nur Oktaviano",
  description:
    "Selected case studies by Renno Nur Oktaviano: case management software built with Laravel and MySQL, a double-entry bookkeeping API with Node.js and PostgreSQL, and an offline-first weather PWA written in TypeScript.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: "/projects",
    title: "Case Files — Full-Stack Projects by Renno Nur Oktaviano",
    description:
      "Case management software, a double-entry bookkeeping API, and an offline-first weather PWA — three projects built end to end.",
    siteName: site.brand,
    locale: seoByLocale.en.ogLocale,
    images: [
      {
        url: "/og/cover.png",
        width: 1200,
        height: 630,
        alt: `${site.brand} — Case Files`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Files — Full-Stack Projects by Renno Nur Oktaviano",
    description:
      "Case management software, a double-entry bookkeeping API, and an offline-first weather PWA.",
    images: ["/og/cover.png"],
  },
};

export default function ProjectsPage() {
  return (
    <div className="relative flex min-h-svh flex-col bg-midnight">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#07080a_0%,#0a0c12_18%,#0e1118_42%,#0c0e15_64%,#090a0e_86%,#07080a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[60svh] bg-[radial-gradient(ellipse_90%_55%_at_50%_-12%,rgba(230,184,74,0.09),transparent_70%)]"
      />

      <ProjectNav />

      <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-5 py-14 sm:px-8 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-gold">
          CH. 10 · Case Files
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,7vw,4.5rem)] font-semibold uppercase leading-[0.95] tracking-tight text-cream">
          Selected projects, <span className="text-outline-gold">built end to end.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-fog sm:text-base">
          Three case files from the archive — each one taken from a raw requirement
          to a running product: interface, data model, deployment. Every project
          below was designed, built, and shipped by me.
        </p>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => {
            const cover = project.gallery[0];
            return (
              <li key={project.id} className="group relative">
                <article className="h-full border border-cream/15 bg-charcoal/40 p-5 transition-colors hover:border-yellow/60">
                  {cover?.src ? (
                    <Image
                      src={cover.src.replace(/\.svg$/, ".png")}
                      alt={cover.alt}
                      width={1200}
                      height={675}
                      sizes="(min-width: 640px) 45vw, 100vw"
                      className="mb-5 h-auto w-full border border-cream/10"
                    />
                  ) : null}
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog/70">
                    FILE {String(index + 1).padStart(2, "0")} · {project.year} ·{" "}
                    {project.status}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold uppercase tracking-wide text-cream">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="transition-colors hover:text-yellow"
                    >
                      {project.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-fog">
                    {project.oneLiner}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="border border-gold/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gold/90"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-yellow transition-colors hover:text-cream"
                  >
                    Open case file →
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </main>

      <ProjectFooter />
    </div>
  );
}
