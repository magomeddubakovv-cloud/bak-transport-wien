import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { HalteverbotszoneWienPageClient } from "./HalteverbotszoneWienPageClient";

export const metadata: Metadata = {
  title: "Halteverbotszone Wien beantragen | Umzug",
  description:
    "Halteverbotszone für Ihren Umzug in Wien: Zuständigkeit (MA 46), Fristen und Kosten der mobilen Halteverbotszone im Überblick.",
  alternates: { canonical: "https://www.baktransport.at/ratgeber/halteverbotszone-wien" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Übernimmt BAK Transport die Beantragung der Halteverbotszone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, die Halteverbot-Organisation ist bei unseren Umzugspaketen im Fixpreis inklusive. Wir kümmern uns um Antrag, Schilder und Bestätigung.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange gilt eine bewilligte Halteverbotszone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maximal 5 Werktage bzw. eine Woche und nur für den Zeitraum der angegebenen Ladezeiten, zum Beispiel 7 bis 18 Uhr.",
      },
    },
  ],
};

export default function HalteverbotszoneWienPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <HalteverbotszoneWienPageClient />
    </>
  );
}
