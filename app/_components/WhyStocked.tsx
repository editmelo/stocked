export function WhyStocked() {
  const reasons = [
    {
      title: "Reliable & consistent",
      body:
        "We show up when we say we will, do the work the way it should be done, and deliver the same quality every visit — so you never have to wonder whether the job got handled.",
      icon: ClockIcon,
    },
    {
      title: "20+ years of experience",
      body:
        "Two decades of hands-on retail, stocking, and customer-facing work. We know what empty shelves, backroom overflow, and disorganized displays look like — and we know how to fix them, fast.",
      icon: SparkIcon,
    },
    {
      title: "Solutions-focused",
      body:
        "We don't need constant direction. We walk in, see the problem, fix it with precision, and leave your space better than we found it. Every time.",
      icon: HandshakeIcon,
    },
  ];

  return (
    <section
      id="why"
      className="relative py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, var(--color-cream) 0%, var(--color-tan-50) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-600">
            Why Stocked
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance">
            You can count on Stocked.
          </h2>
          <p className="mt-5 text-lg text-pine/70 text-pretty leading-relaxed">
            Retail support shouldn't be something you worry about. Our promise
            is simple — show up, do the work with care, and make your
            operations easier, not harder.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="relative rounded-[1.75rem] bg-cream p-8 border border-pine/10 shadow-soft hover:shadow-lifted hover:-translate-y-0.5 transition-all"
              >
                <div className="size-14 rounded-2xl bg-sage-100 flex items-center justify-center text-teal-700">
                  <Icon />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
                  {r.title}
                </h3>
                <p className="mt-3 text-pine/70 leading-relaxed">{r.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 12l4-4 3 3 4-4 4 4 3-3M7 16l3 3 3-3 3 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
