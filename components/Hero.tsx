import React, { useRef } from 'react';
import { Button } from './Button';
import { CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 7.5) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="pt-40 sm:pt-48 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Status Pill */}
      <div className="flex justify-center mb-16 fade-in animate-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-red-500/20 bg-red-500/5 shadow-[0_0_20px_rgba(239,68,68,0.1)] hover:bg-red-500/10 transition-colors cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-white">Open for Projects</span>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl font-black leading-tight text-white">
            You only get one <br />
            <span className="text-[#8c59e4]">first impression.</span> <br />
            Make it count.
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
            On YouTube, attention is tough to catch. Thankfully, you found an expert who knows exactly how to stop the scroll.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={onOpenOrder}>Get in touch</Button>
            <a href="#portfolio"><Button variant="secondary">View Portfolio</Button></a>
          </div>

          <div className="pt-8">
            <p className="text-sm text-zinc-500 font-semibold mb-3">Trusted by:</p>
            <div className="flex items-center gap-4 flex-wrap">
               {/* Client Avatars */}
               {[
                 "https://yt3.googleusercontent.com/ytc/AIdro_mSh0doIgogNhhpzLcRYEMRorZefkBUe_6LYOWnLgzSyFc=s160-c-k-c0x00ffffff-no-rj",
                 "https://yt3.googleusercontent.com/afOhT_Za7YiRHhhaP_ZfDgdb4pQDQcjz0UiBSJrdMKEQprIec87ZfRwSNI34ox7zf6WqHmhN=s160-c-k-c0x00ffffff-no-rj",
                 "https://yt3.googleusercontent.com/hXx61vYViqWc3LqW0yzxcmy9bywYdClW_Yapv1KojdcgNzPNbDUGbATQzh_O5nCw0tF9jKyyJ5U=s160-c-k-c0x00ffffff-no-rj"
               ].map((src, i) => (
                 <div key={i} className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-700 overflow-hidden flex items-center justify-center">
                    <img 
                      src={src} 
                      alt={`Creator ${i + 1}`} 
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                 </div>
               ))}
               <span className="text-sm text-zinc-500 font-medium">+20 more</span>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image Composition */}
        <div className="relative lg:mt-16">
            {/* Abstract Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#8c59e4] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-3xl p-4 shadow-2xl border border-zinc-700 rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mt-6 rounded-xl overflow-hidden bg-black relative aspect-[4/3]">
                    <video 
                        ref={videoRef}
                        src="https://res.cloudinary.com/dcnz8e0nz/video/upload/q_auto,vc_auto/v1768845087/Photo_Animation_For_Website_edkwa7.mp4" 
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        playsInline
                        onTimeUpdate={handleTimeUpdate}
                    />
                    {/* Overlay badge */}
                    <div className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span>CTR Optimized</span>
                    </div>
                </div>
            </div>

             {/* Floating stats card */}
             <div className="absolute -bottom-6 -left-6 z-20 bg-[#1A1A1A] p-4 rounded-xl shadow-xl border border-zinc-700 w-48 animate-pulse-slow">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-zinc-400 text-xs">Views Gained</span>
                    <span className="text-green-500 text-xs">+124%</span>
                </div>
                <div className="text-2xl font-bold text-white">2.4M+</div>
                <div className="w-full bg-zinc-800 h-1 mt-2 rounded-full overflow-hidden">
                    <div className="bg-[#8c59e4] h-full w-[70%]"></div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};