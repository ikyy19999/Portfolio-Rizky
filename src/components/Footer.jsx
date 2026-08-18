import React from "react";
import { useLanguage } from "../context/LanguageContext";

const sitemap = [
  {
    labelKey: "home",
    href: "#home",
  },
  {
    labelKey: "about",
    href: "#about",
  },
  {
    labelKey: "skills",
    href: "#skills",
  },
  {
    labelKey: "projects",
    href: "#work",
  },
  {
    labelKey: "contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    external: false,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/thinkaboutky___",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:hello@madebyrizky.my.id",
    external: false,
  },
];

const Footer = () => {
  const { copy } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleNavigation = (event, href) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta reveal-up">
          <div>
            <p className="footer-overline">
              {copy.footer.overline}
            </p>

            <h2>
              {copy.footer.title}
            </h2>

            <p className="footer-description">
              {copy.footer.description}
            </p>
          </div>

          <a
            href="mailto:hello@madebyrizky.my.id"
            className="footer-cta-link"
          >
            <span>{copy.footer.startProject}</span>

            <span
              className="material-symbols-rounded"
              aria-hidden="true"
            >
              arrow_outward
            </span>
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-profile reveal-up">
            <a
              href="#home"
              onClick={(event) =>
                handleNavigation(event, "#home")
              }
              className="footer-brand"
            >
              <span className="brand-mark">
                <img
                  src="/assets/favicon.ico"
                  width={28}
                  height={28}
                  alt=""
                />
              </span>

              <span>
                <strong>Rizky Maulana</strong>
                <small>{copy.common.fullStackDeveloper}</small>
              </span>
            </a>

            <p>
              {copy.footer.profile}
            </p>

            <a
              href="mailto:hello@madebyrizky.my.id"
              className="footer-email"
            >
              hello@madebyrizky.my.id

              <span
                className="material-symbols-rounded"
                aria-hidden="true"
              >
                north_east
              </span>
            </a>
          </div>

          <div className="footer-column reveal-up">
            <p className="footer-label">{copy.footer.navigation}</p>

            <nav aria-label={copy.navigation.footerLabel}>
              {sitemap.map(({ labelKey, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(event) =>
                    handleNavigation(event, href)
                  }
                >
                  <span>{copy.navigation[labelKey]}</span>

                  <span
                    className="material-symbols-rounded"
                    aria-hidden="true"
                  >
                    east
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-column reveal-up">
            <p className="footer-label">{copy.footer.connect}</p>

            <div>
              {socials.map(
                ({ label, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={
                      external ? "_blank" : undefined
                    }
                    rel={
                      external
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <span>{label === "Email" ? copy.common.email : label}</span>

                    <span
                      className="material-symbols-rounded"
                      aria-hidden="true"
                    >
                      north_east
                    </span>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom reveal-up">
          <p>
            © {currentYear} Rizky Maulana. {copy.footer.rights}
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            {copy.footer.backToTop}

            <span
              className="material-symbols-rounded"
              aria-hidden="true"
            >
              north
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
