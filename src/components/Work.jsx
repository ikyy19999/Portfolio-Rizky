import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";
import { projects as works } from "../data/projects";
import { hasCaseStudy } from "../data/caseStudies";

const Work = ({ onOpenCaseStudy = null }) => {
  const { copy } = useLanguage();
  const [filter, setFilter] = useState("all");

  const filters = useMemo(
    () => [
      { label: copy.work.filters.all, value: "all" },
      { label: copy.work.filters.web, value: "web" },
      { label: copy.work.filters.tool, value: "tool" },
    ],
    [copy],
  );

  const localizedProjects = useMemo(
    () =>
      works.map((project, index) => ({
        ...project,
        ...copy.work.projects[index],
      })),
    [copy],
  );

  const filteredProjects = useMemo(() => {
    return localizedProjects.filter((project) => {
      return filter === "all" || project.category === filter;
    });
  }, [filter, localizedProjects]);

  return (
    <section id="work" className="section section-divider work-section">
      <div className="work-glow" aria-hidden="true" />

      <div className="container">
        <header className="work-heading">
          <div className="work-heading-copy reveal-up">
            <div className="section-index">
              <span>04</span>
              <span aria-hidden="true" />
              <span>{copy.work.section}</span>
            </div>

            <h2 className="headline-2">
              {copy.work.title}
            </h2>
          </div>

          <div className="work-heading-aside reveal-up">
            <p>
              {copy.work.intro}
            </p>

            <div
              className="section-illustration projects-illustration reveal-up"
              aria-hidden="true"
            >
              <span className="section-illustration-index">Visual 03</span>

              <img
                src="/assets/illustrations/projects-illustration.svg"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>

            <div
              className="work-overview"
              aria-label={copy.work.summaryLabel}
            >
              <div>
                <strong>{String(works.length).padStart(2, "0")}</strong>
                <span>{copy.work.selectedProjects}</span>
              </div>

              <div>
                <strong>
                  {String(Object.keys(copy.work.categories).length).padStart(
                    2,
                    "0",
                  )}
                </strong>
                <span>{copy.work.focusAreas}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="work-toolbar reveal-up">
          <div
            className="work-filter-list"
            role="group"
            aria-label={copy.work.categoryLabel}
          >
            {filters.map((item) => {
              const isActive = filter === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  className={isActive ? "is-active" : ""}
                  aria-pressed={isActive}
                  onClick={() => setFilter(item.value)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <p className="work-result-count" aria-live="polite">
            {String(filteredProjects.length).padStart(2, "0")} {copy.work.resultSuffix}
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="project-grid reveal-up">
            {filteredProjects.map((project, index) => {
              const canOpenCaseStudy =
                typeof onOpenCaseStudy === "function" &&
                hasCaseStudy(project.slug);

              return (
                <ProjectCard
                  key={project.slug ?? project.demo}
                  imgSrc={project.imgSrc}
                  title={project.title}
                  desc={project.desc}
                  tags={project.tech}
                  category={copy.work.categories[project.category]}
                  projectLink={project.demo}
                  index={index + 1}
                  featured={index === 0}
                  onOpenCaseStudy={
                    canOpenCaseStudy
                      ? () => onOpenCaseStudy(project.slug)
                      : undefined
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className="work-empty" aria-live="polite">
            <span className="material-symbols-rounded" aria-hidden="true">
              folder_off
            </span>

            <h3>{copy.work.emptyTitle}</h3>
            <p>{copy.work.emptyText}</p>
          </div>
        )}
      </div>
    </section>
  );
};

Work.propTypes = {
  onOpenCaseStudy: PropTypes.func,
};

export default Work;
