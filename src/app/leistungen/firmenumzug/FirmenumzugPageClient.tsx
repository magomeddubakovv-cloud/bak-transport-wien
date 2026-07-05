"use client";

import { Check, Calendar, Mail, ClipboardList, Monitor, Moon, Wrench, ParkingMeter, Trash2 } from "lucide-react";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { AblaufSection } from "@/components/AblaufSection";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const SERVICES_DE = [
  { icon: ClipboardList, title: "Projektmanagement", text: "Ein fixer Ansprechpartner koordiniert Ihren gesamten Firmenumzug — von der ersten Besichtigung bis zur Abnahme." },
  { icon: Monitor, title: "IT-Umzug", text: "Sicherer Abbau, Transport und Wiederaufbau Ihrer gesamten IT-Infrastruktur. Datensicherheit hat höchste Priorität." },
  { icon: Moon, title: "Nacht- & Wochenendservice", text: "Umzüge außerhalb der Geschäftszeiten minimieren Betriebsunterbrechungen und schonen Ihren laufenden Betrieb." },
  { icon: Wrench, title: "Möbelmontage", text: "Professioneller Ab- und Aufbau aller Büromöbel, Regale und Trennwände inklusive." },
  { icon: ParkingMeter, title: "Halteverbotsorganisation", text: "Wir beantragen alle nötigen Parkverbote und Genehmigungen für Lade- und Entladezonen für Sie." },
  { icon: Trash2, title: "Entsorgung & Reinigung", text: "Auf Wunsch entsorgen wir alte Möbel fachgerecht und übergeben die Räumlichkeiten besenrein." },
];

const SERVICES_EN = [
  { icon: ClipboardList, title: "Project Management", text: "A dedicated contact coordinates your entire office move — from the first inspection to final handover." },
  { icon: Monitor, title: "IT Relocation", text: "Safe dismantling, transport and reassembly of your entire IT infrastructure. Data security is our top priority." },
  { icon: Moon, title: "Night & Weekend Service", text: "Moves outside business hours minimize operational disruptions and protect your ongoing operations." },
  { icon: Wrench, title: "Furniture Assembly", text: "Professional disassembly and reassembly of all office furniture, shelves and partition walls included." },
  { icon: ParkingMeter, title: "No-Parking Zone", text: "We apply for all necessary parking bans and permits for loading and unloading zones on your behalf." },
  { icon: Trash2, title: "Disposal & Cleaning", text: "On request, we professionally dispose of old furniture and hand over the premises clean and tidy." },
];

const FAQS_DE = [
  { q: "Was kostet ein Firmenumzug in Wien?", a: "Die Kosten hängen von der Bürogröße, Stockwerk und Umfang ab. Für ein Büro bis 100 m² rechnen Sie mit €2.000–4.000, für 100–300 m² mit €4.000–8.000. Nach kostenloser Besichtigung erhalten Sie einen verbindlichen Fixpreis." },
  { q: "Wie lange dauert ein Firmenumzug?", a: "Je nach Bürogröße dauert ein Firmenumzug 1 bis 3 Tage. Mit unserem Nacht- und Wochenendservice können Betriebsunterbrechungen auf ein Minimum reduziert werden." },
  { q: "Was ist im Fixpreis enthalten?", a: "Im Fixpreis sind Transport, Verpackungsmaterial, Auf- und Abbau der Möbel sowie die Halteverbotsorganisation enthalten. IT-Umzug und Entsorgung können optional hinzugebucht werden." },
  { q: "Wie sichern Sie unsere IT beim Umzug ab?", a: "Unsere Mitarbeiter sind im Umgang mit IT-Equipment geschult. Alle Geräte werden fachgerecht verpackt, beschriftet und am Zielort wieder aufgebaut. Auf Wunsch koordinieren wir mit Ihrem IT-Dienstleister." },
  { q: "Können Sie außerhalb der Geschäftszeiten umziehen?", a: "Ja — wir bieten Nacht-, Wochenend- und Feiertagseinsätze an. So läuft Ihr Betrieb am nächsten Morgen ohne Unterbrechung weiter." },
  { q: "Sind wir während des Umzugs versichert?", a: "Ja. BAK Transport ist vollversichert. Alle transportierten Gegenstände sind während des gesamten Umzugs durch unsere Versicherung gedeckt." },
];

const FAQS_EN = [
  { q: "What does an office move in Vienna cost?", a: "Costs depend on office size, floor level and scope. For offices up to 100 m² expect €2,000–4,000, for 100–300 m² expect €4,000–8,000. After a free inspection you receive a binding fixed price." },
  { q: "How long does an office move take?", a: "Depending on office size, a move takes 1 to 3 days. With our night and weekend service, business interruptions can be minimized." },
  { q: "What is included in the fixed price?", a: "The fixed price includes transport, packaging materials, furniture assembly/disassembly and no-parking zone organization. IT relocation and disposal can be added as options." },
  { q: "How do you protect our IT during the move?", a: "Our staff are trained in handling IT equipment. All devices are professionally packed, labeled and reassembled at the destination. We can coordinate with your IT service provider on request." },
  { q: "Can you move outside business hours?", a: "Yes — we offer night, weekend and holiday moves. This way your operations continue the next morning without interruption." },
  { q: "Are we insured during the move?", a: "Yes. BAK Transport is fully insured. All transported items are covered by our insurance throughout the entire move." },
];

export function FirmenumzugPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const checklistItems = [
    t.firm_page_check1, t.firm_page_check2, t.firm_page_check3,
    t.firm_page_check4, t.firm_page_check5, t.firm_page_check6,
  ];
  const cards = [
    { title: t.firm_page_card1_title, text: t.firm_page_card1_text },
    { title: t.firm_page_card2_title, text: t.firm_page_card2_text },
    { title: t.firm_page_card3_title, text: t.firm_page_card3_text },
  ];
  const pricing = [
    { label: t.firm_page_p1_label, price: t.firm_page_p1_price, detail: t.firm_page_p1_detail },
    { label: t.firm_page_p2_label, price: t.firm_page_p2_price, detail: t.firm_page_p2_detail },
    { label: t.firm_page_p3_label, price: t.firm_page_p3_price, detail: t.firm_page_p3_detail },
  ];

  const services = lang === "en" ? SERVICES_EN : SERVICES_DE;
  const faqs = lang === "en" ? FAQS_EN : FAQS_DE;

  return (
    <PageLayout label={t.firm_page_label} title={t.firm_page_title} subtitle={t.firm_page_subtitle}>

      {/* Intro */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#111827" }}>{t.firm_page_h2}</h2>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.firm_page_p1}</p>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.firm_page_p2}</p>
              <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.firm_page_p3}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden h-48 md:h-72">
                <Image src="/images/photos/firmenumzug.png" alt="Firmenumzug Wien mit BAK Transport" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover object-center" />
              </div>
              <ul className="space-y-4">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: "#C2410C" }} />
                    <span style={{ color: "#111827" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Warum BAK */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12" style={{ color: "#111827" }}>{t.sub_why_bak}</h2>
          <div className="grid grid-cols-1 min-[520px]:grid-cols-3 gap-4 md:gap-8">
            {cards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-5 md:p-8 shadow-sm" style={{ border: "1px solid #E5E7EB" }}>
                <div className="w-2 h-8 rounded mb-4" style={{ backgroundColor: "#C2410C" }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#111827" }}>{card.title}</h3>
                <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Service Cards */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-xs uppercase tracking-[4px] font-bold mb-3" style={{ color: "#C2410C" }}>
            {lang === "en" ? "Our Services" : "Unsere Leistungen"}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12" style={{ color: "#111827" }}>
            {lang === "en" ? "Everything from a single source" : "Alles aus einer Hand"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl p-6" style={{ border: "1px solid #E5E7EB", backgroundColor: "#FAFAFA" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#FFF7ED" }}>
                  <s.icon size={20} style={{ color: "#C2410C" }} />
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "#111827" }}>{s.title}</h3>
                <p className="text-sm" style={{ color: "#6B7280", lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <AblaufSection
        heading={lang === "en" ? "How your office move works" : "So läuft Ihr Firmenumzug ab"}
        steps={lang === "en" ? [
          { title: "Inspection & Assessment", text: "Free on-site visit covering inventory, IT equipment, access situation and time window." },
          { title: "Fixed Price Offer", text: "Transparent, written offer with clearly defined scope of services." },
          { title: "Planning", text: "Step-by-step plan, no-parking zone, IT sequence and date outside business hours." },
          { title: "Moving Day", text: "Structured execution with on-site handover and a dedicated contact person." },
        ] : [
          { title: "Begehung & Bedarf", text: "Kostenlose Vor-Ort-Besichtigung mit Inventar, IT-Ausstattung, Zugangssituation und Zeitfenster." },
          { title: "Fixpreis-Angebot", text: "Transparentes, schriftlich bestätigtes Angebot mit klar definiertem Leistungsumfang." },
          { title: "Planung", text: "Etappenplan, Halteverbotszone, IT-Reihenfolge und Termin außerhalb der Geschäftszeiten." },
          { title: "Umzugstag", text: "Strukturierte Umsetzung mit Abnahme vor Ort und direktem Ansprechpartner." },
        ]}
      />

      {/* Preise */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">{t.firm_page_price_h2}</h2>
          <p className="text-center mb-12" style={{ color: "#6B7280" }}>{t.firm_page_price_footnote}</p>
          <div className="grid grid-cols-1 min-[520px]:grid-cols-3 gap-4 md:gap-8">
            {pricing.map((p) => (
              <div key={p.label} className="rounded-2xl p-5 md:p-8 text-center" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
                <div className="text-lg font-semibold mb-2 text-gray-900">{p.label}</div>
                <div className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#C2410C" }}>{p.price}</div>
                <div style={{ color: "#6B7280" }}>{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12" style={{ color: "#111827" }}>{t.firm_page_faq_h2}</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "2rem" }}>
                <p className="font-semibold mb-2" style={{ color: "#111827" }}>{faq.q}</p>
                <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#C2410C" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.firm_page_cta_h2}</h2>
          <p className="mb-8 text-white opacity-90">{t.sub_cta_desc}</p>
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/anfrage" className="inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto" style={{ backgroundColor: "#FFFFFF", color: "#C2410C" }}><Mail className="w-5 h-5" />{t.sub_cta_btn1}</a>
            <a href="https://calendly.com/baktransport/besichtigung-in-wien-umgebung" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto" style={{ border: "2px solid #FFFFFF", color: "#FFFFFF" }}><Calendar className="w-5 h-5" />{t.sub_cta_btn2}</a>
          </div>
        </div>
      </section>

      {/* Weitere Leistungen */}
      <section className="py-12" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h3 className="text-xl font-bold mb-6" style={{ color: "#111827" }}>{t.sub_more_services}</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: lang === "en" ? "Private Moving Vienna" : "Privatumzug Wien", href: "/leistungen/privatumzug" },
              { label: lang === "en" ? "Furniture Assembly Vienna" : "Möbelmontage Wien", href: "/leistungen/moebelmontage" },
              { label: lang === "en" ? "Kitchen Assembly Vienna" : "Küchenmontage Wien", href: "/leistungen/kuechenmontage" },
              { label: lang === "en" ? "Heavy Transport Vienna" : "Schwerlasttransport Wien", href: "/leistungen/schwerlasttransport" },
              { label: lang === "en" ? "Emergency Move Vienna" : "Notfallumzug Wien", href: "/leistungen/notfallumzug" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", color: "#C2410C", textDecoration: "none" }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
