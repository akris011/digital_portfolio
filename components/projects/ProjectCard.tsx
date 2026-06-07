import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-zinc-950/80 p-6 transition hover:border-[var(--duke-blue)]/60 hover:shadow-[0_0_40px_rgba(0,48,135,0.25)]">
      <p className="text-xs tracking-[0.18em] text-zinc-400 uppercase">{project.period}</p>
      <h3 className="mt-2 text-xl font-semibold text-zinc-100">{project.title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{project.tagline}</p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {project.impact.slice(0, 2).map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[var(--duke-blue-glow)]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-200">
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center text-sm font-medium text-[var(--duke-blue-glow)] transition group-hover:text-white"
      >
        View project details →
      </Link>
    </article>
  );
}
