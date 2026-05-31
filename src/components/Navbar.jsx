import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home', number: '01' },
  { label: 'About', href: '#about', number: '02' },
  { label: 'Skills', href: '#skills', number: '03' },
  { label: 'Projects', href: '#projects', number: '04' },
  { label: 'Experience', href: '#experience', number: '05' },
  { label: 'Contact', href: '#contact', number: '06' },
];

/* Pill that slides under the active nav link */
const ActivePill = ({ activeIndex, refs }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const el = refs.current[activeIndex];
    if (el) {
      setStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeIndex]);

  return (
    <motion.div
      layout
      animate={style}
      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
      className="absolute bottom-0 h-0.5 rounded-full"
      style={{
        background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
        boxShadow: '0 0 12px rgba(99,102,241,0.8)',
      }}
    />
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActive] = useState('home');
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const linkRefs = useRef([]);

  /* scroll-progress for the thin top bar */
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const activeIndex = navLinks.findIndex(l => l.href.substring(1) === activeSection);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
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
    <>
      {/* ── Scroll-progress bar at very top ── */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[2px] z-[60]"
        // gradient from indigo → cyan → pink
        css={{ background: 'linear-gradient(90deg,#6366f1,#06b6d4,#ec4899)' }}
      >
        <div
          className="w-full h-full"
          style={{ background: 'linear-gradient(90deg,#6366f1,#06b6d4,#ec4899)' }}
        />
      </motion.div>

      {/* ── Main nav ── */}
      <motion.nav
        initial={{ y: -110, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-3"
      >
        <div
          className={`
            max-w-6xl mx-auto rounded-2xl transition-all duration-500
            ${scrolled
              ? 'py-3 px-6 shadow-2xl'
              : 'py-4 px-6'
            }
          `}
          style={scrolled ? {
            background: 'rgba(5,8,22,0.75)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(99,102,241,0.18)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.08)',
          } : {
            background: 'transparent',
          }}
        >
          <div className="flex items-center justify-between">

            {/* ── Desktop links (centered / left) ── */}
            <div className="hidden md:flex items-center gap-2 relative">
              <div className="relative flex items-center gap-2">
                <div className="relative">
                  <ActivePill activeIndex={activeIndex} refs={linkRefs} />
                </div>

                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.substring(1);
                  const isHovered = hoveredIdx === i;

                  return (
                    <motion.a
                      key={link.label}
                      ref={el => (linkRefs.current[i] = el)}
                      href={link.href}
                      onMouseEnter={() => setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      whileHover={{ y: -1 }}
                      className="relative flex flex-col items-center px-5 py-2.5 rounded-lg transition-all duration-200 group"
                      style={{
                        background: isHovered
                          ? 'rgba(99,102,241,0.08)'
                          : 'transparent',
                      }}
                    >
                      {/* Number */}
                      <span
                        className="text-[10px] font-mono leading-none mb-0.5 transition-colors duration-200"
                        style={{ color: isActive ? '#6366f1' : '#334155' }}
                      >
                        {link.number}
                      </span>
                      {/* Label */}
                      <span
                        className="text-[16px] font-semibold transition-colors duration-200"
                        style={{
                          color: isActive ? '#e0e7ff' : '#94a3b8',
                          fontFamily: 'Space Grotesk',
                        }}
                      >
                        {link.label}
                      </span>

                      {/* Glow dot on hover */}
                      <AnimatePresence>
                        {isHovered && !isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                            style={{ background: '#6366f1', boxShadow: '0 0 6px #6366f1' }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* ── CTA + mobile toggle (right side) ── */}
            <div className="flex items-center gap-4">
              {/* Hire Me button — desktop */}
              <motion.a
                href="#contact"
                className="hidden md:flex items-center gap-2 px-7 py-3 rounded-xl text-base font-bold text-white relative overflow-hidden group"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                  boxShadow: '0 0 0 0 rgba(99,102,241,0)',
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.55), 0 0 48px rgba(99,102,241,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 0 0 0 rgba(99,102,241,0)';
                }}
              >
                {/* Shimmer sweep */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.18) 50%,transparent 60%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{ backgroundPosition: ['-200% 0', '200% 0'] }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.5 }}
                />
                <Sparkles size={16} className="relative z-10" />
                <span className="relative z-10">Hire Me</span>
              </motion.a>

              {/* Mobile toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(o => !o)}
                className="md:hidden w-11 h-11 rounded-xl flex items-center justify-center text-slate-300"
                style={{
                  background: 'rgba(99,102,241,0.12)',
                  border: '1px solid rgba(99,102,241,0.25)',
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen
                    ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={22} /></motion.span>
                    : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={22} /></motion.span>
                  }
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(5,8,22,0.92)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(99,102,241,0.18)',
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
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200"
                      style={{
                        background: isActive ? 'rgba(99,102,241,0.15)' : 'transparent',
                        border: isActive ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
                      }}
                    >
                      <span className="text-[10px] font-mono text-indigo-500">{link.number}</span>
                      <span
                        className="font-semibold text-sm"
                        style={{ color: isActive ? '#e0e7ff' : '#94a3b8', fontFamily: 'Space Grotesk' }}
                      >
                        {link.label}
                      </span>
                      {isActive && (
                        <div
                          className="ml-auto w-1.5 h-1.5 rounded-full"
                          style={{ background: '#6366f1', boxShadow: '0 0 8px #6366f1' }}
                        />
                      )}
                    </motion.a>
                  );
                })}

                <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(99,102,241,0.15)' }}>
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white"
                    style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
                  >
                    <Sparkles size={14} />
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
