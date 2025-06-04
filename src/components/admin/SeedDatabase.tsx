
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";


export const SeedDatabase = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSeed = async () => {
    try {
      setIsLoading(true);
      setMessage(null);

      // Call your backend API endpoint to seed Neon database
      const response = await fetch("/api/seed-products");
      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        setMessage(data.message);
      } else {
        toast.error(data.message);
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error seeding database:", error);
      toast.error("Failed to seed database. See console for details.");
      setMessage("Failed to seed database. See console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  // Count existing products
  const checkProductCount = async () => {
    try {
      const response = await fetch('/api/products/count');
      const data = await response.json();
      if (data.count && data.count > 0) {
        setMessage(`Database already has ${data.count} products.`);
      } else {
        setMessage('Database has no products. You can seed it now.');
      }
    } catch (error) {
      console.error("Error checking products:", error);
      setMessage('Error checking product count.');
    }
  };

  // Check product count on mount
  useState(() => {
    checkProductCount();
  });

  // (Removed all references to supabase, now using Neon/pg client only)

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-bold mb-2">Seed Database</h3>
      <p className="text-gray-600 mb-4">
        Populate your database with sample product data. This is useful for testing.
      </p>
      
      {message && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
          {message}
        </div>
      )}
      
      <div className="flex space-x-4">
        <Button onClick={handleSeed} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Seeding...
            </>
          ) : 'Seed Database'}
        </Button>
        
        <Button variant="outline" onClick={checkProductCount} disabled={isLoading}>
          Check Products
        </Button>
      </div>
    </div>
  );
};

export default SeedDatabase;
