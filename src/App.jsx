import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";
import ReactLenis from "lenis/react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorFollower from "./components/CursorFollower";
import ImmersiveScene from "./components/ImmersiveScene";
import CommandPalette from "./components/CommandPalette";
import { useLanguage } from "./context/LanguageContext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("portfolio-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getJavaneseGreeting = (hour) => {
  if (hour >= 4 && hour < 11) {
    return "sugeng enjing";
  }

  if (hour >= 11 && hour < 15) {
    return "sugeng siyang";
  }

  if (hour >= 15 && hour < 18) {
    return "sugeng sonten";
  }

  return "sugeng dalu";
};

const HandwritingIntro = ({ onComplete }) => {
  const { copy, language } = useLanguage();
  const [fontReady, setFontReady] = useState(false);
  const [deviceHour] = useState(() => new Date().getHours());
  const introWord =
    language === "jv"
      ? getJavaneseGreeting(deviceHour)
      : copy.intro.word;

  useEffect(() => {
    let active = true;

    const fontTimeout = window.setTimeout(() => {
      if (active) {
        setFontReady(true);
      }
    }, 2500);

    const loadFont = async () => {
      try {
        if (document.fonts) {
          await document.fonts.load('1em "Birthstone"');
        }
      } finally {
        if (active) {
          setFontReady(true);
        }
      }
    };

    loadFont();

    return () => {
      active = false;

      window.clearTimeout(fontTimeout);
    };
  }, []);

  useEffect(() => {
    if (!fontReady) {
      return undefined;
    }

    const timer = window.setTimeout(onComplete, 4300);

    return () => {
      window.clearTimeout(timer);
    };
  }, [fontReady, onComplete]);

  return (
    <div
      className={`intro-screen ${fontReady ? "is-ready" : ""}`}
      role="status"
      aria-label={`${introWord}, ${copy.intro.welcome}`}
    >
      <div className="intro-word-wrap" aria-hidden="true">
        <span
          className={`intro-word ${language === "jv" ? "is-long" : ""}`}
        >
          {introWord}
        </span>

        <span className="intro-pen" />
      </div>

      <p className="intro-caption">{copy.intro.caption}</p>
    </div>
  );
};

HandwritingIntro.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

const languageTransitionMessages = {
  en: {
    eyebrow: "switching language",
    title: "one sec, switching to english.",
    description: "hang tight, we're getting everything ready.",
  },
  id: {
    eyebrow: "ganti bahasa",
    title: "bentar ya, lagi siapin bahasa indonesia.",
    description: "biar semuanya lebih enak dibaca.",
  },
  jv: {
    eyebrow: "nggantos basa",
    title: "sekedhap nggih, basa jawi saweg dipunsiapaken.",
    description: "supados sedaya langkung trep dipunwaos.",
  },
};

const LanguageTransitionOverlay = () => {
  const { languageTransition } = useLanguage();
  const [imageFailed, setImageFailed] = useState(false);
  const targetLanguage = languageTransition.targetLanguage ?? "en";
  const message = languageTransitionMessages[targetLanguage];

  return (
    <div
      className={`language-transition-overlay ${
        languageTransition.active ? "is-active" : ""
      } is-${languageTransition.phase}`}
      aria-hidden={!languageTransition.active}
    >
      <div className="language-transition-backdrop" aria-hidden="true" />

      <div
        className="language-transition-panel"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="language-transition-visual" aria-hidden="true">
          {imageFailed ? (
            <span className="material-symbols-rounded">translate</span>
          ) : (
            <img
              src="/assets/illustrations/language-transition.svg"
              alt=""
              onError={() => setImageFailed(true)}
            />
          )}
        </div>

        <p className="language-transition-eyebrow">{message.eyebrow}</p>
        <p className="language-transition-title">{message.title}</p>
        <p className="language-transition-description">
          {message.description}
        </p>

        <span className="language-transition-progress" aria-hidden="true">
          <span />
        </span>
      </div>
    </div>
  );
};

const App = () => {
  const { language } = useLanguage();
  const [theme, setTheme] = useState(getInitialTheme);
  const themeTransitionRef = useRef(false);

  const [showIntro, setShowIntro] = useState(true);

  const completeIntro = useCallback(() => {
    setShowIntro(false);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;

    document.documentElement.style.colorScheme = theme;

    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle("intro-active", showIntro);

    return () => {
      document.body.classList.remove("intro-active");
    };
  }, [showIntro]);

  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 92%",
          end: "top 65%",
          scrub: 0.6,
        },
      });
    });
  }, []);

  useEffect(() => {
    if (showIntro) {
      return undefined;
    }

    const refreshFrame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.cancelAnimationFrame(refreshFrame);
    };
  }, [language, showIntro]);

  const toggleTheme = useCallback(
    async ({ x, y } = {}) => {
      if (themeTransitionRef.current) {
        return Promise.resolve();
      }

      const nextTheme = theme === "dark" ? "light" : "dark";
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const canUseViewTransition =
        typeof document.startViewTransition === "function";

      if (reduceMotion) {
        setTheme(nextTheme);
        return;
      }

      const originX = typeof x === "number" ? x : window.innerWidth / 2;
      const originY = typeof y === "number" ? y : window.innerHeight / 2;
      const radius = Math.hypot(
        Math.max(originX, window.innerWidth - originX),
        Math.max(originY, window.innerHeight - originY),
      );
      const root = document.documentElement;

      themeTransitionRef.current = true;

      root.style.setProperty("--theme-transition-x", `${originX}px`);
      root.style.setProperty("--theme-transition-y", `${originY}px`);
      root.style.setProperty("--theme-transition-radius", `${radius}px`);

      if (!canUseViewTransition) {
        root.classList.add("theme-fallback-out");

        await new Promise((resolve) => {
          window.setTimeout(resolve, 180);
        });

        flushSync(() => {
          setTheme(nextTheme);
        });

        root.classList.remove("theme-fallback-out");
        root.classList.add("theme-fallback-in");

        await new Promise((resolve) => {
          window.setTimeout(resolve, 320);
        });

        root.classList.remove("theme-fallback-in");
        root.style.removeProperty("--theme-transition-x");
        root.style.removeProperty("--theme-transition-y");
        root.style.removeProperty("--theme-transition-radius");
        themeTransitionRef.current = false;

        return;
      }

      root.classList.add("theme-transitioning");

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setTheme(nextTheme);
        });
      });

      await transition.finished.finally(() => {
        themeTransitionRef.current = false;
        root.classList.remove("theme-transitioning");
        root.style.removeProperty("--theme-transition-x");
        root.style.removeProperty("--theme-transition-y");
        root.style.removeProperty("--theme-transition-radius");
      });
    },
    [theme],
  );

  return (
    <ReactLenis
      root
      options={{
        duration: 1.1,
        smoothWheel: true,
        touchMultiplier: 1.1,
      }}
    >
      {showIntro && <HandwritingIntro onComplete={completeIntro} />}

      <LanguageTransitionOverlay />

      <div className={`site-shell ${showIntro ? "is-loading" : "is-ready"}`}>
        {/* <CursorFollower /> */}

        <ImmersiveScene />

        <CommandPalette
          theme={theme}
          onToggleTheme={toggleTheme}
          disabled={showIntro}
        />

        <Header theme={theme} onToggleTheme={toggleTheme} />

        <main>
          <Hero />
          <About />
          <Skill />
          <Work />
          <Reviews />
          <Contact />
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
