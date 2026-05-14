import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import vibhaLogo from '../media/vibha_transparent_01.png'; // adjust path if needed

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/50 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
    
        <Link to="/" className="flex flex-col items-center">
          <img
            src={vibhaLogo}
            alt="VIBHA Logo"
            className="h-16 w-auto object-contain"
          />
          <span className="text-[10px] md:text-[10px] text-primary -mt-2 leading-relaxed max-w-md font-serif italic whitespace-nowrap">
            - Wear Your Glow
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `text-[10px] uppercase tracking-[0.2em] font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary border-b border-primary pb-1' : 'text-ink'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-ink/5 rounded-full transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-top border-ink/5 overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-serif font-medium ${
                      isActive ? 'text-primary underline underline-offset-8 decoration-accent' : 'text-ink/70'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
