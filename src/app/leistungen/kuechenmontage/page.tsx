import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { KuechenmontagPageClient } from "./KuechenmontagPageClient";

export const metadata: Metadata = {
  title: "Küchenmontage Wien | IKEA, Nolte, Nobilia ab €380",
  description: "✓ Küchenmontage Wien ab €380 – BAK Transport montiert alle Küchenmarken: IKEA, Nolte, Nobilia, Häcker. Inkl. Elektro- & Wasseranschluss, 2 Jahre Garantie.",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Küchenmontage Wien — BAK Transport",
  provider: { "@id": "https://www.baktransport.at/#business" },
};

export default function KuechenmontagePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      <KuechenmontagPageClient />
    </>
  );
}
