
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Ergonomic Baby Carrier",
    retailer: "Jollyroom SE",
    description: "Premium ergonomic baby carrier for optimal comfort and support.",
    price: "79.99",
    commission: "5%",
    link: "https://example.com/product1",
    image: "https://placehold.co/300x300/soft-blue/white?text=Baby+Carrier",
  },
  {
    id: 2,
    name: "Organic Cotton Onesies (5-pack)",
    retailer: "BabyWorld SE",
    description: "Soft, breathable organic cotton onesies for sensitive skin.",
    price: "34.99",
    commission: "8%",
    link: "https://example.com/product2",
    image: "https://placehold.co/300x300/soft-pink/white?text=Onesies",
  },
  {
    id: 3,
    name: "Wooden Educational Toys Set",
    retailer: "Kid's Concept",
    description: "Sustainable wooden toys to promote fine motor skills and learning.",
    price: "45.99",
    commission: "10%",
    link: "https://example.com/product3",
    image: "https://placehold.co/300x300/soft-yellow/white?text=Toys+Set",
  },
  {
    id: 4,
    name: "Baby Monitor with HD Camera",
    retailer: "Safekid SE",
    description: "High-definition baby monitor with night vision and two-way audio.",
    price: "129.99",
    commission: "10%",
    link: "https://example.com/product4",
    image: "https://placehold.co/300x300/soft-peach/white?text=Baby+Monitor",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product) => (
            <a 
              key={product.id} 
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-baby-pink text-white text-xs px-2 py-1 rounded-full">
                  {product.commission} commission
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-lg mb-1 text-foreground">{product.name}</h3>
                <p className="text-xs text-baby-blue font-medium mb-2">{product.retailer}</p>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">${product.price}</span>
                  <span className="text-baby-pink group-hover:underline text-sm font-medium flex items-center">
                    Buy Now <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-secondary" asChild>
            <Link to="/products">
              View All Products <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
