import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, User, Heart, ChevronLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Inlägg hittades inte</h1>
            <p className="text-gray-600 mb-8">Blogginlägget du letar efter finns inte.</p>
            <Link
              to="/blog"
              className="inline-flex items-center text-baby-pink hover:underline"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Tillbaka till bloggen
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getPostContent = (slug: string) => {
    switch (slug) {
      case "baby-products-2024": {
        return {
          introduction: "Som ny förälder kan det vara överväldigande att navigera i världen av babyprodukter. Med otaliga alternativ tillgängliga är det viktigt att fokusera på produkter som verkligen gör skillnad i ditt vardagliga liv.",
          keyPoints: [
            "Smart babyövervakare med video och temperaturövervakning",
            "Miljövänliga blöjor som är skonsamma mot barnets hud",
            "Ergonomisk barnbärsele för bekväm bärning",
            "Säker sovplats med korrekt ventilation och stöd"
          ],
          expertAdvice: "Dr. Sarah Johnson, barnläkare med 15 års erfarenhet, betonar vikten av att välja produkter som uppfyller säkerhetsstandarder. 'Let efter certifieringar som CPSC, JPMA eller ASTM när du väljer babyutrustning.'",
          conclusion: "Kom ihåg att varje barn är unikt. Börja med dessa grundläggande produkter och lägg till fler när du upptäcker ditt barns specifika behov."
        };
      }
      case "baby-sleep-science": {
        return {
          introduction: "Sömn är avgörande för din babys utveckling och välbefinnande. Denna artikel utforskar den senaste forskningen om babysömn och ger praktiska tips för att hjälpa din lilla att få den vila de behöver.",
          keyPoints: [
            "Förstå din babys naturliga sömnrytm och cykler",
            "Skapa en säker och optimal sovmiljö",
            "Hantera sömnregressioner och utmanande perioder",
            "Etablera konsekventa sömnrutiner"
          ],
          expertAdvice: "Dr. Emily Chen, barnsömnsexpert, förklarar: 'Babysömn är komplex och förändras snabbt under det första året. Fokusera på att skapa en konsekvent och lugnande sömnrutin.'",
          conclusion: "Genom att förstå vetenskapen bakom babysömn och implementera evidensbaserade strategier kan du hjälpa din lilla att utveckla hälsosamma sömnvanor."
        };
      }
      case "best-baby-carriers-2024": {
        return {
          introduction: "En bra barnbärsele kan göra stor skillnad i ditt vardagliga liv som förälder. Denna guide hjälper dig att välja rätt bärsele för dina behov och din babys utvecklingsstadium.",
          keyPoints: [
            "Ergonomisk design som stödjer babys höftutveckling",
            "Jämnt fördelad vikt och justerbara remmar för föräldern",
            "Mångsidighet för olika åldrar och situationer",
            "Andningsbart och hållbart material"
          ],
          expertAdvice: "Jessica Taylor, barnbärseleexpert, rekommenderar: 'Let efter en bärsele som möjliggör öga-mot-öga-kontakt och har M-position för optimal höftutveckling.'",
          conclusion: "Att investera i en högkvalitativ barnbärsele är att investera i både din och din babys komfort och säkerhet."
        };
      }
      case "baby-health-concerns": {
        return {
          introduction: "Som förälder kan det vara svårt att veta när ett symptom är normalt och när det kräver medicinsk uppmärksamhet. Denna guide hjälper dig att navigera vanliga hälsoproblem hos bebisar.",
          keyPoints: [
            "När och hur man hanterar feber hos bebisar",
            "Identifiera varningssignaler för andningsbesvär",
            "Vanliga orsaker och lösningar för matningsproblem",
            "Olika typer av hudutslag och när man ska oroa sig"
          ],
          expertAdvice: "Dr. Emily Chen, barnläkare, betonar: 'Lita på din intuition som förälder. Om något känns fel, är det bättre att vara försiktig och söka vård.'",
          conclusion: "Att vara förberedd på vanliga hälsoproblem kan hjälpa dig att känna dig mer säker i din roll som förälder."
        };
      }
      case "baby-immune-system": {
        return {
          introduction: "Ett starkt immunförsvar är avgörande för din babys hälsa och utveckling. Lär dig hur du kan stödja din lillas naturliga försvarssystem.",
          keyPoints: [
            "Fördelar med amning för immunförsvaret",
            "Vikten av vaccinationer för skydd mot sjukdomar",
            "Balansera hygien och naturlig exponering",
            "Näringsrik kost för att bygga upp immunförsvaret"
          ],
          expertAdvice: "Dr. Lisa Martinez, immunolog, förklarar: 'Ett barns immunförsvar utvecklas gradvis under de första åren. Amning ger viktiga antikroppar och näringsämnen.'",
          conclusion: "Att stödja din babys immunförsvar är en kontinuerlig process som kombinerar vetenskapligt beprövade metoder med sunt förnuft."
        };
      }
      case "baby-nutrition-guide": {
        return {
          introduction: "En komplett guide till din babys näringsbehov från födseln till ettårsåldern, med fokus på amning och introduktion av fast mat.",
          keyPoints: [
            "Fördelar med amning och när man bör introducera fast mat",
            "Tecken på att din baby är redo för fast mat",
            "Säker introduktion av allergener",
            "Balanserad näring för optimal utveckling"
          ],
          expertAdvice: "Maria Svensson, barnnutritionist, rekommenderar: 'Introducera en ny mat i taget och vänta 3-5 dagar mellan varje ny mat för att upptäcka eventuella allergier.'",
          conclusion: "Varje barns näringsbehov är unika. Fokusera på att erbjuda en varierad och näringsrik kost som stödjer deras utveckling."
        };
      }
      case "baby-development-milestones": {
        return {
          introduction: "Följ din babys utveckling månad för månad och lär dig hur du kan stödja deras tillväxt och utveckling under det första året.",
          keyPoints: [
            "Motorisk utveckling: från huvudkontroll till första steg",
            "Språkutveckling: från gurglande till första ord",
            "Social och emotionell utveckling",
            "Kognitiv utveckling och lek"
          ],
          expertAdvice: "Dr. Sofia Berg, barnutvecklingsexpert, förklarar: 'Varje barn utvecklas i sin egen takt. Fokusera på att skapa en stimulerande och trygg miljö.'",
          conclusion: "Att förstå utvecklingsmilstolpar hjälper dig att stödja din babys tillväxt och upptäcka eventuella utmaningar i tid."
        };
      }
      case "baby-proofing-home": {
        return {
          introduction: "En omfattande guide till att göra ditt hem säkert för din nyfödda, med fokus på förebyggande åtgärder och säkerhetsprodukter.",
          keyPoints: [
            "Säkerhetskontroll i varje rum",
            "Viktiga säkerhetsprodukter för hemmet",
            "Hantering av eluttag och kablar",
            "Säkra möbler och lekområden"
          ],
          expertAdvice: "Emma Nilsson, säkerhetsexpert, betonar: 'Börja med att se ditt hem från din babys perspektiv. Allt som är inom räckhåll behöver säkras.'",
          conclusion: "Att göra ditt hem säkert är en kontinuerlig process som anpassas efter din babys utveckling och rörlighet."
        };
      }
      default: {
        return {
          introduction: "Detta inlägg är under uppbyggnad. Kom tillbaka snart för komplett innehåll.",
          keyPoints: [],
          expertAdvice: "",
          conclusion: ""
        };
      }
    }
  };

  const content = getPostContent(post.slug);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <article className="py-16">
          <div className="container mx-auto px-4">
            {/* Back to Blog Link */}
            <Link
              to="/blog"
              className="inline-flex items-center text-baby-pink hover:underline mb-8"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Tillbaka till bloggen
            </Link>

            {/* Post Header */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Category Badge */}
              <span className="bg-soft-pink text-baby-pink px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {post.title}
              </h1>

              {/* Metadata */}
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

            {/* Featured Image */}
            <div className="max-w-4xl mx-auto mt-8">
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Post Content */}
            <div className="max-w-4xl mx-auto mt-12 prose prose-lg max-w-none">
              {/* Introduction */}
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {content.introduction}
              </p>

              {/* Key Points */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Viktiga punkter</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {content.keyPoints.map((point, index) => (
                  <li key={index} className="text-lg">
                    {point}
                  </li>
                ))}
              </ul>

              {/* Expert Advice */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Expertisråd</h2>
              <blockquote className="border-l-4 border-baby-pink pl-6 text-gray-700 italic text-lg">
                {content.expertAdvice}
              </blockquote>

              {/* Conclusion */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sammanfattning</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {content.conclusion}
              </p>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPost; 