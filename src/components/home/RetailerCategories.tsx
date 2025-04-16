
import { Baby, Utensils, Puzzle, Home, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Baby Clothing & Accessories",
    description: "Quality clothes, shoes, and accessories for babies and toddlers",
    icon: Baby,
    link: "/products/clothing",
    color: "baby-pink",
  },
  {
    id: 2,
    name: "Feeding Supplies",
    description: "Bottles, bibs, high chairs and everything for meal time",
    icon: Utensils,
    link: "/products/feeding",
    color: "baby-blue",
  },
  {
    id: 3,
    name: "Toys & Educational Items",
    description: "Fun and educational toys to stimulate growing minds",
    icon: Puzzle,
    link: "/products/toys",
    color: "baby-yellow",
  },
  {
    id: 4,
    name: "Nursery Essentials",
    description: "Cribs, changing stations, and decor for the perfect nursery",
    icon: Home,
    link: "/products/nursery",
    color: "baby-pink",
  },
  {
    id: 5,
    name: "Health & Safety",
    description: "Products to keep your little one safe and healthy",
    icon: Heart,
    link: "/products/safety",
    color: "baby-blue",
  },
];

const RetailerCategories = () => {
  return (
    <section className="py-16 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Shop By Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mt-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="bg-white rounded-xl p-6 text-center shadow-md card-hover flex flex-col items-center"
            >
              <div className={`bg-${category.color} bg-opacity-20 p-4 rounded-full mb-4`}>
                <category.icon className={`w-8 h-8 text-${category.color}`} />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetailerCategories;
