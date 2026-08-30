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
import { isReducedMotion } from "../lib/motionPreference";

const STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE = "en";
const PREPARE_DURATION = 1500;
const FINISH_DURATION = 350;

const IDLE_TRANSITION = {
  active: false,
  phase: "idle",
  targetLanguage: null,
};

const languageOptions = [
  {
    code: "en",
    shortLabel: "EN",
    label: "English",
  },
  {
    code: "id",
    shortLabel: "ID",
    label: "Bahasa Indonesia",
  },
  {
    code: "jv",
    shortLabel: "JAWA",
    label: "Basa Jawa Krama",
  },
];

/*
 * bahasa jawa sementara tidak dianggap sebagai bahasa aktif.
 * opsi tetap ditampilkan di language switcher supaya user tahu
 * fitur tersebut masih tersedia, tetapi belum bisa digunakan.
 */
const supportedLanguages = new Set(["en", "id"]);

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
  const [languageTransition, setLanguageTransition] =
    useState(IDLE_TRANSITION);

  const languageRef = useRef(language);
  const transitionActiveRef = useRef(false);
  const prepareTimerRef = useRef(0);
  const finishTimerRef = useRef(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    languageRef.current = language;

    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;

    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;

      window.clearTimeout(prepareTimerRef.current);
      window.clearTimeout(finishTimerRef.current);
    };
  }, []);

  const finishLanguageTransition = useCallback(() => {
    window.clearTimeout(prepareTimerRef.current);
    window.clearTimeout(finishTimerRef.current);

    transitionActiveRef.current = false;

    if (mountedRef.current) {
      setLanguageTransition(IDLE_TRANSITION);
    }
  }, []);

  const setLanguage = useCallback(
    (nextLanguage) => {
      const currentLanguage = languageRef.current;

      if (
        !supportedLanguages.has(nextLanguage) ||
        nextLanguage === currentLanguage ||
        transitionActiveRef.current
      ) {
        return false;
      }

      const reduceMotion = isReducedMotion();

      languageRef.current = nextLanguage;

      if (reduceMotion) {
        setLanguageState(nextLanguage);
        return true;
      }

      transitionActiveRef.current = true;

      setLanguageTransition({
        active: true,
        phase: "preparing",
        targetLanguage: nextLanguage,
      });

      prepareTimerRef.current = window.setTimeout(() => {
        if (!mountedRef.current) return;

        setLanguageState(nextLanguage);

        setLanguageTransition({
          active: true,
          phase: "finishing",
          targetLanguage: nextLanguage,
        });

        finishTimerRef.current = window.setTimeout(
          finishLanguageTransition,
          FINISH_DURATION,
        );
      }, PREPARE_DURATION);

      return true;
    },
    [finishLanguageTransition],
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languages: languageOptions,
      copy: translations[language],
      languageTransition,
      isLanguageTransitioning: languageTransition.active,
    }),
    [language, languageTransition, setLanguage],
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
