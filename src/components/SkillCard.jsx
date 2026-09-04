import React from "react";
import PropTypes from "prop-types";

const SkillCard = ({
  index,
  imgSrc,
  label,
  desc,
  category,
  tag,
  classes = "",
}) => {
  const cardNumber = String(index).padStart(2, "0");

  return (
    <article
      className={`skill-card ${classes}`.trim()}
      style={{ "--skill-order": index - 1 }}
    >
      <span className="skill-card-glow" aria-hidden="true" />
      <div className="skill-card-top">
        <figure className="skill-card-icon">
          <img
            src={imgSrc}
            width={34}
            height={34}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </figure>

        <span className="skill-card-index" aria-hidden="true">
          {cardNumber}
        </span>
      </div>

      <div className="skill-card-copy">
        <h3>{label}</h3>
        <p>{desc}</p>
      </div>

      <footer className="skill-card-footer">
        <div className="skill-card-meta">
          <span>{category}</span>
          <span aria-hidden="true">/</span>
          <span>{tag}</span>
        </div>

        <span className="material-symbols-rounded" aria-hidden="true">
          north_east
        </span>
      </footer>
    </article>
  );
};

SkillCard.propTypes = {
  index: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
