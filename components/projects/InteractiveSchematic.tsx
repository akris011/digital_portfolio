"use client";

import { Project } from "@/data/projects";
import { SurgicalProjectCard } from "@/components/projects/SurgicalProjectCard";

interface InteractiveSchematicProps {
  projects: Project[];
}

export function InteractiveSchematic({ projects }: InteractiveSchematicProps) {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] py-24 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto relative z-10 px-4 md:px-8">
        
        {/* Central Bus Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#333] md:-translate-x-1/2" />
        
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div key={project.slug} className="relative flex flex-col md:flex-row w-full items-center group">
                
                {/* Node Dot on the Bus */}
                <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#111] border-2 border-[#555] z-20 group-hover:border-[var(--laser-red)] group-hover:bg-[var(--laser-red)] transition-colors duration-500 shadow-[0_0_0_#aa0000] group-hover:shadow-[0_0_15px_#aa0000]" />
                
                {/* Connecting Trace (Desktop) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-1 bg-[#333] z-0 group-hover:bg-[var(--laser-red)] transition-colors duration-500 ${isLeft ? 'right-1/2' : 'left-1/2'}`} />

                {/* Connecting Trace (Mobile) */}
                <div className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 w-8 h-1 bg-[#333] z-0 group-hover:bg-[var(--laser-red)] transition-colors duration-500" />

                {/* Desktop Layout: Alternating Left/Right */}
                <div className={`hidden md:block w-1/2 ${isLeft ? 'pr-12' : 'pl-12'}`}>
                  {isLeft && <SurgicalProjectCard project={project} />}
                </div>
                <div className={`hidden md:block w-1/2 ${!isLeft ? 'pl-12' : 'pr-12'}`}>
                  {!isLeft && <SurgicalProjectCard project={project} />}
                </div>

                {/* Mobile Layout: Always Right of Bus */}
                <div className="md:hidden w-full pl-12 py-4">
                  <SurgicalProjectCard project={project} />
                </div>

                {/* Node Label */}
                <div className={`absolute top-1/2 -translate-y-1/2 font-mono text-[10px] font-bold tracking-widest text-[#555] group-hover:text-[var(--laser-red)] transition-colors duration-500 hidden md:block ${isLeft ? 'left-[calc(50%+2rem)]' : 'right-[calc(50%+2rem)]'}`}>
                  U{index + 1}: {project.slug.split('-')[0].toUpperCase()}_SYS
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
