import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Küchenmontage Marken Wien | IKEA, Nolte, Nobilia",
  description:
    "Küchenmontage in Wien für IKEA, Nolte, Nobilia, Häcker, DAN Küchen, EWE und weitere Marken. BAK Transport montiert Küchen sauber und planbar.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/kuechenmontage/marken" },
};

const brandGroups = [
  {
    title: "IKEA Küchenmontage",
    brands: "METOD, ENHET, KNOXHULT",
    image: "/images/photos/kuechenmontage.png",
    text: "IKEA Küchen brauchen saubere Ausrichtung, exakte Schrankverbindung und eine gute Vorbereitung der Arbeitsplatte. Wir prüfen Lieferumfang, Plan und Raummaße vor dem Termin.",
  },
  {
    title: "Nolte, Nobilia & Häcker",
    brands: "Systemküchen, Hochschränke, Gerätezeilen",
    image: "/images/photos/kuechenmontage.png",
    text: "Bei hochwertigen Küchen zählt Präzision: Schränke, Fronten, Sockel, Abschlussleisten und Geräte müssen sauber sitzen. Wir arbeiten planbar und sorgfältig.",
  },
  {
    title: "DAN, EWE, FM & Leicht",
    brands: "österreichische Küchen, Maßplanung, Umbau",
    image: "/images/photos/handshake.jpg",
    text: "Für Küchenumbau, Wiederaufbau nach Umzug oder Ergänzungen klären wir vorab Anschlüsse, Wandzustand, Geräteposition und gewünschte Leistungen.",
  },
];

const brands = ["IKEA", "Nolte", "Nobilia", "Häcker", "DAN Küchen", "EWE", "FM Küchen", "Leicht", "Alno", "Kika", "XXXLutz", "Mömax"];

const checklist = [
  "Küchenplan oder Bestellunterlagen",
  "Fotos vom Raum und den Anschlüssen",
  "Liefertermin und gewünschter Montagetermin",
  "Liste der Geräte und Sonderwünsche",
];

export default function KuechenmarkenPage() {
  return (
    <PageLayout
      label="Küchenmarken"
      title="Küchenmontage in Wien für IKEA, Nolte, Nobilia und mehr"
      subtitle="BAK Transport montiert Küchen planbar, sauber und mit Blick auf Anschlüsse, Geräte, Arbeitsplatte, Schränke und Wandabschluss."
    >
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div className="relative order-2 h-64 overflow-hidden rounded-2xl md:order-1 md:h-96">
              <Image
                src="/images/photos/kuechenmontage.png"
                alt="BAK Transport Küchenmontage in Wien mit Monteuren in oranger Arbeitskleidung"
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg leading-[1.8]" style={{ color: "#374151" }}>
                Küchenmontage ist präziser als normale Möbelmontage. Schränke müssen ausgerichtet, Arbeitsplatten angepasst und Geräte sauber integriert werden.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span key={brand} className="rounded-full px-4 py-2 text-sm font-bold" style={{ backgroundColor: "#FFF7ED", color: "#C2410C" }}>
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.16em]" style={{ color: "#C2410C" }}>
              Küchenmarken & Systeme
            </p>
            <h2 className="mt-3 text-2xl font-black md:text-4xl" style={{ color: "#111827" }}>
              Erfahrung mit gängigen Küchenmarken
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-[0.85fr_1.15fr] md:px-6">
          <div>
            <h2 className="text-2xl font-black md:text-3xl" style={{ color: "#111827" }}>
              Was wir vor der Küchenmontage brauchen
            </h2>
            <p className="mt-4 leading-[1.8]" style={{ color: "#6B7280" }}>
              Je genauer die Unterlagen sind, desto besser können wir Termin, Zeitaufwand und Fixpreis kalkulieren. Fotos helfen besonders bei Anschlüssen und Wandzustand.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <div key={item} className="rounded-2xl p-5" style={{ backgroundColor: "#FFF7ED", border: "1px solid #FED7AA" }}>
                <p className="font-bold leading-[1.6]" style={{ color: "#111827" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ backgroundColor: "#C2410C" }}>
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-black text-white md:text-3xl">Küchenmontage anfragen</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            Schicken Sie Küchenplan, Fotos und Liefertermin. Wir prüfen den Umfang und melden uns mit einem klaren Angebot.
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
