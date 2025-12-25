import HeroSection from "@/components/HeroSection";
import ScannerDemo from "@/components/ScannerDemo";
import Features from "@/components/Features";
import IngredientAnalysis from "@/components/IngredientAnalysis";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ScannerDemo />
      <Features />
      <HowItWorks />
      <IngredientAnalysis />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
