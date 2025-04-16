
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ChevronDown, Star, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/products/ProductCard";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { products, ProductCategory } from "@/data/products";
import { retailers } from "@/data/retailers";

const categories = Object.values(ProductCategory);

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.retailer.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-soft py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Discover the Best Baby Products from Trusted Brands
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore handpicked products across categories like clothing, toys, safety gear, and more.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Input 
                  type="text" 
                  placeholder="Search products or retailers..." 
                  className="pl-10 rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8 overflow-x-auto pb-4">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  className={`rounded-full whitespace-nowrap ${
                    activeCategory === "All" 
                      ? "bg-baby-pink text-white border-baby-pink" 
                      : "border-gray-200"
                  }`}
                  onClick={() => setActiveCategory("All")}
                >
                  All Products
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className={`rounded-full whitespace-nowrap ${
                      activeCategory === category 
                        ? "bg-baby-pink text-white border-baby-pink" 
                        : "border-gray-200"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Tag className="w-4 h-4" /> Sort <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Alphabetical (A-Z)</DropdownMenuItem>
                  <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                  <DropdownMenuItem>Best Sellers</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {activeCategory !== "All" && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{activeCategory}</h2>
                <p className="text-gray-600">
                  {activeCategory === ProductCategory.CLOTHING 
                    ? "Quality clothes, shoes, and accessories for babies and toddlers"
                    : activeCategory === ProductCategory.FEEDING
                    ? "Bottles, bibs, high chairs and everything for meal time"
                    : activeCategory === ProductCategory.TOYS
                    ? "Fun and educational toys to stimulate growing minds"
                    : activeCategory === ProductCategory.NURSERY
                    ? "Cribs, changing stations, and decor for the perfect nursery"
                    : "Products to keep your little one safe and healthy"}
                </p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or category filter</p>
              </div>
            )}

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Our Retail Partners</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {retailers.map((retailer) => (
                  <a 
                    key={retailer.id} 
                    href={retailer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl overflow-hidden shadow-md card-hover border border-gray-100"
                  >
                    <div className="flex p-6 items-center gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={retailer.logo} 
                          alt={`${retailer.name} logo`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="bg-soft-blue text-baby-blue px-2 py-1 rounded-full text-xs font-medium">
                          {retailer.category}
                        </span>
                        <h3 className="font-heading font-bold text-xl mt-1">{retailer.name}</h3>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 mb-4">{retailer.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-baby-yellow text-baby-yellow mr-1" />
                          <span className="text-sm font-medium text-baby-pink">{retailer.commission} commission</span>
                        </div>
                        <span className="text-sm text-baby-blue font-medium">Visit Store →</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
