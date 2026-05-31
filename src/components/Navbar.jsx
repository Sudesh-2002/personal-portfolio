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
  const [scrolled,      setScrolled]  = useState(false);
  const [menuOpen,      setMenuOpen]  = useState(false);
  const [activeSection, setActive]    = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = navLinks.map(l => l.href.substring(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(ids[i]); break; }
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
      /* Responsive outer padding: tight on mobile, grows on larger screens */
      className="fixed top-0 left-0 right-0 z-50 flex flex-col
                 px-3 pt-3
                 sm:px-5 sm:pt-4
                 md:px-8 md:pt-4
                 lg:px-10 lg:pt-[18px]
                 xl:px-14 xl:pt-[18px]"
    >
      {/* ── Pill container ── */}
      <div
        className="w-full flex items-center justify-between flex-row-reverse lg:flex-row"
        style={{
          background: scrolled ? 'rgba(5,8,22,0.94)' : 'rgba(5,8,22,0.86)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(99,102,241,0.22)',
          borderRadius: '9999px',
          boxShadow: scrolled
            ? '0 8px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.1)'
            : '0 4px 30px rgba(0,0,0,0.3)',
          transition: 'all 0.4s ease',
          /* Responsive inner padding & height */
          padding: '8px 10px',
          minHeight: '56px',
        }}
      >
        {/* ── S Logo circle ── */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="flex-shrink-0 flex items-center justify-center relative
                     w-10 h-10
                     sm:w-11 sm:h-11
                     lg:w-12 lg:h-12"
          style={{
            borderRadius: '50%',
            background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
            boxShadow: '0 0 0 2px rgba(99,102,241,0.35), 0 0 18px rgba(99,102,241,0.28)',
          }}
        >
          {/* Spinning conic ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg,#6366f1,#06b6d4,#ec4899,#6366f1)',
              padding: '2px',
              borderRadius: '50%',
              opacity: 0.65,
            }}
          />
          <span
            className="relative z-10 font-black text-white
                       text-lg sm:text-xl lg:text-[22px]"
            style={{ fontFamily: 'Space Grotesk', letterSpacing: '-0.03em' }}
          >
            S
          </span>
        </motion.a>

        {/* ── Desktop nav links (lg and up) ── */}
        <nav className="hidden lg:flex items-center
                        gap-3 xl:gap-5 2xl:gap-8">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -1 }}
                className="relative font-semibold rounded-full transition-all duration-200
                           px-3 py-2 text-[13px]
                           xl:px-4 xl:py-2.5 xl:text-[14px]
                           2xl:px-5 2xl:py-2.5 2xl:text-[16px]"
                style={{
                  fontFamily: 'Space Grotesk',
                  color: isActive ? '#ffffff' : 'rgba(148,163,184,0.9)',
                  background: isActive ? 'rgba(99,102,241,0.18)' : 'transparent',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#e0e7ff'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(148,163,184,0.9)'; }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full"
                    style={{ width: '4px', height: '4px', background: '#6366f1', boxShadow: '0 0 8px #6366f1' }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* ── Right: Hire Me + mobile toggle ── */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Hire Me — desktop (lg+) */}
          <motion.a
            href="#contact"
            className="hidden lg:flex items-center gap-1.5 xl:gap-2 font-bold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            style={{
              fontFamily: 'Space Grotesk',
              padding: '8px 18px',
              borderRadius: '9999px',
              background: 'transparent',
              border: '1.5px solid rgba(99,102,241,0.55)',
              color: '#c7d2fe',
              letterSpacing: '0.02em',
              fontSize: '13px',
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
            <Sparkles size={13} />
            <span className="hidden xl:inline">Hire Me</span>
            <span className="inline xl:hidden">Hire</span>
          </motion.a>

          {/* Mobile / tablet hamburger (below lg) */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden flex items-center justify-center text-slate-300
                       w-9 h-9 sm:w-10 sm:h-10"
            style={{
              borderRadius: '50%',
              background: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.3)',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={18} /></motion.span>
                : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={18} /></motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ── Mobile / tablet dropdown (below lg) ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mt-2 rounded-3xl overflow-hidden lg:hidden"
            style={{
              background: 'rgba(5,8,22,0.97)',
              backdropFilter: 'blur(28px)',
              border: '1px solid rgba(99,102,241,0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
            }}
          >
            <div className="flex flex-col p-4 sm:p-5 gap-2">
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
                    className="flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-200
                               sm:px-6 sm:py-4"
                    style={{
                      background: isActive ? 'rgba(99,102,241,0.15)' : 'transparent',
                      border: isActive ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
                      color: isActive ? '#e0e7ff' : '#94a3b8',
                      fontSize: '15px',
                      fontFamily: 'Space Grotesk',
                      fontWeight: 600,
                    }}
                  >
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#6366f1', boxShadow: '0 0 8px #6366f1' }} />
                    )}
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="mt-2 pt-3" style={{ borderTop: '1px solid rgba(99,102,241,0.15)' }}>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-2xl font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                    fontSize: '15px',
                    fontFamily: 'Space Grotesk',
                  }}
                >
                  <Sparkles size={14} />
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
