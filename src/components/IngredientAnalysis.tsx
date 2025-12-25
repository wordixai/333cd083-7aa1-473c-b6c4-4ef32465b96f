import { CheckCircle, AlertCircle, XCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleIngredients = [
  { name: "Whole Grain Oats", status: "good", explanation: "Excellent source of fiber and nutrients" },
  { name: "Organic Honey", status: "warning", explanation: "Natural sugar – consume in moderation" },
  { name: "High Fructose Corn Syrup", status: "bad", explanation: "Processed sugar linked to health issues" },
  { name: "Natural Flavors", status: "warning", explanation: "Vague term – could contain various additives" },
  { name: "Vitamin D", status: "good", explanation: "Essential vitamin for bone health" },
];

const IngredientAnalysis = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Smart Analysis
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Plain English
                <br />
                <span className="gradient-text">Ingredient Breakdown</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No more confusing chemical names. Emma explains every ingredient in words you understand,
                color-coded by health impact so you can make informed choices at a glance.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="text-sm text-muted-foreground">Safe & Healthy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <span className="text-sm text-muted-foreground">Use Caution</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="text-sm text-muted-foreground">Avoid</span>
                </div>
              </div>
              <Button variant="hero" size="lg">
                Try It Now
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Analysis card */}
            <div className="order-1 lg:order-2">
              <div className="bg-card rounded-3xl border border-border shadow-xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div>
                    <h3 className="font-semibold text-lg">Granola Bar</h3>
                    <p className="text-sm text-muted-foreground">5 ingredients analyzed</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/15 text-warning">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Moderate</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {sampleIngredients.map((ingredient, index) => {
                    const statusConfig = {
                      good: { icon: CheckCircle, color: "text-success", bg: "bg-success/10" },
                      warning: { icon: AlertCircle, color: "text-warning", bg: "bg-warning/10" },
                      bad: { icon: XCircle, color: "text-destructive", bg: "bg-destructive/10" },
                    };
                    const config = statusConfig[ingredient.status as keyof typeof statusConfig];
                    const Icon = config.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                      >
                        <div className={`mt-0.5 w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-4 h-4 ${config.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium">{ingredient.name}</p>
                          <p className="text-sm text-muted-foreground">{ingredient.explanation}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Hidden Sugars</p>
                      <p className="text-2xl font-bold text-destructive">18g</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Health Score</p>
                      <p className="text-2xl font-bold text-warning">6.2/10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientAnalysis;
