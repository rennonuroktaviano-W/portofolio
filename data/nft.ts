export type NftArtwork = {
  id: string;
  title: string;
  character: string;
  image: string;
  description: string;
  tags: string[];
};

export type NftCreativeStep = {
  step: string;
  title: string;
  short: string;
};

export const nftCollection: {
  label: string;
  title: string;
  caption: string;
  description: string;
  notes: string[];
  flow: string[];
  stack: string[];
  process: NftCreativeStep[];
  character: string;
  artworks: NftArtwork[];
} = {
  label: "the creative wing · concept to collectible",
  title: "AI-Assisted NFT Collection",
  caption:
    "An experimental studio wing — character design and digital collectibles explored through AI-assisted image generation. A learning exercise in how generative tools become part of a human creative workflow, not the whole story.",
  description:
    "I explored AI-assisted creative workflows to develop a series of NFT-style digital collectibles centered around a consistent character identity. The project involved concept development, visual direction, iterative generation, outfit and accessory variations, background studies, and refinement of selected artworks.",
  notes: [
    "The single recurring identity is HRLN — a rain-coat silhouette the city already knows.",
    "Every frame is a real experiment run through image-generation tooling, then selected and refined by hand.",
    "This is creative research — not a minted collection, not a marketplace, not a sales pitch.",
  ],
  flow: [
    "concept",
    "direction",
    "generation",
    "iteration",
    "refinement",
    "artwork",
  ],
  stack: [
    "AI-Assisted",
    "Generative AI",
    "Image Prompting",
    "ChatGPT",
    "Gemini",
    "DeepSeek",
    "Claude",
    "Creative Direction",
    "Character Design",
    "Visual Iteration",
  ],
  process: [
    {
      step: "01",
      title: "Concept",
      short:
        "Designing the character identity — silhouette, mood, and the fictional street it belongs to.",
    },
    {
      step: "02",
      title: "Generation",
      short:
        "Prompt experiments across ChatGPT, Gemini, DeepSeek, and Claude to discover visual directions.",
    },
    {
      step: "03",
      title: "Iteration",
      short:
        "Pushing outfits, accessories, lighting, and backgrounds — one identity, many variations.",
    },
    {
      step: "04",
      title: "Refinement",
      short:
        "Selecting the strongest results and refining them into final, presentable pieces.",
    },
    {
      step: "05",
      title: "Artwork",
      short:
        "Assembling the selected pieces into a coherent final set — frame, tone, and the finished run.",
    },
  ],
  character: "HRLN",
  artworks: [
    {
      id: "ms-central-cee",
      title: "Central Cee",
      character: "HRLN",
      image: "/nft/ms-central-cee.png",
      description:
        "A streetwear-inspired outfit study — sharp layers and bold branding under the usual low light.",
      tags: ["Outfit", "Streetwear"],
    },
    {
      id: "ms-travis-scott",
      title: "Travis Scott",
      character: "HRLN",
      image: "/nft/ms-travis-scott.png",
      description:
        "A darker, tour-merch take on the same silhouette — graphic layers and a moody palette.",
      tags: ["Outfit", "Dark"],
    },
    {
      id: "ms-body",
      title: "Body Base",
      character: "HRLN",
      image: "/nft/ms-body.png",
      description:
        "The blank base body — a clean slate before any outfit pass; posing for the collection.",
      tags: ["Base", "Model"],
    },
  ],
};