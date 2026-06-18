"use client";

import { Project } from "@/data/projects";
import { SurgicalProjectCard } from "@/components/projects/SurgicalProjectCard";

interface InteractiveSchematicProps {
  projects: Project[];
}

export function InteractiveSchematic({ projects }: InteractiveSchematicProps) {
  const leftProjects = projects.filter((_, i) => i % 2 === 0);
  const rightProjects = projects.filter((_, i) => i % 2 !== 0);

  return (
    <div className="relative w-full min-h-screen bg-[#050505] py-12 md:py-24 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto relative z-10 px-4 md:px-8">
        
        {/* Central Bus Line */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-[#333] md:-translate-x-1/2" />
        
        {/* MOBILE LAYOUT (Single Column) */}
        <div className="md:hidden flex flex-col gap-12 pt-8">
          {projects.map((project, index) => (
            <div key={project.slug} className="relative group w-full pl-16 z-10 hover:z-50">
              {/* Trace */}
              <div className="absolute top-1/2 left-[28px] w-9 h-1 bg-[#333] group-hover:bg-[var(--laser-red)] transition-colors duration-500" />
              {/* Node */}
              <div className="absolute top-1/2 left-[28px] -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#111] border-2 border-[#555] group-hover:border-[var(--laser-red)] group-hover:bg-[var(--laser-red)] transition-colors duration-500 z-20 shadow-[0_0_0_#aa0000] group-hover:shadow-[0_0_15px_#aa0000]" />
              {/* Label */}
              <div className="absolute top-[calc(50%-1.5rem)] left-[40px] font-mono text-[10px] font-bold tracking-widest text-[#555] group-hover:text-[var(--laser-red)] transition-colors duration-500">
                U{index + 1}: {project.slug.split('-')[0].toUpperCase()}_SYS
              </div>
              <SurgicalProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* DESKTOP LAYOUT (Two Staggered Columns) */}
        <div className="hidden md:flex flex-row w-full">
          
          {/* Left Column */}
          <div className="flex flex-col w-1/2 pr-12 gap-24 pt-0">
            {leftProjects.map((project, index) => (
              <div key={project.slug} className="relative group w-full z-10 hover:z-50">
                {/* Trace extending 3rem (48px) to the right to hit the center bus */}
                <div className="absolute top-1/2 -right-12 w-12 h-1 bg-[#333] group-hover:bg-[var(--laser-red)] transition-colors duration-500" />
                {/* Node exactly on the center bus */}
                <div className="absolute top-1/2 -right-12 translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#111] border-2 border-[#555] group-hover:border-[var(--laser-red)] group-hover:bg-[var(--laser-red)] transition-colors duration-500 z-20 shadow-[0_0_0_#aa0000] group-hover:shadow-[0_0_15px_#aa0000]" />
                {/* Label */}
                <div className="absolute top-[calc(50%-1.5rem)] -right-12 translate-x-1/2 font-mono text-[10px] font-bold tracking-widest text-[#555] group-hover:text-[var(--laser-red)] transition-colors duration-500 text-right pr-4">
                  U{index * 2 + 1}: {project.slug.split('-')[0].toUpperCase()}_SYS
                </div>
                <SurgicalProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-1/2 pl-12 gap-24 pt-48">
            {rightProjects.map((project, index) => (
              <div key={project.slug} className="relative group w-full z-10 hover:z-50">
                {/* Trace extending 3rem (48px) to the left to hit the center bus */}
                <div className="absolute top-1/2 -left-12 w-12 h-1 bg-[#333] group-hover:bg-[var(--laser-red)] transition-colors duration-500" />
                {/* Node exactly on the center bus */}
                <div className="absolute top-1/2 -left-12 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#111] border-2 border-[#555] group-hover:border-[var(--laser-red)] group-hover:bg-[var(--laser-red)] transition-colors duration-500 z-20 shadow-[0_0_0_#aa0000] group-hover:shadow-[0_0_15px_#aa0000]" />
                {/* Label */}
                <div className="absolute top-[calc(50%-1.5rem)] -left-12 -translate-x-1/2 font-mono text-[10px] font-bold tracking-widest text-[#555] group-hover:text-[var(--laser-red)] transition-colors duration-500 text-left pl-4">
                  U{index * 2 + 2}: {project.slug.split('-')[0].toUpperCase()}_SYS
                </div>
                <SurgicalProjectCard project={project} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
