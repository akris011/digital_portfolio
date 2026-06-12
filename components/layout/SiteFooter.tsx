export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--titanium-300)] bg-[var(--titanium-100)]/60">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-8 font-mono text-[11px] uppercase tracking-widest text-[var(--titanium-600)] sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[var(--laser-red)]" />
          Anya Krislav · Duke ECE + CS
        </p>
        <div className="flex gap-6">
          <a className="hover:text-[var(--laser-red)] transition-colors" href="mailto:anya.krislav@duke.edu">
            Email
          </a>
          <a
            className="hover:text-[var(--laser-red)] transition-colors"
            href="https://www.linkedin.com/in/anya-krislav/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
