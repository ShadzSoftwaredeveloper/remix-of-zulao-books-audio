import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "lg", label: "Luganda" },
];
const LANGUAGE_PREFERENCE_KEY = "zuula-language-v2";

declare global {
  interface GoogleTranslateElementOptions {
    pageLanguage: string;
    includedLanguages: string;
    autoDisplay: boolean;
  }

  interface Window {
    google?: {
      translate: {
        TranslateElement: new (
          options: GoogleTranslateElementOptions,
          elementId: string,
        ) => unknown;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const setCookie = (val: string | null) => {
  const host = window.location.hostname;
  const exp = val ? "" : "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  const v = val ?? "";
  document.cookie = `googtrans=${v}; path=/${exp}`;
  document.cookie = `googtrans=${v}; path=/; domain=${host}${exp}`;
  document.cookie = `googtrans=${v}; path=/; domain=.${host}${exp}`;
};

const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_PREFERENCE_KEY);
    const initialLanguage = savedLanguage === "lg" ? "lg" : "en";
    setLang(initialLanguage);
    setCookie(initialLanguage === "en" ? null : `/en/${initialLanguage}`);

    if (document.getElementById("google-translate-script")) return;
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,lg", autoDisplay: false },
        "google_translate_element",
      );
    };
    const s = document.createElement("script");
    s.id = "google-translate-script";
    s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(s);
  }, []);

  const change = (code: string) => {
    localStorage.setItem(LANGUAGE_PREFERENCE_KEY, code);
    setCookie(code === "en" ? null : `/en/${code}`);
    window.location.reload();
  };

  return (
    <label className={`notranslate inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 h-10 text-sm font-body text-foreground ${className}`}>
      <Languages size={16} className="text-primary" aria-hidden />
      <select
        aria-label="Choose language"
        value={lang}
        onChange={(e) => change(e.target.value)}
        className="bg-transparent outline-none cursor-pointer"
      >
        {LANGS.map((l) => (
          <option key={l.code} value={l.code}>{l.label}</option>
        ))}
      </select>
      <div id="google_translate_element" className="hidden" />
    </label>
  );
};

export default LanguageSwitcher;
