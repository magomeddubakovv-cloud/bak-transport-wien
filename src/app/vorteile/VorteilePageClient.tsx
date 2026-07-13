"use client";

import { SeoLandingPage } from "@/components/SeoLandingPage";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function VorteilePageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <SeoLandingPage
      label={t.vorteile_label}
      title={t.vorteile_title}
      subtitle={t.vorteile_subtitle}
      intro={t.vorteile_intro}
      sections={[
        {
          heading: t.vorteile_section1_heading,
          text: t.vorteile_section1_text,
        },
        {
          heading: t.vorteile_section2_heading,
          text: t.vorteile_section2_text,
          bullets: [
            t.vorteile_section2_bullet1,
            t.vorteile_section2_bullet2,
            t.vorteile_section2_bullet3,
            t.vorteile_section2_bullet4,
          ],
        },
        {
          heading: t.vorteile_section3_heading,
          text: t.vorteile_section3_text,
          bullets: [
            t.vorteile_section3_bullet1,
            t.vorteile_section3_bullet2,
            t.vorteile_section3_bullet3,
            t.vorteile_section3_bullet4,
          ],
        },
        {
          heading: t.vorteile_section4_heading,
          text: t.vorteile_section4_text,
          bullets: [
            t.vorteile_section4_bullet1,
            t.vorteile_section4_bullet2,
            t.vorteile_section4_bullet3,
            t.vorteile_section4_bullet4,
            t.vorteile_section4_bullet5,
          ],
        },
      ]}
      cards={[
        { title: t.vorteile_card1_title, text: t.vorteile_card1_text },
        { title: t.vorteile_card2_title, text: t.vorteile_card2_text },
        { title: t.vorteile_card3_title, text: t.vorteile_card3_text },
        { title: t.vorteile_card4_title, text: t.vorteile_card4_text },
        { title: t.vorteile_card5_title, text: t.vorteile_card5_text },
        { title: t.vorteile_card6_title, text: t.vorteile_card6_text },
      ]}
      faqs={[
        { question: t.vorteile_faq1_q, answer: t.vorteile_faq1_a },
        { question: t.vorteile_faq2_q, answer: t.vorteile_faq2_a },
        { question: t.vorteile_faq3_q, answer: t.vorteile_faq3_a },
        { question: t.vorteile_faq4_q, answer: t.vorteile_faq4_a },
        { question: t.vorteile_faq5_q, answer: t.vorteile_faq5_a },
        { question: t.vorteile_faq6_q, answer: t.vorteile_faq6_a },
      ]}
      relatedLinks={[
        { label: t.vorteile_related1_label, href: "/leistungen/privatumzug" },
        { label: t.vorteile_related2_label, href: "/leistungen/firmenumzug" },
        { label: t.vorteile_related3_label, href: "/kontakt" },
        { label: t.vorteile_related4_label, href: "/leistungen/umzug-preise" },
        { label: t.vorteile_related5_label, href: "/versicherung" },
      ]}
    />
  );
}
