import { Camera, Cpu, FileText } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Scan Any Label",
    description: "Point your camera at any food label or barcode. Works with products from any country, in any language.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analyzes",
    description: "Emma's AI processes the ingredients in real-time, identifying sugars, additives, and potential concerns.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Get Clear Results",
    description: "Receive a plain-English breakdown with health scores, warnings, and personalized recommendations.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Three Simple Steps to
            <br />
            <span className="gradient-text">Healthier Choices</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No signup required. Just scan and discover what's really in your food.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
              )}

              <div className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
