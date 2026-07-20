import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { UmzugPreisePageClient } from "./UmzugPreisePageClient";

export const metadata: Metadata = {
  title: "Umzug Preise Wien | Fixpreis statt versteckte Kosten",
  description:
    "Umzug Preise in Wien transparent erklärt: Fixpreis nach Besichtigung, faire Pakete, Versicherung und klare Leistungen mit BAK Transport Wien.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/umzug-preise" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Umzug Preise Wien", item: "https://www.baktransport.at/leistungen/umzug-preise" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Umzug Preise Wien — BAK Transport",
  provider: { "@id": "https://www.baktransport.at/#business" },
};

export default function UmzugPreisePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      <UmzugPreisePageClient />
    </>
  );
}
