import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const heroImages = [
  "/images/hero1.webp",
  "/images/hero2.webp",
  "/images/hero3.webp",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-soft-blue to-white overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero Bild ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentImage}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md animate-fade-in">
            Din pålitliga källa för prisvärda, högkvalitativa babyprodukter
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md animate-slide-up">
            Eftersom varje bebis förtjänar det bästa
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <Button 
              className="btn-tertiary flex items-center gap-2 text-lg" 
              asChild
            >
              <Link to="/produkter">
                Handla nu <ShoppingBag className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentImage ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Gå till bild ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;