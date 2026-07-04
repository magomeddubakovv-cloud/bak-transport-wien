import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Küchenmontage Marken Wien | IKEA, XXXLutz, Mömax & mehr",
  description:
    "Küchenmontage in Wien für IKEA, XXXLutz, Mömax, Kika, Leiner, Nolte, Nobilia, EWE, Miele und weitere Küchenmarken.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/kuechenmontage/marken" },
};

type KitchenBrand = {
  name: string;
  logo?: string;
  className?: string;
};

const kitchenBrands: KitchenBrand[] = [
  { name: "IKEA", logo: "/images/brand-logos/ikea.png" },
  { name: "XXXLutz", logo: "/images/brand-logos/xxxlutz.png" },
  { name: "Mömax", logo: "/images/brand-logos/moemax.png" },
  { name: "Kika", className: "bg-[#E30613] text-white" },
  { name: "Leiner", logo: "/images/brand-logos/leiner-wiki.png" },
  { name: "TEAM 7", logo: "/images/brand-logos/team7.png" },
  { name: "Nolte Küchen", logo: "/images/brand-logos/nolte.png" },
  { name: "nobilia", className: "bg-[#111827] lowercase text-white" },
  { name: "EWE", logo: "/images/brand-logos/ewe.png" },
  { name: "Miele", className: "bg-[#8A0D1A] text-white" },
  { name: "DAN Küchen", logo: "/images/brand-logos/dan.png" },
  { name: "Häcker", logo: "/images/brand-logos/haecker.png" },
  { name: "Leicht", className: "bg-white text-[#374151] ring-1 ring-[#D1D5DB]" },
  { name: "HAKA Küche", className: "bg-white text-[#374151] ring-1 ring-[#D1D5DB]" },
  { name: "Steininger", className: "bg-[#111827] text-white" },
];

const brandDetails = [
  {
    title: "IKEA, XXXLutz, Mömax, Kika & Leiner",
    text: "Diese Möbelhaus-Küchen werden häufig geliefert und müssen sauber ausgerichtet, verbunden und an den Raum angepasst werden.",
    tags: ["IKEA METOD", "XXXLutz", "Mömax", "Kika", "Leiner"],
  },
  {
    title: "Nolte, Nobilia, Häcker & DAN",
    text: "Bei Systemküchen zählen präzise Ausrichtung, Frontbild, Sockel, Abschlussleisten und die richtige Reihenfolge bei der Montage.",
    tags: ["Nolte", "Nobilia", "Häcker", "DAN Küchen"],
  },
  {
    title: "Geräte, Premiumküchen & Ergänzungen",
    text: "Auch bei Geräten, Arbeitsplatten, Umbauten oder Wiederaufbau nach Umzug prüfen wir vorab, was möglich ist und vorbereitet werden muss.",
    tags: ["Miele", "EWE", "TEAM 7", "Leicht", "HAKA", "Steininger"],
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

          <div className="mt-10 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {kitchenBrands.map((brand) => (
              <div
                key={brand.name}
                className="flex min-h-28 items-center justify-center rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{ border: "1px solid #E5E7EB" }}
              >
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    width={210}
                    height={96}
                    className="max-h-16 w-auto max-w-full object-contain"
                  />
                ) : (
                  <div
                    className={`flex min-h-16 w-full items-center justify-center rounded-lg px-5 py-4 text-center text-xl font-black leading-none ${brand.className ?? "bg-[#FFF7ED] text-[#C2410C]"}`}
                  >
                    {brand.name}
                  </div>
                )}
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
