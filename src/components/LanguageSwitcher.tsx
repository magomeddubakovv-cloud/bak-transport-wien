"use client";

import { useLang } from "@/contexts/LanguageContext";

function FlagDE() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: "2px", display: "block" }}>
      <rect width="24" height="5.33" y="0" fill="#000000" />
      <rect width="24" height="5.33" y="5.33" fill="#DD0000" />
      <rect width="24" height="5.34" y="10.66" fill="#FFCE00" />
    </svg>
  );
}

function FlagEN() {
  return (
    <svg width="24" height="16" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: "2px", display: "block" }}>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="5" />
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="13" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8" />
    </svg>
  );
}

const LANGS = [
  { code: "de" as const, label: "Deutsch", Flag: FlagDE },
  { code: "en" as const, label: "English", Flag: FlagEN },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1">
      {LANGS.map(({ code, label, Flag }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-label={label}
          aria-pressed={code === lang}
          className="rounded transition-all duration-150"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            opacity: code === lang ? 1 : 0.4,
            transform: code === lang ? "scale(1.1)" : "scale(1)",
          }}
        >
          <Flag />
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
