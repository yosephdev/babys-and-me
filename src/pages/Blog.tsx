import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Clock, User, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const categories = [
  "All Posts",
  "Parenting Tips",
  "Product Reviews",
  "Budget Tips",
  "Baby Health",
  "Shopping Guide",
  "Development",
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
                Expert insights, product reviews, and practical advice for your parenting journey
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
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
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
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </span>
                          </div>
                          <span className="flex items-center text-baby-pink">
                            <Heart className="w-4 h-4 mr-1" />
                            {post.likes}
                          </span>
                        </div>
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
