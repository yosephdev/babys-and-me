import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const SubscriptionCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-baby-blue/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Mail className="h-12 w-12 text-baby-blue" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prenumerera på vårt nyhetsbrev</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Få de senaste tipsen om babyprodukter, exklusiva erbjudanden och föräldraskapsråd 
            direkt i din inkorg.
          </p>
          
          <div className="bg-white border-2 border-baby-pink rounded-2xl p-8 shadow-md hover:shadow-lg transition-all max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Gratis nyhetsbrev</h3>
              <p className="text-gray-600">Få veckovisa tips och erbjudanden</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center">
                <span className="text-baby-pink mr-2">✓</span>
                <span>Veckovisa föräldraskapstips</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-baby-pink mr-2">✓</span>
                <span>Exklusiva produktrekommendationer</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-baby-pink mr-2">✓</span>
                <span>Specialerbjudanden från våra partners</span>
              </div>
            </div>

            <Link to="/prenumerera">
              <Button className="w-full bg-baby-pink hover:bg-baby-pink/90">
                Prenumerera nu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCTA;
