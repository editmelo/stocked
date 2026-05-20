export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-bone">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-center">
        {/* Story */}
        <div className="md:col-span-7 md:order-1 order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-600">
            Our story
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance">
            Built from <span className="underline-sketch">years on the floor.</span>
          </h2>

          <div className="mt-7 space-y-5 text-lg text-pine/75 leading-relaxed text-pretty max-w-2xl">
            <p>
              Stocked was created from years of walking into stores and seeing the same problem
              over and over again — boxes everywhere, empty shelves, products sitting untouched,
              and customers walking around frustrated because they couldn't find what they
              needed.
            </p>
            <p>
              Every time, I saw the stress on employees' faces and the missed opportunities for
              the business. There had to be a better way — one built on consistency, care, and
              real hands-on experience.
            </p>
            <p>
              That's why I built Stocked. To bring reliable, professional, on-site support to
              businesses that need it most — and to set a new standard for retail support.
            </p>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-sage-100 border border-sage-200/60">
            <span className="size-2 rounded-full bg-sage-500" />
            <span className="text-sm font-semibold text-sage-700">
              Founder-led · 20+ years of hands-on retail
            </span>
          </div>
        </div>

        {/* Visual collage */}
        <div className="md:col-span-5 md:order-2 order-1">
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto">
            {/* Back card */}
            <div className="absolute inset-x-6 inset-y-0 rounded-[2rem] bg-tan-200 rotate-[-3deg] shadow-soft" />
            {/* Front card */}
            <div className="absolute inset-0 rounded-[2rem] bg-teal-700 text-cream shadow-lifted rotate-[2deg] p-8 flex flex-col">
              <div className="flex items-center gap-2 text-sage-300 text-xs font-semibold uppercase tracking-[0.18em]">
                <span className="size-1.5 rounded-full bg-sage-300" />
                Promise
              </div>
              <p className="mt-4 font-display text-3xl font-bold leading-tight text-balance">
                "We show up, do the work with care, and make your operations easier — not harder."
              </p>
              <div className="mt-auto pt-8">
                <div className="text-sm text-cream/70">Stocked, LLC</div>
                <div className="text-base font-semibold">Founder & Operator</div>
              </div>
              <FloatingBoxes />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingBoxes() {
  return (
    <>
      <div className="absolute -top-5 -right-5 animate-float" style={{ animationDelay: "0.4s" }}>
        <svg width="64" height="64" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M16 38 L16 80 L84 80 L84 38" fill="#dfd6c1" stroke="#1b3a4b" strokeWidth="3" strokeLinejoin="round" />
          <path d="M16 38 L24 22 L76 22 L84 38 Z" fill="#efe9da" stroke="#1b3a4b" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute -bottom-6 -left-6 animate-float" style={{ animationDelay: "1.2s" }}>
        <svg width="56" height="56" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M16 38 L16 80 L84 80 L84 38" fill="#7ba38c" stroke="#1b3a4b" strokeWidth="3" strokeLinejoin="round" />
          <path d="M16 38 L24 22 L76 22 L84 38 Z" fill="#c7ddce" stroke="#1b3a4b" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      </div>
    </>
  );
}
