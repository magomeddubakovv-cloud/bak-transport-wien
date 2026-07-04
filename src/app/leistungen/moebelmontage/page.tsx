import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { MoebelmontagePageClient } from "./MoebelmontagePageClient";

export const metadata: Metadata = {
  title: "Möbelmontage Wien | IKEA & alle Marken | Fixpreis | BAK Transport",
  description: "✓ Möbelmontage Wien: BAK Transport baut alle Möbelmarken auf & ab – IKEA, BoConcept, Hülsta & mehr. Auch ohne Umzug buchbar. Fixpreis, schnell & zuverlässig.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/moebelmontage" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Möbelmontage Wien", item: "https://www.baktransport.at/leistungen/moebelmontage" },
  ],
};

export default function MoebelmontlagePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <MoebelmontagePageClient />
    </>
  );
}
