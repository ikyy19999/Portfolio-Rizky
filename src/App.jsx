import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
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

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
);

const INTRO_TEXT = "hello";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme =
    window.localStorage.getItem(
      "portfolio-theme",
    );

  if (
    savedTheme === "light" ||
    savedTheme === "dark"
  ) {
    return savedTheme;
  }

  return window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches
    ? "dark"
    : "light";
};

const HandwritingIntro = ({
  onComplete,
}) => {
  const [fontReady, setFontReady] =
    useState(false);

  useEffect(() => {
    let active = true;

    const fontTimeout =
      window.setTimeout(() => {
        if (active) {
          setFontReady(true);
        }
      }, 2500);

    const loadFont = async () => {
      try {
        if (document.fonts) {
          await document.fonts.load(
            '1em "Birthstone"',
          );
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

      window.clearTimeout(
        fontTimeout,
      );
    };
  }, []);

  useEffect(() => {
    if (!fontReady) {
      return undefined;
    }

    const timer = window.setTimeout(
      onComplete,
      4300,
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, [fontReady, onComplete]);

  return (
    <div
      className={`intro-screen ${
        fontReady ? "is-ready" : ""
      }`}
      role="status"
      aria-label={`${INTRO_TEXT}, welcome`}
    >
      <div
        className="intro-word-wrap"
        aria-hidden="true"
      >
        <span className="intro-word">
          {INTRO_TEXT}
        </span>

        <span className="intro-pen" />
      </div>

      <p className="intro-caption">
        made by rizky
      </p>
    </div>
  );
};

HandwritingIntro.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

const App = () => {
  const [theme, setTheme] = useState(
    getInitialTheme,
  );

  const [showIntro, setShowIntro] =
    useState(true);

  const completeIntro =
    useCallback(() => {
      setShowIntro(false);
    }, []);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme =
      theme;

    document.documentElement.style.colorScheme =
      theme;

    window.localStorage.setItem(
      "portfolio-theme",
      theme,
    );
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle(
      "intro-active",
      showIntro,
    );

    return () => {
      document.body.classList.remove(
        "intro-active",
      );
    };
  }, [showIntro]);

  useGSAP(() => {
    const elements =
      gsap.utils.toArray(
        ".reveal-up",
      );

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

    const refreshFrame =
      window.requestAnimationFrame(
        () => {
          ScrollTrigger.refresh();
        },
      );

    return () => {
      window.cancelAnimationFrame(
        refreshFrame,
      );
    };
  }, [showIntro]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark"
        ? "light"
        : "dark",
    );
  };

  return (
    <ReactLenis
      root
      options={{
        duration: 1.1,
        smoothWheel: true,
        touchMultiplier: 1.1,
      }}
    >
      {showIntro && (
        <HandwritingIntro
          onComplete={completeIntro}
        />
      )}

      <div
        className={`site-shell ${
          showIntro
            ? "is-loading"
            : "is-ready"
        }`}
      >
        {/* <CursorFollower /> */}

        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
        />

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