import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { MeldezettelWienPageClient } from "./MeldezettelWienPageClient";

export const metadata: Metadata = {
  title: "Meldezettel Wien | Ummeldung nach dem Umzug",
  description:
    "Meldezettel Wien: Frist von 3 Tagen, nötige Unterlagen und Ablauf der Wohnsitz-Ummeldung nach dem Umzug einfach erklärt.",
  alternates: { canonical: "https://www.baktransport.at/ratgeber/meldezettel-wien" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Muss ich mich schon bei Vertragsunterschrift ummelden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Die Frist beginnt erst mit dem tatsächlichen Einzug, nicht mit der Vertragsunterschrift oder Schlüsselübergabe. Eine Anmeldung vor dem Einzug ist sogar unzulässig.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert, wenn ich die Frist verpasse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Laut § 22 Meldegesetz drohen bei verspäteter oder fehlerhafter Meldung Verwaltungsstrafen von bis zu €726. Erledigen Sie die Ummeldung daher am besten gleich in der ersten Woche nach dem Einzug.",
      },
    },
  ],
};

export default function MeldezettelWienPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <MeldezettelWienPageClient />
    </>
  );
}
