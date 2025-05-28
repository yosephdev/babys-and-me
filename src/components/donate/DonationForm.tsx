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
        toast.error("Kunde inte skapa betalningssession.");
      }
    } catch (err) {
      console.error('Betalningsfel:', err);
      toast.error("Ett fel uppstod vid behandling av din donation.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleDonationSubmit} data-testid="donation-form">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Gör ett bidrag</h2>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium">Välj belopp</label>
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
              {amount} kr
            </Button>
          ))}
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">kr</span>
          <Input
            type="number"
            placeholder="Ange eget belopp"
            className="pl-8"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value === "" ? "" : Number(e.target.value))}
            min="1"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-medium">Namn (Valfritt)</label>
        <Input
          type="text"
          placeholder="Ditt namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-medium">E-post</label>
        <Input
          type="email"
          placeholder="Din e-postadress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium">Meddelande (Valfritt)</label>
        <Input
          placeholder="Varför du donerar..."
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
          "Bearbetar..."
        ) : (
          <>
            <Heart className="mr-2 h-4 w-4" />
            Donera {donationAmount ? donationAmount : "0"} kr
          </>
        )}
      </Button>
    </form>
  );
};

export default DonationForm;
