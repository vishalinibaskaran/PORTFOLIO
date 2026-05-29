import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { resumeData } from '../data';

export default function Contact({ dark }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    // Mailto fallback
    const mailtoUrl = `mailto:${resumeData.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailtoUrl);
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 4000);
  };

  const inputClass = (field) => `w-full px-4 py-3 rounded-xl text-sm transition-all outline-none border ${
    errors[field]
      ? 'border-rose-500 bg-rose-500/5'
      : dark
      ? 'bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-500 focus:border-teal-500 focus:bg-slate-800'
      : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-teal-400 shadow-sm'
  } font-body`;

  return (
    <section id="contact" className={`py-24 ${dark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={`font-mono text-sm font-medium tracking-wider uppercase ${dark ? 'text-teal-400' : 'text-teal-600'}`}>
            06. Contact
          </span>
          <h2 className={`section-title mt-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
            Get In Touch
          </h2>
          <p className={`mt-4 max-w-lg mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            I'm actively looking for opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: 'Email', value: resumeData.email, href: `mailto:${resumeData.email}` },
              { icon: Phone, label: 'Phone', value: resumeData.phone, href: `tel:${resumeData.phone}` },
              { icon: MapPin, label: 'Location', value: resumeData.location },
              { icon: Github, label: 'GitHub', value: 'github.com/vishalinibaskaran', href: resumeData.github },
              { icon: Linkedin, label: 'LinkedIn', value: 'vishalini-baskaran', href: resumeData.linkedin },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className={`flex items-center gap-4 p-4 rounded-2xl ${dark ? 'glass border border-white/5' : 'bg-white border border-slate-100 shadow-sm'}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${dark ? 'bg-teal-500/15 text-teal-400' : 'bg-teal-50 text-teal-600'}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className={`text-xs font-medium ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className={`text-sm font-medium hover:text-teal-400 transition-colors ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
                      {value}
                    </a>
                  ) : (
                    <p className={`text-sm font-medium ${dark ? 'text-slate-200' : 'text-slate-800'}`}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden h-48">
              <iframe
                title="Chennai Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.9973874144!2d79.8945135!3d13.0477021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className={`p-8 rounded-2xl ${dark ? 'glass border border-white/5' : 'bg-white border border-slate-100 shadow-sm'}`}>
              <h3 className={`font-display font-bold text-xl mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
                Send a Message
              </h3>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm mb-4">
                  <CheckCircle size={16} />
                  Message ready! Your email client has opened.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={inputClass('subject')}
                />
                {errors.subject && <p className="text-rose-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium text-sm hover:from-teal-400 hover:to-teal-500 transition-all shadow-lg shadow-teal-500/20"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
