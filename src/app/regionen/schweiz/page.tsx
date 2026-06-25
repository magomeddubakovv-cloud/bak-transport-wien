import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { SchweizPageClient } from "./SchweizPageClient";

export const metadata: Metadata = {
  title: "Umzug in die Schweiz | Wien–Zürich & Bern | BAK Transport",
  description: "Umzug in die Schweiz: Wien nach Zürich, Bern, Basel. Inklusive Zollinformationen, vollversichert, Fixpreis nach Videobesichtigung.",
  alternates: { canonical: "https://www.baktransport.at/regionen/schweiz" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Regionen", item: "https://www.baktransport.at/regionen" },
    { "@type": "ListItem", position: 3, name: "Schweiz", item: "https://www.baktransport.at/regionen/schweiz" },
  ],
};

export default function SchweizPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <SchweizPageClient />
    </>
  );
}
