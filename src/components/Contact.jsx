import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useLanguage } from "../context/LanguageContext";

const socialLinks = [
  {
    href: "#",
    label: "LinkedIn",
    icon: "work",
    external: false,
  },
  {
    href: "https://www.instagram.com/thinkaboutky___",
    label: "Instagram",
    icon: "photo_camera",
    external: true,
  },
  {
    href: "mailto:hello@madebyrizky.id",
    label: "Email",
    icon: "mail",
    external: false,
  },
];

const Contact = () => {
  const { copy } = useLanguage();
  const [token, setToken] = useState("");

  const handleSubmit = (event) => {
    if (!token) {
      event.preventDefault();
      alert(copy.contact.verificationAlert);
    }
  };

  return (
    <section id="contact" className="section section-divider contact-section">
      <div className="contact-glow" aria-hidden="true" />

      <div className="container">
        <header className="contact-heading">
          <div className="contact-heading-copy reveal-up">
            <div className="section-index">
              <span>05</span>
              <span aria-hidden="true" />
              <span>{copy.contact.section}</span>
            </div>

            <h2 className="headline-2">
              {copy.contact.title}
            </h2>

            <p className="contact-intro">
              {copy.contact.intro}
            </p>
          </div>

          <dl className="contact-details reveal-up">
            <div className="contact-detail-row">
              <dt>{copy.contact.availableFor}</dt>
              <dd>{copy.contact.availableText}</dd>
            </div>

            <div className="contact-detail-row">
              <dt>{copy.contact.status}</dt>
              <dd className="contact-status">
                <span aria-hidden="true" />
                <span>{copy.contact.statusText}</span>
              </dd>
            </div>
          </dl>
        </header>

        <div className="contact-content">
          <aside className="contact-channels reveal-up">
            <div className="contact-channels-heading">
              <span>{copy.contact.connect}</span>
              <span>{String(socialLinks.length).padStart(2, "0")}</span>
            </div>

            <div
              className="section-illustration contact-illustration"
              aria-hidden="true"
            >
              <span className="section-illustration-index">Visual 04</span>

              <img
                src="/assets/illustrations/contact-illustration.svg"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>

            <nav
              className="contact-social-list"
              aria-label={copy.contact.socialLinks}
            >
              {socialLinks.map(({ href, label, icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="contact-social-link"
                >
                  <span className="contact-social-main">
                    <span
                      className="material-symbols-rounded"
                      aria-hidden="true"
                    >
                      {icon}
                    </span>

                    <span>{label === "Email" ? copy.common.email : label}</span>
                  </span>

                  <span
                    className="material-symbols-rounded contact-social-arrow"
                    aria-hidden="true"
                  >
                    arrow_outward
                  </span>
                </a>
              ))}
            </nav>

            <div className="contact-direct">
              <p>{copy.contact.directEmail}</p>
              <a href="mailto:hello@madebyrizky.id">
                hello@madebyrizky.id
              </a>
            </div>
          </aside>

          <form
            action="https://getform.io/f/bvrrndyb"
            method="POST"
            onSubmit={handleSubmit}
            className="contact-form reveal-up"
          >
            <input
              type="hidden"
              name="cf-turnstile-response"
              value={token}
              readOnly
            />

            <header className="contact-form-header">
              <div>
                <h3>{copy.contact.sendTitle}</h3>
                <p>{copy.contact.sendIntro}</p>
              </div>

              <span className="material-symbols-rounded" aria-hidden="true">
                north_east
              </span>
            </header>

            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="name">{copy.contact.name}</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="name"
                  placeholder="John Doe"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">{copy.contact.email}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="contact-field contact-message-field">
              <label htmlFor="message">{copy.contact.projectDetails}</label>
              <textarea
                name="message"
                id="message"
                required
                placeholder={copy.contact.messagePlaceholder}
              />
            </div>

            <div className="contact-verification">
              <Turnstile
                siteKey="0x4AAAAAADmpHRfJpKM4Dw5U"
                options={{ theme: "auto" }}
                onSuccess={(value) => setToken(value)}
                onError={() => setToken("")}
                onExpire={() => setToken("")}
              />
            </div>

            <footer className="contact-form-footer">
              <p>
                <span className="material-symbols-rounded" aria-hidden="true">
                  lock
                </span>
                {copy.contact.protected}
              </p>

              <button type="submit" disabled={!token}>
                <span>{copy.contact.send}</span>

                <span className="material-symbols-rounded" aria-hidden="true">
                  arrow_outward
                </span>
              </button>
            </footer>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
