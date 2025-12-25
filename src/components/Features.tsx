import { Eye, Languages, AlertTriangle, Lock, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Reveal Hidden Sugars",
    description: "Uncover the 56+ names manufacturers use to disguise sugar in ingredients lists.",
    color: "destructive" as const,
  },
  {
    icon: Languages,
    title: "Translate Any Label",
    description: "Scan products from any country. Emma translates and explains every ingredient.",
    color: "primary" as const,
  },
  {
    icon: AlertTriangle,
    title: "Spot Harmful Additives",
    description: "Get instant alerts on artificial colors, preservatives, and controversial additives.",
    color: "warning" as const,
  },
  {
    icon: Lock,
    title: "100% Private",
    description: "All processing happens on your device. Your food data never leaves your phone.",
    color: "primary" as const,
  },
  {
    icon: Zap,
    title: "Instant Analysis",
    description: "Get comprehensive ingredient breakdown in under 2 seconds.",
    color: "success" as const,
  },
  {
    icon: Heart,
    title: "Personalized Alerts",
    description: "Set your dietary preferences and get warnings tailored to your needs.",
    color: "destructive" as const,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text">Eat Smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Emma goes beyond simple scanning. Get the full picture of what you're really eating.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const colorClasses = {
              primary: "bg-primary/10 text-primary",
              destructive: "bg-destructive/10 text-destructive",
              warning: "bg-warning/10 text-warning",
              success: "bg-success/10 text-success",
            };

            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${colorClasses[feature.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
