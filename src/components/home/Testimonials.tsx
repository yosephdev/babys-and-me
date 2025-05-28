import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Mamma till 2",
    quote: "Baby's & Me hjälpte mig att hitta prisvärda, högkvalitativa produkter för min nyfödda utan att spräcka budgeten. Deras rekommendationer är alltid perfekta!",
    avatar: "https://placehold.co/100/baby-pink/white?text=EJ",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Peterson",
    role: "Nybliven pappa",
    quote: "Som förstagångspappa var jag överväldigad av alla val av babyprodukter. Den här sidan guidade mig till endast det nödvändiga som faktiskt fungerar!",
    avatar: "https://placehold.co/100/baby-blue/white?text=MP",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "Mamma & Barnläkare",
    quote: "Jag älskar att Baby's & Me prioriterar kvalitet och säkerhet. Som barnläkare rekommenderar jag ofta denna sida till föräldrar i min praktik.",
    avatar: "https://placehold.co/100/baby-yellow/white?text=SC",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Vad föräldrar säger</h2>
        
        <div className="mt-12 relative max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-heading font-semibold text-center">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-sm text-gray-500 text-center">
                  {testimonials[currentTestimonial].role}
                </p>
                <div className="flex mt-2">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-baby-yellow text-baby-yellow" />
                  ))}
                </div>
              </div>
              
              <div className="md:w-3/4">
                <svg className="text-baby-pink opacity-20 w-12 h-12 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentTestimonial ? "bg-baby-pink" : "bg-gray-300"
                }`}
                aria-label={`Visa omdöme ${idx + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-baby-pink hover:text-white transition-colors"
            onClick={prevTestimonial}
            aria-label="Föregående omdöme"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-baby-pink hover:text-white transition-colors"
            onClick={nextTestimonial}
            aria-label="Nästa omdöme"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;