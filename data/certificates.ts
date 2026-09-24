export type Certificate = {
  id: string;
  issuer: string;
  year: string;
  href: string;
  image: string;
  tags: string[];
};

export const certificates: Certificate[] = [
  {
    id: "fcc-responsive-web-design",
    issuer: "freeCodeCamp",
    year: "2025",
    href: "https://drive.google.com/file/d/1X5r0V0B62--BXDv3fE_gU6drpJW0LYpM/view",
    image: "/certificates/fcc-responsive-web-design.png",
    tags: ["HTML", "CSS", "Accessibility", "Responsive"],
  },
];