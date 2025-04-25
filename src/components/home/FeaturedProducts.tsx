
import { ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductCategory, products } from "@/data/products";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const FeaturedProducts = () => {
  const categories = Object.values(ProductCategory);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: async () => {
      // Get featured products (best sellers or editor's picks) from each category
      const featuredProducts = products.filter(p => p.isBestSeller || p.isEditorsPick);
      
      // Ensure we have representation from different categories
      const categorizedProducts = {};
      const result = [];
      
      // First pass: get one from each category if possible
      for (const product of featuredProducts) {
        if (!categorizedProducts[product.category] && result.length < 4) {
          categorizedProducts[product.category] = true;
          result.push(product);
        }
      }
      
      // If we still need more, add any remaining featured products
      if (result.length < 4) {
        for (const product of featuredProducts) {
          if (!result.includes(product) && result.length < 4) {
            result.push(product);
          }
        }
      }
      
      // If we still don't have 4, add regular products
      if (result.length < 4) {
        for (const product of products) {
          if (!result.includes(product) && result.length < 4) {
            result.push(product);
          }
        }
      }
      
      return result.slice(0, 4);
    },
    enabled: isClient // Only run query on client-side to avoid SSR issues
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Products</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our handpicked selection of high-quality baby products from trusted brands. 
          From clothing to safety gear, we've got everything your little one needs.
        </p>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="animate-spin w-8 h-8 text-baby-blue" />
            <span className="ml-2 text-lg">Loading featured products...</span>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-gray-600">Unable to load featured products. Please try again later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {data?.map((product) => product && (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

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
