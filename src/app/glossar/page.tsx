import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { GlossarPageClient } from "./GlossarPageClient";

export const metadata: Metadata = {
  title: "Umzug Glossar Wien | Begriffe einfach erklärt",
  description:
    "Umzug Glossar von BAK Transport Wien: Fixpreis, Besichtigung, Halteverbotszone, Möbelmontage, Transportversicherung und mehr einfach erklärt.",
  alternates: { canonical: "https://www.baktransport.at/glossar" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Glossar", item: "https://www.baktransport.at/glossar" },
  ],
};

const definedTermSetSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Umzug Glossar Wien",
  description: "Begriffe rund um den Umzug in Wien, erklärt von BAK Transport Wien.",
  url: "https://www.baktransport.at/glossar",
  hasDefinedTerm: [
    {
      "@type": "DefinedTerm",
      name: "Fixpreis",
      description:
        "Ein vorab vereinbarter Preis für den definierten Leistungsumfang. Er schützt vor unerwarteten Zusatzkosten.",
    },
    {
      "@type": "DefinedTerm",
      name: "Besichtigung",
      description:
        "Prüfung von Möbelmenge, Zugang, Stockwerk, Lift, Parkmöglichkeit und besonderen Gegenständen vor dem Angebot.",
    },
    {
      "@type": "DefinedTerm",
      name: "Halteverbotszone",
      description:
        "Reservierter Ladebereich vor der Adresse, damit der LKW nah stehen kann und Tragewege kurz bleiben.",
    },
    {
      "@type": "DefinedTerm",
      name: "Möbelmontage",
      description: "Abbau, Transportvorbereitung und Wiederaufbau von Schränken, Betten, Regalen und Büromöbeln.",
    },
    {
      "@type": "DefinedTerm",
      name: "Küchenmontage",
      description: "Montage von Küchenmöbeln, Arbeitsplatten und Geräten nach Planung und Absprache.",
    },
    {
      "@type": "DefinedTerm",
      name: "Transportversicherung",
      description: "Absicherung des Transportguts während des Umzugs, abhängig von Leistung und Bedingungen.",
    },
    {
      "@type": "DefinedTerm",
      name: "Trageweg",
      description:
        "Die Strecke zwischen Wohnung, Lift, Stiegenhaus und LKW. Lange Tragewege beeinflussen Aufwand und Preis.",
    },
    {
      "@type": "DefinedTerm",
      name: "Entrümpelung",
      description:
        "Räumung und Abtransport von Möbeln, Hausrat oder Gegenständen aus Wohnung, Keller, Büro oder Verlassenschaft.",
    },
    {
      "@type": "DefinedTerm",
      name: "Schwerlasttransport",
      description: "Transport besonders schwerer Stücke wie Tresor, Klavier, Maschine oder großer Möbel.",
    },
  ],
};

export default function GlossarPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={definedTermSetSchema} />
      <GlossarPageClient />
    </>
  );
}
