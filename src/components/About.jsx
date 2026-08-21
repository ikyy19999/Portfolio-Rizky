import React from "react";
import { useLanguage } from "../context/LanguageContext";
import ScrambleRevealText from "./ScrambleRevealText";

const About = () => {
  const { copy } = useLanguage();

  return (
    <section
      id="about"
      className="section section-divider about-section"
    >
      <div className="container">
        <div className="about-layout">
          <div className="about-heading reveal-up">
            <div className="section-index">
              <span>02</span>
              <span aria-hidden="true" />
              <span>{copy.about.section}</span>
            </div>

            <ScrambleRevealText
              as="h2"
              className="headline-2"
              text={copy.about.title}
            />

            <p className="about-heading-note">
              {copy.about.note}
            </p>

            <div
              className="section-illustration about-illustration reveal-up"
              aria-hidden="true"
            >
              <span className="section-illustration-index">Visual 01</span>

              <img
                src="/assets/illustrations/about-illustration.svg"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="about-content">
            <div className="about-story reveal-up">
              <p className="about-lead">
                {copy.about.lead}
              </p>

              <div className="about-copy">
                {copy.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="about-metrics reveal-up">
              {copy.about.metrics.map(
                ({ label, number, description }, index) => (
                  <article className="about-metric" key={label}>
                    <div className="about-metric-top">
                      <strong>{number}</strong>

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3>{label}</h3>
                    <p>{description}</p>
                  </article>
                ),
              )}
            </div>

            <div className="about-focus-grid reveal-up">
              {copy.about.focusAreas.map(
                ({ title, icon, description }) => (
                  <article className="about-focus" key={title}>
                    <div className="about-focus-heading">
                      <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                      >
                        {icon}
                      </span>

                      <h3>{title}</h3>
                    </div>

                    <p>{description}</p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
