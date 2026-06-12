import { SurgicalProjectCard } from "@/components/projects/SurgicalProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-24 min-h-screen">
      
      {/* Header Block */}
      <div className="border-b-2 border-[var(--titanium-400)] pb-6 mb-12">
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-600)] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[var(--laser-red)]" />
          Project Index // {String(projects.length).padStart(2, "0")} Records
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--titanium-900)] tracking-tight">
          Engineering Archive
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--titanium-700)] leading-relaxed">
          Selected work across embedded systems, robotics, and software. Each record focuses on
          implementation detail and measurable outcomes: range, reliability, throughput, team scale, or user impact.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <SurgicalProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
