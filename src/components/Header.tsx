import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Sale Banner */}
      <div className="bg-hollow-orange text-hollow-light py-2 px-4 text-center font-bold text-sm">
        🔥 HEAT ADVISORY SALE! BUY 3 GET 3 FREE
      </div>
      
      {/* Main Header */}
      <header className="bg-background border-b border-border py-4 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-hollow-dark">
            HOLLOW
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-hollow-green transition-colors font-medium">
              SHOP ALL
            </a>
            <a href="#" className="text-foreground hover:text-hollow-green transition-colors font-medium">
              BUNDLES
            </a>
            <a href="#" className="text-foreground hover:text-hollow-green transition-colors font-medium">
              REVIEWS
            </a>
            <a href="#" className="text-foreground hover:text-hollow-green transition-colors font-medium">
              SHOP BY ACTIVITY
            </a>
          </nav>
          
          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-hollow-orange text-hollow-light text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                0
              </span>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-hollow-green transition-colors font-medium">
                SHOP ALL
              </a>
              <a href="#" className="text-foreground hover:text-hollow-green transition-colors font-medium">
                BUNDLES
              </a>
              <a href="#" className="text-foreground hover:text-hollow-green transition-colors font-medium">
                REVIEWS
              </a>
              <a href="#" className="text-foreground hover:text-hollow-green transition-colors font-medium">
                SHOP BY ACTIVITY
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;