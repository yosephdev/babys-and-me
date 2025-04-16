
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Filter, ChevronDown, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const retailers = [
  {
    id: 1,
    name: "Jollyroom SE",
    description: "Online baby and children's store with a wide range of products",
    logo: "https://placehold.co/100/baby-blue/white?text=Jolly",
    commission: "5% per order",
    website: "https://example.com/jollyroom",
    category: "General",
  },
  {
    id: 2,
    name: "BabyWorld SE",
    description: "Unique and wide range of baby products for all ages",
    logo: "https://placehold.co/100/baby-pink/white?text=BW",
    commission: "8% per sale",
    website: "https://example.com/babyworld",
    category: "General",
  },
  {
    id: 3,
    name: "Polarn O. Pyret",
    description: "High-quality and sustainable clothes for children",
    logo: "https://placehold.co/100/baby-yellow/white?text=POP",
    commission: "8% per order",
    website: "https://example.com/polarn",
    category: "Clothing",
  },
  {
    id: 4,
    name: "Bugaboo SE",
    description: "Premium strollers and travel systems for modern parents",
    logo: "https://placehold.co/100/soft-blue/white?text=BB",
    commission: "6% per order",
    website: "https://example.com/bugaboo",
    category: "Travel",
  },
  {
    id: 5,
    name: "Baby V",
    description: "Real baby store with carefully selected products",
    logo: "https://placehold.co/100/soft-pink/white?text=BV",
    commission: "7% per order",
    website: "https://example.com/babyv",
    category: "General",
  },
  {
    id: 6,
    name: "Babyland",
    description: "Affordable baby products for everyday use",
    logo: "https://placehold.co/100/soft-yellow/white?text=BL",
    commission: "4% per order",
    website: "https://example.com/babyland",
    category: "General",
  },
  {
    id: 7,
    name: "Axkid SE",
    description: "Specialized in rear-facing car seats for maximum safety",
    logo: "https://placehold.co/100/baby-blue/white?text=AX",
    commission: "5% per sale",
    website: "https://example.com/axkid",
    category: "Safety",
  },
  {
    id: 8,
    name: "Kid's Concept",
    description: "Wooden toys and nursery furniture with Scandinavian design",
    logo: "https://placehold.co/100/baby-pink/white?text=KC",
    commission: "10% per sale",
    website: "https://example.com/kidsconcept",
    category: "Toys",
  },
];

const categories = ["All", "General", "Clothing", "Safety", "Toys", "Travel"];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredRetailers = retailers.filter(retailer => {
    const matchesCategory = activeCategory === "All" || retailer.category === activeCategory;
    const matchesSearch = retailer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         retailer.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-soft py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Shop Our Trusted Retailers</h1>
              <p className="text-xl text-gray-600 mb-8">
                Find affordable, high-quality baby products from our affiliate partners
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Input 
                  type="text" 
                  placeholder="Search retailers..." 
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
            <div className="flex justify-between items-center mb-8">
              <div className="flex overflow-x-auto pb-2 hide-scrollbar">
                <div className="flex space-x-2">
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
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="w-4 h-4" /> Sort <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Alphabetical (A-Z)</DropdownMenuItem>
                  <DropdownMenuItem>Highest Commission</DropdownMenuItem>
                  <DropdownMenuItem>Category</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRetailers.map((retailer) => (
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
            
            {filteredRetailers.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No retailers found</h3>
                <p className="text-gray-600">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
