import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { GrenzueberschreitendPageClient } from "./GrenzueberschreitendPageClient";

export const metadata: Metadata = {
  title: "Grenzüberschreitende Umzüge | Europa | BAK Transport Wien",
  description: "Grenzüberschreitende Umzüge von Wien nach Deutschland, Schweiz, Slowakei, Tschechien, Ungarn und mehr. Fixpreis, vollversichert.",
  alternates: { canonical: "https://www.baktransport.at/regionen/grenzueberschreitend" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Regionen", item: "https://www.baktransport.at/regionen" },
    { "@type": "ListItem", position: 3, name: "Grenzüberschreitend", item: "https://www.baktransport.at/regionen/grenzueberschreitend" },
  ],
};

export default function GrenzueberschreitendPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <GrenzueberschreitendPageClient />
    </>
  );
}
