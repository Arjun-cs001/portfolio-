import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  { id: 1, question: "Are you currently available for work?", answer: "Yes! I currently have openings for new clients. Please use the contact form to discuss your project." },
  { id: 2, question: "Do you provide concepts, or just designs?", answer: "Both. I can work with your existing concepts or we can brainstorm together to find the best angle for your video." },
  { id: 3, question: "What's your creative process like? (Step-by-step)", answer: "1. Brief & Discovery, 2. Concept Sketching, 3. Design Draft, 4. Revisions, 5. Final Delivery." },
  { id: 4, question: "How do you handle feedback and A/B Testing?", answer: "I welcome feedback! If you need variants for A/B testing, we can arrange a package deal." },
  { id: 5, question: "What's your usual turnaround time?", answer: "Typically 24-48 hours depending on the complexity and current workload." },
  { id: 6, question: "How much will my order cost?", answer: "Pricing varies based on complexity and bulk orders. Contact me for a custom quote." },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-zinc-950 px-4 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-[#8c59e4] mb-4">Frequently Asked Questions</h2>
        <p className="text-zinc-400 text-center mb-12 text-sm">More than half of my inbox revolves around these questions, so I've compiled some answers here.</p>
        
        <div className="space-y-4">
          {faqData.map((item) => (
            <div key={item.id} className="border-b border-zinc-800 pb-4">
              <button 
                onClick={() => toggle(item.id)}
                className="w-full flex justify-between items-center py-2 text-left hover:text-[#8c59e4] transition-colors focus:outline-none"
              >
                <span className="font-bold text-white text-lg">{item.question}</span>
                <span className="text-[#8c59e4]">
                  {openId === item.id ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === item.id ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-zinc-400 text-sm leading-relaxed pr-8 pb-2">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};