import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Warum BAK Transport? | Vorteile der Umzugsfirma Wien",
  description:
    "Die Vorteile von BAK Transport Wien: Fixpreis, schnelle Rückmeldung, Versicherung, eigenes Team, LKW-Flotte und saubere Planung.",
  alternates: { canonical: "https://www.baktransport.at/vorteile" },
};

export default function VorteilePage() {
  return (
    <SeoLandingPage
      label="Warum BAK"
      title="Warum Kunden BAK Transport für ihren Umzug wählen"
      subtitle="Ein Umzug braucht Verlässlichkeit, klare Kommunikation und ein Team, das sauber arbeitet. Genau darauf ist BAK Transport ausgerichtet."
      intro="Wir wollen, dass Sie vor dem Umzug wissen, was passiert, wer kommt und was es kostet. Deshalb verbinden wir persönliche Beratung mit klarer Organisation und einem verbindlichen Angebot."
      sections={[
        {
          heading: "Planung statt Chaos",
          text: "Wir prüfen Umfang, Zugang, Parkmöglichkeit und Zeitfenster vorab. So wird der Umzugstag nicht improvisiert, sondern sauber vorbereitet.",
        },
        {
          heading: "Fixpreis und klare Kommunikation",
          text: "Sie erhalten eine klare Einschätzung und wissen, welche Leistung enthalten ist. Rückfragen beantworten wir direkt per Telefon, WhatsApp oder Formular.",
          bullets: [
            "Rückmeldung in der Regel innerhalb von 60 Minuten",
            "kostenlose Besichtigung nach Bedarf",
            "Fixpreis nach Umfang statt Überraschungen",
            "ein Ansprechpartner für Planung und Ablauf",
          ],
        },
      ]}
      cards={[
        { title: "Erfahrenes Team", text: "Unsere Helfer wissen, wie Möbel, Kartons und empfindliche Gegenstände sicher getragen werden." },
        { title: "Sauberer Schutz", text: "Möbeldecken, Folie und Tragesysteme schützen Ihre Einrichtung und den Transportweg." },
        { title: "Wien & Österreich", text: "Wir fahren in Wien, Niederösterreich, Österreich und bei Bedarf grenzüberschreitend." },
      ]}
      faqs={[
        { question: "Warum nicht einfach den günstigsten Anbieter nehmen?", answer: "Der billigste Startpreis ist oft nicht der Endpreis. Wichtiger sind klare Leistung, Versicherung und zuverlässige Planung." },
        { question: "Kann BAK auch kurzfristig helfen?", answer: "Ja, je nach Auslastung sind kurzfristige Einsätze und Notfallumzüge möglich." },
      ]}
      relatedLinks={[
        { label: "Privatumzug", href: "/leistungen/privatumzug" },
        { label: "Firmenumzug", href: "/leistungen/firmenumzug" },
        { label: "Kontakt", href: "/kontakt" },
      ]}
    />
  );
}
