import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { KontaktPageClient } from "./KontaktPageClient";

export const metadata: Metadata = {
  title: "Kontakt | Kostenloses Angebot in 60 Min",
  description: "Kontaktieren Sie BAK Transport Wien für ein kostenloses Umzugsangebot. Rückmeldung in 60 Minuten. ☎ Anrufen, WhatsApp oder Formular ausfüllen.",
  alternates: { canonical: "https://www.baktransport.at/kontakt" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://www.baktransport.at/kontakt" },
  ],
};

export default function KontaktPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <KontaktPageClient />
    </>
  );
}
