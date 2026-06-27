import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { OesterreichPageClient } from "./OesterreichPageClient";

export const metadata: Metadata = {
  title: "Umzug Österreich | Bundesweit mit Fixpreis | BAK Transport",
  description: "✓ Umzug Österreich mit BAK Transport Wien: Graz, Linz, Salzburg, Innsbruck & alle Bundesländer. Fixpreis, vollversichert, kostenlose Besichtigung, Rückmeldung in 60 Min.",
  alternates: { canonical: "https://www.baktransport.at/regionen/oesterreich" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Regionen", item: "https://www.baktransport.at/regionen" },
    { "@type": "ListItem", position: 3, name: "Österreich", item: "https://www.baktransport.at/regionen/oesterreich" },
  ],
};

export default function OesterreichPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <OesterreichPageClient />
    </>
  );
}
