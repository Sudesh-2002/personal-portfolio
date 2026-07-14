import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Reusable Section Title ──────────────────────────────────── */
export function SectionTitle({ label, title, titleAccent }) {
  return (
    <div style={{ marginBottom: '64px' }}>
      <motion.div
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="section-label" style={{ marginBottom: '16px' }}>
        {label}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}
        style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(2rem,5vw,3.2rem)', lineHeight: 1.1 }}>
        {title}{' '}
        {titleAccent && <span className="grad-cyan">{titleAccent}</span>}
      </motion.h2>
    </div>
  );
}

/* ─── CMD Terminal ────────────────────────────────────────────── */
const cmdScript = [
  { type: 'prompt', text: 'whoami' },
  { type: 'output', text: 'sudesh_hansika', color: '#00F5FF' },
  { type: 'gap' },
  { type: 'prompt', text: 'cat profile.txt' },
  { type: 'output', text: 'Name     :  Sudesh Hansika',        color: '#E8EDF2' },
  { type: 'output', text: 'Role     :  Full Stack · AI Engineer', color: '#E8EDF2' },
  { type: 'output', text: 'Year     :  Final Year, SE',         color: '#E8EDF2' },
  { type: 'output', text: 'Based In :  Sri Lanka 🇱🇰',          color: '#E8EDF2' },
  { type: 'output', text: 'Email    :  sudeshhansika@gmail.com', color: '#E8EDF2' },
  { type: 'output', text: 'Status   :  Open for Internships ✦', color: '#00E676' },
  { type: 'gap' },
  { type: 'prompt', text: 'ls currently_building/' },
  { type: 'output', text: 'AI_Code_Review_Agent/    # LLaMA 3.3 70B', color: '#A87AFF' },
  { type: 'output', text: 'Outfit_Perception_AI/    # Computer Vision FYP', color: '#A87AFF' },
  { type: 'output', text: 'Flutter_MoodMusic_App/   # TFLite real-time inference', color: '#A87AFF' },
  { type: 'gap' },
  { type: 'prompt', text: 'echo $MISSION' },
  { type: 'output', text: '"Making AI that ships to prod 🚀"', color: '#FF9500' },
  { type: 'gap' },
  { type: 'cursor' },
];

function useTypewriter(text, startDelay, speed = 38) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(iv);
      }, speed);
      return () => clearInterval(iv);
    }, startDelay);
    return () => clearTimeout(t);
  }, [text, startDelay, speed]);
  return displayed;
}

function CmdLine({ item, startDelay, visible }) {
  const typed = useTypewriter(
    item.type === 'prompt' ? item.text : '',
    item.type === 'prompt' ? startDelay : 0,
    36
  );

  if (!visible) return null;

  if (item.type === 'gap') return <div style={{ height: '10px' }} />;

  if (item.type === 'cursor') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
        <span style={{ color: '#00E676', fontWeight: 700, userSelect: 'none' }}>➜</span>
        <span style={{ color: '#A87AFF' }}>~</span>
        <span style={{ color: 'var(--text-dim)' }}>$</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ color: 'var(--cyan)', fontSize: '14px' }}
        >▋</motion.span>
      </div>
    );
  }

  if (item.type === 'prompt') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{ color: '#00E676', fontWeight: 700, userSelect: 'none' }}>➜</span>
        <span style={{ color: '#A87AFF' }}>~</span>
        <span style={{ color: 'var(--text-dim)' }}>$</span>
        <span style={{ color: '#E8EDF2' }}>{typed}</span>
        {typed.length < item.text.length && (
          <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.6, repeat: Infinity }}
            style={{ color: 'var(--cyan)', fontSize: '13px' }}>▋</motion.span>
        )}
      </div>
    );
  }

  // output line
  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.22 }}
      style={{
        paddingLeft: '28px',
        fontFamily: 'JetBrains Mono',
        fontSize: '12px',
        color: item.color || '#E8EDF2',
        lineHeight: 1.9,
        letterSpacing: '0.01em',
      }}
    >
      {item.text}
    </motion.div>
  );
}

function CmdTerminal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [visibleCount, setVisibleCount] = useState(0);

  /* Build timing: each step reveals after previous finishes */
  const timings = (() => {
    let t = 400;
    return cmdScript.map((item) => {
      const delay = t;
      if (item.type === 'prompt') t += item.text.length * 36 + 220;
      else if (item.type === 'output') t += 140;
      else if (item.type === 'gap') t += 80;
      else t += 300;
      return delay;
    });
  })();

  useEffect(() => {
    if (!inView) return;
    cmdScript.forEach((_, i) => {
      setTimeout(() => setVisibleCount(v => Math.max(v, i + 1)), timings[i]);
    });
  }, [inView]);

  return (
    <div ref={ref} className="terminal" style={{ width: '100%' }}>
      {/* Title bar */}
      <div className="terminal-bar">
        <div className="terminal-dot" style={{ background: '#FF5F57' }} />
        <div className="terminal-dot" style={{ background: '#FEBC2E' }} />
        <div className="terminal-dot" style={{ background: '#28C840' }} />
        <span style={{ marginLeft: '10px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
          sudesh@portfolio:~
        </span>
      </div>
      {/* Body */}
      <div style={{ padding: '22px 24px', minHeight: '420px', fontFamily: 'JetBrains Mono', fontSize: '12.5px', lineHeight: 2 }}>
        {cmdScript.map((item, i) => (
          <CmdLine
            key={i}
            item={item}
            startDelay={timings[i]}
            visible={i < visibleCount}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Profile Avatar ─────────────────────────────────────────── */
function ProfileAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}
    >
      {/* Outer glow ring */}
      <div style={{ position: 'relative', width: '260px', height: '260px' }}>
        {/* Animated orbital ring 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', inset: '-18px',
            borderRadius: '50%',
            border: '1.5px dashed rgba(0,245,255,0.25)',
            borderTopColor: 'var(--cyan)',
          }}
        />
        {/* Animated orbital ring 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', inset: '-32px',
            borderRadius: '50%',
            border: '1px dashed rgba(123,47,255,0.2)',
            borderBottomColor: '#7B2FFF',
          }}
        />
        {/* Glowing dot on orbital 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', inset: '-18px', borderRadius: '50%' }}
        >
          <div style={{
            position: 'absolute', top: '50%', left: '-4px',
            width: '8px', height: '8px', borderRadius: '50%',
            background: 'var(--cyan)',
            boxShadow: '0 0 12px var(--cyan), 0 0 24px var(--cyan)',
            transform: 'translateY(-50%)',
          }} />
        </motion.div>
        {/* Glowing dot on orbital 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', inset: '-32px', borderRadius: '50%' }}
        >
          <div style={{
            position: 'absolute', bottom: '50%', right: '-4px',
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#7B2FFF',
            boxShadow: '0 0 10px #7B2FFF, 0 0 20px #7B2FFF',
            transform: 'translateY(50%)',
          }} />
        </motion.div>

        {/* Avatar container */}
        <div style={{
          position: 'absolute', inset: 0,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(0,245,255,0.12), rgba(123,47,255,0.12))',
          border: '2px solid rgba(0,245,255,0.35)',
          boxShadow: '0 0 40px rgba(0,245,255,0.2), 0 0 80px rgba(0,245,255,0.08), inset 0 0 30px rgba(0,245,255,0.06)',
          overflow: 'hidden',
        }}>
          {/* Scan-line animation */}
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
            style={{
              position: 'absolute', left: 0, right: 0, height: '40px', zIndex: 2,
              background: 'linear-gradient(180deg, transparent, rgba(0,245,255,0.08), transparent)',
              pointerEvents: 'none',
            }}
          />
          {/* Profile image */}
          <img
            src="/profile.png"
            alt="Sudesh"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'brightness(1.05) contrast(1.05)',
            }}
          />
          {/* Bottom gradient overlay */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
            background: 'linear-gradient(0deg, rgba(5,12,26,0.65) 0%, transparent 100%)',
          }} />
        </div>

        {/* Corner accent dots */}
        {[45, 135, 225, 315].map((deg, i) => (
          <motion.div
            key={deg}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: '5px', height: '5px', borderRadius: '50%',
              background: i % 2 === 0 ? 'var(--cyan)' : '#A87AFF',
              boxShadow: `0 0 8px ${i % 2 === 0 ? 'var(--cyan)' : '#A87AFF'}`,
              transform: `rotate(${deg}deg) translateX(136px) translateY(-50%)`,
            }}
          />
        ))}
      </div>

      {/* Name badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          textAlign: 'center',
          background: 'rgba(0,245,255,0.06)',
          border: '1px solid rgba(0,245,255,0.2)',
          borderRadius: '12px',
          padding: '12px 28px',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div style={{ fontFamily: 'Space Grotesk', fontSize: '17px', fontWeight: 700, color: 'var(--text-b)', letterSpacing: '0.04em' }}>Sudesh Hansika</div>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'var(--cyan)', letterSpacing: '0.14em', marginTop: '4px' }}>FULL STACK · AI ENGINEER</div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'rgba(10,22,40,0.5)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle label="// get to know me" title="About" titleAccent="Me" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '56px',
          alignItems: 'center',
        }}>
          {/* COL 1 — Profile Avatar */}
          <ProfileAvatar />

          {/* COL 2 — CMD Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <CmdTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}