import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { WienPageClient } from "./WienPageClient";

export const metadata: Metadata = {
  title: "Umzug Wien | Alle 23 Bezirke | ab €650 Fixpreis | BAK Transport",
  description: "✓ Umzugsfirma Wien: BAK Transport führt Umzüge in allen 23 Wiener Bezirken durch. Ortskundig, vollversichert, Fixpreis ab €650. Kostenlose Besichtigung & 60 Min Rückmeldung.",
  alternates: { canonical: "https://www.baktransport.at/regionen/wien" },
  keywords: [
    "Umzug Wien", "Umzugsfirma Wien", "Umzugsunternehmen Wien",
    "Umzug Wien 1 Bezirk", "Umzug Wien 2 Bezirk", "Umzug Wien 3 Bezirk",
    "Umzug Innere Stadt", "Umzug Leopoldstadt", "Umzug Favoriten",
    "Umzug Floridsdorf", "Umzug Donaustadt", "Umzug Simmering",
    "Umzug Meidling", "Umzug Hietzing", "Umzug Ottakring",
    "Umzug Hernals", "Umzug Währing", "Umzug Döbling",
    "Umzug Wien günstig", "Umzug Wien Fixpreis", "Umzugsfirma Wien alle 23 Bezirke",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Regionen", item: "https://www.baktransport.at/regionen" },
    { "@type": "ListItem", position: 3, name: "Wien", item: "https://www.baktransport.at/regionen/wien" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Umzug Wien — BAK Transport",
  provider: {
    "@type": "MovingCompany",
    name: "BAK Transport Wien",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "87", bestRating: "5" },
  },
};

export default function WienPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      <WienPageClient />
    </>
  );
}
