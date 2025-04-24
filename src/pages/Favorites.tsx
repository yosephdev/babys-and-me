import { Card } from "@/components/ui/card";
import { ProductCard } from "@/components/products/ProductCard";
import { Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Favorites() {
  const { favorites, loading } = useFavorites();
  const { user } = useAuth();
  const navigate = useNavigate();

  // If the user is not logged in, show a login prompt
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex-grow">
          <Card className="p-8 text-center">
            <h2 className="text-xl font-heading mb-2">Please Log In</h2>
            <p className="text-gray-600 mb-4">
              You need to be logged in to view your favorites.
            </p>
            <Button onClick={() => navigate('/login')}>
              Log In
            </Button>
          </Card>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
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
            <Button onClick={() => navigate('/products')}>
              Browse Products
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}