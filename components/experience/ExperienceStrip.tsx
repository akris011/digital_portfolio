const experiences = [
  {
    id: "jane-street",
    org: "Jane Street",
    role: "FOCUS Fellow",
    date: "Summer 2026",
    blurb: "Quantitative trading and research intensive fellowship.",
    initials: "JS",
    bg: "#0f0f23",
    fg: "#e2c97e",
  },
  {
    id: "bass-connections",
    org: "Duke Bass Connections",
    role: "Undergraduate Researcher — Surgical Education",
    date: "Aug 2026 – May 2027",
    blurb: "Building force-sensor models and ML-based assessment tools for surgical training alongside surgeons and engineers.",
    initials: "BC",
    bg: "#003087",
    fg: "#93c5fd",
  },
  {
    id: "dev",
    org: "Duke Electric Vehicles",
    role: "Telemetry Device Lead",
    date: "Aug 2025 – Present",
    blurb: "End-to-end telemetry system — CAN bus firmware to live diagnostics dashboard.",
    initials: "DEV",
    bg: "#00308780",
    fg: "#93c5fd",
  },
  {
    id: "enable",
    org: "Duke eNable",
    role: "Project Iteration Member",
    date: "Aug 2025 – Present",
    blurb: "Prosthetic wrist adapters and EMG-driven robotic arm prototyping for amputee clients.",
    initials: "eN",
    bg: "#064e3b",
    fg: "#6ee7b7",
  },
  {
    id: "forensis",
    org: "ForensiS Technologies",
    role: "Software & Hardware Engineer",
    date: "Jun – Aug 2025",
    blurb: "Python digitization tooling and hardware diagnostics in a live production environment.",
    initials: "F",
    bg: "#1e3a5f",
    fg: "#7dd3fc",
  },
  {
    id: "harvard-sri",
    org: "Harvard OpenBio SRI",
    role: "Research Fellow",
    date: "Summer 2024",
    blurb: "One of 71 selected from 1,800 applicants. Published research on AI + myocardial infarction detection.",
    initials: "H",
    bg: "#a41034",
    fg: "#fecaca",
  },
  {
    id: "baw",
    org: "Bake-A-Wish Cakes Miami",
    role: "President",
    date: "Aug 2021 – Jul 2025",
    blurb: "501(c)(3) delivering 625+ birthday cakes annually to children across South Florida.",
    initials: "BAW",
    bg: "#1d4ed8",
    fg: "#bfdbfe",
  },
  {
    id: "first",
    org: "FIRST Robotics — Gulliver",
    role: "Captain & Software Lead",
    date: "Sep 2021 – Jun 2025",
    blurb: "First World Championship in school history. Led vision localization and autonomous systems.",
    initials: "FRC",
    bg: "#312e81",
    fg: "#c7d2fe",
  },
];

export function ExperienceStrip() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="border-b border-[var(--titanium-400)] pb-6 mb-10">
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-600)] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[var(--titanium-500)]" />
          Experience Log
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--titanium-900)] tracking-tight">
          Where I&apos;ve Worked
        </h2>
      </div>

      <div className="flex flex-col divide-y divide-[var(--titanium-200)]">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex items-start gap-5 py-5 group"
          >
            {/* Logo badge */}
            <div
              className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center font-mono font-bold text-[10px] tracking-widest shadow-sm overflow-hidden bg-[var(--titanium-100)] border border-[var(--titanium-200)] relative"
            >
              <img 
                src={`/logos/${exp.id}.png`} 
                alt={exp.org} 
                className="w-full h-full object-contain p-1 transition-all duration-300" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span 
                className="absolute inset-0 flex items-center justify-center hidden"
                style={{ backgroundColor: exp.bg, color: exp.fg }}
              >
                {exp.initials}
              </span>
            </div>

            {/* Content */}
            <div className="flex-grow min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                <div>
                  <span className="font-bold text-[var(--titanium-900)] text-[15px]">{exp.role}</span>
                  <span className="text-[var(--titanium-500)] mx-2 text-sm">·</span>
                  <span className="text-sm text-[var(--titanium-600)]">{exp.org}</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--titanium-500)] whitespace-nowrap">
                  {exp.date}
                </span>
              </div>
              <p className="mt-1 text-sm text-[var(--titanium-600)] leading-relaxed">{exp.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
