import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, User, Heart, ChevronLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-baby-pink hover:underline"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getPostContent = (slug: string) => {
    switch (slug) {
      case "essential-baby-products-2024":
        return {
          introduction: "As a new parent, navigating the world of baby products can be overwhelming. With countless options available, it's crucial to focus on items that truly make a difference in your daily life. After consulting with pediatricians, experienced parents, and child development experts, we've compiled a list of essential products that will help you provide the best care for your little one.",
          keyPoints: [
            "Smart Baby Monitor: Modern monitors with video, temperature, and breathing tracking",
            "Eco-Friendly Diapers: Sustainable options that are gentle on baby's skin",
            "Baby Carrier: Ergonomic design for comfortable carrying",
            "Sleep Solution: Safe sleep space with proper ventilation"
          ],
          expertAdvice: "Dr. Sarah Johnson, a pediatrician with 15 years of experience, emphasizes the importance of choosing products that meet safety standards. 'Look for certifications like CPSC, JPMA, or ASTM when selecting baby gear. These ensure the products have undergone rigorous safety testing.'",
          conclusion: "Remember that every baby is unique, and what works for one family might not work for another. Start with these essentials and add more items as you discover your baby's specific needs. Quality over quantity is key when building your baby's first collection of products."
        };
      case "baby-sleep-science":
        return {
          introduction: "Sleep is crucial for your baby's development, but achieving consistent, restful sleep can be challenging for many families. Understanding the science behind baby sleep patterns can help you create a more effective sleep routine for your little one.",
          keyPoints: [
            "Sleep Cycles: Babies have shorter sleep cycles than adults",
            "Circadian Rhythm: Development of natural sleep-wake patterns",
            "Sleep Associations: Creating positive sleep connections",
            "Safe Sleep Environment: Following AAP guidelines"
          ],
          expertAdvice: "Dr. Emily Chen, a sleep specialist, explains: 'Babies' sleep patterns are different from adults. They spend more time in REM sleep, which is crucial for brain development. Understanding these differences helps parents set realistic expectations and create appropriate sleep schedules.'",
          conclusion: "By understanding the science behind baby sleep, you can make informed decisions about your child's sleep routine. Remember that sleep training is a personal choice, and what works for one family may not work for another. Focus on creating a safe, consistent sleep environment and responding to your baby's needs."
        };
      case "budget-friendly-baby-gear":
        return {
          introduction: "Having a baby doesn't have to break the bank. With careful planning and smart shopping strategies, you can find high-quality baby essentials that fit your budget. This guide will help you make informed decisions about where to spend and where to save.",
          keyPoints: [
            "Research and Compare: Use price comparison tools and read reviews",
            "Buy Second-Hand: Many items can be safely purchased used",
            "Focus on Safety: Invest in certified safety items",
            "Multi-Purpose Items: Choose products that grow with your baby"
          ],
          expertAdvice: "Michael Brown, a family finance expert, suggests: 'Create a baby budget before shopping. Prioritize safety-certified items and consider joining parent groups for gently used items. Many high-quality products can be found at a fraction of the retail price.'",
          conclusion: "Remember that the most expensive option isn't always the best. Focus on safety certifications, durability, and versatility when making purchases. With careful planning and smart shopping, you can provide everything your baby needs without overspending."
        };
      case "baby-first-year-milestones":
        return {
          introduction: "Your baby's first year is filled with incredible growth and development. Understanding these milestones helps you support your child's progress and identify any areas that might need additional attention.",
          keyPoints: [
            "Physical Development: Motor skills and movement milestones",
            "Cognitive Growth: Learning and problem-solving abilities",
            "Social Development: Interaction and communication skills",
            "Emotional Progress: Bonding and emotional expression"
          ],
          expertAdvice: "Dr. Lisa Martinez, a child development specialist, notes: 'Every baby develops at their own pace. While milestones provide a general guide, focus on your baby's individual progress. Early intervention can make a significant difference if there are any concerns.'",
          conclusion: "Celebrate each milestone while remembering that development isn't a race. Your baby's unique journey is what matters most. Regular check-ups with your pediatrician will help ensure your baby is on track with their development."
        };
      case "best-baby-carriers-2024":
        return {
          introduction: "A good baby carrier can be a game-changer for parents, offering hands-free comfort while keeping your baby close. We've tested numerous carriers to find the best options for different needs and budgets.",
          keyPoints: [
            "Ergonomic Design: Proper hip and spine support",
            "Comfort Features: Padded straps and breathable materials",
            "Safety Standards: Meeting current safety guidelines",
            "Versatility: Multiple carrying positions and adjustability"
          ],
          expertAdvice: "Jessica Taylor, a babywearing consultant, emphasizes: 'The best carrier is one that both parent and baby find comfortable. Look for carriers that support the natural 'M' position for baby's hips and provide adequate head support for newborns.'",
          conclusion: "Investing in a quality baby carrier can make daily activities easier while promoting bonding with your baby. Consider your lifestyle, climate, and specific needs when choosing a carrier. The right carrier can be used from newborn through toddler years."
        };
      case "baby-health-concerns":
        return {
          introduction: "As a parent, it's natural to worry about your baby's health. Understanding common health concerns and knowing when to seek medical attention can help you feel more confident in caring for your little one.",
          keyPoints: [
            "Fever: When to call the doctor based on age and temperature",
            "Feeding Issues: Common concerns and solutions",
            "Skin Conditions: Identifying and treating common rashes",
            "Respiratory Symptoms: Warning signs to watch for"
          ],
          expertAdvice: "Dr. Emily Chen advises: 'Trust your instincts as a parent. If something doesn't seem right, it's better to call your pediatrician. Keep a record of symptoms, including when they started and any changes you notice.'",
          conclusion: "While it's important to be vigilant about your baby's health, remember that many common concerns are normal and easily treatable. Regular check-ups and open communication with your pediatrician will help ensure your baby stays healthy."
        };
      case "eco-friendly-baby-products":
        return {
          introduction: "Making eco-friendly choices for your baby not only benefits the environment but can also create a healthier living space for your little one. Discover sustainable alternatives to common baby products that are both safe and effective.",
          keyPoints: [
            "Sustainable Materials: Choosing natural, biodegradable options",
            "Chemical-Free Products: Avoiding harmful substances",
            "Long-Lasting Items: Investing in durable products",
            "Reusable Alternatives: Reducing single-use items"
          ],
          expertAdvice: "Sarah Johnson, an environmental health expert, suggests: 'Start with the basics - diapers, wipes, and clothing. Look for products with minimal packaging and certifications like GOTS for organic textiles or EWG Verified for personal care items.'",
          conclusion: "Making eco-friendly choices for your baby is a journey, not a destination. Start with small changes and gradually incorporate more sustainable options. Every eco-friendly choice makes a difference for your baby's future."
        };
      case "baby-immune-system":
        return {
          introduction: "Your baby's immune system is developing from birth, and there are many ways you can support its healthy development. Understanding how the immune system works helps you make informed decisions about your baby's health.",
          keyPoints: [
            "Breastfeeding Benefits: Natural immune support",
            "Vaccination Schedule: Following recommended guidelines",
            "Healthy Environment: Creating a clean but not sterile space",
            "Nutrition: Supporting immune function through diet"
          ],
          expertAdvice: "Dr. Lisa Martinez explains: 'A baby's immune system is like a muscle that needs to be exercised. Exposure to common germs in a controlled way helps build immunity, while vaccinations provide protection against serious diseases.'",
          conclusion: "Supporting your baby's immune system is a combination of good nutrition, proper vaccination, and creating a healthy environment. Work with your pediatrician to develop a plan that's right for your baby's specific needs."
        };
      default:
        return {
          introduction: "This article provides valuable insights and practical advice for parents.",
          keyPoints: ["Key point 1", "Key point 2", "Key point 3", "Key point 4"],
          expertAdvice: "Expert advice for parents.",
          conclusion: "Summary and final thoughts."
        };
    }
  };

  const content = getPostContent(post.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <article className="py-12">
          <div className="container mx-auto px-4">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-baby-pink hover:underline mb-8"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Blog
            </Link>

            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <span className="bg-soft-pink text-baby-pink px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">{post.title}</h1>
                <div className="flex items-center space-x-6 text-gray-600">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    {post.likes} likes
                  </span>
                </div>
              </div>

              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose max-w-none">
                <p className="text-xl text-gray-600 mb-8">{content.introduction}</p>
                
                <h2>Key Points</h2>
                <ul>
                  {content.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <h2>Expert Advice</h2>
                <p>{content.expertAdvice}</p>

                <h2>Conclusion</h2>
                <p>{content.conclusion}</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost; 