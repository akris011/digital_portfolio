import { projects } from "@/data/projects";
import { InteractiveSchematic } from "@/components/projects/InteractiveSchematic";

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen bg-white selection:bg-[var(--laser-red)] selection:text-white">
      
      {/* Header Block */}
      <div className="px-6 py-12 border-b border-gray-200 bg-white relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--laser-red)]" />
              Project Index // {String(projects.length).padStart(2, "0")} Records
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight uppercase">
              Hardware Schematic
            </h1>
          </div>
          <p className="max-w-md text-sm text-gray-600 font-mono leading-relaxed text-left md:text-right">
            Follow the main bus to explore operational deployments. Each node represents a distinct engineering initiative.
          </p>
        </div>
      </div>

      <InteractiveSchematic projects={projects} />
    </div>
  );
}
