
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdtractionProduct } from "@/services/adtractionApi";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product | AdtractionProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  // Helper function to determine if the product is from Adtraction API
  const isAdtractionProduct = (product: any): product is AdtractionProduct => {
    return 'advertiserId' in product;
  };

  // Get properties based on product type
  const getProductImage = () => isAdtractionProduct(product) ? product.imageUrl : product.image;
  const getProductName = () => product.name;
  const getProductDescription = () => product.description;
  const getProductPrice = () => isAdtractionProduct(product) 
    ? `Starting at ${product.price} ${product.currency}`
    : product.priceRange;
  const getRetailer = () => isAdtractionProduct(product) ? product.advertiserName : product.retailer;
  const getRetailerLogo = () => isAdtractionProduct(product) ? product.advertiserLogoUrl : product.retailerLogo;
  const getProductLink = () => isAdtractionProduct(product) ? product.url : product.link;
  const getCommission = () => isAdtractionProduct(product) ? product.commission : product.commission;
  const isBestSeller = () => isAdtractionProduct(product) ? product.isBestSeller : product.isBestSeller;
  const isEditorsPick = () => isAdtractionProduct(product) ? product.isEditorsPick : product.isEditorsPick;
  const getRating = () => isAdtractionProduct(product) ? product.rating : product.rating;
  const getReviews = () => isAdtractionProduct(product) ? product.reviews : product.reviews;

  return (
    <Card className="overflow-hidden card-hover border border-gray-100 h-full flex flex-col">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={getProductImage()} 
          alt={getProductName()} 
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        {isBestSeller() && (
          <Badge className="absolute top-2 left-2 bg-baby-pink text-white">
            Best Seller
          </Badge>
        )}
        {isEditorsPick() && (
          <Badge className="absolute top-2 left-2 bg-baby-yellow text-foreground">
            Editor's Pick
          </Badge>
        )}
        <div className="absolute top-2 right-2 bg-white text-baby-blue text-xs font-medium px-2 py-1 rounded-full shadow-sm">
          {getCommission()} commission
        </div>
      </div>

      <CardContent className="p-4 flex-grow">
        <div className="flex items-start mb-2">
          <div className="w-10 h-10 rounded overflow-hidden mr-2 flex-shrink-0">
            <img 
              src={getRetailerLogo()} 
              alt={getRetailer()} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground">{getProductName()}</h3>
            <p className="text-xs text-baby-blue">{getRetailer()}</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{getProductDescription()}</p>
        
        {getRating() && (
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < (getRating() || 0) ? "fill-baby-yellow text-baby-yellow" : "text-gray-300"}`} 
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">({getReviews() || 0})</span>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex items-center justify-between p-4 pt-0 border-t border-gray-100 mt-auto">
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="font-bold text-lg">{getProductPrice()}</span>
          </HoverCardTrigger>
          <HoverCardContent className="w-52">
            <div className="space-y-1">
              <p className="text-sm">
                This price is provided by {getRetailer()}. Click "Buy Now" to see the latest price and any available discounts!
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        
        <Button
          asChild
          className="bg-baby-blue hover:bg-baby-blue/90 text-white"
        >
          <a 
            href={getProductLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center"
          >
            Buy Now <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
