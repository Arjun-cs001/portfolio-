import React from 'react';
import { Send, Settings, ArrowUpCircle } from 'lucide-react';
import { Button } from './Button';

interface ProcessProps {
  onOpenOrder: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenOrder }) => {
  return (
    <section id="process" className="py-24 bg-[#8c59e4] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">YouTube Thumbnails Made Easy</h2>
          <p className="max-w-2xl mx-auto font-medium text-white/80">
            My streamlined process means there's only a few steps between you and the custom thumbnail designs of your dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Step 1 */}
          <div className="bg-white/10 border border-white/10 p-8 rounded-xl relative hover:bg-white/20 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <span className="font-black text-6xl opacity-20">1.</span>
              <Send size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Reach out</h3>
            <p className="text-sm font-medium leading-relaxed opacity-80">
              Fill out my contact form and provide me with important information on your design needs, such as how many thumbnails you want or what your channel is about.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/10 border border-white/10 p-8 rounded-xl relative hover:bg-white/20 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <span className="font-black text-6xl opacity-20">2.</span>
              <Settings size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Strategize</h3>
            <p className="text-sm font-medium leading-relaxed opacity-80">
              We then discuss your video idea(s) in further detail, so we can come up with design concepts that have a high chance of performing well with your audience.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/10 border border-white/10 p-8 rounded-xl relative hover:bg-white/20 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <span className="font-black text-6xl opacity-20">3.</span>
              <ArrowUpCircle size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Profit!</h3>
            <p className="text-sm font-medium leading-relaxed opacity-80">
              Once we've agreed on a concept, all that's left is for me to design your thumbnails and implement your feedback. Upload, and hope we hit a 1 of 10!
            </p>
          </div>

        </div>

        <div className="text-center">
            <Button variant="dark" onClick={onOpenOrder}>Get in touch</Button>
        </div>
      </div>
    </section>
  );
};