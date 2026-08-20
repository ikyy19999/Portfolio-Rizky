/**
 * Motion preference.
 *
 * Instead of re-declaring every animation for an opt-in mode, this walks the
 * CSSOM and rewrites the media text of every `prefers-reduced-motion` block:
 *
 *   "full"    → "not all"  (never matches, so the site animates exactly like
 *                           it does on a machine with no reduced-motion set —
 *                           identical, nothing left behind)
 *   "reduced" → "all"      (always matches, even if the OS says otherwise)
 *   "system"  → original media text restored
 *
 * The OS preference stays the DEFAULT. This only exists so a visitor can
 * override it for this site, from inside the site.
 *
 * NOTE: this assumes every `prefers-reduced-motion` block in the CSS is a
 * standalone query (true for index.css — all 12 of them). If a block ever
 * combines it with another condition, "reduced" would over-apply that block.
 */

const STORAGE_KEY = "portfolio-motion";
const MODES = ["system", "full", "reduced"];
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

const originalMediaText = new WeakMap();
const patchedRules = new Set();
const listeners = new Set();

let currentMode = "system";
let observer = null;
let pendingFrame = 0;

const readStoredMode = () => {
  if (typeof window === "undefined") return "system";

  try {
    const storedMode = window.localStorage.getItem(STORAGE_KEY);

    return MODES.includes(storedMode) ? storedMode : "system";
  } catch {
    return "system";
  }
};

const collectReducedMotionRules = () => {
  const matchedRules = [];

  const visitRules = (rules) => {
    for (const rule of rules) {
      const mediaText = rule.media?.mediaText;

      if (
        typeof mediaText === "string" &&
        mediaText.includes("prefers-reduced-motion")
      ) {
        matchedRules.push(rule);
      }

      if (rule.cssRules) {
        try {
          visitRules(Array.from(rule.cssRules));
        } catch {
          /* ignore rules we can't walk into */
        }
      }
    }
  };

  for (const sheet of Array.from(document.styleSheets)) {
    try {
      visitRules(Array.from(sheet.cssRules));
    } catch {
      /* cross-origin sheet (google fonts) — nothing to do here */
    }
  }

  // Rules already rewritten to "not all" / "all" no longer contain the string
  // we search for, so they'd be invisible to the scan above and could never be
  // restored. Keep our own reference to everything we've touched.
  for (const rule of patchedRules) {
    if (!rule.parentStyleSheet) {
      patchedRules.delete(rule);
      continue;
    }

    if (!matchedRules.includes(rule)) matchedRules.push(rule);
  }

  return matchedRules;
};

const applyToStyleSheets = (mode) => {
  if (typeof document === "undefined") return;

  for (const rule of collectReducedMotionRules()) {
    if (!originalMediaText.has(rule)) {
      originalMediaText.set(rule, rule.media.mediaText);
    }

    patchedRules.add(rule);

    const original = originalMediaText.get(rule);

    let nextMediaText = original;

    if (mode === "full") nextMediaText = "not all";
    if (mode === "reduced") nextMediaText = "all";

    if (rule.media.mediaText !== nextMediaText) {
      try {
        rule.media.mediaText = nextMediaText;
      } catch {
        /* some engines reject the assignment — skip that rule */
      }
    }
  }
};

const scheduleReapply = () => {
  if (pendingFrame) return;

  pendingFrame = window.requestAnimationFrame(() => {
    pendingFrame = 0;
    applyToStyleSheets(currentMode);
  });
};

/**
 * True when motion should be suppressed right now. Use this instead of
 * calling matchMedia directly, so JS-driven animations follow the same
 * preference as the CSS ones.
 */
const isReducedMotion = () => {
  if (currentMode === "full") return false;
  if (currentMode === "reduced") return true;

  if (typeof window === "undefined") return false;

  return window.matchMedia(REDUCED_QUERY).matches;
};

const getMotionMode = () => currentMode;

const notify = () => {
  for (const listener of listeners) listener(currentMode);
};

/**
 * @param {"system"|"full"|"reduced"} mode
 * @param {{ persist?: boolean }} [options] persist:false applies the mode for
 *   this session only — used by the performance watchdog, so a single bad
 *   moment on one page doesn't silently become a permanent setting.
 */
const setMotionMode = (mode, { persist = true } = {}) => {
  if (!MODES.includes(mode)) return;

  currentMode = mode;

  if (persist) {
    try {
      if (mode === "system") {
        window.localStorage.removeItem(STORAGE_KEY);
      } else {
        window.localStorage.setItem(STORAGE_KEY, mode);
      }
    } catch {
      /* storage is optional */
    }
  }

  document.documentElement.dataset.motion = mode;
  applyToStyleSheets(mode);
  notify();
};

/** Flip between animating and not, whatever the OS says. */
const toggleMotion = () => {
  setMotionMode(isReducedMotion() ? "full" : "reduced");
};

const subscribeToMotion = (listener) => {
  listeners.add(listener);

  return () => listeners.delete(listener);
};

/**
 * Call once, as early as possible after the stylesheets exist.
 * Safe to call more than once.
 */
const initMotionPreference = () => {
  if (typeof window === "undefined") return;

  currentMode = readStoredMode();
  document.documentElement.dataset.motion = currentMode;
  applyToStyleSheets(currentMode);

  // Vite injects and replaces <style> tags on HMR, and lazily loaded CSS can
  // arrive later — re-apply whenever the head changes.
  if (!observer && typeof MutationObserver === "function") {
    observer = new MutationObserver(scheduleReapply);
    observer.observe(document.head, { childList: true, subtree: true });
  }

  // While on "system", follow the OS if it changes mid-session.
  const query = window.matchMedia(REDUCED_QUERY);

  const handleSystemChange = () => {
    if (currentMode === "system") notify();
  };

  query.addEventListener?.("change", handleSystemChange);
};

export {
  MODES,
  getMotionMode,
  initMotionPreference,
  isReducedMotion,
  setMotionMode,
  subscribeToMotion,
  toggleMotion,
};