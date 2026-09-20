"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import { SceneHeader } from "@/components/ui/SceneHeader";
import { useReveals } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/provider";

type FormState = "idle" | "sending" | "sent";

function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const { t } = useI18n();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t("contact.form.errFields"));
      return;
    }
    setError(null);
    setState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok && res.status >= 500) {
        throw new Error("server");
      }
      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(payload?.error ?? t("contact.form.errRejected"));
        setState("idle");
        return;
      }
      setState("sent");
    } catch {
      setState("sent");
    }
  };

  const red = <span className="text-neon">*</span>;

  return (
    <div className="comic-panel paper-sheet p-6 sm:p-8" data-reveal data-reveal-delay={140}>
      {state === "sent" ? (
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <span
            aria-hidden="true"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow/60 text-2xl text-yellow"
          >
            ✦
          </span>
          <h3 className="font-display text-3xl font-semibold uppercase tracking-wide text-yellow">
            {t("contact.form.sentTitle")}
          </h3>
          <p className="max-w-sm font-mono text-xs uppercase tracking-[0.3em] text-fog">
            {t("contact.form.sentText")}
          </p>
          <button
            type="button"
            onClick={() => setState("idle")}
            className="mt-4 border border-cream/30 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-cream transition-colors hover:border-yellow hover:text-yellow"
          >
            {t("contact.form.again")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            {t("contact.form.title")}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fog">
              {t("contact.form.name")} {red}
              <input
                name="name"
                autoComplete="name"
                placeholder={t("contact.form.placeholderName")}
                className="rounded-none border border-cream/30 bg-midnight px-3 py-2.5 font-sans normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-yellow focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fog">
              {t("contact.form.email")} {red}
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder={t("contact.form.placeholderEmail")}
                className="rounded-none border border-cream/30 bg-midnight px-3 py-2.5 font-sans normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-yellow focus:outline-none"
              />
            </label>
          </div>
          <label className="mt-4 flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fog">
            {t("contact.form.subject")}
            <input
              name="subject"
              autoComplete="off"
              placeholder={t("contact.form.placeholderSubject")}
              className="rounded-none border border-cream/30 bg-midnight px-3 py-2.5 font-sans normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-yellow focus:outline-none"
            />
          </label>
          <label className="mt-4 flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fog">
            {t("contact.form.message")} {red}
            <textarea
              name="message"
              rows={4}
              placeholder={t("contact.form.placeholderMessage")}
              className="resize-none rounded-none border border-cream/30 bg-midnight px-3 py-2.5 font-sans normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-yellow focus:outline-none"
            />
          </label>

          {error ? (
            <p role="alert" className="mt-3 font-mono text-[11px] uppercase tracking-widest text-neon">
              ! {error}
            </p>
          ) : null}

          <motion.button
            type="submit"
            disabled={state === "sending"}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 24 }}
            className="mt-6 inline-flex items-center gap-3 border border-yellow/60 bg-yellow/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-yellow transition-colors hover:bg-yellow hover:text-midnight disabled:opacity-60"
          >
            {state === "sending" ? t("contact.form.sending") : t("contact.form.send")} →
          </motion.button>
        </form>
      )}
    </div>
  );
}

export function ContactSignal() {
  const sectionRef = useReveals<HTMLElement>();
  const { t } = useI18n();

  return (
    <section
      ref={sectionRef}
      id="scene-contact"
      aria-labelledby="contact-title"
      className="scene"
      style={{ padding: "10svh 0" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,#08090b,#0f1117_45%,#08090b)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-10 mx-auto h-1 w-40 bg-[repeating-linear-gradient(90deg,transparent_0_12px,var(--color-neon)_12px_24px)] opacity-40"
      />
      <div className="scene-inner">
        <SceneHeader
          id="contact-title"
          chapter={8}
          label={t("contact.label")}
          title={t("contact.title")}
          caption={t("contact.caption")}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6" data-reveal>
            <a
              href={socials.emailHref}
              className="comic-panel bg-midnight/70 p-6 transition-colors hover:border-yellow/50"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                {t("contact.primaryFrequency")}
              </p>
              <p className="mt-2 break-all font-mono text-lg text-cream sm:text-xl">
                {socials.email}
              </p>
            </a>

            <ul className="grid gap-4">
              {socials.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comic-panel flex items-center justify-between gap-4 bg-midnight/70 p-5 transition-colors hover:border-yellow/50"
                  >
                    <span>
                      <span className="block font-display text-lg font-semibold uppercase tracking-wide text-cream">
                        {link.label}
                      </span>
                      <span className="block font-mono text-[11px] text-fog">
                        {link.handle}
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-yellow">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}