import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { kidsconceptProducts } from "@/data/kidsconceptProducts";

const KidsConceptProducts = () => {
  // Select 5 featured products
  const featuredProducts = kidsconceptProducts
    .filter(product => product.isBestSeller || product.isEditorsPick)
    .slice(0, 5);
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Kid's Concept Produkter</h2>
            <p className="text-gray-600 mt-2">
              Träleksaker & möbler för kreativ lek
            </p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" asChild>
              <Link to="/produkter">
                Visa alla <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredProducts.map(product => (
            <a 
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
              onClick={() => {
                console.log(`Product click: ${product.name} from Kid's Concept`);
              }}
            >
              <div className="aspect-square bg-gray-100 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.svg';
                  }}
                />
                {product.isBestSeller && (
                  <span className="absolute top-2 left-2 bg-baby-pink text-white text-xs px-2 py-1 rounded-full">
                    Bästsäljare
                  </span>
                )}
                {product.isEditorsPick && (
                  <span className="absolute top-2 left-2 bg-baby-yellow text-gray-800 text-xs px-2 py-1 rounded-full">
                    Redaktörens val
                  </span>
                )}
              </div>
              <div className="p-3">
                <h4 className="font-medium text-sm line-clamp-2">{product.name}</h4>
                <p className="text-baby-pink font-bold mt-1">{product.priceRange}</p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-6 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link to="/produkter">
              Visa alla <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KidsConceptProducts;