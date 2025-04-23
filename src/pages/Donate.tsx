
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Heart, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState<number | "">("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = [10, 25, 50, 100];

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Optional: send JWT for authenticated user if we implement auth
          // Authorization: `Bearer ${localStorage.getItem("supabase.auth.token")}`,
        },
        body: JSON.stringify({
          amount: donationAmount,
          name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error("Could not create Stripe Checkout session.");
      }
    } catch (err) {
      toast.error("An error occurred launching the payment.");
    } finally {
      setSubmitting(false);
    }
  };

  // Detect success/canceled in query params for post-payment feedback
  // eslint-disable-next-line
  const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const success = urlParams?.get("success") === "1";
  const canceled = urlParams?.get("canceled") === "1";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-soft py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="w-16 h-16 mx-auto mb-4 text-baby-pink animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h1>
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
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Donate?</h2>
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
                    {(success || canceled) ? (
                      <div className="text-center py-8">
                        <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{success ? "Thank You!" : "Donation Canceled"}</h2>
                        <p className="text-gray-600 mb-6">
                          {success
                            ? "Your donation was successful and is greatly appreciated. You make a real difference for families in need."
                            : "Your donation did not go through. Feel free to try again or contact support if you need help."
                          }
                        </p>
                        <Button 
                          className="btn-secondary"
                          onClick={() => (window.location.href = "/donate")}
                        >
                          {success ? "Make Another Donation" : "Try Again"}
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleDonationSubmit}>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Make a Donation</h2>
                        <div className="mb-6">
                          <label className="block text-gray-700 mb-2 font-medium">Choose an amount</label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                            {presetAmounts.map((amount) => (
                              <Button
                                key={amount}
                                type="button"
                                variant="outline"
                                className={`${
                                  donationAmount === amount
                                    ? "border-baby-pink bg-soft-pink text-baby-pink"
                                    : "border-gray-200"
                                }`}
                                onClick={() => setDonationAmount(amount)}
                              >
                                ${amount}
                              </Button>
                            ))}
                          </div>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                            <Input
                              type="number"
                              placeholder="Enter custom amount"
                              className="pl-8"
                              value={donationAmount}
                              onChange={(e) => setDonationAmount(e.target.value === "" ? "" : Number(e.target.value))}
                              min="1"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2 font-medium">Name</label>
                          <Input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="name"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2 font-medium">Email</label>
                          <Input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                          />
                        </div>
                        <div className="mb-6">
                          <label className="block text-gray-700 mb-2 font-medium">Message (optional)</label>
                          <Input
                            placeholder="Why you're donating..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                        <Button
                          type="submit"
                          className="btn-primary w-full"
                          disabled={!donationAmount || Number(donationAmount) <= 0 || submitting}
                        >
                          {submitting ? "Processing..." : `Donate $${donationAmount ? donationAmount : "0"}`}
                        </Button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4">Other Ways to Support</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">Share Our Mission</h3>
                    <p className="text-gray-600 mb-4">
                      Help spread the word by sharing our website with friends and family who might benefit from our resources.
                    </p>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm">Facebook</Button>
                      <Button variant="outline" size="sm">Twitter</Button>
                      <Button variant="outline" size="sm">Instagram</Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">Shop Through Our Links</h3>
                    <p className="text-gray-600 mb-4">
                      When you shop using our affiliate links, we earn a small commission that helps support our work.
                    </p>
                    <Button className="bg-baby-blue text-white hover:bg-opacity-90">Browse Products</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;

// NOTE: This page is growing large (217+ lines). Consider breaking it into subcomponents if more changes are needed.
