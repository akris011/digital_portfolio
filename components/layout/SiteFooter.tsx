export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Built by Anya Krislav · Duke ECE + CS</p>
        <div className="flex gap-4">
          <a className="hover:text-white" href="mailto:anya.krislav@duke.edu">
            Email
          </a>
          <a
            className="hover:text-white"
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
