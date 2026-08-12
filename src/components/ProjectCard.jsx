import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  desc,
  tags,
  category,
  projectLink,
  index = 1,
  featured = false,
  classes = "",
}) => {
  const projectNumber = String(index).padStart(2, "0");
  const CardElement = projectLink ? "a" : "div";
  const linkProps = projectLink
    ? {
        href: projectLink,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `View ${title} project`,
      }
    : {};

  return (
    <article
      className={`project-card ${featured ? "is-featured" : ""} ${classes}`.trim()}
      style={{ "--project-order": index - 1 }}
    >
      <CardElement
        {...linkProps}
        className="project-card-link"
        data-cursor={projectLink ? "view" : undefined}
      >
        <header className="project-card-top">
          <span className="project-card-number">{projectNumber}</span>
          <span className="project-card-category">{category}</span>
        </header>

        <figure className="project-card-media">
          <img
            src={imgSrc}
            alt={`${title} preview`}
            loading="lazy"
            decoding="async"
          />

          <span className="project-card-sheen" aria-hidden="true" />

          {projectLink && (
            <span className="project-card-media-action" aria-hidden="true">
              <span className="material-symbols-rounded">north_east</span>
            </span>
          )}
        </figure>

        <div className="project-card-copy">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>

        <footer className="project-card-footer">
          <div className="project-card-tags" aria-label="Technologies used">
            {tags.map((tag, tagIndex) => (
              <React.Fragment key={tag}>
                <span>{tag}</span>

                {tagIndex < tags.length - 1 && (
                  <span aria-hidden="true">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {projectLink && (
            <span className="project-card-action">
              <span>View project</span>
              <span className="material-symbols-rounded" aria-hidden="true">
                arrow_outward
              </span>
            </span>
          )}
        </footer>
      </CardElement>
    </article>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  index: PropTypes.number,
  featured: PropTypes.bool,
  classes: PropTypes.string,
};

export default ProjectCard;
