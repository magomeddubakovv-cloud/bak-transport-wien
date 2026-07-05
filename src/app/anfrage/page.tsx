import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { AnfragePageClient } from "./AnfragePageClient";

export const metadata: Metadata = {
  title: "Angebot anfragen | Kostenlos & unverbindlich | BAK Transport Wien",
  description: "Jetzt kostenloses Umzugsangebot von BAK Transport Wien anfragen. Fixpreis in 60 Minuten. Privatumzug, Firmenumzug, Möbelmontage — wir melden uns sofort.",
  alternates: { canonical: "https://www.baktransport.at/anfrage" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Angebot anfragen", item: "https://www.baktransport.at/anfrage" },
  ],
};

export default function AnfragePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <AnfragePageClient />
    </>
  );
}
