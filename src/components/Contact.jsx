import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

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
  const [token, setToken] = useState("");

  const handleSubmit = (event) => {
    if (!token) {
      event.preventDefault();
      alert("Please complete the verification first.");
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
              <span>Contact</span>
            </div>

            <h2 className="headline-2">
              Let&apos;s build something worth using.
            </h2>

            <p className="contact-intro">
              Have a project, product idea, or collaboration in mind? Send me
              the details and I&apos;ll get back to you when I can.
            </p>
          </div>

          <dl className="contact-details reveal-up">
            <div className="contact-detail-row">
              <dt>Available for</dt>
              <dd>
                Freelance projects, full stack development, and collaboration.
              </dd>
            </div>

            <div className="contact-detail-row">
              <dt>Status</dt>
              <dd className="contact-status">
                <span aria-hidden="true" />
                <span>Currently available for work</span>
              </dd>
            </div>
          </dl>
        </header>

        <div className="contact-content">
          <aside className="contact-channels reveal-up">
            <div className="contact-channels-heading">
              <span>Connect</span>
              <span>{String(socialLinks.length).padStart(2, "0")}</span>
            </div>

            <nav className="contact-social-list" aria-label="Social links">
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

                    <span>{label}</span>
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
              <p>Direct email</p>
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
                <h3>Send a message</h3>
                <p>Tell me a little about what you&apos;re working on.</p>
              </div>

              <span className="material-symbols-rounded" aria-hidden="true">
                north_east
              </span>
            </header>

            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="name">Your name</label>
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
                <label htmlFor="email">Email address</label>
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
              <label htmlFor="message">Project details</label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Tell me about your project..."
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
                Protected with Cloudflare Turnstile
              </p>

              <button type="submit" disabled={!token}>
                <span>Send message</span>

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