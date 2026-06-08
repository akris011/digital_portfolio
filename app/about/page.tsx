export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-24 min-h-screen">
      
      {/* Header Block */}
      <div className="border-b-2 border-[var(--titanium-400)] pb-6 mb-12 flex justify-between items-end">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-600)] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--laser-red)]" />
            Operator Profile // 001
          </p>
          <h1 className="text-4xl font-bold text-[var(--titanium-900)] tracking-tight uppercase">
            Anya Krislav
          </h1>
        </div>
        <div className="hidden md:block font-mono text-[10px] text-[var(--titanium-500)] text-right">
          <p>STATUS: ACTIVE</p>
          <p>CLEARANCE: Lvl 4</p>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        
        {/* Left Column: Biometrics / Specs */}
        <aside className="space-y-8">
          {/* Image Frame */}
          <div className="bezel-titanium p-2 rounded-xl">
            <div className="screen-monitor relative aspect-[3/4] rounded-lg overflow-hidden">
              <div className="absolute inset-0 scanlines opacity-20 z-10 pointer-events-none" />
              {/* Fallback silhouette if image is missing, otherwise use image */}
              <div className="absolute inset-0 bg-[var(--titanium-800)] flex items-center justify-center">
                <svg className="w-24 h-24 text-[var(--titanium-600)] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              {/* Assuming headshot is available */}
              <img src="/headshot.png" alt="Anya Krislav" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 sepia-[.2] mix-blend-screen opacity-80" />
              
              {/* Overlay UI */}
              <div className="absolute bottom-2 left-2 font-mono text-[8px] text-[var(--laser-red)] tracking-widest">
                [ BIO-SCAN: VERIFIED ]
              </div>
            </div>
          </div>

          {/* Specs Table */}
          <div className="bg-white border border-[var(--titanium-300)] shadow-sm p-4">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-800)] border-b border-[var(--titanium-300)] pb-2 mb-3">
              Core Specifications
            </h2>
            <ul className="space-y-3 font-mono text-xs text-[var(--titanium-700)]">
              <li className="flex justify-between border-b border-[var(--titanium-200)] pb-1">
                <span className="text-[var(--titanium-500)]">Education</span>
                <span className="text-right">Duke BSE ECE + BS CS</span>
              </li>
              <li className="flex justify-between border-b border-[var(--titanium-200)] pb-1">
                <span className="text-[var(--titanium-500)]">GPA</span>
                <span className="text-right">3.75</span>
              </li>
              <li className="flex justify-between border-b border-[var(--titanium-200)] pb-1">
                <span className="text-[var(--titanium-500)]">Location</span>
                <span className="text-right">Durham, NC / Miami, FL</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="text-[var(--titanium-500)]">Languages</span>
                <span className="text-right">ENG, SPA, HEB</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Right Column: Operational History */}
        <div className="space-y-10">
          
          <section>
            <h2 className="text-2xl font-bold text-[var(--titanium-900)] mb-4 flex items-center gap-3">
              <span className="text-[var(--laser-red)]">/</span> Operational Summary
            </h2>
            <p className="text-lg text-[var(--titanium-700)] leading-relaxed">
              Engineer, team builder, and service-driven problem solver. I enjoy building systems that combine hardware reliability with software clarity, especially in robotics, telemetry, and human-centered assistive technology.
            </p>
          </section>

          <section className="bg-white border border-[var(--titanium-300)] p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--titanium-800)]" />
            <h2 className="text-lg font-bold text-[var(--titanium-900)] mb-4 uppercase tracking-tight">
              Leadership Directives
            </h2>
            <ul className="space-y-4 text-[var(--titanium-700)]">
              <li className="flex gap-3">
                <span className="text-[var(--laser-red)] font-bold">›</span>
                <span>Captain and software/electrical lead in FIRST Robotics, managing technical and strategic execution.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--laser-red)] font-bold">›</span>
                <span>President of Bake-A-Wish Cakes Miami, leading logistics and fundraising to serve 625+ children each year.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--laser-red)] font-bold">›</span>
                <span>Builder mindset: convert ambiguity into systems, then systems into consistent outcomes.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white border border-[var(--titanium-300)] p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--titanium-400)]" />
            <h2 className="text-lg font-bold text-[var(--titanium-900)] mb-4 uppercase tracking-tight">
              Auxiliary Parameters
            </h2>
            <ul className="space-y-4 text-[var(--titanium-700)]">
              <li className="flex gap-3">
                <span className="text-[var(--titanium-500)] font-bold">›</span>
                <span>Duke SWE, Duke Club Basketball, and collaborative engineering communities.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--titanium-500)] font-bold">›</span>
                <span>Soprano soloist at Temple Beth Am Choir.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--titanium-500)] font-bold">›</span>
                <span>Learning-focused interests: ML, trading, health, robotics, and backpacking.</span>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
