
import { ChevronRight, Heart, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Engaging, feature-rich blog post data for homepage highlights
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Baby Products Every Parent Swears By in 2024",
    excerpt: "From smart monitors to eco-friendly diapers, discover must-haves that make parenthood a breeze. Learn how choosing the right gear can transform your daily routine.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Mar 15, 2024",
    category: "Shopping Guide",
    slug: "essential-baby-products-2024",
    author: "Sarah Johnson",
    readTime: "8 min read",
    likes: 245,
  },
  {
    id: 2,
    title: "The Science of Baby Sleep: Proven Tips for Restful Nights",
    excerpt: "Tired of sleepless nights? Discover gentle, science-backed strategies for improving your baby's sleep—and yours. Expert advice made simple for busy parents.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Mar 12, 2024",
    category: "Parenting Tips",
    slug: "baby-sleep-science",
    author: "Dr. Emily Chen",
    readTime: "10 min read",
    likes: 189,
  },
  {
    id: 3,
    title: "Budget-Friendly Baby Gear: Our Top Affordable Finds Under $100",
    excerpt: "High-quality baby essentials don’t have to cost a fortune. Shop smart with our picks for the best budget gear, and learn where to save or splurge.",
    image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Mar 10, 2024",
    category: "Budget Tips",
    slug: "budget-friendly-baby-gear",
    author: "Michael Brown",
    readTime: "6 min read",
    likes: 156,
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
              <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
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
                  <h3 className="font-heading font-bold text-xl mb-1 text-foreground group-hover:text-baby-pink transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto text-xs text-gray-500">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center text-baby-pink">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </span>
                  </div>
                  <span className="text-baby-pink font-medium flex items-center group-hover:underline mt-4">
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

