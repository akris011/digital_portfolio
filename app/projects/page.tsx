import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <p className="section-label">Projects</p>
      <h1 className="section-heading mt-3">Selected engineering work across embedded systems, robotics, and software.</h1>
      <p className="mt-6 max-w-3xl text-zinc-300">
        Each project focuses on implementation details and measurable outcomes: range, reliability, throughput, team scale, or
        user impact.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
