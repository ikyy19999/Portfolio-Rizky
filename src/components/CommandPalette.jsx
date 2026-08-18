import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import { useLenis } from "lenis/react";
import { useLanguage } from "../context/LanguageContext";

const EMAIL_ADDRESS = "hello@madebyrizky.my.id";

const paletteCopy = {
  en: {
    label: "command palette",
    placeholder: "search pages and actions",
    navigation: "navigation",
    actions: "quick actions",
    language: "language",
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
  },
  id: {
    label: "command palette",
    placeholder: "cari halaman dan action",
    navigation: "navigation",
    actions: "quick action",
    language: "bahasa",
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
  },
  jv: {
    label: "command palette",
    placeholder: "pados kaca lan printah",
    navigation: "navigation",
    actions: "quick action",
    language: "basa",
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
  },
};

const sectionCommands = [
  { key: "home", target: "#home", icon: "home" },
  { key: "about", target: "#about", icon: "person" },
  { key: "skills", target: "#skills", icon: "code" },
  { key: "projects", target: "#work", icon: "grid_view" },
  { key: "contact", target: "#contact", icon: "mail" },
];

const normalizeText = (value) => value.toLocaleLowerCase().trim();

const CommandPalette = ({
  open,
  theme,
  hasUnreadUpdates,
  onClose,
  onOpenWhatsNew,
  onToggleTheme,
}) => {
  const { language, languages, setLanguage, copy } = useLanguage();
  const lenis = useLenis();
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const text = paletteCopy[language] ?? paletteCopy.en;

  const navigateToSection = useCallback(
    (target) => {
      const section = document.querySelector(target);

      if (!section) return;

      window.requestAnimationFrame(() => {
        if (lenis) {
          lenis.scrollTo(section, {
            duration: 1.2,
            offset: target === "#home" ? 0 : -96,
          });
          return;
        }

        section.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },
    [lenis],
  );

  const copyEmail = useCallback(async () => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setFeedback(text.emailCopied);
      return;
    }

    window.location.href = `mailto:${EMAIL_ADDRESS}`;
  }, [text.emailCopied]);

  const commands = useMemo(() => {
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

    return [...navigationCommands, ...quickActions, ...languageCommands];
  }, [
    copy.navigation,
    hasUnreadUpdates,
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
    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) return commands;

    return commands.filter(({ label, description, keywords }) =>
      normalizeText(`${label} ${description} ${keywords}`).includes(
        normalizedQuery,
      ),
    );
  }, [commands, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

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

    if (command.closeOnRun !== false) {
      onClose();
    }

    command.action();
  };

  const handleInputKeyDown = (event) => {
    if (!filteredCommands.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((currentIndex) =>
        Math.min(currentIndex + 1, filteredCommands.length - 1),
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((currentIndex) => Math.max(currentIndex - 1, 0));
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
      data-lenis-prevent
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
          id="command-palette-results"
          className="command-palette-results"
          role="listbox"
          data-lenis-prevent
        >
          {filteredCommands.length ? (
            filteredCommands.map((command, index) => {
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
                      <strong>{command.label}</strong>
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
          ) : (
            <div className="command-palette-empty">
              <span className="material-symbols-rounded" aria-hidden="true">
                search_off
              </span>
              <p>{text.noResults}</p>
            </div>
          )}
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
  onToggleTheme: PropTypes.func.isRequired,
};

export default CommandPalette;
