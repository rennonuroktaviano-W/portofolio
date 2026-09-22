export type Profile = {
  developerTitle: string;
  bio: string[];
  interests: string[];
  caseNumber: string;
};

export const profile: Profile = {
  developerTitle: "Full-Stack Developer",
  bio: [
    "Every product I ship starts as a question: how do we make something useful feel effortless? I design and build end-to-end web experiences — from database schema to responsive interface — and I care deeply about performance, accessibility, and the quiet details users feel but never see.",
    "When the screen goes dark I'm usually sketching interfaces, reading about distributed systems, or hunting for the perfect type ramp. I treat code like craft: deliberate, documented, and never shipped half-polished.",
  ],
  interests: [
    "Cinematic UI",
    "Typography",
    "Retro technology",
    "Distributed systems",
    "Indie game design",
    "Jazz noir soundtracks",
  ],
  caseNumber: "FILE NO. RN-001",
};