
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart } from "lucide-react";

const DonationSection = () => {
  const [progress, setProgress] = useState(75);
  const goal = 5000;
  const raised = Math.floor((progress / 100) * goal);

  return (
    <section className="py-16 bg-gradient-pink text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 animate-bounce-subtle" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your donations help us continue finding and reviewing the best affordable baby products, 
            supporting low-income families, and building our community of caring parents.
          </p>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row justify-between items-center mb-2">
              <span className="font-heading font-bold text-xl">${raised} raised</span>
              <span className="font-medium">Goal: ${goal}</span>
            </div>
            <Progress value={progress} className="h-3 mb-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Button 
                className="bg-white text-baby-pink hover:bg-opacity-90" 
                variant="outline" 
              >
                Donate $10
              </Button>
              <Button 
                className="bg-white text-baby-pink hover:bg-opacity-90" 
                variant="outline" 
              >
                Donate $25
              </Button>
              <Button 
                className="bg-white text-baby-pink hover:bg-opacity-90" 
                variant="outline" 
              >
                Donate $50
              </Button>
            </div>
            <Button className="w-full md:w-auto bg-baby-yellow text-foreground hover:bg-opacity-90">
              Custom Amount
            </Button>
          </div>
          
          <p className="mt-6 text-sm opacity-75">
            Your contribution makes a difference in helping families provide the best for their little ones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
