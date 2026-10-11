import { PROFILE } from "../data/profile";

export function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center">
      <p className="mb-2 text-sm font-semibold text-accent-text">Hi, I'm</p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">{PROFILE.name}</h1>
      <p className="mx-auto mb-3 max-w-[44ch] text-base text-neutral-500 sm:text-lg dark:text-neutral-400">
        {PROFILE.title}
      </p>
      <p className="mb-8 text-sm text-neutral-400 dark:text-neutral-500">{PROFILE.tagline}</p>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-neutral-200 px-5 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent dark:border-neutral-800"
        >
          GitHub
        </a>
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-neutral-200 px-5 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent dark:border-neutral-800"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${PROFILE.email}`}
          className="rounded-full border border-accent bg-accent px-5 py-2 text-sm font-medium text-accent-contrast transition-all hover:-translate-y-0.5"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
