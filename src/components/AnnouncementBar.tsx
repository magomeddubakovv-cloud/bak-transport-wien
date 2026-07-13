"use client";

import { useState } from "react";
import { X, Phone } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const { lang } = useLang();

  if (!visible) return null;

  const text = lang === "en"
    ? "Professional moving service • Free consultation and customized solutions for your move."
    : "Professioneller Umzugsservice • Kostenlose Beratung und maßgeschneiderte Lösungen für Ihren Umzug.";

  return (
    <div
      className="w-full flex items-center justify-between gap-4 px-4 py-2 text-sm"
      style={{ backgroundColor: "#C2410C", color: "#FFFFFF" }}
    >
      <div className="flex-1 text-center text-xs md:text-sm" style={{ lineHeight: 1.5 }}>
        {text}
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <a
          href="tel:+4368110723047"
          className="hidden sm:flex items-center gap-1 rounded px-3 py-1 text-xs font-semibold transition-colors hover:bg-white/20"
          style={{ border: "1px solid rgba(255,255,255,0.4)" }}
        >
          <Phone size={12} />
          {lang === "en" ? "Call" : "Anrufen"}
        </a>
        <a
          href="https://wa.me/4368110723047"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1 rounded px-3 py-1 text-xs font-semibold transition-colors"
          style={{ backgroundColor: "#15803D", color: "#fff" }}
        >
          WhatsApp
        </a>
        <button
          onClick={() => setVisible(false)}
          aria-label="Schließen"
          className="p-1 rounded hover:bg-white/20 transition-colors"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}

export default AnnouncementBar;
