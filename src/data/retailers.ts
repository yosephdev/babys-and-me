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
    description: "Din barn- och babybutik på nätet med ett brett utbud av produkter",
    logo: "/images/logo-jollyroom.png",
    commission: "5",
    website: "https://jollyroom.se",
    category: "Allmänt",
  },
  {
    id: 2,
    name: "BabyWorld SE",
    description: "Baby- & barnbutik online - unikt & brett sortiment för alla åldrar",
    logo: "/images/logo-babyworld.png",
    commission: "8",
    website: "https://babyworld.se",
    category: "Allmänt",
  },
  {
    id: 3,
    name: "Polarn O. Pyret",
    description: "Kläder som låter barn vara barn - högkvalitativa och hållbara",
    logo: "/images/logo-pop.png",
    commission: "8",
    website: "https://www.polarnopyret.se",
    category: "Kläder",
  },
  {
    id: 4,
    name: "Bugaboo SE",
    description: "Barnvagnar & tillbehör - premium resesystem för moderna föräldrar",
    logo: "/images/logo-bugabo.png",
    commission: "6",
    website: "https://www.bugaboo.com/se-en/",
    category: "Resor",
  },
  {
    id: 5,
    name: "Baby V",
    description: "En riktigt babybutik med noggrant utvalda kvalitetsprodukter",
    logo: "/images/logo-babyv.png",
    commission: "7",
    website: "https://babyv.se",
    category: "Allmänt",
  },
  {
    id: 6,
    name: "Babyland",
    description: "Barn- och babyprodukter till låga priser för vardagligt bruk",
    logo: "/images/logo-babyland.png",
    commission: "4",
    website: "https://www.babyland.se",
    category: "Allmänt",
  },
  {
    id: 7,
    name: "Axkid SE",
    description: "Vi vill sätta nya, högre standarder för barns säkerhet i trafiken genom bakåtvänt åkande",
    logo: "/images/logo-axkid.png",
    commission: "5",
    website: "https://go.adt256.com/t/t?a=1954032316&as=1971524470&t=2&tk=1",
    category: "Säkerhet",
  },
  {
    id: 8,
    name: "Kid's Concept",
    description: "Leksaker & barnrumsinredning i trä med skandinavisk design",
    logo: "/images/logo-kidsconcept.png",
    commission: "10",
    website: "https://www.kidsconcept.se",
    category: "Leksaker",
  },
  {
    id: 9,
    name: "Stor&Liten",
    description: "Köp leksaker online med snabb leverans och stort utbud",
    logo: "/images/storliten-logo.png",
    commission: "4",
    website: "https://www.storliten.se",
    category: "Leksaker",
  },
  {
    id: 10,
    name: "Zcooly",
    description: "Lärande spel som gör skärmtid meningsfull för barn",
    logo: "/images/logo-zcooly.png",
    commission: "195",
    website: "https://zcooly.se",
    category: "Utbildning",
  },
  {
    id: 11,
    name: "Safekid SE",
    description: "GPS-Klockor för Barn & Vuxna - trygghet för hela familjen",
    logo: "/images/logo-safekid.png",
    commission: "10",
    website: "https://safekid.se",
    category: "Säkerhet",
  },
  {
    id: 12,
    name: "BERG SE",
    description: "Förvandla din plats till en lekplats för alla åldrar",
    logo: "/images/berg-logo.png",    commission: "10",
    website: "https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1",
    category: "Leksaker",
  },
];