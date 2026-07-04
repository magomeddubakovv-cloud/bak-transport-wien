"use client";

import { Check, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { AblaufSection } from "@/components/AblaufSection";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const furnitureBrandLogos = [
  { name: "IKEA", src: "/images/brand-logos/furniture-ikea.avif", href: "https://www.ikea.com/at/de/", width: 220, height: 92 },
  { name: "XXXLutz", src: "/images/brand-logos/furniture-xxxlutz.avif", href: "https://www.xxxlutz.at/", width: 300, height: 92 },
  { name: "Beliani", src: "/images/brand-logos/furniture-beliani.svg", href: "https://www.beliani.at/", width: 300, height: 92 },
  { name: "TEAM 7", src: "/images/brand-logos/furniture-team7.avif", href: "https://www.team7-home.com/", width: 320, height: 92 },
  { name: "Voglauer", src: "/images/brand-logos/furniture-voglauer.avif", href: "https://www.voglauer.com/de/", width: 280, height: 92 },
];

export function MoebelmontagePageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const checklistItems = [
    t.moebel_page_check1, t.moebel_page_check2, t.moebel_page_check3,
    t.moebel_page_check4, t.moebel_page_check5, t.moebel_page_check6,
  ];
  const cards = [
    { title: t.moebel_page_card1_title, text: t.moebel_page_card1_text },
    { title: t.moebel_page_card2_title, text: t.moebel_page_card2_text },
    { title: t.moebel_page_card3_title, text: t.moebel_page_card3_text },
  ];
  const pricing = [
    { label: t.moebel_page_p1_label, price: t.moebel_page_p1_price, detail: t.moebel_page_p1_detail },
    { label: t.moebel_page_p2_label, price: t.moebel_page_p2_price, detail: t.moebel_page_p2_detail },
    { label: t.moebel_page_p3_label, price: t.moebel_page_p3_price, detail: t.moebel_page_p3_detail },
  ];
  const faqs = [
    { q: t.moebel_page_faq1_q, a: t.moebel_page_faq1_a },
    { q: t.moebel_page_faq2_q, a: t.moebel_page_faq2_a },
    { q: t.moebel_page_faq3_q, a: t.moebel_page_faq3_a },
    { q: t.moebel_page_faq4_q, a: t.moebel_page_faq4_a },
    { q: t.moebel_page_faq5_q, a: t.moebel_page_faq5_a },
    { q: t.moebel_page_faq6_q, a: t.moebel_page_faq6_a },
  ];

  return (
    <PageLayout label={t.moebel_page_label} title={t.moebel_page_title} subtitle={t.moebel_page_subtitle}>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#111827" }}>{t.moebel_page_h2}</h2>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.moebel_page_p1}</p>
              <p className="mb-4" style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.moebel_page_p2}</p>
              <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{t.moebel_page_p3}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden h-48 md:h-72">
                <Image src="/images/photos/moebelmontage.png" alt="Möbelmontage Wien mit BAK Transport" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover object-center" />
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
      <AblaufSection
        heading="So läuft Ihre Möbelmontage ab"
        steps={[
          { title: "Anfrage stellen", text: "Beschreiben Sie Ihre Möbel, Stückzahl und gewünschten Termin per Telefon oder Formular." },
          { title: "Fixpreis-Angebot", text: "Sie erhalten innerhalb von 60 Minuten ein transparentes Angebot ohne versteckte Kosten." },
          { title: "Terminbestätigung", text: "Wir koordinieren Datum und Uhrzeit nach Ihren Wünschen und bestätigen den Einsatz." },
          { title: "Montage", text: "Unser Team montiert Ihre Möbel professionell, sauber und pünktlich vor Ort." },
        ]}
      />
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
      <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">{t.moebel_page_price_h2}</h2>
          <p className="text-center mb-12" style={{ color: "#6B7280" }}>{t.moebel_page_price_footnote}</p>
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
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12" style={{ color: "#111827" }}>{t.moebel_page_faq_h2}</h2>
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
      <section className="py-12" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h3 className="text-xl font-bold mb-6" style={{ color: "#111827" }}>{t.sub_more_services}</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: lang === "en" ? "Private Moving Vienna" : "Privatumzug Wien", href: "/leistungen/privatumzug" },
              { label: lang === "en" ? "Office Moving Vienna" : "Firmenumzug Wien", href: "/leistungen/firmenumzug" },
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
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h2 className="mx-auto max-w-5xl text-2xl font-black leading-tight md:text-4xl" style={{ color: "#111827" }}>
            Wir montieren Ihre Möbel von unter anderem folgenden Herstellern:
          </h2>
          <Link
            href="/leistungen/moebelmontage/marken"
            className="mt-6 inline-flex items-center justify-center text-base font-bold md:text-lg"
            style={{ color: "#C2410C", textDecoration: "none" }}
          >
            Alle Möbelmarken im Detail ansehen →
          </Link>
          <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {furnitureBrandLogos.map((brand) => (
              <a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${brand.name} Webseite öffnen`}
                className="flex h-24 w-full max-w-56 items-center justify-center rounded-xl transition hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C] focus:ring-offset-4"
                style={{ textDecoration: "none" }}
              >
                <Image
                  src={brand.src}
                  alt={`${brand.name} Logo`}
                  width={brand.width}
                  height={brand.height}
                  className="max-h-20 w-auto max-w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-[#E5E7EB] py-12 md:py-16" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div>
            <p className="text-lg leading-snug md:text-2xl" style={{ color: "#6B7280" }}>
              Haben Sie ein spezifisches Ziel?
            </p>
            <Link
              href="/anfrage"
              className="mt-3 inline-flex text-lg font-black md:text-xl"
              style={{ color: "#C2410C", textDecoration: "none" }}
            >
              Fragen Sie uns an →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:flex sm:flex-wrap">
            <a
              href="tel:+4368110723047"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg px-6 py-3 text-lg font-black text-white transition hover:bg-[#9A3412]"
              style={{ backgroundColor: "#C2410C", textDecoration: "none" }}
            >
              <Phone className="h-6 w-6" />
              Anrufen
            </a>
            <a
              href="https://wa.me/4368110723047"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg px-6 py-3 text-lg font-black text-white transition hover:bg-[#16A34A]"
              style={{ backgroundColor: "#25D366", textDecoration: "none" }}
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
