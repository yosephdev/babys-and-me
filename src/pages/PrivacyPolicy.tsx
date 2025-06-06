import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-3xl font-heading font-bold mb-8">Integritetspolicy</h1>

                    <div className="prose max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-heading font-semibold mb-4">1. Information vi samlar in</h2>
                            <p className="mb-4">
                                Vi samlar in information när du:
                            </p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Skapar ett konto</li>
                                <li>Prenumererar på vårt nyhetsbrev</li>
                                <li>Kontaktar vår kundtjänst</li>
                                <li>Gör ett köp</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-heading font-semibold mb-4">2. Hur vi använder din information</h2>
                            <p className="mb-4">
                                Vi använder den information vi samlar in för att:
                            </p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Förbättra vår webbplats</li>
                                <li>Ge kundservice</li>
                                <li>Skicka e-postuppdateringar</li>
                                <li>Hantera transaktioner</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-heading font-semibold mb-4">3. Delning av information</h2>
                            <p className="mb-4">
                                Vi säljer inte din personliga information. Vi kan dela din information med:
                            </p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Tjänsteleverantörer som hjälper till i våra operationer</li>
                                <li>Betalningsprocessorer</li>
                                <li>Leveranspartners</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-heading font-semibold mb-4">4. Dina rättigheter</h2>
                            <p className="mb-4">
                                Du har rätt att:
                            </p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Komma åt din personliga information</li>
                                <li>Korrigera felaktig information</li>
                                <li>Begära radering av din information</li>
                                <li>Avbryta marknadsföringskommunikation</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-heading font-semibold mb-4">5. Kontakta oss</h2>
                            <p className="mb-4">
                                Om du har några frågor om denna integritetspolicy, vänligen kontakta oss på:
                            </p>
                            <p className="mb-4">
                                E-post: support@babysme.com<br />

                            </p>
                        </section>

                        <section>
                            <p className="text-sm text-gray-600">
                                Senast uppdaterad: {new Date().toLocaleDateString()}
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
