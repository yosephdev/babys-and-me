import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, ShoppingBag, Baby, Settings, Mail } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

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
          <Link to="/" className="text-foreground hover:text-baby-pink font-medium transition-colors">Hem</Link>
          <Link to="/om-oss" className="text-foreground hover:text-baby-pink font-medium transition-colors">Om oss</Link>
          <Link to="/produkter" className="text-foreground hover:text-baby-pink font-medium transition-colors">Produkter</Link>
          <Link to="/blogg" className="text-foreground hover:text-baby-pink font-medium transition-colors">Blogg</Link>
          <Link to="/donera" className="text-foreground hover:text-baby-pink font-medium transition-colors">Donera</Link>
          <Link to="/kontakta-oss" className="text-foreground hover:text-baby-pink font-medium transition-colors">Kontakt</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/favoriter" className="p-2 rounded-full hover:bg-soft-pink transition-colors">
            <Heart className="w-5 h-5 text-baby-pink" />
          </Link>
          <Link to="/produkter" className="p-2 rounded-full hover:bg-soft-blue transition-colors">
            <ShoppingBag className="w-5 h-5 text-baby-blue" />
          </Link>
          {isAuthenticated && (
            <Link to="/admin" className="p-2 rounded-full hover:bg-soft-blue transition-colors">
              <Settings className="w-5 h-5 text-baby-blue" />
            </Link>
          )}
          <Link to="/prenumerera" className="btn-primary flex items-center gap-2">
            <Button className="btn-primary flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Prenumerera
            </Button>
          </Link>
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
            <Link to="/" className="text-foreground hover:text-baby-pink py-2" onClick={toggleMenu}>Hem</Link>
            <Link to="/om-oss" className="text-foreground hover:text-baby-pink py-2" onClick={toggleMenu}>Om oss</Link>
            <Link to="/blogg" className="text-foreground hover:text-baby-pink py-2" onClick={toggleMenu}>Blogg</Link>
            <Link to="/produkter" className="text-foreground hover:text-baby-pink py-2" onClick={toggleMenu}>Produkter</Link>
            <Link to="/kontakta-oss" className="text-foreground hover:text-baby-pink py-2" onClick={toggleMenu}>Kontakt</Link>
            {isAuthenticated && (
              <Link to="/admin" className="text-foreground hover:text-baby-pink py-2" onClick={toggleMenu}>Admin</Link>
            )}
            <Link to="/prenumerera" className="btn-primary w-full text-center" onClick={toggleMenu}>
              Prenumerera
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;