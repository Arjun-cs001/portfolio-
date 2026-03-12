import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Best thumbnail designer in the biz. Seriously do not like working with anyone else. You won't find someone more obsessed with their craft than Aswin. He just gets it!",
    author: "Techno Gamerz",
    role: "YouTuber (50.6M)",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_mSh0doIgogNhhpzLcRYEMRorZefkBUe_6LYOWnLgzSyFc=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 2,
    content: "Aswin is the most creative designer I have worked with! Sometimes as a creator you hit a creative wall and need help getting some ideas, going to Aswin never fails. His passion for designing is unlike anyone I have met.",
    author: "RakshXD",
    role: "YouTuber (1.4M)",
    avatar: "https://yt3.googleusercontent.com/afOhT_Za7YiRHhhaP_ZfDgdb4pQDQcjz0UiBSJrdMKEQprIec87ZfRwSNI34ox7zf6WqHmhN=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 3,
    content: "I'm always recommending Aswin to people as he produces fantastic thumbnails and actually *cares* about the strategy behind the design, not just what it looks like. Highly recommend!",
    author: "Tyshon Lawrence",
    role: "YouTuber (1.49M)",
    avatar: "https://yt3.googleusercontent.com/hXx61vYViqWc3LqW0yzxcmy9bywYdClW_Yapv1KojdcgNzPNbDUGbATQzh_O5nCw0tF9jKyyJ5U=s160-c-k-c0x00ffffff-no-rj"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#8c59e4]/30 transition-colors">
            <Quote className="text-[#8c59e4] mb-4 opacity-50" size={24} />
            <p className="text-zinc-300 mb-8 leading-relaxed text-sm">"{t.content}"</p>
            <div className="flex items-center gap-4 mt-auto">
              <img 
                src={t.avatar} 
                alt={t.author} 
                className="w-10 h-10 rounded-full border border-zinc-700" 
                loading="lazy"
                width={40}
                height={40}
              />
              <div>
                <h4 className="font-bold text-white text-sm">{t.author}</h4>
                <p className="text-zinc-500 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};