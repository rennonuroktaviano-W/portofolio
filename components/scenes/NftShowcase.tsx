"use client";

import { useEffect, useRef, useState } from "react";
import { nftCollection } from "@/data/nft";
import { SceneHeader } from "@/components/ui/SceneHeader";
import { ArtworkCover } from "@/components/nft/ArtworkCover";
import { NFTLightbox } from "@/components/nft/NFTLightbox";
import { gsap, usePrefersReducedMotion, useReveals } from "@/lib/motion";

export function NftShowcase() {
  const sectionRef = useReveals<HTMLElement>();
  const framesPinRef = useRef<HTMLDivElement | null>(null);
  const framesTrackRef = useRef<HTMLUListElement | null>(null);
  const flowPinRef = useRef<HTMLDivElement | null>(null);
  const flowTrackRef = useRef<HTMLOListElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const pieces = nftCollection.artworks;
  const heroArtwork = pieces[0];

  useEffect(() => {
    const pairs: { pin: HTMLDivElement | null; track: HTMLElement | null }[] = [
      { pin: framesPinRef.current, track: framesTrackRef.current },
      { pin: flowPinRef.current, track: flowTrackRef.current },
    ];
    if (reduced || pairs.some((p) => !p.pin || !p.track)) return;

    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          pairs.forEach(({ pin, track }) => {
            if (!pin || !track) return;
            const amount = () =>
              Math.max(0, track.scrollWidth - window.innerWidth + 96);
            if (amount() <= 0) return;
            gsap.to(track, {
              x: () => -amount(),
              ease: "none",
              scrollTrigger: {
                trigger: pin,
                start: "top top",
                end: () => "+=" + amount(),
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });
          });
        });
        return () => ctx.revert();
      }
    );
    return () => mm.revert();
  }, [reduced]);

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
              aria-label={`Open artwork ${heroArtwork.title} in the viewer`}
              className="group relative block w-full overflow-hidden border border-yellow/40 bg-midnight/70 text-left shadow-[0_30px_80px_-40px_rgba(230,184,74,0.4)] transition-colors duration-300 hover:border-yellow focus-visible:border-yellow"
            >
              <span className="absolute left-4 top-4 z-10 border border-yellow/60 bg-midnight/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-yellow">
                featured
              </span>
              <span className="block w-full transition-transform duration-500 group-hover:scale-[1.03]">
                <ArtworkCover
                  artwork={heroArtwork}
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
              {heroArtwork.title}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-fog">
              {heroArtwork.character} · {heroArtwork.tags.join(" · ")}
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
      </div>

      <div ref={framesPinRef} className="mt-20 overflow-hidden">
        <div className="scene-inner">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              selected outputs
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-fog">
              the frames run sideways on wide screens
            </p>
          </div>
        </div>

        <ul
          ref={framesTrackRef}
          aria-label="Selected NFT outputs"
          className="flex flex-col gap-4 px-5 sm:px-8 lg:w-max lg:flex-row lg:items-stretch lg:gap-6 lg:px-10 lg:will-change-transform"
        >
          {pieces.map((artwork, i) => (
            <li key={artwork.id} className="shrink-0 lg:w-[30rem]">
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Open artwork ${artwork.title} in the viewer`}
                className="group relative block h-full w-full overflow-hidden border border-gold/40 bg-midnight/70 text-left transition-colors duration-300 hover:border-yellow focus-visible:border-yellow"
              >
                <span className="absolute left-4 top-4 z-10 border border-gold/60 bg-midnight/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-gold">
                  fig {String(i + 1).padStart(2, "0")} / 03
                </span>
                <span className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-midnight/95 to-transparent p-4 pt-14">
                  <span className="block font-display text-xl font-semibold uppercase tracking-wide text-cream">
                    {artwork.title}
                  </span>
                  <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-gold">
                    {artwork.character} · {artwork.tags.join(" · ")}
                  </span>
                </span>
                <span className="block w-full transition-transform duration-500 group-hover:scale-[1.03]">
                  <ArtworkCover
                    artwork={artwork}
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                </span>
              </button>
            </li>
          ))}

          <li
            aria-hidden="true"
            className="flex shrink-0 items-center px-6 lg:w-72"
          >
            <div>
              <p className="font-display text-5xl font-semibold text-outline">
                end of the run
              </p>
              <p className="mt-3 max-w-[16rem] font-mono text-[11px] uppercase tracking-widest text-fog">
                three frames — keep scrolling to see how they were made
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div ref={flowPinRef} className="mt-20 overflow-hidden">
        <div className="scene-inner">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              creative workflow
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-fog">
              five steps — the workflow runs sideways on wide screens
            </p>
          </div>
        </div>

        <ol
          ref={flowTrackRef}
          aria-label="Creative workflow steps"
          className="flex flex-col gap-4 px-5 sm:px-8 lg:w-max lg:flex-row lg:items-stretch lg:gap-6 lg:px-10 lg:will-change-transform"
        >
          {nftCollection.process.map((step, i) => (
            <li key={step.step} className="shrink-0 lg:w-[26rem]">
              <div
                className="comic-panel paper-sheet h-full p-5"
                data-reveal
                data-reveal-delay={(i % 5) * 70}
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
              </div>
            </li>
          ))}

          <li
            aria-hidden="true"
            className="flex shrink-0 items-center px-6 lg:w-72"
          >
            <div>
              <p className="font-display text-5xl font-semibold text-outline">
                end of the flow
              </p>
              <p className="mt-3 max-w-[16rem] font-mono text-[11px] uppercase tracking-widest text-fog">
                from concept to collectible — in five steps
              </p>
            </div>
          </li>
        </ol>
      </div>

      <NFTLightbox
        items={pieces}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onSelect={setActiveIndex}
      />
    </section>
  );
}