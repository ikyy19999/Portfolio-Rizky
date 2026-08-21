import ScrollSmoother from "gsap/ScrollSmoother";
import { isReducedMotion } from "./motionPreference";

const resolveTarget = (target) => {
  if (typeof target === "string") {
    return document.querySelector(target);
  }

  return typeof Element !== "undefined" && target instanceof Element
    ? target
    : null;
};

const scrollToTarget = (
  target,
  { headerOffset = 96, immediate = false } = {},
) => {
  const element = resolveTarget(target);

  if (!element) return false;

  const smoother = ScrollSmoother.get();

  if (smoother) {
    smoother.scrollTo(
      element,
      !immediate,
      headerOffset > 0 ? `top ${headerOffset}px` : "top top",
    );

    return true;
  }

  const targetTop =
    element.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: immediate || isReducedMotion() ? "auto" : "smooth",
  });

  return true;
};

const scrollToTop = ({ immediate = false } = {}) => {
  const smoother = ScrollSmoother.get();

  if (smoother) {
    smoother.scrollTo(0, !immediate);
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: immediate || isReducedMotion() ? "auto" : "smooth",
  });
};

export { scrollToTarget, scrollToTop };
