import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, GitFork as Github, Link2 as Linkedin, Share2 as Twitter, CheckCircle } from 'lucide-react';
import { SectionTitle } from './About';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sudeshhansika@gmail.com', href: 'mailto:sudeshhansika@gmail.com', color: '#c9a227' },
    { icon: Phone, label: 'Phone', value: '+94 77 123 4567', href: 'tel:+94771234567', color: '#b0bec5' },
    { icon: MapPin, label: 'Location', value: 'Colombo, Sri Lanka 🇱🇰', href: '#', color: '#e8c547' },
  ];

  const socials = [
    { icon: Github, href: 'https://github.com/Sudesh-2002', label: 'GitHub', color: '#e8edf5' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sudeshhansika', label: 'LinkedIn', color: '#b0bec5' },
    { icon: Twitter, href: 'https://twitter.com/sudeshhansika', label: 'Twitter', color: '#c9a227' },
  ];

  const inputStyle = {
    background: 'rgba(7,16,35,0.8)',
    border: '1px solid rgba(201,162,39,0.15)',
    borderRadius: '12px',
    color: '#e8edf5',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    fontFamily: 'Rajdhani, sans-serif',
    fontWeight: 500,
    fontSize: '15px',
    transition: 'border-color 0.3s',
  };

  return (
    <section id="contact" className="section-padding">
      <div className="w-full">
        <SectionTitle title="Get In Touch" subtitle="// contact me" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Cinzel, serif' }}>
                Let's <span className="gradient-text-gold">collaborate</span>
              </h3>
              <p className="leading-relaxed" style={{ color: '#78909c', fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                I'm currently open to new opportunities and exciting projects. Whether you have
                a project in mind, need a skilled developer, or just want to connect — my inbox
                is always open.
              </p>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 group"
                  style={{ border: '1px solid rgba(201,162,39,0.1)', textDecoration: 'none' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `rgba(${color === '#c9a227' ? '201,162,39' : color === '#b0bec5' ? '176,190,197' : '232,197,71'},0.1)`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase mb-0.5" style={{ color: '#455a64', fontFamily: 'JetBrains Mono, monospace' }}>{label}</p>
                    <p className="text-sm font-semibold" style={{ color: '#b0bec5', fontFamily: 'Rajdhani, sans-serif' }}>{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-[10px] tracking-widest uppercase mb-4" style={{ color: '#455a64', fontFamily: 'JetBrains Mono, monospace' }}>
                // find me on
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(7,16,35,0.8)',
                      border: '1px solid rgba(201,162,39,0.2)',
                      color,
                    }}
                    title={label}
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div
              className="glass-card rounded-2xl p-8"
              style={{ border: '1px solid rgba(201,162,39,0.12)' }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-64 text-center gap-4"
                >
                  <CheckCircle size={48} style={{ color: '#c9a227' }} />
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>Message Sent!</h3>
                  <p style={{ color: '#78909c', fontFamily: 'Rajdhani, sans-serif' }}>I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase mb-2" style={{ color: '#546e7a', fontFamily: 'JetBrains Mono, monospace' }}>Name</label>
                      <input
                        type="text" name="name" value={formData.name} onChange={handleChange} required
                        placeholder="Your name"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'rgba(201,162,39,0.4)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(201,162,39,0.15)'}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase mb-2" style={{ color: '#546e7a', fontFamily: 'JetBrains Mono, monospace' }}>Email</label>
                      <input
                        type="email" name="email" value={formData.email} onChange={handleChange} required
                        placeholder="your@email.com"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'rgba(201,162,39,0.4)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(201,162,39,0.15)'}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase mb-2" style={{ color: '#546e7a', fontFamily: 'JetBrains Mono, monospace' }}>Subject</label>
                    <input
                      type="text" name="subject" value={formData.subject} onChange={handleChange} required
                      placeholder="Project inquiry..."
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(201,162,39,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,162,39,0.15)'}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase mb-2" style={{ color: '#546e7a', fontFamily: 'JetBrains Mono, monospace' }}>Message</label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange} required
                      placeholder="Tell me about your project..."
                      rows={5}
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(201,162,39,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,162,39,0.15)'}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-gold w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm mt-2"
                    style={{ opacity: sending ? 0.7 : 1 }}
                  >
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <><Send size={14} /> Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;