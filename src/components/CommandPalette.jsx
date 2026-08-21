import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import { hasCaseStudy } from "../data/caseStudies";
import {
  getMotionMode,
  isReducedMotion,
  setMotionMode,
  subscribeToMotion,
} from "../lib/motionPreference";
import { scrollToTarget } from "../lib/smoothScroll";
import "../styles/command-palette-extras.css";

const EMAIL_ADDRESS = "hello@madebyrizky.my.id";
const RECENT_STORAGE_KEY = "portfolio-command-recent";
const MAX_RECENT_COMMANDS = 3;
const SHORTCUTS_QUERY = "?";

const paletteCopy = {
  en: {
    label: "command palette",
    placeholder: "search pages and actions",
    navigation: "navigation",
    actions: "quick actions",
    language: "language",
    recent: "recently used",
    results: "results",
    projects: "projects",
    openCaseStudy: "read the case study",
    openDemo: "open the live project",
    comingSoon: "coming soon",
    enableMotion: "turn animations on",
    enableMotionDescription: "override the reduced motion setting for this site",
    disableMotion: "turn animations off",
    disableMotionDescription: "keep the site still, nothing moves",
    followSystemMotion: "follow system motion setting",
    followSystemMotionDescription: "go back to whatever your device prefers",
    noResults: "no matching command found.",
    close: "close command palette",
    move: "move",
    select: "select",
    whatsNew: "what’s new",
    whatsNewDescription: "see the latest portfolio updates",
    theme: "switch to {theme} mode",
    copyEmail: "copy email address",
    emailCopied: "email copied",
    status: "open system status",
    currentSection: "go to {section}",
    switchLanguage: "switch to {language}",
    light: "light",
    dark: "dark",
    shortcuts: "keyboard shortcuts",
    shortcutsDescription: "see every shortcut on this site",
    shortcutsTitle: "keyboard shortcuts",
    shortcutsHint: "type anything to filter, press ↵ to run.",
    shortcutOpen: "open or close this palette",
    shortcutMove: "move between results",
    shortcutEdges: "jump to first or last result",
    shortcutSelect: "run the selected command",
    shortcutShortcuts: "show this list",
    shortcutClose: "close the palette",
    shortcutGoto: "go to home, about, skills, work, or contact",
  },
  id: {
    label: "command palette",
    placeholder: "cari halaman dan action",
    navigation: "navigation",
    actions: "quick action",
    language: "bahasa",
    recent: "terakhir dipakai",
    results: "hasil",
    projects: "proyek",
    openCaseStudy: "baca case study-nya",
    openDemo: "buka proyeknya langsung",
    comingSoon: "segera hadir",
    enableMotion: "nyalakan animasi",
    enableMotionDescription: "abaikan setting reduced motion khusus di situs ini",
    disableMotion: "matikan animasi",
    disableMotionDescription: "tampilan tetap diam, tidak ada yang bergerak",
    followSystemMotion: "ikuti setting perangkat",
    followSystemMotionDescription: "kembalikan ke preferensi device kamu",
    noResults: "command yang dicari ga ditemukan.",
    close: "tutup command palette",
    move: "geser",
    select: "pilih",
    whatsNew: "what’s new",
    whatsNewDescription: "lihat update terbaru portfolio",
    theme: "ubah ke mode {theme}",
    copyEmail: "copy alamat email",
    emailCopied: "email berhasil dicopy",
    status: "buka system status",
    currentSection: "buka {section}",
    switchLanguage: "ubah ke {language}",
    light: "light",
    dark: "dark",
    shortcuts: "keyboard shortcut",
    shortcutsDescription: "lihat semua shortcut di website ini",
    shortcutsTitle: "keyboard shortcut",
    shortcutsHint: "ketik apa aja buat nyaring, tekan ↵ buat jalanin.",
    shortcutOpen: "buka atau tutup palette ini",
    shortcutMove: "pindah antar hasil",
    shortcutEdges: "loncat ke hasil pertama atau terakhir",
    shortcutSelect: "jalankan command yang dipilih",
    shortcutShortcuts: "tampilkan daftar ini",
    shortcutClose: "tutup palette",
    shortcutGoto: "buka home, about, skills, work, atau contact",
  },
  jv: {
    label: "command palette",
    placeholder: "pados kaca lan printah",
    navigation: "navigation",
    actions: "quick action",
    language: "basa",
    recent: "pungkasan dipunagem",
    results: "asil",
    projects: "karya",
    openCaseStudy: "maos case study-nipun",
    openDemo: "bikak karyanipun langsung",
    comingSoon: "badhe enggal rawuh",
    enableMotion: "nyalakaken animasi",
    enableMotionDescription: "mboten ngginakaken setting reduced motion wonten situs punika",
    disableMotion: "mejahi animasi",
    disableMotionDescription: "tampilan tetep anteng, mboten wonten ingkang obah",
    followSystemMotion: "ndherek setting piranti",
    followSystemMotionDescription: "wangsul dhateng preferensi piranti panjenengan",
    noResults: "printah ingkang dipunpadosi mboten wonten.",
    close: "tutup command palette",
    move: "pindhah",
    select: "pilih",
    whatsNew: "what’s new",
    whatsNewDescription: "priksani update portfolio paling enggal",
    theme: "nggantos dados mode {theme}",
    copyEmail: "copy alamat email",
    emailCopied: "email sampun dipuncopy",
    status: "bikak system status",
    currentSection: "bikak {section}",
    switchLanguage: "nggantos dados {language}",
    light: "light",
    dark: "dark",
    shortcuts: "keyboard shortcut",
    shortcutsDescription: "priksani sedaya shortcut wonten situs punika",
    shortcutsTitle: "keyboard shortcut",
    shortcutsHint:
      "ketik menapa kemawon kangge nyaring, penet ↵ kangge nglampahaken.",
    shortcutOpen: "bikak utawi nutup palette punika",
    shortcutMove: "pindhah antawis asil",
    shortcutEdges: "tumuju asil kapisan utawi pungkasan",
    shortcutSelect: "nglampahaken printah ingkang dipunpilih",
    shortcutShortcuts: "nedahaken daftar punika",
    shortcutClose: "nutup palette",
    shortcutGoto: "bikak home, about, skills, work, utawi contact",
  },
};

const sectionCommands = [
  { key: "home", target: "#home", icon: "home" },
  { key: "about", target: "#about", icon: "person" },
  { key: "skills", target: "#skills", icon: "code" },
  { key: "projects", target: "#work", icon: "grid_view" },
  { key: "contact", target: "#contact", icon: "mail" },
];

const shortcutRows = [
  { id: "open", keys: ["⌘", "ctrl", "K"], labelKey: "shortcutOpen" },
  { id: "move", keys: ["↑", "↓"], labelKey: "shortcutMove" },
  { id: "edges", keys: ["home", "end"], labelKey: "shortcutEdges" },
  { id: "select", keys: ["↵"], labelKey: "shortcutSelect" },
  { id: "shortcuts", keys: ["?"], labelKey: "shortcutShortcuts" },
  { id: "close", keys: ["esc"], labelKey: "shortcutClose" },
  { id: "goto", keys: ["g", "h a s w c"], labelKey: "shortcutGoto" },
];

const normalizeText = (value) => value.toLocaleLowerCase().trim();

const readRecentCommands = () => {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(RECENT_STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];

    return Array.isArray(parsed)
      ? parsed.filter((id) => typeof id === "string")
      : [];
  } catch {
    return [];
  }
};

const isWordBoundary = (character) => /[\s\-_/.,:’'()]/.test(character);

/**
 * Subsequence matcher: every character of the query has to appear in order,
 * but gaps are allowed. Returns a score plus the matched character positions
 * so the label can highlight them.
 */
const fuzzyMatch = (text, query) => {
  if (!text) return null;

  const source = text.toLocaleLowerCase();
  const indices = [];
  let score = 0;
  let cursor = 0;
  let previousIndex = -1;

  for (const character of query) {
    const foundIndex = source.indexOf(character, cursor);

    if (foundIndex === -1) return null;

    if (foundIndex === previousIndex + 1) score += 9;

    if (foundIndex === 0) score += 14;
    else if (isWordBoundary(source[foundIndex - 1])) score += 10;

    score += Math.max(0, 6 - foundIndex * 0.15);

    indices.push(foundIndex);
    previousIndex = foundIndex;
    cursor = foundIndex + 1;
  }

  score += Math.max(0, 18 - (previousIndex - indices[0]));

  return { score, indices };
};

const scoreCommand = (command, query) => {
  const labelMatch = fuzzyMatch(command.label, query);
  const descriptionMatch = fuzzyMatch(command.description, query);
  const keywordMatch = fuzzyMatch(command.keywords, query);

  if (!labelMatch && !descriptionMatch && !keywordMatch) return null;

  const score = Math.max(
    labelMatch ? labelMatch.score : 0,
    descriptionMatch ? descriptionMatch.score * 0.55 : 0,
    keywordMatch ? keywordMatch.score * 0.4 : 0,
  );

  return { score, matches: labelMatch ? labelMatch.indices : [] };
};

const renderLabel = (label, matches) => {
  if (!matches?.length) return label;

  const matchedPositions = new Set(matches);

  return label.split("").map((character, index) =>
    matchedPositions.has(index) ? (
      <mark className="command-palette-highlight" key={`${index}-${character}`}>
        {character}
      </mark>
    ) : (
      <React.Fragment key={`${index}-${character}`}>{character}</React.Fragment>
    ),
  );
};

const CommandPalette = ({
  open,
  theme,
  hasUnreadUpdates,
  onClose,
  onOpenWhatsNew,
  onOpenCaseStudy = null,
  onToggleTheme,
}) => {
  const { language, languages, setLanguage, copy } = useLanguage();
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const resultsRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [recentIds, setRecentIds] = useState(readRecentCommands);
  const [motionMode, setMotionModeState] = useState(getMotionMode);
  const text = paletteCopy[language] ?? paletteCopy.en;
  const showShortcuts = normalizeText(query) === SHORTCUTS_QUERY;

  const navigateToSection = useCallback((target) => {
    window.requestAnimationFrame(() => {
      scrollToTarget(target, {
        headerOffset: target === "#home" ? 0 : 96,
      });
    });
  }, []);

  const copyEmail = useCallback(async () => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setFeedback(text.emailCopied);
      return;
    }

    window.location.href = `mailto:${EMAIL_ADDRESS}`;
  }, [text.emailCopied]);

  const commands = useMemo(() => {
    const motionReduced = isReducedMotion();

    const navigationCommands = sectionCommands.map(({ key, target, icon }) => {
      const sectionLabel = copy.navigation[key];

      return {
        id: `navigate-${key}`,
        group: text.navigation,
        icon,
        label: sectionLabel,
        description: text.currentSection.replace("{section}", sectionLabel),
        keywords: `${key} ${sectionLabel} page section`,
        action: () => navigateToSection(target),
      };
    });

    const quickActions = [
      {
        id: "whats-new",
        group: text.actions,
        icon: "new_releases",
        label: text.whatsNew,
        description: text.whatsNewDescription,
        keywords: "whats new update changelog latest release",
        unread: hasUnreadUpdates,
        action: onOpenWhatsNew,
      },
      {
        id: "toggle-theme",
        group: text.actions,
        icon: theme === "dark" ? "light_mode" : "dark_mode",
        label: text.theme.replace(
          "{theme}",
          theme === "dark" ? text.light : text.dark,
        ),
        description: theme === "dark" ? "light mode" : "dark mode",
        keywords: "theme appearance light dark mode",
        action: () => {
          window.setTimeout(() => {
            onToggleTheme({
              x: window.innerWidth / 2,
              y: window.innerHeight / 2,
            });
          }, 240);
        },
      },
      {
        id: "copy-email",
        group: text.actions,
        icon: "content_copy",
        label: text.copyEmail,
        description: EMAIL_ADDRESS,
        keywords: "email contact copy address",
        closeOnRun: false,
        action: copyEmail,
      },
      motionReduced
        ? {
            id: "motion-enable",
            group: text.actions,
            icon: "animation",
            label: text.enableMotion,
            description: text.enableMotionDescription,
            keywords: "motion animation enable on reduced accessibility",
            action: () => setMotionMode("full"),
          }
        : {
            id: "motion-disable",
            group: text.actions,
            icon: "motion_photos_off",
            label: text.disableMotion,
            description: text.disableMotionDescription,
            keywords: "motion animation disable off reduced accessibility",
            action: () => setMotionMode("reduced"),
          },
      {
        id: "keyboard-shortcuts",
        group: text.actions,
        icon: "keyboard",
        label: text.shortcuts,
        description: text.shortcutsDescription,
        keywords: "keyboard shortcut keys help cheatsheet ?",
        closeOnRun: false,
        action: () => {
          setQuery(SHORTCUTS_QUERY);
          inputRef.current?.focus();
        },
      },
      {
        id: "system-status",
        group: text.actions,
        icon: "monitor_heart",
        label: text.status,
        description: "status.madebyrizky.id",
        keywords: "system server status uptime services",
        action: () => {
          window.open(
            "https://status.madebyrizky.id",
            "_blank",
            "noopener,noreferrer",
          );
        },
      },
    ];

    const languageCommands = languages
      .filter(({ code }) => code !== language)
      .map(({ code, label }) => ({
        id: `language-${code}`,
        group: text.language,
        icon: "translate",
        label: text.switchLanguage.replace("{language}", label),
        description: label,
        keywords: `language bahasa basa ${code} ${label}`,
        action: () => {
          window.setTimeout(() => setLanguage(code), 240);
        },
      }));

    const projectCommands = projects.map((project, index) => {
      const localized = copy.work.projects[index] ?? {};
      const label = localized.title ?? project.title;
      const isComingSoon = Boolean(project.comingSoon);
      const canOpenCaseStudy =
        !isComingSoon &&
        typeof onOpenCaseStudy === "function" &&
        hasCaseStudy(project.slug);

      return {
        id: `project-${project.slug}`,
        group: text.projects,
        icon: isComingSoon
          ? "schedule"
          : canOpenCaseStudy
            ? "article"
            : "open_in_new",
        label,
        description: isComingSoon
          ? text.comingSoon
          : canOpenCaseStudy
            ? text.openCaseStudy
            : text.openDemo,
        keywords: [
          project.slug,
          project.title,
          label,
          project.category,
          copy.work.categories[project.category],
          ...project.tech,
          "project work portfolio case study",
        ].join(" "),
        action: () => {
          if (isComingSoon) {
            navigateToSection("#work");
            return;
          }

          if (canOpenCaseStudy) {
            onOpenCaseStudy(project.slug);
            return;
          }

          window.open(project.demo, "_blank", "noopener,noreferrer");
        },
      };
    });

    if (motionMode !== "system") {
      quickActions.push({
        id: "motion-system",
        group: text.actions,
        icon: "settings_suggest",
        label: text.followSystemMotion,
        description: text.followSystemMotionDescription,
        keywords: "motion animation system default reset device preference",
        action: () => setMotionMode("system"),
      });
    }

    return [
      ...navigationCommands,
      ...projectCommands,
      ...quickActions,
      ...languageCommands,
    ];
  }, [
    copy.navigation,
    copy.work,
    hasUnreadUpdates,
    motionMode,
    onOpenCaseStudy,
    language,
    languages,
    navigateToSection,
    onOpenWhatsNew,
    onToggleTheme,
    copyEmail,
    setLanguage,
    text,
    theme,
  ]);

  const filteredCommands = useMemo(() => {
    if (showShortcuts) return [];

    const normalizedQuery = normalizeText(query).replace(/\s+/g, "");

    if (!normalizedQuery) {
      const recentCommands = recentIds
        .map((id) => commands.find((command) => command.id === id))
        .filter(Boolean)
        .slice(0, MAX_RECENT_COMMANDS)
        .map((command) => ({ ...command, group: text.recent }));

      if (!recentCommands.length) return commands;

      const recentSet = new Set(recentCommands.map(({ id }) => id));

      return [
        ...recentCommands,
        ...commands.filter(({ id }) => !recentSet.has(id)),
      ];
    }

    return commands
      .map((command) => {
        const match = scoreCommand(command, normalizedQuery);

        return match
          ? {
              ...command,
              group: text.results,
              score: match.score,
              matches: match.matches,
            }
          : null;
      })
      .filter(Boolean)
      .sort((first, second) => second.score - first.score);
  }, [commands, query, recentIds, showShortcuts, text.recent, text.results]);

  const rememberCommand = useCallback((id) => {
    setRecentIds((currentIds) => {
      const nextIds = [
        id,
        ...currentIds.filter((currentId) => currentId !== id),
      ].slice(0, MAX_RECENT_COMMANDS);

      try {
        window.localStorage.setItem(
          RECENT_STORAGE_KEY,
          JSON.stringify(nextIds),
        );
      } catch {
        /* storage is optional: ignore quota or private mode errors */
      }

      return nextIds;
    });
  }, []);

  useEffect(() => subscribeToMotion(setMotionModeState), []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;

    const activeCommand = filteredCommands[activeIndex];

    if (!activeCommand) return;

    if (activeIndex === 0) {
      resultsRef.current?.scrollTo({ top: 0 });
      return;
    }

    document
      .getElementById(`command-${activeCommand.id}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, filteredCommands, open]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setFeedback("");
      return undefined;
    }

    previousFocusRef.current = document.activeElement;
    document.body.classList.add("command-palette-active");

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 60);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = panelRef.current?.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
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
      document.body.classList.remove("command-palette-active");
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [onClose, open]);

  const runCommand = (command) => {
    if (!command) return;

    rememberCommand(command.id);

    if (command.closeOnRun !== false) {
      onClose();
    }

    command.action();
  };

  const handleInputKeyDown = (event) => {
    if (!filteredCommands.length) return;

    const lastIndex = filteredCommands.length - 1;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((currentIndex) =>
        currentIndex >= lastIndex ? 0 : currentIndex + 1,
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((currentIndex) =>
        currentIndex <= 0 ? lastIndex : currentIndex - 1,
      );
    }

    if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(lastIndex);
    }

    if (event.key === "Enter") {
      event.preventDefault();
      runCommand(filteredCommands[activeIndex]);
    }
  };

  return (
    <div
      className={`command-palette-overlay ${open ? "is-open" : ""}`}
      aria-hidden={!open}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={panelRef}
        className="command-palette-panel"
        role="dialog"
        aria-modal="true"
        aria-label={text.label}
      >
        <div className="command-palette-search">
          <span className="material-symbols-rounded" aria-hidden="true">
            search
          </span>

          <input
            ref={inputRef}
            type="search"
            value={query}
            placeholder={text.placeholder}
            autoComplete="off"
            spellCheck="false"
            aria-controls="command-palette-results"
            aria-activedescendant={
              filteredCommands[activeIndex]
                ? `command-${filteredCommands[activeIndex].id}`
                : undefined
            }
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleInputKeyDown}
          />

          <button
            type="button"
            className="command-palette-close"
            onClick={onClose}
            aria-label={text.close}
          >
            <span className="material-symbols-rounded" aria-hidden="true">
              close
            </span>
          </button>
        </div>

        <div
          ref={resultsRef}
          id="command-palette-results"
          className="command-palette-results"
          role={showShortcuts ? "presentation" : "listbox"}
        >
          {showShortcuts ? (
            <div className="command-palette-shortcuts">
              <p className="command-palette-group" role="presentation">
                {text.shortcutsTitle}
              </p>

              {shortcutRows.map(({ id, keys, labelKey }) => (
                <div className="command-palette-shortcut" key={id}>
                  <p>{text[labelKey]}</p>

                  <span className="command-palette-shortcut-keys">
                    {keys.map((key) => (
                      <kbd key={key}>{key}</kbd>
                    ))}
                  </span>
                </div>
              ))}

              <p className="command-palette-shortcuts-hint">
                {text.shortcutsHint}
              </p>
            </div>
          ) : null}

          {!showShortcuts && filteredCommands.length
            ? filteredCommands.map((command, index) => {
                const showGroup =
                  index === 0 ||
                  filteredCommands[index - 1].group !== command.group;

                return (
                  <React.Fragment key={command.id}>
                    {showGroup ? (
                      <p className="command-palette-group" role="presentation">
                        {command.group}
                      </p>
                    ) : null}

                    <button
                      id={`command-${command.id}`}
                      type="button"
                      className={`command-palette-item ${
                        activeIndex === index ? "is-active" : ""
                      }`}
                      role="option"
                      aria-selected={activeIndex === index}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => runCommand(command)}
                    >
                      <span className="command-palette-item-icon">
                        <span
                          className="material-symbols-rounded"
                          aria-hidden="true"
                        >
                          {command.icon}
                        </span>

                        {command.unread ? (
                          <span
                            className="command-palette-unread"
                            aria-hidden="true"
                          />
                        ) : null}
                      </span>

                      <span className="command-palette-item-copy">
                        <strong>
                          {renderLabel(command.label, command.matches)}
                        </strong>
                        <small>{command.description}</small>
                      </span>

                      <span
                        className="material-symbols-rounded command-palette-enter"
                        aria-hidden="true"
                      >
                        keyboard_return
                      </span>
                    </button>
                  </React.Fragment>
                );
              })
            : null}

          {!showShortcuts && !filteredCommands.length ? (
            <div className="command-palette-empty">
              <span className="material-symbols-rounded" aria-hidden="true">
                search_off
              </span>
              <p>{text.noResults}</p>
            </div>
          ) : null}
        </div>

        <div className="command-palette-footer">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd>
            {text.move}
          </span>
          <span>
            <kbd>↵</kbd>
            {text.select}
          </span>
          <span className="command-palette-footer-shortcuts">
            <kbd>?</kbd>
            {text.shortcuts}
          </span>
          <span className="command-palette-feedback" aria-live="polite">
            {feedback}
          </span>
        </div>
      </section>
    </div>
  );
};

CommandPalette.propTypes = {
  open: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  hasUnreadUpdates: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpenWhatsNew: PropTypes.func.isRequired,
  onOpenCaseStudy: PropTypes.func,
  onToggleTheme: PropTypes.func.isRequired,
};

export default CommandPalette;
