"use client";

import { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { NftArtwork } from "@/data/nft";
import { ArtworkCover } from "@/components/nft/ArtworkCover";
import { usePrefersReducedMotion } from "@/lib/motion";

type NFTLightboxProps = {
  items: NftArtwork[];
  index: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
};

const iconButton =
  "flex h-11 w-11 items-center justify-center border border-cream/25 bg-midnight/80 text-cream transition-colors hover:border-yellow hover:text-yellow disabled:opacity-40 disabled:hover:border-cream/25 disabled:hover:text-cream";

export function NFTLightbox({ items, index, onClose, onSelect }: NFTLightboxProps) {
  const reduced = usePrefersReducedMotion();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const touchX = useRef<number | null>(null);

  const open = index !== null && !!items[index];
  const current = open ? items[index!]! : null;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onSelect((index + dir + items.length) % items.length);
    },
    [index, items.length, onSelect]
  );

  useEffect(() => {
    if (index === null) return;
    const prevOverflow = document.body.style.overflow;
    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 30);

    const onKey = (e: KeyboardEvent) => {
      const dialog = dialogRef.current;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      } else if (e.key === "Tab" && dialog) {
        const focusables = Array.from(
          dialog.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], input, [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusables.length === 0) return;
        const first = focusables[0]!;
        const last = focusables[focusables.length - 1]!;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [index, onClose, go]);

  const transition = { duration: reduced ? 0 : 0.18 };

  return (
    <AnimatePresence>
      {open && current ? (
        <motion.div
          key="viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`Artwork viewer — ${current.title}`}
          className="fixed inset-0 z-[75] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
        >
          <motion.div
            aria-hidden="true"
            onClick={onClose}
            className="absolute inset-0 bg-midnight/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          />

          <div
            ref={dialogRef}
            className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col overflow-hidden border border-gold/30 bg-charcoal/95 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]"
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-cream/15 px-4 py-2.5 sm:px-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
                kodecity · art vault
              </span>
              <span
                aria-live="polite"
                className="font-mono text-[10px] uppercase tracking-widest text-gold"
              >
                {String((index ?? 0) + 1).padStart(2, "0")} —{" "}
                {String(items.length).padStart(2, "0")}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close artwork viewer"
                className={iconButton}
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>

            <div
              className="grid min-h-0 flex-1 overflow-y-auto md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
              onTouchStart={(e) => {
                touchX.current = e.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(e) => {
                if (touchX.current === null) return;
                const endX = e.changedTouches[0]?.clientX ?? touchX.current;
                const dx = endX - touchX.current;
                touchX.current = null;
                if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
              }}
            >
              <div className="relative">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: reduced ? 0 : 0.12 }}
                >
                  <ArtworkCover
                    artwork={current}
                    sizes="(min-width: 1024px) 42vw, (min-width: 768px) 55vw, 100vw"
                    priority
                  />
                </motion.div>

                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous artwork"
                  className={`${iconButton} absolute left-2 top-1/2 hidden -translate-y-1/2 sm:flex`}
                >
                  <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next artwork"
                  className={`${iconButton} absolute right-2 top-1/2 hidden -translate-y-1/2 sm:flex`}
                >
                  <ChevronRight aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                  {current.character}
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold uppercase tracking-wide text-cream sm:text-3xl">
                  {current.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-cream/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-cream/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-fog">
                  {current.description}
                </p>
                <p className="mt-3 font-mono text-[9px] uppercase tracking-widest text-gold/80">
                  ai-assisted digital artwork
                </p>

                <div className="mt-auto flex gap-3 pt-5 sm:hidden">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous artwork"
                    className="flex flex-1 items-center justify-center gap-2 border border-cream/25 px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-cream transition-colors hover:border-yellow hover:text-yellow"
                  >
                    <ChevronLeft aria-hidden="true" className="h-4 w-4" /> prev
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next artwork"
                    className="flex flex-1 items-center justify-center gap-2 border border-cream/25 px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-cream transition-colors hover:border-yellow hover:text-yellow"
                  >
                    next <ChevronRight aria-hidden="true" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}