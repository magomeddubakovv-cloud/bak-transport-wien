import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { UeberUnsPageClient } from "./UeberUnsPageClient";

export const metadata: Metadata = {
  title: "Über uns | Ihr Umzugsunternehmen",
  description: "BAK Transport Wien: Professionelle Umzüge seit über 10 Jahren. Eigene LKW-Flotte, erfahrenes Team, 5,0★ auf Google, Fixpreisgarantie.",
  alternates: { canonical: "https://www.baktransport.at/ueber-uns" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Über uns", item: "https://www.baktransport.at/ueber-uns" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie lange gibt es BAK Transport schon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BAK Transport ist seit über 10 Jahren in Wien tätig. In dieser Zeit haben wir mehr als 1.000 Umzüge erfolgreich abgeschlossen.",
      },
    },
    {
      "@type": "Question",
      name: "Haben Sie eigene Fahrzeuge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Wir arbeiten ausschließlich mit unserer eigenen LKW-Flotte und unserem eigenen Personal — kein Outsourcing, volle Qualitätskontrolle.",
      },
    },
    {
      "@type": "Question",
      name: "Wo ist BAK Transport ansässig?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unser Hauptsitz ist in Wien. Von dort aus betreuen wir alle Regionen — Wien, Niederösterreich und den Rest Österreichs sowie internationale Umzüge.",
      },
    },
  ],
};

export default function UeberUnsPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <UeberUnsPageClient />
    </>
  );
}
