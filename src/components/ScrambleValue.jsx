import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { isReducedMotion } from "../lib/motionPreference";
import "../styles/scramble.css";

gsap.registerPlugin(ScrambleTextPlugin);

/**
 * Scrambles a short value when it CHANGES — never on first paint.
 *
 * The point is to mark a change the visitor caused (a filter click), not to
 * decorate. Text that scrambles for no reason just makes people wait.
 *
 * Accessibility: this element is aria-hidden on purpose. Scrambling rewrites
 * textContent dozens of times per second, so a screen reader inside a live
 * region would announce every random frame. Render the real value separately
 * in a `.scramble-live` span — see Work.jsx / Skill.jsx for the pattern.
 */
const ScrambleValue = ({
  value,
  chars = "0123456789",
  duration = 0.55,
  className = "",
}) => {
  const nodeRef = useRef(null);
  const previousValueRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;

    if (!node) return undefined;

    // First paint: set it directly. Scrambling here would mean the visitor
    // sees garbage before they've done anything.
    if (previousValueRef.current === null) {
      previousValueRef.current = value;
      node.textContent = value;
      return undefined;
    }

    if (previousValueRef.current === value) return undefined;

    previousValueRef.current = value;

    if (isReducedMotion()) {
      node.textContent = value;
      return undefined;
    }

    const tween = gsap.to(node, {
      duration,
      ease: "none",
      scrambleText: {
        text: value,
        chars,
        speed: 0.7,
        revealDelay: 0,
      },
    });

    return () => {
      tween.kill();
      // If the tween is cut short mid-scramble, don't leave junk on screen.
      node.textContent = value;
    };
  }, [chars, duration, value]);

  return <span ref={nodeRef} className={className} aria-hidden="true" />;
};

ScrambleValue.propTypes = {
  value: PropTypes.string.isRequired,
  chars: PropTypes.string,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default ScrambleValue;
