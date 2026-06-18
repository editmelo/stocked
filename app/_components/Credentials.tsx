export function Credentials() {
  return (
    <section id="credentials" className="relative py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-600">
            Credentials
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance">
            Certified, trained, and proven.
          </h2>
          <p className="mt-5 text-lg text-pine/70 text-pretty leading-relaxed">
            Real qualifications that back up the work — so you know exactly who's
            showing up to support your business.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <CredentialCard
            badge="IBTA"
            title="International Customer Service Certification"
            issuer="International Board of Trade Associations"
            body="Trained and certified in customer service standards, ensuring professionalism and care in every customer interaction we deliver on your behalf."
            accent="teal"
          />
          <CredentialCard
            badge="Platinum"
            title="Blue Wave Supplier Development Program"
            issuer="Houston, Texas"
            body="Graduated with Platinum-level certification — the highest tier awarded. Confirms business readiness, supplier-grade reliability, and proven operational standards."
            accent="sage"
          />
        </div>
      </div>
    </section>
  );
}

function CredentialCard({
  badge,
  title,
  issuer,
  body,
  accent,
}: {
  badge: string;
  title: string;
  issuer: string;
  body: string;
  accent: "teal" | "sage";
}) {
  const accentBg = accent === "teal" ? "bg-teal-600" : "bg-sage-500";
  const accentRing = accent === "teal" ? "ring-teal-200" : "ring-sage-200";

  return (
    <div className="relative rounded-[1.75rem] bg-bone border border-pine/10 p-8 md:p-10 shadow-soft hover:shadow-lifted transition-shadow">
      <div className="flex items-start gap-5">
        {/* Badge */}
        <div className="relative shrink-0">
          <div
            className={`size-20 rounded-2xl ${accentBg} text-cream flex items-center justify-center ring-8 ${accentRing} shadow-lifted`}
          >
            <span className="font-display font-extrabold text-sm tracking-tight uppercase leading-none text-center px-2">
              {badge}
            </span>
          </div>
          {/* Sparkle */}
          <svg
            className="absolute -top-2 -right-2"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7z"
              fill="#e6bb47"
              stroke="#143a55"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex-1">
          <h3 className="font-display text-xl md:text-2xl font-bold leading-tight tracking-tight">
            {title}
          </h3>
          <p className="mt-1 text-sm text-pine/60 italic">{issuer}</p>
          <p className="mt-4 text-pine/75 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}
