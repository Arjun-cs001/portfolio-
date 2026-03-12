import React from 'react';

const services = [
  {
    title: "Ideation & Strategy",
    description: "I study the video's core idea through your script or concept, research the target audience, and understand the story and vibe, ensuring every thumbnail idea speaks directly to what makes people click.\n\nThumbnail ideas are shared as rough sketches for easy visualization and discussion.",
  },
  {
    title: "Design",
    description: "I design high-quality, clean, and scroll-stopping thumbnails - either based on your provided brief or based on the ideas I develop through research and audience understanding.\n\nEvery design focuses on clarity, strong visual hierarchy, and emotional impact, ensuring the thumbnail stands out instantly without feeling cluttered or confusing.",
  },
  {
    title: "Performance Tracking & Optimization",
    description: "I offer A/B testing support where I track the video's initial performance and suggest small tweaks to the thumbnail or title if needed.\n\nThe aim is to make gradual improvements based on how viewers are responding, helping the video get a better chance to perform over time.",
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 to-[#1a0b2e] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white">Service I Offer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#8c59e4] transition-all duration-300 group flex flex-col">
              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                  {service.description.split('\n\n').map((paragraph, i) => (
                    <p key={i}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};