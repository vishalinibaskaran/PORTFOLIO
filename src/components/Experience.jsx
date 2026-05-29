import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { resumeData } from '../data';

export default function Experience({ dark }) {
  return (
    <section id="experience" className={`py-24 ${dark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={`font-mono text-sm font-medium tracking-wider uppercase ${dark ? 'text-teal-400' : 'text-teal-600'}`}>
            04. Experience
          </span>
          <h2 className={`section-title mt-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Work Experience
          </h2>
        </motion.div>

        {/* Education timeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Experience */}
          <div>
            <h3 className={`font-display font-bold text-xl mb-6 flex items-center gap-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
              <Briefcase size={20} className="text-teal-400" />
              Internship
            </h3>

            {resumeData.experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                className={`p-6 rounded-2xl ${dark ? 'glass border border-white/5' : 'bg-white border border-slate-100 shadow-sm'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className={`font-bold text-lg ${dark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h4>
                    <p className={`font-medium ${dark ? 'text-teal-400' : 'text-teal-600'}`}>{exp.company}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono ${
                    dark ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-teal-50 text-teal-600 border border-teal-200'
                  }`}>
                    {exp.type}
                  </span>
                </div>

                <div className={`flex flex-wrap gap-4 text-xs mb-4 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((r, ri) => (
                    <li key={ri} className={`flex items-start gap-2 text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                      <ChevronRight size={13} className="mt-1 text-teal-400 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className={`px-2 py-0.5 rounded-md text-xs font-mono ${
                      dark ? 'bg-slate-700/60 text-slate-400' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className={`font-display font-bold text-xl mb-6 flex items-center gap-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
              <span className="text-xl">🎓</span>
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className={`absolute left-5 top-0 bottom-0 w-0.5 ${dark ? 'bg-slate-700' : 'bg-slate-200'}`} />

              <div className="space-y-6">
                {resumeData.education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    className="relative pl-14"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-3.5 top-3 w-3 h-3 rounded-full border-2 ${
                      i === 0
                        ? 'bg-teal-400 border-teal-400'
                        : dark ? 'bg-slate-800 border-slate-600' : 'bg-white border-slate-300'
                    }`} />

                    <div className={`p-5 rounded-2xl ${dark ? 'glass border border-white/5' : 'bg-white border border-slate-100 shadow-sm'}`}>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{edu.icon}</span>
                        <div>
                          <h4 className={`font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{edu.degree}</h4>
                          <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{edu.institution}</p>
                          <div className={`flex flex-wrap gap-3 mt-2 text-xs font-mono ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                            {edu.period && <span>{edu.period}</span>}
                            {edu.score && (
                              <span className={`font-bold ${dark ? 'text-teal-400' : 'text-teal-600'}`}>{edu.score}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
