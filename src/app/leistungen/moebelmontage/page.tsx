import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { MoebelmontagePageClient } from "./MoebelmontagePageClient";

export const metadata: Metadata = {
  title: "Möbelmontage Wien | IKEA & alle Marken | Fixpreis",
  description: "✓ Möbelmontage Wien: BAK Transport baut alle Möbelmarken auf & ab – IKEA, BoConcept, Hülsta & mehr. Auch ohne Umzug buchbar. Fixpreis, schnell & zuverlässig.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/moebelmontage" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Möbelmontage Wien", item: "https://www.baktransport.at/leistungen/moebelmontage" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Möbelmontage Wien — BAK Transport",
  provider: { "@id": "https://www.baktransport.at/#business" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine Möbelmontage in Wien?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kleine Einzelmöbel liegen meist bei ca. 50–100 €, Zimmermöbel bei ca. 150–300 € und komplette Wohnungen je nach Umfang bei ca. 300–600 €. Ein IKEA-Schrank liegt häufig bei ca. 80–150 €, ein Bett bei ca. 60–120 €.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert der Möbelaufbau?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das hängt vom Umfang ab. Einzelne Möbel sind oft in 1–2 Stunden aufgebaut, größere Einrichtungen brauchen meist 2–4 Stunden. Termine sind nach Absprache auch am Wochenende möglich.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Möbelmarken montieren Sie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir montieren Möbel von IKEA, XXXLutz, Mömax, Kika, Leiner, Möbelix und vielen weiteren Herstellern. Unser Team ist auf unterschiedliche Systeme, Beschläge und Aufbauarten vorbereitet.",
      },
    },
    {
      "@type": "Question",
      name: "Montieren Sie auch IKEA-Möbel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Besonders häufig montieren wir IKEA-Systeme wie PAX, MALM, BILLY, BESTA und KALLAX. Die Kosten liegen je nach Möbel und Aufwand meist bei ca. 60–200 €.",
      },
    },
    {
      "@type": "Question",
      name: "Bringen Sie Werkzeug und Montagematerial mit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Professionelles Werkzeug, Montagehilfen und übliches Kleinmaterial bringen wir mit. Falls spezielle Dübel oder Sonderteile nötig sind, klären wir das vorab mit Ihnen.",
      },
    },
    {
      "@type": "Question",
      name: "Ist die Möbelmontage versichert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Unsere Montagearbeiten sind versichert. Wir arbeiten sorgfältig mit Schutz für Boden, Wände und Möbel und stehen für saubere Arbeit gerade.",
      },
    },
    {
      "@type": "Question",
      name: "Muss ich bei der Möbelmontage zu Hause sein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zwingend notwendig ist es nicht — Sie können z. B. einen Schlüssel hinterlegen oder den Zugang anders organisieren. Für Absprachen vor Ort wie Platzierung und Sonderwünsche empfehlen wir aber, nach Möglichkeit anwesend zu sein.",
      },
    },
    {
      "@type": "Question",
      name: "Montieren Sie auch gebrauchte Möbel neu, z. B. nach einem Umzug?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Wir bauen auch bereits genutzte Möbel nach einem Umzug oder Tausch wieder fachgerecht auf, inklusive Kontrolle auf Transportschäden und fehlende Teile.",
      },
    },
  ],
};

export default function MoebelmontlagePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <MoebelmontagePageClient />
    </>
  );
}
