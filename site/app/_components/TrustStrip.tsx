export function TrustStrip() {
  const items = [
    { number: "20+", label: "Years of hands-on retail experience" },
    { number: "IBTA", label: "International Customer Service Certified" },
    { number: "Platinum", label: "Blue Wave Supplier Development tier" },
    { number: "100%", label: "On-site, in-person service delivery" },
  ];

  return (
    <section className="relative bg-bone py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-pine/55">
          The standard for retail support
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="text-center px-2 py-3 md:px-4 md:border-l md:border-pine/10 md:first:border-l-0"
            >
              <div className="font-display text-3xl md:text-4xl font-extrabold text-teal-700">
                {it.number}
              </div>
              <div className="mt-2 text-sm text-pine/70 leading-snug">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
