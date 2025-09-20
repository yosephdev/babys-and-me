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
        name: "BabyWorld SE",
        description: "Baby- & barnbutik online - unikt & brett sortiment för alla åldrar",
        logo: "/images/logo-babyworld.png",
        commission: "8",
        website: "https://to.babyworld.se/t/t?a=1945556823&as=1971524470&t=2&tk=1",
        category: "Allmänt",
    },
    {
        id: 2,
        name: "Polarn O. Pyret",
        description: "Kläder som låter barn vara barn - högkvalitativa och hållbara",
        logo: "/images/logo-polarn.png",
        commission: "8",
        website: "https://pin.polarnopyret.se/t/t?a=1126522829&as=1971524470&t=2&tk=1",
        category: "Kläder",
    },
    {
        id: 3,
        name: "Bugaboo SE",
        description: "Barnvagnar & tillbehör - premium resesystem för moderna föräldrar",
        logo: "/images/logo-bugaboo.png",
        commission: "6",
        website: "https://do.bugaboo.com/t/t?a=1625527092&as=1971524470&t=2&tk=1",
        category: "Resor",
    },
    {
        id: 4,
        name: "Baby V",
        description: "En riktigt babybutik med noggrant utvalda kvalitetsprodukter",
        logo: "/images/logo-babyv.png",
        commission: "7",
        website: "https://go.adt231.net/t/t?a=1327902115&as=1971524470&t=2&tk=1",
        category: "Allmänt",
    },
    {
        id: 6,
        name: "Axkid SE",
        description: "Vi vill sätta nya, högre standarder för barns säkerhet i trafiken genom bakåtvänt åkande",
        logo: "/images/logo-axkid.png",
        commission: "5",
        website: "https://go.adt256.com/t/t?a=1954032316&as=1971524470&t=2&tk=1",
        category: "Säkerhet",
    },
    {
        id: 7,
        name: "Stor&Liten",
        description: "Köp leksaker online med snabb leverans och stort utbud",
        logo: "/images/logo-storliten.png",
        commission: "4",
        website: "https://at.storochliten.se/t/t?a=1060728464&as=1971524470&t=2&tk=1",
        category: "Leksaker",
    },
    {
        id: 8,
        name: "Litenleker",
        description: "Leksaker för alla åldrar och intressen",
        logo: "/images/logo-litenleker.png",
        commission: "5",
        website: "https://go.adt256.com/t/t?a=1325987281&as=1971524470&t=2&tk=1",
        category: "Leksaker",
    },
    {
        id: 9,
        name: "BERG SE",
        description: "Förvandla din plats till en lekplats för alla åldrar",
        logo: "/images/berg-logo.png", 
        commission: "10",
        website: "https://go.adt267.com/t/t?a=1954034628&as=1971524470&t=2&tk=1",
        category: "Leksaker",
    },
];