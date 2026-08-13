import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useLenis } from "lenis/react";
import Navbar from "./Navbar";

const smoothScrollOptions = {
  duration: 1.2,
  easing: (progress) =>
    progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2,
};

const islandSections = [
  { label: "Home", link: "#home", icon: "home" },
  { label: "About", link: "#about", icon: "person" },
  { label: "Skills", link: "#skills", icon: "code" },
  { label: "Projects", link: "#work", icon: "grid_view" },
  { label: "Contact", link: "#contact", icon: "mail" },
];

const createSectionState = (section, index) => ({
  label: section.label,
  detail: `${String(index + 1).padStart(2, "0")} / ${String(
    islandSections.length,
  ).padStart(2, "0")}`,
  icon: section.icon,
  index,
  type: "section",
});

const Header = ({ theme, onToggleTheme }) => {
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [themeChanging, setThemeChanging] = useState(false);
  const [islandExpanded, setIslandExpanded] = useState(false);
  const [islandState, setIslandState] = useState(() =>
    createSectionState(islandSections[0], 0),
  );
  const islandTimerRef = useRef(null);
  const currentSectionRef = useRef(createSectionState(islandSections[0], 0));
  const previousThemeRef = useRef(theme);

  const showIsland = useCallback((nextState, duration = 1700) => {
    window.clearTimeout(islandTimerRef.current);
    setIslandState(nextState);
    setIslandExpanded(true);

    islandTimerRef.current = window.setTimeout(() => {
      setIslandExpanded(false);
      setIslandState(currentSectionRef.current);
    }, duration);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = islandSections.map((section) => ({
      ...section,
      element: document.querySelector(section.link),
    }));
    let scrollFrame = 0;

    const updateCurrentSection = () => {
      const scrollPosition = window.scrollY + 200;
      let activeIndex = 0;

      sections.forEach(({ element }, index) => {
        if (element && scrollPosition >= element.offsetTop) {
          activeIndex = index;
        }
      });

      const nextState = createSectionState(
        islandSections[activeIndex],
        activeIndex,
      );

      if (currentSectionRef.current.index !== activeIndex) {
        currentSectionRef.current = nextState;
        showIsland(nextState);
      }
    };

    const requestSectionUpdate = () => {
      if (scrollFrame) return;

      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;
        updateCurrentSection();
      });
    };

    const handleNavigationAnnouncement = (event) => {
      const targetIndex = islandSections.findIndex(
        (section) => section.link === event.detail?.link,
      );

      if (targetIndex < 0) return;

      const nextState = createSectionState(
        islandSections[targetIndex],
        targetIndex,
      );

      showIsland({
        ...nextState,
        label: `Opening ${nextState.label}`,
      });
    };

    updateCurrentSection();
    window.addEventListener("scroll", requestSectionUpdate, { passive: true });
    window.addEventListener("resize", requestSectionUpdate, { passive: true });
    window.addEventListener(
      "portfolio:navigation",
      handleNavigationAnnouncement,
    );

    return () => {
      window.clearTimeout(islandTimerRef.current);
      window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener("scroll", requestSectionUpdate);
      window.removeEventListener("resize", requestSectionUpdate);
      window.removeEventListener(
        "portfolio:navigation",
        handleNavigationAnnouncement,
      );
    };
  }, [showIsland]);

  useEffect(() => {
    if (previousThemeRef.current === theme) return;

    previousThemeRef.current = theme;
    showIsland(
      {
        ...currentSectionRef.current,
        label: theme === "dark" ? "Dark mode active" : "Light mode active",
        detail: "Appearance updated",
        icon: theme === "dark" ? "dark_mode" : "light_mode",
        type: "theme",
      },
      1900,
    );
  }, [showIsland, theme]);

  const handleNavigation = (event, target) => {
    event.preventDefault();

    const section = document.querySelector(target);
    const targetIndex = islandSections.findIndex(
      (item) => item.link === target,
    );

    if (!section) return;

    if (targetIndex >= 0) {
      const nextState = createSectionState(
        islandSections[targetIndex],
        targetIndex,
      );

      showIsland({
        ...nextState,
        label: `Opening ${nextState.label}`,
      });
    }

    if (lenis) {
      lenis.scrollTo(section, {
        ...smoothScrollOptions,
        offset: target === "#home" ? 0 : -96,
      });

      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleThemeToggle = async (event) => {
    if (themeChanging) return;

    const buttonBounds = event.currentTarget.getBoundingClientRect();

    setThemeChanging(true);
    showIsland(
      {
        ...currentSectionRef.current,
        label: "Switching appearance",
        detail: theme === "dark" ? "Light mode" : "Dark mode",
        icon: "routine",
        type: "theme",
      },
      2200,
    );

    try {
      await onToggleTheme({
        x: buttonBounds.left + buttonBounds.width / 2,
        y: buttonBounds.top + buttonBounds.height / 2,
      });
    } finally {
      setThemeChanging(false);
    }
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container">
          <div className="header-inner">
            <a
              href="#home"
              onClick={(event) => handleNavigation(event, "#home")}
              className="brand"
              aria-label="Go to home"
            >
              <span className="brand-mark">
                <img src="/assets/favicon.ico" alt="" width={30} height={30} />
              </span>

              <span className="brand-copy">
                <strong>Rizky Maulana</strong>
                <small>Full Stack Developer</small>
              </span>
            </a>

            <div className="header-navigation">
              <Navbar />
            </div>

            <div className="header-actions">
              <button
                type="button"
                className={`theme-toggle ${themeChanging ? "is-changing" : ""}`}
                onClick={handleThemeToggle}
                disabled={themeChanging}
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <span className="theme-toggle-icons" aria-hidden="true">
                  <span className="material-symbols-rounded theme-toggle-sun">
                    light_mode
                  </span>

                  <span className="material-symbols-rounded theme-toggle-moon">
                    dark_mode
                  </span>
                </span>
              </button>

              <a
                href="#contact"
                onClick={(event) => handleNavigation(event, "#contact")}
                className="header-contact"
              >
                Let&apos;s Talk
                <span className="material-symbols-rounded" aria-hidden="true">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`dynamic-island ${islandExpanded ? "is-expanded" : ""} ${
          islandState.type === "theme" ? "is-theme-state" : ""
        }`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="dynamic-island-icon" aria-hidden="true">
          <span className="material-symbols-rounded">{islandState.icon}</span>
        </span>

        <span className="dynamic-island-copy">
          <strong>{islandState.label}</strong>
          <small>{islandState.detail}</small>
        </span>

        <span className="dynamic-island-progress" aria-hidden="true">
          {islandSections.map((section, index) => (
            <span
              key={section.link}
              className={index <= islandState.index ? "is-active" : ""}
            />
          ))}
        </span>
      </div>

      <Navbar mobile />
    </>
  );
};

Header.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

export default Header;
