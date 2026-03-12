import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onOpenOrder: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrder, isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center">
        <div className="w-full max-w-5xl bg-black/80 dark:bg-black/80 backdrop-blur-xl border border-white/10 dark:border-white/10 rounded-full px-4 py-3 flex items-center justify-between shadow-2xl relative">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
             <div className="relative group">
                <div className="absolute -inset-0.5 bg-[#8c59e4] rounded-full blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                <img 
                  src="https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_100/v1768831079/ZYkvgAAAABklEQVQDAMcDOUrHMya8AAAAAElFTkSuQmCC_uxcd4o.png" 
                  alt="Aswin GFX" 
                  className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 object-cover bg-zinc-800"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://ui-avatars.com/api/?name=Aswin+GFX&background=8c59e4&color=fff&rounded=true&bold=true";
                  }}
                />
             </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 sm:gap-12">
             <a href="#portfolio" className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-400 hover:text-white transition-colors uppercase">Works</a>
             <a href="#reviews" className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-400 hover:text-white transition-colors uppercase">Reviews</a>
             <a href="#story" className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-400 hover:text-white transition-colors uppercase">Process</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
              <button
                onClick={toggleTheme}
                className="text-zinc-400 hover:text-white transition-colors hidden sm:block p-1 rounded-full hover:bg-white/10"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Button variant="primary" onClick={onOpenOrder} className="rounded-full px-5 py-2 sm:px-8 sm:py-2.5 text-[10px] sm:text-xs uppercase tracking-widest hover:-translate-y-0.5">
                  Order
              </Button>
               {/* Mobile Menu Toggle */}
               <div className="md:hidden">
                  <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#8c59e4]">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
               </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950/95 dark:bg-zinc-950/95 backdrop-blur-lg pt-32 px-6">
           <div className="flex flex-col gap-6 text-center">
             <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-widest text-zinc-400 hover:text-white uppercase">Works</a>
             <a href="#reviews" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-widest text-zinc-400 hover:text-white uppercase">Reviews</a>
             <a href="#story" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-widest text-zinc-400 hover:text-white uppercase">Process</a>
             <button onClick={() => { toggleTheme(); setIsOpen(false); }} className="text-zinc-400 hover:text-white text-lg font-bold tracking-widest uppercase flex items-center justify-center gap-2">
               {isDark ? <><Sun size={20}/> Light Mode</> : <><Moon size={20}/> Dark Mode</>}
             </button>
           </div>
        </div>
      )}
    </>
  );
};