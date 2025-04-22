
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/products/ProductCard";
import { products, ProductCategory } from "@/data/products";

// Get one featured product from each main category to showcase variety
const getFeaturedProducts = () => {
  const categories = Object.values(ProductCategory);
  const featuredProducts = [];
  
  for (const category of categories) {
    const productInCategory = products.find(
      (p) => p.category === category && (p.isBestSeller || p.isEditorsPick)
    );
    if (productInCategory) {
      featuredProducts.push(productInCategory);
    }
    if (featuredProducts.length >= 4) break; // Limit to 4 products
  }

  return featuredProducts;
};

const featuredProducts = getFeaturedProducts();

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Products</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our handpicked selection of high-quality baby products from trusted brands. 
          From clothing to safety gear, we've got everything your little one needs.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
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
