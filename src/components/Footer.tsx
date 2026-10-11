import { PROFILE } from "../data/profile";

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-neutral-200 px-6 py-16 text-center dark:border-neutral-800"
    >
      <p className="mb-1 text-neutral-500 dark:text-neutral-400">Interested in working together?</p>
      <a
        href={`mailto:${PROFILE.email}`}
        className="mb-6 inline-block text-xl font-semibold text-accent-text hover:underline"
      >
        {PROFILE.email}
      </a>

      <div className="mb-6 flex justify-center gap-6">
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-neutral-500 transition-colors hover:text-accent-text dark:text-neutral-400"
        >
          GitHub
        </a>
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-neutral-500 transition-colors hover:text-accent-text dark:text-neutral-400"
        >
          LinkedIn
        </a>
      </div>

      <p className="text-xs text-neutral-400 dark:text-neutral-500">
        &copy; {new Date().getFullYear()} {PROFILE.name}. Built with React &amp; TypeScript.
      </p>
    </footer>
  );
}
