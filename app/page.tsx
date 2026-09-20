import { HeroCityScene } from "@/components/scenes/HeroCityScene";
import { IdentityReveal } from "@/components/scenes/IdentityReveal";
import { AboutCaseFile } from "@/components/scenes/AboutCaseFile";
import { TechArsenal } from "@/components/scenes/TechArsenal";
import { NftShowcase } from "@/components/scenes/NftShowcase";
import { ExperienceTrack } from "@/components/scenes/ExperienceTrack";
import { ContactSignal } from "@/components/scenes/ContactSignal";
import { FinalScene } from "@/components/scenes/FinalScene";
import { SceneIndicator } from "@/components/ui/SceneIndicator";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { SkipLink } from "@/components/ui/SkipLink";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { RainLayer } from "@/components/effects/RainLayer";
import { FogLayer } from "@/components/effects/FogLayer";
import { EasterEgg } from "@/components/effects/EasterEgg";
import {
  AmbientAudioControl,
  CursorSpotlight,
} from "@/components/audio/AmbientAudioControl";

export default function Home() {
  return (
    <>
      <SkipLink />

      <main id="main" className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#07080a_0%,#0a0c12_18%,#0e1118_42%,#0c0e15_64%,#090a0e_86%,#07080a_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[70svh] bg-[radial-gradient(ellipse_90%_55%_at_50%_-12%,rgba(230,184,74,0.09),transparent_70%)]"
        />
        <HeroCityScene />
        <IdentityReveal />
        <AboutCaseFile />
        <TechArsenal />
        <NftShowcase />
        <ExperienceTrack />
        <ContactSignal />
        <FinalScene />
      </main>

      <SceneIndicator />
      <LanguageSwitcher />
      <RainLayer />
      <FogLayer />
      <CursorSpotlight />
      <AmbientAudioControl />
      <EasterEgg />
      <GrainOverlay />
    </>
  );
}