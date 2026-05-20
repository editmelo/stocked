export function ServiceArea() {
  return (
    <section className="relative py-20 md:py-28 bg-teal-700 text-cream overflow-hidden">
      {/* Decorative dots / map texture */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(223,214,193,0.4) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">
            Service area
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-balance">
            Indianapolis-based.
            <br />
            <span className="text-tan-200">Serving the Midwest.</span>
          </h2>
          <p className="mt-5 text-lg text-cream/80 text-pretty leading-relaxed max-w-xl">
            We start where we are — Indianapolis — and serve businesses across
            the Midwest. Our vision is to become the most trusted retail support
            and brand engagement partner regionally, then nationally.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Indianapolis", "Fort Wayne", "Cincinnati", "Louisville", "Chicago", "Columbus", "Detroit"].map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 border border-cream/15 text-sm font-medium text-cream/90"
              >
                <span className="size-1.5 rounded-full bg-sage-300" />
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Stylized map illustration */}
        <div className="relative aspect-square w-full max-w-md mx-auto">
          <MidwestMap />
        </div>
      </div>
    </section>
  );
}

function MidwestMap() {
  // Approximate coordinates for an abstract map visualization
  const cities = [
    { x: 50, y: 60, label: "Indianapolis", primary: true },
    { x: 52, y: 38, label: "Fort Wayne" },
    { x: 64, y: 60, label: "Cincinnati" },
    { x: 48, y: 72, label: "Louisville" },
    { x: 28, y: 38, label: "Chicago" },
    { x: 66, y: 50, label: "Columbus" },
    { x: 70, y: 25, label: "Detroit" },
  ];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
      {/* Soft halo */}
      <defs>
        <radialGradient id="halo" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#7ba38c" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7ba38c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="60" r="48" fill="url(#halo)" />

      {/* Abstract midwest landmass blob */}
      <path
        d="M20 25 Q 40 18, 60 22 T 88 38 Q 92 55, 85 72 T 60 88 Q 38 92, 22 80 T 10 50 Q 12 32, 20 25 Z"
        fill="rgba(249,247,240,0.06)"
        stroke="rgba(223,214,193,0.4)"
        strokeWidth="0.5"
        strokeDasharray="2 2"
      />

      {/* Connection lines from Indy */}
      {cities.filter((c) => !c.primary).map((c) => (
        <line
          key={`line-${c.label}`}
          x1="50"
          y1="60"
          x2={c.x}
          y2={c.y}
          stroke="#dfd6c1"
          strokeWidth="0.3"
          strokeDasharray="1 1.5"
          opacity="0.6"
        />
      ))}

      {/* City dots */}
      {cities.map((c) => (
        <g key={c.label}>
          {c.primary && (
            <circle
              cx={c.x}
              cy={c.y}
              r="4"
              fill="none"
              stroke="#dfd6c1"
              strokeWidth="0.4"
              opacity="0.7"
            >
              <animate attributeName="r" from="3" to="6" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.7" to="0" dur="2.5s" repeatCount="indefinite" />
            </circle>
          )}
          <circle
            cx={c.x}
            cy={c.y}
            r={c.primary ? 2 : 1.2}
            fill={c.primary ? "#dfd6c1" : "#7ba38c"}
            stroke="#f9f7f0"
            strokeWidth="0.3"
          />
          {c.primary && (
            <text
              x={c.x}
              y={c.y - 5}
              textAnchor="middle"
              fontSize="3"
              fill="#f9f7f0"
              fontFamily="system-ui"
              fontWeight="700"
            >
              Indianapolis · HQ
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
