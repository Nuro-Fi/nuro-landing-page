import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EcosystemSection from "@/components/EcosystemSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div className="w-full bg-[#050505]">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <EcosystemSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
