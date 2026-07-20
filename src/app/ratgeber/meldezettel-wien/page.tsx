import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { MeldezettelWienPageClient } from "./MeldezettelWienPageClient";

export const metadata: Metadata = {
  title: "Meldezettel Wien | Ummeldung nach dem Umzug",
  description:
    "Meldezettel Wien: Frist von 3 Tagen, nötige Unterlagen und Ablauf der Wohnsitz-Ummeldung nach dem Umzug einfach erklärt.",
  alternates: { canonical: "https://www.baktransport.at/ratgeber/meldezettel-wien" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meldezettel Wien | Ummeldung nach dem Umzug",
  description:
    "Meldezettel Wien: Frist von 3 Tagen, nötige Unterlagen und Ablauf der Wohnsitz-Ummeldung nach dem Umzug einfach erklärt.",
  image: "https://www.baktransport.at/images/photos/hero-movers.jpg",
  datePublished: "2026-07-06",
  dateModified: "2026-07-17",
  author: { "@type": "Organization", name: "BAK Transport Wien", url: "https://www.baktransport.at" },
  publisher: {
    "@type": "Organization",
    name: "BAK Transport Wien",
    logo: { "@type": "ImageObject", url: "https://www.baktransport.at/images/logo-transparent.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.baktransport.at/ratgeber/meldezettel-wien",
  },
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
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />
      <MeldezettelWienPageClient />
    </>
  );
}
