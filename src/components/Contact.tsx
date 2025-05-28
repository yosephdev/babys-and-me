import React from 'react';

const Contact = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Kontakta oss</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Kundsupport</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Har du en fråga, problem eller förslag? Vi skulle gärna höra från dig.
                  Vårt kundserviceteam svarar vanligtvis inom 24 timmar.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Kontaktperson</p>
                  <p className="mt-1">Yoseph Gebremedhin</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Support e-post</p>
                  <p className="mt-1">
                    <a href="mailto:support@babysme.com" className="text-blue-600 hover:underline">
                      support@babysme.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Telefon</p>
                  <p className="mt-1">+46 70-356 61 08</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Land</p>
                  <p className="mt-1">Sverige</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium text-gray-500">Postadress</p>
                  <p className="mt-1">Baby's & Me</p>
                  <p>Jungfrugatan 1F</p>
                  <p>641 31 Katrineholm, Sverige</p>
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