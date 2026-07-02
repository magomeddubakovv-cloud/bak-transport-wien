import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { EntruempelungPageClient } from "./EntruempelungPageClient";

export const metadata: Metadata = {
  title: "Entrümpelung Wien | Wohnung, Keller & Büro | BAK Transport",
  description:
    "Entrümpelung Wien mit BAK Transport: Wohnung, Keller, Dachboden, Büro und Verlassenschaft. Besichtigung kostenlos, Fixpreis, rasche Termine, saubere Übergabe.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/entruempelung" },
  keywords: [
    "Entrümpelung Wien",
    "Wohnungsentrümpelung Wien",
    "Kellerentrümpelung Wien",
    "Büroentrümpelung Wien",
    "Verlassenschaft räumen Wien",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.baktransport.at/leistungen" },
    { "@type": "ListItem", position: 3, name: "Entrümpelung Wien", item: "https://www.baktransport.at/leistungen/entruempelung" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Entrümpelung Wien",
  serviceType: ["Wohnungsentrümpelung", "Kellerentrümpelung", "Büroentrümpelung", "Verlassenschaftsräumung"],
  provider: {
    "@type": "MovingCompany",
    name: "BAK Transport Wien",
    telephone: "+4368110723047",
    url: "https://www.baktransport.at",
  },
  areaServed: { "@type": "City", name: "Wien" },
};

export default function EntruempelungPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      <EntruempelungPageClient />
    </>
  );
}
