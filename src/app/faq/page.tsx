import type { Metadata } from "next";
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
  { q: "Wie lange dauert ein Umzug?", a: "Das hängt von Wohnungsgröße und Etage ab: Eine 2-Zimmer-Wohnung ist meist in 3–5 Stunden fertig transportiert, ein Einfamilienhaus kann einen ganzen Tag dauern. Bei der kostenlosen Besichtigung geben wir Ihnen eine realistische Zeiteinschätzung für Ihren Umzug." },
  { q: "Wie viele Umzugskartons brauche ich?", a: "Als Faustregel gilt: ca. 10–15 Kartons pro Zimmer bei durchschnittlicher Einrichtung. Bei der kostenlosen Besichtigung berechnen wir den genauen Bedarf und stellen auf Wunsch passendes Verpackungsmaterial bereit." },
  { q: "Brauche ich für den Umzugswagen eine Halteverbotszone in Wien?", a: "Bei engen Straßen oder wenig Parkplätzen empfehlen wir eine Halteverbotszone, damit der Umzugswagen direkt vor der Tür stehen kann. Wir unterstützen Sie gerne bei der Organisation der nötigen Parkgenehmigung." },
  { q: "Sind Umzugskosten steuerlich absetzbar?", a: "Bei einem beruflich bedingten Umzug, etwa durch einen neuen Job, können die Kosten als Werbungskosten von der Steuer abgesetzt werden. Wir stellen Ihnen dafür eine detaillierte Rechnung aus, die Sie beim Finanzamt einreichen können." },
  { q: "Woran erkenne ich eine seriöse Umzugsfirma?", a: "Achten Sie auf ein schriftliches Fixpreisangebot statt vager Stundensätze, eine Versicherung für Transportschäden sowie klare Firmenangaben und Bewertungen. BAK Transport erfüllt all diese Punkte und liefert Ihnen ein verbindliches Angebot vor Beginn des Umzugs." },
  { q: "Wie viel Trinkgeld gebe ich den Umzugshelfern?", a: "Trinkgeld ist bei uns keine Pflicht, da unser Fixpreis bereits alle Leistungen abdeckt. Über eine kleine Anerkennung für besonders sorgfältige Arbeit freut sich unser Team aber natürlich." },
  { q: "Wie weit im Voraus sollte ich meinen Umzug buchen?", a: "Für Privatumzüge empfehlen wir 2–3 Wochen Vorlauf, bei Firmenumzügen oder in der Hochsaison rund um Monatsende und Sommer besser 4–6 Wochen. Kurzfristige Termine sind über unseren Notfallumzug-Service oft trotzdem möglich." },
  { q: "Entsorgen Sie auch alte Möbel beim Umzug?", a: "Ja. Alte Möbel, Elektrogeräte oder Sperrmüll, die Sie nicht mitnehmen möchten, entsorgen wir im Rahmen unserer Entrümpelungs-Leistung fachgerecht — auf Wunsch direkt im Zuge Ihres Umzugs." },
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
