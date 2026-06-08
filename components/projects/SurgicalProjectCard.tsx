import React from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function SurgicalProjectCard({ project }: Props) {
  return (
    <article className="bezel-titanium rounded-xl p-2 transition-transform hover:-translate-y-1 duration-300">
      {/* Inner Monitor Screen */}
      <div className="screen-monitor rounded-lg p-6 relative overflow-hidden h-full flex flex-col">
        
        {/* Screen Glare / Reflection */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

        {/* Header / Status */}
        <div className="flex justify-between items-start border-b border-[var(--titanium-800)] pb-3 mb-4 relative z-10">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--titanium-500)]">
            <span className="text-[var(--laser-red)] mr-2">●</span>
            {project.period}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--titanium-600)]">
            ID: {project.slug.substring(0, 6).toUpperCase()}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{project.title}</h3>
          <p className="text-sm text-[var(--titanium-400)] mb-6 leading-relaxed">
            {project.tagline}
          </p>

          {/* Technical Data Points */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {project.impact.slice(0, 2).map((point, idx) => (
              <div key={idx} className="border-l-2 border-[var(--laser-red)] pl-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--titanium-500)] mb-1">Metric {idx + 1}</p>
                <p className="text-xs text-[var(--titanium-300)] leading-tight">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer / Stack */}
        <div className="relative z-10 mt-auto pt-4 border-t border-[var(--titanium-800)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="font-mono text-[9px] uppercase tracking-widest bg-[var(--titanium-900)] text-[var(--titanium-400)] px-2 py-1 border border-[var(--titanium-800)]">
                {tech}
              </span>
            ))}
          </div>
          
          <Link 
            href={`/projects/${project.slug}`}
            className="font-mono text-[10px] uppercase font-bold tracking-widest text-laser hover:text-white transition-colors"
          >
            Init sequence →
          </Link>
        </div>

      </div>
    </article>
  );
}