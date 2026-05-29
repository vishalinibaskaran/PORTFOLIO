import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { resumeData } from '../data';

export default function Footer({ dark }) {
  return (
    <footer className={`py-10 border-t ${dark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className={`font-display font-black text-xl text-gradient`}>Vishalini B</p>
            <p className={`text-xs mt-0.5 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
              B.Tech IT Student | Full Stack Developer
            </p>
          </div>

          <div className={`flex items-center gap-1 text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
            Built with <Heart size={12} className="text-rose-400 mx-1" /> using React + Vite + Tailwind
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: resumeData.github, icon: Github },
              { href: resumeData.linkedin, icon: Linkedin },
              { href: `mailto:${resumeData.email}`, icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${dark ? 'text-slate-400 hover:text-teal-400 hover:bg-teal-500/10' : 'text-slate-500 hover:text-teal-600 hover:bg-teal-50'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className={`mt-6 pt-6 border-t text-center text-xs ${dark ? 'border-slate-800 text-slate-600' : 'border-slate-100 text-slate-400'}`}>
          © {new Date().getFullYear()} Vishalini B. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
