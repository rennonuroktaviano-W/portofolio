"use client";

import type { NftArtwork } from "@/data/nft";
import { ArtworkCover } from "@/components/nft/ArtworkCover";

type NFTCardProps = {
  artwork: NftArtwork;
  index: number;
  delay?: number;
  onSelect: () => void;
};

export function NFTCard({ artwork, index, delay = 0, onSelect }: NFTCardProps) {
  return (
    <li data-reveal data-reveal-delay={delay}>
      <button
        type="button"
        onClick={onSelect}
        aria-label={`Open artwork ${artwork.title} in the viewer`}
        className="group comic-panel block h-full w-full bg-midnight/70 p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_45px_-28px_rgba(200,155,60,0.4)] focus-visible:border-yellow"
      >
        <span className="relative block w-full">
          <ArtworkCover
            artwork={artwork}
            sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
          />
          <span className="absolute left-3 top-3 z-10 bg-midnight/70 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-fog">
            output {String(index).padStart(2, "0")}
          </span>
          <span
            aria-hidden="true"
            className="absolute bottom-4 right-4 z-10 flex h-8 w-8 items-center justify-center border border-gold/60 bg-midnight/80 font-mono text-lg text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            +
          </span>
        </span>

        <span className="mt-3 flex flex-col gap-1">
          <span className="font-display text-lg font-semibold uppercase tracking-wide text-cream">
            {artwork.title}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-fog">
            {artwork.character}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-gold/80">
            ai-assisted digital artwork
          </span>
          <span className="mt-1 flex flex-wrap gap-1.5">
            {artwork.tags.map((tag) => (
              <span
                key={tag}
                className="border border-cream/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-cream/70"
              >
                {tag}
              </span>
            ))}
          </span>
        </span>
      </button>
    </li>
  );
}