import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLenis } from "lenis/react";

const navItems = [
  {
    label: "Home",
    link: "#home",
    icon: "home",
  },
  {
    label: "About",
    link: "#about",
    icon: "person",
  },
  {
    label: "Skills",
    link: "#skills",
    icon: "code",
  },
  {
    label: "Projects",
    link: "#work",
    icon: "grid_view",
  },
  {
    label: "Contact",
    link: "#contact",
    icon: "mail",
  },
];

const smoothScrollOptions = {
  duration: 1.2,
  easing: (progress) =>
    progress < 0.5
      ? 4 * progress ** 3
      : 1 - (-2 * progress + 2) ** 3 / 2,
};

const Navbar = ({ mobile = false }) => {
  const lenis = useLenis();
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "#home";

      navItems.forEach(({ link }) => {
        const section = document.querySelector(link);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = link;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  const handleNavigation = (event, link) => {
    event.preventDefault();

    const section = document.querySelector(link);

    if (!section) return;

    if (lenis) {
      lenis.scrollTo(section, {
        ...smoothScrollOptions,
        offset: link === "#home" ? 0 : -96,
      });
    } else {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActiveSection(link);
  };

  if (mobile) {
    return (
      <nav
        className="mobile-bottom-nav"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.link;

          return (
            <a
              key={item.link}
              href={item.link}
              onClick={(event) =>
                handleNavigation(event, item.link)
              }
              className={`mobile-nav-link ${
                isActive ? "active" : ""
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span
                className="material-symbols-rounded"
                aria-hidden="true"
              >
                {item.icon}
              </span>

              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="navbar" aria-label="Primary navigation">
      {navItems.map((item) => {
        const isActive = activeSection === item.link;

        return (
          <a
            key={item.link}
            href={item.link}
            onClick={(event) =>
              handleNavigation(event, item.link)
            }
            className={`nav-link ${
              isActive ? "active" : ""
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
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