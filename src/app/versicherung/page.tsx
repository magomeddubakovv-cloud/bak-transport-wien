import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { VersicherungPageClient } from "./VersicherungPageClient";

export const metadata: Metadata = {
  title: "Umzugsversicherung Wien",
  description:
    "Umzug vollversichert durchführen: BAK Transport erklärt Schutz, Verantwortung, Möbeldecken, Folierung und sicheren Transport in Wien.",
  alternates: { canonical: "https://www.baktransport.at/versicherung" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Versicherung", item: "https://www.baktransport.at/versicherung" },
  ],
};

export default function VersicherungPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <VersicherungPageClient />
    </>
  );
}
