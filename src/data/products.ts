
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
    name: "Isbjörn Helicopter Winter Jacket",
    description: "Durable, waterproof, and stylish—perfect for outdoor adventures.",
    category: ProductCategory.CLOTHING,
    priceRange: "Starting at 499 SEK",
    image: "https://03.cdn37.se/gl/images/2.680298/isbjorn-helicopter-winter-jacket-kids-smoothie.jpeg",
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
    name: "Newbie Organic Collection Set",
    description: "Soft, breathable, and eco-friendly—ideal for newborns.",
    category: ProductCategory.CLOTHING,
    priceRange: "Starting at 299 SEK",
    image: "https://www.jollyroom.se/storage/8F39BA650C6F5AEE9C6E3F64FBFA808B7FBF040EC2505501F5B2E2FBC72E8025/4271e11d21a24f9b847d74b870696ccf/1200-1056-0-jpg.Jpeg/media/ceeeedb0916a4c53a1ccff98e9256b7d/850724-3499_1.jpeg", // Working: Newbie Organic Collection Set from Baby V
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
    name: "Baby Born Feeding Set",
    description: "A complete feeding set for your little one—includes bibs, spoons, and more.",
    category: ProductCategory.FEEDING,
    priceRange: "Starting at 89 SEK",
    image: "https://www.jollyroom.se/storage/5ADD9E44E4ED9DD9EA88FFC3DCE5C73BB59CBBEC4E4D932EF7933BAAB05EC35B/6fdfefee15b640ba804a9966527a91ee/jpg/media/07df892396f94cd893eb0c027e8fddcd/832851-2139_1.jpg",
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
    name: "Liewood Ellis Sippy Cup",
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
    name: "Kids Concept Building Blocks Set",
    description: "Encourages creativity and fine motor skills—made from sustainable wood.",
    category: ProductCategory.TOYS,
    priceRange: "Starting at 199 SEK",
    image: "/images/wooden-blocks.png",
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
    name: "Brio Toddler Wobbler",
    description: "Classic wooden toy that helps develop balance and coordination.",
    category: ProductCategory.TOYS,
    priceRange: "Starting at 195 SEK",
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
    image: "https://www.bugaboo.com/dw/image/v2/BDLP_PRD/on/demandware.static/-/Sites-bugaboo-master/default/dw58d29a83/images/PV007575/Bugaboo-Fox-5-renew-bassinet-and-seat-stroller-black-base-dark-cherry-fabrics-dark-cherry-sun-canopy-x-PV007575-01.png?sw=800",
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
    name: "Stokke Sleepi Mini Bundle",
    description: "Grows with your child—from crib to toddler bed.",
    category: ProductCategory.NURSERY,
    priceRange: "Starting at 1,499 SEK",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbrSNTOqg9MH2wwWtArFTMW1BSgi9Zo41YnJNuJbSoZhjNjqXbJzVJRBbZumRU-Gkf6nJvxomAZsLifVP4WEKYo96tz8aXxUS2L3NgX1PuS7a7QZSKf-pu0fyZMapZ9FKsAQnyXiI&usqp=CAc", 
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
    name: "Axkid Minikid 3 Car Seat",
    description: "Rear-facing for maximum safety—suitable for newborns up to 7 years.",
    category: ProductCategory.SAFETY,
    priceRange: "Starting at 2,499 SEK",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQ3VJySsSYpEeK15d_0MTdBBuIbVnBMtwog&s", // Baby V: Axkid Minikid 3 Car Seat
    retailer: "Axkid",
    retailerLogo: "/images/logo-axkid.png",
    commission: "5",
    link: "https://axkid.se/car-seat",
    isBestSeller: true,
    rating: 5,
    reviews: 214
  },
  {
    id: 10,
    name: "Safekid GPS Watch",
    description: "Smart GPS watch for kids – real-time location tracking, safe zones, and emergency calling.",
    category: ProductCategory.SAFETY,
    priceRange: "Starting at 799 SEK",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQR9TUS7HQOj4ZSDZMbdpnjqgIaabLCDM8UB0P1wSoRKB3J__0CVwnZWFzqRHnSk-4hrBXSauILOhHOheP0m1Z_0NIwDZ8YcOd56_odZ7OcgcE_HOW31AURNuibR3mxx_bnEKjqXg&usqp=CAc", // Local: Safekid GPS Watch for Kids
    retailer: "Safekid SE",
    retailerLogo: "/images/logo-safekid.png",
    commission: "10",
    link: "https://safekid.se/gps-watch",
    rating: 4,
    reviews: 76
  }
];
