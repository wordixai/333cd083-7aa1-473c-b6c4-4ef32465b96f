import { useState, useEffect } from "react";
import { X, Camera, Zap, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockResults = [
  { name: "Whole Grain Wheat", status: "good", info: "Rich in fiber and nutrients" },
  { name: "Cane Sugar", status: "warning", info: "Added sugar - 12g per serving" },
  { name: "Palm Oil", status: "warning", info: "High in saturated fats" },
  { name: "Natural Flavors", status: "warning", info: "Vague term - could contain additives" },
  { name: "Sodium Benzoate", status: "bad", info: "Preservative - may cause reactions" },
];

const ScannerModal = ({ isOpen, onClose }: ScannerModalProps) => {
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setScanning(false);
      setScanned(false);
      setProgress(0);
    }
  }, [isOpen]);

  const handleScan = () => {
    setScanning(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanning(false);
          setScanned(true);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const handleReset = () => {
    setScanning(false);
    setScanned(false);
    setProgress(0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg mx-4 bg-card rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Camera className="w-4 h-4 text-primary" />
            </div>
            <span className="font-semibold">Emma Scanner</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!scanned ? (
            <>
              {/* Scanner view */}
              <div className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80"
                  alt="Product to scan"
                  className="w-full h-full object-cover"
                />

                {/* Scan overlay */}
                <div className="absolute inset-4 border-2 border-primary/50 rounded-xl">
                  <div className="absolute top-2 left-2 w-6 h-6 border-l-3 border-t-3 border-primary rounded-tl-lg" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-r-3 border-t-3 border-primary rounded-tr-lg" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-l-3 border-b-3 border-primary rounded-bl-lg" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r-3 border-b-3 border-primary rounded-br-lg" />

                  {scanning && (
                    <div
                      className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line"
                    />
                  )}
                </div>

                {/* Progress indicator */}
                {scanning && (
                  <div className="absolute bottom-4 inset-x-4">
                    <div className="bg-background/90 backdrop-blur rounded-full p-3">
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-primary animate-pulse" />
                        <div className="flex-1">
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary transition-all duration-200"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium">{progress}%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Scan button */}
              <Button
                variant="hero"
                size="xl"
                className="w-full"
                onClick={handleScan}
                disabled={scanning}
              >
                {scanning ? (
                  <>
                    <Zap className="w-5 h-5 animate-pulse" />
                    Analyzing Ingredients...
                  </>
                ) : (
                  <>
                    <Camera className="w-5 h-5" />
                    Scan This Product
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Point your camera at any food label or barcode
              </p>
            </>
          ) : (
            <>
              {/* Results */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">Breakfast Cereal</h3>
                    <p className="text-sm text-muted-foreground">5 ingredients analyzed</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/15 text-warning">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">6.5/10</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {mockResults.map((item, index) => {
                    const statusConfig = {
                      good: { icon: CheckCircle, color: "text-success", bg: "bg-success/10" },
                      warning: { icon: AlertCircle, color: "text-warning", bg: "bg-warning/10" },
                      bad: { icon: XCircle, color: "text-destructive", bg: "bg-destructive/10" },
                    };
                    const config = statusConfig[item.status as keyof typeof statusConfig];
                    const Icon = config.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl bg-muted/50"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-4 h-4 ${config.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.info}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hidden sugars alert */}
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 mb-6">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                  <div>
                    <p className="font-medium text-destructive">Hidden Sugars Detected</p>
                    <p className="text-sm text-muted-foreground">This product contains 18g of sugar (4.5 teaspoons)</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={handleReset}>
                  Scan Another
                </Button>
                <Button variant="hero" className="flex-1" onClick={onClose}>
                  Got It
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScannerModal;
