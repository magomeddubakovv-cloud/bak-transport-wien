"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Truck, Shield, Clock, Award } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

interface StatConfig { target: number; decimals?: number; suffix: string; germanFormat?: boolean; }

function useCountUp(config: StatConfig, active: boolean) {
  const [display, setDisplay] = useState("0");
  const rafRef = useRef<number>(0);
  useEffect(() => {
    if (!active) return;
    const { target, decimals = 0, suffix, germanFormat = false } = config;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const value = eased * target;
      let formatted: string;
      if (germanFormat) {
        formatted = decimals > 0 ? value.toFixed(decimals).replace(".", ",") : Math.floor(value).toLocaleString("de-AT");
      } else {
        formatted = decimals > 0 ? value.toFixed(decimals) : String(Math.floor(value));
      }
      setDisplay(formatted + suffix);
      if (elapsed < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, config]);
  return display;
}

function AnimatedHeroStat({ config, label, active, hasBorder }: { config: StatConfig; label: string; active: boolean; hasBorder: boolean }) {
  const display = useCountUp(config, active);
  return (
    <div
      className={hasBorder ? "pb-5 mb-5" : ""}
      style={hasBorder ? { borderBottom: "1px solid #E5E7EB" } : {}}
    >
      <div className="text-4xl md:text-5xl" style={{ fontWeight: 900, lineHeight: 1, color: "#EA580C" }}>
        {display}
      </div>
      <div className="mt-1 uppercase tracking-wide" style={{ color: "#6B7280", fontSize: "14px" }}>
        {label}
      </div>
    </div>
  );
}

export function HeroSection() {
  const { lang } = useLang();
  const t = translations[lang];
  const [active, setActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const TRUST_BADGES = [
    { icon: Truck, label: t.hero_badge1 },
    { icon: Shield, label: t.hero_badge2 },
    { icon: Clock, label: t.hero_badge3 },
    { icon: Award, label: t.hero_badge4 },
  ];

  const STAT_CONFIGS: (StatConfig & { label: string })[] = [
    { target: 1000, suffix: "+", germanFormat: true, label: t.hero_stat1 },
    { target: 5.0, decimals: 1, suffix: "★", germanFormat: true, label: t.hero_stat2 },
    { target: 24, suffix: "h", label: t.hero_stat3 },
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
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full pt-24 pb-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
            {/* Left column */}
            <div className="flex-1 lg:max-w-[60%]">
              <span
                className="inline-block rounded-full uppercase tracking-widest font-bold"
                style={{
                  backgroundColor: "#EA580C",
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
                <span style={{ color: "#EA580C" }}>{t.hero_h1_part3}</span>
              </h1>

              <div
                className="mt-4 mb-6"
                style={{ width: "60px", height: "4px", backgroundColor: "#EA580C", borderRadius: "2px" }}
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
                  className="rounded-lg font-extrabold transition-colors hover:bg-[#C2410C] text-center"
                  style={{
                    backgroundColor: "#EA580C",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    padding: "16px 32px",
                    textDecoration: "none",
                    display: "block",
                    minHeight: "44px",
                  }}
                >
                  {t.hero_cta_quote}
                </a>
                <a
                  href="tel:+436761234567"
                  className="rounded-lg font-bold border-2 border-[#EA580C] transition-colors hover:bg-orange-50 text-center"
                  style={{
                    color: "#EA580C",
                    fontSize: "16px",
                    padding: "16px 32px",
                    textDecoration: "none",
                    display: "block",
                    minHeight: "44px",
                  }}
                >
                  {t.hero_cta_call}
                </a>
              </div>
            </div>

            {/* Right column — stats card */}
            <div className="lg:max-w-[40%] w-full">
              <div
                ref={cardRef}
                className="rounded-2xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderLeftColor: "#EA580C",
                  borderLeftWidth: "4px",
                  padding: "24px",
                }}
              >
                {STAT_CONFIGS.map((stat, i) => (
                  <AnimatedHeroStat
                    key={stat.label}
                    config={stat}
                    label={stat.label}
                    active={active}
                    hasBorder={i < STAT_CONFIGS.length - 1}
                  />
                ))}
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
                <Icon size={20} style={{ color: "#EA580C" }} />
                <span style={{ color: "#4B5563", fontSize: "14px" }}>
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
