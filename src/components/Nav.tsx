import { PROFILE } from "../data/profile";
import type { Theme } from "../hooks/useTheme";

interface NavProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Nav({ theme, onToggleTheme }: NavProps) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white/85 px-6 py-4 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/85">
      <a href="#hero" className="font-bold text-accent-text">
        {PROFILE.initials}
      </a>

      <nav className="flex gap-4 sm:gap-6">
        <a
          href="#projects"
          className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          Experience
        </a>
        <a
          href="#about"
          className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          Contact
        </a>
      </nav>

      <button
        type="button"
        onClick={onToggleTheme}
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-sm transition-colors hover:border-accent dark:border-neutral-800"
      >
        {theme === "dark" ? "☀" : "◐"}
      </button>
    </header>
  );
}
