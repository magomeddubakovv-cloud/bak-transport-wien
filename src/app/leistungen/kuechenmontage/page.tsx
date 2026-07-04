import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { KuechenmontagPageClient } from "./KuechenmontagPageClient";

export const metadata: Metadata = {
  title: "Küchenmontage Wien | IKEA, Nolte, Nobilia ab €299 | BAK Transport",
  description: "✓ Küchenmontage Wien ab €299 – BAK Transport montiert alle Küchenmarken: IKEA, Nolte, Nobilia, Häcker. Inkl. Elektro- & Wasseranschluss, 2 Jahre Garantie.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/kuechenmontage" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Küchenmontage Wien", item: "https://www.baktransport.at/leistungen/kuechenmontage" },
  ],
};

export default function KuechenmontagePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <KuechenmontagPageClient />
    </>
  );
}
