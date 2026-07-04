import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Küchenmontage Marken Wien | IKEA, XXXLutz, Mömax & mehr",
  description:
    "Küchenmontage in Wien für IKEA, XXXLutz, Mömax, Kika, Leiner, Nolte, Nobilia, EWE, Miele und weitere Küchenmarken.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/kuechenmontage/marken" },
};

const kitchenBrands = [
  { name: "IKEA", className: "bg-[#0058A3] text-[#FBD914] font-black text-3xl md:text-4xl rounded-full px-8 py-5" },
  { name: "XXXLutz", className: "bg-white text-[#111827] border-2 border-[#111827] font-black text-3xl md:text-4xl px-7 py-4" },
  { name: "Mömax", className: "bg-[#C2410C] text-white font-black text-3xl md:text-4xl px-7 py-4" },
  { name: "kika | Leiner", className: "bg-gradient-to-r from-[#E30613] to-[#009640] text-white font-black text-2xl md:text-3xl px-7 py-5" },
  { name: "Nolte Küchen", className: "bg-white text-[#111827] border border-[#D1D5DB] font-black text-2xl md:text-3xl px-7 py-5" },
  { name: "nobilia", className: "bg-[#111827] text-white font-black text-3xl md:text-4xl lowercase px-7 py-5" },
  { name: "EWE", className: "bg-white text-[#E40046] border border-[#E5E7EB] font-black text-3xl md:text-4xl px-7 py-5" },
  { name: "Miele", className: "bg-[#8A0D1A] text-white font-black text-2xl md:text-3xl px-7 py-5" },
  { name: "DAN Küchen", className: "bg-white text-[#111827] border border-[#D1D5DB] font-black text-2xl md:text-3xl px-7 py-5" },
  { name: "Häcker", className: "bg-[#F9FAFB] text-[#111827] border border-[#D1D5DB] font-black text-2xl md:text-3xl px-7 py-5" },
  { name: "EWE", className: "bg-[#FEE2E2] text-[#B91C1C] font-black text-3xl px-7 py-5" },
  { name: "Leicht", className: "bg-white text-[#374151] border border-[#D1D5DB] font-black text-2xl md:text-3xl px-7 py-5" },
];

const brandDetails = [
  {
    title: "IKEA, XXXLutz & Mömax",
    text: "Diese Küchen und Möbelhaus-Systeme werden häufig geliefert und müssen sauber ausgerichtet, verbunden und an den Raum angepasst werden.",
    tags: ["IKEA METOD", "XXXLutz", "Mömax", "Kika", "Leiner"],
  },
  {
    title: "Nolte, Nobilia, Häcker & DAN",
    text: "Bei Systemküchen zählen präzise Ausrichtung, Frontbild, Sockel, Abschlussleisten und die richtige Reihenfolge bei der Montage.",
    tags: ["Nolte", "Nobilia", "Häcker", "DAN Küchen"],
  },
  {
    title: "Geräte & Ergänzungen",
    text: "Auch bei Geräten, Arbeitsplatten, Umbauten oder Wiederaufbau nach Umzug prüfen wir vorab, was möglich ist und was vorbereitet werden muss.",
    tags: ["Miele", "EWE", "FM Küchen", "Leicht"],
  },
];

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
      title="Küchenmontage in Wien für IKEA, XXXLutz, Mömax und mehr"
      subtitle="BAK Transport montiert Küchen vieler Hersteller und Möbelhäuser: sauber geplant, präzise ausgerichtet und mit klarem Fixpreis-Angebot."
    >
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.16em]" style={{ color: "#C2410C" }}>
            Hersteller & Küchenhäuser
          </p>
          <h2 className="mx-auto mt-3 max-w-5xl text-2xl font-black leading-tight md:text-4xl" style={{ color: "#111827" }}>
            Wir montieren Ihre Küchen von unter anderem folgenden Herstellern:
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.8] md:text-lg" style={{ color: "#6B7280" }}>
            Ob IKEA, XXXLutz, Mömax, Nolte, Nobilia oder DAN: Entscheidend sind vollständige Lieferung, Planunterlagen und saubere Vorbereitung vor dem Montagetermin.
          </p>

          <div className="mt-10 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {kitchenBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex min-h-28 items-center justify-center rounded-xl bg-white p-3 shadow-sm"
                style={{ border: "1px solid #E5E7EB" }}
              >
                <div className={`flex min-h-16 w-full items-center justify-center text-center leading-none ${brand.className}`}>
                  {brand.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {brandDetails.map((group) => (
              <article key={group.title} className="rounded-2xl bg-white p-6 shadow-sm" style={{ border: "1px solid #E5E7EB" }}>
                <div className="mb-5 h-1 w-12 rounded-full" style={{ backgroundColor: "#C2410C" }} />
                <h2 className="text-xl font-black" style={{ color: "#111827" }}>
                  {group.title}
                </h2>
                <p className="mt-3 leading-[1.75]" style={{ color: "#6B7280" }}>
                  {group.text}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span key={tag} className="rounded-full px-3 py-1.5 text-xs font-bold" style={{ backgroundColor: "#FFF7ED", color: "#C2410C" }}>
                      {tag}
                    </span>
                  ))}
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
