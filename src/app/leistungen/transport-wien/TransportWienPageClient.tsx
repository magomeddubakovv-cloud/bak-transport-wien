"use client";

import {
  Shield, Clock, Star, MapPin, Globe, ArrowRight,
  Home, Building2, Sofa, ChefHat, Weight, Zap, Trash2, Calculator,
  Mail, Calendar,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function TransportWienPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const services = [
    {
      icon: Home,
      href: "/leistungen/privatumzug",
      label: lang === "en" ? "Private Moving Vienna" : "Privatumzug Wien",
      desc: lang === "en"
        ? "Complete private move in Vienna and Austria at a fixed price, including furniture assembly and €100,000 insurance."
        : "Kompletter Privatumzug in Wien und Österreich zum Fixpreis, inklusive Möbelmontage und €100.000 Versicherung.",
    },
    {
      icon: Building2,
      href: "/leistungen/firmenumzug",
      label: lang === "en" ? "Office Moving Vienna" : "Firmenumzug Wien",
      desc: lang === "en"
        ? "Discreet office relocation outside business hours – for minimal downtime in your company."
        : "Büroumzug diskret und außerhalb der Geschäftszeiten – für minimale Ausfallzeit in Ihrem Betrieb.",
    },
    {
      icon: Sofa,
      href: "/leistungen/moebelmontage",
      label: lang === "en" ? "Furniture Assembly Vienna" : "Möbelmontage Wien",
      desc: lang === "en"
        ? "Furniture assembly and disassembly for all brands, from IKEA to custom-made pieces, fast and clean."
        : "Möbelaufbau und -abbau aller Marken, von IKEA bis Maßanfertigung, schnell und sauber.",
    },
    {
      icon: ChefHat,
      href: "/leistungen/kuechenmontage",
      label: lang === "en" ? "Kitchen Assembly Vienna" : "Küchenmontage Wien",
      desc: lang === "en"
        ? "Kitchen assembly including appliances, countertop, and connections – done properly and on schedule."
        : "Küchenmontage inklusive Elektrogeräte, Arbeitsplatte und Anschlüsse – fachgerecht und termingerecht.",
    },
    {
      icon: Weight,
      href: "/leistungen/schwerlasttransport",
      label: lang === "en" ? "Heavy Transport Vienna" : "Schwerlasttransport Wien",
      desc: lang === "en"
        ? "Piano transport, safe transport, and heavy furniture – even without an elevator, with special equipment."
        : "Klaviertransport, Tresortransport und schwere Möbel – auch ohne Aufzug, mit Spezialausrüstung.",
    },
    {
      icon: Zap,
      href: "/leistungen/notfallumzug",
      label: lang === "en" ? "Emergency Move Vienna" : "Notfallumzug Wien",
      desc: lang === "en"
        ? "Short-notice transport within 24 hours – for water damage or sudden deadline pressure."
        : "Kurzfristiger Transport innerhalb von 24 Stunden – bei Wasserschaden oder plötzlichem Termindruck.",
    },
    {
      icon: Trash2,
      href: "/leistungen/entruempelung",
      label: lang === "en" ? "House Clearance Vienna" : "Entrümpelung Wien",
      desc: lang === "en"
        ? "Apartment clearance, basement clearance, and bulky waste disposal with a broom-clean handover."
        : "Wohnungsauflösung, Kellerentrümpelung und Sperrmüllentsorgung mit besenreiner Übergabe.",
    },
    {
      icon: Calculator,
      href: "/leistungen/umzug-preise",
      label: lang === "en" ? "Moving Prices Vienna" : "Umzug Preise Wien",
      desc: lang === "en"
        ? "Transparent price overview for transport and moving in Vienna – fixed price, no bad surprises."
        : "Transparente Preisübersicht für Transport und Umzug in Wien – Fixpreis statt böser Überraschung.",
    },
  ];

  const regions = [
    {
      icon: MapPin,
      href: "/regionen/wien",
      label: lang === "en" ? "Vienna (all districts)" : "Wien (alle Bezirke)",
      desc: lang === "en"
        ? "Transport and moving in all 23 Vienna districts, from downtown to the outer districts."
        : "Transport und Umzug in allen 23 Wiener Bezirken, von der Innenstadt bis zu den Außenbezirken.",
    },
    {
      icon: MapPin,
      href: "/regionen/niederoesterreich",
      label: lang === "en" ? "Lower Austria" : "Niederösterreich",
      desc: lang === "en"
        ? "Transports between Vienna and Lower Austria – from Klosterneuburg to Wiener Neustadt."
        : "Transporte zwischen Wien und Niederösterreich – von Klosterneuburg bis Wiener Neustadt.",
    },
    {
      icon: MapPin,
      href: "/regionen/oesterreich",
      label: lang === "en" ? "Austria" : "Österreich",
      desc: lang === "en"
        ? "Austria-wide transports with our own truck fleet, no subcontractors."
        : "Österreichweite Transporte mit eigener LKW-Flotte, ohne Subunternehmer.",
    },
    {
      icon: Globe,
      href: "/regionen/deutschland",
      label: lang === "en" ? "Germany" : "Deutschland",
      desc: lang === "en"
        ? "International transports to Munich, Berlin, Hamburg, and other German cities."
        : "Internationale Transporte nach München, Berlin, Hamburg und weitere deutsche Städte.",
    },
    {
      icon: Globe,
      href: "/regionen/schweiz",
      label: lang === "en" ? "Switzerland" : "Schweiz",
      desc: lang === "en"
        ? "Cross-border transport to Switzerland, including customs advice on request."
        : "Grenzüberschreitender Transport in die Schweiz, inklusive Zollberatung auf Anfrage.",
    },
    {
      icon: Globe,
      href: "/regionen/grenzueberschreitend",
      label: lang === "en" ? "Cross-Border" : "Grenzüberschreitend",
      desc: lang === "en"
        ? "International transports to all neighboring European countries, fully insured."
        : "Internationale Transporte in alle europäischen Nachbarländer mit voller Versicherung.",
    },
  ];

  const whyCards = [
    { title: t.transportwien_card1_title, text: t.transportwien_card1_text },
    { title: t.transportwien_card2_title, text: t.transportwien_card2_text },
    { title: t.transportwien_card3_title, text: t.transportwien_card3_text },
  ];

  const faqs = [
    { q: t.transportwien_faq1_q, a: t.transportwien_faq1_a },
    { q: t.transportwien_faq2_q, a: t.transportwien_faq2_a },
    { q: t.transportwien_faq3_q, a: t.transportwien_faq3_a },
    { q: t.transportwien_faq4_q, a: t.transportwien_faq4_a },
    { q: t.transportwien_faq5_q, a: t.transportwien_faq5_a },
    { q: t.transportwien_faq6_q, a: t.transportwien_faq6_a },
  ];

  return (
    <PageLayout label={t.transportwien_label} title={t.transportwien_title} subtitle={t.transportwien_subtitle}>
      {/* Intro + trust badges */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <p className="mb-4 text-base leading-relaxed" style={{ color: "#374151" }}>{t.transportwien_intro_p1}</p>
          <p className="mb-8 text-base leading-relaxed" style={{ color: "#374151" }}>{t.transportwien_intro_p2}</p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Shield, text: t.transportwien_badge1 },
              { icon: Clock, text: t.transportwien_badge2 },
              { icon: Star, text: t.transportwien_badge3 },
              { icon: MapPin, text: t.transportwien_badge4 },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium"
                style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", color: "#374151" }}>
                <Icon size={14} style={{ color: "#C2410C" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid — links to every leistungen page */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#111827" }}>{t.transportwien_services_h2}</h2>
          <p className="text-center mb-10 md:mb-12" style={{ color: "#6B7280" }}>{t.transportwien_services_sub}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <a key={s.href} href={s.href} className="group flex flex-col rounded-2xl bg-white p-6"
                style={{ border: "1px solid #E5E7EB", textDecoration: "none" }}>
                <s.icon className="w-6 h-6 mb-4" style={{ color: "#C2410C" }} />
                <h3 className="font-semibold mb-2" style={{ color: "#111827" }}>{s.label}</h3>
                <p className="text-sm mb-4 flex-1" style={{ color: "#6B7280", lineHeight: 1.6 }}>{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#C2410C" }}>
                  {lang === "en" ? "Learn more" : "Mehr erfahren"}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Regions grid — links to every regionen page */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#111827" }}>{t.transportwien_regions_h2}</h2>
          <p className="text-center mb-10 md:mb-12" style={{ color: "#6B7280" }}>{t.transportwien_regions_sub}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((r) => (
              <a key={r.href} href={r.href} className="group flex flex-col rounded-2xl p-6"
                style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", textDecoration: "none" }}>
                <r.icon className="w-6 h-6 mb-4" style={{ color: "#C2410C" }} />
                <h3 className="font-semibold mb-2" style={{ color: "#111827" }}>{r.label}</h3>
                <p className="text-sm mb-4 flex-1" style={{ color: "#6B7280", lineHeight: 1.6 }}>{r.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#C2410C" }}>
                  {lang === "en" ? "Learn more" : "Mehr erfahren"}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12" style={{ color: "#111827" }}>{t.sub_why_bak}</h2>
          <div className="grid grid-cols-1 min-[520px]:grid-cols-3 gap-4 md:gap-8">
            {whyCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-5 md:p-8 shadow-sm" style={{ border: "1px solid #E5E7EB" }}>
                <div className="w-2 h-8 rounded mb-4" style={{ backgroundColor: "#C2410C" }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#111827" }}>{card.title}</h3>
                <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12" style={{ color: "#111827" }}>{t.sub_faq_h2}</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.transportwien_cta_h2}</h2>
          <p className="mb-8 text-white opacity-95">{t.sub_cta_desc}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/anfrage" className="inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto" style={{ backgroundColor: "#FFFFFF", color: "#C2410C" }}><Mail className="w-5 h-5" />{t.sub_cta_btn1}</a>
            <a href="https://calendly.com/baktransport/besichtigung-in-wien-umgebung" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base w-full sm:w-auto" style={{ border: "2px solid #FFFFFF", color: "#FFFFFF" }}><Calendar className="w-5 h-5" />{t.sub_cta_btn2}</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
