import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ChevronDown, Download, ExternalLink } from 'lucide-react';
import { resumeData } from '../data';

const roles = [
  'Full Stack Developer',
  'Data Analyst',
  'React.js Developer',
  'Java Developer',
  'Problem Solver',
];

export default function Hero({ dark }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIdx];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIdx]);

  const scrollDown = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        dark ? 'bg-slate-950' : 'bg-slate-50'
      } mesh-bg`}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-amber-500/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-6 ${
              dark ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-teal-50 text-teal-600 border border-teal-200'
            }`}>
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            className={`font-display text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-4 ${
              dark ? 'text-white' : 'text-slate-900'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hi, I'm{' '}
            <span className="text-gradient block">Vishalini B</span>
          </motion.h1>

          <motion.div
            className="h-12 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className={`font-body text-xl md:text-2xl font-medium ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
              {displayed}
              <span className="inline-block w-0.5 h-6 bg-teal-400 ml-0.5 animate-[blink_0.75s_step-end_infinite]" />
            </span>
          </motion.div>

          <motion.p
            className={`font-body text-base leading-relaxed mb-8 max-w-lg ${dark ? 'text-slate-400' : 'text-slate-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            B.Tech Information Technology student passionate about building scalable, user-centric applications and data-driven solutions. CGPA 8.39 | Chennai, India
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium text-sm hover:from-teal-400 hover:to-teal-500 transition-all duration-200 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Get In Touch
            </a>
            <a
              href={resumeData.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                dark
                  ? 'bg-white/10 text-white border border-white/10 hover:bg-white/15'
                  : 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { href: resumeData.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${resumeData.email}`, icon: Mail, label: 'Email' },
              { href: `tel:${resumeData.phone}`, icon: Phone, label: 'Phone' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg transition-all ${
                  dark
                    ? 'text-slate-400 hover:text-teal-400 hover:bg-teal-500/10'
                    : 'text-slate-500 hover:text-teal-600 hover:bg-teal-50'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
            <span className={`text-xs font-mono ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
              {resumeData.email}
            </span>
          </motion.div>
        </div>

        {/* Right: profile image + floating badges */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute w-80 h-80 rounded-full border border-teal-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal-400" />
          </motion.div>

          {/* Profile image */}
          <div className="relative w-60 h-60 rounded-full overflow-hidden ring-4 ring-teal-500/40 shadow-2xl shadow-teal-500/20 animate-float">
            <img
              src="/profile.jpg"
              alt="Vishalini B"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent" />
          </div>

          {/* Floating badges */}
          <motion.div
            className={`absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-mono font-bold shadow-lg ${
              dark ? 'bg-slate-800 text-teal-400 border border-teal-500/20' : 'bg-white text-teal-600 border border-teal-200 shadow-teal-100'
            }`}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            ☕ Java Dev
          </motion.div>
          <motion.div
            className={`absolute -bottom-4 -left-4 px-3 py-2 rounded-xl text-xs font-mono font-bold shadow-lg ${
              dark ? 'bg-slate-800 text-amber-400 border border-amber-500/20' : 'bg-white text-amber-600 border border-amber-200 shadow-amber-100'
            }`}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ⚛️ React Dev
          </motion.div>
          <motion.div
            className={`absolute top-1/2 -right-12 -translate-y-1/2 px-3 py-2 rounded-xl text-xs font-mono font-bold shadow-lg ${
              dark ? 'bg-slate-800 text-violet-400 border border-violet-500/20' : 'bg-white text-violet-600 border border-violet-200'
            }`}
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            📊 Data Analyst
          </motion.div>

          {/* CGPA badge */}
          <div className={`absolute bottom-4 right-0 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${
            dark ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : 'bg-teal-50 text-teal-700 border border-teal-200'
          }`}>
            🎓 CGPA: 8.39
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 ${
          dark ? 'text-slate-500 hover:text-teal-400' : 'text-slate-400 hover:text-teal-500'
        } transition-colors`}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-xs font-mono">scroll</span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  );
}
