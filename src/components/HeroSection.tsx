import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scan, Shield, Globe } from "lucide-react";
import ScannerModal from "./ScannerModal";

const HeroSection = () => {
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920&q=80"
          alt="Colorful fresh vegetables and fruits"
          className="w-full h-full object-cover saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float float-delay-2" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 opacity-0 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">AI-Powered Food Intelligence</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Meet <span className="gradient-text">Emma</span>
            <br />
            <span className="gradient-text">Your AI Food Scanner</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The first app to reveal hidden sugars and decode ingredients straight from the label.
            Stop eating blind – let Emma protect your health.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={() => setIsScannerOpen(true)}>
              <Scan className="w-5 h-5" />
              Start Scanning Free
            </Button>
            <Button variant="hero-outline" size="xl">
              See How It Works
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">100% Private</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Any Country, Any Label</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-primary/20 border-2 border-background" />
                ))}
              </div>
              <span className="text-sm font-medium">50K+ Users</span>
            </div>
          </div>
        </div>
      </div>

      <ScannerModal isOpen={isScannerOpen} onClose={() => setIsScannerOpen(false)} />
    </section>
  );
};

export default HeroSection;
