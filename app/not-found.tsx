import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[80vh] w-full max-w-4xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--laser-red)] mb-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[var(--laser-red)] animate-pulse" />
        Error // 404
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-[var(--titanium-900)] tracking-tight">
        Signal Lost.
      </h1>
      <p className="mt-4 text-[var(--titanium-600)] font-mono text-sm max-w-md">
        The requested route does not exist in the current system build.
      </p>
      <Link 
        href="/" 
        className="mt-8 font-mono text-[10px] font-bold uppercase tracking-widest text-white bg-[var(--titanium-800)] px-6 py-3 hover:bg-[var(--laser-red)] transition-colors"
      >
        Re-establish Connection →
      </Link>
    </div>
  );
}
