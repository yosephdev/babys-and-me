import React from 'react';

const Contact = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Get in Touch</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Customer Support</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Have a question, issue, or suggestion? We'd love to hear from you.
                  Our customer service team typically responds within 24 hours.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Contact Name</p>
                  <p className="mt-1">Yoseph Gebremedhin</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Support Email</p>
                  <p className="mt-1">
                    <a href="mailto:support@babysme.com" className="text-blue-600 hover:underline">
                      support@babysme.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="mt-1">+46 70-356 61 08</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Country</p>
                  <p className="mt-1">Sweden</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium text-gray-500">Mailing Address</p>
                  <p className="mt-1">Baby’s & Me</p>
                  <p>Jungfrugatan 1F</p>
                  <p>641 31 Katrineholm, Sweden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
