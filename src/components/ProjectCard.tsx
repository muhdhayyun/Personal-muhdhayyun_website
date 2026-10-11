import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const wip = project.status === "wip";
  const preview = (
    <img
      src={project.image}
      alt={`${project.title} preview`}
      loading="lazy"
      className={`aspect-video w-full border-b border-neutral-200 bg-neutral-100 object-cover dark:border-neutral-800 dark:bg-neutral-800 ${
        wip ? "brightness-75 saturate-50" : ""
      }`}
    />
  );

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 ${
        wip ? "opacity-70 hover:opacity-100" : ""
      }`}
    >
      <div className="relative">
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}>
            {preview}
          </a>
        ) : (
          preview
        )}
        {wip && (
          <span className="absolute top-3 right-3 rounded-full bg-neutral-950/80 px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-widest text-accent uppercase">
            WIP
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="flex-1 text-sm text-neutral-500 dark:text-neutral-400">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-1 flex items-center gap-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent-text hover:underline"
            >
              Live Demo →
            </a>
          ) : (
            <span className="text-sm font-medium text-neutral-400 dark:text-neutral-500">
              Live demo coming soon
            </span>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent-text hover:underline"
            >
              Code →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
