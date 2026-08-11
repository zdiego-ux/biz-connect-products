import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Dict, type Lang } from "@/i18n/translations";

const STORAGE_KEY = "tl-lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict; chosen: boolean };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
  chosen: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [chosen, setChosen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "it" || stored === "en") {
      setLangState(stored);
      setChosen(true);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    setChosen(true);
    window.localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, chosen, t: translations[lang] as unknown as Dict }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
