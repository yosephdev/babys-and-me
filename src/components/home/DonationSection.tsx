import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart } from "lucide-react";
import { toast } from "sonner";

const DonationSection = () => {
  const [progress, setProgress] = useState(75);
  const goal = 5000;
  const raised = Math.floor((progress / 100) * goal);
  const navigate = useNavigate();

  const handleQuickDonate = (amount: number) => {
    navigate(`/donate?preset=${amount}`);
  };

  return (
    <section className="py-16 bg-[#d94c7b]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 text-white animate-bounce-subtle" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md">Stöd vårt uppdrag</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white drop-shadow-md font-medium">
            Dina donationer hjälper oss att fortsätta hitta och recensera prisvärda babyprodukter, 
            stötta familjer med låg inkomst och bygga en gemenskap av omtänksamma föräldrar.
          </p>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-2">
              <span className="font-heading font-bold text-xl text-[#d94c7b]">{raised} kr insamlat</span>
              <span className="font-medium text-gray-700">Mål: {goal} kr</span>
            </div>
            <Progress value={progress} className="h-3 mb-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Button 
                className="bg-[#d94c7b] text-white hover:bg-opacity-90" 
                variant="outline" 
                onClick={() => handleQuickDonate(100)}
              >
                Skänk 100 kr
              </Button>
              <Button 
                className="bg-[#d94c7b] text-white hover:bg-opacity-90" 
                variant="outline" 
                onClick={() => handleQuickDonate(250)}
              >
                Skänk 250 kr
              </Button>
              <Button 
                className="bg-[#d94c7b] text-white hover:bg-opacity-90" 
                variant="outline" 
                onClick={() => handleQuickDonate(500)}
              >
                Skänk 500 kr
              </Button>
            </div>
            <Link to="/donate">
              <Button className="w-full md:w-auto bg-baby-yellow text-[#323238] hover:bg-opacity-90 font-medium">
                Annan summa
              </Button>
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-white drop-shadow-md font-medium">
            Ditt bidrag gör skillnad för familjer som vill ge sina barn det allra bästa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;