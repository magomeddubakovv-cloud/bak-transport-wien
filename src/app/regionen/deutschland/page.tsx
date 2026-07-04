import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { DeutschlandPageClient } from "./DeutschlandPageClient";

export const metadata: Metadata = {
  title: "Umzug nach Deutschland | Wien–München & mehr | BAK Transport",
  description: "✓ Umzug nach Deutschland mit BAK Transport Wien: Wien–München, Stuttgart, Frankfurt, Berlin. EU-intern kein Zoll, vollversichert, Fixpreis nach Videobesichtigung, schnelle Rückmeldung.",
  alternates: { canonical: "https://www.baktransport.at/regionen/deutschland" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Deutschland", item: "https://www.baktransport.at/regionen/deutschland" },
  ],
};

export default function DeutschlandPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <DeutschlandPageClient />
    </>
  );
}
