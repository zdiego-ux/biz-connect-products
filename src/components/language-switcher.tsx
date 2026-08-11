import { useLanguage } from "@/i18n/language-context";

export function LanguageBanner() {
  const { t, setLang, chosen, lang } = useLanguage();

  if (chosen) return null;

  return (
    <div className="border-b border-border bg-surface">
      <div className="container-page flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">{t.langPrompt.question}</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setLang("it")}
            className="rounded-md bg-primary px-4 py-2 font-display text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.langPrompt.it}
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className="rounded-md border border-border px-4 py-2 font-display text-xs font-medium text-foreground transition-colors hover:border-foreground/40"
          >
            {t.langPrompt.en}
          </button>
        </div>
      </div>
      <span className="sr-only">{lang}</span>
    </div>
  );
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border p-0.5 ${className}`}
    >
      {(["en", "it"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 font-display text-[11px] uppercase tracking-wider transition-colors ${
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
