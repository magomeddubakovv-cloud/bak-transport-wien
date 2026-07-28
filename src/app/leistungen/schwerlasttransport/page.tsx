import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { SchwerlasttransportPageClient } from "./SchwerlasttransportPageClient";

export const metadata: Metadata = {
  title: "Schwerlasttransport Wien | Klavier, Tresor & Maschinen",
  description: "✓ Schwerlasttransport Wien: Klaviere, Tresore, Maschinen & Spezialequipment sicher transportiert. BAK Transport – vollversichert, Spezialequipment, Fixpreis.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/schwerlasttransport" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Schwerlasttransport Wien", item: "https://www.baktransport.at/leistungen/schwerlasttransport" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Schwerlasttransport Wien — BAK Transport",
  description: "Schwerlasttransport Wien: Klaviere, Tresore, Maschinen & Spezialequipment sicher transportiert. BAK Transport – vollversichert, Spezialequipment, Fixpreis.",
  provider: { "@id": "https://www.baktransport.at/#business" },
  areaServed: { "@type": "City", name: "Wien" },
  serviceType: ["Klaviertransport", "Tresortransport", "Maschinentransport"],
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "280",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "280",
      priceCurrency: "EUR",
    },
  },
};

export default function SchwerlasttransportPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      <SchwerlasttransportPageClient />
    </>
  );
}
