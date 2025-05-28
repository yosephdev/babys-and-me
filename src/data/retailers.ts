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
    description: "Online butik för barn med ett brett utbud av produkter",
    logo: "/images/logo-jollyroom.png",
    commission: "5",
    website: "https://jollyroom.se",
    category: "Allmänt",
  },
  {
    id: 2,
    name: "BabyWorld SE",
    description: "Unikt och brett utbud av babyprodukter för alla åldrar",
    logo: "/images/logo-babyworld.png",
    commission: "8",
    website: "https://babyworld.se",
    category: "Allmänt",
  },
  {
    id: 3,
    name: "Polarn O. Pyret",
    description: "Högkvalitativa och hållbara kläder för barn",
    logo: "/images/logo-pop.png",
    commission: "8",
    website: "https://www.polarnopyret.se",
    category: "Kläder",
  },
  {
    id: 4,
    name: "Bugaboo SE",
    description: "Premium barnvagnar och resesystem för moderna föräldrar",
    logo: "/images/logo-bugabo.png",
    commission: "6",
    website: "https://www.bugaboo.com/se-en/",
    category: "Resor",
  },
  {
    id: 5,
    name: "Baby V",
    description: "Riktig babybutik med noggrant utvalda produkter",
    logo: "/images/logo-babyv.png",
    commission: "7",
    website: "https://babyv.se",
    category: "Allmänt",
  },
  {
    id: 6,
    name: "Babyland",
    description: "Prisvärda babyprodukter för vardagligt bruk",
    logo: "/images/logo-babyland.png",
    commission: "4",
    website: "https://www.babyland.se",
    category: "Allmänt",
  },
  {
    id: 7,
    name: "Axkid SE",
    description: "Specialiserade på bakåtvända bilbarnstolar för maximal säkerhet",
    logo: "/images/logo-axkid.png",
    commission: "5",
    website: "https://axkid.com/se/",
    category: "Säkerhet",
  },
  {
    id: 8,
    name: "Kid's Concept",
    description: "Träleksaker och barnrumsmöbler med skandinavisk design",
    logo: "/images/logo-kidsconcept.png",
    commission: "10",
    website: "https://www.kidsconcept.se",
    category: "Leksaker",
  },
];
