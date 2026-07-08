import { HeroIntro } from "./_components/HeroIntro";
import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { TrustStrip } from "./_components/TrustStrip";
import { Services } from "./_components/Services";
import { WhyStocked } from "./_components/WhyStocked";
import { About } from "./_components/About";
import { Credentials } from "./_components/Credentials";
import { SupportingPartner } from "./_components/SupportingPartner";
import { ServiceArea } from "./_components/ServiceArea";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroIntro />
      <Nav />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyStocked />
      <About />
      <Credentials />
      <SupportingPartner />
      <ServiceArea />
      <Contact />
      <Footer />
    </main>
  );
}
