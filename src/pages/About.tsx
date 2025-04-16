
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Baby's & Me</h1>
              <p className="text-xl text-gray-600">
                Your trusted source for affordable, high-quality baby products
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Baby's & Me was founded in 2020 by a group of parents who were frustrated by the overwhelming 
                  and expensive world of baby products. We recognized that new parents face countless decisions about 
                  what products their babies need, often with limited information and tight budgets.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Our mission became clear: create a trusted resource that helps parents find affordable, 
                  high-quality baby products while building a supportive community for sharing advice and experiences.
                </p>
                <p className="text-lg text-gray-600">
                  Today, Baby's & Me has grown into a thriving platform that connects parents worldwide with the best 
                  products for their little ones, regardless of budget constraints.
                </p>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-baby-pink bg-opacity-20 p-3 rounded-full w-fit mb-4">
                      <Heart className="text-baby-pink w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">Trust</h3>
                    <p className="text-gray-600">
                      We only recommend products we believe in and would use for our own children.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-baby-blue bg-opacity-20 p-3 rounded-full w-fit mb-4">
                      <Heart className="text-baby-blue w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">Affordability</h3>
                    <p className="text-gray-600">
                      We believe high-quality baby products should be accessible to families of all income levels.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-baby-yellow bg-opacity-20 p-3 rounded-full w-fit mb-4">
                      <Heart className="text-baby-yellow w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">Community</h3>
                    <p className="text-gray-600">
                      We foster a supportive environment where parents can share advice and experiences.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">How We Support Parents</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-baby-pink text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</span>
                    <span className="text-lg">We thoroughly research and test baby products to ensure they meet our standards for quality, safety, and value.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-baby-pink text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</span>
                    <span className="text-lg">We partner with trusted retailers to negotiate exclusive discounts for our community members.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-baby-pink text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</span>
                    <span className="text-lg">We create helpful content on parenting topics, from newborn care to toddler development.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-baby-pink text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</span>
                    <span className="text-lg">We facilitate a supportive community where parents can connect and share their experiences.</span>
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
