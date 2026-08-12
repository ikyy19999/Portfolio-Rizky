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

gsap.registerPlugin(useGSAP, ScrollTrigger);

const getIntroGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "hello, good morning.";
  }

  if (hour >= 12 && hour < 17) {
    return "hello, good afternoon.";
  }

  return "hello, good evening.";
};

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

const HandwritingIntro = ({ onComplete }) => {
  const [fontReady, setFontReady] = useState(false);
  const [introText] = useState(getIntroGreeting);

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

    const timer = window.setTimeout(onComplete, 5200);

    return () => {
      window.clearTimeout(timer);
    };
  }, [fontReady, onComplete]);

  return (
    <div
      className={`intro-screen ${fontReady ? "is-ready" : ""}`}
      role="status"
      aria-label={`${introText} welcome`}
    >
      <div className="intro-word-wrap" aria-hidden="true">
        <span className="intro-word intro-word-greeting">{introText}</span>

        <span className="intro-pen" />
      </div>

      <p className="intro-caption">made by rizky</p>
    </div>
  );
};

HandwritingIntro.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

const App = () => {
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
  }, [showIntro]);

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

      <div className={`site-shell ${showIntro ? "is-loading" : "is-ready"}`}>
        {/* <CursorFollower /> */}

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
