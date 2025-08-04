import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("best-sellers");

  const bestSellers = [
    {
      id: 1,
      name: "Starter Bundle",
      originalPrice: "$215.94",
      salePrice: "$107.97",
      pricePerPair: "($17.99/pair)",
      badge: "BUY 3 GET 3 FREE",
      description: "2 Crew, 2 Ankle, 2 No-Show Socks. All for 50% Off + Free Shipping.",
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      name: "No Show Bundle",
      originalPrice: "$179.94",
      salePrice: "$89.97",
      pricePerPair: "($14.99/pair)",
      badge: "BUY 3 GET 3 FREE",
      description: "Low cut style, perfect for everyday wear.",
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      name: "Crew Bundle",
      originalPrice: "$239.94",
      salePrice: "$119.97",
      pricePerPair: "($19.99/pair)",
      badge: "BUY 3 GET 3 FREE",
      description: "Light compression, a classic crew style sock elevated.",
      image: "/api/placeholder/300/300"
    },
    {
      id: 4,
      name: "Compression Socks",
      originalPrice: "$89.97",
      salePrice: "$44.99",
      pricePerPair: "($14.99/pair)",
      badge: "TARGETED COMPRESSION",
      description: "FOR ALL-DAY COMFORT.",
      image: "/api/placeholder/300/300"
    }
  ];

  const bundles = [
    {
      id: 1,
      name: "Ultimate Bundle",
      originalPrice: "$299.94",
      salePrice: "$149.97",
      pricePerPair: "($24.99/pair)",
      badge: "BEST VALUE",
      description: "Everything you need for any activity.",
      image: "/api/placeholder/300/300"
    }
  ];

  const currentProducts = activeTab === "best-sellers" ? bestSellers : bundles;

  return (
    <section className="py-16 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-hollow-dark">
          SHOP HOLLOW SOCKS
        </h2>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setActiveTab("best-sellers")}
              className={`px-8 py-3 rounded-md font-medium transition-colors ${
                activeTab === "best-sellers"
                  ? "bg-background text-hollow-dark shadow-sm"
                  : "text-muted-foreground hover:text-hollow-dark"
              }`}
            >
              BEST SELLERS
            </button>
            <button
              onClick={() => setActiveTab("bundles")}
              className={`px-8 py-3 rounded-md font-medium transition-colors ${
                activeTab === "bundles"
                  ? "bg-background text-hollow-dark shadow-sm"
                  : "text-muted-foreground hover:text-hollow-dark"
              }`}
            >
              BUNDLES
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="aspect-square bg-muted">
                  {/* Placeholder for product image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Product Image</span>
                  </div>
                </div>
                
                {/* Sale Badge */}
                <div className="absolute top-3 left-3 bg-hollow-green text-hollow-light px-3 py-1 rounded-full text-xs font-bold">
                  {product.badge}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-hollow-dark">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-400 line-through text-sm">
                    {product.originalPrice}
                  </span>
                  <span className="font-bold text-lg text-hollow-dark">
                    {product.salePrice}
                  </span>
                </div>
                
                <div className="text-sm text-muted-foreground mb-3">
                  {product.pricePerPair}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                
                <Button variant="hollow" className="w-full">
                  ADD TO CART
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;