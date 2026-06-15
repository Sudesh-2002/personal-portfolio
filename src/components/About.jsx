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

/* ─── Animated JSON terminal ──────────────────────────────────── */
const jsonLines = [
  { txt: '{',                                                             indent: 0, color: '#E8EDF2' },
  { txt: '"name":',          val: '"Sudesh"',                            indent: 1, color: '#7B2FFF', vc: '#00F5FF' },
  { txt: '"year":',          val: '"Final Year, SE"',                    indent: 1, color: '#7B2FFF', vc: '#FF9500' },
  { txt: '"based_in":',      val: '"Sri Lanka 🇱🇰"',                     indent: 1, color: '#7B2FFF', vc: '#00E676' },
  { txt: '"role":',          val: null,                                   indent: 1, color: '#7B2FFF' },
  { txt: '  "Full Stack Engineer",',                                      indent: 2, color: '#00F5FF' },
  { txt: '  "AI/ML Engineer"',                                            indent: 2, color: '#00F5FF' },
  { txt: '],',                                                            indent: 1, color: '#E8EDF2' },
  { txt: '"currently_building":',  val: null,                            indent: 1, color: '#7B2FFF' },
  { txt: '  "AI Code Review Agent",',                                     indent: 2, color: '#A87AFF' },
  { txt: '  "Outfit Perception AI",',                                     indent: 2, color: '#A87AFF' },
  { txt: '  "Flutter Mood-Music App"',                                    indent: 2, color: '#A87AFF' },
  { txt: '],',                                                            indent: 1, color: '#E8EDF2' },
  { txt: '"obsessed_with":',  val: '"Making AI that ships to prod"',      indent: 1, color: '#7B2FFF', vc: '#FF9500' },
  { txt: '}',                                                             indent: 0, color: '#E8EDF2' },
];

function JsonTerminal() {
  const [visible, setVisible] = useState([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    jsonLines.forEach((_, i) => {
      setTimeout(() => setVisible(v => [...v, i]), i * 90 + 300);
    });
  }, [inView]);

  return (
    <div ref={ref} className="terminal" style={{ width: '100%' }}>
      <div className="terminal-bar">
        <div className="terminal-dot" style={{ background: '#FF5F57' }} />
        <div className="terminal-dot" style={{ background: '#FEBC2E' }} />
        <div className="terminal-dot" style={{ background: '#28C840' }} />
        <span style={{ marginLeft: '10px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
          ~/sudesh.json
        </span>
      </div>
      <div style={{ padding: '22px 24px', minHeight: '340px', fontFamily: 'JetBrains Mono', fontSize: '12.5px', lineHeight: 2 }}>
        {jsonLines.map((line, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -8 }} animate={visible.includes(i) ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.25 }}
            style={{ paddingLeft: `${line.indent * 18}px`, display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ color: line.color }}>{line.txt}</span>
            {line.val && <span style={{ color: line.vc || '#E8EDF2' }}>{line.val}{i < jsonLines.length - 2 ? ',' : ''}</span>}
            {line.val === null && line.txt !== '{' && line.txt !== '}' && <span style={{ color: '#E8EDF2' }}>[</span>}
          </motion.div>
        ))}
        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}
          style={{ fontFamily: 'JetBrains Mono', fontSize: '14px', color: 'var(--cyan)' }}>▋</motion.span>
      </div>
    </div>
  );
}

/* ─── Skill Pills ─────────────────────────────────────────────── */
const skillPills = [
  { label: 'React',          type: 'cyan' },
  { label: 'Flutter',        type: 'violet' },
  { label: 'FastAPI',        type: 'cyan' },
  { label: 'Python',         type: 'cyan' },
  { label: 'TFLite',         type: 'violet' },
  { label: 'PyTorch',        type: 'violet' },
  { label: 'LangChain',      type: 'violet' },
  { label: 'PostgreSQL',     type: 'cyan' },
  { label: 'Supabase',       type: 'cyan' },
  { label: 'Docker',         type: 'amber' },
  { label: 'GitHub Apps',    type: 'amber' },
  { label: 'Computer Vision',type: 'violet' },
  { label: 'Laravel',        type: 'cyan' },
  { label: 'Groq API',       type: 'violet' },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'rgba(10,22,40,0.5)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle label="// get to know me" title="About" titleAccent="Me" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>

          {/* LEFT — JSON terminal */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <JsonTerminal />
          </motion.div>

          {/* RIGHT — bio + pills */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            <div>
              <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.6rem', fontWeight: 700, marginBottom: '16px' }}>
                I build systems that{' '}
                <span style={{ color: 'var(--cyan)', textShadow: '0 0 20px var(--cyan-glow)' }}>think.</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: 'var(--text-muted)', fontFamily: 'Inter', fontSize: '15px', lineHeight: 1.8 }}>
                <p>
                  Final-year Software Engineering undergrad building at the intersection of full-stack engineering and applied AI.
                  I don't just use frameworks — I understand what's happening underneath them.
                </p>
                <p>
                  Currently shipping an{' '}
                  <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>AI Code Review Agent</span> powered by LLaMA 3.3 70B,
                  a{' '}
                  <span style={{ color: '#A87AFF', fontWeight: 600 }}>Computer Vision FYP</span> on outfit social perception,
                  and a{' '}
                  <span style={{ color: 'var(--amber)', fontWeight: 600 }}>Flutter emotion-detection app</span> with TFLite inference.
                </p>
                <p>
                  Open to internships and ideas worth building.
                </p>
              </div>
            </div>

            {/* Info grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {[
                { label: 'Location', value: 'Sri Lanka 🇱🇰' },
                { label: 'Email', value: 'sudeshhansika@gmail.com' },
                { label: 'Status', value: 'Final Year, SE' },
                { label: 'Available', value: 'Internships ✦' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '9px', color: 'var(--text-dim)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 600, color: 'var(--text-b)' }}>{value}</div>
                </div>
              ))}
            </div>

            {/* Skill pills */}
            <div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.14em', marginBottom: '14px' }}>// stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skillPills.map(({ label, type }, i) => (
                  <motion.span key={label}
                    className={`pill${type === 'violet' ? ' pill-violet' : type === 'amber' ? ' pill-amber' : ''}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ scale: 1.1 }}>
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-solid-cyan" style={{ fontSize: '13px', padding: '10px 22px' }}>View Projects</a>
              <a href="#contact" className="btn-cyan" style={{ fontSize: '13px', padding: '10px 22px' }}>Let's Talk</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}