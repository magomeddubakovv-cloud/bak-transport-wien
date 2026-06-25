import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { NotfallumzugPageClient } from "./NotfallumzugPageClient";

export const metadata: Metadata = {
  title: "Notfallumzug Wien | Kurzfristig & 24h | BAK Transport",
  description: "✓ Notfallumzug Wien: BAK Transport reagiert kurzfristig – oft noch am selben Tag. 24/7 erreichbar, kein Notfallaufschlag, verbindlicher Fixpreis. Jetzt anrufen!",
  alternates: { canonical: "https://www.baktransport.at/leistungen/notfallumzug" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.baktransport.at/leistungen" },
    { "@type": "ListItem", position: 3, name: "Notfallumzug Wien", item: "https://www.baktransport.at/leistungen/notfallumzug" },
  ],
};

export default function NotfallumzugPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <NotfallumzugPageClient />
    </>
  );
}
