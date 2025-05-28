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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gå med i vår gemenskap</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Anslut med andra föräldrar, få tillgång till exklusiva resurser och gör skillnad 
            i livet för familjer i behov. Gå med i Baby's & Me gemenskap idag!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Community Member */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Gemenskapsmedlem</h3>
                <div className="text-4xl font-bold mb-2">Gratis</div>
                <p className="text-gray-600">Gå med i vår stödjande föräldragemenskap</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Tillgång till gemenskapsforum</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Veckovisa föräldraskapstips via nyhetsbrev</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Grundläggande produktrekommendationer</span>
                </li>
              </ul>
              
              <Link to="/subscribe">
                <Button variant="outline" className="w-full">Gå med i gemenskapen</Button>
              </Link>
            </div>
            
            {/* Premium Community Member */}
            <div className="bg-white border-2 border-baby-pink rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Premiummedlem</h3>
                <div className="text-4xl font-bold mb-2">199 kr/år</div>
                <p className="text-gray-600">Få tillgång till alla premiumfunktioner</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Allt som gemenskapsmedlem plus:</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Exklusiva rabatter på babyprodukter</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Personliga produktrekommendationer</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-baby-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Prioriterad kundsupport</span>
                </li>
              </ul>
              
              <Link to="/subscribe">
                <Button className="w-full bg-baby-pink hover:bg-baby-pink/90">
                  Bli premiummedlem
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
