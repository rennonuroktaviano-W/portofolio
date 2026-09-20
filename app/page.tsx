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