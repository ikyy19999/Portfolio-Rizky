import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../context/LanguageContext";
import { updates } from "../data/updates";

const panelCopy = {
  en: {
    eyebrow: "recently shipped",
    title: "what’s new",
    description: "small improvements and new details added to the portfolio.",
    latest: "latest update",
    close: "close what’s new",
    footer: "more improvements are on the way.",
  },
  id: {
    eyebrow: "update terbaru",
    title: "what’s new",
    description: "fitur dan detail baru yang sudah ditambahkan ke portfolio.",
    latest: "update terbaru",
    close: "tutup what’s new",
    footer: "masih ada beberapa improvement yang sedang disiapkan.",
  },
  jv: {
    eyebrow: "update paling enggal",
    title: "what’s new",
    description: "fitur lan detail enggal ingkang sampun dipuntambahaken.",
    latest: "update paling enggal",
    close: "tutup what’s new",
    footer: "tasih wonten improvement ingkang saweg dipunsiapaken.",
  },
};

const WhatsNew = ({ open, onClose }) => {
  const { language } = useLanguage();
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const text = panelCopy[language] ?? panelCopy.en;

  useEffect(() => {
    if (!open) return undefined;

    previousFocusRef.current = document.activeElement;
    document.body.classList.add("whats-new-active");

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 60);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = panelRef.current?.querySelectorAll(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.classList.remove("whats-new-active");
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [onClose, open]);

  return (
    <div
      className={`whats-new-overlay ${open ? "is-open" : ""}`}
      aria-hidden={!open}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside
        ref={panelRef}
        className="whats-new-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="whats-new-title"
        aria-describedby="whats-new-description"
      >
        <header className="whats-new-header">
          <div>
            <p className="whats-new-eyebrow">{text.eyebrow}</p>
            <h2 id="whats-new-title">{text.title}</h2>
            <p id="whats-new-description">{text.description}</p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="whats-new-close"
            onClick={onClose}
            aria-label={text.close}
          >
            <span className="material-symbols-rounded" aria-hidden="true">
              close
            </span>
          </button>
        </header>

        <div className="whats-new-list">
          {updates.map((update, index) => (
            <article className="whats-new-entry" key={update.id ?? update.version}>
              <div className="whats-new-entry-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <time dateTime={update.version.replaceAll(".", "-")}>
                  {update.date[language] ?? update.date.en}
                </time>
                {index === 0 ? <small>{text.latest}</small> : null}
              </div>

              <div className="whats-new-entry-copy">
                <h3>{update.title[language] ?? update.title.en}</h3>
                <p>{update.description[language] ?? update.description.en}</p>

                <ul>
                  {(update.items[language] ?? update.items.en).map((item) => (
                    <li key={item}>
                      <span aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <footer className="whats-new-footer">
          <span className="material-symbols-rounded" aria-hidden="true">
            auto_awesome
          </span>
          <p>{text.footer}</p>
        </footer>
      </aside>
    </div>
  );
};

WhatsNew.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WhatsNew;
