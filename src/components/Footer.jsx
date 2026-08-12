import React from "react";
import { useLenis } from "lenis/react";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#work",
  },
  {
    label: "Contact",
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
    href: "mailto:hello@madebyrizky.id",
    external: false,
  },
];

const smoothScrollOptions = {
  duration: 1.2,
  easing: (progress) =>
    progress < 0.5
      ? 4 * progress ** 3
      : 1 - (-2 * progress + 2) ** 3 / 2,
};

const Footer = () => {
  const lenis = useLenis();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (target) => {
    if (lenis) {
      lenis.scrollTo(target, {
        ...smoothScrollOptions,
        offset: target === "#home" ? 0 : -96,
      });

      return;
    }

    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNavigation = (event, href) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta reveal-up">
          <div>
            <p className="footer-overline">
              Have something in mind?
            </p>

            <h2>
              Let&apos;s make something people enjoy using.
            </h2>

            <p className="footer-description">
              Open for thoughtful digital products, modern web
              applications, and selected collaborations.
            </p>
          </div>

          <a
            href="mailto:hello@madebyrizky.id"
            className="footer-cta-link"
          >
            <span>Start a project</span>

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
                <small>Full Stack Developer</small>
              </span>
            </a>

            <p>
              Building modern products across frontend,
              backend, interface design, and IT
              infrastructure.
            </p>

            <a
              href="mailto:hello@madebyrizky.id"
              className="footer-email"
            >
              hello@madebyrizky.id

              <span
                className="material-symbols-rounded"
                aria-hidden="true"
              >
                north_east
              </span>
            </a>
          </div>

          <div className="footer-column reveal-up">
            <p className="footer-label">Navigation</p>

            <nav aria-label="Footer navigation">
              {sitemap.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(event) =>
                    handleNavigation(event, href)
                  }
                >
                  <span>{label}</span>

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
            <p className="footer-label">Connect</p>

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
                    <span>{label}</span>

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
            © {currentYear} Rizky Maulana. All rights
            reserved.
          </p>

          <button
            type="button"
            onClick={() => scrollToSection("#home")}
          >
            Back to top

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