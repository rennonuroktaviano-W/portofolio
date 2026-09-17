export function Searchlight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
    >
      <div className="absolute bottom-[-10px] left-1/2 h-14 w-14 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,184,74,0.45),transparent_70%)] blur-lg" />

      <div className="searchlight-beam absolute bottom-[-10px] left-1/2 h-[340px] w-[54px] origin-bottom -ml-[27px]">
        <div className="searchlight-flicker absolute inset-0 bg-[linear-gradient(to_top,rgba(230,184,74,0.55),rgba(230,184,74,0.18)_42%,transparent_74%)] blur-sm [clip-path:polygon(50%_100%,0_0,100%_0)]" />
      </div>

      <div className="searchlight-beam searchlight-beam-slow absolute bottom-[-10px] left-1/2 h-[360px] w-[170px] origin-bottom -ml-[85px]">
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(230,184,74,0.26),rgba(230,184,74,0.08)_45%,transparent_74%)] blur-xl [clip-path:polygon(50%_100%,0_0,100%_0)]" />
      </div>
    </div>
  );
}