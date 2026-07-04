import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Umzug Ratgeber Wien | Checklisten & Tipps",
  description:
    "Umzug Ratgeber von BAK Transport Wien: Checklisten, Kosten, Planung, Möbelmontage, Küchenmontage, Versicherung und Tipps für stressfreie Umzüge.",
  alternates: { canonical: "https://www.baktransport.at/ratgeber" },
};

export default function RatgeberPage() {
  return (
    <SeoLandingPage
      label="Ratgeber"
      title="Umzug Ratgeber Wien: Tipps für Planung, Kosten und Ablauf"
      subtitle="Hier sammelt BAK Transport praktische Hinweise für Privatumzug, Firmenumzug, Montage, Entrümpelung und regionale Umzüge."
      intro="Ein guter Umzug beginnt nicht am Umzugstag, sondern bei der Vorbereitung. Der Ratgeber bündelt Themen, nach denen Kunden häufig suchen, und führt direkt zu den passenden Leistungen."
      sections={[
        {
          heading: "Welche Themen wichtig sind",
          text: "Die wichtigsten Fragen drehen sich um Kosten, Versicherung, Packen, Halteverbotszone, Möbelmontage, Küche, kurzfristige Termine und Umzüge zwischen Städten oder Ländern.",
          bullets: [
            "Umzugskosten realistisch einschätzen",
            "Checkliste für die letzten Tage vor dem Umzug",
            "Möbel richtig vorbereiten und schützen",
            "Küche und Geräte vor der Montage planen",
            "Versicherung und Verantwortung verstehen",
          ],
        },
        {
          heading: "Warum der Ratgeber gut für Google ist",
          text: "Ratgeberseiten beantworten Suchfragen, bevor der Kunde direkt ein Angebot anfragt. So gewinnt die Website Vertrauen und zusätzliche Einstiege über Google.",
        },
      ]}
      cards={[
        { title: "Kosten & Preise", text: "Was beeinflusst den Preis und wann lohnt sich ein Fixpreis?" },
        { title: "Planung & Checkliste", text: "Welche Aufgaben sollten vor dem Umzug erledigt sein?" },
        { title: "Montage & Schutz", text: "Wie Möbel, Küche und empfindliche Gegenstände vorbereitet werden." },
      ]}
      faqs={[
        { question: "Kommen später einzelne Ratgeberartikel dazu?", answer: "Ja. Diese Übersichtsseite ist die Basis. Danach können einzelne Artikel zu Kosten, Checkliste, Verpackung und Montage ergänzt werden." },
        { question: "Hilft ein Ratgeber beim Ranking?", answer: "Ja, wenn die Inhalte echte Fragen beantworten und intern sauber auf Leistungsseiten verlinken." },
      ]}
      relatedLinks={[
        { label: "Umzug Preise", href: "/leistungen/umzug-preise" },
        { label: "Glossar", href: "/glossar" },
        { label: "FAQ", href: "/faq" },
      ]}
    />
  );
}
