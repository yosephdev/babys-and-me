
import { useState, useEffect } from 'react';
import { Product } from '@/data/products';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      loadFavorites();
    } else {
      setFavorites([]);
      setLoading(false);
    }
  }, [user]);

  const loadFavorites = async () => {
    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('product_id');

      if (error) throw error;

      const products = data?.map(fav => {
        return JSON.parse(fav.product_id) as Product;
      }) || [];

      setFavorites(products);
      setLoading(false);
    } catch (error) {
      console.error('Error loading favorites:', error);
      toast.error('Failed to load favorites');
      setLoading(false);
    }
  };

  const toggleFavorite = async (product: Product) => {
    if (!user) {
      toast.error('Please log in to save favorites');
      return;
    }

    try {
      const productString = JSON.stringify(product);
      const exists = favorites.some((p) => p.id === product.id);
      
      if (exists) {
        const { error } = await supabase
          .from('favorites')
          .delete()
          .eq('product_id', productString);

        if (error) throw error;
        
        setFavorites(current => current.filter(p => p.id !== product.id));
        toast.success('Removed from favorites');
      } else {
        const { error } = await supabase
          .from('favorites')
          .insert([{ product_id: productString }]);

        if (error) throw error;

        setFavorites(current => [...current, product]);
        toast.success('Added to favorites');
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
      toast.error('Failed to update favorites');
    }
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
