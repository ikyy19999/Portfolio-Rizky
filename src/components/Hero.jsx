import React from "react";
import { ButtonPrimary } from "./Button";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "../lib/smoothScroll";

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

const Hero = () => {
  const { copy } = useLanguage();

  const scrollToSection = (event, target) => {
    event.preventDefault();

    scrollToTarget(target, {
      headerOffset: 96,
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
            <span>{copy.common.jakarta}</span>
          </div>

          <p>{copy.common.fullStackDeveloper}</p>
        </div>

        <div className="ax-hero-main">
          <div className="ax-hero-message">
            <h1 className="ax-hero-title reveal-up">
              <span className="ax-hero-title-static">
                {copy.hero.staticTitle}
              </span>

              <span
                className="ax-hero-title-rotator"
                aria-label={copy.hero.statements.join(" ")}
              >
                {copy.hero.statements.map((statement, index) => (
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
                {copy.hero.description}
              </p>

              <div className="ax-hero-actions">
                <ButtonPrimary
                  href="/assets/CV - Rizky Maulana.pdf"
                  label={copy.hero.downloadCv}
                  icon="download"
                />

                <a
                  href="#work"
                  className="ax-button ax-button-outline"
                  onClick={(event) => scrollToSection(event, "#work")}
                >
                  <span className="ax-button-label">
                    {copy.hero.viewProjects}
                  </span>

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
                <span>{copy.hero.coreStack}</span>
                <p>{copy.hero.stackCaption}</p>
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
              {copy.hero.stackAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </aside>
        </div>

        <div className="ax-hero-bottom reveal-up">
          <div className="ax-hero-stats">
            {copy.hero.stats.map(({ number, label }, index) => (
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
              <small>{copy.hero.continue}</small>
              {copy.hero.explore}
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
