type SceneHeaderProps = {
  chapter: number;
  label: string;
  title: string;
  caption?: string;
  id?: string;
};

export function SceneHeader({ chapter, label, title, caption, id }: SceneHeaderProps) {
  return (
    <header className="mb-10 sm:mb-14">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-gold">
        <span className="text-fog">CH. {String(chapter).padStart(2, "0")}</span>
        {" · "}
        {label}
      </p>
      <h2
        id={id}
        className="font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-cream sm:text-6xl"
      >
        {title}
      </h2>
      {caption ? (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-fog sm:text-base">
          {caption}
        </p>
      ) : null}
      <div aria-hidden="true" className="mt-6 h-px w-24 bg-gradient-to-r from-gold to-transparent">
        <i className="block h-px w-3 -translate-x-9 bg-yellow" />
      </div>
    </header>
  );
}