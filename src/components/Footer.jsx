import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Heart } from 'lucide-react';

const links = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      borderTop: '1px solid rgba(0,245,255,0.08)',
      background: 'rgba(5,10,15,0.9)',
      padding: '48px 5%',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.4), rgba(123,47,255,0.4), transparent)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'center' }}>

        {/* Logo */}
        <motion.a href="#home" whileHover={{ scale: 1.04 }} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: 'linear-gradient(135deg, #00F5FF, #7B2FFF)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(0,245,255,0.3)' }}>
            <Terminal size={16} color="#050A0F" />
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '14px', fontWeight: 700, color: '#fff' }}>
              <span style={{ color: '#00F5FF' }}>&lt;</span>Sudesh<span style={{ color: '#7B2FFF' }}> /&gt;</span>
            </div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#00E676', letterSpacing: '0.14em' }}>AI · FULLSTACK</div>
          </div>
        </motion.a>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {links.map(({ label, href }) => (
            <a key={label} href={href} style={{
              padding: '6px 14px', borderRadius: '8px',
              fontFamily: 'Inter', fontSize: '13px', fontWeight: 500,
              color: 'var(--text-muted)', textDecoration: 'none',
              transition: 'color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.target.style.color = 'var(--cyan)'; e.target.style.background = 'rgba(0,245,255,0.06)'; }}
              onMouseLeave={e => { e.target.style.color = 'var(--text-muted)'; e.target.style.background = 'transparent'; }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.1), transparent)' }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
            © {new Date().getFullYear()} Sudesh Hansika. Built with{' '}
            <Heart size={10} style={{ display: 'inline', color: '#7B2FFF', verticalAlign: 'middle' }} />{' '}
            using React + Framer Motion.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00E676', boxShadow: '0 0 8px #00E676' }} />
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#00E676', letterSpacing: '0.1em' }}>Open to work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}