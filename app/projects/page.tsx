import { projects } from "@/data/projects";
import { InteractiveSchematic } from "@/components/projects/InteractiveSchematic";

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen bg-[#050505] selection:bg-[var(--laser-red)] selection:text-white">
      
      {/* Header Block */}
      <div className="px-6 py-8 border-b border-[#333] bg-[#0a0a0a] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#666] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--laser-red)]" />
              Project Index // {String(projects.length).padStart(2, "0")} Records
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
              Hardware Schematic
            </h1>
          </div>
          <p className="max-w-md text-sm text-[#888] font-mono leading-relaxed text-left md:text-right">
            Probe the nodes below to read project telemetry. Access full data for implementation details.
          </p>
        </div>
      </div>

      <InteractiveSchematic projects={projects} />
    </div>
  );
}
