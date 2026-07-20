"use client";

import Link from "next/link";
import { Home, Mail, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export default function NotFound() {
  const { lang } = useLang();
  const t = translations[lang];

  const popularLinks = [
    { label: t.nav_privatumzug, href: "/leistungen/privatumzug" },
    { label: t.nav_firmenumzug, href: "/leistungen/firmenumzug" },
    { label: lang === "en" ? "Moving Prices" : "Umzug Preise", href: "/leistungen/umzug-preise" },
    { label: t.nav_wien, href: "/regionen/wien" },
    { label: t.nav_faq, href: "/faq" },
    { label: t.nav_kontakt, href: "/kontakt" },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <section style={{ backgroundColor: "#F9FAFB" }} className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <p
              className="text-xs md:text-sm uppercase tracking-[0.16em] font-bold mb-3"
              style={{ color: "#C2410C" }}
            >
              {t.notfound_label}
            </p>
            <h1
              className="font-black text-[2.5rem] leading-[1.08] sm:text-5xl md:text-6xl"
              style={{ color: "#111827" }}
            >
              404
            </h1>
            <h2 className="mt-3 text-xl md:text-2xl font-bold" style={{ color: "#111827" }}>
              {t.notfound_title}
            </h2>
            <p className="mt-4 text-base md:text-lg max-w-xl mx-auto" style={{ color: "#6B7280", lineHeight: 1.7 }}>
              {t.notfound_subtitle}
            </p>
            <div
              className="mx-auto mt-6"
              style={{ width: "48px", height: "4px", backgroundColor: "#C2410C", borderRadius: "2px" }}
            />

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="rounded-lg font-extrabold transition-colors hover:bg-[#C2410C] flex items-center justify-center gap-2"
                style={{
                  backgroundColor: "#C2410C",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  padding: "16px 32px",
                  textDecoration: "none",
                  minHeight: "44px",
                }}
              >
                <Home size={20} />
                {t.notfound_cta_home}
              </Link>
              <Link
                href="/kontakt"
                className="rounded-lg font-bold border-2 border-[#C2410C] transition-colors hover:bg-orange-50 flex items-center justify-center gap-2"
                style={{
                  color: "#C2410C",
                  fontSize: "16px",
                  padding: "16px 32px",
                  textDecoration: "none",
                  minHeight: "44px",
                }}
              >
                <Mail size={20} />
                {t.notfound_cta_contact}
              </Link>
            </div>

            <div className="mt-14 text-left">
              <h3 className="text-sm uppercase tracking-wider font-bold mb-4" style={{ color: "#111827" }}>
                {t.notfound_popular_heading}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {popularLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between gap-2 rounded-lg px-4 py-3 text-sm font-medium"
                    style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", color: "#C2410C", textDecoration: "none" }}
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
