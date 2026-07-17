import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { AltbauUmzugWienPageClient } from "./AltbauUmzugWienPageClient";

export const metadata: Metadata = {
  title: "Umzug im Altbau Wien | Gründerzeithaus ohne Lift",
  description:
    "Umzug im Wiener Altbau: enge Stiegenhäuser, fehlender Lift und Stuckdecken — was beim Gründerzeithaus-Umzug zu beachten ist.",
  alternates: { canonical: "https://www.baktransport.at/ratgeber/altbau-umzug-wien" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was, wenn mein Möbelstück nicht durchs Stiegenhaus passt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei sperrigen Möbeln oder engen Stiegen prüfen wir Alternativen wie Demontage oder einen Außen-/Möbellift über das Fenster.",
      },
    },
    {
      "@type": "Question",
      name: "Berechnet BAK Transport einen Aufschlag für Altbauten ohne Lift?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das hängt vom Einzelfall ab — Stockwerk, Stiegenbreite und Möbelmenge fließen in den Fixpreis nach der kostenlosen Besichtigung ein. Überraschungen am Umzugstag gibt es dabei nicht.",
      },
    },
  ],
};

export default function AltbauUmzugWienPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <AltbauUmzugWienPageClient />
    </>
  );
}
