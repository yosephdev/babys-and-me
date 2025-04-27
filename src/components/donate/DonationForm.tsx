
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Heart } from "lucide-react";


type DonationFormProps = {
  presetAmounts?: number[];
};

const defaultPresetAmounts = [10, 25, 50, 100];

const DonationForm = ({
  presetAmounts = defaultPresetAmounts,
}: DonationFormProps) => {
  const [donationAmount, setDonationAmount] = useState<number | "">("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: donationAmount,
          name,
          email,
          message
        })
      });
      const data = await response.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        toast.error("Could not create payment session.");
      }
    } catch (err) {
      console.error('Payment error:', err);
      toast.error("An error occurred while processing your donation.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleDonationSubmit} data-testid="donation-form">
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
        <label className="block text-gray-700 mb-2 font-medium">Name (Optional)</label>
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
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium">Message (Optional)</label>
        <Input
          placeholder="Why you're donating..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-baby-pink hover:bg-baby-pink/90 text-white"
        disabled={!donationAmount || Number(donationAmount) <= 0 || submitting}
      >
        {submitting ? (
          "Processing..."
        ) : (
          <>
            <Heart className="mr-2 h-4 w-4" />
            Donate ${donationAmount ? donationAmount : "0"}
          </>
        )}
      </Button>
    </form>
  );
};

export default DonationForm;
