import Image from "next/image";

type Service = {
  title: string;
  description: string;
};

const operational: Service[] = [
  {
    title: "Product Stocking & Replenishment",
    description:
      "Shelves filled, faced, and ready for customers — on a schedule that fits your store.",
  },
  {
    title: "Merchandising & Plan-o-grams",
    description:
      "Accurate plan-o-gram execution and visual merchandising that keeps your aisles on-brand.",
  },
  {
    title: "Store Setups & Resets",
    description:
      "New store launches, seasonal resets, and full-aisle resets — done efficiently with minimal downtime.",
  },
  {
    title: "Project-Based Labor",
    description:
      "Reliable extra hands for one-time projects, special events, or peak seasons.",
  },
  {
    title: "Backroom Organization",
    description:
      "Clear out boxes, organize stock, and turn your backroom into a smooth-running operation.",
  },
  {
    title: "Inventory Support",
    description:
      "Counts, audits, and inventory prep handled with precision and care.",
  },
];

const ambassador: Service[] = [
  {
    title: "Customer Engagement",
    description:
      "Friendly, professional brand representatives who connect with your customers on the floor.",
  },
  {
    title: "Product Representation",
    description:
      "Demos, samples, and hands-on product education that drive interest and sales.",
  },
  {
    title: "Materials Distribution",
    description:
      "Flyers, coupons, and promotional materials placed and shared with care and consistency.",
  },
  {
    title: "Sales & Marketing Support",
    description:
      "On-the-ground support for product launches, in-store activations, and marketing campaigns.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative wash-top py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-600">
            What we do
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance">
            Two services. <br />
            <span className="text-teal-700">One reliable team.</span>
          </h2>
          <p className="mt-5 text-lg text-pine/70 text-pretty leading-relaxed">
            Whether you need someone to keep your retail environment running
            smoothly or someone to represent your brand on the floor — Stocked
            does both, with the same hands-on care and consistency.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <ServiceCard
            kind="ops"
            eyebrow="Service 01"
            title="Operational Support"
            blurb="Keeping your retail environment organized, efficient, and customer-ready."
            services={operational}
            imageSrc="/photos/services-operational.jpg"
            imageAlt="A retail worker carefully placing product on a shelf."
          />
          <ServiceCard
            kind="ambassador"
            eyebrow="Service 02"
            title="Brand Ambassador"
            blurb="Representing your brand on the floor with professionalism and warmth."
            services={ambassador}
            imageSrc="/photos/services-ambassador.jpg"
            imageAlt="A brand ambassador helping a customer at a counter."
            imagePosition="bottom"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  kind,
  eyebrow,
  title,
  blurb,
  services,
  imageSrc,
  imageAlt,
  imagePosition = "top",
}: {
  kind: "ops" | "ambassador";
  eyebrow: string;
  title: string;
  blurb: string;
  services: Service[];
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "top" | "bottom";
}) {
  const isOps = kind === "ops";
  const image = imageSrc && (
    <div className="relative h-44 md:h-56 w-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt ?? ""}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
  return (
    <div
      className="relative rounded-[2rem] shadow-soft border overflow-hidden flex flex-col"
      style={{
        background: isOps ? "var(--color-teal-700)" : "var(--color-bone)",
        borderColor: isOps
          ? "rgba(124,190,150,0.32)"
          : "rgba(20,58,85,0.1)",
        color: isOps ? "var(--color-cream)" : "var(--color-pine)",
      }}
    >
      {imagePosition === "top" && image}
      <div className="p-8 md:p-10 relative flex-1">
      {/* Decorative box */}
      <svg
        className="absolute -bottom-6 -right-6 opacity-15"
        width="180"
        height="180"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <path
          d="M16 38 L16 80 L84 80 L84 38"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M16 38 L24 22 L76 22 L84 38"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>

      <p
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
          isOps ? "text-sage-300" : "text-sage-600"
        }`}
      >
        {eyebrow}
      </p>
      <h3 className={`mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight ${isOps ? "text-cream" : ""}`}>
        {title}
      </h3>
      <p className={`mt-3 text-base md:text-lg leading-relaxed ${isOps ? "text-cream/80" : "text-pine/75"}`}>
        {blurb}
      </p>

      <ul className="mt-8 space-y-5">
        {services.map((s) => (
          <li key={s.title} className="flex gap-3">
            <span
              className="mt-1 flex-shrink-0 size-6 rounded-md flex items-center justify-center"
              style={{
                background: isOps ? "rgba(124,190,150,0.30)" : "var(--color-sage-100)",
              }}
              aria-hidden="true"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke={isOps ? "#bfdfca" : "#38694b"}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <div className="font-semibold text-base">{s.title}</div>
              <div
                className={`text-sm leading-relaxed mt-0.5 ${
                  isOps ? "text-cream/70" : "text-pine/65"
                }`}
              >
                {s.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
      {imagePosition === "bottom" && image}
    </div>
  );
}
