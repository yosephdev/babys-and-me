import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

// Simple localStorage-based favorites implementation
export const useFavorites = () => {
  const { user, isAuthenticated } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Load favorites from localStorage when user changes
  useEffect(() => {
    const loadFavorites = async () => {
      if (!user) {
        setFavorites([]);
        setFavoriteProducts([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Use localStorage instead of Firestore
        const savedFavorites = localStorage.getItem(`favorites_${user.uid}`);
        if (savedFavorites) {
          const parsedFavorites = JSON.parse(savedFavorites);
          setFavorites(parsedFavorites.productIds || []);
          setFavoriteProducts(parsedFavorites.products || []);
        } else {
          // Initialize empty favorites
          localStorage.setItem(`favorites_${user.uid}`, JSON.stringify({ 
            productIds: [], 
            products: [] 
          }));
          setFavorites([]);
          setFavoriteProducts([]);
        }
        setError(null);
      } catch (err) {
        console.error('Error loading favorites:', err);
        setError(err instanceof Error ? err : new Error('Failed to load favorites'));
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, [user]);

  const addFavorite = async (productId: string, productData: any) => {
    if (!user) {
      toast.error('Du måste logga in för att spara favoriter');
      return;
    }
    
    try {
      // Update local state
      setFavorites(prev => [...prev, productId]);
      setFavoriteProducts(prev => [...prev, productData]);
      
      // Save to localStorage
      localStorage.setItem(`favorites_${user.uid}`, JSON.stringify({
        productIds: [...favorites, productId],
        products: [...favoriteProducts, productData]
      }));
      
    } catch (err) {
      console.error('Error adding favorite:', err);
      setError(err instanceof Error ? err : new Error('Failed to add favorite'));
    }
  };

  const removeFavorite = async (productId: string) => {
    if (!user) return;
    
    try {
      // Update local state
      setFavorites(prev => prev.filter(id => id !== productId));
      setFavoriteProducts(prev => prev.filter(product => product.id !== productId));
      
      // Save to localStorage
      localStorage.setItem(`favorites_${user.uid}`, JSON.stringify({
        productIds: favorites.filter(id => id !== productId),
        products: favoriteProducts.filter(product => product.id !== productId)
      }));
      
    } catch (err) {
      console.error('Error removing favorite:', err);
      setError(err instanceof Error ? err : new Error('Failed to remove favorite'));
    }
  };

  const isFavorite = (productId: string) => {
    return favorites.includes(productId);
  };

  return {
    favorites,
    favoriteProducts,
    loading,
    error,
    addFavorite,
    removeFavorite,
    isFavorite,
    isAuthenticated
  };
};