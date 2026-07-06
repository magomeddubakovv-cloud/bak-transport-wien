"use client";

import { SeoLandingPage } from "@/components/SeoLandingPage";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function AltbauUmzugWienPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <SeoLandingPage
      label={t.altbau_label}
      title={t.altbau_title}
      subtitle={t.altbau_subtitle}
      intro={t.altbau_intro}
      sections={[
        {
          heading: t.altbau_h1,
          text: t.altbau_p1,
        },
        {
          heading: t.altbau_h2,
          text: t.altbau_p2,
        },
        {
          heading: t.altbau_h3,
          text: t.altbau_p3,
          bullets: [t.altbau_bullet1, t.altbau_bullet2, t.altbau_bullet3],
        },
      ]}
      cards={[
        { title: t.altbau_card1_title, text: t.altbau_card1_text },
        { title: t.altbau_card2_title, text: t.altbau_card2_text },
        { title: t.altbau_card3_title, text: t.altbau_card3_text },
      ]}
      faqs={[
        { question: t.altbau_faq1_q, answer: t.altbau_faq1_a },
        { question: t.altbau_faq2_q, answer: t.altbau_faq2_a },
      ]}
      relatedLinks={[
        { label: t.altbau_related1_label, href: "/ratgeber/meldezettel-wien" },
        { label: t.altbau_related2_label, href: "/ratgeber/halteverbotszone-wien" },
        { label: t.altbau_related3_label, href: "/ratgeber" },
      ]}
    />
  );
}
