import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProductSection from "@/components/ProductSection";
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
      <FeaturesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;