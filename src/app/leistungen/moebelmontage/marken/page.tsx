import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Möbelmontage Marken Wien | IKEA, XXXLutz, Mömax",
  description:
    "Möbelmontage in Wien für IKEA, XXXLutz, Mömax, Kika, Leiner, JYSK und weitere Marken. BAK Transport montiert Schränke, Betten und Büromöbel.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/moebelmontage/marken" },
};

const brandGroups = [
  {
    title: "IKEA Möbelmontage",
    brands: "PAX, BILLY, MALM, BESTA, KALLAX",
    image: "/images/photos/moebelmarken-bedroom.png",
    text: "IKEA Systeme sind beliebt, aber bei großen Schränken, Schiebetüren und Wandbefestigungen zählt sauberes Ausrichten. Wir montieren die Teile stabil und prüfen Beschläge, Türen und Schubladen.",
  },
  {
    title: "XXXLutz, Mömax, Kika & Leiner",
    brands: "Wohnwände, Betten, Kommoden, Garderoben",
    image: "/images/photos/moebelmarken-office.png",
    text: "Viele Möbelhäuser liefern zerlegt oder vormontiert. Wir übernehmen Aufbau, Abbau vor dem Umzug und Wiederaufbau am neuen Standort inklusive Schutz beim Transport.",
  },
  {
    title: "Büromöbel & Stauraum",
    brands: "Schreibtische, Aktenschränke, Regale, Rollcontainer",
    image: "/images/photos/moebelmarken-livingroom.png",
    text: "Für Firmen und Homeoffice montieren wir Arbeitsplätze, Schränke und Regalsysteme. Besonders bei Firmenumzügen planen wir Reihenfolge und Wiederaufbau strukturiert.",
  },
];

const brands = ["IKEA", "XXXLutz", "Mömax", "Kika", "Leiner", "JYSK", "Home24", "Wayfair", "BoConcept", "Hülsta", "Rolf Benz", "Höffner"];

const steps = [
  "Möbelmodell, Maße und Anzahl kurz senden",
  "Fotos oder Aufbauanleitung mitschicken",
  "Fixpreis-Angebot nach Umfang erhalten",
  "Montage sauber und termingerecht durchführen lassen",
];

export default function MoebelmarkenPage() {
  return (
    <PageLayout
      label="Möbelmarken"
      title="Möbelmontage in Wien für IKEA, XXXLutz, Mömax und mehr"
      subtitle="BAK Transport montiert Möbel vieler Hersteller und Händler: Schränke, Betten, Regale, Kommoden, Sideboards und Büromöbel."
    >
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <p className="text-lg leading-[1.8]" style={{ color: "#374151" }}>
                Jede Möbelmarke hat eigene Beschläge, Aufbauanleitungen und Systeme. Unser Team schützt Boden und Möbelteile, richtet sauber aus und montiert stabil.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span key={brand} className="rounded-full px-4 py-2 text-sm font-bold" style={{ backgroundColor: "#FFF7ED", color: "#C2410C" }}>
                    {brand}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl md:h-96">
              <Image
                src="/images/photos/moebelmarken-wardrobe.png"
                alt="BAK Transport Möbelmontage in Wien mit Monteuren und Werkzeug"
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.16em]" style={{ color: "#C2410C" }}>
              Marken & Möbelgruppen
            </p>
            <h2 className="mt-3 text-2xl font-black md:text-4xl" style={{ color: "#111827" }}>
              Für diese Möbel sind wir regelmäßig im Einsatz
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {brandGroups.map((group) => (
              <article key={group.title} className="overflow-hidden rounded-2xl bg-white shadow-sm" style={{ border: "1px solid #E5E7EB" }}>
                <div className="relative h-48">
                  <Image src={group.image} alt={`${group.title} mit BAK Transport Wien`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: "#C2410C" }}>
                    {group.brands}
                  </p>
                  <h2 className="mt-3 text-xl font-bold" style={{ color: "#111827" }}>
                    {group.title}
                  </h2>
                  <p className="mt-3 leading-[1.7]" style={{ color: "#6B7280" }}>
                    {group.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="text-2xl font-black md:text-3xl" style={{ color: "#111827" }}>
              So läuft die Möbelmontage ab
            </h2>
            <p className="mt-4 leading-[1.8]" style={{ color: "#6B7280" }}>
              Je genauer wir Modell, Anzahl und Zustand kennen, desto besser können wir Zeit und Preis planen. Fotos reichen oft schon für eine erste Einschätzung.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl p-5" style={{ backgroundColor: "#FFF7ED", border: "1px solid #FED7AA" }}>
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full text-sm font-black text-white" style={{ backgroundColor: "#C2410C" }}>
                  {index + 1}
                </div>
                <p className="font-bold leading-[1.55]" style={{ color: "#111827" }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ backgroundColor: "#C2410C" }}>
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-black text-white md:text-3xl">Möbelmontage anfragen</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            Senden Sie uns Marke, Modell, Fotos und gewünschten Termin. Wir melden uns mit einem klaren Angebot.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/anfrage" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold" style={{ color: "#C2410C", textDecoration: "none" }}>
              <Mail className="h-5 w-5" />
              Angebot anfragen
            </Link>
            <a href="tel:+4368110723047" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-white px-6 py-3 font-bold text-white" style={{ textDecoration: "none" }}>
              <Phone className="h-5 w-5" />
              Anrufen
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
