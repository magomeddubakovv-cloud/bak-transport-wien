import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { DeutschlandPageClient } from "./DeutschlandPageClient";

export const metadata: Metadata = {
  title: "Umzug nach Deutschland | Wien–München & mehr | BAK Transport",
  description: "Umzug nach Deutschland: Wien nach München, Stuttgart, Frankfurt, Berlin. Kein Zoll (EU), vollversichert, Fixpreis nach Videobesichtigung.",
  alternates: { canonical: "https://www.baktransport.at/regionen/deutschland" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Regionen", item: "https://www.baktransport.at/regionen" },
    { "@type": "ListItem", position: 3, name: "Deutschland", item: "https://www.baktransport.at/regionen/deutschland" },
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
