"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bezel-titanium border-b-0 rounded-none">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-md pointer-events-none" />
      <nav className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-1.5">
        
        {/* Brand / System Status */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[var(--laser-red)] shadow-[0_0_8px_rgba(255,42,42,0.8)] animate-pulse" />
          <span className="text-xs font-bold tracking-[0.2em] text-[var(--titanium-800)] uppercase">
            A.Krislav // Sys.Online
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-2">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-[11px] uppercase font-bold tracking-widest px-5 py-2.5 transition-all ${
                  active
                    ? "text-[var(--laser-red)] border-b-2 border-[var(--laser-red)]"
                    : "text-[var(--titanium-600)] hover:text-[var(--titanium-900)] border-b-2 border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}