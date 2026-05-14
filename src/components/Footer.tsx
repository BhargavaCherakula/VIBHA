import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted-bg border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <div className="text-[10px] text-ink/40 uppercase tracking-[0.2em] font-bold">
            © 2025 VIBHA
          </div>
          <div className="text-[8px] text-primary uppercase tracking-[0.3em] font-medium">
            wear your glow
          </div>
        </div>
        
        <div className="flex gap-10 text-[10px] text-ink/60 font-semibold uppercase tracking-[0.1em]">
        </div>
      </div>
    </footer>
  );
}
