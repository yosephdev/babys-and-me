import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Add subscriber to the database
      const { error } = await supabase
        .from('subscribers')
        .insert([
          {
            email,
            name,
            subscribed_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
      setName('');
      navigate('/');
    } catch (error: any) {
      console.error('Error subscribing:', error);
      toast.error(error.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h1>
              <p className="text-gray-600">
                Stay updated with the latest baby products, tips, and exclusive offers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Subscribe Now
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p>By subscribing, you agree to receive our newsletter and marketing emails.</p>
              <p className="mt-2">You can unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subscribe; 