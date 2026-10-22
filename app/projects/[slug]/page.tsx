import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { seoByLocale } from "@/data/seo";
import { ProjectFooter, ProjectNav } from "@/components/projects/ProjectNav";

type ProjectParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: ProjectParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return { title: "Case File Not Found", robots: { index: false, follow: true } };
  }

  const description = `${project.oneLiner} Built with ${project.stack.join(", ")}.`;

  return {
    title: `${project.title} — ${project.role} Case Study`,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title: `${project.title} — ${project.role} Case Study`,
      description,
      siteName: site.brand,
      locale: seoByLocale.en.ogLocale,
      images: [
        {
          url: `/images/projects/${project.slug}/cover.png`,
          width: 1200,
          height: 675,
          alt: `${project.title} — ${project.oneLiner}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.role} Case Study`,
      description,
      images: [`/images/projects/${project.slug}/cover.png`],
    },
  };
}

function DetailBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-cream/10 pt-8">
      <h2 className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
        {label}
      </h2>
      <div className="mt-4 text-sm leading-relaxed text-fog sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: ProjectParams }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const previous = projects[index - 1];
  const next = projects[index + 1];
  const cover = project.gallery[0];

  const creativeWorkLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${site.url}/projects/${project.slug}#project`,
    name: project.title,
    headline: project.title,
    description: project.oneLiner,
    url: `${site.url}/projects/${project.slug}`,
    image: `${site.url}/images/projects/${project.slug}/cover.png`,
    dateCreated: project.year,
    creator: { "@id": `${site.url}/#person` },
    keywords: project.stack.join(", "),
    inLanguage: "en",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Portfolio",
        item: `${site.url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Files",
        item: `${site.url}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${site.url}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <div className="relative flex min-h-svh flex-col bg-midnight">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#07080a_0%,#0a0c12_18%,#0e1118_42%,#0c0e15_64%,#090a0e_86%,#07080a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[50svh] bg-[radial-gradient(ellipse_90%_55%_at_50%_-12%,rgba(230,184,74,0.09),transparent_70%)]"
      />

      <ProjectNav />

      <main className="relative z-10 mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:px-8 sm:py-20">
        <nav aria-label="Breadcrumb" className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog/70">
          <Link href="/" className="transition-colors hover:text-yellow">
            Portfolio
          </Link>
          <span className="px-2 text-fog/40">/</span>
          <Link href="/projects" className="transition-colors hover:text-yellow">
            Case Files
          </Link>
          <span className="px-2 text-fog/40">/</span>
          <span className="text-gold">{project.title}</span>
        </nav>

        <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4rem)] font-semibold uppercase leading-[0.95] tracking-tight text-cream">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog sm:text-base">
          {project.oneLiner}
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-cream/10 py-5 sm:grid-cols-4">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog/60">
              Year
            </dt>
            <dd className="mt-1 font-display text-lg text-cream">{project.year}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog/60">
              Role
            </dt>
            <dd className="mt-1 font-display text-lg text-cream">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog/60">
              Status
            </dt>
            <dd className="mt-1 font-display text-lg text-cream">{project.status}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog/60">
              Stack
            </dt>
            <dd className="mt-1 font-display text-lg text-cream">
              {project.stack.slice(0, 2).join(" + ")}
            </dd>
          </div>
        </dl>

        {cover?.src ? (
          <Image
            src={cover.src.replace(/\.svg$/, ".png")}
            alt={cover.alt}
            width={1200}
            height={675}
            sizes="(min-width: 768px) 48rem, 100vw"
            className="mt-10 h-auto w-full border border-cream/10"
            priority
          />
        ) : null}

        <div className="mt-12 space-y-10">
          <DetailBlock label="The problem">{project.problem}</DetailBlock>
          <DetailBlock label="The solution">{project.solution}</DetailBlock>

          <DetailBlock label="What shipped">
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span aria-hidden="true" className="text-gold">
                    →
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </DetailBlock>

          <DetailBlock label="The hard part">{project.challenge}</DetailBlock>
          <DetailBlock label="The outcome">{project.outcome}</DetailBlock>

          <DetailBlock label="Stack">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="border border-gold/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gold/90"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </DetailBlock>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-cream/10 pt-8">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-yellow/60 bg-yellow/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-yellow transition-colors hover:bg-yellow hover:text-midnight"
            >
              {link.label} ↗
            </a>
          ))}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-cream/25 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-cream transition-colors hover:border-yellow hover:text-yellow"
          >
            All case files
          </Link>
        </div>

        <nav
          aria-label="Case file navigation"
          className="mt-12 flex items-center justify-between gap-4 border-t border-cream/10 pt-8 font-mono text-[10px] uppercase tracking-[0.25em]"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="text-fog transition-colors hover:text-yellow"
            >
              ← {previous.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="text-fog transition-colors hover:text-yellow"
            >
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>

      <ProjectFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </div>
  );
}
