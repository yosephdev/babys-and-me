import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const AcceptedPartners = () => {
  return (
    <section className="py-12 bg-soft-blue/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Våra officiella partners
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Vi är stolta över att samarbeta med dessa fantastiska varumärken för att erbjuda dig de bästa produkterna för ditt barn.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Axkid SE */}
          <a 
            href="https://go.adt256.com/t/t?a=1954032316&as=1971524470&t=2&tk=1"
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
                  src="/images/berg-logo.png" alt="BERG SE logo" 
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
        </div>
        
        {/* BERG Featured Products */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 text-center">Populära produkter från BERG</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Product 1 */}
            <a 
              href="https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/berg-go2-retro-pink"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="aspect-square bg-gray-100 relative">
                <img src="https://cdn.berg.com/media/catalog/product/2/4/24.50.07.00_1_berg_go2_retro_pink.png" alt="BERG GO² Mint" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-medium text-sm">BERG GO² Pink </h4>
                <p className="text-baby-pink font-bold mt-1">829 SEK</p>
              </div>
            </a>
            
            {/* Product 2 */}
            <a 
              href="https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/klatterstallning/berg-playbase-nest-swing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="aspect-square bg-gray-100 relative">
                <img src="https://cdn.berg.com/media/catalog/product/2/0/20.21.03.00_1_BERG_PlayBase_Nest_swing.png" alt="BERG PlayBase Nest Swing" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-medium text-sm">BERG PlayBase Nest Swing</h4>
                <p className="text-baby-pink font-bold mt-1">859 SEK</p>
              </div>
            </a>
            
            {/* Product 3 */}
            <a 
              href="https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/berg-dempy-black"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="aspect-square bg-gray-100 relative">
                <img src="https://cdn.berg.com/media/catalog/product/2/5/25.17.01.00_1_berg_dempy_black_1.png" alt="BERG Dempy Black" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-medium text-sm">BERG Dempy Black</h4>
                <p className="text-baby-pink font-bold mt-1">899 SEK</p>
              </div>
            </a>
            
            {/* Product 4 */}
            <a 
              href="https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/berg-nexo-foldable-lime"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="aspect-square bg-gray-100 relative">
                <img src="https://cdn.berg.com/media/catalog/product/2/4/24.77.00.00_1_berg_nexo_foldable_lime.png" alt="BERG Nexo Foldable Lime" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-medium text-sm">BERG Nexo Foldable Lime</h4>
                <p className="text-baby-pink font-bold mt-1">949 SEK</p>
              </div>
            </a>
            
            {/* Product 5 */}
            <a 
              href="https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/berg-nexo-foldable-mint"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="aspect-square bg-gray-100 relative">
                <img src="https://cdn.berg.com/media/catalog/product/2/4/24.77.03.00_1_berg_nexo_foldable_mint.png" alt="BERG Nexo Foldable Mint" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-medium text-sm">BERG Nexo Foldable Mint</h4>
                <p className="text-baby-pink font-bold mt-1">949 SEK</p>
              </div>
            </a>
          </div>
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

export default AcceptedPartners;