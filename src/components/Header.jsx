import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLenis } from "lenis/react";
import Navbar from "./Navbar";
import { useLanguage } from "../context/LanguageContext";

const smoothScrollOptions = {
  duration: 1.2,
  easing: (progress) =>
    progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2,
};

const LanguageSwitcher = () => {
  const { language, languages, setLanguage, copy } = useLanguage();

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={copy.language.label}
    >
      {languages.map(({ code, shortLabel, label }) => {
        const isActive = language === code;

        return (
          <button
            key={code}
            type="button"
            className={isActive ? "is-active" : ""}
            aria-pressed={isActive}
            aria-label={label}
            title={label}
            onClick={() => setLanguage(code)}
          >
            {shortLabel}
          </button>
        );
      })}
    </div>
  );
};

const Header = ({ theme, onToggleTheme }) => {
  const { copy } = useLanguage();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [themeChanging, setThemeChanging] = useState(false);

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

  const handleNavigation = (event, target) => {
    event.preventDefault();

    const section = document.querySelector(target);

    if (!section) return;

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
              aria-label={copy.header.goHome}
            >
              <span className="brand-mark">
                <img src="/assets/favicon.ico" alt="" width={30} height={30} />
              </span>

              <span className="brand-copy">
                <strong>Rizky Maulana</strong>
                <small>{copy.common.fullStackDeveloper}</small>
              </span>
            </a>

            <div className="header-navigation">
              <Navbar />
            </div>

            <div className="header-actions">
              <LanguageSwitcher />

              <button
                type="button"
                className={`theme-toggle ${themeChanging ? "is-changing" : ""}`}
                onClick={handleThemeToggle}
                disabled={themeChanging}
                aria-label={
                  theme === "dark"
                    ? copy.header.switchToLight
                    : copy.header.switchToDark
                }
                title={
                  theme === "dark"
                    ? copy.header.switchToLight
                    : copy.header.switchToDark
                }
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
                {copy.header.letsTalk}
                <span className="material-symbols-rounded" aria-hidden="true">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <Navbar mobile />
    </>
  );
};

Header.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

export default Header;
