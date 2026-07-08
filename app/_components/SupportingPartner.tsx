import Image from "next/image";

export function SupportingPartner() {
  return (
    <section className="relative bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
          Proud Supporting Partner
        </p>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center rounded-2xl bg-bone/60 border border-pine/10 shadow-soft px-8 py-6 md:px-12 md:py-8">
            <Image
              src="/urban-league-logo.png"
              alt="Indianapolis Urban League"
              width={250}
              height={88}
              style={{ width: "auto", height: 68 }}
              priority={false}
            />
          </div>
        </div>

        <p className="mt-8 mx-auto max-w-xl text-base md:text-lg text-pine/70 text-pretty leading-relaxed">
          Stocked, LLC is proud to be supported by the{" "}
          <span className="font-semibold text-pine">Indianapolis Urban League</span>
          {" "}— empowering entrepreneurs and building stronger communities across
          central Indiana.
        </p>
      </div>
    </section>
  );
}
