import { Navbar } from './components/navbar';
import { HeroSection } from './components/hero-section';
import { FeatureStrip } from './components/feature-strip';
import { AboutSection } from './components/about-section';
import { ServicesSection } from './components/services-section';
import { BrokersSection } from './components/brokers-section';
import { ProcessSection } from './components/process-section';
import { ContactUsSection } from './components/contact-us-section';
import { CTASection } from './components/cta-section';
import { Footer } from './components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 bg-white">
        <HeroSection />
        <FeatureStrip />
        <AboutSection />
        <ServicesSection />
        <BrokersSection />
        <ProcessSection />
        <ContactUsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
