import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { MoebelmarkenPageClient } from "./MoebelmarkenPageClient";

export const metadata: Metadata = {
  title: "Möbelmontage Marken Wien | IKEA, XXXLutz, Mömax",
  description:
    "Möbelmontage in Wien für IKEA, XXXLutz, Mömax, Kika, Leiner, JYSK und weitere Marken. BAK Transport montiert Schränke, Betten und Büromöbel.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/moebelmontage/marken" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Möbelmontage Wien", item: "https://www.baktransport.at/leistungen/moebelmontage" },
    { "@type": "ListItem", position: 3, name: "Marken", item: "https://www.baktransport.at/leistungen/moebelmontage/marken" },
  ],
};

export default function MoebelmarkenPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <MoebelmarkenPageClient />
    </>
  );
}
