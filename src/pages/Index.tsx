
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import BlogHighlights from "@/components/home/BlogHighlights";
import RetailerCategories from "@/components/home/RetailerCategories";
import DonationSection from "@/components/home/DonationSection";
import SubscriptionCTA from "@/components/home/SubscriptionCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
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
