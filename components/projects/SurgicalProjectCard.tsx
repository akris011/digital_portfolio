import React from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function SurgicalProjectCard({ project }: Props) {
  return (
    <article className="group bezel-titanium rounded-xl p-2 transition-transform hover:-translate-y-1 duration-300 relative overflow-hidden shadow-lg">
      
      {/* Inner Monitor Screen */}
      <div className="screen-monitor rounded-lg p-6 relative overflow-hidden h-full flex flex-col transition-colors duration-300 group-hover:bg-[#001122]">
        
        {/* X-Ray / Scan Grid Overlay (Visible on Hover) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-300 z-30" 
             style={{ backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        {/* Screen Glare / Reflection */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-0 scanlines opacity-10 pointer-events-none z-20" />

        {/* Header / Status */}
        <div className="flex justify-between items-start border-b border-[var(--titanium-800)] pb-3 mb-4 relative z-10 transition-colors duration-300 group-hover:border-[#00ffff]/30">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--titanium-500)] group-hover:text-[#00ffff]">
            <span className="text-[var(--laser-red)] mr-2 group-hover:animate-pulse">●</span>
            {project.period}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--titanium-600)] group-hover:text-[#00ffff]/70">
            ID: {project.slug.substring(0, 6).toUpperCase()}
          </div>
        </div>

        {/* Cover Image with X-Ray Scanner */}
        {project.cover ? (
          <div className="relative w-full h-44 mb-5 overflow-hidden rounded-md border border-[var(--titanium-800)] group-hover:border-[#00ffff]/40 transition-colors duration-300 z-10">
            {/* The scanning laser line, contained to the image */}
            <div className="absolute left-0 right-0 h-[2px] bg-[#00ffff] shadow-[0_0_15px_#00ffff] z-30 opacity-0 group-hover:opacity-100 top-0 group-hover:top-full transition-all duration-[700ms] ease-linear pointer-events-none" />
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={project.cover} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale brightness-90 contrast-110 transition-all duration-300 group-hover:grayscale-0 group-hover:invert group-hover:hue-rotate-[150deg] group-hover:contrast-150 group-hover:brightness-110"
            />
            {/* Cyan wash on hover for the x-ray feel */}
            <div className="absolute inset-0 bg-[#00ffff] mix-blend-color opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
          </div>
        ) : null}

        {/* Content */}
        <div className="relative z-10 flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-[#00ffff] transition-colors duration-300">{project.title}</h3>
          <p className="text-sm text-[var(--titanium-400)] mb-6 leading-relaxed group-hover:text-[#00ffff]/80 transition-colors duration-300">
            {project.tagline}
          </p>


        </div>

        {/* Footer / Stack */}
        <div className="relative z-10 mt-auto pt-4 border-t border-[var(--titanium-800)] group-hover:border-[#00ffff]/30 flex flex-wrap items-center justify-between gap-4 transition-colors duration-300">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="font-mono text-[9px] uppercase tracking-widest bg-[var(--titanium-900)] group-hover:bg-[#00ffff]/10 text-[var(--titanium-400)] group-hover:text-[#00ffff] px-2 py-1 border border-[var(--titanium-800)] group-hover:border-[#00ffff]/40 transition-colors duration-300">
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