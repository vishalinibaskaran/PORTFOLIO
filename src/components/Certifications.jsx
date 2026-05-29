import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';
import { resumeData } from '../data';

const colorMap = {
  teal: { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/20', lightBg: 'bg-teal-50', lightText: 'text-teal-700', lightBorder: 'border-teal-200' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', lightBg: 'bg-amber-50', lightText: 'text-amber-700', lightBorder: 'border-amber-200' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', lightBg: 'bg-blue-50', lightText: 'text-blue-700', lightBorder: 'border-blue-200' },
};

export default function Certifications({ dark }) {
  return (
    <section id="certifications" className={`py-24 ${dark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={`font-mono text-sm font-medium tracking-wider uppercase ${dark ? 'text-teal-400' : 'text-teal-600'}`}>
            05. Certifications
          </span>
          <h2 className={`section-title mt-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Achievements & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.certifications.map((cert, i) => {
            const c = colorMap[cert.color] || colorMap.teal;
            return (
              <motion.div
                key={cert.title}
                className={`p-6 rounded-2xl card-hover ${dark ? 'glass border border-white/5' : 'bg-slate-50 border border-slate-100 shadow-sm'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${
                    dark ? c.bg : c.lightBg
                  }`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono mb-2 border ${
                      dark ? `${c.bg} ${c.text} ${c.border}` : `${c.lightBg} ${c.lightText} ${c.lightBorder}`
                    }`}>
                      <BadgeCheck size={10} />
                      {cert.grade}
                    </div>
                    <h3 className={`font-display font-bold text-base leading-tight mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>
                      {cert.title}
                    </h3>
                    <p className={`text-xs font-medium mb-2 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {cert.issuer}
                    </p>
                    <p className={`text-xs leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { value: '8.39', label: 'CGPA', icon: '🎓' },
            { value: '3+', label: 'Certifications', icon: '🏆' },
            { value: '1+', label: 'Internship', icon: '💼' },
            { value: '1+', label: 'Projects', icon: '🚀' },
          ].map(({ value, label, icon }) => (
            <div key={label} className={`p-5 rounded-2xl text-center ${dark ? 'glass border border-white/5' : 'bg-slate-50 border border-slate-100'}`}>
              <span className="text-2xl">{icon}</span>
              <p className={`font-display font-black text-3xl mt-2 text-gradient`}>{value}</p>
              <p className={`text-xs font-medium mt-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
