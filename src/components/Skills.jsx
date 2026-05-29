import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';

const colorMap = {
  teal: { bar: 'bg-gradient-to-r from-teal-500 to-teal-400', badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20', dot: 'bg-teal-400', title: 'text-teal-400' },
  amber: { bar: 'bg-gradient-to-r from-amber-500 to-amber-400', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20', dot: 'bg-amber-400', title: 'text-amber-400' },
  violet: { bar: 'bg-gradient-to-r from-violet-500 to-violet-400', badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20', dot: 'bg-violet-400', title: 'text-violet-400' },
  rose: { bar: 'bg-gradient-to-r from-rose-500 to-rose-400', badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20', dot: 'bg-rose-400', title: 'text-rose-400' },
  blue: { bar: 'bg-gradient-to-r from-blue-500 to-blue-400', badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20', dot: 'bg-blue-400', title: 'text-blue-400' },
  green: { bar: 'bg-gradient-to-r from-green-500 to-green-400', badge: 'bg-green-500/10 text-green-400 border-green-500/20', dot: 'bg-green-400', title: 'text-green-400' },
};

const colorMapLight = {
  teal: { bar: 'bg-gradient-to-r from-teal-500 to-teal-400', badge: 'bg-teal-50 text-teal-700 border-teal-200', dot: 'bg-teal-500', title: 'text-teal-600' },
  amber: { bar: 'bg-gradient-to-r from-amber-500 to-amber-400', badge: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500', title: 'text-amber-600' },
  violet: { bar: 'bg-gradient-to-r from-violet-500 to-violet-400', badge: 'bg-violet-50 text-violet-700 border-violet-200', dot: 'bg-violet-500', title: 'text-violet-600' },
  rose: { bar: 'bg-gradient-to-r from-rose-500 to-rose-400', badge: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-500', title: 'text-rose-600' },
  blue: { bar: 'bg-gradient-to-r from-blue-500 to-blue-400', badge: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500', title: 'text-blue-600' },
  green: { bar: 'bg-gradient-to-r from-green-500 to-green-400', badge: 'bg-green-50 text-green-700 border-green-200', dot: 'bg-green-500', title: 'text-green-600' },
};

function ProgressBar({ level, color, dark }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  const colors = dark ? colorMap : colorMapLight;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`h-2 rounded-full overflow-hidden ${dark ? 'bg-slate-700/50' : 'bg-slate-200'}`}>
      <motion.div
        className={`h-full rounded-full ${colors[color]?.bar}`}
        initial={{ width: '0%' }}
        animate={animated ? { width: `${level}%` } : { width: '0%' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
    </div>
  );
}

export default function Skills({ dark }) {
  const colors = dark ? colorMap : colorMapLight;

  return (
    <section id="skills" className={`py-24 ${dark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={`font-mono text-sm font-medium tracking-wider uppercase ${dark ? 'text-teal-400' : 'text-teal-600'}`}>
            02. Skills
          </span>
          <h2 className={`section-title mt-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Technical Expertise
          </h2>
          <p className={`mt-4 max-w-xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            A comprehensive toolkit built through coursework, projects, and hands-on internship experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skills.map((skillGroup, gi) => (
            <motion.div
              key={skillGroup.category}
              className={`p-6 rounded-2xl card-hover ${dark ? 'glass border border-white/5' : 'bg-white border border-slate-100 shadow-sm'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`w-2 h-2 rounded-full ${colors[skillGroup.color]?.dot}`} />
                <h3 className={`font-display font-bold text-lg ${colors[skillGroup.color]?.title}`}>
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className={`text-sm font-medium ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-xs font-mono ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <ProgressBar level={skill.level} color={skillGroup.color} dark={dark} />
                  </div>
                ))}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
                {skillGroup.items.map((skill) => (
                  <span key={skill.name} className={`px-2 py-0.5 rounded-md text-xs font-mono border ${colors[skillGroup.color]?.badge}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
