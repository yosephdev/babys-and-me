
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const shareOnSocial = (platform: string) => {
  const url = encodeURIComponent(window.location.origin);
  const text = encodeURIComponent(
    "Support Baby's & Me - helping families find affordable baby products!"
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
      toast.info("Copy the page link to share on Instagram");
      navigator.clipboard.writeText(window.location.origin);
      break;
    default:
      break;
  }
};

const OtherWaysToSupport = () => {
  return (
    <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Other Ways to Support</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-heading font-bold text-xl mb-2">Share Our Mission</h3>
          <p className="text-gray-600 mb-4">
            Help spread the word by sharing our website with friends and family who might benefit from our resources.
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
          <h3 className="font-heading font-bold text-xl mb-2">Shop Through Our Links</h3>
          <p className="text-gray-600 mb-4">
            When you shop using our affiliate links, we earn a small commission that helps support our work.
          </p>
          <Link to="/products">
            <Button className="bg-baby-blue text-white hover:bg-opacity-90">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherWaysToSupport;
