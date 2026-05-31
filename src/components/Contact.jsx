import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, GitFork, Link2, Share2, CheckCircle } from 'lucide-react';
import { SectionTitle } from './About';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sudeshhansika@gmail.com',
      href: 'mailto:sudeshhansika@gmail.com',
      color: '#6366f1',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 77 123 4567',
      href: 'tel:+94771234567',
      color: '#06b6d4',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Colombo, Sri Lanka 🇱🇰',
      href: '#',
      color: '#8b5cf6',
    },
  ];

  const socials = [
    { icon: GitFork, href: 'https://github.com/sudeshhansika', label: 'GitHub', color: '#f0f4ff' },
    { icon: Link2, href: 'https://linkedin.com/in/sudeshhansika', label: 'LinkedIn', color: '#0a66c2' },
    { icon: Share2, href: 'https://twitter.com/sudeshhansika', label: 'Twitter', color: '#1da1f2' },
  ];

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
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's work <span className="gradient-text">together</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I'm currently open to new opportunities and exciting projects. Whether you have
                a question, a project proposal, or just want to say hi — my inbox is always open!
                I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 group"
                  style={{ border: '1px solid rgba(99,102,241,0.1)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-white font-medium text-sm">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-slate-500 text-sm mb-4">Find me on social media</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center glass-card"
                    style={{ border: '1px solid rgba(99,102,241,0.2)' }}
                    title={label}
                  >
                    <Icon size={20} className="text-slate-400 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className="glass-card rounded-2xl p-6"
              style={{ border: '1px solid rgba(74, 222, 128, 0.2)' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold">Available for hire</span>
              </div>
              <p className="text-slate-400 text-sm">
                I'm currently available for freelance projects and full-time positions.
                Response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 flex flex-col gap-5"
              style={{ border: '1px solid rgba(99,102,241,0.15)' }}
            >
              <h3 className="text-xl font-bold text-white">Send a Message</h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none transition-all duration-300 text-sm"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(99,102,241,0.2)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(99,102,241,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(99,102,241,0.2)'}
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none transition-all duration-300 text-sm"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(99,102,241,0.2)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(99,102,241,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(99,102,241,0.2)'}
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 text-sm mb-2 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none transition-all duration-300 text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(99,102,241,0.2)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(99,102,241,0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(99,102,241,0.2)'}
                />
              </div>

              <div>
                <label className="text-slate-400 text-sm mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none transition-all duration-300 text-sm resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(99,102,241,0.2)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(99,102,241,0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(99,102,241,0.2)'}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
