import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import {
  isReducedMotion,
  subscribeToMotion,
} from "../lib/motionPreference";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrambleTextPlugin);

const SCRAMBLE_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";

const ScrambleRevealText = ({
  as: Tag = "span",
  className = "",
  text,
}) => {
  const rootRef = useRef(null);
  const valueRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(isReducedMotion);

  useEffect(() => {
    return subscribeToMotion(() => {
      setReduceMotion(isReducedMotion());
    });
  }, []);

  useGSAP(
    () => {
      const root = rootRef.current;
      const value = valueRef.current;

      if (!root || !value) return undefined;

      gsap.killTweensOf(value);
      value.textContent = text;

      if (reduceMotion) {
        gsap.set(value, {
          autoAlpha: 1,
        });

        return undefined;
      }

      const playScramble = () => {
        gsap.killTweensOf(value);

        value.textContent = "";

        gsap.set(value, {
          autoAlpha: 1,
        });

        gsap.to(value, {
          duration: 0.9,
          ease: "none",
          overwrite: true,
          scrambleText: {
            text,
            chars: SCRAMBLE_CHARACTERS,
            revealDelay: 0.08,
            speed: 0.55,
            tweenLength: true,
          },
        });
      };

      const resetScramble = () => {
        gsap.killTweensOf(value);

        value.textContent = text;

        gsap.set(value, {
          autoAlpha: 0,
        });
      };

      const bounds = root.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const isInsideViewport =
        bounds.top <= viewportHeight * 0.85 &&
        bounds.bottom >= viewportHeight * 0.15;

      const isAboveViewport = bounds.bottom < 0;

      if (isAboveViewport) {
        gsap.set(value, {
          autoAlpha: 1,
        });
      } else {
        gsap.set(value, {
          autoAlpha: 0,
        });
      }

      const trigger = ScrollTrigger.create({
        trigger: root,
        start: "top 85%",
        end: "bottom 15%",

        onEnter: playScramble,
        onEnterBack: playScramble,

        onLeave: resetScramble,
        onLeaveBack: resetScramble,
      });

      if (isInsideViewport) {
        playScramble();
      }

      return () => {
        trigger.kill();
        gsap.killTweensOf(value);
      };
    },
    {
      scope: rootRef,
      dependencies: [reduceMotion, text],
      revertOnUpdate: true,
    },
  );

  const classes = ["scramble-reveal-text", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={rootRef} className={classes} aria-label={text}>
      <span className="scramble-reveal-sizer" aria-hidden="true">
        {text}
      </span>

      <span
        ref={valueRef}
        className="scramble-reveal-value"
        aria-hidden="true"
      >
        {text}
      </span>
    </Tag>
  );
};

ScrambleRevealText.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default ScrambleRevealText;
