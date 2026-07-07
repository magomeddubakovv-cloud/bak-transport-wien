"use client";

import { SeoLandingPage } from "@/components/SeoLandingPage";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function UmzugPreisePageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <SeoLandingPage
      label={t.umzugpreise_label}
      title={t.umzugpreise_title}
      subtitle={t.umzugpreise_subtitle}
      intro={t.umzugpreise_intro}
      sections={[
        {
          heading: t.umzugpreise_pricetable_heading,
          text: t.umzugpreise_pricetable_text,
          table: {
            headers: [
              lang === "en" ? "Apartment Size" : "Wohnungsgröße",
              lang === "en" ? "Rooms" : "Zimmer",
              lang === "en" ? "Approx. Duration" : "Ca. Dauer",
              lang === "en" ? "Price Range" : "Preisspanne",
            ],
            rows: [
              [lang === "en" ? "up to 40 m²" : "bis 40 m²", lang === "en" ? "Studio / 1 room" : "Studio / 1 Zimmer", lang === "en" ? "2–3 hrs" : "2–3 Std.", "€ 350 – € 700"],
              ["50–70 m²", lang === "en" ? "2 rooms" : "2 Zimmer", lang === "en" ? "3–5 hrs" : "3–5 Std.", lang === "en" ? "€ 600 – € 1,200" : "€ 600 – € 1.200"],
              ["70–100 m²", lang === "en" ? "3 rooms" : "3 Zimmer", lang === "en" ? "5–7 hrs" : "5–7 Std.", lang === "en" ? "€ 1,000 – € 1,800" : "€ 1.000 – € 1.800"],
              ["100–140 m²", lang === "en" ? "4 rooms" : "4 Zimmer", lang === "en" ? "7–9 hrs" : "7–9 Std.", lang === "en" ? "€ 1,500 – € 2,500" : "€ 1.500 – € 2.500"],
              [lang === "en" ? "over 140 m² / house" : "über 140 m² / Haus", lang === "en" ? "5+ rooms" : "5+ Zimmer", lang === "en" ? "9+ hrs" : "ab 9 Std.", lang === "en" ? "from € 2,200" : "ab € 2.200"],
            ],
            note: t.umzugpreise_pricetable_note,
          },
        },
        {
          heading: t.umzugpreise_hourly_heading,
          text: t.umzugpreise_hourly_text,
          table: {
            headers: [
              lang === "en" ? "Team" : "Team",
              lang === "en" ? "Equipment" : "Ausstattung",
              lang === "en" ? "Price per Hour" : "Preis pro Stunde",
            ],
            rows: [
              [lang === "en" ? "2 people" : "2 Personen", lang === "en" ? "Truck included" : "LKW inklusive", "€ 55 – € 75"],
              [lang === "en" ? "3 people" : "3 Personen", lang === "en" ? "Truck included" : "LKW inklusive", "€ 80 – € 110"],
              [lang === "en" ? "4+ people" : "4+ Personen", lang === "en" ? "1–2 trucks included" : "1–2 LKW inklusive", "€ 110 – € 150"],
            ],
          },
        },
        {
          heading: t.umzugpreise_section1_heading,
          text: t.umzugpreise_section1_text,
          bullets: [
            t.umzugpreise_section1_bullet1,
            t.umzugpreise_section1_bullet2,
            t.umzugpreise_section1_bullet3,
            t.umzugpreise_section1_bullet4,
            t.umzugpreise_section1_bullet5,
          ],
        },
        {
          heading: t.umzugpreise_section2_heading,
          text: t.umzugpreise_section2_text,
          bullets: [
            t.umzugpreise_section2_bullet1,
            t.umzugpreise_section2_bullet2,
            t.umzugpreise_section2_bullet3,
            t.umzugpreise_section2_bullet4,
          ],
        },
      ]}
      cards={[
        { title: t.umzugpreise_card1_title, text: t.umzugpreise_card1_text },
        { title: t.umzugpreise_card2_title, text: t.umzugpreise_card2_text },
        { title: t.umzugpreise_card3_title, text: t.umzugpreise_card3_text },
      ]}
      faqs={[
        { question: t.umzugpreise_faq4_q, answer: t.umzugpreise_faq4_a },
        { question: t.umzugpreise_faq1_q, answer: t.umzugpreise_faq1_a },
        { question: t.umzugpreise_faq2_q, answer: t.umzugpreise_faq2_a },
        { question: t.umzugpreise_faq3_q, answer: t.umzugpreise_faq3_a },
      ]}
      relatedLinks={[
        { label: t.umzugpreise_related1_label, href: "/leistungen/privatumzug" },
        { label: t.umzugpreise_related2_label, href: "/leistungen/firmenumzug" },
        { label: t.umzugpreise_related3_label, href: "/versicherung" },
      ]}
    />
  );
}
