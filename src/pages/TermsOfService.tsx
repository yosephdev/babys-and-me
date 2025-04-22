import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-heading font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using Baby's & Me website, you accept and agree to be bound by the terms and conditions of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Baby's & Me website for personal, non-commercial transitory viewing only.
              </p>
              <p className="mb-4">
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">3. User Account</h2>
              <p className="mb-4">
                To access certain features of the website, you may be required to create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Maintaining the confidentiality of your account information</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">4. Product Information</h2>
              <p className="mb-4">
                We strive to display our products as accurately as possible. However, we do not guarantee that your screen's display of any color will be accurate.
              </p>
              <p className="mb-4">
                We reserve the right to limit the sales of our products to any person, geographic region, or jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Pricing and Payment</h2>
              <p className="mb-4">
                All prices are subject to change without notice. We reserve the right to modify or discontinue any product without notice.
              </p>
              <p className="mb-4">
                Payment must be made in full at the time of purchase. We accept various payment methods as indicated during checkout.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Shipping and Returns</h2>
              <p className="mb-4">
                Shipping times and costs are estimates and may vary. We are not responsible for delays beyond our control.
              </p>
              <p className="mb-4">
                Our return policy is available on our website and may be updated from time to time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">7. Contact Information</h2>
              <p className="mb-4">
                Questions about the Terms of Service should be sent to us at:
              </p>
              <p className="mb-4">
                Email: legal@babysandme.com<br />                
              </p>
            </section>

            <section>
              <p className="text-sm text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
