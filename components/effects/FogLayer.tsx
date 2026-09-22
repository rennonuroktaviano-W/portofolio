export function FogLayer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
    >
      <div
        className="fog-layer absolute -left-1/4 bottom-[8%] h-40 w-[150vw] rounded-full opacity-40 blur-xl md:blur-3xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(140,150,165,0.16) 35%, rgba(140,150,165,0.22) 50%, rgba(140,150,165,0.12) 65%, transparent)",
          animationDuration: "30s",
        }}
      />
      <div
        className="fog-layer absolute -right-1/4 top-[30%] h-48 w-[140vw] rounded-full opacity-30 blur-xl md:blur-3xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(120,130,145,0.14) 40%, rgba(120,130,145,0.2) 55%, transparent)",
          animationDuration: "42s",
          animationDelay: "-8s",
        }}
      />
      <div
        className="fog-layer absolute left-[-20%] top-[62%] hidden h-36 w-[120vw] rounded-full opacity-25 blur-lg md:block md:blur-2xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(160,170,185,0.12) 45%, transparent)",
          animationDuration: "50s",
          animationDelay: "-20s",
        }}
      />
    </div>
  );
}