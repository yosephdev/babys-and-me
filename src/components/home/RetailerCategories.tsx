import { Baby, Utensils, Puzzle, Home, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCategory } from "@/data/products";

const categories = [
  {
    id: 1,
    name: ProductCategory.CLOTHING,
    description: "Kvalitetskläder, skor och accessoarer för bebisar och småbarn",
    icon: Baby,
    link: `/products?category=${encodeURIComponent(ProductCategory.CLOTHING)}`,
    color: "baby-pink",
  },
  {
    id: 2,
    name: ProductCategory.FEEDING,
    description: "Flaskor, haklappar, barnstolar och allt för måltider",
    icon: Utensils,
    link: `/products?category=${encodeURIComponent(ProductCategory.FEEDING)}`,
    color: "baby-blue",
  },
  {
    id: 3,
    name: ProductCategory.TOYS,
    description: "Roliga och pedagogiska leksaker för att stimulera växande sinnen",
    icon: Puzzle,
    link: `/products?category=${encodeURIComponent(ProductCategory.TOYS)}`,
    color: "baby-yellow",
  },
  {
    id: 4,
    name: ProductCategory.NURSERY,
    description: "Barnsängar, skötbord och inredning för det perfekta barnrummet",
    icon: Home,
    link: `/products?category=${encodeURIComponent(ProductCategory.NURSERY)}`,
    color: "baby-pink",
  },
  {
    id: 5,
    name: ProductCategory.SAFETY,
    description: "Produkter för att hålla din lilla säker och frisk",
    icon: Heart,
    link: `/products?category=${encodeURIComponent(ProductCategory.SAFETY)}`,
    color: "baby-blue",
  },
];

const RetailerCategories = () => {
  return (
    <section className="py-16 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Handla efter kategori</h2>
        
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
