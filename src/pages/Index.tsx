import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ContactSection } from "@/components/ContactSection";
import { PlansSection } from "@/components/PlansSection";
import { AboutSection } from "@/components/AboutSection";
import { FibraSection } from "@/components/FibraSection";
import { OffersCallout } from "@/components/OffersCallout";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ContactSection />
      <PlansSection />
      <OffersCallout />
      <FibraSection />
      <OffersCallout />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
