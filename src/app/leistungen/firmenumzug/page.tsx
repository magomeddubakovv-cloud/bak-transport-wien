import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { FirmenumzugPageClient } from "./FirmenumzugPageClient";

export const metadata: Metadata = {
  title: "Firmenumzug Wien | Büroumzug ohne Betriebsausfall",
  description: "✓ Firmenumzug Wien mit BAK Transport: Strukturierter Büroumzug mit minimaler Ausfallzeit. Auch nachts & am Wochenende. Fixpreis, vollversichert, Rückmeldung in 60 Min.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/firmenumzug" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Firmenumzug Wien", item: "https://www.baktransport.at/leistungen/firmenumzug" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Firmenumzug Wien — BAK Transport",
  description: "Firmenumzug Wien mit BAK Transport: Strukturierter Büroumzug mit minimaler Ausfallzeit. Auch nachts & am Wochenende. Fixpreis, vollversichert, Rückmeldung in 60 Min.",
  provider: { "@id": "https://www.baktransport.at/#business" },
  areaServed: { "@type": "City", name: "Wien" },
  serviceType: "Firmenumzug",
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "850",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "850",
      priceCurrency: "EUR",
    },
  },
};

export default function FirmenumzugPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      <FirmenumzugPageClient />
    </>
  );
}
