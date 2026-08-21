import React, { useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import { getCaseStudy } from "../data/caseStudies";
import "../styles/case-study.css";

const panelCopy = {
  en: {
    eyebrow: "case study",
    close: "close case study",
    role: "role",
    timeline: "timeline",
    status: "status",
    stack: "stack",
    problem: "the problem",
    approach: "how it was built",
    results: "what changed",
    learnings: "what i'd do differently",
    viewLive: "open live site",
    viewRepo: "view source",
    footer: "want the longer version? just ask.",
  },
  id: {
    eyebrow: "case study",
    close: "tutup case study",
    role: "peran",
    timeline: "timeline",
    status: "status",
    stack: "stack",
    problem: "masalahnya",
    approach: "cara membangunnya",
    results: "yang berubah",
    learnings: "yang akan saya ubah",
    viewLive: "buka situsnya",
    viewRepo: "lihat source",
    footer: "mau versi yang lebih panjang? tinggal tanya.",
  },
  jv: {
    eyebrow: "case study",
    close: "tutup case study",
    role: "peran",
    timeline: "timeline",
    status: "status",
    stack: "stack",
    problem: "prekawisipun",
    approach: "caranipun damel",
    results: "ingkang ewah",
    learnings: "ingkang badhe kula ewahi",
    viewLive: "bikak situsipun",
    viewRepo: "mirsani source",
    footer: "kersa versi ingkang langkung panjang? mangga tanglet.",
  },
};

const localize = (value, language) => {
  if (!value) return null;

  return value[language] ?? value.en ?? null;
};

const ProjectCaseStudy = ({ slug = null, onClose }) => {
  const { language, copy } = useLanguage();
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const text = panelCopy[language] ?? panelCopy.en;

  const study = getCaseStudy(slug);
  const open = Boolean(study);

  const project = useMemo(() => {
    const index = projects.findIndex((item) => item.slug === slug);

    if (index === -1) return null;

    return {
      ...projects[index],
      ...(copy.work.projects[index] ?? {}),
      index,
    };
  }, [copy.work.projects, slug]);

  useEffect(() => {
    if (!open) return undefined;

    previousFocusRef.current = document.activeElement;
    document.body.classList.add("case-study-active");

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
      document.body.classList.remove("case-study-active");
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [onClose, open]);

  const summary = localize(study?.summary, language);
  const problem = localize(study?.problem, language);
  const learnings = localize(study?.learnings, language);
  const approach = localize(study?.approach, language) ?? [];
  const results = localize(study?.results, language) ?? [];
  const stack = study?.stack ?? project?.tech ?? [];
  const demoLink = study?.links?.demo || project?.demo;
  const repoLink = study?.links?.repo;

  const metaEntries = [
    { key: "role", value: localize(study?.meta?.role, language) },
    { key: "timeline", value: localize(study?.meta?.timeline, language) },
    { key: "status", value: localize(study?.meta?.status, language) },
  ].filter(({ value }) => Boolean(value));

  return (
    <div
      className={`case-study-overlay ${open ? "is-open" : ""}`}
      aria-hidden={!open}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside
        ref={panelRef}
        className="case-study-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        <header className="case-study-header">
          <div>
            <p className="case-study-eyebrow">
              {text.eyebrow}
              {project ? (
                <span aria-hidden="true">
                  {" · "}
                  {copy.work.categories[project.category]}
                </span>
              ) : null}
            </p>

            <h2 id="case-study-title">{project?.title ?? ""}</h2>

            {summary ? <p className="case-study-summary">{summary}</p> : null}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="case-study-close"
            onClick={onClose}
            aria-label={text.close}
          >
            <span className="material-symbols-rounded" aria-hidden="true">
              close
            </span>
          </button>
        </header>

        <div className="case-study-body">
          {project?.imgSrc ? (
            <figure className="case-study-media">
              <img
                src={project.imgSrc}
                alt={copy.work.previewAlt.replace("{title}", project.title)}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ) : null}

          {metaEntries.length || stack.length ? (
            <dl className="case-study-meta">
              {metaEntries.map(({ key, value }) => (
                <div key={key}>
                  <dt>{text[key]}</dt>
                  <dd>{value}</dd>
                </div>
              ))}

              {stack.length ? (
                <div className="case-study-meta-stack">
                  <dt>{text.stack}</dt>
                  <dd>
                    {stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </dd>
                </div>
              ) : null}
            </dl>
          ) : null}

          {problem ? (
            <section className="case-study-section">
              <h3>{text.problem}</h3>
              <p>{problem}</p>
            </section>
          ) : null}

          {approach.length ? (
            <section className="case-study-section">
              <h3>{text.approach}</h3>

              <ol className="case-study-steps">
                {approach.map((step, index) => (
                  <li key={step.title}>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {results.length ? (
            <section className="case-study-section">
              <h3>{text.results}</h3>

              <ul className="case-study-results">
                {results.map((result) => (
                  <li key={result}>
                    <span aria-hidden="true" />
                    {result}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {learnings ? (
            <section className="case-study-section">
              <h3>{text.learnings}</h3>
              <p>{learnings}</p>
            </section>
          ) : null}
        </div>

        <footer className="case-study-footer">
          <p>{text.footer}</p>

          <div className="case-study-actions">
            {repoLink ? (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-action is-ghost"
              >
                {text.viewRepo}

                <span className="material-symbols-rounded" aria-hidden="true">
                  code
                </span>
              </a>
            ) : null}

            {demoLink ? (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-action"
              >
                {text.viewLive}

                <span className="material-symbols-rounded" aria-hidden="true">
                  arrow_outward
                </span>
              </a>
            ) : null}
          </div>
        </footer>
      </aside>
    </div>
  );
};

ProjectCaseStudy.propTypes = {
  slug: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ProjectCaseStudy;
