"use client";

import { useI18n } from "@/lib/i18n/provider";

export function SkipLink() {
  const { t } = useI18n();

  return (
    <a
      href="#scene-identity"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-yellow focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-midnight"
    >
      {t("skip")}
    </a>
  );
}