"use client";

import { SeoLandingPage } from "@/components/SeoLandingPage";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function RatgeberPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <SeoLandingPage
      label={t.ratgeber_label}
      title={t.ratgeber_title}
      subtitle={t.ratgeber_subtitle}
      intro={t.ratgeber_intro}
      sections={[
        {
          heading: t.ratgeber_section1_heading,
          text: t.ratgeber_section1_text,
          bullets: [
            t.ratgeber_section1_bullet1,
            t.ratgeber_section1_bullet2,
            t.ratgeber_section1_bullet3,
            t.ratgeber_section1_bullet4,
            t.ratgeber_section1_bullet5,
          ],
        },
        {
          heading: t.ratgeber_section2_heading,
          text: t.ratgeber_section2_text,
        },
      ]}
      cards={[
        { title: t.ratgeber_card1_title, text: t.ratgeber_card1_text },
        { title: t.ratgeber_card2_title, text: t.ratgeber_card2_text },
        { title: t.ratgeber_card3_title, text: t.ratgeber_card3_text },
      ]}
      faqs={[
        { question: t.ratgeber_faq1_q, answer: t.ratgeber_faq1_a },
        { question: t.ratgeber_faq2_q, answer: t.ratgeber_faq2_a },
      ]}
      relatedLinks={[
        { label: t.ratgeber_related1_label, href: "/leistungen/umzug-preise" },
        { label: t.ratgeber_related2_label, href: "/glossar" },
        { label: t.ratgeber_related3_label, href: "/faq" },
        { label: t.ratgeber_related4_label, href: "/ratgeber/meldezettel-wien" },
        { label: t.ratgeber_related5_label, href: "/ratgeber/halteverbotszone-wien" },
        { label: t.ratgeber_related6_label, href: "/ratgeber/altbau-umzug-wien" },
      ]}
    />
  );
}
