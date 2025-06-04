import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Star, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdtractionProduct } from "@/services/adtractionApi";
import { Product } from "@/data/products";
import { Database } from "@/integrations/supabase/types";
import { useFavorites } from "@/hooks/useFavorites";

type DatabaseProduct = Database['public']['Tables']['products']['Row'];

interface ProductCardProps {
  product: AdtractionProduct | Product | DatabaseProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const isProductFavorite = isFavorite(product.id);

  const isAdtractionProduct = (p: AdtractionProduct | Product | DatabaseProduct): p is AdtractionProduct => {
    return 'url' in p && 'advertiserId' in p;
  };

  const isDatabaseProduct = (p: AdtractionProduct | Product | DatabaseProduct): p is DatabaseProduct => {
    return 'affiliate_link' in p && 'image_url' in p;
  };

  const getProductImage = () => {
    if (isAdtractionProduct(product)) return product.imageUrl;
    if (isDatabaseProduct(product)) return product.image_url || 'https://placehold.co/400x400/soft-blue/white?text=Product';
    return (product as Product).image;
  };
  
  const getProductName = () => product.name;
  
  const getProductDescription = () => {
    if (isDatabaseProduct(product)) return product.description || '';
    return product.description;
  };
  
  const getProductPrice = () => {
    if (isAdtractionProduct(product)) return `Från ${product.price} ${product.currency}`;
    if (isDatabaseProduct(product)) return `Från ${product.price} ${product.currency || 'SEK'}`;
    return (product as Product).priceRange;
  };
  
  const getRetailer = () => {
    if (isAdtractionProduct(product)) return product.advertiserName;
    if (isDatabaseProduct(product)) return product.advertiser_name || 'Okänd återförsäljare';
    return (product as Product).retailer;
  };
  
  const getRetailerLogo = () => {
    if (isAdtractionProduct(product)) return product.advertiserLogoUrl;
    if (isDatabaseProduct(product)) return product.advertiser_logo_url || 'https://placehold.co/100/baby-pink/white?text=LOGO';
    return (product as Product).retailerLogo;
  };
  
  const getProductLink = () => {
    if (isAdtractionProduct(product)) return product.url;
    if (isDatabaseProduct(product)) return product.affiliate_link || '#';
    return (product as Product).link;
  };
  
  const getCommission = () => {
    let commission = '';
    if (isAdtractionProduct(product)) {
      commission = product.commission || '5';
    } else if (isDatabaseProduct(product)) {
      commission = product.commission || '5';
    } else {
      commission = (product as Product).commission;
    }
    
    // Handle special commission formats (like fixed amounts)
    if (commission.includes('SEK') || !isNaN(Number(commission))) {
      return commission.includes('%') ? commission : commission + '%';
    }
    
    return commission.replace('%', '') + '%';
  };
  
  const isBestSeller = () => {
    if (isAdtractionProduct(product)) return product.isBestSeller;
    if (isDatabaseProduct(product)) return product.is_best_seller;
    return (product as Product).isBestSeller;
  };
  
  const isEditorsPick = () => {
    if (isAdtractionProduct(product)) return product.isEditorsPick;
    if (isDatabaseProduct(product)) return product.is_editors_pick;
    return (product as Product).isEditorsPick;
  };
  
  const getRating = () => {
    if (isAdtractionProduct(product)) return product.rating;
    if (isDatabaseProduct(product)) return product.rating;
    return (product as Product).rating;
  };
  
  const getReviews = () => {
    if (isAdtractionProduct(product)) return product.reviews;
    if (isDatabaseProduct(product)) return product.reviews;
    return (product as Product).reviews;
  };

  return (
    <Card className="overflow-hidden card-hover border border-gray-100 h-full flex flex-col">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={getProductImage()} 
          alt={getProductName()} 
          className="object-cover w-full h-full transition-transform hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/400x400/soft-blue/white?text=Image+Error';
          }}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          onClick={(e) => {
            e.preventDefault();
            if (!isAdtractionProduct(product) && !isDatabaseProduct(product)) {
              toggleFavorite(product as Product);
            }
          }}
        >
          <Heart 
            className={`w-5 h-5 ${isProductFavorite ? 'fill-baby-pink text-baby-pink' : 'text-gray-600'}`}
          />
        </Button>
        {isBestSeller() && (
          <Badge className="absolute top-2 left-2 bg-baby-pink text-white">
            Bästsäljare
          </Badge>
        )}
        {isEditorsPick() && (
          <Badge className="absolute top-2 left-2 bg-baby-yellow text-foreground">
            Redaktörens val
          </Badge>
        )}
      </div>

      <CardContent className="p-4 flex-grow">
        <div className="flex items-start mb-2">
          <div className="w-10 h-10 rounded overflow-hidden mr-2 flex-shrink-0">
            <img 
              src={getRetailerLogo()} 
              alt={getRetailer()} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/100/baby-pink/white?text=LOGO';
              }}
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
                Detta pris tillhandahålls av {getRetailer()}. Klicka på "Köp nu" för att se det senaste priset och eventuella tillgängliga rabatter!
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
            onClick={() => {
              // Track click for analytics (could be expanded later)
              console.log(`Product click: ${getProductName()} from ${getRetailer()}`);
              // Could add more sophisticated tracking here
            }}
          >
            Köp nu <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};