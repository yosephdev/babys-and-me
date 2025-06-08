import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronLeft, User, Clock, Heart } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

type BlogPostContent = {
  introduction: string;
  keyPoints: string[];
  expertAdvice: string;
  conclusion: string;
  recommendedProducts?: string[];
};

function getPostContent(slug: string): BlogPostContent {
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

  // Use post.content if available, otherwise fall back to getPostContent
  const content = post.content || getPostContent(post.slug);

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
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder.svg";
                  }}
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
              
              {content.recommendedProducts && (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Rekommenderade produkter</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {content.recommendedProducts.map((product: string, index: number) => (
                      <li key={index} className="text-lg">
                        {product}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;