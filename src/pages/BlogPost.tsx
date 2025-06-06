import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronLeft, User, Clock, Heart } from "lucide-react";

export const blogPosts = [
  {
    id: 1,
    title: "Säkerhet Först: Varför Axkid Bilbarnstolar Är Det Bästa Valet för Ditt Barn",
    excerpt: "Upptäck varför Axkids bakåtvända bilbarnstolar erbjuder överlägsen säkerhet och komfort för barn upp till 7 år.",
    image: "https://axkid.com/app/uploads/7350057589601_1.png",
    date: "2024-05-15",
    category: "Produktrecensioner",
    slug: "axkid-car-seats-safety",
    author: "Anna Andersson",
    readTime: "8 min",
    likes: 245
  },
  {
    id: 2,
    title: "Aktiv Utomhuslek: Hur BERG Leksaker Främjar Barns Utveckling",
    excerpt: "Upptäck hur BERG:s högkvalitativa utomhusleksaker hjälper barn att utveckla motorik, balans och självförtroende genom aktiv lek.",
    image: "https://cdn.berg.com/media/catalog/product/2/4/24.50.07.00_1_berg_go2_retro_pink.png",
    date: "2024-05-10",
    category: "Föräldraskapstips",
    slug: "berg-toys-child-development",
    author: "Erik Johansson",
    readTime: "10 min",
    likes: 189
  },
  {
    id: 3,
    title: "Stilfull Komfort: Minymo Barnkläder från BabyWorld",
    excerpt: "Upptäck Minymos mjuka och hållbara barnkläder i cashmere och andra premium material, perfekta för din bebis känsliga hud.",
    image: "https://www.babyworld.se/assets/blobs/Babyworld_Minymo_La%CC%8Anga%CC%88rmad_Body_Blue_Fog_145206_1-5f4eddf40c.png",
    date: "2024-05-05",
    category: "Produktrecensioner",
    slug: "minymo-baby-clothes",
    author: "Lina Ekström",
    readTime: "7 min",
    likes: 156
  },
  {
    id: 4,
    title: "Barnsäkerhet i Bilen: Expertens Guide till Rätt Bilbarnstol",
    excerpt: "En omfattande guide till att välja rätt bilbarnstol för ditt barn, med fokus på säkerhet, komfort och långsiktig användning.",
    image: "https://axkid.com/app/uploads/Axkid-Minikid-3-Granite-angle.png",
    date: "2024-04-28",
    category: "Barnhälsa",
    slug: "car-seat-safety-guide",
    author: "Dr. Sofia Berg",
    readTime: "12 min",
    likes: 203
  },
  {
    id: 5,
    title: "Utomhuslek Året Runt: Fördelar för Barns Fysiska och Mentala Hälsa",
    excerpt: "Lär dig hur regelbunden utomhuslek med kvalitetsleksaker från BERG kan förbättra ditt barns hälsa, utveckling och välbefinnande.",
    image: "https://cdn.berg.com/media/catalog/product/2/4/24.77.03.00_1_berg_nexo_foldable_mint.png",
    date: "2024-04-20",
    category: "Barnhälsa",
    slug: "outdoor-play-benefits",
    author: "Dr. Lisa Martinez",
    readTime: "9 min",
    likes: 178
  },
  {
    id: 6,
    title: "Hållbart Mode för Barn: Varför Kvalitet Lönar Sig i Längden",
    excerpt: "En guide till att välja hållbara och högkvalitativa barnkläder som BabyWorlds Minymo-kollektion, som är bättre för både plånboken och miljön.",
    image: "https://www.babyworld.se/assets/blobs/Babyworld_Minymo_La%CC%8Anga%CC%88rmad_Body_Regatta_145126_1-d0162c8c3a.png",
    date: "2024-04-15",
    category: "Budgettips",
    slug: "sustainable-baby-fashion",
    author: "Maria Svensson",
    readTime: "11 min",
    likes: 167
  },
  {
    id: 7,
    title: "Balans och Koordination: Så Utvecklas Ditt Barns Motoriska Färdigheter",
    excerpt: "Upptäck hur leksaker som BERG GO² och Chillafish balanscyklar hjälper ditt barn att utveckla viktiga motoriska färdigheter genom lek.",
    image: "https://www.babyworld.se/assets/blobs/Babyworld_Chillafish_Charlie_Glow_Balanscykel_Orange_146791_1-82522d8fd2.png",
    date: "2024-04-10",
    category: "Föräldraskapstips",
    slug: "child-motor-skills-development",
    author: "Dr. Sofia Berg",
    readTime: "13 min",
    likes: 145
  },
  {
    id: 8,
    title: "Barnsäkerhet i Alla Väder: Rätt Utrustning för Utomhusäventyr",
    excerpt: "En guide till att hålla ditt barn säkert och bekvämt utomhus i alla väderförhållanden med produkter från våra officiella partners.",
    image: "https://www.babyworld.se/assets/blobs/Babyworld_Mikk-Line_Gummist%C3%B6vlar_3D_Patch_Woodrose_149558_1-60c1474b77.png",
    date: "2024-04-05",
    category: "Produktrecensioner",
    slug: "outdoor-safety-gear",
    author: "Emma Nilsson",
    readTime: "10 min",
    likes: 198
  },
  {
    id: 9,
    title: "10 Viktiga Babyprodukter Varje Nybliven Förälder Behöver 2025",
    excerpt: "En guide till de mest nödvändiga produkterna för ditt barns första år, från säkerhetsutrustning till bekvämlighetsartiklar.",
    image: "https://axkid.com/app/uploads/7350057589601_1.png",
    date: "2025-03-15",
    category: "Shoppingguide",
    slug: "baby-products-2024",
    author: "Anna Andersson",
    readTime: "8 min",
    likes: 245
  },
  {
    id: 10,
    title: "Vetenskapen om Babysömn: Experttips för Bättre Nätter",
    excerpt: "Förstå din babys sömncykler och lär dig tekniker för att skapa en hälsosam sömnrutin för hela familjen.",
    image: "https://www.babyworld.se/assets/blobs/Babyworld_Minymo_La%CC%8Anga%CC%88rmad_Body_Blue_Fog_145206_1-5f4eddf40c.png",
    date: "2024-03-10",
    category: "Föräldraskapstips",
    slug: "baby-sleep-science",
    author: "Dr. Emily Chen",
    readTime: "10 min",
    likes: 189
  },
  {
    id: 11,
    title: "Bästa Babynäten 2025: En Guide för Bekväma Föräldrar",
    excerpt: "En detaljerad genomgång av årets bästa babynäten, med fokus på ergonomi, bekvämlighet och säkerhet.",
    image: "https://www.babyworld.se/assets/blobs/Babyworld_Chillafish_Charlie_Glow_Balanscykel_Orange_146791_1-82522d8fd2.png",
    date: "2025-03-05",
    category: "Produktrecensioner",
    slug: "best-baby-carriers-2024",
    author: "Jessica Taylor",
    readTime: "12 min",
    likes: 156
  },
  {
    id: 12,
    title: "Vanliga Barnhälsoproblem: När Ska Du Söka Vård?",
    excerpt: "En guide till att identifiera och hantera vanliga barnhälsoproblem, med expertråd om när du bör kontakta en läkare.",
    image: "https://axkid.com/app/uploads/Axkid-Minikid-3-Granite-angle.png",
    date: "2024-02-28",
    category: "Barnhälsa",
    slug: "baby-health-concerns",
    author: "Dr. Emily Chen",
    readTime: "15 min",
    likes: 203
  },
  {
    id: 13,
    title: "Stärk Din Babys Immunförsvar: Naturliga Metoder",
    excerpt: "Lär dig hur du kan stödja din babys immunförsvar genom kost, hygien och andra naturliga metoder.",
    image: "https://www.babyworld.se/assets/blobs/Babyworld_Minymo_La%CC%8Anga%CC%88rmad_Body_Regatta_145126_1-d0162c8c3a.png",
    date: "2024-02-20",
    category: "Barnhälsa",
    slug: "baby-immune-system",
    author: "Dr. Lisa Martinez",
    readTime: "9 min",
    likes: 178
  },
  {
    id: 14,
    title: "Barnmat: Från Amning till Fast Mat",
    excerpt: "En komplett guide till din babys näringsbehov från födseln till ettårsåldern, med tips om introduktion av fast mat.",
    image: "https://www.babyworld.se/assets/blobs/Babyworld_Minymo_La%CC%8Anga%CC%88rmad_Body_Blue_Fog_145206_1-5f4eddf40c.png",
    date: "2024-02-15",
    category: "Budgettips",
    slug: "baby-nutrition-guide",
    author: "Maria Svensson",
    readTime: "11 min",
    likes: 167
  },
  {
    id: 15,
    title: "Barnutveckling: Milstolpar Under Första Året",
    excerpt: "Följ din babys utveckling månad för månad och lär dig hur du kan stödja deras tillväxt och utveckling.",
    image: "https://cdn.berg.com/media/catalog/product/2/4/24.50.07.00_1_berg_go2_retro_pink.png",
    date: "2024-02-10",
    category: "Föräldraskapstips",
    slug: "baby-development-milestones",
    author: "Dr. Sofia Berg",
    readTime: "13 min",
    likes: 145
  },
  {
    id: 16,
    title: "Barnsäkerhet i Hemmet: En Komplett Checklista",
    excerpt: "En omfattande guide till att göra ditt hem säkert för din nyfödda, med fokus på förebyggande åtgärder.",
    image: "https://www.babyworld.se/assets/blobs/Babyworld_Mikk-Line_Gummist%C3%B6vlar_3D_Patch_Woodrose_149558_1-60c1474b77.png",
    date: "2024-02-05",
    category: "Produktrecensioner",
    slug: "baby-proofing-home",
    author: "Emma Nilsson",
    readTime: "10 min",
    likes: 198
  }
];

function getPostContent(slug: string) {
  switch (slug) {
    case "axkid-car-seats-safety":
      return {
        introduction: "Axkids bakåtvända bilbarnstolar är kända för sin höga säkerhetsstandard och komfort. I denna artikel går vi igenom varför de är det bästa valet för ditt barn.",
        keyPoints: [
          "Bakåtvända stolar skyddar barnets huvud och nacke vid kollision.",
          "Axkid erbjuder justerbara och bekväma modeller för barn upp till 7 år.",
          "Alla stolar är testade enligt de senaste säkerhetsstandarderna.",
          "Enkel installation och användarvänliga funktioner."
        ],
        expertAdvice: "Anna Andersson, certifierad bilbarnstolsexpert, rekommenderar alltid bakåtvända stolar så länge som möjligt för maximal säkerhet.",
        conclusion: "Välj Axkid för att ge ditt barn bästa möjliga skydd och komfort under bilresan."
      };
    case "berg-toys-child-development":
      return {
        introduction: "BERG:s utomhusleksaker är utformade för att stimulera barns utveckling genom aktiv lek. Här är varför de är ett utmärkt val.",
        keyPoints: [
          "Främjar motorik och balans genom rörelse.",
          "Bygger självförtroende när barn lär sig nya färdigheter.",
          "Högkvalitativa material för långvarig och säker lek.",
          "Passar barn i olika åldrar och utvecklingsstadier."
        ],
        expertAdvice: "Erik Johansson, barnpsykolog, betonar vikten av daglig fysisk aktivitet för barns mentala och fysiska utveckling.",
        conclusion: "Investera i kvalitetsleksaker som inspirerar till rörelse och upptäckarglädje året runt."
      };
    case "minymo-baby-clothes":
      return {
        introduction: "Minymo erbjuder barnkläder i mjuka och hållbara material, perfekta för känslig hud. Upptäck varför de är ett populärt val bland föräldrar.",
        keyPoints: [
          "Cashmere och premium material för extra komfort.",
          "Slitstarka kläder som tål lek och tvätt.",
          "Stilren design som passar alla tillfällen.",
          "Miljövänliga och ansvarsfulla tillverkningsprocesser."
        ],
        expertAdvice: "Lina Ekström, barnklädesexpert, rekommenderar att välja kläder som är OEKO-TEX-certifierade för att undvika skadliga kemikalier.",
        conclusion: "Välj Minymo för att kombinera stil, komfort och hållbarhet för ditt barn."
      };
    case "car-seat-safety-guide":
      return {
        introduction: "Att välja rätt bilbarnstol är avgörande för ditt barns säkerhet. Denna guide hjälper dig att fatta ett informerat beslut.",
        keyPoints: [
          "Välj en stol som passar ditt barns ålder och vikt.",
          "Kontrollera att stolen är godkänd enligt ECE R44/04 eller i-Size.",
          "Installera stolen korrekt enligt tillverkarens instruktioner.",
          "Byt till nästa stol först när barnet vuxit ur den nuvarande."
        ],
        expertAdvice: "Dr. Sofia Berg, barnsäkerhetsexpert, rekommenderar att alltid följa tillverkarens riktlinjer och att aldrig köpa begagnade bilbarnstolar.",
        conclusion: "En korrekt installerad och anpassad bilbarnstol är det bästa skyddet för ditt barn i bilen."
      };
    case "outdoor-play-benefits":
      return {
        introduction: "Utomhuslek är viktigt för barns hälsa och utveckling. Här är de främsta fördelarna med att leka ute året runt.",
        keyPoints: [
          "Stärker immunförsvaret och minskar risken för sjukdomar.",
          "Främjar fysisk utveckling och koordination.",
          "Ger mental stimulans och minskar stress.",
          "Skapar möjligheter för socialt samspel och fantasilek."
        ],
        expertAdvice: "Dr. Lisa Martinez, barnläkare, rekommenderar minst en timmes utomhuslek varje dag för alla barn.",
        conclusion: "Regelbunden utomhuslek med kvalitetsleksaker bidrar till ett friskare och gladare barn."
      };
    case "sustainable-baby-fashion":
      return {
        introduction: "Att välja hållbara barnkläder är bra för både miljön och plånboken. Så här gör du smarta val.",
        keyPoints: [
          "Satsa på kvalitet framför kvantitet.",
          "Välj miljömärkta och certifierade material.",
          "Ta hand om kläderna för längre livslängd.",
          "Återanvänd och återvinn när det är möjligt."
        ],
        expertAdvice: "Maria Svensson, hållbarhetsrådgivare, tipsar om att köpa färre men bättre plagg och att tvätta i låga temperaturer.",
        conclusion: "Hållbart mode för barn är en investering i framtiden – både för ditt barn och för planeten."
      };
    case "child-motor-skills-development":
      return {
        introduction: "Motoriska färdigheter utvecklas genom lek och rörelse. Leksaker som balanscyklar är ett utmärkt verktyg.",
        keyPoints: [
          "Balanscyklar tränar koordination och balans.",
          "Lek stimulerar hjärnans utveckling.",
          "Barn lär sig genom att prova och misslyckas.",
          "Välj leksaker som utmanar men inte frustrerar."
        ],
        expertAdvice: "Dr. Sofia Berg, barnutvecklingsexpert, rekommenderar att låta barn utforska i sin egen takt utan för mycket styrning.",
        conclusion: "Stöd ditt barns motoriska utveckling med rätt leksaker och mycket uppmuntran."
      };
    case "outdoor-safety-gear":
      return {
        introduction: "Rätt utrustning gör utomhusäventyret både säkert och roligt för ditt barn, oavsett väder.",
        keyPoints: [
          "Välj kläder som skyddar mot vind och regn.",
          "Satsa på skor med bra grepp och passform.",
          "Reflexer och hjälm är ett måste vid cykling.",
          "Använd solskydd även under molniga dagar."
        ],
        expertAdvice: "Emma Nilsson, säkerhetsexpert, påminner om att alltid kontrollera utrustningen innan varje utomhusaktivitet.",
        conclusion: "Med rätt utrustning kan ditt barn leka säkert och bekvämt utomhus året runt."
      };
    case "baby-products-2024":
      return {
        introduction: "Som nybliven förälder kan det vara svårt att veta vilka produkter som verkligen behövs. Här är de 10 viktigaste babyprodukterna för 2025.",
        keyPoints: [
          "Säker bilbarnstol för trygg transport.",
          "Barnvagn som passar din livsstil.",
          "Babyskydd och säkerhetsgrindar för hemmet.",
          "Skötbord och blöjväska för smidig vardag.",
          "Bärsele eller bärsjal för närhet och frihet.",
          "Babymonitor för extra trygghet.",
          "Mjuka filtar och sängkläder.",
          "Badbalja och badleksaker.",
          "Matningsutrustning som flaskor och haklappar.",
          "Leksaker som stimulerar utveckling."
        ],
        expertAdvice: "Anna Andersson, babyproduktsexpert, rekommenderar att prioritera säkerhet och kvalitet framför kvantitet.",
        conclusion: "Med rätt produkter blir det första året både enklare och tryggare för hela familjen."
      };
    case "baby-sleep-science":
      return {
        introduction: "Babysömn är ett av de mest omdiskuterade ämnena bland nya föräldrar. Förståelse för sömncykler och rutiner kan göra nätterna lugnare.",
        keyPoints: [
          "Babysömn sker i korta cykler och förändras med åldern.",
          "En tydlig kvällsrutin hjälper barnet att varva ner.",
          "Undvik skärmar och starkt ljus före läggdags.",
          "Trygg och lugn sovmiljö främjar bättre sömn."
        ],
        expertAdvice: "Dr. Emily Chen, barnläkare, tipsar om att vara lyhörd för barnets signaler och att inte stressa över tillfälliga sömnproblem.",
        conclusion: "Med tålamod och rätt rutiner kan hela familjen få bättre nätter och mer energi på dagen."
      };
    case "best-baby-carriers-2024":
      return {
        introduction: "Babynäten har blivit en oumbärlig del av småbarnslivet. Här är årets bästa modeller med fokus på ergonomi och komfort.",
        keyPoints: [
          "Välj en bärsele som ger stöd för både barn och förälder.",
          "Ergonomisk design minskar belastning på rygg och axlar.",
          "Justerbara remmar och material för bästa passform.",
          "Säkerhetscertifieringar är ett måste vid val av bärsele."
        ],
        expertAdvice: "Jessica Taylor, bärselexpert, rekommenderar att alltid prova bärselen innan köp och att följa tillverkarens instruktioner.",
        conclusion: "En bra bärsele gör vardagen enklare och ger närhet mellan förälder och barn på ett säkert sätt."
      };
    default:
      return {
        introduction: "Detta inlägg är under uppbyggnad. Kom tillbaka snart för komplett innehåll.",
        keyPoints: [],
        expertAdvice: "",
        conclusion: ""
      };
  }
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Inlägg hittades inte</h1>
            <Link to="/blogg" className="text-baby-pink hover:underline">
              Tillbaka till bloggen
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const content = getPostContent(post.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <article className="py-16">
          <div className="container mx-auto px-4">
            <Link
              to="/blogg"
              className="inline-flex items-center text-baby-pink hover:underline mb-8"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Tillbaka till bloggen
            </Link>
            <div className="max-w-4xl mx-auto space-y-6">
              <span className="bg-soft-pink text-baby-pink px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center space-x-6 text-gray-600 text-sm">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </span>
                <span className="flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  {post.likes} likes
                </span>
              </div>
            </div>
            <div className="max-w-4xl mx-auto mt-8">
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="max-w-4xl mx-auto mt-12 prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {content.introduction}
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Viktiga punkter</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {content.keyPoints.map((point: string, index: number) => (
                  <li key={index} className="text-lg">
                    {point}
                  </li>
                ))}
              </ul>
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Expertisråd</h2>
              <blockquote className="border-l-4 border-baby-pink pl-6 text-gray-700 italic text-lg">
                {content.expertAdvice}
              </blockquote>
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sammanfattning</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {content.conclusion}
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;