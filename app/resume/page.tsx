export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-24 min-h-screen">
      
      {/* Header Block */}
      <div className="border-b-2 border-[var(--titanium-400)] pb-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-600)] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--laser-red)]" />
            Document // Resume
          </p>
          <h1 className="text-4xl font-bold text-[var(--titanium-900)] tracking-tight uppercase">
            Technical Specifications
          </h1>
        </div>
        
        <div className="flex gap-4">
          <a 
            className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-900)] border-2 border-[var(--titanium-800)] px-4 py-2 hover:bg-[var(--titanium-800)] hover:text-white transition-colors" 
            href="/resume.pdf" 
            target="_blank" 
            rel="noreferrer"
          >
            Open PDF [↗]
          </a>
          <a 
            className="font-mono text-[10px] font-bold uppercase tracking-widest text-white bg-[var(--laser-red)] px-4 py-2 hover:bg-[var(--laser-dark)] transition-colors shadow-[0_4px_10px_rgba(255,42,42,0.2)]" 
            href="/resume.pdf" 
            download
          >
            Download [↓]
          </a>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-[3fr_1fr] items-start">
        
        {/* Left: PDF Viewer enclosed in Titanium Bezel */}
        <section className="bezel-titanium p-2 rounded-xl">
          <div className="bg-[var(--titanium-800)] rounded-lg overflow-hidden relative">
            {/* Top Bar of PDF Viewer */}
            <div className="bg-[var(--titanium-900)] px-4 py-2 flex items-center justify-between border-b border-black">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="font-mono text-[10px] text-[var(--titanium-500)] tracking-widest">
                AK_RESUME_2026.PDF
              </div>
            </div>
            
            <iframe
              title="Anya Krislav Resume"
              src="/resume.pdf"
              className="h-[850px] w-full bg-white"
              loading="lazy"
              aria-label="Resume PDF viewer"
            />
          </div>
        </section>

        {/* Right: Recent Updates Log */}
        <aside className="space-y-6">
          <div className="bg-white border border-[var(--titanium-300)] shadow-sm p-5">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--titanium-800)] border-b border-[var(--titanium-300)] pb-2 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--titanium-500)] animate-pulse" />
              System Updates
            </h2>
            <ul className="space-y-4 text-sm text-[var(--titanium-700)]">
              <li className="relative pl-4">
                <div className="absolute left-0 top-1.5 w-1 h-1 bg-[var(--laser-red)]" />
                Completed the Jane Street Focus Program in New York City.
              </li>
              <li className="relative pl-4">
                <div className="absolute left-0 top-1.5 w-1 h-1 bg-[var(--titanium-500)]" />
                Camp Matoaka roles: counselor, lifeguard, and health office intern.
              </li>
              <li className="relative pl-4">
                <div className="absolute left-0 top-1.5 w-1 h-1 bg-[var(--titanium-500)]" />
                Expanding project portfolio around telemetry, assistive robotics, and production tooling.
              </li>
            </ul>
          </div>
          
          {/* Decorative Barcode / ID Block */}
          <div className="border border-[var(--titanium-300)] p-4 flex flex-col items-center justify-center gap-2 opacity-60">
            <div className="flex gap-1 h-8">
              <div className="w-1 bg-[var(--titanium-800)]" />
              <div className="w-2 bg-[var(--titanium-800)]" />
              <div className="w-0.5 bg-[var(--titanium-800)]" />
              <div className="w-1.5 bg-[var(--titanium-800)]" />
              <div className="w-3 bg-[var(--titanium-800)]" />
              <div className="w-1 bg-[var(--titanium-800)]" />
              <div className="w-0.5 bg-[var(--titanium-800)]" />
              <div className="w-2 bg-[var(--titanium-800)]" />
              <div className="w-1 bg-[var(--titanium-800)]" />
              <div className="w-1.5 bg-[var(--titanium-800)]" />
              <div className="w-0.5 bg-[var(--titanium-800)]" />
              <div className="w-2 bg-[var(--titanium-800)]" />
            </div>
            <p className="font-mono text-[8px] tracking-[0.3em] text-[var(--titanium-700)]">
              AUTH-CODE: 8847-A
            </p>
          </div>
        </aside>

      </div>
    </div>
  );
}
