import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useLenis } from "lenis/react";
import { useLanguage } from "../context/LanguageContext";
import commandPaletteCopy from "../data/commandPaletteCopy";
import "./CommandPalette.css";

const RECENT_STORAGE_KEY = "portfolio-command-recent";
const RECENT_LIMIT = 3;
const STATUS_DURATION = 2200;
const CLOSE_DELAY = 220;

const EMAIL_ADDRESS = "hello@madebyrizky.my.id";
const INSTAGRAM_URL = "https://www.instagram.com/thinkaboutky___";
const CV_PATH = "/assets/CV - Rizky Maulana.pdf";

const GROUP_ORDER = [
  "recent",
  "navigate",
  "projects",
  "actions",
  "appearance",
  "language",
];

const smoothScrollOptions = {
  duration: 1.2,
  easing: (progress) =>
    progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2,
};

const navigationTargets = [
  { id: "nav-home", labelKey: "home", target: "#home", icon: "home" },
  { id: "nav-about", labelKey: "about", target: "#about", icon: "person" },
  { id: "nav-skills", labelKey: "skills", target: "#skills", icon: "code" },
  { id: "nav-work", labelKey: "projects", target: "#work", icon: "grid_view" },
  { id: "nav-contact", labelKey: "contact", target: "#contact", icon: "mail" },
];

/*
  Mirrors the demo links declared in Work.jsx. Kept here on purpose so that
  Work.jsx does not need to change.
*/
const projectTargets = [
  {
    id: "project-sports-booking",
    index: 0,
    icon: "stadium",
    link: "https://sportix.madebyrizky.my.id",
    keywords: ["sports", "booking", "sportix", "laravel", "filament", "livewire"],
  },
  {
    id: "project-music-streaming",
    index: 1,
    icon: "graphic_eq",
    link: "/assets/Web Music/music.html",
    keywords: ["music", "musik", "streaming", "api", "javascript"],
  },
  {
    id: "project-bookshelf",
    index: 2,
    icon: "menu_book",
    link: "/assets/Bookshelf App/book.html",
    keywords: ["bookshelf", "book", "buku", "reading", "localstorage"],
  },
  {
    id: "project-qr-generator",
    index: 3,
    icon: "qr_code_2",
    link: "/assets/QR/index.html",
    keywords: ["qr", "generator", "code", "kode", "api"],
  },
  {
    id: "project-calculator",
    index: 4,
    icon: "calculate",
    link: "/assets/Calculator/index.html",
    keywords: ["calculator", "kalkulator", "tool", "utility"],
  },
  {
    id: "project-calendar",
    index: 5,
    icon: "calendar_month",
    link: "/assets/Calender/index.html",
    keywords: ["calendar", "kalender", "event", "agenda"],
  },
  {
    id: "project-finance-tracker",
    index: 6,
    icon: "savings",
    link: "/assets/Personal Finance Tracker/index.html",
    keywords: ["finance", "keuangan", "budget", "tracker", "uang"],
  },
];

const staticKeywords = {
  "nav-home": ["home", "beranda", "awal", "hero", "top"],
  "nav-about": ["about", "tentang", "profil", "profile", "bio", "story"],
  "nav-skills": ["skills", "keahlian", "stack", "tech", "teknologi", "tools"],
  "nav-work": ["work", "projects", "proyek", "karya", "portfolio"],
  "nav-contact": ["contact", "kontak", "hubungi", "hire", "email", "form"],
  "action-cv": ["cv", "resume", "curriculum vitae", "download", "unduh", "pdf"],
  "action-copy-email": ["copy", "salin", "email", "surel", "mail", "address"],
  "action-send-email": ["email", "mail", "kirim", "send", "write", "tulis"],
  "action-instagram": ["instagram", "ig", "social", "sosial", "media"],
  "action-back-to-top": ["top", "atas", "scroll", "back", "kembali", "naik"],
  "appearance-theme": [
    "theme",
    "tema",
    "dark",
    "light",
    "gelap",
    "terang",
    "mode",
    "appearance",
    "tampilan",
  ],
  "language-en": ["english", "inggris", "en", "language", "bahasa", "basa"],
  "language-id": ["indonesia", "indonesian", "id", "language", "bahasa"],
  "language-jv": ["jawa", "javanese", "krama", "jv", "language", "bahasa", "basa"],
};

const normalize = (value) =>
  String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const isSubsequence = (query, text) => {
  let cursor = 0;

  for (let index = 0; index < text.length && cursor < query.length; index += 1) {
    if (text[index] === query[cursor]) {
      cursor += 1;
    }
  }

  return cursor === query.length;
};

const scoreCommand = (command, query) => {
  const fields = [
    { text: normalize(command.label), penalty: 0 },
    { text: normalize(command.hint), penalty: 60 },
    { text: normalize((command.keywords ?? []).join(" ")), penalty: 90 },
  ];

  let best = -1;

  fields.forEach(({ text, penalty }) => {
    if (!text) return;

    const position = text.indexOf(query);

    if (position === 0) {
      best = Math.max(best, 1000 - penalty);
      return;
    }

    if (position > 0) {
      best = Math.max(best, 760 - penalty - Math.min(position, 40));
      return;
    }

    if (isSubsequence(query, text)) {
      best = Math.max(best, 420 - penalty);
    }
  });

  return best;
};

const readRecentIds = () => {
  try {
    const stored = window.localStorage.getItem(RECENT_STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];

    return Array.isArray(parsed)
      ? parsed.filter((value) => typeof value === "string")
      : [];
  } catch {
    return [];
  }
};

const CommandPalette = ({ theme, onToggleTheme, disabled = false }) => {
  const {
    copy,
    language,
    languages,
    setLanguage,
    isLanguageTransitioning,
  } = useLanguage();
  const lenis = useLenis();

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [status, setStatus] = useState("");
  const [recentIds, setRecentIds] = useState([]);

  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);
  const optionRefs = useRef(new Map());
  const statusTimerRef = useRef(0);
  const previousFocusRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = lenis;
  }, [lenis]);

  const paletteCopy = commandPaletteCopy[language] ?? commandPaletteCopy.en;

  useEffect(() => {
    setRecentIds(readRecentIds());
  }, []);

  useEffect(
    () => () => {
      window.clearTimeout(statusTimerRef.current);
    },
    [],
  );

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const showStatus = useCallback((message) => {
    window.clearTimeout(statusTimerRef.current);
    setStatus(message);

    statusTimerRef.current = window.setTimeout(() => {
      setStatus("");
    }, STATUS_DURATION);
  }, []);

  const scrollToTarget = useCallback(
    (target) => {
      const section = document.querySelector(target);

      if (!section) return;

      if (lenis) {
        lenis.scrollTo(section, {
          ...smoothScrollOptions,
          offset: target === "#home" ? 0 : -96,
        });

        return;
      }

      section.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [lenis],
  );

  const commands = useMemo(() => {
    const navigationCommands = navigationTargets.map(
      ({ id, labelKey, target, icon }) => ({
        id,
        group: "navigate",
        icon,
        label: copy.navigation[labelKey],
        hint: paletteCopy.navigateHint,
        keywords: staticKeywords[id],
        run: () => {
          window.setTimeout(() => {
            scrollToTarget(target);
          }, CLOSE_DELAY);
        },
      }),
    );

    const projectCommands = projectTargets.map(
      ({ id, index, icon, link, keywords }) => {
        const project = copy.work.projects[index] ?? {};

        return {
          id,
          group: "projects",
          icon,
          label: project.title ?? "",
          hint: paletteCopy.projectHint,
          keywords: [...keywords, project.desc ?? ""],
          run: () => {
            window.open(link, "_blank", "noopener,noreferrer");
          },
        };
      },
    );

    const actionCommands = [
      {
        id: "action-cv",
        group: "actions",
        icon: "description",
        label: paletteCopy.actions.cv,
        hint: paletteCopy.actions.cvHint,
        keywords: staticKeywords["action-cv"],
        run: () => {
          window.setTimeout(() => {
            Swal.fire({
              title: copy.modal.title,
              text: copy.modal.text,
              icon: "info",
              confirmButtonText: copy.modal.confirm,
              buttonsStyling: false,
              heightAuto: false,
              customClass: {
                container: "ax-swal-container",
                popup: "ax-swal-popup",
                icon: "ax-swal-icon",
                title: "ax-swal-title",
                htmlContainer: "ax-swal-content",
                confirmButton: "ax-swal-confirm",
              },
              showClass: { popup: "ax-swal-enter" },
              hideClass: { popup: "ax-swal-leave" },
            });
          }, CLOSE_DELAY);
        },
      },
      {
        id: "action-copy-email",
        group: "actions",
        icon: "content_copy",
        label: paletteCopy.actions.copyEmail,
        hint: EMAIL_ADDRESS,
        keywords: staticKeywords["action-copy-email"],
        keepOpen: true,
        run: async () => {
          try {
            if (navigator.clipboard?.writeText) {
              await navigator.clipboard.writeText(EMAIL_ADDRESS);
            } else {
              throw new Error("Clipboard API unavailable");
            }

            showStatus(paletteCopy.actions.copyEmailDone);
          } catch {
            showStatus(paletteCopy.actions.copyEmailFailed);
          }
        },
      },
      {
        id: "action-send-email",
        group: "actions",
        icon: "outgoing_mail",
        label: paletteCopy.actions.sendEmail,
        hint: EMAIL_ADDRESS,
        keywords: staticKeywords["action-send-email"],
        run: () => {
          window.location.href = `mailto:${EMAIL_ADDRESS}`;
        },
      },
      {
        id: "action-instagram",
        group: "actions",
        icon: "photo_camera",
        label: paletteCopy.actions.instagram,
        hint: "@thinkaboutky___",
        keywords: staticKeywords["action-instagram"],
        run: () => {
          window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "action-back-to-top",
        group: "actions",
        icon: "keyboard_double_arrow_up",
        label: paletteCopy.actions.backToTop,
        hint: copy.navigation.home,
        keywords: staticKeywords["action-back-to-top"],
        run: () => {
          window.setTimeout(() => {
            if (lenis) {
              lenis.scrollTo(0, smoothScrollOptions);
              return;
            }

            window.scrollTo({ top: 0, behavior: "smooth" });
          }, CLOSE_DELAY);
        },
      },
    ];

    const appearanceCommands = [
      {
        id: "appearance-theme",
        group: "appearance",
        icon: theme === "dark" ? "light_mode" : "dark_mode",
        label:
          theme === "dark"
            ? paletteCopy.actions.lightMode
            : paletteCopy.actions.darkMode,
        hint: paletteCopy.actions.themeHint,
        keywords: staticKeywords["appearance-theme"],
        run: () => {
          window.setTimeout(() => {
            onToggleTheme();
          }, CLOSE_DELAY);
        },
      },
    ];

    const languageCommands = languages.map(({ code, label }) => ({
      id: `language-${code}`,
      group: "language",
      icon: "translate",
      label: paletteCopy.languages[code] ?? label,
      hint: label,
      keywords: staticKeywords[`language-${code}`],
      isActive: code === language,
      trailing: code === language ? paletteCopy.activeLanguage : undefined,
      run: () => {
        if (code === language) return;

        window.setTimeout(() => {
          setLanguage(code);
        }, CLOSE_DELAY);
      },
    }));

    return [
      ...navigationCommands,
      ...projectCommands,
      ...actionCommands,
      ...appearanceCommands,
      ...languageCommands,
    ];
  }, [
    copy,
    language,
    languages,
    lenis,
    onToggleTheme,
    paletteCopy,
    scrollToTarget,
    setLanguage,
    showStatus,
    theme,
  ]);

  const groupedResults = useMemo(() => {
    const normalizedQuery = normalize(query);
    const buckets = new Map();

    const pushToBucket = (group, command, score) => {
      if (!buckets.has(group)) {
        buckets.set(group, []);
      }

      buckets.get(group).push({ command, score });
    };

    if (!normalizedQuery) {
      recentIds.forEach((id) => {
        const command = commands.find((item) => item.id === id);

        if (command) {
          pushToBucket("recent", command, 0);
        }
      });

      const recentSet = new Set(
        (buckets.get("recent") ?? []).map(({ command }) => command.id),
      );

      commands.forEach((command) => {
        if (recentSet.has(command.id)) return;

        pushToBucket(command.group, command, 0);
      });
    } else {
      commands.forEach((command) => {
        const score = scoreCommand(command, normalizedQuery);

        if (score >= 0) {
          pushToBucket(command.group, command, score);
        }
      });

      buckets.forEach((entries) => {
        entries.sort((first, second) => second.score - first.score);
      });
    }

    return GROUP_ORDER.filter((group) => (buckets.get(group) ?? []).length > 0)
      .map((group) => ({
        group,
        label: paletteCopy.groups[group],
        items: buckets.get(group).map(({ command }) => command),
      }));
  }, [commands, paletteCopy, query, recentIds]);

  const flatResults = useMemo(
    () => groupedResults.flatMap(({ items }) => items),
    [groupedResults],
  );

  const resultCount = flatResults.length;

  useEffect(() => {
    setActiveIndex(0);
  }, [query, isOpen]);

  useEffect(() => {
    if (activeIndex > resultCount - 1) {
      setActiveIndex(resultCount > 0 ? resultCount - 1 : 0);
    }
  }, [activeIndex, resultCount]);

  const rememberCommand = useCallback((commandId) => {
    setRecentIds((currentIds) => {
      const nextIds = [
        commandId,
        ...currentIds.filter((id) => id !== commandId),
      ].slice(0, RECENT_LIMIT);

      try {
        window.localStorage.setItem(
          RECENT_STORAGE_KEY,
          JSON.stringify(nextIds),
        );
      } catch {
        /* storage unavailable — recents stay in memory only */
      }

      return nextIds;
    });
  }, []);

  const runCommand = useCallback(
    (command) => {
      if (!command) return;

      rememberCommand(command.id);

      if (!command.keepOpen) {
        setIsOpen(false);
      }

      command.run();
    },
    [rememberCommand],
  );

  /* Global shortcut: Ctrl + K on Windows/Linux, Cmd + K on macOS. */
  useEffect(() => {
    const handleShortcut = (event) => {
      const key = typeof event.key === "string" ? event.key.toLowerCase() : "";

      if (key !== "k" || !(event.metaKey || event.ctrlKey) || event.altKey) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (disabled) return;

      setIsOpen((currentValue) => !currentValue);
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, [disabled]);

  /* Optional external trigger, e.g. a button somewhere else in the app. */
  useEffect(() => {
    const openPalette = () => {
      if (disabled) return;

      setIsOpen(true);
    };

    window.openCommandPalette = openPalette;
    window.addEventListener("command-palette:open", openPalette);

    return () => {
      window.removeEventListener("command-palette:open", openPalette);

      if (window.openCommandPalette === openPalette) {
        delete window.openCommandPalette;
      }
    };
  }, [disabled]);

  useEffect(() => {
    if (disabled && isOpen) {
      setIsOpen(false);
    }
  }, [disabled, isOpen]);

  /* Pause Lenis while the palette is open, restore focus when it closes. */
  useEffect(() => {
    if (!isOpen) return undefined;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    document.body.classList.add("command-palette-open");
    lenisRef.current?.stop();

    const focusFrame = window.requestAnimationFrame(() => {
      inputRef.current?.focus({ preventScroll: true });
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.classList.remove("command-palette-open");
      lenisRef.current?.start();

      setQuery("");
      setStatus("");
      window.clearTimeout(statusTimerRef.current);
      previousFocusRef.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  /* Keep the highlighted option visible while arrowing through the list. */
  useEffect(() => {
    if (!isOpen) return;

    const activeCommand = flatResults[activeIndex];

    if (!activeCommand) return;

    optionRefs.current
      .get(activeCommand.id)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, flatResults, isOpen]);

  const moveActiveIndex = useCallback(
    (step) => {
      setActiveIndex((currentIndex) => {
        if (resultCount === 0) return 0;

        return (currentIndex + step + resultCount) % resultCount;
      });
    },
    [resultCount],
  );

  const handlePanelKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveActiveIndex(1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveActiveIndex(-1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(resultCount > 0 ? resultCount - 1 : 0);
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      runCommand(flatResults[activeIndex]);
      return;
    }

    if (event.key === "Tab") {
      const focusable = panelRef.current?.querySelectorAll(
        'button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), a[href]:not([tabindex="-1"])',
      );

      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  const activeCommandId = flatResults[activeIndex]?.id;
  const busy = isLanguageTransitioning;

  let renderIndex = -1;

  return (
    <div
      className={`command-palette-root ${isOpen ? "is-open" : ""}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="command-palette-scrim"
        tabIndex={-1}
        aria-label={paletteCopy.close}
        onClick={close}
      />

      <div
        ref={panelRef}
        className="command-palette-panel"
        role="dialog"
        aria-modal="true"
        aria-label={paletteCopy.dialogLabel}
        onKeyDown={handlePanelKeyDown}
      >
        <div className="command-palette-search">
          <span
            className="material-symbols-rounded command-palette-search-icon"
            aria-hidden="true"
          >
            search
          </span>

          <input
            ref={inputRef}
            type="text"
            className="command-palette-input"
            value={query}
            placeholder={paletteCopy.placeholder}
            aria-label={paletteCopy.inputLabel}
            role="combobox"
            aria-expanded={isOpen}
            aria-controls="command-palette-list"
            aria-activedescendant={
              activeCommandId ? `command-option-${activeCommandId}` : undefined
            }
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            disabled={busy}
            onChange={(event) => setQuery(event.target.value)}
          />

          {query ? (
            <button
              type="button"
              className="command-palette-clear"
              aria-label={paletteCopy.clearSearch}
              onClick={() => {
                setQuery("");
                inputRef.current?.focus({ preventScroll: true });
              }}
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                close
              </span>
            </button>
          ) : null}

          <span className="command-palette-key" aria-hidden="true">
            ESC
          </span>
        </div>

        <div
          ref={resultsRef}
          id="command-palette-list"
          className="command-palette-results"
          role="listbox"
          aria-label={paletteCopy.listLabel}
        >
          {resultCount === 0 ? (
            <div className="command-palette-empty">
              <span className="material-symbols-rounded" aria-hidden="true">
                search_off
              </span>

              <h3>{paletteCopy.emptyTitle}</h3>
              <p>{paletteCopy.emptyText}</p>
            </div>
          ) : (
            groupedResults.map(({ group, label, items }) => (
              <div className="command-palette-group" key={group}>
                <div className="command-palette-group-label">
                  <span>{label}</span>

                  <span className="command-palette-group-count">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>

                {items.map((command) => {
                  renderIndex += 1;

                  const currentIndex = renderIndex;
                  const isActive = currentIndex === activeIndex;

                  return (
                    <button
                      key={command.id}
                      id={`command-option-${command.id}`}
                      ref={(element) => {
                        if (element) {
                          optionRefs.current.set(command.id, element);
                        } else {
                          optionRefs.current.delete(command.id);
                        }
                      }}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      tabIndex={-1}
                      className={`command-palette-option ${
                        isActive ? "is-active" : ""
                      }`}
                      onMouseMove={() => {
                        if (!isActive) {
                          setActiveIndex(currentIndex);
                        }
                      }}
                      onClick={() => runCommand(command)}
                    >
                      <span
                        className="command-palette-option-icon"
                        aria-hidden="true"
                      >
                        <span className="material-symbols-rounded">
                          {command.icon}
                        </span>
                      </span>

                      <span className="command-palette-option-copy">
                        <span className="command-palette-option-label">
                          {command.label}
                        </span>

                        {command.hint ? (
                          <span className="command-palette-option-hint">
                            {command.hint}
                          </span>
                        ) : null}
                      </span>

                      <span className="command-palette-option-trailing">
                        {command.trailing ? (
                          <span>{command.trailing}</span>
                        ) : null}

                        {command.isActive ? (
                          <span
                            className="material-symbols-rounded command-palette-option-check"
                            aria-hidden="true"
                          >
                            check
                          </span>
                        ) : (
                          <span
                            className="material-symbols-rounded command-palette-option-enter"
                            aria-hidden="true"
                          >
                            keyboard_return
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        <div className="command-palette-footer">
          {status ? (
            <span className="command-palette-status" role="status">
              <span className="material-symbols-rounded" aria-hidden="true">
                check_circle
              </span>

              {status}
            </span>
          ) : (
            <div className="command-palette-hints">
              <span className="command-palette-hint">
                <span className="command-palette-hint-keys" aria-hidden="true">
                  <span className="command-palette-key">↑</span>
                  <span className="command-palette-key">↓</span>
                </span>

                {paletteCopy.hints.navigate}
              </span>

              <span className="command-palette-hint">
                <span className="command-palette-key" aria-hidden="true">
                  ↵
                </span>

                {paletteCopy.hints.select}
              </span>

              <span className="command-palette-hint">
                <span className="command-palette-key" aria-hidden="true">
                  ESC
                </span>

                {paletteCopy.hints.close}
              </span>
            </div>
          )}

          <span className="command-palette-brand" aria-hidden="true">
            {String(resultCount).padStart(2, "0")}{" "}
            {resultCount === 1
              ? paletteCopy.resultCountSingle
              : paletteCopy.resultCount}
          </span>
        </div>
      </div>
    </div>
  );
};

CommandPalette.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default CommandPalette;
