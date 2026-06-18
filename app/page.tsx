"use client";

import Link from "next/link";
import { SurgicalHero } from "@/components/hero/SurgicalHero";
import { SurgicalProjectCard } from "@/components/projects/SurgicalProjectCard";
import { ExperienceStrip } from "@/components/experience/ExperienceStrip";
import { projects } from "@/data/projects";

const featured = projects.filter((project) => project.featured);

const affiliations = [
  { id: 'jane-street', name: 'Jane Street', role: 'FOCUS Fellow', logo: '/logos/jane-street.png' },
  { id: 'dev', name: 'Duke EV', role: 'Telemetry Lead', logo: '/logos/dev.png' },
  { id: 'first', name: 'FIRST Robotics', role: 'Captain & Software Lead', logo: '/logos/first.png' },
  { id: 'forensis', name: 'ForensiS', role: 'Software & Hardware Engineer', logo: '/logos/forensis.png' },
  { id: 'baw', name: 'Bake-A-Wish', role: 'President', logo: '/logos/baw.png' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen selection:bg-[var(--laser-red)] selection:text-white pb-32">
      
      {/* The Animated Surgical Robot Hero */}
      <SurgicalHero />

      {/* Deployment Logos Strip */}
      <section className="border-y border-[var(--titanium-300)] bg-white py-8 relative z-10 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 mb-8">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-500)] text-center">
            Operational Deployments & Affiliations
          </p>
        </div>
        
        {/* Marquee Container */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* First Set */}
          <div className="flex items-center gap-16 px-8">
            {affiliations.map((affil) => (
              <div key={affil.id} className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-default">
                <img 
                  src={affil.logo} 
                  alt={affil.name} 
                  className="h-8 md:h-10 object-contain" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} 
                />
                <span className="hidden font-bold text-[var(--titanium-800)] uppercase tracking-widest">{affil.name}</span>
                <div className="h-6 w-px bg-[var(--titanium-300)]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-700)] whitespace-nowrap">
                  {affil.role}
                </span>
              </div>
            ))}
          </div>
          {/* Second Set (Duplicate for seamless loop) */}
          <div className="flex items-center gap-16 px-8">
            {affiliations.map((affil) => (
              <div key={`${affil.id}-dup`} className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-default">
                <img 
                  src={affil.logo} 
                  alt={affil.name} 
                  className="h-8 md:h-10 object-contain" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} 
                />
                <span className="hidden font-bold text-[var(--titanium-800)] uppercase tracking-widest">{affil.name}</span>
                <div className="h-6 w-px bg-[var(--titanium-300)]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-700)] whitespace-nowrap">
                  {affil.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}