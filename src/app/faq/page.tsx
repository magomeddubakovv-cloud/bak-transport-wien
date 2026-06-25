import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { StructuredData } from "@/components/StructuredData";
import { FaqPageClient } from "./FaqPageClient";

export const metadata: Metadata = {
  title: "FAQ Umzug Wien | Häufige Fragen | BAK Transport",
  description: "Antworten auf häufige Fragen zum Thema Umzug Wien: Kosten, Ablauf, Versicherung, Bezirke & mehr. BAK Transport Wien beantwortet alle Ihre Fragen.",
  alternates: { canonical: "https://www.baktransport.at/faq" },
};

const faqs = [
  { q: "Was kostet ein Privatumzug in Wien?", a: "Privatumzüge starten ab €650 für Wohnungen bis 50m². Der genaue Preis hängt von der Wohnungsgröße, dem Stockwerk und den gewünschten Zusatzleistungen ab. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Fixpreis." },
  { q: "Wie schnell erhalte ich ein Angebot?", a: "In der Regel innerhalb von 60 Minuten nach Ihrer Anfrage. Nach einer kostenlosen Besichtigung erstellen wir innerhalb von 24 Stunden ein verbindliches Fixpreisangebot." },
  { q: "Sind meine Sachen während des Umzugs versichert?", a: "Ja. Alle Umzugsgüter sind während des gesamten Transports vollversichert. Im unwahrscheinlichen Fall eines Schadens regulieren wir schnell und unkompliziert." },
  { q: "Führen Sie auch Umzüge nach Deutschland oder in die Schweiz durch?", a: "Ja. Wir bieten grenzüberschreitende Umzüge nach Deutschland und in die Schweiz an — zum Fixpreis nach Videobesichtigung, vollversichert." },
  { q: "Gibt es versteckte Kosten?", a: "Nein. Unser Angebot ist ein Fixpreis. Was vereinbart wird, gilt — kein Stundenhonorar, keine Nachforderungen, keine Überraschungen." },
  { q: "Können Sie auch kurzfristig einen Umzug durchführen?", a: "Ja. Im Rahmen unseres Notfallumzug-Services sind wir oft noch am selben Tag verfügbar. Rufen Sie uns an und wir prüfen sofort die Verfügbarkeit." },
  { q: "Bieten Sie auch nur Möbelmontage ohne Umzug an?", a: "Ja. Möbelmontage und Küchenmontage können auch unabhängig von einem Umzug gebucht werden. Ab €120 für kleine Aufträge." },
  { q: "Wie läuft eine kostenlose Besichtigung ab?", a: "Unser Mitarbeiter kommt zu Ihnen, schaut sich alle zu transportierenden Möbel und Gegenstände an und notiert alles Relevante. Das dauert ca. 30 Minuten. Danach erhalten Sie innerhalb von 24 Stunden Ihr Fixpreisangebot." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <FaqPageClient />
    </>
  );
}
