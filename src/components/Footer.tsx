import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCategory } from "@/data/products";

const Footer = () => {
  return (
    <footer className="bg-gradient-soft pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-heading font-bold mb-4 text-foreground">Baby's & Me</h3>
            <p className="text-sm text-gray-600 mb-4">
              Your trusted source for affordable, high-quality baby products – because every baby deserves the best.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                <Facebook size={18} className="text-baby-blue" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                <Instagram size={18} className="text-baby-pink" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                <Twitter size={18} className="text-baby-blue" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                <Mail size={18} className="text-baby-yellow" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-heading font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-600 hover:text-baby-pink transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-baby-pink transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-baby-pink transition-colors">Blog</Link></li>
              <li><Link to="/products" className="text-sm text-gray-600 hover:text-baby-pink transition-colors">Products</Link></li>
              <li><Link to="/donate" className="text-sm text-gray-600 hover:text-baby-pink transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-heading font-bold mb-4 text-foreground">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/products"
                  className="text-sm text-gray-600 hover:text-baby-pink transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link 
                  to={`/products?category=${encodeURIComponent(ProductCategory.CLOTHING)}`}
                  className="text-sm text-gray-600 hover:text-baby-pink transition-colors"
                >
                  {ProductCategory.CLOTHING}
                </Link>
              </li>
              <li>
                <Link 
                  to={`/products?category=${encodeURIComponent(ProductCategory.FEEDING)}`}
                  className="text-sm text-gray-600 hover:text-baby-pink transition-colors"
                >
                  {ProductCategory.FEEDING}
                </Link>
              </li>
              <li>
                <Link 
                  to={`/products?category=${encodeURIComponent(ProductCategory.TOYS)}`}
                  className="text-sm text-gray-600 hover:text-baby-pink transition-colors"
                >
                  {ProductCategory.TOYS}
                </Link>
              </li>
              <li>
                <Link 
                  to={`/products?category=${encodeURIComponent(ProductCategory.NURSERY)}`}
                  className="text-sm text-gray-600 hover:text-baby-pink transition-colors"
                >
                  {ProductCategory.NURSERY}
                </Link>
              </li>
              <li>
                <Link 
                  to={`/products?category=${encodeURIComponent(ProductCategory.SAFETY)}`}
                  className="text-sm text-gray-600 hover:text-baby-pink transition-colors"
                >
                  {ProductCategory.SAFETY}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-heading font-bold mb-4 text-foreground">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for exclusive deals and parenting tips.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="rounded-full" 
              />
              <Button className="w-full btn-primary">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-xs text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Baby's & Me. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-baby-pink transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-xs text-gray-500 hover:text-baby-pink transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
