"use client";

import { SeoLandingPage } from "@/components/SeoLandingPage";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function VersicherungPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <SeoLandingPage
      label={t.versicherung_label}
      title={t.versicherung_title}
      subtitle={t.versicherung_subtitle}
      intro={t.versicherung_intro}
      sections={[
        {
          heading: t.versicherung_section1_heading,
          text: t.versicherung_section1_text,
          bullets: [
            t.versicherung_section1_bullet1,
            t.versicherung_section1_bullet2,
            t.versicherung_section1_bullet3,
            t.versicherung_section1_bullet4,
          ],
        },
        {
          heading: t.versicherung_section2_heading,
          text: t.versicherung_section2_text,
        },
      ]}
      cards={[
        { title: t.versicherung_card1_title, text: t.versicherung_card1_text },
        { title: t.versicherung_card2_title, text: t.versicherung_card2_text },
        { title: t.versicherung_card3_title, text: t.versicherung_card3_text },
      ]}
      faqs={[
        { question: t.versicherung_faq1_q, answer: t.versicherung_faq1_a },
        { question: t.versicherung_faq2_q, answer: t.versicherung_faq2_a },
        { question: t.versicherung_faq3_q, answer: t.versicherung_faq3_a },
      ]}
      relatedLinks={[
        { label: t.versicherung_related1_label, href: "/leistungen/schwerlasttransport" },
        { label: t.versicherung_related2_label, href: "/leistungen/umzug-preise" },
        { label: t.versicherung_related3_label, href: "/vorteile" },
      ]}
    />
  );
}
