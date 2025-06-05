export enum ProductCategory {
  CLOTHING = "Kläder & Accessoarer",
  FEEDING = "Matningsartiklar",
  TOYS = "Leksaker & Pedagogiska artiklar",
  NURSERY = "Barnkammarnödvändigheter",
  SAFETY = "Hälsa & Säkerhet"
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

// BERG products
const bergProducts: Product[] = [
  {
    id: 101,
    name: "BERG GO² Mint",
    description: "Perfekt första fordon för små barn med en stabil och säker design.",
    category: ProductCategory.TOYS,
    priceRange: "829 SEK",
    image: "https://cdn.berg.com/media/catalog/product/2/4/24.50.07.00_1_berg_go2_retro_pink.png",
    retailer: "BERG SE",
    retailerLogo: "/images/berg-logo.png",
    commission: "10",
    link: "https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/berg-go2-retro-pink",
    isBestSeller: true,
    rating: 4.8,
    reviews: 24
  },
  {
    id: 102,
    name: "BERG PlayBase Nest Swing",
    description: "Bekväm och rolig gungställning för barn i alla åldrar.",
    category: ProductCategory.TOYS,
    priceRange: "859 SEK",
    image: "https://cdn.berg.com/media/catalog/product/2/0/20.21.03.00_1_BERG_PlayBase_Nest_swing.png",
    retailer: "BERG SE",
    retailerLogo: "/images/berg-logo.png",
    commission: "10",
    link: "https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/klatterstallning/berg-playbase-nest-swing",
    rating: 4.7,
    reviews: 18
  },
  {
    id: 103,
    name: "BERG Dempy Black",
    description: "Stilren och robust leksak för aktiva barn.",
    category: ProductCategory.TOYS,
    priceRange: "899 SEK",
    image: "https://cdn.berg.com/media/catalog/product/2/5/25.17.01.00_1_berg_dempy_black_1.png",
    retailer: "BERG SE",
    retailerLogo: "/images/berg-logo.png",
    commission: "10",
    link: "https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/berg-dempy-black",
    isEditorsPick: true,
    rating: 4.9,
    reviews: 32
  },
  {
    id: 104,
    name: "BERG Dempy",
    description: "Klassisk design med hög kvalitet för långvarig användning.",
    category: ProductCategory.TOYS,
    priceRange: "899 SEK",
    image: "https://cdn.berg.com/media/catalog/product/2/5/25.17.00.02_1_berg_dempy_1.png",
    retailer: "BERG SE",
    retailerLogo: "/images/berg-logo.png",
    commission: "10",
    link: "https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/berg-dempy-green",
    rating: 4.8,
    reviews: 27
  },
  {
    id: 105,
    name: "BERG Ladder Platform",
    description: "Säker och stabil plattform för aktiv lek.",
    category: ProductCategory.TOYS,
    priceRange: "899 SEK",
    image: "https://cdn.berg.com/media/catalog/product/3/5/35.90.55.01_1_berg_ladder_platform___ladder_m.png",
    retailer: "BERG SE",
    retailerLogo: "/images/berg-logo.png",
    commission: "10",
    link: "https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/berg-ladder-platform-ladder-m",
    rating: 4.6,
    reviews: 15
  },
  {
    id: 106,
    name: "BERG Ultim Weather Cover Extra 280 Black",
    description: "Skydda din BERG-produkt från väder och vind med detta premium överdrag.",
    category: ProductCategory.TOYS,
    priceRange: "899 SEK",
    image: "https://cdn.berg.com/media/catalog/product/3/5/35.98.24.00_1_berg_ultim_weather_cover_extra_280_black.png",
    retailer: "BERG SE",
    retailerLogo: "/images/berg-logo.png",
    commission: "10",
    link: "https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/berg-ultim-weather-cover-extra-280-black",
    rating: 4.7,
    reviews: 12
  },
  {
    id: 107,
    name: "BERG Weather Cover Extra 270 Black",
    description: "Hållbart överdrag för att skydda din BERG-produkt.",
    category: ProductCategory.TOYS,
    priceRange: "899 SEK",
    image: "https://cdn.berg.com/media/catalog/product/3/5/35.99.72.00_1_berg_weather_cover_extra_270_black.png",
    retailer: "BERG SE",
    retailerLogo: "/images/berg-logo.png",
    commission: "10",
    link: "https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/berg-weather-cover-extra-270-black",
    rating: 4.5,
    reviews: 9
  },
  {
    id: 108,
    name: "BERG Nexo Foldable Lime",
    description: "Hopfällbar design i lime för enkel förvaring och transport.",
    category: ProductCategory.TOYS,
    priceRange: "949 SEK",
    image: "https://cdn.berg.com/media/catalog/product/2/4/24.77.00.00_1_berg_nexo_foldable_lime.png",
    retailer: "BERG SE",
    retailerLogo: "/images/berg-logo.png",
    commission: "10",
    link: "https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/berg-nexo-foldable-lime",
    isBestSeller: true,
    rating: 4.9,
    reviews: 41
  },
  {
    id: 109,
    name: "BERG Nexo Foldable Blue",
    description: "Hopfällbar design i blå för enkel förvaring och transport.",
    category: ProductCategory.TOYS,
    priceRange: "949 SEK",
    image: "https://cdn.berg.com/media/catalog/product/2/4/24.77.01.00_1_berg_nexo_foldable_blue.png",
    retailer: "BERG SE",
    retailerLogo: "/images/berg-logo.png",
    commission: "10",
    link: "https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/berg-nexo-foldable-blue",
    rating: 4.8,
    reviews: 37
  },
  {
    id: 110,
    name: "BERG Nexo Foldable Mint",
    description: "Hopfällbar design i mint för enkel förvaring och transport.",
    category: ProductCategory.TOYS,
    priceRange: "949 SEK",
    image: "https://cdn.berg.com/media/catalog/product/2/4/24.77.03.00_1_berg_nexo_foldable_mint.png",
    retailer: "BERG SE",
    retailerLogo: "/images/berg-logo.png",
    commission: "10",
    link: "https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1&url=https://www.berg.com/se/berg-nexo-foldable-mint",
    isEditorsPick: true,
    rating: 4.9,
    reviews: 45
  }
];

// Import Axkid products
import { axkidProducts } from "./axkidProducts";

export const products: Product[] = [
  // Clothing & Accessories
  {
    id: 1,
    name: "Isbjörn Helicopter Vinterjacka",
    description: "Hållbar, vattentät och stilren—perfekt för utomhusäventyr.",
    category: ProductCategory.CLOTHING,
    priceRange: "Från 499 SEK",
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
    name: "Newbie Ekologisk Kollektion Set",
    description: "Mjuk, andningsbar och miljövänlig—idealisk för nyfödda.",
    category: ProductCategory.CLOTHING,
    priceRange: "Från 299 SEK",
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
    name: "Baby Born Matningsset",
    description: "Ett komplett matningsset för din lilla—inkluderar haklappar, skedar och mer.",
    category: ProductCategory.FEEDING,
    priceRange: "Från 89 SEK",
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
    name: "Liewood Ellis Pipmugg",
    description: "Spillsäker och BPA-fri—perfekt för småbarn som lär sig dricka.",
    category: ProductCategory.FEEDING,
    priceRange: "Från 149 SEK",
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
    name: "Kids Concept Byggklossar Set",
    description: "Uppmuntrar kreativitet och finmotorik—tillverkad av hållbart trä.",
    category: ProductCategory.TOYS,
    priceRange: "Från 199 SEK",
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
    name: "Brio Gåvagn",
    description: "Klassisk träleksak som hjälper till att utveckla balans och koordination.",
    category: ProductCategory.TOYS,
    priceRange: "Från 195 SEK",
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
    name: "Bugaboo Fox 5 Barnvagn",
    description: "Lätt, hållbar och stilren—perfekt för storstadsföräldrar.",
    category: ProductCategory.NURSERY,
    priceRange: "Från 8 999 SEK",
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
    name: "Stokke Sleepi Mini Paket",
    description: "Växer med ditt barn—från spjälsäng till barnsäng.",
    category: ProductCategory.NURSERY,
    priceRange: "Från 1 499 SEK",
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
    name: "Axkid Care - Minikid 4 - Tar",
    description: "Bakåtvänd för maximal säkerhet—lämplig för nyfödda upp till 7 år.",
    category: ProductCategory.SAFETY,
    priceRange: "Från 249 SEK",
    image: "https://axkid.com/app/uploads/7350057589601_1.png",
    retailer: "Axkid SE",
    retailerLogo: "/images/logo-axkid.png",
    commission: "5",
    link: "https://go.adt256.com/t/t?a=1954032316&as=1971524470&t=2&tk=1&url=https://axkid.com/sv/product/axkid-care-minikid-4/?attribute_pa_color=tar",
    isBestSeller: true,
    rating: 5,
    reviews: 214
  },
  {
    id: 10,
    name: "Safekid GPS Klocka",
    description: "Smart GPS-klocka för barn – realtidsspårning, säkra zoner och nödsamtal.",
    category: ProductCategory.SAFETY,
    priceRange: "Från 799 SEK",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQR9TUS7HQOj4ZSDZMbdpnjqgIaabLCDM8UB0P1wSoRKB3J__0CVwnZWFzqRHnSk-4hrBXSauILOhHOheP0m1Z_0NIwDZ8YcOd56_odZ7OcgcE_HOW31AURNuibR3mxx_bnEKjqXg&usqp=CAc", // Local: Safekid GPS Watch for Kids
    retailer: "Safekid SE",
    retailerLogo: "/images/logo-safekid.png",
    commission: "10",
    link: "https://safekid.se/gps-watch",
    rating: 4,
    reviews: 76
  },
  
  // Add BERG products to the main products array
  ...bergProducts,
  
  // Add Axkid products to the main products array
  ...axkidProducts
];