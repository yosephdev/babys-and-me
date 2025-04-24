
import { useState, useEffect } from 'react';
import { Product } from '@/data/products';
import { DatabaseProduct } from '@/services/adtractionApi';

type FavoriteProduct = Product | DatabaseProduct;

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load favorites from localStorage on mount
    const loadFavorites = () => {
      const stored = localStorage.getItem('favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
      setLoading(false);
    };

    loadFavorites();
  }, []);

  const toggleFavorite = (product: FavoriteProduct) => {
    setFavorites((current) => {
      const exists = current.some((p) => p.id === product.id);
      let newFavorites;
      
      if (exists) {
        newFavorites = current.filter((p) => p.id !== product.id);
      } else {
        newFavorites = [...current, product];
      }
      
      // Save to localStorage
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (productId: string | number) => {
    return favorites.some((p) => p.id === productId);
  };

  return {
    favorites,
    loading,
    toggleFavorite,
    isFavorite
  };
};
