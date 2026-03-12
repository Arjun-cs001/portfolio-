import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { Portfolio } from './components/Portfolio';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { WhyHire } from './components/WhyHire';
import { Services } from './components/Services';

function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const openOrderModal = () => setIsOrderModalOpen(true);
  const closeOrderModal = () => setIsOrderModalOpen(false);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-sans">
      <Header onOpenOrder={openOrderModal} />
      <main className="flex-grow">
        <Hero onOpenOrder={openOrderModal} />
        <Portfolio />
        <Testimonials />
        <WhyHire />
        <Services />
        <FAQ />
      </main>
      <Footer onOpenOrder={openOrderModal} />
      <OrderModal isOpen={isOrderModalOpen} onClose={closeOrderModal} />
    </div>
  );
}

export default App;