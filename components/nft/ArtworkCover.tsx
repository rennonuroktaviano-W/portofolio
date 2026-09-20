"use client";

import { useState } from "react";
import Image from "next/image";
import type { NftArtwork } from "@/data/nft";
import { useI18n } from "@/lib/i18n/provider";

type ArtworkCoverProps = {
  artwork: NftArtwork;
  sizes: string;
  priority?: boolean;
};

export function ArtworkCover({ artwork, sizes, priority }: ArtworkCoverProps) {
  const [broken, setBroken] = useState(false);
  const { t } = useI18n();

  return (
    <div className="relative aspect-square w-full overflow-hidden bg-[linear-gradient(160deg,#141821,#08090b_55%,#0c0e13)]">
      {!broken ? (
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
          <div className="absolute inset-0 halftone opacity-30" />
          <p className="relative font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
            {t("lightbox.caseVisual")}
          </p>
          <span className="relative px-4 font-display text-xl font-semibold uppercase tracking-wide text-outline sm:text-2xl">
            {artwork.title}
          </span>
        </div>
      )}
    </div>
  );
}