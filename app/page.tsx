import { HeroCityScene } from "@/components/scenes/HeroCityScene";
import { IdentityReveal } from "@/components/scenes/IdentityReveal";
import { AboutCaseFile } from "@/components/scenes/AboutCaseFile";
import { TechArsenal } from "@/components/scenes/TechArsenal";
import { ProjectArchive } from "@/components/scenes/ProjectArchive";
import { ProjectShowcase } from "@/components/scenes/ProjectShowcase";
import { NftShowcase } from "@/components/scenes/NftShowcase";
import { ExperienceTrack } from "@/components/scenes/ExperienceTrack";
import { DeveloperLab } from "@/components/scenes/DeveloperLab";
import { GitActivitySignal } from "@/components/scenes/GitActivitySignal";
import { ContactSignal } from "@/components/scenes/ContactSignal";
import { FinalScene } from "@/components/scenes/FinalScene";
import { SceneIndicator } from "@/components/ui/SceneIndicator";
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
      <a
        href="#scene-identity"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-yellow focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-midnight"
      >
        Skip to content
      </a>

      <main id="main" className="relative">
        <HeroCityScene />
        <IdentityReveal />
        <AboutCaseFile />
        <TechArsenal />
        <ProjectArchive />
        <ProjectShowcase />
        <NftShowcase />
        <ExperienceTrack />
        <DeveloperLab />
        <GitActivitySignal />
        <ContactSignal />
        <FinalScene />
      </main>

      <SceneIndicator />
      <RainLayer />
      <FogLayer />
      <CursorSpotlight />
      <AmbientAudioControl />
      <EasterEgg />
      <GrainOverlay />
    </>
  );
}