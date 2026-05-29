import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('Initializing...');

  const messages = [
    'Initializing...',
    'Loading portfolio...',
    'Almost ready...',
    'Welcome!',
  ];

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(onDone, 400);
      }
      setProgress(Math.min(p, 100));
      const idx = Math.floor((p / 100) * (messages.length - 1));
      setText(messages[Math.min(idx, messages.length - 1)]);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated rings */}
        <div className="relative mb-12">
          <motion.div
            className="w-24 h-24 rounded-full border-2 border-teal-500/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 w-24 h-24 rounded-full border-2 border-teal-500/50"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div
            className="absolute inset-3 w-18 h-18 rounded-full bg-teal-500/10 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-2 h-2 rounded-full bg-teal-400 absolute top-1" />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-teal-400 font-mono text-sm font-bold">VB</span>
          </div>
        </div>

        <motion.h1
          className="text-white font-display text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Vishalini B
        </motion.h1>

        <p className="text-slate-400 font-body text-sm mb-10 tracking-wider">
          {text}
        </p>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-teal-500 to-amber-400 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>
        <span className="text-slate-500 font-mono text-xs mt-2">{Math.round(progress)}%</span>
      </motion.div>
    </AnimatePresence>
  );
}
