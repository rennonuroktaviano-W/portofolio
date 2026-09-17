"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";
import { languages } from "@/lib/i18n/languages";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed right-3 top-3 z-[60] sm:right-5 sm:top-5"
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={t("languageSwitcher.label")}
        className="flex items-center gap-2 rounded-sm border border-cream/25 bg-midnight/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-cream backdrop-blur-sm transition-colors hover:border-yellow hover:text-yellow"
      >
        <Globe aria-hidden="true" className="h-4 w-4" />
        <span className="hidden sm:inline">{locale}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <ul
          role="menu"
          className="absolute right-0 mt-2 max-h-[60svh] w-52 overflow-y-auto border border-cream/25 bg-charcoal/95 py-1 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-sm"
        >
          {languages.map((lang) => {
            const active = lang.code === locale;
            return (
              <li key={lang.code} role="none">
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => {
                    setLocale(lang.code);
                    setOpen(false);
                  }}
                  className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:bg-midnight/80 hover:text-yellow"
                >
                  <span>{lang.native}</span>
                  {active ? (
                    <Check aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-yellow" />
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}