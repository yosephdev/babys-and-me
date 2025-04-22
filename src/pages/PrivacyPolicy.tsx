import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-heading font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information that you provide directly to us, including when you:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Create an account</li>
                <li>Make a purchase</li>
                <li>Sign up for our newsletter</li>
                <li>Contact our customer service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Process your orders and payments</li>
                <li>Send you order confirmations and updates</li>
                <li>Provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers who assist in our operations</li>
                <li>Payment processors</li>
                <li>Shipping partners</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">4. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-4">
                Email: privacy@babysandme.com<br />               
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

export default PrivacyPolicy;
