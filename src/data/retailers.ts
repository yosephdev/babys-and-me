
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
    logo: "/images/logo-jollyroom.png",
    commission: "5",
    website: "https://jollyroom.se",
    category: "General",
  },
  {
    id: 2,
    name: "BabyWorld SE",
    description: "Unique and wide range of baby products for all ages",
    logo: "/images/logo-babyworld.png",
    commission: "8",
    website: "https://babyworld.se",
    category: "General",
  },
  {
    id: 3,
    name: "Polarn O. Pyret",
    description: "High-quality and sustainable clothes for children",
    logo: "/images/logo-pop.png",
    commission: "8",
    website: "https://www.polarnopyret.se",
    category: "Clothing",
  },
  {
    id: 4,
    name: "Bugaboo SE",
    description: "Premium strollers and travel systems for modern parents",
    logo: "/images/logo-bugabo.png",
    commission: "6",
    website: "https://www.bugaboo.com/se-en/",
    category: "Travel",
  },
  {
    id: 5,
    name: "Baby V",
    description: "Real baby store with carefully selected products",
    logo: "/images/logo-babyv.png",
    commission: "7",
    website: "https://babyv.se",
    category: "General",
  },
  {
    id: 6,
    name: "Babyland",
    description: "Affordable baby products for everyday use",
    logo: "/images/logo-babyland.png",
    commission: "4",
    website: "https://www.babyland.se",
    category: "General",
  },
  {
    id: 7,
    name: "Axkid SE",
    description: "Specialized in rear-facing car seats for maximum safety",
    logo: "/images/logo-axkid.png",
    commission: "5",
    website: "https://axkid.com/se/",
    category: "Safety",
  },
  {
    id: 8,
    name: "Kid's Concept",
    description: "Wooden toys and nursery furniture with Scandinavian design",
    logo: "/images/logo-kidsconcept.png",
    commission: "10",
    website: "https://www.kidsconcept.se",
    category: "Toys",
  },
];
