import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  if (loading) {
    return <LoadingScreen onDone={() => setLoading(false)} />;
  }

  return (
    <motion.div
      className={`relative ${dark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Particles dark={dark} />
      <Navbar dark={dark} toggleDark={() => setDark(!dark)} />

      <main className="relative z-10">
        <Hero dark={dark} />
        <About dark={dark} />
        <Skills dark={dark} />
        <Projects dark={dark} />
        <Experience dark={dark} />
        <Certifications dark={dark} />
        <Contact dark={dark} />
      </main>

      <Footer dark={dark} />
      <BackToTop />
    </motion.div>
  );
}
