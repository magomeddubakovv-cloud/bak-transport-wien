"use client";

import { SeoLandingPage } from "@/components/SeoLandingPage";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function UmzugschecklisteWienPageClient() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <SeoLandingPage
      label={t.checkliste_label}
      title={t.checkliste_title}
      subtitle={t.checkliste_subtitle}
      intro={t.checkliste_intro}
      sections={[
        {
          heading: t.checkliste_section1_heading,
          text: t.checkliste_section1_text,
          bullets: [
            t.checkliste_section1_bullet1,
            t.checkliste_section1_bullet2,
            t.checkliste_section1_bullet3,
            t.checkliste_section1_bullet4,
          ],
        },
        {
          heading: t.checkliste_section2_heading,
          text: t.checkliste_section2_text,
          bullets: [
            t.checkliste_section2_bullet1,
            t.checkliste_section2_bullet2,
            t.checkliste_section2_bullet3,
            t.checkliste_section2_bullet4,
          ],
        },
        {
          heading: t.checkliste_section3_heading,
          text: t.checkliste_section3_text,
          bullets: [
            t.checkliste_section3_bullet1,
            t.checkliste_section3_bullet2,
            t.checkliste_section3_bullet3,
            t.checkliste_section3_bullet4,
          ],
        },
        {
          heading: t.checkliste_section4_heading,
          text: t.checkliste_section4_text,
          bullets: [
            t.checkliste_section4_bullet1,
            t.checkliste_section4_bullet2,
            t.checkliste_section4_bullet3,
            t.checkliste_section4_bullet4,
          ],
        },
        {
          heading: t.checkliste_section5_heading,
          text: t.checkliste_section5_text,
          bullets: [
            t.checkliste_section5_bullet1,
            t.checkliste_section5_bullet2,
            t.checkliste_section5_bullet3,
            t.checkliste_section5_bullet4,
          ],
        },
      ]}
      cards={[
        { title: t.checkliste_card1_title, text: t.checkliste_card1_text },
        { title: t.checkliste_card2_title, text: t.checkliste_card2_text },
        { title: t.checkliste_card3_title, text: t.checkliste_card3_text },
      ]}
      faqs={[
        { question: t.checkliste_faq1_q, answer: t.checkliste_faq1_a },
        { question: t.checkliste_faq2_q, answer: t.checkliste_faq2_a },
        { question: t.checkliste_faq3_q, answer: t.checkliste_faq3_a },
        { question: t.checkliste_faq4_q, answer: t.checkliste_faq4_a },
      ]}
      relatedLinks={[
        { label: t.checkliste_related1_label, href: "/leistungen/umzug-preise" },
        { label: t.checkliste_related2_label, href: "/ratgeber/meldezettel-wien" },
        { label: t.checkliste_related3_label, href: "/ratgeber/halteverbotszone-wien" },
        { label: t.checkliste_related4_label, href: "/ratgeber" },
      ]}
    />
  );
}
