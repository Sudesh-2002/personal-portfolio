import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Crown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActive] = useState('home');

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
      className="fixed top-0 left-0 right-0 z-50 flex flex-col px-3 pt-3 sm:px-5 sm:pt-4 md:px-8 md:pt-4 lg:px-10 lg:pt-[18px]"
    >
      <motion.div
        className="w-full flex items-center justify-between"
        animate={{
          boxShadow: scrolled
            ? '0 8px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,162,39,0.2), 0 0 30px rgba(201,162,39,0.06)'
            : '0 4px 30px rgba(0,0,0,0.4)',
        }}
        transition={{ duration: 0.4 }}
        style={{
          background: scrolled ? 'rgba(3,7,18,0.96)' : 'rgba(3,7,18,0.88)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: scrolled ? '1px solid rgba(201,162,39,0.3)' : '1px solid rgba(201,162,39,0.15)',
          borderRadius: '9999px',
          padding: '8px 10px',
          minHeight: '56px',
        }}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex-shrink-0 flex items-center gap-2"
        >
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center relative"
            style={{
              background: 'linear-gradient(135deg, #c9a227, #8b6914)',
              boxShadow: '0 0 20px rgba(201,162,39,0.4)',
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #e8c547, #c9a227, #8b6914, #c9a227, #e8c547)',
                padding: '2px', borderRadius: '50%',
              }}
            />
            <div
              className="absolute rounded-full flex items-center justify-center"
              style={{ inset: '2px', background: '#030712' }}
            >
              <span style={{ fontFamily: 'Cinzel, serif', fontWeight: 900, fontSize: '18px', color: '#c9a227' }}>S</span>
            </div>
          </div>
          <span className="hidden sm:block" style={{ fontFamily: 'Cinzel, serif', color: '#c9a227', fontWeight: 700, fontSize: '15px', letterSpacing: '0.08em' }}>
            SUDESH
          </span>
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-5 py-2.5 text-sm font-semibold rounded-full nav-link"
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: isActive ? '#e8c547' : 'rgba(176,190,197,0.8)',
                  transition: 'color 0.25s',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'rgba(201,162,39,0.1)',
                      border: '1px solid rgba(201,162,39,0.3)',
                    }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                    style={{ background: '#c9a227', boxShadow: '0 0 8px rgba(201,162,39,0.8)' }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm btn-gold"
          >
            <Crown size={13} />
            Hire Me
          </motion.a>

          <motion.button
            whileTap={{ scale: 0.85, rotate: 90 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full"
            style={{
              background: menuOpen ? 'rgba(201,162,39,0.2)' : 'rgba(201,162,39,0.08)',
              border: menuOpen ? '1px solid rgba(201,162,39,0.5)' : '1px solid rgba(201,162,39,0.2)',
              color: '#c9a227',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={18} /></motion.span>
                : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={18} /></motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="mt-2 rounded-3xl overflow-hidden lg:hidden"
            style={{
              background: 'rgba(3,7,18,0.97)',
              backdropFilter: 'blur(28px)',
              border: '1px solid rgba(201,162,39,0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
            }}
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 px-5 py-4 rounded-2xl font-semibold"
                    style={{
                      background: isActive ? 'rgba(201,162,39,0.1)' : 'rgba(255,255,255,0.02)',
                      border: isActive ? '1px solid rgba(201,162,39,0.35)' : '1px solid rgba(255,255,255,0.04)',
                      color: isActive ? '#e8c547' : '#90a4ae',
                      fontFamily: 'Rajdhani, sans-serif',
                      letterSpacing: '0.06em',
                    }}
                  >
                    <div
                      className="w-1 h-5 rounded-full flex-shrink-0"
                      style={{ background: isActive ? '#c9a227' : 'rgba(201,162,39,0.2)', boxShadow: isActive ? '0 0 8px rgba(201,162,39,0.8)' : 'none' }}
                    />
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(201,162,39,0.12)' }}>
                <motion.a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl btn-gold text-sm"
                >
                  <Crown size={14} /> Hire Me
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;