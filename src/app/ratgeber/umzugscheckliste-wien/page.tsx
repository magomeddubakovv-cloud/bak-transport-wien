import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { UmzugschecklisteWienPageClient } from "./UmzugschecklisteWienPageClient";

export const metadata: Metadata = {
  title: "Umzugscheckliste Wien | Schritt für Schritt zum Umzug",
  description:
    "Umzugscheckliste Wien: Was 6–8 Wochen, 1 Woche und am Umzugstag zu erledigen ist. Kostenlose Schritt-für-Schritt-Anleitung von BAK Transport Wien.",
  alternates: { canonical: "https://www.baktransport.at/ratgeber/umzugscheckliste-wien" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie viele Wochen vor dem Umzug sollte ich planen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Idealerweise beginnen Sie 6–8 Wochen vorher mit der Planung, besonders wenn Ihr Umzug in eine gefragte Zeit wie Monatsende oder Sommer fällt. Kurzfristige Umzüge sind bei BAK Transport ebenfalls möglich, je nach Auslastung.",
      },
    },
    {
      "@type": "Question",
      name: "Was sollte ich am Umzugstag zuerst erledigen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notieren Sie zuerst die Zählerstände und klären Sie den Zugang für unser Team, etwa über die Halteverbotszone. Den restlichen Ablauf – Tragen, Transport, Aufbau – übernehmen unsere Umzugshelfer.",
      },
    },
    {
      "@type": "Question",
      name: "Muss ich mich sofort nach dem Einzug ummelden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, die Ummeldung des Meldezettels muss spätestens 3 Tage nach dem tatsächlichen Einzug erfolgen. Details dazu finden Sie in unserem Ratgeber zum Meldezettel Wien.",
      },
    },
    {
      "@type": "Question",
      name: "Hilft BAK Transport auch beim Packen der Kartons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, auf Wunsch übernehmen wir Verpackungsservice und Full-Service-Umzüge, sodass Sie sich um weniger einzelne Punkte auf der Checkliste selbst kümmern müssen.",
      },
    },
  ],
};

export default function UmzugschecklisteWienPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <UmzugschecklisteWienPageClient />
    </>
  );
}
