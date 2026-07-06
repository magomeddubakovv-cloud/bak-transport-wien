"use client";

import { useState, useEffect, startTransition } from "react";
import { X } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const CONSENT_KEY = "bak-agb-consent";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLang();
  const t = translations[lang];

  useEffect(() => {
    if (localStorage.getItem(CONSENT_KEY) !== "accepted") startTransition(() => setVisible(true));
  }, []);

  const dismiss = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex flex-col sm:flex-row items-center gap-3 px-4 py-3 sm:py-3.5"
      style={{ backgroundColor: "#1C0F00", color: "#FFFFFF", boxShadow: "0 -4px 16px rgba(0,0,0,0.15)" }}
    >
      <p className="flex-1 text-center sm:text-left text-xs sm:text-sm" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
        {t.consent_text}{" "}
        <a href="/agb" className="underline hover:text-white" style={{ color: "#FFFFFF" }}>
          {t.consent_link}
        </a>
      </p>
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={dismiss}
          className="rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-colors"
          style={{ backgroundColor: "#C2410C", color: "#FFFFFF" }}
        >
          {t.consent_accept}
        </button>
        <button
          onClick={dismiss}
          aria-label={lang === "en" ? "Close" : "Schließen"}
          className="p-1.5 rounded hover:bg-white/10 transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export default ConsentBanner;
