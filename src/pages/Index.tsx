import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StakeholdersSection } from "@/components/StakeholdersSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { AboutSection } from "@/components/AboutSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <StakeholdersSection />
        <CapabilitiesSection />
        <AboutSection />
        <LeadershipSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
