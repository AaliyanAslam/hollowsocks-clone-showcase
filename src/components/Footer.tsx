import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hollow-dark text-hollow-light">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">JOIN THE HOLLOW COMMUNITY</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Get exclusive offers, early access to new products, and sock care tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-hollow-green"
              />
              <button className="px-6 py-3 bg-hollow-green text-white font-semibold rounded-md hover:bg-hollow-green/90 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">HOLLOW</h4>
            <p className="text-gray-300 text-sm mb-4">
              Premium alpaca socks engineered for extreme heat and all-day comfort.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-hollow-green cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-hollow-green cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-hollow-green cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-hollow-green cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h5 className="font-semibold mb-4">SHOP</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">All Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">Bundles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">Compression Socks</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-semibold mb-4">SUPPORT</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold mb-4">COMPANY</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hollow-green transition-colors">Press</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Hollow Socks. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-hollow-green transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-hollow-green transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-hollow-green transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;