import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { NiederoesterreichPageClient } from "./NiederoesterreichPageClient";

export const metadata: Metadata = {
  title: "Umzug Niederösterreich | Wien & Umland | BAK Transport",
  description: "✓ Umzug Niederösterreich mit BAK Transport Wien: St. Pölten, Klosterneuburg, Baden, Wiener Neustadt & mehr. Fixpreis, vollversichert, schnelle Rückmeldung.",
  alternates: { canonical: "https://www.baktransport.at/regionen/niederoesterreich" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Regionen", item: "https://www.baktransport.at/regionen" },
    { "@type": "ListItem", position: 3, name: "Niederösterreich", item: "https://www.baktransport.at/regionen/niederoesterreich" },
  ],
};

export default function NiederoesterreichPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <NiederoesterreichPageClient />
    </>
  );
}
