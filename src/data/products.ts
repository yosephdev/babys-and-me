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
export const bergProducts: Product[] = [
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

// Import partner products
import { axkidProducts } from "./axkidProducts";
import { babylandProducts } from "./babylandProducts";
import { babyworldProducts } from "./babyworldProducts";
import { babyvProducts } from "./babyvProducts";
import { bugabooProducts } from "./bugabooProducts";
import { litenlekerProducts } from "./litenlekerProducts";
import { polarnProducts } from "./polarnProducts";
import { storlitenProducts } from "./storlitenProducts";

// Only include products from official partners
export const products: Product[] = [
  // Axkid product in main list
  {
    id: 9,
    name: "Axkid Care - Minikid 4 - Tar",
    description: "Bakåtvänd för maximal säkerhet—lämplig för nyfödda upp till 7 år.",
    category: ProductCategory.SAFETY,
    priceRange: "Från 2 499 SEK",
    image: "https://axkid.com/app/uploads/7350057589601_1.png",
    retailer: "Axkid SE",
    retailerLogo: "/images/logo-axkid.png",
    commission: "5",
    link: "https://go.adt256.com/t/t?a=1954032316&as=1971524470&t=2&tk=1&url=https://axkid.com/sv/product/axkid-care-minikid-4/?attribute_pa_color=tar",
    isBestSeller: true,
    rating: 5,
    reviews: 214
  },
  
  // Add all partner products to the main products array
  ...bergProducts,
  ...axkidProducts,
  ...babylandProducts,
  ...babyworldProducts,
  ...babyvProducts,
  ...bugabooProducts,
  ...litenlekerProducts,
  ...storlitenProducts,
  ...polarnProducts.map(product => ({
    ...product,
    category: ProductCategory.CLOTHING
  })),
  
  // No blog posts in products array
];