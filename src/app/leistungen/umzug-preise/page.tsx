import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Umzug Preise Wien | Fixpreis statt versteckte Kosten",
  description:
    "Umzug Preise in Wien transparent erklärt: Fixpreis nach Besichtigung, faire Pakete, Versicherung und klare Leistungen mit BAK Transport Wien.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/umzug-preise" },
};

export default function UmzugPreisePage() {
  return (
    <SeoLandingPage
      label="Umzug Preise Wien"
      title="Umzug Preise in Wien: klar kalkuliert, fair angeboten"
      subtitle="Was ein Umzug kostet, hängt von Wohnungsgröße, Stockwerk, Zugang, Möbelmenge und Zusatzleistungen ab. Bei BAK Transport erhalten Sie nach Besichtigung einen verbindlichen Fixpreis."
      intro="Viele Umzugskosten wirken online günstiger, als sie am Ende wirklich sind. Deshalb kalkulieren wir transparent: Besichtigung, Umfang, Team, LKW, Schutzmaterial, Montage und Versicherung werden vorab berücksichtigt."
      sections={[
        {
          heading: "Wovon hängen die Umzugskosten ab?",
          text: "Der Preis entsteht nicht nur durch die Quadratmeterzahl. Entscheidend sind auch Tragewege, Lift, Parkmöglichkeit, Möbelmontage, empfindliche Gegenstände und gewünschter Termin.",
          bullets: [
            "Wohnungsgröße und Möbelmenge",
            "Stockwerk, Lift und Entfernung zum LKW",
            "Ab- und Aufbau von Möbeln oder Küche",
            "Halteverbotszone, Verpackung und Schutzmaterial",
            "Kurzfristiger Termin oder Wochenende",
          ],
        },
        {
          heading: "Warum Fixpreis besser ist",
          text: "Ein Fixpreis schützt Sie vor Überraschungen am Umzugstag. Nach der Besichtigung wissen beide Seiten, was zu tun ist und welche Leistung im Preis enthalten ist.",
          bullets: [
            "klare Leistung vor Start",
            "keine versteckten Stundenfallen",
            "bessere Planung für Team und LKW",
            "schriftliche Bestätigung auf Wunsch",
          ],
        },
      ]}
      cards={[
        { title: "Kleine Wohnung", text: "Ideal für kompakte Umzüge mit wenigen Möbeln, Kartons und kurzer Tragedistanz." },
        { title: "Mittlere Wohnung", text: "Für Familienwohnungen mit Montage, Schutzfolie und strukturiertem Ablauf." },
        { title: "Großer Umzug", text: "Für Haus, Büro oder umfangreiche Transporte mit mehreren Helfern und LKW-Kapazität." },
      ]}
      faqs={[
        { question: "Kann ich den Preis telefonisch bekommen?", answer: "Eine erste Einschätzung ja. Für einen verbindlichen Fixpreis empfehlen wir eine Besichtigung oder eine sehr genaue Foto-/Videobeschreibung." },
        { question: "Ist die Versicherung im Preis enthalten?", answer: "Ja, die Versicherung wird bei der Kalkulation berücksichtigt. Details erklären wir transparent vor Auftragserteilung." },
        { question: "Kostet eine Besichtigung extra?", answer: "Nein, die Besichtigung ist bei BAK Transport kostenlos und dient dazu, fair und realistisch zu kalkulieren." },
      ]}
      relatedLinks={[
        { label: "Privatumzug Wien", href: "/leistungen/privatumzug" },
        { label: "Firmenumzug Wien", href: "/leistungen/firmenumzug" },
        { label: "Versicherung", href: "/versicherung" },
      ]}
    />
  );
}
