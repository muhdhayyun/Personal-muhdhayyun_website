import { PROJECTS } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="bg-neutral-50 px-6 py-24 dark:bg-neutral-900/40">
      <h2 className="mb-3 text-center text-2xl font-bold">Projects</h2>
      <p className="mx-auto mb-10 max-w-[55ch] text-center text-sm text-neutral-500 dark:text-neutral-400">
        Live demos are still being deployed. For now, these cards are a preview of what's coming.
      </p>
      <div className="mx-auto grid max-w-5xl grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
