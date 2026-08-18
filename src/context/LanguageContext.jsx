import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import translations from "../data/translations";

const STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE = "en";

const languageOptions = [
  { code: "en", shortLabel: "EN", label: "English" },
  { code: "id", shortLabel: "ID", label: "Bahasa Indonesia" },
  { code: "jv", shortLabel: "JAWA", label: "Basa Jawa Krama" },
];

const supportedLanguages = new Set(
  languageOptions.map(({ code }) => code),
);

const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);

  return supportedLanguages.has(savedLanguage)
    ? savedLanguage
    : DEFAULT_LANGUAGE;
};

const LanguageContext = createContext(null);

const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLanguage);
  const transitionTimerRef = useRef(0);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    return () => {
      window.clearTimeout(transitionTimerRef.current);
    };
  }, []);

  const setLanguage = useCallback(
    (nextLanguage) => {
      if (!supportedLanguages.has(nextLanguage) || nextLanguage === language) {
        return;
      }

      const root = document.documentElement;

      window.clearTimeout(transitionTimerRef.current);
      root.classList.remove("language-changing");
      void root.offsetWidth;
      root.classList.add("language-changing");

      setLanguageState(nextLanguage);

      transitionTimerRef.current = window.setTimeout(() => {
        root.classList.remove("language-changing");
      }, 360);
    },
    [language],
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languages: languageOptions,
      copy: translations[language],
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
};

export { LanguageProvider, useLanguage };
