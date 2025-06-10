import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/useFavorites';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface Product {
  id: string | number;
  name: string;
  description: string;
  price?: number;
  priceRange?: string;
  imageUrl?: string;
  image?: string;
  category?: string;
  brand?: string;
  retailer?: string;
  retailerLogo?: string;
  advertiserName?: string;
  link?: string;
  url?: string;
  trackingUrl?: string;
  affiliateLink?: string;
  commission?: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      toast.error('Du måste logga in för att spara favoriter');
      navigate('/logga-in');
      return;
    }
    
    if (isFavorite(product.id.toString())) {
      removeFavorite(product.id.toString());
      toast.success('Borttagen från favoriter');
    } else {
      addFavorite(product.id.toString(), product);
      toast.success('Tillagd i favoriter');
    }
  };
  
  const handleProductClick = () => {
    // Check all possible link properties
    const url = product.url || product.link || product.trackingUrl || product.affiliateLink;
    if (url) {
      window.open(url, '_blank');
    } else {
      toast.error('Produktlänk saknas');
    }
  };
  
  const isFav = isFavorite(product.id.toString());
  const imageUrl = product.imageUrl || product.image || 'https://via.placeholder.com/300x300?text=Produktbild';
  const price = product.price || (product.priceRange ? product.priceRange : '0 kr');
  const brandName = product.brand || product.retailer || product.advertiserName || '';
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="relative cursor-pointer" onClick={handleProductClick}>
        <img 
          src={imageUrl} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleFavoriteClick();
          }}
          className={`absolute top-4 right-4 p-2 rounded-full ${
            isFav ? 'bg-baby-pink text-white' : 'bg-white text-gray-400'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFav ? 'fill-current' : ''}`} />
        </button>
        
        {product.retailerLogo && (
          <div className="absolute bottom-4 right-4 bg-white p-1 rounded-md">
            <img 
              src={product.retailerLogo} 
              alt={product.retailer || ''} 
              className="h-6 w-auto"
            />
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        {brandName && (
          <span className="text-sm text-gray-500 mb-1">{brandName}</span>
        )}
        <h3 
          className="font-bold text-lg mb-2 line-clamp-2 cursor-pointer hover:text-baby-pink" 
          onClick={handleProductClick}
        >
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
        
        <div className="mt-auto flex justify-between items-center">
          <span className="font-bold text-xl">{typeof price === 'number' ? `${price} kr` : price}</span>
          <Button 
            className="bg-baby-pink hover:bg-pink-600"
            onClick={handleProductClick}
          >
            Visa produkt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;