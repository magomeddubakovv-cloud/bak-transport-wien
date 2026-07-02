"use client";

import { Phone, Mail, Check, MapPin, Clock, Shield, Star } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { AblaufSection } from "@/components/AblaufSection";
import type { WienerBezirk } from "@/data/wiener-bezirke";

interface Props {
  bezirk: WienerBezirk;
}

const PRICING = [
  { label: "Klein", size: "bis 50 m²", price: "ab €650", detail: "1–2 Zimmer, inkl. 2 Mann & LKW" },
  { label: "Kompakt", size: "50–90 m²", price: "ab €950", detail: "2–3 Zimmer, inkl. 3 Mann & LKW" },
  { label: "Groß", size: "über 90 m²", price: "ab €1.490", detail: "4+ Zimmer, inkl. 4 Mann & LKW" },
];

export function BezirkPageClient({ bezirk }: Props) {
  return (
    <PageLayout
      label={`Umzug ${bezirk.nr} Wien`}
      title={`Umzug ${bezirk.name} Wien`}
      subtitle={`Ihr professioneller Umzugspartner im ${bezirk.nr} — Fixpreis, vollversichert, zuverlässig.`}
    >
      {/* Intro + Trust-Badges */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-[3px] font-bold mb-3" style={{ color: "#C2410C" }}>
                {bezirk.fullName}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: "#111827" }}>
                Professioneller Umzugsservice im {bezirk.nr} Wien
              </h2>
              <p className="mb-4 text-base leading-relaxed" style={{ color: "#6B7280" }}>
                {bezirk.beschreibung}
              </p>
              <p className="mb-6 text-base leading-relaxed" style={{ color: "#6B7280" }}>
                BAK Transport führt täglich Umzüge in ganz Wien durch — mit Fixpreis, erfahrenem Team und
                vollständiger Versicherungsdeckung. Kein Stundenlohn-Risiko, keine versteckten Kosten.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Shield, text: "Vollversichert" },
                  { icon: Clock, text: "Antwort in 60 Min." },
                  { icon: Star, text: "4,9/5 ★ Kundenbewertung" },
                  { icon: MapPin, text: bezirk.besonderheit },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium"
                    style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", color: "#374151" }}>
                    <Icon size={14} style={{ color: "#C2410C" }} />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Checkliste */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB" }}>
              <h3 className="text-lg font-bold mb-6" style={{ color: "#111827" }}>
                Was ist im Umzugspreis enthalten?
              </h3>
              <ul className="space-y-4">
                {[
                  "Professionelles Umzugsteam (mind. 2 Mann)",
                  "LKW mit Hebebühne inklusive",
                  "Schutzdecken & Verpackungsmaterial",
                  "Möbeldemontage & Montage auf Wunsch",
                  "Halteverbotsorganisation",
                  "Vollständige Haftpflichtversicherung",
                  "Kostenlose Vorab-Besichtigung",
                  "Verbindlicher Fixpreis – keine Überraschungen",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: "#C2410C" }} />
                    <span style={{ color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preise */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#111827" }}>
              Umzugspreise für {bezirk.name} Wien
            </h2>
            <p style={{ color: "#6B7280" }}>
              Fixpreise ab Besichtigung — keine Stundenlohn-Falle, keine versteckten Kosten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {PRICING.map((p) => (
              <div key={p.label}
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
                <div className="text-sm font-semibold mb-1" style={{ color: "#C2410C" }}>
                  {p.label}
                </div>
                <div className="text-base mb-1" style={{ color: "#6B7280" }}>{p.size}</div>
                <div className="text-3xl md:text-4xl font-black my-4" style={{ color: "#C2410C" }}>
                  {p.price}
                </div>
                <div className="text-sm mb-6" style={{ color: "#6B7280" }}>{p.detail}</div>
                <a href="/anfrage"
                  className="block w-full py-3 rounded-xl font-semibold text-sm text-center transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#C2410C", color: "#FFFFFF", textDecoration: "none" }}>
                  Jetzt Fixpreis anfragen
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm" style={{ color: "#9CA3AF" }}>
            * Alle Preise inkl. MwSt. Der exakte Fixpreis wird nach kostenloser Besichtigung festgelegt.
          </p>
        </div>
      </section>

      {/* Ablauf */}
      <AblaufSection
        heading={`So läuft Ihr Umzug in ${bezirk.name} ab`}
        steps={[
          { title: "Kostenlose Anfrage", text: "Kontaktieren Sie uns online oder per Telefon — wir melden uns innerhalb von 60 Minuten." },
          { title: "Gratis Besichtigung", text: "Wir kommen kostenlos zu Ihnen und erstellen einen verbindlichen Fixpreis vor Ort." },
          { title: "Planung & Organisation", text: "Wir organisieren alles: Halteverbot, Team, LKW, Verpackungsmaterial." },
          { title: "Umzugstag", text: "Pünktlich, professionell und vollversichert — wir kümmern uns um alles bis zum letzten Karton." },
        ]}
      />

      {/* Fixpreis vs Stundenlohn */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: "#111827" }}>
            Fixpreis vs. Stundenlohn — was ist besser?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fixpreis */}
            <div className="rounded-2xl p-8 bg-white" style={{ border: "1px solid #E5E7EB" }}>
              <div className="w-2 h-8 rounded mb-4" style={{ backgroundColor: "#C2410C" }} />
              <h3 className="text-lg font-bold mb-5" style={{ color: "#111827" }}>Fixpreis (BAK Transport)</h3>
              <ul className="space-y-3">
                {[
                  "Sie wissen vorher genau, was Sie zahlen",
                  "Kein Risiko bei Verzögerungen",
                  "Anreiz für das Team, effizient zu arbeiten",
                  "Keine bösen Überraschungen nach dem Umzug",
                  "Ideal für Budgetplanung",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#6B7280" }}>
                    <Check size={14} className="mt-0.5 shrink-0" style={{ color: "#C2410C" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stundenlohn */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB" }}>
              <div className="w-2 h-8 rounded mb-4" style={{ backgroundColor: "#9CA3AF" }} />
              <h3 className="text-lg font-bold mb-5" style={{ color: "#111827" }}>Stundenlohn (Vorsicht)</h3>
              <ul className="space-y-3">
                {[
                  "Endrechnung oft deutlich höher als erwartet",
                  "Kein Anreiz für schnelles Arbeiten",
                  "Stau, Parkplatzsuche — alles wird verrechnet",
                  "Schwer planbar für Budget",
                  "Häufig Streit über geleistete Stunden",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#6B7280" }}>
                    <span className="mt-0.5 shrink-0 font-bold" style={{ color: "#9CA3AF" }}>✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: "#111827" }}>
            Häufige Fragen — Umzug {bezirk.name}
          </h2>
          <div className="space-y-6">
            {bezirk.faq.map((item, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white" style={{ border: "1px solid #E5E7EB" }}>
                <p className="font-semibold mb-3" style={{ color: "#111827" }}>{item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Andere Bezirke */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h3 className="text-xl font-bold mb-6" style={{ color: "#111827" }}>
            Weitere Bezirke in Wien
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Innere Stadt", slug: "innere-stadt" }, { name: "Leopoldstadt", slug: "leopoldstadt" },
              { name: "Landstraße", slug: "landstrasse" }, { name: "Wieden", slug: "wieden" },
              { name: "Margareten", slug: "margareten" }, { name: "Mariahilf", slug: "mariahilf" },
              { name: "Neubau", slug: "neubau" }, { name: "Josefstadt", slug: "josefstadt" },
              { name: "Alsergrund", slug: "alsergrund" }, { name: "Favoriten", slug: "favoriten" },
              { name: "Simmering", slug: "simmering" }, { name: "Meidling", slug: "meidling" },
              { name: "Hietzing", slug: "hietzing" }, { name: "Penzing", slug: "penzing" },
              { name: "Rudolfsheim-Fünfhaus", slug: "rudolfsheim-fuenfhaus" }, { name: "Ottakring", slug: "ottakring" },
              { name: "Hernals", slug: "hernals" }, { name: "Währing", slug: "waehring" },
              { name: "Döbling", slug: "doebling" }, { name: "Brigittenau", slug: "brigittenau" },
              { name: "Floridsdorf", slug: "floridsdorf" }, { name: "Donaustadt", slug: "donaustadt" },
              { name: "Liesing", slug: "liesing" },
            ]
              .filter(b => b.slug !== bezirk.slug)
              .map(b => (
                <a key={b.slug} href={`/regionen/wien/${b.slug}`}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:opacity-80"
                  style={{ backgroundColor: "#F3F4F6", color: "#374151", textDecoration: "none" }}>
                  {b.name}
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#C2410C" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Jetzt Fixpreis für {bezirk.name} anfragen
          </h2>
          <p className="mb-8 text-white opacity-90">
            Kostenlose Besichtigung — Angebot in 60 Minuten — Umzug zu Ihrem Wunschtermin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/anfrage"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base w-full sm:w-auto"
              style={{ backgroundColor: "#FFFFFF", color: "#C2410C", textDecoration: "none" }}>
              <Mail className="w-5 h-5" />
              Kostenloses Angebot
            </a>
            <a href="tel:+4368110723047"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base w-full sm:w-auto"
              style={{ border: "2px solid #FFFFFF", color: "#FFFFFF", textDecoration: "none" }}>
              <Phone className="w-5 h-5" />
              0681 107 23 047
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
