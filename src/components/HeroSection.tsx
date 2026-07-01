"use client";

import Image from "next/image";
import { Truck, Shield, Clock, Award, Phone, Mail } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function HeroSection() {
  const { lang } = useLang();
  const t = translations[lang];

  const TRUST_BADGES = [
    { icon: Truck, label: t.hero_badge1 },
    { icon: Shield, label: t.hero_badge2 },
    { icon: Clock, label: t.hero_badge3 },
    { icon: Award, label: t.hero_badge4 },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center"
      style={{ backgroundColor: "#FFF7ED", position: "relative", overflow: "hidden" }}
    >
      {/* Background photo */}
      <Image
        src="/images/photos/hero-movers.jpg"
        alt="BAK Transport — professionelle Umzüge in Wien"
        title="BAK Transport Wien — Professionelle Umzugsfirma"
        fill
        className="object-cover object-center"
        style={{ opacity: 0.08 }}
        priority
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #FFF7ED 50%, rgba(254,215,170,0.6) 100%)",
        }}
      />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full pt-24 pb-28 md:pb-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
            {/* Left column */}
            <div className="flex-1 lg:max-w-[60%]">
              <span
                className="inline-block rounded-full uppercase tracking-widest font-bold"
                style={{
                  backgroundColor: "#C2410C",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  padding: "4px 16px",
                  letterSpacing: "0.12em",
                }}
              >
                {t.hero_badge}
              </span>

              <h1
                className="mt-4 text-3xl md:text-5xl lg:text-6xl"
                style={{ fontWeight: 900, lineHeight: 1.05, letterSpacing: "-1px", color: "#111827" }}
              >
                BAK Transport.
                <br />
                {t.hero_h1_part2}{" "}
                <span style={{ color: "#C2410C" }}>{t.hero_h1_part3}</span>
              </h1>

              <div
                className="mt-4 mb-6"
                style={{ width: "60px", height: "4px", backgroundColor: "#C2410C", borderRadius: "2px" }}
              />

              <p
                className="max-w-md text-base md:text-lg"
                style={{ color: "#4B5563", lineHeight: 1.7 }}
              >
                {t.hero_subtext}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#kontakt"
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
                  <Mail size={20} />
                  {t.hero_cta_quote}
                </a>
                <a
                  href="tel:+4368110723047"
                  className="rounded-lg font-bold border-2 border-[#C2410C] transition-colors hover:bg-orange-50 flex items-center justify-center gap-2"
                  style={{
                    color: "#C2410C",
                    fontSize: "16px",
                    padding: "16px 32px",
                    textDecoration: "none",
                    minHeight: "44px",
                  }}
                >
                  <Phone size={20} />
                  {t.hero_cta_call}
                </a>
              </div>
            </div>

            {/* Right column — collage image */}
            <div className="lg:max-w-[38%] w-full">
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-auto lg:aspect-square">
                <Image
                  src="/images/photos/collage2.jpg"
                  alt="BAK Transport Wien — Umzugshelfer bei der Arbeit"
                  title="BAK Transport Wien — Professionelle Umzüge in Wien"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bottom trust bar */}
          <div
            className="mt-12 pt-8 flex flex-wrap justify-center gap-6 md:gap-12"
            style={{ borderTop: "1px solid #FED7AA" }}
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={20} style={{ color: "#C2410C" }} />
                <span style={{ color: "#4B5563", fontSize: "15px" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
