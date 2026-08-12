import React from "react";
import { useLenis } from "lenis/react";
import { ButtonPrimary } from "./Button";

const stats = [
  {
    number: "5+",
    label: "Projects Completed",
  },
  {
    number: "1+",
    label: "Years Experience",
  },
  {
    number: "99%",
    label: "Responsive Design",
  },
];

const techStack = [
  "Laravel",
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "Livewire",
  "Filament",
  "GSAP",
  "MySQL",
  "Redis",
  "Prisma",
  "Supabase",
  "Git",
  "GitHub",
  "Cloudflare",
  "Vercel",
];

const heroStatements = [
  "Engineering impact.",
  "Building experiences.",
  "Creating momentum.",
];

const scrollOptions = {
  duration: 1.2,
  easing: (progress) =>
    progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2,
};

const Hero = () => {
  const lenis = useLenis();

  const scrollToSection = (event, target) => {
    event.preventDefault();

    const section = document.querySelector(target);

    if (!section) return;

    if (lenis) {
      lenis.scrollTo(section, {
        ...scrollOptions,
        offset: -96,
      });

      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="home" className="ax-hero">
      <div className="ax-hero-glow" aria-hidden="true" />

      <div className="ax-hero-grid" aria-hidden="true" />

      <div className="container ax-hero-container">
        <div className="ax-hero-intro reveal-up">
          <div className="ax-hero-identity">
            <span>Rizky Maulana</span>
            <span aria-hidden="true" />
            <span>Jakarta, Indonesia</span>
          </div>

          <p>Full Stack Developer</p>
        </div>

        <div className="ax-hero-main">
          <div className="ax-hero-message">
            <h1 className="ax-hero-title reveal-up">
              <span className="ax-hero-title-static">Designing clarity.</span>

              <span
                className="ax-hero-title-rotator"
                aria-label={heroStatements.join(" ")}
              >
                {heroStatements.map((statement, index) => (
                  <span
                    key={statement}
                    className="ax-hero-title-rotator-item"
                    style={{ "--rotator-index": index }}
                    aria-hidden="true"
                  >
                    {statement}
                  </span>
                ))}
              </span>
            </h1>

            <div className="ax-hero-description reveal-up">
              <p>
                Building polished web experiences, reliable backend systems, and
                the infrastructure that keeps them moving.
              </p>

              <div className="ax-hero-actions">
                <ButtonPrimary
                  href="/assets/CV - Rizky Maulana.pdf"
                  label="Download CV"
                  icon="download"
                />

                <a
                  href="#work"
                  className="ax-button ax-button-outline"
                  onClick={(event) => scrollToSection(event, "#work")}
                >
                  <span className="ax-button-label">View Projects</span>

                  <span
                    className="material-symbols-rounded ax-button-icon"
                    aria-hidden="true"
                  >
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          </div>

          <aside className="ax-stack-card reveal-up">
            <div className="ax-stack-header">
              <div>
                <span>Core stack</span>
                <p>Tools behind the work</p>
              </div>

              <small>2026</small>
            </div>

            <div className="ax-stack-grid">
              {techStack.map((tech, index) => (
                <div className="ax-stack-item" key={tech}>
                  <small>{String(index + 1).padStart(2, "0")}</small>

                  <strong>{tech}</strong>
                </div>
              ))}
            </div>

            <div className="ax-stack-footer">
              <span>Frontend</span>
              <span>Backend</span>
              <span>Infrastructure</span>
            </div>
          </aside>
        </div>

        <div className="ax-hero-bottom reveal-up">
          <div className="ax-hero-stats">
            {stats.map(({ number, label }, index) => (
              <div className="ax-stat" key={label}>
                <small>{String(index + 1).padStart(2, "0")}</small>

                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <a
            href="#about"
            className="ax-hero-explore"
            onClick={(event) => scrollToSection(event, "#about")}
          >
            <span>
              <small>Continue</small>
              Explore portfolio
            </span>

            <span className="ax-explore-icon" aria-hidden="true">
              <span className="material-symbols-rounded">south</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
