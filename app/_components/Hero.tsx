import { HeroShelf } from "./HeroShelf";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top right, rgba(124,190,150,0.30), transparent 55%), radial-gradient(ellipse at bottom left, rgba(241,223,177,0.45), transparent 50%), var(--color-cream)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-28 md:pb-36 grid md:grid-cols-12 gap-12 items-center">
        {/* Copy */}
        <div className="md:col-span-7 fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-100 text-sage-700 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
            <span className="size-1.5 rounded-full bg-sage-500" />
            On-site retail support · Indianapolis & Midwest
          </span>

          <h1 className="mt-6 font-display text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight text-balance">
            Retail support{" "}
            <span className="underline-sketch">you can count on.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg md:text-xl text-pine/75 text-pretty leading-relaxed">
            Reliable, professional, on-site stocking, merchandising, and brand
            ambassador work — delivered with the kind of care that keeps your
            shelves full, your store organized, and your brand showing up at
            its best.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 text-cream px-7 py-4 text-base font-semibold shadow-lifted hover:bg-teal-700 transition-colors"
            >
              Get a quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-cream border border-pine/15 text-pine px-7 py-4 text-base font-semibold hover:border-teal-600 hover:text-teal-700 transition-colors"
            >
              See our services
            </a>
          </div>

          <p className="mt-8 text-sm text-pine/60">
            <span className="font-semibold text-pine/80">20+ years</span> of
            hands-on retail experience · IBTA Certified · Blue Wave Platinum
          </p>
        </div>

        {/* Visual: organized shelf illustration */}
        <div className="md:col-span-5 relative">
          <HeroShelf />
        </div>
      </div>

      {/* Soft wave divider */}
      <svg
        className="absolute bottom-0 left-0 w-full text-bone"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 30 C 240 60, 480 0, 720 30 S 1200 60, 1440 30 L1440 60 L0 60 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
