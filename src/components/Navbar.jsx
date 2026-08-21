import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "../lib/smoothScroll";

const navItems = [
  {
    labelKey: "home",
    link: "#home",
    icon: "home",
  },
  {
    labelKey: "about",
    link: "#about",
    icon: "person",
  },
  {
    labelKey: "skills",
    link: "#skills",
    icon: "code",
  },
  {
    labelKey: "projects",
    link: "#work",
    icon: "grid_view",
  },
  {
    labelKey: "contact",
    link: "#contact",
    icon: "mail",
  },
];

const Navbar = ({ mobile = false }) => {
  const { copy } = useLanguage();
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = navItems.map(({ link }) => ({
      link,
      element: document.querySelector(link),
    }));
    let scrollFrame = 0;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "#home";

      sections.forEach(({ link, element }) => {
        if (element && scrollPosition >= element.offsetTop) {
          currentSection = link;
        }
      });

      setActiveSection(currentSection);
    };

    const requestSectionUpdate = () => {
      if (scrollFrame) return;

      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;
        updateActiveSection();
      });
    };

    updateActiveSection();

    window.addEventListener("scroll", requestSectionUpdate, {
      passive: true,
    });
    window.addEventListener("resize", requestSectionUpdate, {
      passive: true,
    });

    return () => {
      window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener("scroll", requestSectionUpdate);
      window.removeEventListener("resize", requestSectionUpdate);
    };
  }, []);

  const handleNavigation = (event, link) => {
    event.preventDefault();

    scrollToTarget(link, {
      headerOffset: link === "#home" ? 0 : 96,
    });

    setActiveSection(link);
  };

  if (mobile) {
    return (
      <nav
        className="mobile-bottom-nav"
        aria-label={copy.navigation.mobileLabel}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.link;

          return (
            <a
              key={item.link}
              href={item.link}
              onClick={(event) => handleNavigation(event, item.link)}
              className={`mobile-nav-link ${isActive ? "active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                {item.icon}
              </span>

              <span>{copy.navigation[item.labelKey]}</span>
            </a>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="navbar" aria-label={copy.navigation.label}>
      {navItems.map((item) => {
        const isActive = activeSection === item.link;

        return (
          <a
            key={item.link}
            href={item.link}
            onClick={(event) => handleNavigation(event, item.link)}
            className={`nav-link ${isActive ? "active" : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            {copy.navigation[item.labelKey]}
          </a>
        );
      })}
    </nav>
  );
};

Navbar.propTypes = {
  mobile: PropTypes.bool,
};

export default Navbar;
