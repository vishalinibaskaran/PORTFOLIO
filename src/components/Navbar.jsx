import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? dark
              ? 'glass py-3 shadow-lg shadow-black/20'
              : 'bg-white/80 backdrop-blur-lg border-b border-slate-200/50 py-3 shadow-sm'
            : 'py-5'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
            className="font-display font-black text-xl"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gradient">VB</span>
            <span className={dark ? 'text-white ml-1' : 'text-slate-900 ml-1'}> / Portfolio</span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const id = link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === id
                      ? 'text-teal-400 bg-teal-500/10'
                      : dark
                      ? 'text-slate-400 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleDark}
              className={`p-2 rounded-lg transition-colors ${
                dark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <button
              className={`md:hidden p-2 rounded-lg ${dark ? 'text-white' : 'text-slate-900'}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`fixed inset-x-0 top-0 z-30 pt-20 pb-6 px-6 ${
              dark ? 'bg-slate-900/95 backdrop-blur-xl' : 'bg-white/95 backdrop-blur-xl'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium ${
                    dark ? 'text-slate-300 hover:text-teal-400 hover:bg-teal-500/10' : 'text-slate-700 hover:text-teal-600 hover:bg-teal-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
