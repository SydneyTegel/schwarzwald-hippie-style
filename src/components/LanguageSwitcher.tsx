import { useI18n, Lang } from "@/i18n/I18nContext";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const flags: Record<Lang, string> = { de: "🇩🇪", en: "🇬🇧", zh: "🇨🇳" };
const labels: Record<Lang, string> = { de: "DE", en: "EN", zh: "中文" };

const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm"
        aria-label="Language"
      >
        <Globe size={16} />
        <span className="text-xs font-medium">{labels[lang]}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50 min-w-[100px]">
          {(Object.keys(flags) as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-secondary/50 transition-colors ${
                lang === l ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              <span>{flags[l]}</span>
              <span>{labels[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
