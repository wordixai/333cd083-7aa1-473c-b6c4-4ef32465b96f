import { Button } from "@/components/ui/button";
import { Scan, Apple, Play } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Discover What's
            <br />
            <span className="gradient-text">Really in Your Food?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join 50,000+ health-conscious users who've already transformed the way they shop and eat.
            Start your free trial today – no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Scan className="w-5 h-5" />
              Start Scanning Free
            </Button>
          </div>

          {/* App store buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity">
              <Apple className="w-7 h-7" />
              <div className="text-left">
                <p className="text-xs opacity-80">Download on the</p>
                <p className="font-semibold">App Store</p>
              </div>
            </button>
            <button className="flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity">
              <Play className="w-7 h-7" />
              <div className="text-left">
                <p className="text-xs opacity-80">Get it on</p>
                <p className="font-semibold">Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
