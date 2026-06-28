"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

interface StatConfig {
  target: number;
  decimals?: number;
  suffix: string;
  prefix?: string;
  germanFormat?: boolean;
}

function useCountUp(config: StatConfig, active: boolean) {
  const [display, setDisplay] = useState("0");
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const { target, decimals = 0, suffix, prefix = "", germanFormat = false } = config;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const value = eased * target;

      let formatted: string;
      if (germanFormat) {
        if (decimals > 0) {
          formatted = value.toFixed(decimals).replace(".", ",");
        } else {
          formatted = Math.floor(value).toLocaleString("de-AT");
        }
      } else {
        formatted = decimals > 0 ? value.toFixed(decimals) : String(Math.floor(value));
      }

      setDisplay(prefix + formatted + suffix);

      if (elapsed < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, config]);

  return display;
}

interface AnimatedStatProps {
  config: StatConfig;
  label: string;
  active: boolean;
  hasBorder: boolean;
}

function AnimatedStat({ config, label, active, hasBorder }: AnimatedStatProps) {
  const display = useCountUp(config, active);
  return (
    <div
      className="flex flex-col items-center justify-center text-center py-4 md:py-2"
      style={hasBorder ? { borderRight: "1px solid rgba(255,255,255,0.2)" } : {}}
    >
      <span className="text-white text-2xl md:text-3xl" style={{ fontWeight: 900, lineHeight: 1 }}>
        {display}
      </span>
      <span className="mt-1 uppercase tracking-wide" style={{ color: "#FFFFFF", fontSize: "12px" }}>
        {label}
      </span>
    </div>
  );
}

export function StatsBar() {
  const { lang } = useLang();
  const t = translations[lang];
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const STATS: { config: StatConfig; label: string }[] = [
    { config: { target: 1000, suffix: "+", germanFormat: true }, label: t.stats1 },
    { config: { target: 23, suffix: "" }, label: t.stats2 },
    { config: { target: 5.0, decimals: 1, suffix: "★", germanFormat: true }, label: t.stats3 },
    { config: { target: 60, suffix: " Min" }, label: t.stats4 },
  ];

  return (
    <section ref={sectionRef} className="w-full py-8 md:py-10" style={{ backgroundColor: "#EA580C" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              config={stat.config}
              label={stat.label}
              active={active}
              hasBorder={i < STATS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
