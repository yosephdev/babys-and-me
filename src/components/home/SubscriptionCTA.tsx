
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const SubscriptionCTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Join Our Community</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Unlock exclusive benefits and support our mission by becoming a member of Baby's & Me.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Tier */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Basic</h3>
                <div className="text-4xl font-bold mb-2">Free</div>
                <p className="text-gray-500">Get started with our basic features</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Access to parenting tips and articles</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Monthly newsletter with curated product recommendations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Exclusive discount codes from partner retailers</span>
                </li>
              </ul>
              
              <Button className="w-full btn-secondary">Sign Up for Free</Button>
            </div>
            
            {/* Premium Tier */}
            <div className="bg-gradient-soft rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-6 right-6 bg-baby-pink text-white text-xs uppercase font-bold py-1 px-3 rounded-full">
                Popular
              </div>
              
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Premium</h3>
                <div className="text-4xl font-bold mb-2">$5<span className="text-lg font-normal">/month</span></div>
                <p className="text-gray-500">Everything in Basic plus exclusive benefits</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span><strong>All Basic tier benefits</strong></span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Early access to new product reviews and recommendations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Personalized product recommendations based on your baby's age</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Ad-free browsing experience</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Private tutorials and parenting webinars</span>
                </li>
              </ul>
              
              <Button className="w-full btn-primary">Subscribe Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCTA;
