"use client";

import { SeoLandingPage } from "@/components/SeoLandingPage";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function MeldezettelWienPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <SeoLandingPage
      label={t.meldezettel_label}
      title={t.meldezettel_title}
      subtitle={t.meldezettel_subtitle}
      intro={t.meldezettel_intro}
      sections={[
        {
          heading: t.meldezettel_h1,
          text: t.meldezettel_p1,
          bullets: [t.meldezettel_bullet1, t.meldezettel_bullet2, t.meldezettel_bullet3],
        },
        {
          heading: t.meldezettel_h2,
          text: t.meldezettel_p2,
        },
        {
          heading: t.meldezettel_h3,
          text: t.meldezettel_p3,
        },
      ]}
      cards={[
        { title: t.meldezettel_card1_title, text: t.meldezettel_card1_text },
        { title: t.meldezettel_card2_title, text: t.meldezettel_card2_text },
        { title: t.meldezettel_card3_title, text: t.meldezettel_card3_text },
      ]}
      faqs={[
        { question: t.meldezettel_faq1_q, answer: t.meldezettel_faq1_a },
        { question: t.meldezettel_faq2_q, answer: t.meldezettel_faq2_a },
      ]}
      relatedLinks={[
        { label: t.meldezettel_related1_label, href: "/ratgeber/halteverbotszone-wien" },
        { label: t.meldezettel_related2_label, href: "/ratgeber/altbau-umzug-wien" },
        { label: t.meldezettel_related3_label, href: "/ratgeber" },
      ]}
    />
  );
}
