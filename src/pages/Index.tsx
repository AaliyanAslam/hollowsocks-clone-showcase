import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProductSection from "@/components/ProductSection";
import ShopByActivitySection from "@/components/ShopByActivitySection";
import CompressionSection from "@/components/CompressionSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ProductSection />
      <ShopByActivitySection />
      <CompressionSection />
      <FeaturesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;