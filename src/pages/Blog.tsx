
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "All Posts",
  "Parenting Tips",
  "Product Reviews",
  "Budget Tips",
  "Baby Health",
  "Shopping Guide",
  "Development",
];

const blogPosts = [
  {
    id: 1,
    title: "10 Must-Have Baby Products for New Parents",
    excerpt: "Starting your parenting journey? These essential items will make your life easier and your baby happier.",
    image: "https://placehold.co/600x400/soft-blue/white?text=Must+Have+Products",
    date: "Mar 15, 2025",
    category: "Shopping Guide",
    slug: "must-have-baby-products",
  },
  {
    id: 2,
    title: "How to Choose Safe and Comfortable Baby Clothes",
    excerpt: "Learn about the best fabrics, sizes, and safety considerations when shopping for your baby's wardrobe.",
    image: "https://placehold.co/600x400/soft-pink/white?text=Baby+Clothes",
    date: "Apr 2, 2025",
    category: "Parenting Tips",
    slug: "safe-baby-clothes",
  },
  {
    id: 3,
    title: "Simple Ways to Save Money on Baby Supplies",
    excerpt: "Smart shopping strategies to help you provide the best for your baby without breaking the bank.",
    image: "https://placehold.co/600x400/soft-yellow/white?text=Save+Money",
    date: "Apr 9, 2025",
    category: "Budget Tips",
    slug: "save-money-baby-supplies",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Baby Sleep Training",
    excerpt: "Evidence-based strategies to help your baby develop healthy sleep habits and get more rest yourself.",
    image: "https://placehold.co/600x400/soft-blue/white?text=Sleep+Training",
    date: "Apr 12, 2025",
    category: "Parenting Tips",
    slug: "baby-sleep-training",
  },
  {
    id: 5,
    title: "Organic vs. Regular Baby Foods: What's the Difference?",
    excerpt: "A detailed comparison of organic and conventional baby foods to help you make informed choices.",
    image: "https://placehold.co/600x400/soft-pink/white?text=Baby+Food",
    date: "Apr 18, 2025",
    category: "Baby Health",
    slug: "organic-vs-regular-baby-food",
  },
  {
    id: 6,
    title: "Best Strollers of 2025: Comprehensive Review",
    excerpt: "Our team tested dozens of strollers to find the best options for different needs and budgets.",
    image: "https://placehold.co/600x400/soft-yellow/white?text=Strollers",
    date: "Apr 22, 2025",
    category: "Product Reviews",
    slug: "best-strollers-2025",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All Posts" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-soft py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Parenting Tips & Advice</h1>
              <p className="text-xl text-gray-600 mb-8">
                Helpful articles on parenting, baby care, and product recommendations
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
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
            <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar">
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
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover h-full flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-center text-sm mb-2">
                          <span className="bg-soft-pink text-baby-pink px-3 py-1 rounded-full">{post.category}</span>
                          <time className="text-gray-500">{post.date}</time>
                        </div>
                        <h3 className="font-heading font-bold text-xl mb-2 text-foreground group-hover:text-baby-pink transition-colors">{post.title}</h3>
                        <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>
                        <span className="text-baby-pink font-medium flex items-center group-hover:underline mt-auto">
                          Read More <ChevronRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No articles found</h3>
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

export default Blog;
