import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const shareOnSocial = (platform: string) => {
  const url = encodeURIComponent(window.location.origin);
  const text = encodeURIComponent(
    "Stöd Baby's & Me - hjälper familjer hitta prisvärda babyprodukter!"
  );

  let shareUrl = "";
  switch (platform) {
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      window.open(shareUrl, "_blank", "width=600,height=400");
      break;
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
      window.open(shareUrl, "_blank", "width=600,height=400");
      break;
    case "instagram":
      toast.info("Kopiera sidlänken för att dela på Instagram");
      navigator.clipboard.writeText(window.location.origin);
      break;
    default:
      break;
  }
};

const OtherWaysToSupport = () => {
  return (
    <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Andra sätt att stödja</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-heading font-bold text-xl mb-2">Dela vårt uppdrag</h3>
          <p className="text-gray-600 mb-4">
            Hjälp oss sprida ordet genom att dela vår webbplats med vänner och familj som kan dra nytta av våra resurser.
          </p>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => shareOnSocial("facebook")}
              className="flex items-center gap-2"
            >
              <Facebook size={16} className="text-blue-600" />
              Facebook
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => shareOnSocial("twitter")}
              className="flex items-center gap-2"
            >
              <Twitter size={16} className="text-blue-400" />
              Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => shareOnSocial("instagram")}
              className="flex items-center gap-2"
            >
              <Instagram size={16} className="text-pink-500" />
              Instagram
            </Button>
          </div>
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl mb-2">Handla via våra länkar</h3>
          <p className="text-gray-600 mb-4">
            När du handlar via våra affiliate-länkar tjänar vi en liten provision som hjälper till att stödja vårt arbete.
          </p>
          <Link to="/products">
            <Button className="bg-baby-blue text-white hover:bg-opacity-90">
              Bläddra bland produkter
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherWaysToSupport;
