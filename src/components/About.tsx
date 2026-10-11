import { PROFILE } from "../data/profile";

export function About() {
  const { education, skills } = PROFILE;

  return (
    <section id="about" className="bg-neutral-50 px-6 py-24 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-2xl font-bold">About</h2>
        <p className="mx-auto mb-10 max-w-[65ch] text-center text-base text-neutral-500 dark:text-neutral-400">
          {PROFILE.about}
        </p>

        <div className="mb-10 rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-semibold">{education.school}</h3>
            <span className="text-sm text-neutral-400 dark:text-neutral-500">{education.period}</span>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{education.degree}</p>
          <p className="text-sm font-medium text-accent-text">{education.note}</p>
        </div>

        <h3 className="mb-4 text-center text-lg font-semibold">Skills</h3>
        <dl className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="mb-1.5 text-sm font-semibold">{group.label}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-200 bg-white px-2.5 py-0.5 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
