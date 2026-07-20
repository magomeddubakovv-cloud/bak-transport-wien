import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { PrivatumzugPageClient } from "./PrivatumzugPageClient";

export const metadata: Metadata = {
  title: "Privatumzug Wien ab €650 | Fixpreis ✓ Vollversichert",
  description: "✓ Privatumzug Wien ab €650 – stressfrei & vollversichert. BAK Transport: Alle 23 Bezirke, kostenlose Besichtigung vor Ort, verbindlicher Fixpreis, Rückmeldung in 60 Min.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/privatumzug" },
  keywords: ["Privatumzug Wien", "Umzug Wien Fixpreis", "Privatumzug Wien günstig"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Privatumzug Wien", item: "https://www.baktransport.at/leistungen/privatumzug" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Privatumzug Wien — BAK Transport",
  provider: { "@id": "https://www.baktransport.at/#business" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie läuft die Besichtigung ab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unser Mitarbeiter kommt kostenlos zu Ihnen, schaut sich die Wohnung an und notiert alles Relevante. Das dauert ca. 30 Minuten. Danach erhalten Sie innerhalb von 24 Stunden ein verbindliches Fixpreisangebot.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert, wenn etwas beschädigt wird?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alle Umzugsgüter sind bei BAK Transport vollversichert. Im unwahrscheinlichen Fall eines Schadens regulieren wir über unsere Versicherung — unkompliziert und schnell.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich auch nur einzelne Leistungen buchen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Wir bieten auch Teilleistungen an — z.B. nur Transport ohne Verpackung, oder nur Möbelmontage ohne Umzug. Fragen Sie einfach an.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist im Fixpreis enthalten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An- und Abfahrt, Be- und Entladen, der Transport selbst sowie De- und Remontage der von uns ab- und aufgebauten Möbel. Verpackungsmaterial und Zusatzleistungen wie Entrümpelung oder Halteverbotszone besprechen wir vorab und weisen sie klar im Angebot aus — keine Überraschungen am Umzugstag.",
      },
    },
  ],
};

export default function PrivatumzugPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <PrivatumzugPageClient />
    </>
  );
}
