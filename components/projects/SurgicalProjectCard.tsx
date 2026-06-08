import React from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function SurgicalProjectCard({ project }: Props) {
  return (
    <article className="group bezel-titanium rounded-xl p-2 transition-transform hover:-translate-y-1 duration-300 relative overflow-hidden">
      
      {/* The X-Ray Scanner Line (Visible on Hover) */}
      <div className="absolute left-0 right-0 h-1 bg-[var(--laser-red)] shadow-[0_0_15px_var(--laser-red)] top-0 -translate-y-[20px] group-hover:translate-y-[600px] transition-transform duration-[1.5s] ease-linear z-50 opacity-0 group-hover:opacity-100 pointer-events-none" />

      {/* Inner Monitor Screen */}
      <div className="screen-monitor rounded-lg p-6 relative overflow-hidden h-full flex flex-col transition-colors duration-500 group-hover:bg-[#001122]">
        
        {/* X-Ray / Scan Grid Overlay (Visible on Hover) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-500" 
             style={{ backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        {/* Screen Glare / Reflection */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

        {/* Header / Status */}
        <div className="flex justify-between items-start border-b border-[var(--titanium-800)] pb-3 mb-4 relative z-10 transition-colors duration-500 group-hover:border-[#00ffff]/30">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--titanium-500)] group-hover:text-[#00ffff]">
            <span className="text-[var(--laser-red)] mr-2 group-hover:animate-pulse">●</span>
            {project.period}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--titanium-600)] group-hover:text-[#00ffff]/70">
            ID: {project.slug.substring(0, 6).toUpperCase()}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-[#00ffff] transition-colors duration-500">{project.title}</h3>
          <p className="text-sm text-[var(--titanium-400)] mb-6 leading-relaxed group-hover:text-[#00ffff]/80 transition-colors duration-500">
            {project.tagline}
          </p>

          {/* Technical Data Points */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {project.impact.slice(0, 2).map((point, idx) => (
              <div key={idx} className="border-l-2 border-[var(--laser-red)] group-hover:border-[#00ffff] pl-3 transition-colors duration-500">
                <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--titanium-500)] group-hover:text-[#00ffff]/60 mb-1 transition-colors duration-500">Metric {idx + 1}</p>
                <p className="text-xs text-[var(--titanium-300)] group-hover:text-[#00ffff] leading-tight transition-colors duration-500">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer / Stack */}
        <div className="relative z-10 mt-auto pt-4 border-t border-[var(--titanium-800)] group-hover:border-[#00ffff]/30 flex flex-wrap items-center justify-between gap-4 transition-colors duration-500">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="font-mono text-[9px] uppercase tracking-widest bg-[var(--titanium-900)] group-hover:bg-[#00ffff]/10 text-[var(--titanium-400)] group-hover:text-[#00ffff] px-2 py-1 border border-[var(--titanium-800)] group-hover:border-[#00ffff]/40 transition-colors duration-500">
                {tech}
              </span>
            ))}
          </div>
          
          <Link 
            href={`/projects/${project.slug}`}
            className="font-mono text-[10px] uppercase font-bold tracking-widest text-laser group-hover:text-[#00ffff] group-hover:drop-shadow-[0_0_5px_#00ffff] hover:text-white transition-all duration-300"
          >
            Init sequence →
          </Link>
        </div>

      </div>
    </article>
  );
}