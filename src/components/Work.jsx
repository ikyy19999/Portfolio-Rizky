import React, { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/assets/Galaxy-S22+-sportix.madebyrizky.my.id.png",
    title: "Sports Booking Platform",
    desc: "Online sports court reservation system with a responsive booking experience.",
    category: "web",
    tech: ["Laravel", "Filament", "Livewire"],
    demo: "https://sportix.madebyrizky.my.id",
  },
  {
    imgSrc: "/assets/Web Music.png",
    title: "Music Streaming Website",
    desc: "Interactive music platform integrated with public APIs.",
    category: "web",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "/assets/Web Music/music.html",
  },
  {
    imgSrc: "/assets/Book.png",
    title: "Bookshelf App",
    desc: "Minimal reading management application with local storage.",
    category: "tool",
    tech: ["JavaScript", "LocalStorage"],
    demo: "/assets/Bookshelf App/book.html",
  },
  {
    imgSrc: "/assets/QR.png",
    title: "QR Generator",
    desc: "Instant QR code generator with a simple and focused interface.",
    category: "tool",
    tech: ["JavaScript", "API"],
    demo: "/assets/QR/index.html",
  },
  {
    imgSrc: "/assets/Calculator.png",
    title: "Calculator Tool",
    desc: "Simple utility calculator focused on usability and accessibility.",
    category: "tool",
    tech: ["HTML", "JavaScript"],
    demo: "/assets/Calculator/index.html",
  },
  {
    imgSrc: "/assets/Calender.png",
    title: "Calendar App",
    desc: "Interactive calendar application with event management.",
    category: "tool",
    tech: ["HTML", "JavaScript"],
    demo: "/assets/Calender/index.html",
  },
  {
    imgSrc: "/assets/Finance.png",
    title: "Finance Tracker",
    desc: "Personal finance tracking application with budgeting features.",
    category: "tool",
    tech: ["HTML", "JavaScript"],
    demo: "/assets/Personal Finance Tracker/index.html",
  },
];

const categoryLabels = {
  web: "Web App",
  tool: "Digital Tool",
};

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Tools", value: "tool" },
];

const Work = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    return works.filter((project) => {
      return filter === "all" || project.category === filter;
    });
  }, [filter]);

  return (
    <section id="work" className="section section-divider work-section">
      <div className="work-glow" aria-hidden="true" />

      <div className="container">
        <header className="work-heading">
          <div className="work-heading-copy reveal-up">
            <div className="section-index">
              <span>04</span>
              <span aria-hidden="true" />
              <span>Selected Work</span>
            </div>

            <h2 className="headline-2">
              Digital products built around real ideas and useful experiences.
            </h2>
          </div>

          <div className="work-heading-aside reveal-up">
            <p>
              A selection of web applications and tools I&apos;ve designed and
              developed across frontend, backend, database, and product
              interface work.
            </p>

            <div className="work-overview" aria-label="Project summary">
              <div>
                <strong>{String(works.length).padStart(2, "0")}</strong>
                <span>Selected projects</span>
              </div>

              <div>
                <strong>
                  {String(Object.keys(categoryLabels).length).padStart(2, "0")}
                </strong>
                <span>Focus areas</span>
              </div>
            </div>
          </div>
        </header>

        <div className="work-toolbar reveal-up">
          <div
            className="work-filter-list"
            role="group"
            aria-label="Project categories"
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
            {String(filteredProjects.length).padStart(2, "0")} projects
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="project-grid reveal-up">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                imgSrc={project.imgSrc}
                title={project.title}
                desc={project.desc}
                tags={project.tech}
                category={categoryLabels[project.category]}
                projectLink={project.demo}
                index={index + 1}
                featured={index === 0}
              />
            ))}
          </div>
        ) : (
          <div className="work-empty" aria-live="polite">
            <span className="material-symbols-rounded" aria-hidden="true">
              folder_off
            </span>

            <h3>No projects found</h3>
            <p>Try another project category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
