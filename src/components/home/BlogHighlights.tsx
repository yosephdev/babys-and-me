import { ChevronRight, Heart, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogHighlights = () => {
  // Get the first 3 blog posts for the highlights section
  const highlightPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Föräldraskapstips & Råd</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {highlightPosts.map((post) => (
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
                    Läs mer <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-secondary" asChild>
            <Link to="/blogg">              Visa alla artiklar <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
