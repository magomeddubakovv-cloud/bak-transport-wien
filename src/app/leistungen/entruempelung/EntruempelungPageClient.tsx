"use client";

import Image from "next/image";
import { Check, Mail, Calendar, ArrowRight } from "lucide-react";
import { AblaufSection } from "@/components/AblaufSection";
import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";

const copy = {
  de: {
    label: "ENTRÜMPELUNG WIEN",
    title: "Entrümpelung, Räumung & Abtransport in Wien",
    subtitle:
      "Wir räumen Wohnungen, Keller, Dachböden, Büros und Verlassenschaften schnell, diskret und zum vereinbarten Fixpreis.",
    h2: "Sauber geräumt. Fair kalkuliert. Schnell erledigt.",
    p1:
      "Ob einzelne Räume oder komplette Wohnungen: BAK Transport übernimmt die Entrümpelung inklusive Sortierung, Tragen, Abtransport und besenreiner Übergabe.",
    p2:
      "Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Angebot. Sie wissen vor Beginn genau, welche Kosten entstehen und wann die Räumung abgeschlossen ist.",
    p3:
      "Verwertbare Gegenstände, Sperrmüll und Entsorgungsgut werden strukturiert getrennt. Auf Wunsch kombinieren wir Entrümpelung, Umzug und Möbeltransport in einem Termin.",
    checklist: [
      "Wohnung, Haus, Keller, Dachboden und Garage",
      "Büro- und Geschäftsflächen",
      "Verlassenschaften und Haushaltsauflösungen",
      "Sperrmüll-Abtransport und Demontage",
      "Besenreine Übergabe möglich",
      "Fixpreis nach kostenloser Besichtigung",
    ],
    stepsHeading: "So läuft Ihre Entrümpelung ab",
    steps: [
      { title: "Anfrage", text: "Sie schildern kurz Umfang, Adresse und gewünschten Zeitraum." },
      { title: "Besichtigung", text: "Wir prüfen Volumen, Zugang, Stockwerk und Entsorgungsaufwand kostenlos." },
      { title: "Fixpreis", text: "Sie erhalten ein klares Angebot inklusive Team, Transport und Abtransport." },
      { title: "Räumung", text: "Unser Team räumt sauber, zügig und übergibt die Fläche auf Wunsch besenrein." },
    ],
    cardHeading: "Typische Entrümpelungen",
    cards: [
      { title: "Wohnungsentrümpelung", text: "Komplette Wohnungen, einzelne Zimmer oder kurzfristige Räumungen vor Übergabe." },
      { title: "Keller & Dachboden", text: "Schwere, sperrige oder lange gelagerte Gegenstände werden sicher getragen und abtransportiert." },
      { title: "Verlassenschaft", text: "Diskrete und respektvolle Räumung mit klarer Absprache und verlässlichem Zeitplan." },
    ],
    priceNote: "Endpreis nach kostenloser Besichtigung. Entsorgungsaufwand und Volumen werden transparent kalkuliert.",
    prices: [
      { label: "Kleine Entrümpelung", price: "ab €280", detail: "Keller, Abstellraum oder wenige Möbelstücke" },
      { label: "Wohnung bis 50 m²", price: "ab €650", detail: "inkl. Team, Transport und Abtransport" },
      { label: "Große Räumung", price: "auf Anfrage", detail: "Haus, Büro, Verlassenschaft oder Gewerbefläche" },
    ],
    ecoHeading: "Entsorgung mit System",
    ecoText:
      "Wir trennen verwertbare Gegenstände, Sperrmüll und Entsorgungsgut so sauber wie möglich. Ziel ist eine effiziente Räumung ohne Chaos, ohne versteckte Zusatzkosten und mit klarer Übergabe.",
    faqHeading: "Häufige Fragen zur Entrümpelung",
    faqs: [
      { q: "Wie schnell ist eine Entrümpelung möglich?", a: "Oft sind kurzfristige Termine möglich. Nach Ihrer Anfrage prüfen wir direkt die Verfügbarkeit und melden uns rasch zurück." },
      { q: "Muss ich bei der Räumung vor Ort sein?", a: "Nicht zwingend. Wichtig ist eine klare Übergabe und Absprache vorab. Danach kann unser Team die Entrümpelung selbstständig durchführen." },
      { q: "Was kostet eine Wohnungsentrümpelung in Wien?", a: "Das hängt von Volumen, Stockwerk, Zugang, Demontage und Entsorgungsaufwand ab. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Fixpreis." },
    ],
    moreHeading: "Weitere passende Leistungen",
    ctaHeading: "Entrümpelung in Wien anfragen",
    ctaDesc: "Senden Sie uns Fotos oder vereinbaren Sie eine kostenlose Besichtigung. Wir melden uns schnell mit einem klaren Fixpreis.",
    quote: "Angebot anfragen",
    call: "Termin buchen",
  },
  en: {
    label: "CLEARANCE VIENNA",
    title: "Clearance, removal and disposal in Vienna",
    subtitle:
      "We clear apartments, basements, attics, offices and estates quickly, discreetly and at an agreed fixed price.",
    h2: "Cleared cleanly. Priced fairly. Done quickly.",
    p1:
      "Whether single rooms or entire apartments: BAK Transport handles sorting, carrying, removal and broom-clean handover.",
    p2:
      "After a free inspection, you receive a transparent offer. You know the cost and schedule before work begins.",
    p3:
      "Usable items, bulky waste and disposal material are separated in a structured way. On request, we combine clearance, moving and furniture transport in one appointment.",
    checklist: [
      "Apartment, house, basement, attic and garage",
      "Office and commercial spaces",
      "Estates and household clearances",
      "Bulky waste removal and dismantling",
      "Broom-clean handover possible",
      "Fixed price after free inspection",
    ],
    stepsHeading: "How your clearance works",
    steps: [
      { title: "Request", text: "You briefly describe scope, address and preferred time frame." },
      { title: "Inspection", text: "We check volume, access, floor level and disposal effort free of charge." },
      { title: "Fixed price", text: "You receive a clear offer including team, transport and removal." },
      { title: "Clearance", text: "Our team clears quickly and cleanly, with broom-clean handover if requested." },
    ],
    cardHeading: "Typical clearance jobs",
    cards: [
      { title: "Apartment clearance", text: "Entire apartments, individual rooms or urgent clearances before handover." },
      { title: "Basement & attic", text: "Heavy, bulky or long-stored items are carried and removed safely." },
      { title: "Estate clearance", text: "Discreet and respectful clearance with clear communication and a reliable schedule." },
    ],
    priceNote: "Final price after free inspection. Disposal effort and volume are calculated transparently.",
    prices: [
      { label: "Small clearance", price: "from €280", detail: "basement, storage room or a few furniture items" },
      { label: "Apartment up to 50 m²", price: "from €650", detail: "incl. team, transport and removal" },
      { label: "Large clearance", price: "on request", detail: "house, office, estate or commercial space" },
    ],
    ecoHeading: "Disposal with structure",
    ecoText:
      "We separate usable items, bulky waste and disposal material as clearly as possible. The goal is efficient clearance without chaos, hidden extra costs or unclear handover.",
    faqHeading: "Frequently asked questions about clearance",
    faqs: [
      { q: "How quickly is clearance possible?", a: "Short-notice appointments are often possible. After your request, we check availability immediately and get back to you quickly." },
      { q: "Do I need to be on site during clearance?", a: "Not necessarily. Clear handover and agreement beforehand are important. Afterwards, our team can carry out the clearance independently." },
      { q: "What does apartment clearance in Vienna cost?", a: "It depends on volume, floor level, access, dismantling and disposal effort. After the free inspection, you receive a binding fixed price." },
    ],
    moreHeading: "Other relevant services",
    ctaHeading: "Request clearance in Vienna",
    ctaDesc: "Send us photos or arrange a free inspection. We will respond quickly with a clear fixed price.",
    quote: "Request quote",
    call: "Book Appointment",
  },
} as const;

export function EntruempelungPageClient() {
  const { lang } = useLang();
  const t = copy[lang];

  const moreLinks = [
    { label: lang === "en" ? "Private Moving Vienna" : "Privatumzug Wien", href: "/leistungen/privatumzug" },
    { label: lang === "en" ? "Furniture Assembly Vienna" : "Möbelmontage Wien", href: "/leistungen/moebelmontage" },
    { label: lang === "en" ? "Emergency Move Vienna" : "Notfallumzug Wien", href: "/leistungen/notfallumzug" },
    { label: lang === "en" ? "Heavy Transport Vienna" : "Schwerlasttransport Wien", href: "/leistungen/schwerlasttransport" },
  ];

  return (
    <PageLayout label={t.label} title={t.title} subtitle={t.subtitle}>
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-12 items-start">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#111827" }}>{t.h2}</h2>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.p1}</p>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.p2}</p>
              <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.p3}</p>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="relative rounded-2xl overflow-hidden h-44 md:h-72">
                <Image src="/images/photos/entruempelung.png" alt="BAK Transport Entrümpelung und Abtransport in Wien" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover object-center" />
              </div>
              <ul className="grid grid-cols-2 gap-3 md:block md:space-y-4">
                {t.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 md:gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" style={{ color: "#C2410C" }} />
                    <span className="text-sm md:text-base leading-snug" style={{ color: "#111827" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AblaufSection heading={t.stepsHeading} steps={[...t.steps]} />

      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12" style={{ color: "#111827" }}>{t.cardHeading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            {t.cards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-5 md:p-8 shadow-sm" style={{ border: "1px solid #E5E7EB" }}>
                <div className="w-2 h-8 rounded mb-4" style={{ backgroundColor: "#C2410C" }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#111827" }}>{card.title}</h3>
                <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">{t.ecoHeading}</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.ecoText}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            {t.prices.map((p) => (
              <div key={p.label} className="rounded-2xl p-5 md:p-8 text-center" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
                <div className="text-lg font-semibold mb-2 text-gray-900">{p.label}</div>
                <div className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#C2410C" }}>{p.price}</div>
                <div style={{ color: "#6B7280" }}>{p.detail}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8" style={{ color: "#6B7280" }}>{t.priceNote}</p>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12" style={{ color: "#111827" }}>{t.faqHeading}</h2>
          <div className="space-y-8">
            {t.faqs.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "2rem" }}>
                <p className="font-semibold mb-2" style={{ color: "#111827" }}>{faq.q}</p>
                <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h3 className="text-xl font-bold mb-6" style={{ color: "#111827" }}>{t.moreHeading}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {moreLinks.map((link) => (
              <a key={link.href} href={link.href} className="group flex items-center justify-between gap-2 rounded-lg px-4 py-3 text-sm font-medium"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", color: "#C2410C", textDecoration: "none" }}>
                {link.label}
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ backgroundColor: "#C2410C" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.ctaHeading}</h2>
          <p className="mb-8 text-white opacity-95">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/anfrage" className="inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto" style={{ backgroundColor: "#FFFFFF", color: "#C2410C" }}><Mail className="w-5 h-5" />{t.quote}</a>
            <a href="https://calendly.com/baktransport/besichtigung-in-wien-umgebung" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto" style={{ border: "2px solid #FFFFFF", color: "#FFFFFF" }}><Calendar className="w-5 h-5" />{t.call}</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}



