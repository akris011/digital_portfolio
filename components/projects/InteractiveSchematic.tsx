"use client";

import { useState, useEffect } from "react";
import { Project } from "@/data/projects";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface InteractiveSchematicProps {
  projects: Project[];
}

// Map projects to specific coordinates on the schematic board (1200x800 viewBox)
const nodePositions: Record<string, { x: number; y: number; label: string }> = {
  "duke-electric-vehicles-telemetry": { x: 250, y: 200, label: "U1: TELEMETRY" },
  "bass-connections-surgical-education": { x: 600, y: 150, label: "U2: SURGICAL_ML" },
  "duke-enable-emg-prosthetics": { x: 950, y: 250, label: "U3: EMG_CTRL" },
  "first-robotics-autonomous-systems": { x: 300, y: 500, label: "U4: AUTO_NAV" },
  "bake-a-wish-miami": { x: 650, y: 450, label: "U5: LOGISTICS" },
  "harvard-sri-myocardial-infarction": { x: 900, y: 600, label: "U6: BIO_SIG" },
  "forensis-record-digitization": { x: 450, y: 700, label: "U7: DIGITIZE" },
};

export function InteractiveSchematic({ projects }: InteractiveSchematicProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHoveringSchematic, setIsHoveringSchematic] = useState(false);
  const [isHoveringNode, setIsHoveringNode] = useState(false);

  // Track mouse for the custom multimeter probe cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="relative w-full min-h-[800px] h-[calc(100vh-80px)] bg-[#050505] overflow-hidden flex flex-col md:flex-row cursor-none"
      onMouseEnter={() => setIsHoveringSchematic(true)}
      onMouseLeave={() => setIsHoveringSchematic(false)}
    >
      
      {/* Custom Multimeter Probe Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none flex flex-col items-center"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          opacity: isHoveringSchematic ? 1 : 0
        }}
        transition={{ 
          x: { type: "tween", ease: "backOut", duration: 0.1 },
          y: { type: "tween", ease: "backOut", duration: 0.1 },
          opacity: { duration: 0.2 }
        }}
        style={{
          translateX: "-50%",
          translateY: "-10%",
        }}
      >
        {/* Probe Tip */}
        <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 0L13 0L13 12L11 12L11 0Z" fill={isHoveringNode ? "var(--laser-red)" : "#888"} />
          <path d="M8 12H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24V12Z" fill={isHoveringNode ? "#aa0000" : "#555"} />
          <path d="M10 28H14V48H10V28Z" fill="#222" />
        </svg>
        {isHoveringNode && (
          <div className="absolute top-0 left-6 font-mono text-[10px] text-[var(--laser-red)] bg-black/80 px-1 border border-[var(--laser-red)] whitespace-nowrap">
            SIG_DETECT
          </div>
        )}
      </motion.div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* SVG Schematic Canvas */}
      <div className="flex-grow relative h-full">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main Bus Traces */}
          <polyline points="100,400 1100,400" fill="none" stroke="#333" strokeWidth="4" />
          <polyline points="100,410 1100,410" fill="none" stroke="#333" strokeWidth="2" />
          
          {/* Decorative PCB Elements */}
          <g stroke="#333" strokeWidth="2" fill="none">
            {/* Resistor symbol */}
            <polyline points="150,380 160,380 165,370 175,390 185,370 195,390 200,380 210,380" />
            <text x="160" y="360" fill="#444" fontFamily="monospace" fontSize="10">R104</text>
            
            {/* Capacitor symbol */}
            <line x1="850" y1="380" x2="870" y2="380" />
            <line x1="870" y1="370" x2="870" y2="390" />
            <line x1="880" y1="370" x2="880" y2="390" />
            <line x1="880" y1="380" x2="900" y2="380" />
            <text x="865" y="360" fill="#444" fontFamily="monospace" fontSize="10">C22</text>

            {/* Ground symbol */}
            <line x1="50" y1="400" x2="50" y2="450" />
            <line x1="30" y1="450" x2="70" y2="450" />
            <line x1="40" y1="460" x2="60" y2="460" />
            <line x1="45" y1="470" x2="55" y2="470" />
          </g>
          
          {/* Traces connecting nodes to the main bus */}
          {projects.map((project) => {
            const pos = nodePositions[project.slug];
            if (!pos) return null;
            const isActive = activeProject?.slug === project.slug;
            
            return (
              <g key={`trace-${project.slug}`}>
                {/* Vertical drop to bus */}
                <polyline 
                  points={`${pos.x},${pos.y} ${pos.x},400`} 
                  fill="none" 
                  stroke={isActive ? "var(--laser-red)" : "#444"} 
                  strokeWidth={isActive ? "3" : "2"} 
                  filter={isActive ? "url(#glow)" : ""}
                  className="transition-all duration-300"
                />
                {/* Connection dot on bus */}
                <circle cx={pos.x} cy="400" r="4" fill={isActive ? "var(--laser-red)" : "#444"} />
              </g>
            );
          })}

          {/* Interactive Nodes */}
          {projects.map((project) => {
            const pos = nodePositions[project.slug];
            if (!pos) return null;
            const isActive = activeProject?.slug === project.slug;

            return (
              <g 
                key={`node-${project.slug}`}
                transform={`translate(${pos.x}, ${pos.y})`}
                onMouseEnter={() => {
                  setActiveProject(project);
                  setIsHoveringNode(true);
                }}
                onMouseLeave={() => {
                  setActiveProject(null);
                  setIsHoveringNode(false);
                }}
                className="cursor-none"
              >
                {/* Outer Ring */}
                <circle 
                  cx="0" cy="0" r="24" 
                  fill="none" 
                  stroke={isActive ? "var(--laser-red)" : "#555"} 
                  strokeWidth="2" 
                  strokeDasharray={isActive ? "none" : "4 4"}
                  className={`transition-all duration-300 ${!activeProject && project.slug === "duke-electric-vehicles-telemetry" ? "animate-pulse" : ""}`}
                />
                
                {/* Inner Chip */}
                <rect 
                  x="-12" y="-12" width="24" height="24" rx="4"
                  fill={isActive ? "var(--laser-red)" : "#222"} 
                  stroke={isActive ? "#fff" : "#666"}
                  strokeWidth="2"
                  filter={isActive ? "url(#glow)" : ""}
                  className="transition-all duration-300"
                />

                {/* Node Label */}
                <text 
                  x="35" y="5" 
                  fill={isActive ? "#fff" : "#888"} 
                  fontFamily="monospace" 
                  fontSize="12" 
                  fontWeight="bold"
                  className="transition-colors duration-300 pointer-events-none"
                >
                  {pos.label}
                </text>
                
                <text 
                  x="35" y="20" 
                  fill={isActive ? "var(--laser-red)" : "#555"} 
                  fontFamily="monospace" 
                  fontSize="10" 
                  className="transition-colors duration-300 pointer-events-none"
                >
                  {isActive ? "STATUS: ONLINE" : "STATUS: STBY"}
                </text>
                
                {/* Invisible larger hit area for easier hovering */}
                <circle cx="0" cy="0" r="40" fill="transparent" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Diagnostics Side Panel */}
      <div className="w-full md:w-[400px] h-[300px] md:h-full flex-shrink-0 border-t md:border-t-0 md:border-l border-[#333] bg-[#0a0a0a] flex flex-col relative z-10 overflow-hidden">
        <div className="absolute inset-0 scanlines opacity-10 pointer-events-none z-50" />
        <div className="p-4 border-b border-[#333] bg-[#111] relative z-20">
          <p className="font-mono text-[10px] text-[var(--laser-red)] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--laser-red)] animate-pulse" />
            DIAGNOSTICS CONSOLE // LIVE
          </p>
        </div>

        <div className="flex-grow p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeProject ? (
              <motion.div
                key={activeProject.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-2">
                    {activeProject.title}
                  </h2>
                  <p className="font-mono text-xs text-[#888]">
                    {activeProject.role}
                  </p>
                </div>

                <div className="bg-[#111] border border-[#333] p-4 rounded font-mono text-xs text-[#aaa] leading-relaxed">
                  <p className="text-[var(--laser-red)] mb-2">&gt; READ_SUMMARY</p>
                  <p>{activeProject.tagline}</p>
                </div>

                <div>
                  <p className="font-mono text-[10px] text-[#666] mb-2 uppercase tracking-widest">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.stack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-[#222] border border-[#444] text-[#ccc] font-mono text-[10px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/projects/${activeProject.slug}`}
                  className="block w-full text-center py-3 bg-[var(--laser-red)] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  [ ACCESS FULL DATA ]
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center text-center opacity-50"
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                <p className="font-mono text-xs text-[#888]">
                  AWAITING PROBE CONNECTION...<br/>
                  HOVER OVER A NODE TO READ SIGNAL.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
