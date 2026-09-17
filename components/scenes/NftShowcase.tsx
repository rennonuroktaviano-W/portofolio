"use client";

import { useState } from "react";
import { nftCollection, nftGallery } from "@/data/nft";
import { SceneHeader } from "@/components/ui/SceneHeader";
import { ArtworkCover } from "@/components/nft/ArtworkCover";
import { NFTCard } from "@/components/nft/NFTCard";
import { NFTLightbox } from "@/components/nft/NFTLightbox";
import { useReveals } from "@/lib/motion";

export function NftShowcase() {
  const sectionRef = useReveals<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="scene-nft"
      aria-labelledby="nft-title"
      className="scene"
      style={{ padding: "10svh 0" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,#08090b,#0e1118_45%,#08090b)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-10 mx-auto h-1 w-40 bg-[repeating-linear-gradient(90deg,transparent_0_12px,var(--color-gold)_12px_24px)] opacity-30"
      />

      <div className="scene-inner">
        <SceneHeader
          id="nft-title"
          chapter={7}
          label={nftCollection.label}
          title={nftCollection.title}
          caption={nftCollection.caption}
        />

        <ul
          aria-label="Creative workflow"
          className="mb-12 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-widest text-fog"
        >
          {nftCollection.flow.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              {i > 0 ? (
                <span aria-hidden="true" className="text-gold">
                  →
                </span>
              ) : null}
              <span>{step}</span>
            </li>
          ))}
        </ul>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div data-reveal>
            <button
              type="button"
              onClick={() => setActiveIndex(0)}
              aria-label={`Open featured artwork ${nftCollection.featured.title} in the viewer`}
              className="group relative block w-full overflow-hidden border border-yellow/40 bg-midnight/70 text-left shadow-[0_30px_80px_-40px_rgba(230,184,74,0.4)] transition-colors duration-300 hover:border-yellow focus-visible:border-yellow"
            >
              <span className="absolute left-4 top-4 z-10 border border-yellow/60 bg-midnight/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-yellow">
                featured
              </span>
              <span className="block w-full transition-transform duration-500 group-hover:scale-[1.03]">
                <ArtworkCover
                  artwork={nftCollection.featured}
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  priority
                />
              </span>
            </button>
          </div>

          <div data-reveal data-reveal-delay={120}>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
              featured piece
            </p>
            <h3 className="font-display text-3xl font-semibold uppercase tracking-wide text-cream sm:text-4xl">
              {nftCollection.featured.title}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-fog">
              {nftCollection.featured.character} ·{" "}
              {nftCollection.featured.tags.join(" · ")}
            </p>

            <p className="mt-6 text-sm leading-relaxed text-cream/85 sm:text-base">
              {nftCollection.description}
            </p>
            <p className="mt-4 border-l-2 border-blood/60 pl-4 font-mono text-[11px] uppercase tracking-widest text-neon/90">
              {nftCollection.notes[2]}
            </p>

            <p className="mb-3 mt-8 font-mono text-xs uppercase tracking-[0.3em] text-gold">
              creative stack
            </p>
            <ul className="flex flex-wrap gap-2">
              {nftCollection.stack.map((tag) => (
                <li
                  key={tag}
                  className="border border-gold/40 bg-gold/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-gold"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            creative workflow
          </p>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nftCollection.process.map((step, i) => (
              <li
                key={step.step}
                className="comic-panel paper-sheet p-5"
                data-reveal
                data-reveal-delay={(i % 4) * 90}
              >
                <span className="font-display text-4xl font-semibold leading-none text-outline-gold">
                  {step.step}
                </span>
                <h4 className="mt-3 font-display text-lg font-semibold uppercase tracking-wide text-cream">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-fog">
                  {step.short}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              selected outputs
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-fog">
              tap any piece to open the viewer
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {nftCollection.artworks.map((artwork, i) => (
              <NFTCard
                key={artwork.id}
                artwork={artwork}
                index={i + 1}
                delay={(i % 4) * 80}
                onSelect={() => setActiveIndex(i + 1)}
              />
            ))}
          </ul>
        </div>
      </div>

      <NFTLightbox
        items={nftGallery}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onSelect={setActiveIndex}
      />
    </section>
  );
}