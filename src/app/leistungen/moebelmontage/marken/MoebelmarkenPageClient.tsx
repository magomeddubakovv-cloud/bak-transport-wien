"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Calendar } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const brands = ["IKEA", "XXXLutz", "Mömax", "Kika", "Leiner", "JYSK", "Home24", "Wayfair", "BoConcept", "Hülsta", "Rolf Benz", "Höffner"];

export function MoebelmarkenPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const brandGroups = [
    {
      title: t.moebelmarken_page_group1_title,
      brands: t.moebelmarken_page_group1_brands,
      image: "/images/photos/moebelmarken-bedroom.png",
      text: t.moebelmarken_page_group1_text,
    },
    {
      title: t.moebelmarken_page_group2_title,
      brands: t.moebelmarken_page_group2_brands,
      image: "/images/photos/moebelmarken-office.png",
      text: t.moebelmarken_page_group2_text,
    },
    {
      title: t.moebelmarken_page_group3_title,
      brands: t.moebelmarken_page_group3_brands,
      image: "/images/photos/moebelmarken-livingroom.png",
      text: t.moebelmarken_page_group3_text,
    },
  ];

  const steps = [
    t.moebelmarken_page_step1,
    t.moebelmarken_page_step2,
    t.moebelmarken_page_step3,
    t.moebelmarken_page_step4,
  ];

  const faqs = [
    { q: t.moebelmarken_page_faq1_q, a: t.moebelmarken_page_faq1_a },
    { q: t.moebelmarken_page_faq2_q, a: t.moebelmarken_page_faq2_a },
    { q: t.moebelmarken_page_faq3_q, a: t.moebelmarken_page_faq3_a },
    { q: t.moebelmarken_page_faq4_q, a: t.moebelmarken_page_faq4_a },
    { q: t.moebelmarken_page_faq5_q, a: t.moebelmarken_page_faq5_a },
    { q: t.moebelmarken_page_faq6_q, a: t.moebelmarken_page_faq6_a },
    { q: t.moebelmarken_page_faq7_q, a: t.moebelmarken_page_faq7_a },
    { q: t.moebelmarken_page_faq8_q, a: t.moebelmarken_page_faq8_a },
  ];

  return (
    <PageLayout
      label={t.moebelmarken_page_label}
      title={t.moebelmarken_page_title}
      subtitle={t.moebelmarken_page_subtitle}
    >
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <p className="text-lg leading-[1.8]" style={{ color: "#374151" }}>
                {t.moebelmarken_page_intro}
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
                alt={t.moebelmarken_page_hero_alt}
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
              {t.moebelmarken_page_groups_label}
            </p>
            <h2 className="mt-3 text-2xl font-black md:text-4xl" style={{ color: "#111827" }}>
              {t.moebelmarken_page_groups_h2}
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
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-black md:text-3xl" style={{ color: "#111827" }}>
              {t.moebelmarken_page_steps_h2}
            </h2>
            <p className="mt-4 leading-[1.8]" style={{ color: "#6B7280" }}>
              {t.moebelmarken_page_steps_p}
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

      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.16em]" style={{ color: "#C2410C" }}>
              {t.moebelmarken_page_faq_label}
            </p>
            <h2 className="mt-3 text-2xl font-black md:text-4xl" style={{ color: "#111827" }}>
              {t.moebelmarken_page_faq_h2}
            </h2>
          </div>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "2rem" }}>
                <p className="mb-2 text-lg font-bold" style={{ color: "#111827" }}>
                  {faq.q}
                </p>
                <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ backgroundColor: "#C2410C" }}>
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-black text-white md:text-3xl">{t.moebelmarken_page_cta_h2}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            {t.moebelmarken_page_cta_p}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/anfrage" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold" style={{ color: "#C2410C", textDecoration: "none" }}>
              <Mail className="h-5 w-5" />
              {t.moebelmarken_page_cta_btn1}
            </Link>
            <a href="https://calendly.com/baktransport/besichtigung-in-wien-umgebung" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-white px-6 py-3 font-bold text-white" style={{ textDecoration: "none" }}>
              <Calendar className="h-5 w-5" />
              {t.moebelmarken_page_cta_btn2}
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
