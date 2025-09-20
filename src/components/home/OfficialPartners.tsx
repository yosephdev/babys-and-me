import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const OfficialPartners = () => {
  return (
    <section className="py-12 bg-soft-blue/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Våra officiella partners
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Vi är stolta över att samarbeta med dessa fantastiska varumärken för att erbjuda dig de bästa produkterna för ditt barn.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Axkid SE */}
          <a 
            href="https://go.axkid.com/t/t?a=1954032316&as=1971524470&t=2&tk=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
            onClick={() => {
              console.log("Partner click: Axkid SE");
            }}
          >
            <div className="p-6 flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                <img 
                  src="/images/logo-axkid.png" 
                  alt="Axkid SE logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="bg-baby-pink/10 text-baby-pink px-3 py-1 rounded-full text-xs font-medium">
                  Officiell Partner
                </span>
                <h3 className="font-heading font-bold text-xl mt-1">Axkid SE</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Högre standarder för barns säkerhet i trafiken
                </p>
              </div>
            </div>
          </a>
          
          {/* BERG SE */}
          <a 
            href="https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
            onClick={() => {
              console.log("Partner click: BERG SE");
            }}
          >
            <div className="p-6 flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                <img 
                  src="/images/berg-logo.png" 
                  alt="BERG SE logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="bg-baby-pink/10 text-baby-pink px-3 py-1 rounded-full text-xs font-medium">
                  Officiell Partner
                </span>
                <h3 className="font-heading font-bold text-xl mt-1">BERG SE</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Förvandla din plats till en lekplats för alla åldrar
                </p>
              </div>
            </div>
          </a>
          
          {/* Kid's Concept */}
          <a 
            href="https://go.adt256.com/t/t?a=1954032316&as=1971524470&t=2&tk=1&url=https://www.kidsconcept.se"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
            onClick={() => {
              console.log("Partner click: Kid's Concept");
            }}
          >
            <div className="p-6 flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                <img 
                  src="/images/logo-kidsconcept.png" 
                  alt="Kid's Concept logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="bg-baby-pink/10 text-baby-pink px-3 py-1 rounded-full text-xs font-medium">
                  Officiell Partner
                </span>
                <h3 className="font-heading font-bold text-xl mt-1">Kid's Concept</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Träleksaker & möbler för kreativ lek
                </p>
              </div>
            </div>
          </a>


          {/* Babyland */}
          <a 
            href="https://pin.babyland.se/t/t?a=1066444612&as=1971524470&t=2&tk=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
          >
            <div className="p-6 flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                <img 
                  src="/images/logo-babyland.png" 
                  alt="Babyland logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="bg-baby-pink/10 text-baby-pink px-3 py-1 rounded-full text-xs font-medium">
                  Officiell Partner
                </span>
                <h3 className="font-heading font-bold text-xl mt-1">Babyland</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Allt för barn och baby
                </p>
              </div>
            </div>
          </a>

          {/* Bugaboo SE */}
          <a 
            href="https://do.bugaboo.com/t/t?a=1625527092&as=1971524470&t=2&tk=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
          >
            <div className="p-6 flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                <img 
                  src="/images/logo-bugaboo.png" 
                  alt="Bugaboo SE logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="bg-baby-pink/10 text-baby-pink px-3 py-1 rounded-full text-xs font-medium">
                  Officiell Partner
                </span>
                <h3 className="font-heading font-bold text-xl mt-1">Bugaboo SE</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Innovativa barnvagnar och tillbehör
                </p>
              </div>
            </div>
          </a>

          {/* Litenleker */}
          <a 
            href="https://go.adt256.com/t/t?a=1325987281&as=1971524470&t=2&tk=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
          >
            <div className="p-6 flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                <img 
                  src="/images/logo-litenleker.png" 
                  alt="Litenleker logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="bg-baby-pink/10 text-baby-pink px-3 py-1 rounded-full text-xs font-medium">
                  Officiell Partner
                </span>
                <h3 className="font-heading font-bold text-xl mt-1">Litenleker</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Leksaker för alla åldrar
                </p>
              </div>
            </div>
          </a>



          {/* Baby V */}
          <a 
            href="https://go.adt231.net/t/t?a=1327902115&as=1971524470&t=2&tk=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
          >
            <div className="p-6 flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                <img 
                  src="/images/logo-babyv.png" 
                  alt="Baby V logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="bg-baby-pink/10 text-baby-pink px-3 py-1 rounded-full text-xs font-medium">
                  Officiell Partner
                </span>
                <h3 className="font-heading font-bold text-xl mt-1">Baby V</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Kvalitetsprodukter för de minsta
                </p>
              </div>
            </div>
          </a>
        </div>
        
        <div className="text-center mt-10">
          <Button className="btn-secondary" asChild>
            <Link to="/produkter">
              Utforska alla produkter <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfficialPartners;