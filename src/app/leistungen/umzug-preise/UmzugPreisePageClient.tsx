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
