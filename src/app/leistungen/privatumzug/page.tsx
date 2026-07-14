import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { PrivatumzugPageClient } from "./PrivatumzugPageClient";

export const metadata: Metadata = {
  title: "Privatumzug Wien ab €650 | Fixpreis ✓ Vollversichert | BAK Transport",
  description: "✓ Privatumzug Wien ab €650 – stressfrei & vollversichert. BAK Transport: Alle 23 Bezirke, kostenlose Besichtigung vor Ort, verbindlicher Fixpreis, Rückmeldung in 60 Min.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/privatumzug" },
  keywords: ["Privatumzug Wien", "Umzug Wien Fixpreis", "Privatumzug Wien günstig"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Privatumzug Wien", item: "https://www.baktransport.at/leistungen/privatumzug" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Privatumzug Wien — BAK Transport",
  provider: { "@id": "https://www.baktransport.at/#business" },
};

export default function PrivatumzugPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      <PrivatumzugPageClient />
    </>
  );
}
