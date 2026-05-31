import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X, Sparkles, Zap } from 'lucide-react';

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
  const [hoveredLink,   setHovered]   = useState(null);
  const [logoHovered,   setLogoHover] = useState(false);
  const [btnHovered,    setBtnHover]  = useState(false);
  const [clickedLink,   setClicked]   = useState(null);

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

  const handleLinkClick = (label) => {
    setClicked(label);
    setTimeout(() => setClicked(null), 600);
  };

  return (
    <motion.div
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col
                 px-3 pt-3
                 sm:px-5 sm:pt-4
                 md:px-8 md:pt-4
                 lg:px-10 lg:pt-[18px]
                 xl:px-14 xl:pt-[18px]"
    >
      {/* ── Pill container ── */}
      <motion.div
        className="w-full flex items-center justify-between flex-row-reverse lg:flex-row"
        animate={{
          boxShadow: scrolled
            ? '0 8px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.15), 0 0 30px rgba(99,102,241,0.08)'
            : '0 4px 30px rgba(0,0,0,0.3)',
        }}
        transition={{ duration: 0.4 }}
        style={{
          background: scrolled ? 'rgba(5,8,22,0.94)' : 'rgba(5,8,22,0.86)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: scrolled ? '1px solid rgba(99,102,241,0.3)' : '1px solid rgba(99,102,241,0.22)',
          borderRadius: '9999px',
          transition: 'background 0.4s ease, border-color 0.4s ease',
          padding: '8px 10px',
          minHeight: '56px',
        }}
      >
        {/* ── S Logo circle ── */}
        <motion.a
          href="#home"
          onHoverStart={() => setLogoHover(true)}
          onHoverEnd={() => setLogoHover(false)}
          whileHover={{ scale: 1.12, rotate: [0, -8, 8, 0] }}
          whileTap={{ scale: 0.88, rotate: -15 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="flex-shrink-0 flex items-center justify-center relative
                     w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12"
          style={{ borderRadius: '50%' }}
        >
          {/* Gradient base */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: logoHovered
                ? 'linear-gradient(135deg,#06b6d4,#6366f1,#ec4899)'
                : 'linear-gradient(135deg,#6366f1,#8b5cf6)',
              transition: 'background 0.4s ease',
            }}
          />
          {/* Spinning conic ring — speeds up on hover */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: logoHovered ? 1.5 : 6, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg,#6366f1,#06b6d4,#ec4899,#6366f1)',
              padding: '2.5px',
              borderRadius: '50%',
              opacity: logoHovered ? 1 : 0.65,
              transition: 'opacity 0.3s ease',
            }}
          />
          {/* Inner fill to make it look like a bordered ring */}
          <div
            className="absolute rounded-full"
            style={{
              inset: '2.5px',
              background: logoHovered
                ? 'linear-gradient(135deg,#06b6d4,#6366f1)'
                : 'linear-gradient(135deg,#6366f1,#8b5cf6)',
              transition: 'background 0.4s ease',
            }}
          />
          {/* Pulse glow on hover */}
          <AnimatePresence>
            {logoHovered && (
              <motion.div
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="absolute inset-0 rounded-full"
                style={{ background: 'rgba(99,102,241,0.4)' }}
              />
            )}
          </AnimatePresence>
          <span
            className="relative z-10 font-black text-white
                       text-lg sm:text-xl lg:text-[22px]"
            style={{ fontFamily: 'Space Grotesk', letterSpacing: '-0.03em' }}
          >
            S
          </span>
        </motion.a>

        {/* ── Desktop nav links (lg and up) ── */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5 2xl:gap-7">
          {navLinks.map(link => {
            const isActive   = activeSection === link.href.substring(1);
            const isHovered  = hoveredLink === link.label;
            const isClicked  = clickedLink === link.label;

            return (
              <motion.a
                key={link.label}
                href={link.href}
                onHoverStart={() => setHovered(link.label)}
                onHoverEnd={() => setHovered(null)}
                onClick={() => handleLinkClick(link.label)}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.91, y: 1 }}
                transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                className="relative font-semibold rounded-full cursor-pointer
                           px-5 py-2.5 text-[14px]
                           xl:px-6 xl:py-3 xl:text-[15px]
                           2xl:px-7 2xl:py-3 2xl:text-[16px]"
                style={{
                  fontFamily: 'Space Grotesk',
                  color: isActive ? '#ffffff' : isHovered ? '#e0e7ff' : 'rgba(148,163,184,0.85)',
                  letterSpacing: isHovered || isActive ? '0.04em' : '0.01em',
                  textShadow: isActive
                    ? '0 0 20px rgba(99,102,241,0.8), 0 0 40px rgba(99,102,241,0.4)'
                    : isHovered
                    ? '0 0 14px rgba(99,102,241,0.5)'
                    : 'none',
                  transition: 'color 0.25s, letter-spacing 0.3s, text-shadow 0.3s',
                  outline: 'none',
                }}
              >
                {/* Hover / active background pill */}
                <AnimatePresence>
                  {(isHovered || isActive) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      style={{
                        background: isActive
                          ? 'linear-gradient(135deg, rgba(99,102,241,0.28), rgba(139,92,246,0.18))'
                          : 'rgba(99,102,241,0.12)',
                        border: isActive
                          ? '1px solid rgba(99,102,241,0.5)'
                          : '1px solid rgba(99,102,241,0.2)',
                        boxShadow: isActive ? '0 0 16px rgba(99,102,241,0.25)' : 'none',
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Click ripple */}
                <AnimatePresence>
                  {isClicked && (
                    <motion.span
                      className="absolute inset-0 rounded-full"
                      initial={{ scale: 0.6, opacity: 0.6 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      style={{ background: 'rgba(99,102,241,0.35)', pointerEvents: 'none' }}
                    />
                  )}
                </AnimatePresence>

                <span className="relative z-10">{link.label}</span>

                {/* Active glowing dot indicator */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="active-indicator"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      style={{
                        width: '5px', height: '5px',
                        background: '#6366f1',
                        boxShadow: '0 0 8px 2px rgba(99,102,241,0.8)',
                      }}
                    />
                  )}
                </AnimatePresence>
              </motion.a>
            );
          })}
        </nav>

        {/* ── Right: Hire Me + mobile toggle ── */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Hire Me — desktop (lg+) */}
          <motion.a
            href="#contact"
            className="hidden lg:flex items-center gap-1.5 xl:gap-2 font-bold relative overflow-hidden"
            onHoverStart={() => setBtnHover(true)}
            onHoverEnd={() => setBtnHover(false)}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            style={{
              fontFamily: 'Space Grotesk',
              padding: '9px 20px',
              borderRadius: '9999px',
              background: btnHovered
                ? 'linear-gradient(135deg,#6366f1,#8b5cf6)'
                : 'transparent',
              border: '1.5px solid rgba(99,102,241,0.65)',
              color: btnHovered ? '#ffffff' : '#c7d2fe',
              letterSpacing: '0.02em',
              fontSize: '13px',
              boxShadow: btnHovered
                ? '0 0 24px rgba(99,102,241,0.5), inset 0 0 20px rgba(255,255,255,0.05)'
                : 'none',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Shimmer on hover */}
            <AnimatePresence>
              {btnHovered && (
                <motion.span
                  className="absolute inset-0"
                  initial={{ x: '-100%', opacity: 0.6 }}
                  animate={{ x: '200%', opacity: 0 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  style={{
                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />
              )}
            </AnimatePresence>
            <motion.span
              animate={{ rotate: btnHovered ? [0, 15, -15, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={13} />
            </motion.span>
            <span className="hidden xl:inline relative z-10">Hire Me</span>
            <span className="inline xl:hidden relative z-10">Hire</span>
          </motion.a>

          {/* Mobile / tablet hamburger (below lg) */}
          <motion.button
            whileTap={{ scale: 0.85, rotate: 90 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden flex items-center justify-center text-slate-300
                       w-9 h-9 sm:w-10 sm:h-10"
            style={{
              borderRadius: '50%',
              background: menuOpen ? 'rgba(99,102,241,0.25)' : 'rgba(99,102,241,0.12)',
              border: menuOpen ? '1px solid rgba(99,102,241,0.6)' : '1px solid rgba(99,102,241,0.3)',
              transition: 'all 0.3s ease',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen
                ? <motion.span key="x"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}>
                    <X size={18} />
                  </motion.span>
                : <motion.span key="m"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}>
                    <Menu size={18} />
                  </motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* ── Mobile / tablet dropdown (below lg) ── */}
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
              background: 'rgba(5,8,22,0.97)',
              backdropFilter: 'blur(28px)',
              border: '1px solid rgba(99,102,241,0.22)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.08)',
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
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, type: 'spring', stiffness: 300, damping: 25 }}
                    whileHover={{ x: 6, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 px-5 py-4 rounded-2xl
                               sm:px-6 sm:py-4"
                    style={{
                      background: isActive ? 'rgba(99,102,241,0.18)' : 'rgba(255,255,255,0.02)',
                      border: isActive ? '1px solid rgba(99,102,241,0.4)' : '1px solid rgba(255,255,255,0.04)',
                      color: isActive ? '#e0e7ff' : '#94a3b8',
                      fontSize: '15px',
                      fontFamily: 'Space Grotesk',
                      fontWeight: 600,
                      transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                    }}
                  >
                    {/* Active bar indicator */}
                    <motion.div
                      animate={{ width: isActive ? '4px' : '2px', opacity: isActive ? 1 : 0.2 }}
                      className="rounded-full flex-shrink-0 h-5"
                      style={{
                        background: isActive
                          ? 'linear-gradient(180deg,#6366f1,#06b6d4)'
                          : 'rgba(99,102,241,0.3)',
                        boxShadow: isActive ? '0 0 8px rgba(99,102,241,0.8)' : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    />
                    {link.label}
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full"
                        style={{
                          background: 'rgba(99,102,241,0.2)',
                          border: '1px solid rgba(99,102,241,0.4)',
                          color: '#818cf8',
                        }}
                      >
                        current
                      </motion.span>
                    )}
                  </motion.a>
                );
              })}

              <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(99,102,241,0.15)' }}>
                <motion.a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-white relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                    fontSize: '15px',
                    fontFamily: 'Space Grotesk',
                    boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
                  }}
                >
                  <motion.span
                    className="absolute inset-0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.6 }}
                    style={{
                      background: 'linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.2) 50%,transparent 70%)',
                    }}
                  />
                  <Sparkles size={14} className="relative z-10" />
                  <span className="relative z-10">Hire Me</span>
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
