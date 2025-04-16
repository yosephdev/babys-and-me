
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
];

const BlogHighlights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Parenting Tips & Advice</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="bg-soft-pink text-baby-pink px-3 py-1 rounded-full">{post.category}</span>
                    <time className="text-gray-500">{post.date}</time>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-foreground group-hover:text-baby-pink transition-colors">{post.title}</h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                  <span className="text-baby-pink font-medium flex items-center group-hover:underline">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-secondary" asChild>
            <Link to="/blog">
              View All Articles <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
