import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterForm from '@/components/NewsletterForm';

const Subscribe = () => {
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

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <NewsletterForm 
                buttonText="Prenumerera nu"
                className="space-y-6"
              />
              
              <div className="mt-8 text-center text-sm text-gray-600">
                <p>Du kan avprenumerera när som helst.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subscribe;