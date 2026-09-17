export type Profile = {
  displayName: string;
  developerTitle: string;
  positioning: string;
  shortBio: string;
  bio: string[];
  currentFocus: string;
  location: string;
  status: string;
  education: string;
  interests: string[];
  philosophy: string;
  caseNumber: string;
};

export const profile: Profile = {
  displayName: "RENNO NUR OKTAVIANO",
  developerTitle: "Full-Stack Developer",
  positioning:
    "I build dependable web systems that keep the lights on after midnight.",
  shortBio:
    "Full-stack developer with a taste for clean architecture, cinematic micro-interactions, and software that survives real-world traffic.",
  bio: [
    "Every product I ship starts as a question: how do we make something useful feel effortless? I design and build end-to-end web experiences — from database schema to responsive interface — and I care deeply about performance, accessibility, and the quiet details users feel but never see.",
    "When the screen goes dark I'm usually sketching interfaces, reading about distributed systems, or hunting for the perfect type ramp. I treat code like craft: deliberate, documented, and never shipped half-polished.",
  ],
  currentFocus: "Full-stack web development & interactive experiences",
  location: "Indonesia · UTC+7",
  status: "OPEN FOR PROJECTS",
  education: "Informatics — placeholder institution",
  interests: [
    "Cinematic UI",
    "Typography",
    "Retro technology",
    "Distributed systems",
    "Indie game design",
    "Jazz noir soundtracks",
  ],
  philosophy:
    "Good software is like a well-lit street at midnight: calm, predictable, and quietly getting you where you need to go.",
  caseNumber: "FILE NO. RN-001",
};