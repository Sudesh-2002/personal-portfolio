import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './About';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

const socials = [
  {
    label: 'GitHub',
    href:  'https://github.com/Sudesh-2002',
    color: '#E8EDF2',
    svg: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>,
  },
  {
    label: 'LinkedIn',
    href:  'https://linkedin.com/in/sudesh-hansika',
    color: '#00F5FF',
    svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>,
  },
  {
    label: 'Email',
    href:  'mailto:sudeshhansika@gmail.com',
    color: '#FF9500',
    svg: <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'rgba(10,22,40,0.5)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle label="// say hello" title="Let's Build Something" titleAccent="Intelligent." />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>

          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
          >
            <div>
              <p style={{ fontFamily: 'Inter', fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '8px' }}>
                Open to internships, collaborations, and interesting problems.
              </p>
              <p style={{ fontFamily: 'Inter', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                If you're building something real and need someone who can ship both the AI and the API —
                <span style={{ color: 'var(--cyan)', fontWeight: 600 }}> let's talk.</span>
              </p>
            </div>

            {/* Info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { Icon: Mail,    label: 'Email',    value: 'sudeshhansika@gmail.com', href: 'mailto:sudeshhansika@gmail.com', color: '#00F5FF' },
                { Icon: MapPin,  label: 'Location', value: 'Sri Lanka 🇱🇰',           href: '#',                              color: '#7B2FFF' },
              ].map(({ Icon, label, value, href, color }) => (
                <motion.a key={label} href={href} whileHover={{ x: 6 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px 18px', borderRadius: '14px',
                    background: 'var(--bg-surface)',
                    border: `1px solid ${color}20`,
                    textDecoration: 'none', transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${color}50`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = `${color}20`}
                >
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                    background: `${color}12`, border: `1px solid ${color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={16} color={color} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: 'var(--text-dim)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '3px' }}>{label}</div>
                    <div style={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 600, color: 'var(--text-b)' }}>{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Status badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '12px 18px', borderRadius: '12px',
              background: 'rgba(0,230,118,0.06)', border: '1px solid rgba(0,230,118,0.2)',
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00E676', boxShadow: '0 0 10px #00E676', animation: 'pulse 2s infinite', flexShrink: 0 }} />
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#00E676', letterSpacing: '0.1em' }}>
                AVAILABLE — Actively looking for internships
              </span>
            </div>
          </motion.div>

          {/* RIGHT — social buttons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {/* Big CTA */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid rgba(0,245,255,0.15)',
              borderRadius: '18px',
              padding: '32px',
              display: 'flex', flexDirection: 'column', gap: '20px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #00F5FF, transparent)' }} />

              <div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
                  Reach out directly
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  No contact form. No auto-reply. Just a real email to a real person who'll actually read it.
                </p>
              </div>

              <a href="mailto:sudeshhansika@gmail.com" className="btn-solid-cyan" style={{ justifyContent: 'center', padding: '14px 24px' }}>
                <Mail size={16} /> sudeshhansika@gmail.com
              </a>

              <div style={{ borderTop: '1px solid rgba(0,245,255,0.08)', paddingTop: '20px' }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.14em', marginBottom: '14px' }}>
                  // or find me on
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {socials.map(({ label, href, color, svg }) => (
                    <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.12, y: -4 }} whileTap={{ scale: 0.9 }} title={label}
                      style={{
                        flex: 1, height: '48px', borderRadius: '12px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                        background: `${color}08`,
                        border: `1px solid ${color}20`,
                        color, textDecoration: 'none',
                        fontFamily: 'Inter', fontSize: '12px', fontWeight: 600,
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${color}15`; e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.boxShadow = `0 0 20px ${color}25`; }}
                      onMouseLeave={e => { e.currentTarget.style.background = `${color}08`; e.currentTarget.style.borderColor = `${color}20`; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">{svg}</svg>
                      <span className="hidden md:block">{label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Response time */}
            <div style={{
              padding: '14px 18px', borderRadius: '12px',
              background: 'var(--bg-surface)', border: '1px solid rgba(0,245,255,0.08)',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'var(--text-dim)' }}>response_time:</span>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#00E676', fontWeight: 600 }}>usually &lt; 24h</span>
              <ArrowUpRight size={12} color="var(--text-dim)" style={{ marginLeft: 'auto' }} />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }`}</style>
    </section>
  );
}