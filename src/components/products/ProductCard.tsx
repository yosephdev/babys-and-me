
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden card-hover border border-gray-100 h-full flex flex-col">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        {product.isBestSeller && (
          <Badge className="absolute top-2 left-2 bg-baby-pink text-white">
            Best Seller
          </Badge>
        )}
        {product.isEditorsPick && (
          <Badge className="absolute top-2 left-2 bg-baby-yellow text-foreground">
            Editor's Pick
          </Badge>
        )}
        <div className="absolute top-2 right-2 bg-white text-baby-blue text-xs font-medium px-2 py-1 rounded-full shadow-sm">
          {product.commission} commission
        </div>
      </div>

      <CardContent className="p-4 flex-grow">
        <div className="flex items-start mb-2">
          <div className="w-10 h-10 rounded overflow-hidden mr-2 flex-shrink-0">
            <img 
              src={product.retailerLogo} 
              alt={product.retailer} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground">{product.name}</h3>
            <p className="text-xs text-baby-blue">{product.retailer}</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{product.description}</p>
        
        {product.rating && (
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < product.rating ? "fill-baby-yellow text-baby-yellow" : "text-gray-300"}`} 
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">({product.reviews || 0})</span>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex items-center justify-between p-4 pt-0 border-t border-gray-100 mt-auto">
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="font-bold text-lg">{product.priceRange}</span>
          </HoverCardTrigger>
          <HoverCardContent className="w-52">
            <div className="space-y-1">
              <p className="text-sm">
                This price is provided by {product.retailer}. Click "Buy Now" to see the latest price and any available discounts!
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        
        <Button
          asChild
          className="bg-baby-blue hover:bg-baby-blue/90 text-white"
        >
          <a 
            href={product.link} 
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
