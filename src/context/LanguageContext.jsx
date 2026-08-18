import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";
import PropTypes from "prop-types";
import translations from "../data/translations";

const STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE = "en";
const TRANSITION_HALF_DURATION = 350;
const IDLE_TRANSITION = {
  active: false,
  phase: "idle",
  direction: "forward",
};

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
  const [languageTransition, setLanguageTransition] =
    useState(IDLE_TRANSITION);
  const languageRef = useRef(language);
  const transitionActiveRef = useRef(false);
  const leaveTimerRef = useRef(0);
  const enterTimerRef = useRef(0);
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
      window.clearTimeout(leaveTimerRef.current);
      window.clearTimeout(enterTimerRef.current);

      const root = document.documentElement;

      root.classList.remove(
        "language-transitioning",
        "language-transition-fallback",
      );
      delete root.dataset.languageDirection;
    };
  }, []);

  const finishLanguageTransition = useCallback(() => {
    window.clearTimeout(leaveTimerRef.current);
    window.clearTimeout(enterTimerRef.current);

    transitionActiveRef.current = false;

    const root = document.documentElement;

    root.classList.remove(
      "language-transitioning",
      "language-transition-fallback",
    );
    delete root.dataset.languageDirection;

    if (mountedRef.current) {
      setLanguageTransition(IDLE_TRANSITION);
    }
  }, []);

  const setLanguage = useCallback((nextLanguage) => {
    const currentLanguage = languageRef.current;

    if (
      !supportedLanguages.has(nextLanguage) ||
      nextLanguage === currentLanguage ||
      transitionActiveRef.current
    ) {
      return false;
    }

    const currentIndex = languageOptions.findIndex(
      ({ code }) => code === currentLanguage,
    );
    const nextIndex = languageOptions.findIndex(
      ({ code }) => code === nextLanguage,
    );
    const direction = nextIndex > currentIndex ? "forward" : "backward";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    languageRef.current = nextLanguage;

    if (reduceMotion) {
      setLanguageState(nextLanguage);
      return true;
    }

    const root = document.documentElement;

    transitionActiveRef.current = true;
    root.dataset.languageDirection = direction;
    root.classList.add("language-transitioning");

    const runFallbackTransition = () => {
      root.classList.add("language-transition-fallback");

      flushSync(() => {
        setLanguageTransition({
          active: true,
          phase: "leaving",
          direction,
        });
      });

      leaveTimerRef.current = window.setTimeout(() => {
        if (!mountedRef.current) return;

        flushSync(() => {
          setLanguageState(nextLanguage);
          setLanguageTransition({
            active: true,
            phase: "entering",
            direction,
          });
        });

        enterTimerRef.current = window.setTimeout(
          finishLanguageTransition,
          TRANSITION_HALF_DURATION,
        );
      }, TRANSITION_HALF_DURATION);
    };

    if (typeof document.startViewTransition !== "function") {
      runFallbackTransition();
      return true;
    }

    flushSync(() => {
      setLanguageTransition({
        active: true,
        phase: "view",
        direction,
      });
    });

    try {
      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setLanguageState(nextLanguage);
        });
      });

      transition.finished.then(
        finishLanguageTransition,
        finishLanguageTransition,
      );
    } catch {
      runFallbackTransition();
    }

    return true;
  }, [finishLanguageTransition]);

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
