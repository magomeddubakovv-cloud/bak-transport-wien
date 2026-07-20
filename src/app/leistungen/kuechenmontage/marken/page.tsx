import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { KuechenmarkenPageClient } from "./KuechenmarkenPageClient";

export const metadata: Metadata = {
  title: "Küchenmontage Marken Wien | IKEA, XXXLutz, Mömax & mehr",
  description:
    "Küchenmontage in Wien für IKEA, XXXLutz, Mömax, Kika, Leiner, Nolte, Nobilia, EWE, Miele und weitere Küchenmarken.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/kuechenmontage/marken" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Küchenmontage Wien", item: "https://www.baktransport.at/leistungen/kuechenmontage" },
    { "@type": "ListItem", position: 3, name: "Marken", item: "https://www.baktransport.at/leistungen/kuechenmontage/marken" },
  ],
};

export default function KuechenmarkenPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <KuechenmarkenPageClient />
    </>
  );
}
