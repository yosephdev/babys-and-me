
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import BlogHighlights from "@/components/home/BlogHighlights";
import RetailerCategories from "@/components/home/RetailerCategories";
import DonationSection from "@/components/home/DonationSection";
import SubscriptionCTA from "@/components/home/SubscriptionCTA";
import OfficialPartners from "@/components/home/OfficialPartners";
import AxkidProducts from "@/components/home/AxkidProducts";
import BergProducts from "@/components/home/BergProducts";
import BabyworldProducts from "@/components/home/BabyworldProducts";
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
        <BabyworldProducts />
        <Testimonials />
        <RetailerCategories />
        <BlogHighlights />
        <DonationSection />
        <SubscriptionCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
