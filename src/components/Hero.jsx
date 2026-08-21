import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { ButtonPrimary } from "./Button";
import { useLanguage } from "../context/LanguageContext";
import { isReducedMotion, subscribeToMotion } from "../lib/motionPreference";

gsap.registerPlugin(ScrambleTextPlugin);

const SCRAMBLE_DURATION = 0.9;
const SCRAMBLE_HOLD_DURATION = 4.2;
const SCRAMBLE_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";

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

const scrollOptions = {
  duration: 1.2,
  easing: (progress) =>
    progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2,
};

const Hero = ({ animationActive }) => {
  const { copy, language } = useLanguage();
  const lenis = useLenis();
  const scrambleTextRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(isReducedMotion);
  const longestStatement = copy.hero.statements.reduce(
    (longest, statement) =>
      statement.length > longest.length ? statement : longest,
    copy.hero.statements[0] ?? "",
  );

  useEffect(
    () =>
      subscribeToMotion(() => {
        setReducedMotion(isReducedMotion());
      }),
    [],
  );

  useGSAP(
    () => {
      const element = scrambleTextRef.current;
      const statements = copy.hero.statements;

      if (!element || !statements.length) return undefined;

      let currentIndex = 0;
      let activeTween = null;
      let delayedCall = null;

      const showStaticStatement = () => {
        element.textContent = statements[0];
        gsap.set(element, { autoAlpha: 1 });
      };

      const pauseAnimation = () => {
        activeTween?.pause();
        delayedCall?.pause();
      };

      const resumeAnimation = () => {
        activeTween?.resume();
        delayedCall?.resume();
      };

      const handleVisibilityChange = () => {
        if (document.hidden) {
          pauseAnimation();
          return;
        }

        resumeAnimation();
      };

      if (!animationActive || reducedMotion || statements.length === 1) {
        showStaticStatement();

        return () => {
          gsap.killTweensOf(element);
        };
      }

      const scheduleNextStatement = () => {
        delayedCall = gsap.delayedCall(
          SCRAMBLE_HOLD_DURATION,
          animateNextStatement,
        );
      };

      function animateNextStatement() {
        currentIndex = (currentIndex + 1) % statements.length;

        activeTween = gsap.to(element, {
          duration: SCRAMBLE_DURATION,
          scrambleText: {
            text: statements[currentIndex],
            chars: SCRAMBLE_CHARACTERS,
            revealDelay: 0.12,
            speed: 0.55,
            tweenLength: true,
          },
          ease: "none",
          onComplete: scheduleNextStatement,
        });
      }

      element.textContent = "";
      gsap.set(element, { autoAlpha: 1 });

      activeTween = gsap.to(element, {
        duration: 0.82,
        scrambleText: {
          text: statements[0],
          chars: SCRAMBLE_CHARACTERS,
          revealDelay: 0.08,
          speed: 0.5,
          tweenLength: true,
        },
        ease: "none",
        onComplete: scheduleNextStatement,
      });

      document.addEventListener("visibilitychange", handleVisibilityChange);

      if (document.hidden) {
        pauseAnimation();
      }

      return () => {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange,
        );
        delayedCall?.kill();
        activeTween?.kill();
        gsap.killTweensOf(element);
      };
    },
    {
      dependencies: [animationActive, language, reducedMotion],
      revertOnUpdate: true,
    },
  );

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
                className="ax-hero-title-scramble"
                aria-label={copy.hero.statements.join(". ")}
              >
                <span
                  className="ax-hero-title-scramble-sizer"
                  aria-hidden="true"
                >
                  {longestStatement}
                </span>

                <span
                  ref={scrambleTextRef}
                  className="ax-hero-title-scramble-text"
                  aria-hidden="true"
                >
                  {copy.hero.statements[0]}
                </span>
              </span>
            </h1>

            <div className="ax-hero-description reveal-up">
              <p>{copy.hero.description}</p>

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

Hero.propTypes = {
  animationActive: PropTypes.bool.isRequired,
};

export default Hero;
