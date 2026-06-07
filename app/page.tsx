import Link from "next/link";
import { WireIdHero } from "@/components/hero/WireIdHero";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

const featured = projects.filter((project) => project.featured);

export default function HomePage() {
  return (
    <div>
      <WireIdHero />

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label">Featured Work</p>
            <h2 className="section-heading">Engineering projects with measurable impact</h2>
          </div>
          <Link className="text-sm text-[var(--duke-blue-glow)] hover:text-white" href="/projects">
            See full project archive →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/60">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
          <article className="card">
            <p className="section-label">Current Focus</p>
            <h3 className="mt-3 text-2xl font-semibold text-zinc-100">High-performance systems and human-centered engineering</h3>
            <p className="mt-4 text-zinc-300">
              At Duke, I am focusing on embedded systems, robotics, and applied software tools that improve reliability,
              transparency, and outcomes for real users.
            </p>
          </article>
          <article className="card">
            <p className="section-label">Goals</p>
            <ul className="mt-3 space-y-3 text-zinc-200">
              <li>Design fault-tolerant hardware-software systems under real constraints.</li>
              <li>Grow as a technical leader on multidisciplinary engineering teams.</li>
              <li>Build products that blend rigorous engineering with modern user experience.</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
