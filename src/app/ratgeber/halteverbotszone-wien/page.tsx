import type { Metadata } from "next";
import { HalteverbotszoneWienPageClient } from "./HalteverbotszoneWienPageClient";

export const metadata: Metadata = {
  title: "Halteverbotszone Wien beantragen | Umzug",
  description:
    "Halteverbotszone für Ihren Umzug in Wien: Zuständigkeit (MA 46), Fristen und Kosten der mobilen Halteverbotszone im Überblick.",
  alternates: { canonical: "https://www.baktransport.at/ratgeber/halteverbotszone-wien" },
};

export default function HalteverbotszoneWienPage() {
  return <HalteverbotszoneWienPageClient />;
}
