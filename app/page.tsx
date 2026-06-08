import Link from "next/link";
import { SurgicalHero } from "@/components/hero/SurgicalHero";
import { SurgicalProjectCard } from "@/components/projects/SurgicalProjectCard";
import { projects } from "@/data/projects";

const featured = projects.filter((project) => project.featured);

export default function HomePage() {
  return (
    <div className="min-h-screen selection:bg-[var(--laser-red)] selection:text-white pb-32">
      
      {/* The Animated Surgical Robot Hero */}
      <SurgicalHero />

      {/* Featured Work Section */}
      <section className="mx-auto w-full max-w-5xl px-6 py-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-[var(--titanium-400)] pb-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 bg-[var(--titanium-600)]" />
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-600)]">
                Directory // Featured Work
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--titanium-900)] tracking-tight">
              Clinical & Embedded Systems
            </h2>
          </div>
          <Link 
            className="font-mono text-[10px] font-bold uppercase tracking-widest text-white bg-[var(--titanium-800)] px-6 py-3 hover:bg-[var(--laser-red)] transition-colors shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center gap-2" 
            href="/projects"
          >
            Access Full Archive
            <span className="text-[var(--titanium-400)]">→</span>
          </Link>
        </div>
        
        {/* Project Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {featured.map((project) => (
            <SurgicalProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </section>
    </div>
  );
}