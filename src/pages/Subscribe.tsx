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
      const response = await fetch('/api/prenumeration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      });
      if (!response.ok) throw new Error('Kunde inte prenumerera');

      toast.success('Du har nu prenumererat på vårt nyhetsbrev!');
      setEmail('');
      setName('');
      navigate('/');
    } catch (error: unknown) {
      console.error('Fel vid prenumeration:', error);
      const errorMessage = error instanceof Error ? error.message : 'Kunde inte prenumerera. Vänligen försök igen.';
      toast.error(errorMessage);
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
              <h1 className="text-3xl font-bold mb-4">Prenumerera på vårt nyhetsbrev</h1>
              <p className="text-gray-600 mb-8">
                Håll dig uppdaterad med de senaste babyprodukterna, tips och exklusiva erbjudanden.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ditt namn
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ange ditt namn"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-postadress
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="din.epost@exempel.se"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="h-4 w-4 text-baby-pink focus:ring-baby-pink border-gray-300 rounded"
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                  Jag godkänner att få e-postuppdateringar från Baby's & Me
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-baby-pink text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Prenumererar...' : 'Prenumerera nu'}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p>Du kan avprenumerera när som helst.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subscribe; 