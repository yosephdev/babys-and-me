
import { Button } from "@/components/ui/button";
import { Check, Users } from "lucide-react";
import { Link } from "react-router-dom";

const SubscriptionCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-baby-blue/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Users className="h-12 w-12 text-baby-blue" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Connect with other parents, access exclusive resources, and make a difference 
            in the lives of families in need. Join Baby's & Me community today!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Community Member */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Community Member</h3>
                <div className="text-4xl font-bold mb-2">Free</div>
                <p className="text-gray-600">Join our supportive parenting community</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Access to community discussion forums</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Weekly parenting tips newsletter</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Basic product recommendations</span>
                </li>
              </ul>
              
              <Link to="/subscribe">
                <Button variant="outline" className="w-full">Join Community</Button>
              </Link>
            </div>
            
            {/* Premium Community Member */}
            <div className="bg-gradient-soft rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-6 right-6 bg-baby-pink text-white text-xs uppercase font-bold py-1 px-3 rounded-full">
                Most Popular
              </div>
              
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Premium Member</h3>
                <div className="text-4xl font-bold mb-2">$5<span className="text-lg font-normal">/month</span></div>
                <p className="text-gray-600">Full access to premium features & support</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span>All Community Member benefits</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Exclusive member-only events & webinars</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Personal product recommendations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Early access to new features</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Priority community support</span>
                </li>
              </ul>
              
              <Link to="/subscribe">
                <Button className="w-full bg-baby-pink hover:bg-baby-pink/90">
                  Become Premium Member
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCTA;
