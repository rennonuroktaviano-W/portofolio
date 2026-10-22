import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";
import { aboutMetadata } from "@/lib/seo";

export const metadata: Metadata = aboutMetadata("en");

export default function AboutPageRoute() {
  return <AboutPage locale="en" />;
}
