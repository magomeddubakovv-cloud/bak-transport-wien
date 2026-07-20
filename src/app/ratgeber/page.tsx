import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { RatgeberPageClient } from "./RatgeberPageClient";

export const metadata: Metadata = {
  title: "Umzug Ratgeber Wien | Checklisten & Tipps",
  description:
    "Umzug Ratgeber von BAK Transport Wien: Checklisten, Kosten, Planung, Möbelmontage, Küchenmontage, Versicherung und Tipps für stressfreie Umzüge.",
  alternates: { canonical: "https://www.baktransport.at/ratgeber" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Ratgeber", item: "https://www.baktransport.at/ratgeber" },
  ],
};

export default function RatgeberPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <RatgeberPageClient />
    </>
  );
}
