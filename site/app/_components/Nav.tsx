import { Logo } from "./Logo";

export function Nav() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Stocked" },
    { href: "#about", label: "About" },
    { href: "#credentials", label: "Credentials" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-pine/5 backdrop-blur-md bg-[color:var(--color-cream)]/85">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Stocked home">
          <Logo size={36} />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-pine/75">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-teal-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-teal-600 text-cream px-5 py-2.5 text-sm font-semibold shadow-soft hover:bg-teal-700 transition-colors"
        >
          Get a quote
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}
