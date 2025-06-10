import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { useAuth } from '@/contexts/AuthContext';
import ProductCard from '@/components/products/ProductCard';

const Favorites: React.FC = () => {
    const { favoriteProducts, loading, error } = useFavorites();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center p-8 max-w-md mx-auto">
                        <Heart className="w-16 h-16 text-baby-pink mx-auto mb-6" />
                        <h1 className="text-3xl font-bold mb-4">Vänligen logga in</h1>
                        <p className="text-gray-600 mb-8">
                            Logga in för att se och hantera dina favoriter.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => navigate('/logga-in')}
                                className="bg-baby-pink hover:bg-pink-600"
                            >
                                Logga in
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => navigate('/registrera')}
                            >
                                Skapa konto
                            </Button>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-2">Mina favoriter</h1>
                <p className="text-gray-600 mb-8">
                    Här hittar du alla produkter du har sparat som favoriter.
                </p>

                {loading ? (
                    <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-baby-pink"></div>
                    </div>
                ) : error ? (
                    <div className="text-center py-12">
                        <p className="text-red-500">Ett fel uppstod när dina favoriter skulle hämtas. Försök igen senare.</p>
                    </div>
                ) : favoriteProducts.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                        <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Inga favoriter ännu</h2>
                        <p className="text-gray-600 mb-6">
                            Du har inte lagt till några produkter i dina favoriter ännu.
                        </p>
                        <Button
                            onClick={() => navigate('/produkter')}
                            className="bg-baby-pink hover:bg-pink-600"
                        >
                            Utforska produkter
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {favoriteProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Favorites;