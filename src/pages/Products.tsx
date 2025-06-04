import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ChevronDown, Star, Tag, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/products/ProductCard";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProductCategory } from "@/data/products";
import { retailers } from "@/data/retailers";
import { useProducts } from "@/hooks/useProducts";
import { AdtractionProduct } from "@/services/adtractionApi";

const categories = Object.values(ProductCategory);

type SortOption = 'alphabetical' | 'price-low-high' | 'price-high-low';

const sortOptions: Record<SortOption, string> = {
  'alphabetical': 'Alfabetiskt',
  'price-low-high': 'Pris: Lågt till högt',
  'price-high-low': 'Pris: Högt till lågt'
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || "All");
  const [sortOption, setSortOption] = useState<SortOption>('price-low-high');
  
  // Update activeCategory when URL changes
  useEffect(() => {
    setActiveCategory(categoryParam || "All");
  }, [categoryParam]);

  const { products, isLoading, error, pagination, count } = useProducts({
    category: activeCategory === "All" ? undefined : activeCategory,
    pageSize: 6
  });

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    
    // Update URL search params
    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const handleSort = (option: SortOption) => {
    setSortOption(option);
  };
  
  // Filter products by search term
  const filteredProducts = products.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.advertiserName?.toLowerCase().includes(searchTerm.toLowerCase()) || false);
    
    return matchesSearch;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'alphabetical':
        return a.name.localeCompare(b.name);
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-soft py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Upptäck de bästa babyprodukterna från pålitliga varumärken
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Utforska handplockade produkter inom kategorier som kläder, leksaker, säkerhetsutrustning och mer.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Input 
                  type="text" 
                  placeholder="Sök produkter eller återförsäljare..." 
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
                  onClick={() => handleCategoryChange("All")}
                >
                  Alla produkter
                </Button>
                {Object.values(ProductCategory).map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className={`rounded-full whitespace-nowrap ${
                      activeCategory === category 
                        ? "bg-baby-pink text-white border-baby-pink" 
                        : "border-gray-200"
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="flex justify-end mb-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      Sortera efter: {sortOptions[sortOption]}
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Sortera efter</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {Object.entries(sortOptions).map(([value, label]) => (
                      <DropdownMenuItem
                        key={value}
                        onClick={() => handleSort(value as SortOption)}
                      >
                        {label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            {activeCategory !== "All" && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{activeCategory}</h2>
                <p className="text-gray-600">
                  {activeCategory === ProductCategory.CLOTHING 
                    ? "Kvalitetskläder, skor och accessoarer för bebisar och småbarn"
                    : activeCategory === ProductCategory.FEEDING
                    ? "Flaskor, haklappar, barnstolar och allt för måltider"
                    : activeCategory === ProductCategory.TOYS
                    ? "Roliga och pedagogiska leksaker för att stimulera växande sinnen"
                    : activeCategory === ProductCategory.NURSERY
                    ? "Spjälsängar, skötbord och inredning för det perfekta barnrummet"
                    : "Produkter för att hålla ditt lilla barn säkert och friskt"}
                </p>
              </div>
            )}
            
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-baby-pink" />
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500">Ett fel uppstod vid hämtning av produkter. Försök igen senare.</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Inga produkter hittades som matchar din sökning.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                
                {sortedProducts.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-bold mb-2">Inga produkter hittades</h3>
                    <p className="text-gray-600">Försök justera din sökning eller kategorifilter</p>
                  </div>
                )}
                
                {pagination.totalPages > 1 && (
                  <div className="mt-8">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => pagination.prevPage()}
                            className={!pagination.hasPrevPage ? "opacity-50 pointer-events-none" : ""}
                          />
                        </PaginationItem>
                        
                        {Array.from({ length: pagination.totalPages }).map((_, i) => (
                          <PaginationItem key={i}>
                            <PaginationLink 
                              onClick={() => pagination.goToPage(i)}
                              isActive={pagination.currentPage === i}
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                        
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => pagination.nextPage()}
                            className={!pagination.hasNextPage ? "opacity-50 pointer-events-none" : ""}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            )}

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Våra återförsäljare</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {retailers.map((retailer) => (
                  <a 
                    key={retailer.id} 
                    href={retailer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl overflow-hidden shadow-md card-hover border border-gray-100"
                    onClick={() => {
                      // Track retailer click for analytics
                      console.log(`Retailer click: ${retailer.name}`);
                      // Could add more sophisticated tracking here
                    }}
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
                          <span className="text-sm font-medium text-baby-pink">{retailer.commission} provision</span>
                        </div>
                        <span className="text-sm text-baby-blue font-medium">Besök butik →</span>
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