"use client";

import { createContext, useContext, useState, useEffect, startTransition, type ReactNode } from "react";
import type { LangCode } from "@/i18n/translations";

interface LanguageContextValue {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "de",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("de");

  useEffect(() => {
    const stored = localStorage.getItem("bak-lang") as LangCode | null;
    if (stored === "de" || stored === "en") startTransition(() => setLangState(stored));
  }, []);

  const setLang = (l: LangCode) => {
    setLangState(l);
    localStorage.setItem("bak-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
