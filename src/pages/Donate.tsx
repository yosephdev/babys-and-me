
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Progress } from "@/components/ui/progress";
import { Heart, CheckCircle2 } from "lucide-react";
import DonationForm from "@/components/donate/DonationForm";
import ThankYouMessage from "@/components/donate/ThankYouMessage";
import OtherWaysToSupport from "@/components/donate/OtherWaysToSupport";

const Donate = () => {
  const [success, setSuccess] = useState(false);
  const [canceled, setCanceled] = useState(false);

  const navigate = useNavigate();

  // Detect success/canceled in query params for post-payment feedback
  useEffect(() => {
    const urlParams =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : null;
    setSuccess(urlParams?.get("success") === "1");
    setCanceled(urlParams?.get("canceled") === "1");
  }, []);

  // Clear URL parameters after displaying success/cancel message
  useEffect(() => {
    if (success || canceled) {
      const timer = setTimeout(() => {
        navigate("/donate", { replace: true });
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [success, canceled, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-soft py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="w-16 h-16 mx-auto mb-4 text-baby-pink animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Support Our Mission
              </h1>
              <p className="text-xl text-gray-600">
                Help us continue finding and reviewing the best affordable baby products
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-gradient-pink text-white p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Why Donate?
                    </h2>
                    <p className="mb-6 text-white/90">
                      Your donations directly support our mission to help parents worldwide find affordable,
                      high-quality products for their babies.
                    </p>
                    <h3 className="font-bold text-xl mb-3">Your contribution helps us:</h3>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Research and test more baby products</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Create helpful parenting guides and resources</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Support programs for low-income families</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Maintain and improve our website</span>
                      </li>
                    </ul>
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">Progress to Goal</span>
                        <span>$3,750 of $5,000</span>
                      </div>
                      <Progress value={75} className="h-3 bg-white/30" />
                    </div>
                  </div>

                  <div className="p-8 md:p-12">
                    {success || canceled ? (
                      <ThankYouMessage
                        success={success}
                        onReset={() => window.location.href = "/donate"}
                      />
                    ) : (
                      <DonationForm />
                    )}
                  </div>
                </div>
              </div>
              <OtherWaysToSupport />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
