import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-pine text-cream py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo variant="light" size={42} />
            <p className="mt-5 text-cream/70 leading-relaxed max-w-sm text-pretty">
              Reliable, professional retail support and brand engagement
              services. Based in Indianapolis, serving the Midwest.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">
              Sections
            </h4>
            <ul className="mt-4 space-y-2.5 text-cream/80">
              <li><a href="#services" className="hover:text-tan-200 transition-colors">Services</a></li>
              <li><a href="#why" className="hover:text-tan-200 transition-colors">Why Stocked</a></li>
              <li><a href="#about" className="hover:text-tan-200 transition-colors">About</a></li>
              <li><a href="#credentials" className="hover:text-tan-200 transition-colors">Credentials</a></li>
              <li><a href="#contact" className="hover:text-tan-200 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2.5 text-cream/80">
              <li>
                <a
                  href="mailto:Stockedbiz@yahoo.com"
                  className="hover:text-tan-200 transition-colors"
                >
                  Stockedbiz@yahoo.com
                </a>
              </li>
              <li>
                <a
                  href="tel:3176401013"
                  className="hover:text-tan-200 transition-colors"
                >
                  317-640-1013
                </a>
              </li>
              <li>Indianapolis, IN</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-cream/55">
            © {year} Stocked, LLC. All rights reserved.
          </p>
          <p className="text-sm text-cream/55">
            Built with care. You can count on Stocked.
          </p>
          <p className="text-sm text-cream/55">
            Designed by{" "}
            <a
              href="https://www.editmelo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cream/75 hover:text-tan-200 transition-colors"
            >
              Edit Me Lo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
