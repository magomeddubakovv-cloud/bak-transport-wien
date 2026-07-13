import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { VorteilePageClient } from "./VorteilePageClient";

export const metadata: Metadata = {
  title: "Vorteile einer seriösen Umzugsfirma | BAK Transport Wien",
  description:
    "✓ Seriöse Umzugsfirma erkennen: Gewerbeberechtigung, Firmenbucheintrag, €100.000 Versicherung, Fixpreis nach Besichtigung. Vorteile von BAK Transport gegenüber Eigenregie & unseriösen Anbietern.",
  alternates: { canonical: "https://www.baktransport.at/vorteile" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Vorteile", item: "https://www.baktransport.at/vorteile" },
  ],
};

export default function VorteilePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <VorteilePageClient />
    </>
  );
}
