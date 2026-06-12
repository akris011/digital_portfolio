"use client";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24 min-h-screen">
      
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

      <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
        
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

        {/* Right Column: Operational History & Experience */}
        <div className="space-y-10">
          
          {/* Short Blurb */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--titanium-900)] mb-4 flex items-center gap-3">
              <span className="text-[var(--laser-red)]">/</span> Summary
            </h2>
            <p className="text-lg text-[var(--titanium-700)] leading-relaxed">
              I am an Electrical and Computer Engineer building fault-tolerant systems. 
              My focus is translating ambiguity into reliable hardware and software—whether 
              that&apos;s race-car telemetry, assistive robotics, or high-frequency trading infrastructure.
            </p>
          </section>

          {/* Experience Section */}
          <section className="bg-white border border-[var(--titanium-300)] p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--titanium-800)]" />
            <h2 className="text-lg font-bold text-[var(--titanium-900)] mb-6 uppercase tracking-tight flex justify-between items-end border-b border-[var(--titanium-200)] pb-2">
              <span>Deployment History</span>
              <span className="font-mono text-[10px] text-[var(--titanium-500)]">EXPERIENCE</span>
            </h2>
            
            <div className="space-y-8">
              
              {/* Experience 1 */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 flex-shrink-0 border border-[var(--titanium-300)] rounded bg-[var(--titanium-100)] p-1 overflow-hidden">
                  {/* TODO: Upload jane-street.png to public/logos/ */}
                  <img src="/logos/jane-street.png" alt="Jane Street" className="w-full h-full object-contain transition-all duration-300" onError={(e) => e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="%23adb5bd"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>'} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--titanium-900)] text-base">Jane Street</h3>
                  <p className="font-mono text-xs text-[var(--laser-red)] mb-2">Focus Program Participant // New York City</p>
                  <p className="text-sm text-[var(--titanium-700)]">
                    Selected for an intensive program exploring the intersection of technology, trading, and quantitative research.
                  </p>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 flex-shrink-0 border border-[var(--titanium-300)] rounded bg-[var(--titanium-100)] p-1 overflow-hidden">
                  {/* TODO: Upload forensis.png to public/logos/ */}
                  <img src="/logos/forensis.png" alt="ForensiS" className="w-full h-full object-contain transition-all duration-300" onError={(e) => e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="%23adb5bd"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>'} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--titanium-900)] text-base">ForensiS</h3>
                  <p className="font-mono text-xs text-[var(--laser-red)] mb-2">Software & Hardware Engineer // Miami, FL</p>
                  <p className="text-sm text-[var(--titanium-700)]">
                    Built Python internal tooling to digitize production records, reducing manual entry friction. Diagnosed and resolved mixed hardware/software issues under production pressure.
                  </p>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 flex-shrink-0 border border-[var(--titanium-300)] rounded bg-[var(--titanium-100)] p-1 overflow-hidden">
                  {/* TODO: Upload first.png to public/logos/ */}
                  <img src="/logos/first.png" alt="FIRST Robotics" className="w-full h-full object-contain transition-all duration-300" onError={(e) => e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="%23adb5bd"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>'} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--titanium-900)] text-base">FIRST Robotics</h3>
                  <p className="font-mono text-xs text-[var(--laser-red)] mb-2">Captain & Software/Electrical Lead</p>
                  <p className="text-sm text-[var(--titanium-700)]">
                    Led a 10-person Java software team on vision localization and path planning. Drove team to World Championships and managed a $57,500 budget.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Auxiliary Parameters (Kept short) */}
          <section className="bg-white border border-[var(--titanium-300)] p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--titanium-400)]" />
            <h2 className="text-lg font-bold text-[var(--titanium-900)] mb-4 uppercase tracking-tight">
              Auxiliary Parameters
            </h2>
            <ul className="space-y-3 text-sm text-[var(--titanium-700)]">
              <li className="flex gap-3">
                <span className="text-[var(--titanium-500)] font-bold">›</span>
                <span>President of Bake-A-Wish Cakes Miami (served 625+ children annually).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--titanium-500)] font-bold">›</span>
                <span>Duke SWE, Duke Club Basketball, Soprano soloist.</span>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}