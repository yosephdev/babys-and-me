import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-heading font-bold mb-8">Användarvillkor</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Godkännande av villkor</h2>
              <p className="mb-4">
                Genom att använda Baby's & Me webbplats godkänner och accepterar du att vara bunden av villkoren i detta avtal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">2. Användningslicens</h2>
              <p className="mb-4">
                Tillstånd beviljas tillfälligt för att ladda ner en kopia av materialen (information eller programvara) på Baby's & Me webbplats endast för personlig, icke-kommersiell tillfällig visning.
              </p>
              <p className="mb-4">
                Detta är en licens, inte en överföring av äganderätt, och under denna licens får du inte:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Modifiera eller kopiera materialen</li>
                <li>Använda materialen för kommersiella ändamål</li>
                <li>Försöka dekompilera eller reverse-engineera någon programvara på webbplatsen</li>
                <li>Ta bort eventuella upphovsrättsnoteringar eller andra äganderättsnoteringar från materialen</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">3. Användarkonto</h2>
              <p className="mb-4">
                För att komma åt vissa funktioner på webbplatsen kan du behöva skapa ett konto. Du är ansvarig för:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Att bevara konfidentialiteten för dina kontouppgifter</li>
                <li>All aktivitet som sker under ditt konto</li>
                <li>Att meddela oss omedelbart om obehörig användning av ditt konto</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">4. Produktinformation</h2>
              <p className="mb-4">
                Vi strävar efter att visa våra produkter så exakt som möjligt. Vi kan dock inte garantera att färgerna visas korrekt på din skärm.
              </p>
              <p className="mb-4">
                Vi förbehåller oss rätten att begränsa försäljningen av våra produkter till vilken person, geografiskt område eller jurisdiktion som helst.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Priser och betalning</h2>
              <p className="mb-4">
                Alla priser kan ändras utan förvarning. Vi förbehåller oss rätten att modifiera eller avsluta vilken produkt som helst utan förvarning.
              </p>
              <p className="mb-4">
                Betalning måste ske i sin helhet vid köptillfället. Vi accepterar olika betalningsmetoder enligt vad som anges vid kassan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Leverans och returer</h2>
              <p className="mb-4">
                Leveranstider och kostnader är uppskattningar och kan variera. Vi ansvarar inte för förseningar utanför vår kontroll.
              </p>
              <p className="mb-4">
                Vår returpolicy finns tillgänglig på vår webbplats och kan uppdateras från tid till annan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">7. Kontaktinformation</h2>
              <p className="mb-4">
                Frågor om användarvillkoren ska skickas till oss på:
              </p>
              <p className="mb-4">
                E-post: legal@babysme.com<br />
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

export default TermsOfService;
