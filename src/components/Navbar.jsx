import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Terminal, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'Home',       href: '#home',       num: '01' },
  { label: 'About',      href: '#about',      num: '02' },
  { label: 'Skills',     href: '#skills',     num: '03' },
  { label: 'Projects',   href: '#projects',   num: '04' },
  { label: 'Experience', href: '#experience', num: '05' },
  { label: 'Contact',    href: '#contact',    num: '06' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = navLinks.map(l => l.href.substring(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 150) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ padding: '0' }}
    >
      {/* Top accent line */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #7c3aed, #06b6d4, #7c3aed, transparent)',
        opacity: scrolled ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />

      <div style={{
        background: scrolled
          ? 'rgba(4, 4, 20, 0.97)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124, 58, 237, 0.15)' : 'none',
        transition: 'all 0.4s ease',
        padding: '0 5%',
      }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}>

          {/* ── LOGO ── */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}
          >
            {/* Glowing terminal icon box */}
            <div style={{
              width: '40px', height: '40px',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 20px rgba(124,58,237,0.5), 0 0 40px rgba(6,182,212,0.2)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15), transparent)',
              }} />
              <Terminal size={18} color="#fff" style={{ position: 'relative', zIndex: 1 }} />
            </div>

            <div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '14px', fontWeight: 700,
                color: '#e2e8f0',
                letterSpacing: '0.05em',
                lineHeight: 1.1,
              }}>
                <span style={{ color: '#7c3aed' }}>{'<'}</span>
                Sudesh
                <span style={{ color: '#06b6d4' }}>{' />'}</span>
              </div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '9px',
                color: '#4ade80',
                letterSpacing: '0.15em',
              }}>
                FULLSTACK DEV
              </div>
            </div>
          </motion.a>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex" style={{ alignItems: 'center', gap: '4px' }}>
            {navLinks.map(link => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    position: 'relative',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: '5px',
                    transition: 'all 0.2s ease',
                    background: isActive ? 'rgba(124,58,237,0.12)' : 'transparent',
                    border: isActive ? '1px solid rgba(124,58,237,0.3)' : '1px solid transparent',
                  }}
                >
                  {/* Number prefix */}
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '9px',
                    color: isActive ? '#7c3aed' : '#334155',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    transition: 'color 0.2s',
                  }}>
                    {link.num}.
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#e2e8f0' : '#94a3b8',
                    letterSpacing: '0.03em',
                    transition: 'color 0.2s',
                  }}>
                    {link.label}
                  </span>

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-dot"
                      style={{
                        position: 'absolute', bottom: '-1px', left: '50%',
                        transform: 'translateX(-50%)',
                        width: '3px', height: '3px', borderRadius: '50%',
                        background: '#7c3aed',
                        boxShadow: '0 0 8px rgba(124,58,237,0.8)',
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          {/* ── RIGHT SIDE ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Status indicator */}
            <div className="hidden md:flex" style={{ alignItems: 'center', gap: '6px' }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 8px rgba(74,222,128,0.8)',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px', color: '#4ade80',
                letterSpacing: '0.1em',
              }}>Open to work</span>
            </div>

            {/* Hire Me CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.6), 0 0 60px rgba(6,182,212,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex"
              style={{
                alignItems: 'center', gap: '6px',
                padding: '9px 22px',
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                borderRadius: '8px',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px', fontWeight: 600,
                color: '#fff',
                letterSpacing: '0.04em',
                boxShadow: '0 0 20px rgba(124,58,237,0.3)',
                border: 'none',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent)',
              }} />
              <Zap size={13} style={{ position: 'relative', zIndex: 1 }} />
              <span style={{ position: 'relative', zIndex: 1 }}>Hire Me</span>
            </motion.a>

            {/* Mobile hamburger */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setMenuOpen(o => !o)}
              className="lg:hidden"
              style={{
                width: '40px', height: '40px', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: menuOpen ? 'rgba(124,58,237,0.2)' : 'rgba(124,58,237,0.08)',
                border: '1px solid rgba(124,58,237,0.3)',
                color: '#7c3aed', cursor: 'pointer',
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen
                  ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}><X size={18} /></motion.span>
                  : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}><Menu size={18} /></motion.span>
                }
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              overflow: 'hidden',
              background: 'rgba(4,4,20,0.98)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(124,58,237,0.2)',
              padding: '0 5%',
            }}
          >
            <div style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ x: 8 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '12px 16px', borderRadius: '10px',
                      textDecoration: 'none',
                      background: isActive ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.02)',
                      border: isActive ? '1px solid rgba(124,58,237,0.3)' : '1px solid rgba(255,255,255,0.04)',
                      color: isActive ? '#e2e8f0' : '#64748b',
                    }}
                  >
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '10px', color: isActive ? '#7c3aed' : '#334155',
                      fontWeight: 600, width: '24px',
                    }}>{link.num}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}>
                      {link.label}
                    </span>
                    {isActive && (
                      <div style={{ marginLeft: 'auto', width: '6px', height: '6px', borderRadius: '50%', background: '#7c3aed', boxShadow: '0 0 8px rgba(124,58,237,0.8)' }} />
                    )}
                  </motion.a>
                );
              })}
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  marginTop: '12px', padding: '14px',
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                  borderRadius: '10px', textDecoration: 'none',
                  color: '#fff', fontFamily: 'Inter, sans-serif',
                  fontSize: '14px', fontWeight: 600, letterSpacing: '0.04em',
                  boxShadow: '0 0 20px rgba(124,58,237,0.3)',
                }}
              >
                <Zap size={15} /> Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;