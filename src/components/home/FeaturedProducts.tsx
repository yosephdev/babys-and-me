import { ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductCategory } from "@/data/products";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { fetchProducts } from "@/services/adtractionApi";

const FeaturedProducts = () => {
  const categories = Object.values(ProductCategory);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: async () => {
      // Fetch a larger set of products to filter from
      const response = await fetchProducts(undefined, 0, 20);
      
      // Get featured products (best sellers or editor's picks)
      // Prioritize products from advertisers we've applied to partner with
      const priorityAdvertisers = [
        "Jollyroom SE", "Babyland", "Stor&Liten", "Baby V", 
        "Bugaboo SE", "Zcooly", "BabyWorld SE", "Axkid SE"
      ];
      
      // First get products from priority advertisers
      let featuredProducts = response.products.filter(p => 
        (p.isBestSeller || p.isEditorsPick) && 
        priorityAdvertisers.includes(p.advertiserName)
      );
      
      // If we don't have enough, add other featured products
      if (featuredProducts.length < 8) {
        const otherFeatured = response.products.filter(p => 
          (p.isBestSeller || p.isEditorsPick) && 
          !priorityAdvertisers.includes(p.advertiserName)
        );
        featuredProducts = [...featuredProducts, ...otherFeatured];
      }
      
      // Ensure we have representation from different categories
      const categorizedProducts: Record<string, boolean> = {};
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
        for (const product of response.products) {
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
        <h2 className="section-title">Utvalda produkter</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Utforska vårt handplockade urval av högkvalitativa babyprodukter från pålitliga varumärken. 
          Från kläder till säkerhetsutrustning, vi har allt din lilla behöver.
        </p>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="animate-spin w-8 h-8 text-baby-blue" />
            <span className="ml-2 text-lg">Laddar utvalda produkter...</span>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-gray-600">Kunde inte ladda utvalda produkter. Försök igen senare.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {data?.map((product) => product && (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="secondary" asChild>
            <Link to="/produkter">
              Visa alla produkter <ChevronRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;