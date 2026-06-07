export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <p className="section-label">Resume</p>
      <h1 className="section-heading mt-3">Experience, leadership, and technical trajectory.</h1>

      <div className="mt-8 flex flex-wrap gap-4">
        <a className="btn-primary" href="/resume.pdf" target="_blank" rel="noreferrer">
          Open Resume PDF
        </a>
        <a className="btn-secondary" href="/resume.pdf" download>
          Download Resume
        </a>
      </div>

      <section className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70">
        <iframe
          title="Anya Krislav Resume"
          src="/resume.pdf"
          className="h-[780px] w-full bg-zinc-900"
          loading="lazy"
          aria-label="Resume PDF viewer"
        />
      </section>

      <section className="mt-8 card">
        <h2 className="text-xl font-semibold text-zinc-100">Recent additions</h2>
        <ul className="mt-4 space-y-3 text-zinc-300">
          <li>Completed the Jane Street Focus Program in New York City.</li>
          <li>Camp Matoaka roles: counselor, lifeguard, and health office intern.</li>
          <li>Expanding project portfolio around telemetry, assistive robotics, and production tooling.</li>
        </ul>
      </section>
    </div>
  );
}
