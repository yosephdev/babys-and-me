
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
    image: "https://www.jollyroom.se/storage/ma/552b8b2e1cb24d9ba6c4315495d294be/6a7122b6e7c944c89e548d758b282d55/jpg/9CD41C9CA8F17914371A6F35D309C27C90DAF7AD/9795301-1140.jpg",
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
    image: "https://media.babyland.se/product-images/XL/liewood-ellis-sugrorsmugg-unicornpale-tuscany-0.jpg",
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
    image: "https://i.computersalg.dk/digitalcontent/200/1564/15649829.jpg",
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
    image: "https://www.jollyroom.se/storage/ma/0539a19392824155a44a1d155558d43c/8203ea4498e440e4a3910b994780e5f1/800-800-0-jpg/4A384D17A3AAE93DB9099BDEEC70073896870E91/30359-1139_1.jpg",
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
    image: "https://www.jollyroom.se/storage/ma/1f709f65f1764534a811e8a08e10c0c6/ea08acac1bd548eab632946d6467ad42/jpg/2F87DAEF046D8EF19B7D46B1BC9FAD06611C99E5/stokke-sleepi-mini-bundle-white-hazy-grey-1.jpg",
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
    image: "https://www.jollyroom.se/storage/ma/aa0f3a44e6784e929cd0ecb800a0dd80/dff7893abc9d4e2f8fc0753fbee9af49/1108-800-0-jpg/B4FD6F65B5DA0353F85DB767E0A948183D6A3E65/axkid-minikid-3-bilbarnstol-premium-shell-grey-0.jpg",
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
    name: "Vtech Video Baby Monitor",
    description: "HD video monitoring with night vision and two-way audio.",
    category: ProductCategory.SAFETY,
    priceRange: "Starting at 799 SEK",
    image: "https://www.jollyroom.se/storage/ma/10ed90c1c8f847c28f1377c1a4f772f1/97168403e85d4a2eb77970926cd3c5d9/jpg/6276BA5A1B5E5581C3143F99FF5C77F41F0CD5A8/952401-1139.jpg",
    retailer: "Safekid SE",
    retailerLogo: "/images/logo-safekid.png",
    commission: "10",
    link: "https://safekid.se/gps-watch",
    rating: 4,
    reviews: 76
  }
];
