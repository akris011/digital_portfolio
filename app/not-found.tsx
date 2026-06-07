import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center px-6 text-center">
      <p className="section-label">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-zinc-100">This route is not wired yet.</h1>
      <p className="mt-4 text-zinc-300">The page you are looking for does not exist in the current portfolio build.</p>
      <Link href="/" className="btn-primary mt-8">
        Return Home
      </Link>
    </div>
  );
}
