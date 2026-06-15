import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home',       href: '#home',       num: '01' },
  { label: 'About',      href: '#about',      num: '02' },
  { label: 'Skills',     href: '#skills',     num: '03' },
  { label: 'Projects',   href: '#projects',   num: '04' },
  { label: 'Experience', href: '#experience', num: '05' },
  { label: 'Contact',    href: '#contact',    num: '06' },
];

/* Breakpoint at which we switch to mobile nav */
const MOBILE_BREAKPOINT = 1024;

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('home');
  const [isMobile,  setIsMobile]  = useState(false);

  /* ── Scroll tracker ─────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = navLinks.map(l => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 160) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Responsive tracker ──────────────────────────────────── */
  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false); // close mobile menu when resizing to desktop
    };
    check(); // run immediately
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      {/* Top accent line */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #00F5FF, #7B2FFF, transparent)',
        opacity: scrolled ? 1 : 0, transition: 'opacity 0.4s',
      }} />

      <div style={{
        background: scrolled ? 'rgba(5,10,15,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,245,255,0.1)' : 'none',
        transition: 'all 0.4s ease',
        padding: '0 5%',
      }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>

          {/* ── LOGO ── */}
          <motion.a href="#home" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #00F5FF, #7B2FFF)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 20px rgba(0,245,255,0.4)',
            }}>
              <Terminal size={17} color="#050A0F" />
            </div>
            <div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '15px', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
                <span style={{ color: '#00F5FF' }}>&lt;</span>Sudesh<span style={{ color: '#7B2FFF' }}> /&gt;</span>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: '#00E676', letterSpacing: '0.14em' }}>
                SE · AI · FULLSTACK
              </div>
            </div>
          </motion.a>

          {/* ── DESKTOP NAV (shown when !isMobile) ── */}
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {navLinks.map(link => {
                const isActive = active === link.href.slice(1);
                return (
                  <a key={link.label} href={link.href}
                    className={`nav-link${isActive ? ' active' : ''}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{
                      fontFamily: 'JetBrains Mono', fontSize: '9px',
                      color: isActive ? '#00F5FF' : 'var(--text-dim)', fontWeight: 600,
                    }}>{link.num}.</span>
                    {link.label}
                  </a>
                );
              })}
            </nav>
          )}

          {/* ── RIGHT SIDE ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

            {/* Open-to-work badge — always visible */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00E676', boxShadow: '0 0 8px #00E676', animation: 'pulse 2s infinite' }} />
              {/* Label hidden on very small screens */}
              {!isMobile && (
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#00E676', letterSpacing: '0.1em' }}>
                  Open to work
                </span>
              )}
            </div>

            {/* Hire Me CTA — desktop only */}
            {!isMobile && (
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="btn-solid-cyan"
                style={{ padding: '8px 20px', borderRadius: '8px', fontSize: '13px' }}>
                <Zap size={13} /> Hire Me
              </motion.a>
            )}

            {/* ── HAMBURGER — mobile only ── */}
            {isMobile && (
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle navigation menu"
                style={{
                  width: '38px', height: '38px', borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: menuOpen ? 'rgba(0,245,255,0.15)' : 'rgba(0,245,255,0.06)',
                  border: '1px solid rgba(0,245,255,0.3)',
                  color: '#00F5FF', cursor: 'pointer',
                }}>
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen
                    ? <motion.span key="x"
                        initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.16 }}>
                        <X size={17} />
                      </motion.span>
                    : <motion.span key="m"
                        initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.16 }}>
                        <Menu size={17} />
                      </motion.span>
                  }
                </AnimatePresence>
              </motion.button>
            )}
          </div>
        </nav>
      </div>

      {/* ── MOBILE DROPDOWN — only renders when isMobile && menuOpen ── */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              overflow: 'hidden',
              background: 'rgba(5,10,15,0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0,245,255,0.1)',
              padding: '0 5%',
            }}
          >
            <div style={{ padding: '14px 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link, i) => {
                const isActive = active === link.href.slice(1);
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '11px 14px', borderRadius: '10px',
                      textDecoration: 'none',
                      background: isActive ? 'rgba(0,245,255,0.07)' : 'transparent',
                      border: isActive ? '1px solid rgba(0,245,255,0.2)' : '1px solid transparent',
                      color: isActive ? '#00F5FF' : '#5A6A7A',
                      fontFamily: 'Inter', fontSize: '14px', fontWeight: 500,
                    }}
                  >
                    <span style={{
                      fontFamily: 'JetBrains Mono', fontSize: '10px',
                      color: isActive ? '#00F5FF' : 'var(--text-dim)', width: '22px',
                    }}>{link.num}</span>
                    {link.label}
                    {isActive && (
                      <div style={{ marginLeft: 'auto', width: '5px', height: '5px', borderRadius: '50%', background: '#00F5FF', boxShadow: '0 0 8px #00F5FF' }} />
                    )}
                  </motion.a>
                );
              })}

              {/* Hire Me in mobile menu */}
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="btn-solid-cyan"
                style={{ marginTop: '10px', justifyContent: 'center', padding: '13px' }}
              >
                <Zap size={14} /> Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }`}</style>
    </motion.header>
  );
}