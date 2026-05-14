import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto px-4 py-20"
    >
      <div className="space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-serif">Get in Touch</h1>
          <p className="text-xl text-ink/60 font-serif italic">Let us help you discover the perfect outfit for every occasion.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-4 p-8 bg-white rounded-3xl border border-ink/5 shadow-sm">
            <Phone className="text-accent" size={24} />
            <div>
              <h4 className="text-xs uppercase font-extrabold tracking-widest">Call or WhatsApp</h4>
              <p className="text-ink/60 text-sm mt-1">+91 91766 45119</p>
            </div>
          </div>
          <div className="space-y-4 p-8 bg-white rounded-3xl border border-ink/5 shadow-sm">
            <Mail className="text-accent" size={24} />
            <div>
              <h4 className="text-xs uppercase font-extrabold tracking-widest">Email</h4>
              <p className="text-ink/60 text-sm mt-1">vibhatirupati@gmail.com</p>
            </div>
          </div>
          <div className="space-y-4 p-8 bg-white rounded-3xl border border-ink/5 shadow-sm">
            <Clock className="text-accent" size={24} />
            <div>
              <h4 className="text-xs uppercase font-extrabold tracking-widest">Store Hours</h4>
              <p className="text-ink/60 text-sm mt-1">Sun - Sat: 9AM - 9PM</p>
            </div>
          </div>
          <div className="space-y-4 p-8 bg-white rounded-3xl border border-ink/5 shadow-sm">
            <Instagram className="text-accent" size={24} />
            <div>
              <h4 className="text-xs uppercase font-extrabold tracking-widest">Social</h4>
              <a 
                href="https://www.instagram.com/vibha.india/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm mt-1 inline-block transition-all"
              >
                @vibha.india
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-12 border-t border-ink/10">
          <div className="flex items-start gap-4">
            <MapPin className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-serif text-xl">
                <a 
                  href="https://maps.app.goo.gl/XHdixCGNA5oVHTTdA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline transition-all"
                >
                  VIBHA
                </a>
              </h3>
              <p className="text-ink/60 mt-2">20-2-557, Korlagunta Main Rd, Maruthi Nagar<br />Tirupati, Andhra Pradesh, 517501</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
