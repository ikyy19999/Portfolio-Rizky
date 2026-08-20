import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../context/LanguageContext";
import {
  getMotionMode,
  isReducedMotion,
  setMotionMode,
} from "../lib/motionPreference";
import "../styles/motion-watchdog.css";

const SETTLE_DELAY = 1600; // ignore load jank
const SAMPLE_DURATION = 3000; // watch this long
const FPS_FLOOR = 32; // below this for the whole window = struggling
const TOAST_TIMEOUT = 12000;
const SESSION_KEY = "portfolio-motion-watchdog";

const watchdogCopy = {
  en: {
    message: "animations were turned off — this page was running slowly here.",
    undo: "turn them back on",
    dismiss: "dismiss",
  },
  id: {
    message: "animasi dimatikan otomatis — halaman ini terasa berat di device kamu.",
    undo: "nyalakan lagi",
    dismiss: "tutup",
  },
  jv: {
    message: "animasi dipunpejahi piyambak — kaca punika kraos awrat wonten piranti panjenengan.",
    undo: "gesangaken malih",
    dismiss: "tutup",
  },
};

/**
 * Watches frame rate for a few seconds after the page settles. If the browser
 * can't keep up, motion is switched off for this session and the visitor is
 * told — with a way to undo it.
 *
 * Deliberate limits:
 * - Only acts when the mode is "system". An explicit choice is never overridden.
 * - Only fires once per tab (sessionStorage), so it can't nag.
 * - Session-only, so one slow moment doesn't become a permanent setting.
 */
const MotionWatchdog = ({ enabled }) => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const hideTimerRef = useRef(0);
  const text = watchdogCopy[language] ?? watchdogCopy.en;

  const hide = useCallback(() => {
    window.clearTimeout(hideTimerRef.current);
    setVisible(false);
  }, []);

  const undo = useCallback(() => {
    setMotionMode("full");
    hide();
  }, [hide]);

  useEffect(() => {
    if (!enabled) return undefined;

    if (getMotionMode() !== "system" || isReducedMotion()) return undefined;

    try {
      if (window.sessionStorage.getItem(SESSION_KEY)) return undefined;
    } catch {
      /* sessionStorage unavailable — just run the check */
    }

    let frameId = 0;
    let startTime = 0;
    let frameCount = 0;
    let cancelled = false;

    const measure = (timestamp) => {
      if (cancelled) return;

      if (!startTime) startTime = timestamp;

      frameCount += 1;

      const elapsed = timestamp - startTime;

      if (elapsed < SAMPLE_DURATION) {
        frameId = window.requestAnimationFrame(measure);
        return;
      }

      const averageFps = (frameCount / elapsed) * 1000;

      if (averageFps >= FPS_FLOOR) return;

      // A backgrounded tab throttles rAF to ~1fps, which is not a slow device.
      if (document.hidden) return;

      try {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }

      setMotionMode("reduced", { persist: false });
      setVisible(true);

      hideTimerRef.current = window.setTimeout(() => {
        setVisible(false);
      }, TOAST_TIMEOUT);
    };

    const startTimer = window.setTimeout(() => {
      frameId = window.requestAnimationFrame(measure);
    }, SETTLE_DELAY);

    return () => {
      cancelled = true;
      window.clearTimeout(startTimer);
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(hideTimerRef.current);
    };
  }, [enabled]);

  if (!visible) return null;

  return (
    <div className="motion-watchdog" role="status" aria-live="polite">
      <span className="material-symbols-rounded" aria-hidden="true">
        motion_photos_off
      </span>

      <p>{text.message}</p>

      <button type="button" className="motion-watchdog-undo" onClick={undo}>
        {text.undo}
      </button>

      <button
        type="button"
        className="motion-watchdog-close"
        onClick={hide}
        aria-label={text.dismiss}
      >
        <span className="material-symbols-rounded" aria-hidden="true">
          close
        </span>
      </button>
    </div>
  );
};

MotionWatchdog.propTypes = {
  enabled: PropTypes.bool.isRequired,
};

export default MotionWatchdog;