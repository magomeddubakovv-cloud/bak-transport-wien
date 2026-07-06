"use client";

import { SeoLandingPage } from "@/components/SeoLandingPage";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function HalteverbotszoneWienPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <SeoLandingPage
      label={t.halteverbot_label}
      title={t.halteverbot_title}
      subtitle={t.halteverbot_subtitle}
      intro={t.halteverbot_intro}
      sections={[
        {
          heading: t.halteverbot_h1,
          text: t.halteverbot_p1,
        },
        {
          heading: t.halteverbot_h2,
          text: t.halteverbot_p2,
          bullets: [t.halteverbot_bullet1, t.halteverbot_bullet2, t.halteverbot_bullet3],
        },
        {
          heading: t.halteverbot_h3,
          text: t.halteverbot_p3,
        },
      ]}
      cards={[
        { title: t.halteverbot_card1_title, text: t.halteverbot_card1_text },
        { title: t.halteverbot_card2_title, text: t.halteverbot_card2_text },
        { title: t.halteverbot_card3_title, text: t.halteverbot_card3_text },
      ]}
      faqs={[
        { question: t.halteverbot_faq1_q, answer: t.halteverbot_faq1_a },
        { question: t.halteverbot_faq2_q, answer: t.halteverbot_faq2_a },
      ]}
      relatedLinks={[
        { label: t.halteverbot_related1_label, href: "/ratgeber/meldezettel-wien" },
        { label: t.halteverbot_related2_label, href: "/ratgeber/altbau-umzug-wien" },
        { label: t.halteverbot_related3_label, href: "/ratgeber" },
      ]}
    />
  );
}
