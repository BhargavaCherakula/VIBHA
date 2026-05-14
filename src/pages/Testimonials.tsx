import { motion } from 'motion/react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-5xl font-serif">Word of Mouth</h1>
        <p className="text-ink/60 italic">Real stories from our global community of #LuminaMuses.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {REVIEWS.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-10 rounded-[2rem] border border-ink/5 shadow-lg space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <Quote className="text-accent/30" size={32} />
                <div className="flex gap-1 text-accent">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-lg font-serif italic text-ink/80 leading-relaxed">"{review.comment}"</p>
            </div>
            
            <div className="flex items-center gap-4 pt-6 border-t border-ink/5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {review.author[0]}
              </div>
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-widest">{review.author}</h4>
                <p className="text-[10px] text-ink/40 uppercase">{review.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="bg-primary text-surface p-12 md:p-20 rounded-[3rem] text-center space-y-8">
        <MessageSquare className="mx-auto opacity-50" size={40} />
        <h2 className="text-3xl md:text-4xl font-serif">Have a Lumina moment to share?</h2>
        <p className="text-surface/70 max-w-lg mx-auto">Tag us on Instagram or send us your feedback via WhatsApp. We love hearing from you!</p>
        <button className="bg-surface text-ink px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-accent transition-colors active:scale-95">
          Share Your Story
        </button>
      </section>
    </div>
  );
}
