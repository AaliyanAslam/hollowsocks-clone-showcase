import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="max-w-2xl">
          {/* Sale Badge */}
          <div className="inline-flex items-center gap-2 bg-hollow-orange text-hollow-light px-4 py-2 rounded-full text-sm font-bold mb-6">
            🔥 BUY 3 PAIRS, GET 3 FREE
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            ALPACA SOCKS BUILT<br />
            FOR 100° HEAT
          </h1>
          
          {/* CTA Button */}
          <Button variant="hollow" size="lg" className="text-lg px-8 py-4 h-auto">
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;