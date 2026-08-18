import React, { useEffect, useRef, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef(null);
  const activeLanguage =
    languages.find(({ code }) => code === language) ?? languages[0];

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!switcherRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleLanguageChange = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div
      ref={switcherRef}
      className={`language-dropdown ${isOpen ? "is-open" : ""}`}
    >
      <button
        type="button"
        className="language-dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={copy.language.label}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <span>{activeLanguage.code.toUpperCase()}</span>

        <span
          className="material-symbols-rounded language-dropdown-chevron"
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>

      <div
        className="language-dropdown-menu"
        role="listbox"
        aria-label={copy.language.label}
        aria-hidden={!isOpen}
      >
        {languages.map(({ code, shortLabel, label }) => {
          const isActive = language === code;

          return (
            <button
              key={code}
              type="button"
              className={`language-dropdown-option ${
                isActive ? "is-active" : ""
              }`}
              role="option"
              aria-selected={isActive}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => handleLanguageChange(code)}
            >
              <span className="language-dropdown-code">{shortLabel}</span>
              <span className="language-dropdown-name">{label}</span>

              <span
                className="material-symbols-rounded language-dropdown-check"
                aria-hidden="true"
              >
                check
              </span>
            </button>
          );
        })}
      </div>
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
