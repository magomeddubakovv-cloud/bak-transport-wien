import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Küchenmontage Marken Wien | IKEA, Nolte, Nobilia",
  description:
    "Küchenmontage in Wien für IKEA, Nolte, Nobilia, Häcker, DAN Küchen und weitere Marken. BAK Transport montiert sauber und planbar.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/kuechenmontage/marken" },
};

const brands = ["IKEA", "Nolte", "Nobilia", "Häcker", "DAN Küchen", "EWE", "FM Küchen", "Leicht", "Alno", "Kika", "XXXLutz", "Mömax"];

export default function KuechenmarkenPage() {
  return (
    <SeoLandingPage
      label="Küchenmarken"
      title="Küchenmontage in Wien für IKEA, Nolte, Nobilia und mehr"
      subtitle="Wir montieren Küchen planbar, sauber und mit Blick auf Anschlüsse, Geräte, Arbeitsplatte und Wandabschluss."
      intro="Küchenmontage ist präziser als normale Möbelmontage. Schränke müssen ausgerichtet, Arbeitsplatten angepasst und Geräte sauber integriert werden. Deshalb prüfen wir vorab Modell, Lieferumfang und Raummaße."
      sections={[
        {
          heading: "Welche Küchenmarken montieren wir?",
          text: `Wir unterstützen bei vielen Küchenmarken, darunter ${brands.join(", ")} und weitere Systeme. Je genauer die Planung vorliegt, desto sauberer können wir kalkulieren.`,
          bullets: brands.slice(0, 8),
        },
        {
          heading: "Was vor der Montage wichtig ist",
          text: "Für eine reibungslose Montage brauchen wir Informationen zu Lieferung, Raummaßen, Anschlüssen, Geräten, Arbeitsplatte und eventuellen Sonderwünschen.",
          bullets: [
            "Küchenplan oder Bestellunterlagen",
            "Liefertermin und gewünschter Montagetermin",
            "Angaben zu Wasser, Strom und Geräteposition",
            "Fotos vom Raum und den Anschlüssen",
          ],
        },
      ]}
      cards={[
        { title: "Unterschränke & Hängeschränke", text: "Ausrichten, befestigen und sauber verbinden." },
        { title: "Arbeitsplatte & Ausschnitte", text: "Planung und Anpassung nach Absprache und Gegebenheiten." },
        { title: "Geräte & Abschluss", text: "Einbaugeräte und Abschlussleisten werden passend vorbereitet." },
      ]}
      faqs={[
        { question: "Montiert ihr auch IKEA Küchen?", answer: "Ja, IKEA Küchen gehören zu den häufigsten Küchenmontagen. Wichtig sind vollständige Lieferung und Planunterlagen." },
        { question: "Sind Wasser- und Elektroanschlüsse enthalten?", answer: "Anschlüsse erfolgen nach Absprache und abhängig von der Situation vor Ort. Wir klären das vorab im Angebot." },
      ]}
      relatedLinks={[
        { label: "Küchenmontage Wien", href: "/leistungen/kuechenmontage" },
        { label: "Möbelmarken", href: "/leistungen/moebelmontage/marken" },
        { label: "Anfrage", href: "/anfrage" },
      ]}
    />
  );
}
