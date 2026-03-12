import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { Portfolio } from './components/Portfolio';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { WhyHire } from './components/WhyHire';
import { Services } from './components/Services';
import { FallingPens } from './components/FallingPens';

function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved === null ? true : saved === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const openOrderModal = () => setIsOrderModalOpen(true);
  const closeOrderModal = () => setIsOrderModalOpen(false);
  const toggleTheme = () => setIsDark(prev => {
    const next = !prev;
    localStorage.setItem('theme', next ? 'dark' : 'light');
    return next;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col font-sans transition-colors duration-300">
      <FallingPens />
      <Header onOpenOrder={openOrderModal} isDark={isDark} toggleTheme={toggleTheme} />
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