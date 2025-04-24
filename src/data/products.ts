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
    image: "https://03.cdn37.se/gl/images/2.680004/isbjorn-helicopter-winter-jacket-kids-mint.jpeg",
    retailer: "Polarn O. Pyret",
    retailerLogo: "https://placehold.co/100/baby-yellow/white?text=POP",
    commission: "8%",
    link: "https://example.com/winter-jacket",
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
    image: "https://placehold.co/400x400/soft-pink/white?text=Cotton+Bodysuits",
    retailer: "Baby V",
    retailerLogo: "https://placehold.co/100/soft-pink/white?text=BV",
    commission: "7%",
    link: "https://example.com/cotton-bodysuits",
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
    image: "https://cdn.pricenet.se/319863-home_default/canpol-babies---pastels-silicone-bib---silikonov-brynd-k-s-kapsou-10ks.jpg",
    retailer: "Jollyroom SE",
    retailerLogo: "https://placehold.co/100/baby-blue/white?text=Jolly",
    commission: "5%",
    link: "https://example.com/baby-bib",
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
    image: "https://placehold.co/400x400/soft-peach/white?text=Sippy+Cup+Set",
    retailer: "BabyWorld SE",
    retailerLogo: "https://placehold.co/100/baby-pink/white?text=BW",
    commission: "8%",
    link: "https://example.com/sippy-cup-set",
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
    image: "https://www.proshop.se/Images/600x800/3207470_1fc72b5d6455.jpg",
    retailer: "Kid's Concept",
    retailerLogo: "https://placehold.co/100/baby-pink/white?text=KC",
    commission: "10%",
    link: "https://example.com/wooden-blocks",
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
    image: "https://placehold.co/400x400/soft-pink/white?text=Learning+Game",
    retailer: "Zcooly",
    retailerLogo: "https://placehold.co/100/baby-blue/white?text=Zcooly",
    commission: "195 SEK",
    link: "https://example.com/learning-game",
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
    image: "https://www.bugaboo.com/dw/image/v2/BDLP_PRD/on/demandware.static/-/Sites-bugaboo-master/default/dw9e888cbd/images/PV007571/Bugaboo-Fox-5-renew-bassinet-and-seat-stroller-black-base-heritage-black-fabrics-heritage-black-sun-canopy-x-PV007571-01.png?sw=800",
    retailer: "Bugaboo SE",
    retailerLogo: "https://placehold.co/100/soft-blue/white?text=BB",
    commission: "6%",
    link: "https://example.com/stroller",
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
    image: "https://placehold.co/400x400/soft-yellow/white?text=Crib+Set",
    retailer: "Babyland",
    retailerLogo: "https://placehold.co/100/soft-yellow/white?text=BL",
    commission: "4%",
    link: "https://example.com/crib-set",
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
    image: "https://placehold.co/400x400/soft-pink/white?text=Car+Seat",
    retailer: "Axkid SE",
    retailerLogo: "https://placehold.co/100/baby-blue/white?text=AX",
    commission: "5%",
    link: "https://example.com/car-seat",
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
    image: "https://placehold.co/400x400/soft-peach/white?text=GPS+Watch",
    retailer: "Safekid SE",
    retailerLogo: "https://placehold.co/100/baby-pink/white?text=SK",
    commission: "10%",
    link: "https://example.com/gps-watch",
    rating: 4,
    reviews: 76
  }
];
