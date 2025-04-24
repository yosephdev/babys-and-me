
import { Card } from "@/components/ui/card";
import { ProductCard } from "@/components/products/ProductCard";
import { Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

export default function Favorites() {
  const { favorites, loading } = useFavorites();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Heart className="w-6 h-6 text-baby-pink" />
        <h1 className="text-3xl font-heading font-bold">My Favorites</h1>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading your favorites...</div>
      ) : favorites.length === 0 ? (
        <Card className="p-8 text-center">
          <h2 className="text-xl font-heading mb-2">No favorites yet</h2>
          <p className="text-gray-600 mb-4">
            Start adding products to your favorites by clicking the heart icon on any product.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
