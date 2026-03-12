import React from 'react';

const steps = [
  {
    id: 1,
    title: "Brief",
    description: "You share your video idea via script, or concept. I dive deep to fully understand the message and vibe."
  },
  {
    id: 2,
    title: "Research",
    description: "I brainstorm 4-7 unique, click-worthy thumbnail ideas based on your topic, niche, and target audience psychology. We finalize the best one(s) through discussion."
  },
  {
    id: 3,
    title: "Design",
    description: "I create high-quality, clean, scroll-stopping thumbnail design(s) and yes, I keep sharing updates so you don't have to wonder, \"What's happening?\" Main design files are shared once approved."
  },
  {
    id: 4,
    title: "Optimize",
    description: "I track the thumbnail's performance post-launch, run A/B tests if needed, and tweak for the best possible results."
  }
];

export const WhyHire: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900">
       <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-black inline-block relative z-10">
                My <span className="relative inline-block ml-2">
                  Process
                  <svg className="absolute w-[105%] -bottom-2 -left-1 h-3 text-green-500 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                     <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
             </h2>
          </div>

          <div className="relative">
             {/* Connecting Line (Desktop only) */}
             <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-zinc-800 -z-0"></div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
                {steps.map((step) => (
                   <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                      
                      {/* Number Circle */}
                      <div className="w-20 h-20 rounded-full bg-[#8c59e4] text-white flex items-center justify-center text-3xl font-black mb-6 shadow-[0_0_20px_rgba(140,89,228,0.4)] group-hover:scale-110 transition-transform duration-300 border-4 border-zinc-950 relative">
                         {step.id}
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                         {step.description}
                      </p>
                   </div>
                ))}
             </div>
          </div>

       </div>
    </section>
  );
};