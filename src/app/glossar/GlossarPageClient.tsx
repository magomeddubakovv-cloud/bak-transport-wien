"use client";

import { SeoLandingPage } from "@/components/SeoLandingPage";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function GlossarPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  const terms = [
    { title: t.glossar_term1_title, text: t.glossar_term1_text },
    { title: t.glossar_term2_title, text: t.glossar_term2_text },
    { title: t.glossar_term3_title, text: t.glossar_term3_text },
    { title: t.glossar_term4_title, text: t.glossar_term4_text },
    { title: t.glossar_term5_title, text: t.glossar_term5_text },
    { title: t.glossar_term6_title, text: t.glossar_term6_text },
    { title: t.glossar_term7_title, text: t.glossar_term7_text },
    { title: t.glossar_term8_title, text: t.glossar_term8_text },
    { title: t.glossar_term9_title, text: t.glossar_term9_text },
  ];

  return (
    <SeoLandingPage
      label={t.glossar_label}
      title={t.glossar_title}
      subtitle={t.glossar_subtitle}
      intro={t.glossar_intro}
      sections={[
        {
          heading: t.glossar_section1_heading,
          text: t.glossar_section1_text,
        },
      ]}
      cards={terms}
      relatedLinks={[
        { label: t.glossar_related1_label, href: "/leistungen/umzug-preise" },
        { label: t.glossar_related2_label, href: "/versicherung" },
        { label: t.glossar_related3_label, href: "/faq" },
      ]}
    />
  );
}
