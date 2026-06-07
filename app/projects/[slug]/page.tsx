import Link from "next/link";
import { notFound } from "next/navigation";
import { projectMap } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectMap[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-20">
      <Link href="/projects" className="text-sm text-[var(--duke-blue-glow)] hover:text-white">
        ← Back to all projects
      </Link>
      <p className="mt-8 text-xs tracking-[0.18em] text-zinc-400 uppercase">{project.period}</p>
      <h1 className="mt-3 text-4xl font-semibold text-zinc-100">{project.title}</h1>
      <p className="mt-2 text-zinc-300">{project.role}</p>
      <p className="mt-6 text-lg text-zinc-200">{project.story}</p>

      <section className="mt-10 card">
        <h2 className="text-xl font-semibold text-zinc-100">Outcomes</h2>
        <ul className="mt-4 space-y-3 text-zinc-300">
          {project.impact.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[var(--duke-blue-glow)]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <article className="card">
          <h2 className="text-lg font-semibold text-zinc-100">Technical challenges</h2>
          <ul className="mt-3 space-y-2 text-zinc-300">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h2 className="text-lg font-semibold text-zinc-100">What is next</h2>
          <ul className="mt-3 space-y-2 text-zinc-300">
            {project.nextSteps.map((nextStep) => (
              <li key={nextStep}>{nextStep}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-6 card">
        <h2 className="text-lg font-semibold text-zinc-100">Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-200">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
