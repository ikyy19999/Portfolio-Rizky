import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import SkillCard from "./SkillCard";

const skillItems = [
  {
    imgSrc: "/assets/html.png",
    label: "HTML",
    desc: "Web Structure",
    category: "web",
    tag: "Project",
  },
  {
    imgSrc: "/assets/css3.svg",
    label: "CSS",
    desc: "Web Styling",
    category: "web",
    tag: "Project",
  },
  {
    imgSrc: "/assets/javascript.svg",
    label: "JavaScript",
    desc: "Web Interaction",
    category: "web",
    tag: "Project",
  },
  {
    imgSrc: "/assets/Typescript_logo.png",
    label: "TypeScript",
    desc: "Typed JavaScript",
    category: "web",
    tag: "Project",
  },
  {
    imgSrc: "/assets/php.png",
    label: "PHP",
    desc: "Backend Development",
    category: "web",
    tag: "Project",
  },
  {
    imgSrc: "/assets/Laravel.png",
    label: "Laravel",
    desc: "Backend Framework",
    category: "web",
    tag: "Project",
  },
  {
    imgSrc: "/assets/next-js-logo.png",
    label: "Next.js",
    desc: "Full-Stack Framework",
    category: "web",
    tag: "Project",
  },
  {
    imgSrc: "/assets/react.svg",
    label: "React",
    desc: "Frontend Library",
    category: "web",
    tag: "Project",
  },
  {
    imgSrc: "/assets/node-js-logo.png",
    label: "Node.js",
    desc: "Server-Side Runtime",
    category: "web",
    tag: "Project",
  },
  {
    imgSrc: "/assets/tailwindcss.svg",
    label: "Tailwind CSS",
    desc: "CSS Framework",
    category: "web",
    tag: "Project",
  },
  {
    imgSrc: "/assets/livewire.svg",
    label: "Livewire",
    desc: "Reactive Laravel UI",
    category: "web",
    tag: "Project",
  },
  {
    imgSrc: "/assets/filament.svg",
    label: "Filament",
    desc: "Admin Panel Framework",
    category: "web",
    tag: "Project",
  },
  {
    imgSrc: "/assets/gsap.svg",
    label: "GSAP",
    desc: "Web Animation",
    category: "web",
    tag: "Project",
  },
  {
    imgSrc: "/assets/mysql.png",
    label: "MySQL",
    desc: "Relational Database",
    category: "database",
    tag: "Project",
  },
  {
    imgSrc: "/assets/redis.svg",
    label: "Redis",
    desc: "Caching & Storage",
    category: "database",
    tag: "Project",
  },
  {
    imgSrc: "/assets/prisma.svg",
    label: "Prisma",
    desc: "Database ORM",
    category: "database",
    tag: "Project",
  },
  {
    imgSrc: "/assets/supabase.svg",
    label: "Supabase",
    desc: "Backend Platform",
    category: "database",
    tag: "Project",
  },
  {
    imgSrc: "/assets/git.jpg",
    label: "Git & GitHub",
    desc: "Version Control",
    category: "tools",
    tag: "Project",
  },
  {
    imgSrc: "/assets/cloudflare.svg",
    label: "Cloudflare",
    desc: "DNS & Web Security",
    category: "tools",
    tag: "Project",
  },
  {
    imgSrc: "/assets/vercel.svg",
    label: "Vercel",
    desc: "Web Deployment",
    category: "tools",
    tag: "Project",
  },
  {
    imgSrc: "/assets/figma.svg",
    label: "Figma",
    desc: "UI/UX Design",
    category: "design",
    tag: "Project",
  },
  {
    imgSrc: "/assets/linux.jpg",
    label: "Linux",
    desc: "Operating System",
    category: "system",
    tag: "Work",
  },
  {
    imgSrc: "/assets/windows.jpg",
    label: "Windows",
    desc: "Operating System",
    category: "system",
    tag: "Work",
  },
  {
    imgSrc: "/assets/cisco logo.jpg",
    label: "Networking",
    desc: "LAN/WAN & Troubleshooting",
    category: "network",
    tag: "Work",
  },
  {
    imgSrc: "/assets/cctv.jpg",
    label: "CCTV Systems",
    desc: "Installation & Maintenance",
    category: "network",
    tag: "Internship",
  },
];

const categoryLabels = {
  web: "Web Development",
  database: "Database",
  tools: "Tools & Deployment",
  design: "Design",
  network: "Networking",
  system: "Systems",
};

const filters = [
  { label: "All", value: "all" },
  ...Object.entries(categoryLabels).map(([value, label]) => ({
    label,
    value,
  })),
];

const Skill = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const filterListRef = useRef(null);
  const [filterScroll, setFilterScroll] = useState({
    hasOverflow: false,
    canGoBack: false,
    canGoForward: false,
  });

  const updateFilterScroll = useCallback(() => {
    const filterList = filterListRef.current;

    if (!filterList) return;

    const maxScroll = filterList.scrollWidth - filterList.clientWidth;

    const nextScrollState = {
      hasOverflow: maxScroll > 2,
      canGoBack: filterList.scrollLeft > 2,
      canGoForward: filterList.scrollLeft < maxScroll - 2,
    };

    setFilterScroll((currentScrollState) => {
      const stateUnchanged = Object.keys(nextScrollState).every(
        (key) => currentScrollState[key] === nextScrollState[key],
      );

      return stateUnchanged ? currentScrollState : nextScrollState;
    });
  }, []);

  useEffect(() => {
    const filterList = filterListRef.current;

    if (!filterList) return undefined;

    const resizeObserver =
      typeof ResizeObserver === "function"
        ? new ResizeObserver(updateFilterScroll)
        : null;
    const updateFrame = window.requestAnimationFrame(updateFilterScroll);

    filterList.addEventListener("scroll", updateFilterScroll, {
      passive: true,
    });
    window.addEventListener("resize", updateFilterScroll, {
      passive: true,
    });
    resizeObserver?.observe(filterList);

    return () => {
      window.cancelAnimationFrame(updateFrame);
      filterList.removeEventListener("scroll", updateFilterScroll);
      window.removeEventListener("resize", updateFilterScroll);
      resizeObserver?.disconnect();
    };
  }, [updateFilterScroll]);

  const scrollFilters = (direction) => {
    const filterList = filterListRef.current;

    if (!filterList) return;

    filterList.scrollBy({
      left: direction * Math.max(filterList.clientWidth * 0.72, 160),
      behavior: "smooth",
    });
  };

  const handleFilterWheel = (event) => {
    const filterList = filterListRef.current;

    if (
      !filterList ||
      filterList.scrollWidth <= filterList.clientWidth ||
      Math.abs(event.deltaY) <= Math.abs(event.deltaX)
    ) {
      return;
    }

    const maxScroll = filterList.scrollWidth - filterList.clientWidth;
    const scrollingBack = event.deltaY < 0;
    const reachedEdge = scrollingBack
      ? filterList.scrollLeft <= 0
      : filterList.scrollLeft >= maxScroll - 1;

    if (reachedEdge) return;

    event.preventDefault();
    filterList.scrollBy({
      left: event.deltaY,
      behavior: "auto",
    });
  };

  const filteredSkills = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return skillItems.filter((skill) => {
      const matchesCategory = filter === "all" || skill.category === filter;
      const searchableText = [
        skill.label,
        skill.desc,
        skill.tag,
        categoryLabels[skill.category],
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedSearch === "" || searchableText.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [filter, search]);

  const resetFilters = () => {
    setFilter("all");
    setSearch("");
  };

  return (
    <section id="skills" className="section section-divider skills-section">
      <div className="skills-glow" aria-hidden="true" />

      <div className="container">
        <div className="skills-layout">
          <header className="skills-heading reveal-up">
            <div className="section-index">
              <span>03</span>
              <span aria-hidden="true" />
              <span>Skills</span>
            </div>

            <h2 className="headline-2">
              Technologies for products and infrastructure.
            </h2>

            <p className="skills-intro">
              My toolkit covers frontend, backend, databases, networking,
              operating systems, and the technologies behind reliable web
              products.
            </p>

            <div className="skills-summary" aria-label="Skill summary">
              <div>
                <strong>{skillItems.length}</strong>
                <span>Technologies</span>
              </div>

              <div>
                <strong>{Object.keys(categoryLabels).length}</strong>
                <span>Core areas</span>
              </div>
            </div>
          </header>

          <div className="skills-content">
            <div className="skills-controls reveal-up">
              <div className="skills-search-group">
                <label htmlFor="skill-search">Search</label>

                <div className="skills-search-field">
                  <span className="material-symbols-rounded" aria-hidden="true">
                    search
                  </span>

                  <input
                    id="skill-search"
                    type="search"
                    value={search}
                    placeholder="Search technologies"
                    autoComplete="off"
                    onChange={(event) => setSearch(event.target.value)}
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      aria-label="Clear search"
                    >
                      <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                      >
                        close
                      </span>
                    </button>
                  )}
                </div>
              </div>

              <div className="skills-filter-group">
                <div className="skills-filter-heading">
                  <p>Category</p>

                  <div
                    className={`skills-filter-navigation ${
                      filterScroll.hasOverflow ? "is-visible" : ""
                    }`}
                    aria-label="Scroll skill categories"
                  >
                    <button
                      type="button"
                      onClick={() => scrollFilters(-1)}
                      disabled={!filterScroll.canGoBack}
                      aria-label="Previous categories"
                    >
                      <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                      >
                        chevron_left
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => scrollFilters(1)}
                      disabled={!filterScroll.canGoForward}
                      aria-label="Next categories"
                    >
                      <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                      >
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>

                <div className="skills-filter-viewport">
                  <div
                    ref={filterListRef}
                    className="skills-filter-list"
                    role="group"
                    aria-label="Skill categories"
                    onWheel={handleFilterWheel}
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
                </div>
              </div>
            </div>

            <div className="skills-result-heading reveal-up">
              <p>Technology index</p>

              <span>
                {String(filteredSkills.length).padStart(2, "0")} /{" "}
                {String(skillItems.length).padStart(2, "0")}
              </span>
            </div>

            {filteredSkills.length > 0 ? (
              <div className="skills-grid reveal-up" aria-live="polite">
                {filteredSkills.map((skill, index) => (
                  <SkillCard
                    key={skill.label}
                    index={index + 1}
                    imgSrc={skill.imgSrc}
                    label={skill.label}
                    desc={skill.desc}
                    category={categoryLabels[skill.category]}
                    tag={skill.tag}
                  />
                ))}
              </div>
            ) : (
              <div className="skills-empty" aria-live="polite">
                <span className="material-symbols-rounded" aria-hidden="true">
                  search_off
                </span>

                <h3>No technologies found</h3>

                <p>Try another keyword or switch to a different category.</p>

                <button type="button" onClick={resetFilters}>
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
