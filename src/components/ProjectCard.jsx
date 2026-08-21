import React from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../context/LanguageContext";
import "../styles/project-card-extras.css";

const cardCopy = {
  en: { caseStudy: "read case study" },
  id: { caseStudy: "baca case study" },
  jv: { caseStudy: "maos case study" },
};

const ProjectCard = ({
  imgSrc,
  visual = "system",
  title,
  desc,
  tags,
  category,
  projectLink,
  index = 1,
  featured = false,
  classes = "",
  onOpenCaseStudy = null,
}) => {
  const { copy, language } = useLanguage();
  const text = cardCopy[language] ?? cardCopy.en;
  const projectNumber = String(index).padStart(2, "0");

  // A project only becomes a case study card when a case study actually
  // exists for it. Otherwise this component behaves exactly as before.
  const hasCaseStudy = typeof onOpenCaseStudy === "function";
  const CardElement = hasCaseStudy ? "button" : projectLink ? "a" : "div";

  const elementProps = hasCaseStudy
    ? {
        type: "button",
        onClick: onOpenCaseStudy,
        "aria-label": copy.work.viewProjectAria.replace("{title}", title),
      }
    : projectLink
      ? {
          href: projectLink,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": copy.work.viewProjectAria.replace("{title}", title),
        }
      : {};

  const showAction = hasCaseStudy || Boolean(projectLink);

  return (
    <article
      className={`project-card ${featured ? "is-featured" : ""} ${classes}`.trim()}
      style={{ "--project-order": index - 1 }}
    >
      <CardElement
        {...elementProps}
        className="project-card-link"
        data-cursor={showAction ? "view" : undefined}
      >
        <header className="project-card-top">
          <span className="project-card-number">{projectNumber}</span>
          <span className="project-card-category">{category}</span>
        </header>

        <figure
          className={`project-card-media ${!imgSrc ? "has-generated-visual" : ""}`.trim()}
        >
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={copy.work.previewAlt.replace("{title}", title)}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div
              className={`project-card-generated is-${visual}`}
              role="img"
              aria-label={copy.work.previewAlt.replace("{title}", title)}
            >
              <span className="generated-visual-grid" aria-hidden="true">
                {Array.from({ length: 12 }, (_, itemIndex) => (
                  <span key={itemIndex} />
                ))}
              </span>

              <span className="generated-visual-copy" aria-hidden="true">
                <small>property platform</small>
                <strong>kos / kosan</strong>
                <span>rooms · booking · dashboard</span>
              </span>

              <span className="generated-visual-panel" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
          )}

          <span className="project-card-sheen" aria-hidden="true" />

          {showAction && (
            <span className="project-card-media-action" aria-hidden="true">
              <span className="material-symbols-rounded">
                {hasCaseStudy ? "article" : "north_east"}
              </span>
            </span>
          )}
        </figure>

        <div className="project-card-copy">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>

        <footer className="project-card-footer">
          <div
            className="project-card-tags"
            aria-label={copy.work.technologiesUsed}
          >
            {tags.map((tag, tagIndex) => (
              <React.Fragment key={tag}>
                <span>{tag}</span>

                {tagIndex < tags.length - 1 && (
                  <span aria-hidden="true">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {showAction && (
            <span className="project-card-action">
              <span>
                {hasCaseStudy ? text.caseStudy : copy.work.viewProject}
              </span>
              <span className="material-symbols-rounded" aria-hidden="true">
                {hasCaseStudy ? "east" : "arrow_outward"}
              </span>
            </span>
          )}
        </footer>
      </CardElement>
    </article>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  visual: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  index: PropTypes.number,
  featured: PropTypes.bool,
  classes: PropTypes.string,
  onOpenCaseStudy: PropTypes.func,
};

export default ProjectCard;
