import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Camera, Heart, Sparkles } from 'lucide-react';
import homeHero from '../media/HomePICK.jpg';
import aboutPic from '../media/About_Pic.jpg';

export default function Home() {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={homeHero}
            alt="Vibha Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-2xl space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full">
                <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-primary">New Season Arrivals</p>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif italic leading-[1.1] text-ink">
                Designed to Make <br />
                <span className="text-primary font-normal not-italic">You Glow</span>
              </h1>
              <p className="text-sm md:text-lg text-ink/100 leading-relaxed max-w-md font-serif italic">
                "Wear Your Glow"
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-6">
              <Link
                to="/contact"
                className="bg-primary text-white px-12 py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-[11px] transition-all hover:bg-ink shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 group flex items-center gap-4"
              >
                Inquire Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

      </section>

      {/* About Section Merged */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-ink/5 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <img src={aboutPic} className="w-full h-full object-cover" alt="Vibha Craftsmanship" />
              <div className="absolute top-8 left-8 bg-surface/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-[200px]">
                  <p className="font-serif italic text-lg leading-tight">"Fashion passes, style remains."</p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-serif">Wear Your Glow with VIBHA</h2>
              <p className="text-xl text-ink/70 font-serif italic">At VIBHA, we believe fashion should make every woman feel confident, comfortable, and beautiful in her own way.</p>
            </div>
            
            <div className="space-y-6 text-sm text-ink/60 leading-relaxed font-sans">
              <p>
                That’s why we bring you a versatile collection of ladies wear designed for everyday elegance and effortless style. From stylish kurties and elegant 3-piece sets to trendy co-ord sets, comfortable tops, and soft nightwear, VIBHA offers outfits that blend comfort, quality, and modern fashion.
              </p>
              <p>
                Our collections are thoughtfully crafted using comfortable fabrics and flattering designs suitable for daily wear, office looks, casual outings, festive moments, and relaxed home comfort.
              </p>
              <p>
                We celebrate fashion for every woman by offering a wide range of sizes from M to 5XL, ensuring style and comfort for different body types and preferences. With affordable pricing and attention to quality, VIBHA makes it easy to stay fashionable without compromising on comfort or value.
              </p>
              <p className="font-serif italic text-primary text-base">
                “Wear Your Glow” is more than our tagline — it’s our belief that the right outfit can bring out confidence, positivity, and individuality in every woman.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-ink/5">
              <div className="space-y-2">
                <h4 className="font-serif text-3xl text-primary">M - 5XL</h4>
                <p className="text-[10px] uppercase font-bold tracking-widest">Inclusive Sizing</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-3xl text-primary">Premium</h4>
                <p className="text-[10px] uppercase font-bold tracking-widest">Quality Fabrics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#FFF1F5] text-ink p-12 md:p-24 rounded-[3rem] space-y-16 border border-rose-100/50">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl font-serif text-primary">Our Vision</h2>
            <p className="text-lg text-ink/80 leading-relaxed font-serif italic">
              To make stylish and comfortable fashion accessible to every woman, and make VIBHA a preferred choice for modern, affordable, and elegant outfits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Sparkles className="text-primary" size={32} />
              <h3 className="text-xl font-serif">Uncompromising Quality</h3>
              <p className="text-sm text-ink/60">Only the finest silks, linens, and hand-woven cottons make it to our cutting table.</p>
            </div>
            <div className="space-y-4">
              <Heart className="text-primary" size={32} />
              <h3 className="text-xl font-serif">Artisanal Support</h3>
              <p className="text-sm text-ink/60">We work directly with weaver clusters across India, ensuring fair wages and preserving lost techniques.</p>
            </div>
            <div className="space-y-4">
              <Camera className="text-primary" size={32} />
              <h3 className="text-xl font-serif">Candid Community</h3>
              <p className="text-sm text-ink/60">Our community of #VibhaMuses is building a more transparent and inclusive world of style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section Placeholder */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="text-center space-y-4 mb-4">
          <Instagram size={32} className="mx-auto text-accent" />
          <h2 className="text-3xl font-serif">
            Follow{' '}
            <a 
              href="https://www.instagram.com/vibha.india/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-all"
            >
              @vibha.india
            </a>
          </h2>
          <p className="text-ink/60">Share your moments with #VibhaMuse</p>
        </div>
      </section>
    </div>
  );
}
