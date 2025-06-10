import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { bergProducts } from '@/data/products';

interface SeedDatabaseProps {
  onSeedComplete?: () => void;
}

const SeedDatabase: React.FC<SeedDatabaseProps> = ({ onSeedComplete }) => {
  const [loading, setLoading] = useState(false);

  const seedProducts = async () => {
    setLoading(true);
    try {
      // Use the API endpoint to seed the database
      const response = await fetch('/api/products/seed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ products: bergProducts })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to seed database');
      }

      const data = await response.json();
      toast.success(`Successfully added ${data.count} products to the database`);
      
      // Call the callback to refresh data
      if (onSeedComplete) {
        onSeedComplete();
      }
    } catch (error) {
      console.error('Error seeding database:', error);
      toast.error('Failed to seed database: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Database Management</h2>
      <p className="mb-4 text-gray-600">
        Seed the database with BERG product data. This is useful for testing.
      </p>
      <Button 
        onClick={seedProducts} 
        disabled={loading}
        className="bg-baby-pink hover:bg-pink-600"
      >
        {loading ? 'Seeding Database...' : 'Seed Database with Products'}
      </Button>
    </div>
  );
};

export default SeedDatabase;