import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-soft py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Om Baby's & Me</h1>
              <p className="text-xl text-gray-600">
                Din pålitliga källa för prisvärda, högkvalitativa babyprodukter
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Vår historia</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Baby's & Me grundades 2020 av en grupp föräldrar som var frustrerade över den överväldigande 
                  och dyra världen av babyprodukter. Vi insåg att nya föräldrar står inför otaliga beslut om 
                  vilka produkter deras bebisar behöver, ofta med begränsad information och strama budgetar.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Vårt uppdrag blev tydligt: skapa en pålitlig resurs som hjälper föräldrar att hitta prisvärda, 
                  högkvalitativa babyprodukter samtidigt som vi bygger en stödjande gemenskap för att dela råd och erfarenheter.
                </p>
                <p className="text-lg text-gray-600">
                  Idag har Baby's & Me vuxit till en blomstrande plattform som kopplar samman föräldrar världen över med de bästa 
                  produkterna för deras små, oavsett budgetbegränsningar.
                </p>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Våra värderingar</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-baby-pink bg-opacity-20 p-3 rounded-full w-fit mb-4">
                      <Heart className="text-baby-pink w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">Förtroende</h3>
                    <p className="text-gray-600">
                      Vi rekommenderar endast produkter vi tror på och skulle använda till våra egna barn.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-baby-blue bg-opacity-20 p-3 rounded-full w-fit mb-4">
                      <Heart className="text-baby-blue w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">Prisvärdhet</h3>
                    <p className="text-gray-600">
                      Vi tror att högkvalitativa babyprodukter bör vara tillgängliga för familjer på alla inkomstnivåer.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-baby-yellow bg-opacity-20 p-3 rounded-full w-fit mb-4">
                      <Heart className="text-baby-yellow w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">Gemenskap</h3>
                    <p className="text-gray-600">
                      Vi främjar en stödjande miljö där föräldrar kan dela råd och erfarenheter.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Hur vi stödjer föräldrar</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-baby-pink text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</span>
                    <span className="text-lg">Vi undersöker och testar babyprodukter noggrant för att säkerställa att de uppfyller våra standarder för kvalitet, säkerhet och värde.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-baby-pink text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</span>
                    <span className="text-lg">Vi samarbetar med pålitliga återförsäljare för att förhandla fram exklusiva rabatter för våra gemenskapsmedlemmar.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-baby-pink text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</span>
                    <span className="text-lg">Vi skapar hjälpsamt innehåll om föräldraskapsteman, från nyfödda till småbarns utveckling.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-baby-pink text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</span>
                    <span className="text-lg">Vi underlättar en stödjande gemenskap där föräldrar kan ansluta och dela sina erfarenheter.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;