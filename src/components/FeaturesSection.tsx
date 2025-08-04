import { Truck, Shield, RefreshCw, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Truck,
      title: "FREE SHIPPING",
      description: "On all orders over $50"
    },
    {
      icon: Shield,
      title: "99-DAY GUARANTEE",
      description: "Love them or your money back"
    },
    {
      icon: RefreshCw,
      title: "EASY EXCHANGES",
      description: "Free size exchanges within 30 days"
    },
    {
      icon: Award,
      title: "PREMIUM QUALITY",
      description: "Made from 100% sustainable alpaca fiber"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-hollow-green/10 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-hollow-green" />
                </div>
                <h3 className="font-bold text-sm mb-2 text-hollow-dark">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;