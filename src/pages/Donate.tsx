import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Progress } from "@/components/ui/progress";
import { Heart, CheckCircle2 } from "lucide-react";
import DonationForm from "@/components/donate/DonationForm";
import ThankYouMessage from "@/components/donate/ThankYouMessage";
import OtherWaysToSupport from "@/components/donate/OtherWaysToSupport";

const Donate = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [canceled, setCanceled] = useState(false);

  // Extract query params
  const queryParams = useMemo(() => {
    return typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  }, []);

  useEffect(() => {
    setSuccess(queryParams?.get("success") === "1");
    setCanceled(queryParams?.get("canceled") === "1");
  }, [queryParams]);

  // Redirect after showing message
  useEffect(() => {
    if (success || canceled) {
      const timer = setTimeout(() => {
        navigate("/donate", { replace: true });
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [success, canceled, navigate]);

  const goal = 5000;
  const raised = 3750;
  const progressValue = (raised / goal) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-soft py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="w-16 h-16 mx-auto mb-4 text-baby-pink animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Stöd vår mission
              </h1>
              <p className="text-xl text-gray-600">
                Hjälp oss fortsätta att hitta och recensera de bästa prisvärda babyprodukterna
              </p>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Progress Bar */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Vårt mål: {goal} kr</h2>
                    <p className="text-gray-600">Insamlat: {raised} kr</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-baby-pink">{Math.round(progressValue)}%</p>
                    <p className="text-gray-600">av målet uppnått</p>
                  </div>
                </div>
                <Progress value={progressValue} className="h-2" />
              </div>

              {/* Donation Form */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-soft p-6">
                  <h2 className="text-2xl font-bold mb-2">Gör ett bidrag</h2>
                  <p className="text-gray-600">
                    Ditt stöd hjälper oss att fortsätta vårt arbete med att hitta och recensera de bästa prisvärda babyprodukterna.
                  </p>
                </div>

                {/* Left: Info + Progress */}
                <div className="bg-gradient-pink text-white p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Varför donera?</h2>
                  <p className="mb-6 text-white/90">
                    Dina donationer stödjer direkt vår mission att hjälpa föräldrar världen över att hitta prisvärda,
                    högkvalitativa produkter för sina barn.
                  </p>
                  <h3 className="font-bold text-xl mb-3">Ditt bidrag hjälper oss att:</h3>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Forska och testa fler babyprodukter",
                      "Skapa hjälpsamma guider och resurser för föräldrar",
                      "Stödja program för familjer med låg inkomst",
                      "Underhålla och förbättra vår webbplats",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">Framsteg mot mål</span>
                      <span>{raised.toLocaleString()} kr av {goal.toLocaleString()} kr</span>
                    </div>
                    <Progress value={progressValue} className="h-3 bg-white/30" />
                  </div>
                </div>

                {/* Right: Form or Thank You */}
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

              {/* Additional Info */}
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
