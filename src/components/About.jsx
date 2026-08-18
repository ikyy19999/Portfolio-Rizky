import React from "react";

const aboutItems = [
  {
    label: "Projects Completed",
    number: "5+",
    description:
      "Digital products built across frontend and backend.",
  },
  {
    label: "Years Experience",
    number: "1+",
    description:
      "Hands-on experience in development and IT operations.",
  },
];

const focusAreas = [
  {
    title: "Focus",
    icon: "code_blocks",
    description:
      "Full stack web development, UI/UX, backend systems, and product-focused engineering.",
  },
  {
    title: "Beyond code",
    icon: "hub",
    description:
      "Networking, infrastructure, system maintenance, troubleshooting, and IT support.",
  },
];

const About = () => {
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
              <span>About</span>
            </div>

            <h2 className="headline-2">
              Bridging software development and IT infrastructure.
            </h2>

            <p className="about-heading-note">
              I build digital experiences while understanding the
              systems that keep them reliable behind the scenes.
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
                I&apos;m a Computer Science student and Full Stack
                Developer with experience across web development and
                IT infrastructure.
              </p>

              <div className="about-copy">
                <p>
                  My work focuses on building reliable digital
                  products with thoughtful interfaces and scalable
                  backend systems. I work primarily with Laravel, PHP,
                  React, MySQL, and Tailwind CSS.
                </p>

                <p>
                  Beyond development, I also have hands-on experience
                  with networking, system maintenance,
                  troubleshooting, and IT support. That combination
                  gives me a broader perspective when building
                  technology.
                </p>

                <p>
                  I understand both the software users interact with
                  and the infrastructure supporting it behind the
                  scenes.
                </p>
              </div>
            </div>

            <div className="about-metrics reveal-up">
              {aboutItems.map(
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
              {focusAreas.map(
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
