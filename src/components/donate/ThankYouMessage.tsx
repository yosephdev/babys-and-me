
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const ThankYouMessage = ({
  success,
  onReset,
}: {
  success: boolean;
  onReset: () => void;
}) => {
  return (
    <div className="text-center py-8">
      <div
        className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${
          success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        <CheckCircle2 className="w-8 h-8" />
      </div>
      <h2 className="text-2xl font-bold mb-2">
        {success ? "Thank You!" : "Donation Canceled"}
      </h2>
      <p className="text-gray-600 mb-6">
        {success
          ? "Your donation was successful and is greatly appreciated. You make a real difference for families in need."
          : "Your donation did not go through. Feel free to try again or contact support if you need help."}
      </p>
      <Button className="btn-secondary" onClick={onReset}>
        {success ? "Make Another Donation" : "Try Again"}
      </Button>
    </div>
  );
};

export default ThankYouMessage;
