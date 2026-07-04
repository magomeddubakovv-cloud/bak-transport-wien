import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Umzugsversicherung Wien | BAK Transport",
  description:
    "Umzug vollversichert durchführen: BAK Transport erklärt Schutz, Verantwortung, Möbeldecken, Folierung und sicheren Transport in Wien.",
  alternates: { canonical: "https://www.baktransport.at/versicherung" },
};

export default function VersicherungPage() {
  return (
    <SeoLandingPage
      label="Versicherung & Schutz"
      title="Umzugsversicherung: sicher transportiert von Tür zu Tür"
      subtitle="Ihre Möbel, Geräte und persönlichen Gegenstände werden sorgfältig geschützt, geladen und transportiert. Wir erklären vorab, was abgesichert ist und wie wir Schäden vermeiden."
      intro="Ein guter Umzug besteht nicht nur aus Tragen und Fahren. Entscheidend ist, dass Möbel geschützt, Wege geprüft und empfindliche Gegenstände richtig vorbereitet werden."
      sections={[
        {
          heading: "Wie schützt BAK Transport Ihr Eigentum?",
          text: "Wir arbeiten mit Möbeldecken, Schutzfolie, Gurten und einer sauberen Ladeplanung. Schwere und empfindliche Stücke werden getrennt betrachtet und passend gesichert.",
          bullets: [
            "Möbeldecken und Stretchfolie für empfindliche Oberflächen",
            "Gurte und Transportsicherung im LKW",
            "vorsichtige Planung bei Stiegenhaus, Lift und engen Türen",
            "klare Übergabe vor und nach dem Transport",
          ],
        },
        {
          heading: "Warum die Besichtigung wichtig ist",
          text: "Bei der Besichtigung erkennen wir Risiken früh: enge Gänge, empfindliche Böden, schwere Möbel, Glas, Klavier, Tresor oder lange Tragewege. Dadurch planen wir sicherer und fairer.",
        },
      ]}
      cards={[
        { title: "Vorbeugen", text: "Schutzmaterial, Planung und erfahrene Helfer reduzieren Schäden schon vor dem ersten Handgriff." },
        { title: "Dokumentieren", text: "Besondere Gegenstände können vorab besprochen und sauber in den Ablauf aufgenommen werden." },
        { title: "Absichern", text: "Wir arbeiten verantwortungsvoll und erklären Ihnen transparent, wie Ihr Umzug abgesichert ist." },
      ]}
      faqs={[
        { question: "Sind meine Möbel beim Umzug versichert?", answer: "Ja, der Transport wird mit Versicherung geplant. Die genauen Bedingungen besprechen wir vor Auftragserteilung." },
        { question: "Muss ich empfindliche Gegenstände selbst verpacken?", answer: "Sie können selbst vorbereiten, wir können aber auch Verpackung und Schutzmaterial übernehmen." },
        { question: "Was passiert bei besonders schweren Gegenständen?", answer: "Für Klaviere, Tresore oder Maschinen planen wir gesondert mit Hilfsmitteln, Teamgröße und geeignetem Transportweg." },
      ]}
      relatedLinks={[
        { label: "Schwerlasttransport", href: "/leistungen/schwerlasttransport" },
        { label: "Umzug Preise", href: "/leistungen/umzug-preise" },
        { label: "Vorteile", href: "/vorteile" },
      ]}
    />
  );
}
