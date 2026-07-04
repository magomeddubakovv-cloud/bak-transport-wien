import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Umzug Glossar Wien | Begriffe einfach erklärt",
  description:
    "Umzug Glossar von BAK Transport Wien: Fixpreis, Besichtigung, Halteverbotszone, Möbelmontage, Transportversicherung und mehr einfach erklärt.",
  alternates: { canonical: "https://www.baktransport.at/glossar" },
};

const terms = [
  { title: "Fixpreis", text: "Ein vorab vereinbarter Preis für den definierten Leistungsumfang. Er schützt vor unerwarteten Zusatzkosten." },
  { title: "Besichtigung", text: "Prüfung von Möbelmenge, Zugang, Stockwerk, Lift, Parkmöglichkeit und besonderen Gegenständen vor dem Angebot." },
  { title: "Halteverbotszone", text: "Reservierter Ladebereich vor der Adresse, damit der LKW nah stehen kann und Tragewege kurz bleiben." },
  { title: "Möbelmontage", text: "Abbau, Transportvorbereitung und Wiederaufbau von Schränken, Betten, Regalen und Büromöbeln." },
  { title: "Küchenmontage", text: "Montage von Küchenmöbeln, Arbeitsplatten und Geräten nach Planung und Absprache." },
  { title: "Transportversicherung", text: "Absicherung des Transportguts während des Umzugs, abhängig von Leistung und Bedingungen." },
  { title: "Trageweg", text: "Die Strecke zwischen Wohnung, Lift, Stiegenhaus und LKW. Lange Tragewege beeinflussen Aufwand und Preis." },
  { title: "Entrümpelung", text: "Räumung und Abtransport von Möbeln, Hausrat oder Gegenständen aus Wohnung, Keller, Büro oder Verlassenschaft." },
  { title: "Schwerlasttransport", text: "Transport besonders schwerer Stücke wie Tresor, Klavier, Maschine oder großer Möbel." },
];

export default function GlossarPage() {
  return (
    <SeoLandingPage
      label="Glossar"
      title="Umzug Glossar: wichtige Begriffe einfach erklärt"
      subtitle="Damit Angebote, Ablauf und Leistungen verständlich bleiben, erklären wir hier die wichtigsten Begriffe rund um Umzug, Transport und Montage."
      intro="Ein klares Angebot ist leichter zu vergleichen, wenn Begriffe verständlich sind. Dieses Glossar hilft Ihnen, Kosten, Leistungen und Ablauf besser einzuordnen."
      sections={[
        {
          heading: "Warum ein Umzugsglossar sinnvoll ist",
          text: "Viele Begriffe klingen ähnlich, bedeuten aber unterschiedliche Leistungen. Wer Fixpreis, Besichtigung, Montage und Versicherung versteht, kann Angebote besser vergleichen.",
        },
      ]}
      cards={terms}
      relatedLinks={[
        { label: "Umzug Preise", href: "/leistungen/umzug-preise" },
        { label: "Versicherung", href: "/versicherung" },
        { label: "FAQ", href: "/faq" },
      ]}
    />
  );
}
