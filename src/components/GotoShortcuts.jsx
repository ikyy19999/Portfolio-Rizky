import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLenis } from "lenis/react";

const SEQUENCE_TIMEOUT = 1200;

const gotoTargets = {
  h: "#home",
  a: "#about",
  s: "#skills",
  w: "#work",
  c: "#contact",
};

const isTypingTarget = (element) => {
  if (!element) return false;

  if (element.isContentEditable) return true;

  return ["INPUT", "TEXTAREA", "SELECT"].includes(element.tagName);
};

/**
 * GitHub-style sequence shortcuts: press "g" then a section key.
 * Renders nothing — it only listens while no overlay or input is focused.
 */
const GotoShortcuts = ({ disabled }) => {
  const lenis = useLenis();

  useEffect(() => {
    if (disabled) return undefined;

    let awaitingSecondKey = false;
    let sequenceTimer = 0;

    const resetSequence = () => {
      awaitingSecondKey = false;
      window.clearTimeout(sequenceTimer);
    };

    const handleKeyDown = (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      if (isTypingTarget(event.target) || isTypingTarget(document.activeElement))
        return;

      if (
        document.body.classList.contains("command-palette-active") ||
        document.body.classList.contains("whats-new-active") ||
        document.body.classList.contains("intro-active")
      )
        return;

      const key = event.key.toLowerCase();

      if (!awaitingSecondKey) {
        if (key === "g") {
          awaitingSecondKey = true;
          sequenceTimer = window.setTimeout(resetSequence, SEQUENCE_TIMEOUT);
        }

        return;
      }

      resetSequence();

      const target = gotoTargets[key];

      if (!target) return;

      const section = document.querySelector(target);

      if (!section) return;

      event.preventDefault();

      if (lenis) {
        lenis.scrollTo(section, {
          duration: 1.2,
          offset: target === "#home" ? 0 : -96,
        });

        return;
      }

      section.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(sequenceTimer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [disabled, lenis]);

  return null;
};

GotoShortcuts.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default GotoShortcuts;
