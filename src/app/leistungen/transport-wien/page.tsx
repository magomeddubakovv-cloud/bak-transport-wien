import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { TransportWienPageClient } from "./TransportWienPageClient";

export const metadata: Metadata = {
  title: "Transport Wien | Transportunternehmen für Umzug & Möbeltransport | BAK Transport",
  description: "✓ Transport Wien: Ihr Transportunternehmen für Privatumzug, Firmenumzug, Möbeltransport, Kleintransporte & Schwerlasttransport. Fixpreis, €100.000 Versicherung, alle 23 Bezirke. Jetzt anfragen!",
  alternates: { canonical: "https://www.baktransport.at/leistungen/transport-wien" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Transport Wien", item: "https://www.baktransport.at/leistungen/transport-wien" },
  ],
};

export default function TransportWienPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <TransportWienPageClient />
    </>
  );
}
