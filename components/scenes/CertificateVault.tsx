"use client";

import { certificates } from "@/data/certificates";
import Image from "next/image";
import { SceneHeader } from "@/components/ui/SceneHeader";
import { useReveals } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/provider";

export function CertificateVault() {
  const sectionRef = useReveals<HTMLElement>();
  const { t } = useI18n();

  return (
    <section
      ref={sectionRef}
      id="scene-certificates"
      aria-labelledby="certificates-title"
      className="scene"
      style={{ padding: "10svh 0" }}
    >
      <div className="scene-inner">
        <SceneHeader
          id="certificates-title"
          chapter={5}
          label={t("certificates.label")}
          title={t("certificates.title")}
          caption={t("certificates.caption")}
        />

        <ul className="grid items-start gap-5 sm:grid-cols-2" role="list">
          {certificates.map((certificate, i) => (
            <li key={certificate.id} data-reveal data-reveal-delay={(i * 0.12).toFixed(2)}>
              <article className="comic-panel paper-sheet group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-cream/15">
                  <Image
                    src={certificate.image}
                    alt={t(`certificates.items.${certificate.id}.title`)}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,6,8,0.55),transparent_55%)]"
                  />
                  <span className="stamp absolute right-3 top-3 bg-midnight/60 backdrop-blur-sm">
                    {t("certificates.verified")}
                  </span>
                  <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/80">
                    {certificate.issuer} · {certificate.year}
                  </span>
                </div>

                <div className="flex flex-col p-5 sm:p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                    {t("certificates.issuer")} · {certificate.issuer}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-semibold uppercase tracking-wide text-cream sm:text-2xl">
                    {t(`certificates.items.${certificate.id}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">
                    {t(`certificates.items.${certificate.id}.description`)}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {certificate.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-cream/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-cream/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-cream/15 pt-4">
                    <a
                      href={certificate.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-yellow transition-colors hover:text-cream"
                    >
                      <span className="h-px w-6 bg-yellow/60" />
                      {t("certificates.open")}
                    </a>
                    <span
                      aria-hidden="true"
                      className="font-mono text-[9px] uppercase tracking-widest text-fog/50"
                    >
                      fcc · {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-6 border-t border-cream/15 pt-4 font-mono text-[10px] uppercase tracking-widest text-fog">
          {t("certificates.hint")}
        </p>
      </div>
    </section>
  );
}