import { PROFILE } from "../data/profile";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="mb-10 text-center text-2xl font-bold">Experience</h2>
      <div className="flex flex-col gap-8">
        {PROFILE.experience.map((job) => (
          <article key={`${job.org}-${job.role}`} className="border-l-2 border-accent pl-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold">{job.org}</h3>
              <span className="text-sm text-neutral-400 dark:text-neutral-500">{job.period}</span>
            </div>
            <p className="mb-2 text-sm font-medium text-accent-text">{job.role}</p>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-neutral-500 dark:text-neutral-400">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
