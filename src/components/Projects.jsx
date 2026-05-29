import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ChevronRight } from 'lucide-react';
import { resumeData } from '../data';

export default function Projects({ dark }) {
  const [modal, setModal] = useState(null);

  return (
    <section id="projects" className={`py-24 ${dark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={`font-mono text-sm font-medium tracking-wider uppercase ${dark ? 'text-teal-400' : 'text-teal-600'}`}>
            03. Projects
          </span>
          <h2 className={`section-title mt-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
            What I've Built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {resumeData.projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`group relative p-6 rounded-2xl overflow-hidden card-hover cursor-pointer ${
                dark ? 'glass border border-white/5 hover:border-teal-500/30' : 'bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setModal(project)}
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Category badge */}
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-medium mb-4 ${
                dark ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-teal-50 text-teal-600 border border-teal-200'
              }`}>
                {project.category}
              </span>

              <h3 className={`font-display font-bold text-xl mb-2 group-hover:text-teal-400 transition-colors ${
                dark ? 'text-white' : 'text-slate-900'
              }`}>
                {project.title}
              </h3>
              <p className={`text-sm font-medium mb-3 ${dark ? 'text-teal-400/70' : 'text-teal-600/80'}`}>
                {project.subtitle}
              </p>
              <p className={`text-sm leading-relaxed mb-5 line-clamp-3 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                {project.description}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className={`px-2 py-0.5 rounded-md text-xs font-mono ${
                    dark ? 'bg-slate-700/60 text-slate-400' : 'bg-slate-200/80 text-slate-600'
                  }`}>
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className={`px-2 py-0.5 rounded-md text-xs font-mono ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Action row */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors ${dark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors ${dark ? 'text-slate-400 hover:text-teal-400 hover:bg-teal-500/10' : 'text-slate-500 hover:text-teal-600 hover:bg-teal-50'}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
                <span className={`flex items-center gap-1 text-xs font-medium ${dark ? 'text-teal-400/60 group-hover:text-teal-400' : 'text-teal-500/60 group-hover:text-teal-600'} transition-colors`}>
                  View Details <ChevronRight size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 ${
                dark ? 'bg-slate-900 border border-white/10' : 'bg-white border border-slate-200 shadow-2xl'
              }`}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={`absolute top-4 right-4 p-2 rounded-lg ${dark ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
                onClick={() => setModal(null)}
              >
                <X size={18} />
              </button>

              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono mb-4 ${
                dark ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-teal-50 text-teal-600 border border-teal-200'
              }`}>
                {modal.category}
              </span>

              <h2 className={`font-display font-black text-2xl mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>
                {modal.title}
              </h2>
              <p className={`text-sm font-medium mb-4 ${dark ? 'text-teal-400' : 'text-teal-600'}`}>{modal.subtitle}</p>
              <p className={`text-sm leading-relaxed mb-6 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{modal.description}</p>

              <h4 className={`font-bold text-sm mb-3 ${dark ? 'text-slate-200' : 'text-slate-800'}`}>Key Features</h4>
              <ul className="space-y-2 mb-6">
                {modal.details.map((d, i) => (
                  <li key={i} className={`flex items-start gap-2 text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                    <ChevronRight size={14} className="mt-0.5 text-teal-400 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>

              <h4 className={`font-bold text-sm mb-3 ${dark ? 'text-slate-200' : 'text-slate-800'}`}>Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {modal.tech.map((t) => (
                  <span key={t} className={`px-3 py-1 rounded-lg text-xs font-mono font-medium ${
                    dark ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-teal-50 text-teal-700 border border-teal-200'
                  }`}>
                    {t}
                  </span>
                ))}
              </div>

              {(modal.github || modal.demo) && (
                <div className="flex gap-3">
                  {modal.github && (
                    <a
                      href={modal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-medium hover:from-teal-400 hover:to-teal-500 transition-all"
                    >
                      <Github size={15} />
                      View on GitHub
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
