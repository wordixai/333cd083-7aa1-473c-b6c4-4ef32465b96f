import { Camera, Zap } from "lucide-react";

const ScannerDemo = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone mockup */}
            <div className="relative flex justify-center">
              <div className="relative w-[280px] h-[560px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="relative w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Camera viewfinder */}
                  <div className="absolute inset-4 rounded-2xl overflow-hidden bg-muted">
                    {/* Product image placeholder */}
                    <img
                      src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=600&fit=crop"
                      alt="Food product label"
                      className="w-full h-full object-cover opacity-80"
                    />

                    {/* Scan overlay */}
                    <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl">
                      {/* Corner brackets */}
                      <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-primary rounded-tl-lg" />
                      <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-primary rounded-tr-lg" />
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-primary rounded-bl-lg" />
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-primary rounded-br-lg" />

                      {/* Scanning line */}
                      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />
                    </div>
                  </div>

                  {/* Bottom UI */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background via-background/90 to-transparent">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg animate-pulse-glow">
                        <Camera className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Top notch */}
                  <div className="absolute top-2 inset-x-0 flex justify-center">
                    <div className="w-24 h-6 bg-foreground rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -right-4 top-20 glass p-4 rounded-2xl animate-float shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                    <span className="text-destructive font-bold">!</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Hidden Sugar</p>
                    <p className="font-semibold text-destructive">32g detected</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-32 glass p-4 rounded-2xl animate-float float-delay-1 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">AI Analysis</p>
                    <p className="font-semibold text-success">Complete</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Next-Gen Technology
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                AI That Truly
                <br />
                <span className="gradient-text">Understands Food</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most scanners still rely on outdated databases – limited, inaccurate, and blind to what really matters.
                Emma is different. Our AI reads any label or barcode from any country, translates it, and explains
                in plain words what's safe and what's not.
              </p>
              <ul className="space-y-4">
                {[
                  "Reads labels in any language",
                  "Identifies hidden sugars and additives",
                  "Explains ingredients in simple terms",
                  "Works offline – your data stays private"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScannerDemo;
