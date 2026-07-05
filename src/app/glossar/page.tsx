import type { Metadata } from "next";
import { GlossarPageClient } from "./GlossarPageClient";

export const metadata: Metadata = {
  title: "Umzug Glossar Wien | Begriffe einfach erklärt",
  description:
    "Umzug Glossar von BAK Transport Wien: Fixpreis, Besichtigung, Halteverbotszone, Möbelmontage, Transportversicherung und mehr einfach erklärt.",
  alternates: { canonical: "https://www.baktransport.at/glossar" },
};

export default function GlossarPage() {
  return <GlossarPageClient />;
}
