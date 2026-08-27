import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { OfferCarousel } from "./components/OfferCarousel";
import { mockOfertas } from "./data/mockOfertas";

function App() {
  const { ofertas } = mockOfertas;
  const destaque = ofertas[0];

  return (
    <div className="min-h-[100dvh] bg-white dark:bg-[#07130c]">
      <Header />
      <main>
        {destaque && <Hero destaque={destaque} />}
        <HowItWorks />
        <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
          <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-brand-ink sm:text-3xl dark:text-brand-mint">
            Ofertas de hoje
          </h2>
          <OfferCarousel ofertas={ofertas} />
        </section>
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
