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
    <div className="mx-auto w-full max-w-5xl px-6 py-24 min-h-screen">
      
      {/* Back Link */}
      <Link 
        href="/projects" 
        className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-600)] hover:text-[var(--laser-red)] transition-colors flex items-center gap-2"
      >
        ← Return to Index
      </Link>

      {/* Header Block */}
      <div className="border-b-2 border-[var(--titanium-400)] pb-6 mb-12 mt-6">
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-600)] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[var(--laser-red)]" />
          {project.period}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--titanium-900)] tracking-tight mb-3">
          {project.title}
        </h1>
        <p className="font-mono text-sm text-[var(--titanium-600)] uppercase tracking-wide">{project.role}</p>
        <p className="mt-6 text-lg text-[var(--titanium-700)] max-w-3xl leading-relaxed">{project.story}</p>
      </div>

      {/* Image Gallery */}
      {project.images && project.images.length > 0 ? (
        <section className="mb-16">
          <h2 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-600)] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--titanium-500)]" />
            Visual Record // {project.images.length} Frames
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.images.map((image, idx) => (
              <figure 
                key={image.src} 
                className={`bezel-titanium rounded-xl p-2 ${idx === 0 ? "md:col-span-2" : ""}`}
              >
                <div className="screen-monitor rounded-lg overflow-hidden relative group">
                  <div className="absolute top-2 left-3 z-20 font-mono text-[9px] text-[var(--laser-red)] tracking-widest">
                    FIG.{String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute inset-0 scanlines opacity-10 z-10 pointer-events-none" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={image.src} 
                    alt={image.caption} 
                    className={`w-full object-cover ${idx === 0 ? "h-80 md:h-[28rem]" : "h-64"}`}
                  />
                </div>
                <figcaption className="px-3 py-3 font-mono text-[11px] text-[var(--titanium-600)] leading-relaxed">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {/* Outcomes */}
      <section className="bg-white border border-[var(--titanium-300)] p-6 shadow-sm relative overflow-hidden mb-6">
        <div className="absolute top-0 left-0 w-1 h-full bg-[var(--laser-red)]" />
        <h2 className="text-lg font-bold text-[var(--titanium-900)] mb-4 uppercase tracking-tight">Outcomes</h2>
        <ul className="space-y-4 text-[var(--titanium-700)]">
          {project.impact.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="text-[var(--laser-red)] font-bold">›</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Challenges + Next */}
      <section className="grid gap-6 md:grid-cols-2 mb-6">
        <article className="bg-white border border-[var(--titanium-300)] p-6 shadow-sm">
          <h2 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-800)] border-b border-[var(--titanium-300)] pb-2 mb-4">
            Technical Challenges
          </h2>
          <ul className="space-y-3 text-sm text-[var(--titanium-700)]">
            {project.challenges.map((challenge) => (
              <li key={challenge} className="flex gap-2">
                <span className="text-[var(--titanium-500)]">›</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="bg-white border border-[var(--titanium-300)] p-6 shadow-sm">
          <h2 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-800)] border-b border-[var(--titanium-300)] pb-2 mb-4">
            Next Steps
          </h2>
          <ul className="space-y-3 text-sm text-[var(--titanium-700)]">
            {project.nextSteps.map((nextStep) => (
              <li key={nextStep} className="flex gap-2">
                <span className="text-[var(--titanium-500)]">›</span>
                <span>{nextStep}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      {/* Stack */}
      <section className="bg-white border border-[var(--titanium-300)] p-6 shadow-sm">
        <h2 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-800)] border-b border-[var(--titanium-300)] pb-2 mb-4">
          System Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span 
              key={tech} 
              className="font-mono text-[10px] uppercase tracking-widest bg-[var(--titanium-100)] text-[var(--titanium-700)] px-3 py-1.5 border border-[var(--titanium-300)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
