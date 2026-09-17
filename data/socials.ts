export type SocialLink = {
  label: string;
  handle: string;
  url: string;
};

export const socials: {
  email: string;
  emailHref: string;
  links: SocialLink[];
} = {
  email: "rennonuroktaviano@gmail.com",
  emailHref: "mailto:rennonuroktaviano@gmail.com",
  links: [
    {
      label: "GitHub",
      handle: "@rennonuroktaviano-W",
      url: "https://github.com/rennonuroktaviano-W",
    },
    {
      label: "LinkedIn",
      handle: "Renno Nur Oktaviano",
      url: "https://www.linkedin.com/in/rennonuroktaviano",
    },
    {
      label: "Twitter / X",
      handle: "@rennonuroktaviano",
      url: "https://x.com/rennonuroktaviano",
    },
  ],
};