import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Github, Linkedin, BookOpen, Code2, Database } from 'lucide-react';
import { resumeData } from '../data';

const highlights = [
  { icon: Code2, label: 'Full Stack Dev', sub: 'React + Java', color: 'teal' },
  { icon: Database, label: 'Data Analyst', sub: 'Python + SQL', color: 'amber' },
  { icon: BookOpen, label: 'CGPA 8.39', sub: 'B.Tech IT', color: 'violet' },
];

export default function About({ dark }) {
  return (
    <section
      id="about"
      className={`relative py-24 ${dark ? 'bg-slate-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={`font-mono text-sm font-medium tracking-wider uppercase ${dark ? 'text-teal-400' : 'text-teal-600'}`}>
            01. About
          </span>
          <h2 className={`section-title mt-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className={`font-body text-lg leading-relaxed mb-8 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
              {resumeData.about}
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: User, label: 'Name', value: resumeData.name },
                { icon: MapPin, label: 'Location', value: resumeData.location },
                { icon: Mail, label: 'Email', value: resumeData.email, href: `mailto:${resumeData.email}` },
                { icon: Phone, label: 'Phone', value: resumeData.phone, href: `tel:${resumeData.phone}` },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className={`flex items-start gap-3 p-3 rounded-xl ${dark ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
                  <div className={`p-2 rounded-lg ${dark ? 'bg-teal-500/15 text-teal-400' : 'bg-teal-50 text-teal-600'}`}>
                    <Icon size={14} />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs font-medium ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{label}</p>
                    {href ? (
                      <a href={href} className={`text-sm font-medium truncate block hover:text-teal-400 transition-colors ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {value}
                      </a>
                    ) : (
                      <p className={`text-sm font-medium ${dark ? 'text-slate-300' : 'text-slate-700'}`}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div>
              <p className={`text-sm font-medium mb-3 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Interests</p>
              <div className="flex flex-wrap gap-2">
                {resumeData.interests.map((interest) => (
                  <span key={interest} className={`px-3 py-1 rounded-full text-xs font-medium ${
                    dark ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-teal-50 text-teal-700 border border-teal-200'
                  }`}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: highlight cards + social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {highlights.map(({ icon: Icon, label, sub, color }, i) => (
              <motion.div
                key={label}
                className={`flex items-center gap-4 p-5 rounded-2xl card-hover ${
                  dark ? 'glass border border-white/5' : 'bg-slate-50 border border-slate-100 shadow-sm'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  color === 'teal'
                    ? dark ? 'bg-teal-500/15 text-teal-400' : 'bg-teal-50 text-teal-600'
                    : color === 'amber'
                    ? dark ? 'bg-amber-500/15 text-amber-400' : 'bg-amber-50 text-amber-600'
                    : dark ? 'bg-violet-500/15 text-violet-400' : 'bg-violet-50 text-violet-600'
                }`}>
                  <Icon size={24} />
                </div>
                <div>
                  <p className={`font-display font-bold text-xl ${dark ? 'text-white' : 'text-slate-900'}`}>{label}</p>
                  <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className={`p-5 rounded-2xl ${dark ? 'glass border border-white/5' : 'bg-slate-50 border border-slate-100'}`}>
              <p className={`text-sm font-medium mb-4 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Connect with me</p>
              <div className="flex gap-3">
                {[
                  { href: resumeData.github, icon: Github, label: 'GitHub' },
                  { href: resumeData.linkedin, icon: Linkedin, label: 'LinkedIn' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 ${
                      dark
                        ? 'bg-slate-700/50 text-slate-300 hover:text-teal-400 hover:bg-teal-500/10 border border-white/5'
                        : 'bg-white text-slate-700 hover:text-teal-600 hover:bg-teal-50 border border-slate-200 shadow-sm'
                    }`}
                  >
                    <Icon size={15} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
