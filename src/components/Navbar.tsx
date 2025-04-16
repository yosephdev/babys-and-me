
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, ShoppingBag, Baby } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-baby-pink p-2 rounded-full">
            <Baby className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-heading font-bold text-foreground">
            Baby's <span className="text-baby-pink">&</span> Me
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-baby-pink font-medium transition-colors">Home</Link>
          <Link to="/about" className="text-foreground hover:text-baby-pink font-medium transition-colors">About</Link>
          <Link to="/blog" className="text-foreground hover:text-baby-pink font-medium transition-colors">Blog</Link>
          <Link to="/products" className="text-foreground hover:text-baby-pink font-medium transition-colors">Products</Link>
          <Link to="/donate" className="text-foreground hover:text-baby-pink font-medium transition-colors">Donate</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Link to="/favorites" className="p-2 rounded-full hover:bg-soft-pink transition-colors">
            <Heart className="w-5 h-5 text-baby-pink" />
          </Link>
          <Link to="/products" className="p-2 rounded-full hover:bg-soft-blue transition-colors">
            <ShoppingBag className="w-5 h-5 text-baby-blue" />
          </Link>
          <Button className="btn-primary">Subscribe</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link to="/" className="text-foreground hover:text-baby-pink py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-foreground hover:text-baby-pink py-2" onClick={toggleMenu}>About</Link>
            <Link to="/blog" className="text-foreground hover:text-baby-pink py-2" onClick={toggleMenu}>Blog</Link>
            <Link to="/products" className="text-foreground hover:text-baby-pink py-2" onClick={toggleMenu}>Products</Link>
            <Link to="/donate" className="text-foreground hover:text-baby-pink py-2" onClick={toggleMenu}>Donate</Link>
            <Button className="btn-primary w-full">Subscribe</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
