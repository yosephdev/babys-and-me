
export enum ProductCategory {
  CLOTHING = "Clothing & Accessories",
  FEEDING = "Feeding Supplies",
  TOYS = "Toys & Educational Items",
  NURSERY = "Nursery Essentials",
  SAFETY = "Health & Safety"
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  priceRange: string;
  image: string;
  retailer: string;
  retailerLogo: string;
  commission: string;
  link: string;
  isBestSeller?: boolean;
  isEditorsPick?: boolean;
  rating?: number;
  reviews?: number;
}

export const products: Product[] = [
  // Clothing & Accessories
  {
    id: 1,
    name: "Cozy Winter Jacket for Kids",
    description: "Durable, waterproof, and stylish—perfect for outdoor adventures.",
    category: ProductCategory.CLOTHING,
    priceRange: "Starting at 499 SEK",
    image: "/images/winter-jacket.jpg",
    retailer: "Polarn O. Pyret",
    retailerLogo: "/images/logo-pop.png",
    commission: "8",
    link: "https://www.polarnopyret.se",
    isBestSeller: true,
    rating: 5,
    reviews: 124
  },
  {
    id: 2,
    name: "Organic Cotton Bodysuits (Pack of 5)",
    description: "Soft, breathable, and eco-friendly—ideal for newborns.",
    category: ProductCategory.CLOTHING,
    priceRange: "Starting at 299 SEK",
    image: "/images/cotton-bodysuits.jpg",
    retailer: "Baby V",
    retailerLogo: "/images/logo-babyv.png",
    commission: "7",
    link: "https://babyv.se/cotton-bodysuits",
    rating: 4,
    reviews: 87
  },
  
  // Feeding Supplies
  {
    id: 3,
    name: "Silicone Baby Bib with Catcher",
    description: "Easy to clean and prevents food spills—perfect for messy eaters.",
    category: ProductCategory.FEEDING,
    priceRange: "Starting at 89 SEK",
    image: "/images/silicone-bib.jpg",
    retailer: "Jollyroom SE",
    retailerLogo: "/images/logo-jollyroom.png",
    commission: "5",
    link: "https://jollyroom.se/baby-bib",
    isEditorsPick: true,
    rating: 4.5,
    reviews: 203
  },
  {
    id: 4,
    name: "Leak-Proof Sippy Cup Set (Pack of 3)",
    description: "Spill-proof and BPA-free—great for toddlers learning to drink.",
    category: ProductCategory.FEEDING,
    priceRange: "Starting at 149 SEK",
    image: "/images/sippy-cup-set.webp",
    retailer: "BabyWorld SE",
    retailerLogo: "/images/logo-babyworld.png",
    commission: "8",
    link: "https://babyworld.se/sippy-cup-set",
    rating: 4,
    reviews: 156
  },
  
  // Toys & Educational Items
  {
    id: 5,
    name: "Wooden Building Blocks Set",
    description: "Encourages creativity and fine motor skills—made from sustainable wood.",
    category: ProductCategory.TOYS,
    priceRange: "Starting at 199 SEK",
    image: "/images/wooden-blocks.jpg",
    retailer: "Kid's Concept",
    retailerLogo: "/images/logo-kidsconcept.png",
    commission: "10",
    link: "https://kidsconcept.se/wooden-blocks",
    isBestSeller: true,
    rating: 5,
    reviews: 89
  },
  {
    id: 6,
    name: "Zcooly Learning Game Subscription",
    description: "Fun, interactive games that teach kids math and problem-solving.",
    category: ProductCategory.TOYS,
    priceRange: "Starting at 195 SEK/month",
    image: "/images/zcooly-game.png",
    retailer: "Zcooly",
    retailerLogo: "/images/logo-zcooly.png",
    commission: "195",
    link: "https://zcooly.se/learning-game",
    rating: 4.5,
    reviews: 67
  },
  
  // Nursery Essentials
  {
    id: 7,
    name: "Bugaboo Fox 5 Stroller",
    description: "Lightweight, durable, and stylish—perfect for urban parents.",
    category: ProductCategory.NURSERY,
    priceRange: "Starting at 8,999 SEK",
    image: "/images/bugaboo-stroller.jpg",
    retailer: "Bugaboo SE",
    retailerLogo: "/images/logo-bugabo.png",
    commission: "6",
    link: "https://bugaboo.se/stroller",
    isEditorsPick: true,
    rating: 4.5,
    reviews: 42
  },
  {
    id: 8,
    name: "Convertible Crib & Toddler Bed Set",
    description: "Grows with your child—from crib to toddler bed.",
    category: ProductCategory.NURSERY,
    priceRange: "Starting at 1,499 SEK",
    image: "/images/crib-set.jpg",
    retailer: "Babyland",
    retailerLogo: "/images/logo-babyland.png",
    commission: "4",
    link: "https://babyland.se/crib-set",
    rating: 4,
    reviews: 113
  },
  
  // Health & Safety
  {
    id: 9,
    name: "Axkid Minikid 2 Car Seat",
    description: "Rear-facing for maximum safety—suitable for newborns up to 7 years.",
    category: ProductCategory.SAFETY,
    priceRange: "Starting at 2,499 SEK",
    image: "/images/axkid-carseat.jpg",
    retailer: "Axkid SE",
    retailerLogo: "/images/logo-axkid.png",
    commission: "5",
    link: "https://axkid.se/car-seat",
    isBestSeller: true,
    rating: 5,
    reviews: 214
  },
  {
    id: 10,
    name: "Safekid GPS Watch for Kids",
    description: "Track your child's location in real-time with SOS alerts.",
    category: ProductCategory.SAFETY,
    priceRange: "Starting at 799 SEK",
    image: "/images/gps-watch.png",
    retailer: "Safekid SE",
    retailerLogo: "/images/logo-safekid.png",
    commission: "10",
    link: "https://safekid.se/gps-watch",
    rating: 4,
    reviews: 76
  }
];
