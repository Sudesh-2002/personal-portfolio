import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeSection, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = navLinks.map(l => l.href.substring(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{ padding: '18px 40px' }}
    >
      {/* ── Pill container ── */}
      <div
        className="w-full flex items-center justify-between"
        style={{
          background: scrolled
            ? 'rgba(5, 8, 22, 0.92)'
            : 'rgba(5, 8, 22, 0.85)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(99,102,241,0.22)',
          borderRadius: '9999px',
          padding: '10px 14px 10px 14px',
          boxShadow: scrolled
            ? '0 8px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.1)'
            : '0 4px 30px rgba(0,0,0,0.35)',
          transition: 'all 0.4s ease',
          minHeight: '68px',
        }}
      >
        {/* ── S Logo circle ── */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="flex-shrink-0 flex items-center justify-center relative"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            boxShadow: '0 0 0 2px rgba(99,102,241,0.35), 0 0 20px rgba(99,102,241,0.3)',
          }}
        >
          {/* Spinning border ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #6366f1, #06b6d4, #ec4899, #6366f1)',
              padding: '2px',
              borderRadius: '50%',
              opacity: 0.7,
            }}
          />
          <span
            className="relative z-10 font-black text-white"
            style={{ fontSize: '22px', fontFamily: 'Space Grotesk', letterSpacing: '-0.03em' }}
          >
            S
          </span>
        </motion.a>

        {/* ── Desktop nav links ── */}
        <nav className="hidden md:flex items-center" style={{ gap: '6px' }}>
          {navLinks.map(link => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -1 }}
                className="relative px-5 py-2.5 rounded-full font-semibold transition-all duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Space Grotesk',
                  color: isActive ? '#ffffff' : 'rgba(148,163,184,0.9)',
                  background: isActive ? 'rgba(99,102,241,0.18)' : 'transparent',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.color = '#e0e7ff';
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.color = 'rgba(148,163,184,0.9)';
                }}
              >
                {link.label}
                {/* Active underline dot */}
                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded-full"
                    style={{
                      width: '4px',
                      height: '4px',
                      background: '#6366f1',
                      boxShadow: '0 0 8px #6366f1',
                    }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* ── Hire Me pill button ── */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            className="hidden md:flex items-center gap-2 font-bold text-white relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            style={{
              fontSize: '15px',
              fontFamily: 'Space Grotesk',
              padding: '10px 24px',
              borderRadius: '9999px',
              background: 'transparent',
              border: '1.5px solid rgba(99,102,241,0.55)',
              color: '#c7d2fe',
              letterSpacing: '0.02em',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.18)';
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.9)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.55)';
              e.currentTarget.style.color = '#c7d2fe';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Sparkles size={15} />
            Hire Me
          </motion.a>

          {/* Mobile toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex items-center justify-center text-slate-300"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.3)',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={20} /></motion.span>
                : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={20} /></motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="absolute top-full mt-2 left-10 right-10 rounded-3xl overflow-hidden md:hidden"
            style={{
              background: 'rgba(5,8,22,0.96)',
              backdropFilter: 'blur(28px)',
              border: '1px solid rgba(99,102,241,0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
            }}
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-200"
                    style={{
                      background: isActive ? 'rgba(99,102,241,0.15)' : 'transparent',
                      border: isActive ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
                      color: isActive ? '#e0e7ff' : '#94a3b8',
                      fontSize: '16px',
                      fontFamily: 'Space Grotesk',
                      fontWeight: 600,
                    }}
                  >
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#6366f1', boxShadow: '0 0 8px #6366f1' }} />
                    )}
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(99,102,241,0.15)' }}>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                    fontSize: '15px',
                    fontFamily: 'Space Grotesk',
                  }}
                >
                  <Sparkles size={15} />
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
