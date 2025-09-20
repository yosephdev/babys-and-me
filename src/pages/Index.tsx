
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import BlogHighlights from "@/components/home/BlogHighlights";
import RetailerCategories from "@/components/home/RetailerCategories";
import SubscriptionCTA from "@/components/home/SubscriptionCTA";
import OfficialPartners from "@/components/home/OfficialPartners";
import AxkidProducts from "@/components/home/AxkidProducts";
import BergProducts from "@/components/home/BergProducts";
import KidsConceptProducts from "@/components/home/KidsConceptProducts";
import PolarnProducts from "@/components/home/PolarnProducts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <OfficialPartners />
        <PolarnProducts />
        <AxkidProducts />
        <BergProducts />
        <KidsConceptProducts />
        <Testimonials />
        <RetailerCategories />
        <BlogHighlights />
        <SubscriptionCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
