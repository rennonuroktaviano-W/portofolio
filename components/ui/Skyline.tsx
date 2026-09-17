type Building = {
  w: number;
  h: number;
  lit: boolean;
  antenna?: number;
};

const rowA: Building[] = [
  { w: 7, h: 38, lit: false, antenna: 10 },
  { w: 5, h: 62, lit: true },
  { w: 8, h: 46, lit: true },
  { w: 4, h: 78, lit: false, antenna: 14 },
  { w: 6, h: 55, lit: true },
  { w: 9, h: 40, lit: false },
  { w: 5, h: 70, lit: true },
  { w: 7, h: 50, lit: true },
  { w: 4, h: 34, lit: false },
  { w: 6, h: 64, lit: true },
  { w: 8, h: 30, lit: false },
  { w: 5, h: 48, lit: true },
  { w: 7, h: 42, lit: false, antenna: 8 },
  { w: 6, h: 58, lit: true },
];

const rowB: Building[] = [
  { w: 9, h: 26, lit: false },
  { w: 7, h: 44, lit: true },
  { w: 5, h: 60, lit: true },
  { w: 9, h: 34, lit: false },
  { w: 6, h: 50, lit: true },
  { w: 8, h: 28, lit: true },
  { w: 5, h: 66, lit: false, antenna: 12 },
  { w: 7, h: 38, lit: true },
  { w: 9, h: 30, lit: true },
  { w: 6, h: 52, lit: false },
  { w: 8, h: 40, lit: true },
  { w: 5, h: 56, lit: true },
];

function windowPattern(lit: boolean) {
  const color = lit
    ? "rgba(230,184,74,0.85)"
    : "rgba(165,167,170,0.10)";
  return {
    backgroundColor: lit ? "#0d0f14" : "#090a0d",
    backgroundImage: `radial-gradient(circle 1.4px at 14px 16px, ${color} 1px, transparent 1.9px)`,
    backgroundSize: "28px 30px",
    backgroundPosition: "0 0, 8px 0",
  };
}

function BuildingBlock({ b, className }: { b: Building; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative shrink-0 ${className ?? ""}`}
      style={{
        width: `${b.w}%`,
        height: `${b.h}%`,
        ...windowPattern(b.lit),
      }}
    >
      {b.antenna ? (
        <span
          className="absolute left-1/2 w-px -translate-x-1/2 bg-gray-700"
          style={{ height: `${b.antenna}px`, top: `-${b.antenna}px` }}
        />
      ) : null}
    </div>
  );
}

export function Skyline() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 z-10 flex h-full w-full flex-col justify-end"
    >
      <div className="sky-row-back flex h-[62%] w-full items-end justify-between px-1 opacity-70 will-change-transform">
        {rowB.map((b, i) => (
          <BuildingBlock key={`b-${i}`} b={b} />
        ))}
      </div>
      <div className="sky-row-front flex h-[70%] w-full items-end justify-between px-1 opacity-90 will-change-transform">
        {rowA.map((b, i) => (
          <BuildingBlock key={`a-${i}`} b={b} />
        ))}
      </div>
    </div>
  );
}