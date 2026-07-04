import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Möbelmontage Marken Wien | IKEA, XXXLutz, Mömax",
  description:
    "Möbelmontage in Wien für IKEA, XXXLutz, Mömax, Leiner, Kika und weitere Marken. BAK Transport baut Möbel sauber auf und ab.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/moebelmontage/marken" },
};

const brands = ["IKEA", "XXXLutz", "Mömax", "Kika", "Leiner", "JYSK", "Höffner", "Home24", "Wayfair", "BoConcept", "Hülsta", "Rolf Benz"];

export default function MoebelmarkenPage() {
  return (
    <SeoLandingPage
      label="Möbelmarken"
      title="Möbelmontage in Wien für IKEA, XXXLutz, Mömax und mehr"
      subtitle="BAK Transport montiert Möbel vieler Hersteller und Händler: Schränke, Betten, Regale, Kommoden, Sideboards und Büromöbel."
      intro="Jede Möbelmarke hat eigene Systeme, Beschläge und Aufbauanleitungen. Unser Team arbeitet ruhig, sauber und schützt Boden, Wände und Möbelteile während der Montage."
      sections={[
        {
          heading: "Welche Möbelmarken montieren wir?",
          text: `Wir unterstützen unter anderem bei ${brands.join(", ")} und weiteren Marken. Wichtig ist, dass alle Teile, Beschläge und Anleitungen vor Ort sind.`,
          bullets: brands.slice(0, 8),
        },
        {
          heading: "Auch Abbau und Wiederaufbau möglich",
          text: "Bei einem Umzug bauen wir Möbel fachgerecht ab, transportieren sie sicher und montieren sie am neuen Standort wieder. Das spart Zeit und reduziert Schäden.",
        },
      ]}
      cards={[
        { title: "Schränke & Regale", text: "Kleiderschränke, Schiebetüren, Wandregale, Bücherregale und Stauraumlösungen." },
        { title: "Betten & Kommoden", text: "Bettgestelle, Nachttische, Sideboards, Kommoden und Wohnwände." },
        { title: "Büromöbel", text: "Schreibtische, Aktenschränke, Rollcontainer und Besprechungstische." },
      ]}
      faqs={[
        { question: "Muss ich die Aufbauanleitung haben?", answer: "Wenn möglich ja. Fehlt sie, können wir viele Modelle trotzdem montieren, benötigen aber eventuell mehr Zeit." },
        { question: "Montiert ihr auch Möbel ohne Umzug?", answer: "Ja, Möbelmontage kann auch einzeln gebucht werden." },
      ]}
      relatedLinks={[
        { label: "Möbelmontage Wien", href: "/leistungen/moebelmontage" },
        { label: "Privatumzug Wien", href: "/leistungen/privatumzug" },
        { label: "Umzug Preise", href: "/leistungen/umzug-preise" },
      ]}
    />
  );
}
