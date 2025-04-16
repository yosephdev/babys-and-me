
export interface Retailer {
  id: number;
  name: string;
  description: string;
  logo: string;
  commission: string;
  website: string;
  category: string;
}

export const retailers: Retailer[] = [
  {
    id: 1,
    name: "Jollyroom SE",
    description: "Online baby and children's store with a wide range of products",
    logo: "https://placehold.co/100/baby-blue/white?text=Jolly",
    commission: "5% per order",
    website: "https://example.com/jollyroom",
    category: "General",
  },
  {
    id: 2,
    name: "BabyWorld SE",
    description: "Unique and wide range of baby products for all ages",
    logo: "https://placehold.co/100/baby-pink/white?text=BW",
    commission: "8% per sale",
    website: "https://example.com/babyworld",
    category: "General",
  },
  {
    id: 3,
    name: "Polarn O. Pyret",
    description: "High-quality and sustainable clothes for children",
    logo: "https://placehold.co/100/baby-yellow/white?text=POP",
    commission: "8% per order",
    website: "https://example.com/polarn",
    category: "Clothing",
  },
  {
    id: 4,
    name: "Bugaboo SE",
    description: "Premium strollers and travel systems for modern parents",
    logo: "https://placehold.co/100/soft-blue/white?text=BB",
    commission: "6% per order",
    website: "https://example.com/bugaboo",
    category: "Travel",
  },
  {
    id: 5,
    name: "Baby V",
    description: "Real baby store with carefully selected products",
    logo: "https://placehold.co/100/soft-pink/white?text=BV",
    commission: "7% per order",
    website: "https://example.com/babyv",
    category: "General",
  },
  {
    id: 6,
    name: "Babyland",
    description: "Affordable baby products for everyday use",
    logo: "https://placehold.co/100/soft-yellow/white?text=BL",
    commission: "4% per order",
    website: "https://example.com/babyland",
    category: "General",
  },
  {
    id: 7,
    name: "Axkid SE",
    description: "Specialized in rear-facing car seats for maximum safety",
    logo: "https://placehold.co/100/baby-blue/white?text=AX",
    commission: "5% per sale",
    website: "https://example.com/axkid",
    category: "Safety",
  },
  {
    id: 8,
    name: "Kid's Concept",
    description: "Wooden toys and nursery furniture with Scandinavian design",
    logo: "https://placehold.co/100/baby-pink/white?text=KC",
    commission: "10% per sale",
    website: "https://example.com/kidsconcept",
    category: "Toys",
  },
];
