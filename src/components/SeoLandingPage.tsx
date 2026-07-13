"use client";

import Link from "next/link";
import { CheckCircle2, Mail, Calendar, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

interface SeoTable {
  headers: string[];
  rows: string[][];
  note?: string;
}

interface SeoSection {
  heading: string;
  text: string;
  bullets?: string[];
  table?: SeoTable;
}

interface SeoCard {
  title: string;
  text: string;
}

interface SeoFaq {
  question: string;
  answer: string;
}

interface SeoLink {
  label: string;
  href: string;
}

interface SeoLandingPageProps {
  label: string;
  title: string;
  subtitle: string;
  intro: string;
  sections: SeoSection[];
  cards?: SeoCard[];
  faqs?: SeoFaq[];
  relatedLinks?: SeoLink[];
}

export function SeoLandingPage({
  label,
  title,
  subtitle,
  intro,
  sections,
  cards = [],
  faqs = [],
  relatedLinks = [],
}: SeoLandingPageProps) {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <PageLayout label={label} title={title} subtitle={subtitle}>
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-[1.15fr_0.85fr] md:px-6">
          <div>
            <p className="text-lg leading-[1.8]" style={{ color: "#374151" }}>
              {intro}
            </p>

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold md:text-3xl" style={{ color: "#9A3412" }}>
                    {section.heading}
                  </h2>
                  <p className="mt-4 leading-[1.8]" style={{ color: "#6B7280" }}>
                    {section.text}
                  </p>
                  {section.bullets && (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#C2410C" }} />
                          <span className="leading-[1.7]" style={{ color: "#374151" }}>
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.table && (
                    <div className="mt-5 overflow-x-auto rounded-xl" style={{ border: "1px solid #E5E7EB" }}>
                      <table className="w-full text-left text-sm" style={{ borderCollapse: "collapse" }}>
                        <thead>
                          <tr style={{ backgroundColor: "#F9FAFB" }}>
                            {section.table.headers.map((h) => (
                              <th
                                key={h}
                                className="whitespace-nowrap px-4 py-3 font-bold"
                                style={{ color: "#111827", borderBottom: "1px solid #E5E7EB" }}
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, i) => (
                            <tr key={i} style={{ backgroundColor: i % 2 === 1 ? "#FAFAFA" : "#FFFFFF" }}>
                              {row.map((cell, j) => (
                                <td
                                  key={j}
                                  className="whitespace-nowrap px-4 py-3"
                                  style={{
                                    color: j === row.length - 1 ? "#C2410C" : "#374151",
                                    fontWeight: j === row.length - 1 ? 700 : 400,
                                    borderTop: "1px solid #E5E7EB",
                                  }}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {section.table.note && (
                        <p
                          className="px-4 py-3 text-xs leading-[1.6]"
                          style={{ color: "#9CA3AF", backgroundColor: "#F9FAFB", borderTop: "1px solid #E5E7EB" }}
                        >
                          {section.table.note}
                        </p>
                      )}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#FFF7ED", border: "1px solid #FED7AA" }}>
              <p className="text-sm font-bold uppercase tracking-[0.16em]" style={{ color: "#C2410C" }}>
                {t.seolanding_cta_label}
              </p>
              <h2 className="mt-3 text-2xl font-black leading-tight" style={{ color: "#9A3412" }}>
                {t.seolanding_cta_heading}
              </h2>
              <p className="mt-4 leading-[1.7]" style={{ color: "#6B7280" }}>
                {t.seolanding_cta_text}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3">
                <Link
                  href="/anfrage"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold text-white"
                  style={{ backgroundColor: "#C2410C", textDecoration: "none" }}
                >
                  <Mail className="h-5 w-5" />
                  {t.seolanding_cta_btn_quote}
                </Link>
                <a
                  href="https://calendly.com/baktransport/besichtigung-in-wien-umgebung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 font-bold"
                  style={{ borderColor: "#C2410C", color: "#C2410C", textDecoration: "none" }}
                >
                  <Calendar className="h-5 w-5" />
                  {t.seolanding_cta_btn_call}
                </a>
              </div>
            </div>

            {relatedLinks.length > 0 && (
              <div className="rounded-2xl bg-white p-6" style={{ border: "1px solid #E5E7EB" }}>
                <h2 className="text-xl font-bold" style={{ color: "#9A3412" }}>
                  {t.seolanding_related_heading}
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-2">
                  {relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-semibold"
                      style={{ backgroundColor: "#FFF7ED", color: "#C2410C", textDecoration: "none" }}
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {cards.length > 0 && (
        <section className="py-12 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
              {cards.map((card) => (
                <article key={card.title} className="rounded-2xl bg-white p-6 shadow-sm" style={{ border: "1px solid #E5E7EB" }}>
                  <div className="mb-4 h-1 w-12 rounded-full" style={{ backgroundColor: "#C2410C" }} />
                  <h2 className="text-xl font-bold" style={{ color: "#9A3412" }}>
                    {card.title}
                  </h2>
                  <p className="mt-3 leading-[1.7]" style={{ color: "#6B7280" }}>
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="text-2xl font-bold md:text-3xl" style={{ color: "#9A3412" }}>
              {t.seolanding_faq_heading}
            </h2>
            <div className="mt-8 space-y-7">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b pb-7" style={{ borderColor: "#E5E7EB" }}>
                  <h3 className="text-lg font-bold" style={{ color: "#111827" }}>
                    {faq.question}
                  </h3>
                  <p className="mt-2 leading-[1.75]" style={{ color: "#6B7280" }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}

export default SeoLandingPage;
