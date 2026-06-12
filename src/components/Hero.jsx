import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  Mail, Download, ArrowRight,
  Code2, Server, Database, Globe, Layers, Cpu,
  ChevronRight, Terminal, Braces, GitBranch
} from 'lucide-react';

// ── animated background canvas (grid + glow orbs) ──────────────────────────
function HeroBg() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);

    // grid dots
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const spacing = 48;
      ctx.fillStyle = 'rgba(124,58,237,0.12)';
      for (let x = 0; x < w; x += spacing) {
        for (let y = 0; y < h; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    draw();
    window.addEventListener('resize', draw);
    return () => { window.removeEventListener('resize', resize); window.removeEventListener('resize', draw); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />;
}

// ── Tech pill ───────────────────────────────────────────────────────────────
const skills = [
  { label: 'React',       color: '#61dafb', Icon: Code2 },
  { label: 'Node.js',     color: '#68a063', Icon: Server },
  { label: 'TypeScript',  color: '#3178c6', Icon: Braces },
  { label: 'MongoDB',     color: '#47a248', Icon: Database },
  { label: 'PostgreSQL',  color: '#336791', Icon: Database },
  { label: 'Next.js',     color: '#e2e8f0', Icon: Globe },
  { label: 'Docker',      color: '#2496ed', Icon: Layers },
  { label: 'AWS',         color: '#ff9900', Icon: Cpu },
  { label: 'GraphQL',     color: '#e535ab', Icon: GitBranch },
];

// ── Terminal block lines ────────────────────────────────────────────────────
const termLines = [
  { txt: '$ whoami',                    color: '#4ade80', delay: 0 },
  { txt: 'sudesh_hansika',              color: '#e2e8f0', delay: 0.4 },
  { txt: '$ cat role.txt',             color: '#4ade80', delay: 0.9 },
  { txt: 'Full Stack Engineer',         color: '#7c3aed', delay: 1.3 },
  { txt: '$ git log --oneline -1',     color: '#4ade80', delay: 1.8 },
  { txt: 'a1b2c3 ✨ shipping magic',   color: '#06b6d4', delay: 2.2 },
  { txt: '$ _',                         color: '#4ade80', delay: 2.7, blink: true },
];

// ── Main Hero ───────────────────────────────────────────────────────────────
const Hero = () => {
  const [showLines, setShowLines] = useState([]);

  useEffect(() => {
    termLines.forEach((line, i) => {
      setTimeout(() => setShowLines(prev => [...prev, i]), line.delay * 1000 + 800);
    });
  }, []);

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #04041a 0%, #06061f 40%, #080820 100%)',
      padding: '0 5%',
    }}>
      <HeroBg />

      {/* ── Gradient orbs ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          top: '-200px', left: '-200px', filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)',
          bottom: '-100px', right: '-100px', filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', width: '350px', height: '350px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)',
          top: '40%', right: '20%', filter: 'blur(60px)',
        }} />
      </div>

      {/* ── Content ── */}
      <div className="hero-grid" style={{
        position: 'relative', zIndex: 1, width: '100%',
        paddingTop: '90px', paddingBottom: '60px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center',
      }}>

        {/* ── LEFT ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', borderRadius: '100px', width: 'fit-content',
              background: 'rgba(74,222,128,0.08)',
              border: '1px solid rgba(74,222,128,0.25)',
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px #4ade80', animation: 'heroPulse 2s infinite' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#4ade80', letterSpacing: '0.12em' }}>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#7c3aed', letterSpacing: '0.1em', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Terminal size={13} /> <span>// hello world</span>
            </div>
            <h1 style={{ margin: 0, lineHeight: 1.05, fontFamily: 'Inter, sans-serif' }}>
              <span style={{
                display: 'block',
                fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
                fontWeight: 800,
                color: '#e2e8f0',
                letterSpacing: '-0.02em',
              }}>
                Sudesh
              </span>
              <span style={{
                display: 'block',
                fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                background: 'linear-gradient(90deg, #7c3aed, #06b6d4, #7c3aed)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'heroGradientShift 4s linear infinite',
              }}>
                Hansika
              </span>
            </h1>
          </motion.div>

          {/* Role typing */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <div style={{
              padding: '4px 10px', borderRadius: '6px',
              background: 'rgba(124,58,237,0.15)',
              border: '1px solid rgba(124,58,237,0.3)',
              fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#7c3aed',
            }}>
              {'<dev>'}
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 600, color: '#94a3b8' }}>
              <TypeAnimation
                sequence={[
                  'Full Stack Engineer', 2200,
                  'React & Node.js Dev', 2200,
                  'Cloud & DevOps Enthusiast', 2200,
                  'API Architect', 2200,
                  'UI/UX Craftsman', 2200,
                ]}
                wrapper="span" speed={55} repeat={Infinity}
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.8,
              color: '#64748b', maxWidth: '480px', margin: 0,
            }}
          >
            I build <span style={{ color: '#e2e8f0', fontWeight: 600 }}>production-grade</span> applications from
            database schema to pixel-perfect UI. Obsessed with clean code, great DX, and
            shipping <span style={{ color: '#7c3aed', fontWeight: 600 }}>things that matter</span>.
          </motion.p>

          {/* Skill pills */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
          >
            {skills.map(({ label, color, Icon }, i) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.08, y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.06 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  padding: '5px 12px', borderRadius: '100px',
                  background: `${color}10`,
                  border: `1px solid ${color}30`,
                  cursor: 'default',
                }}
              >
                <Icon size={11} color={color} />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color, fontWeight: 500 }}>
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}
          >
            <motion.a href="#projects"
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(124,58,237,0.6), 0 0 60px rgba(6,182,212,0.2)' }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                color: '#fff', textDecoration: 'none',
                fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600,
                boxShadow: '0 0 20px rgba(124,58,237,0.3)',
                letterSpacing: '0.03em', position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.12), transparent)' }} />
              <span style={{ position: 'relative', zIndex: 1 }}>View My Work</span>
              <ArrowRight size={15} style={{ position: 'relative', zIndex: 1 }} />
            </motion.a>

            <motion.a href="/resume.pdf" download
              whileHover={{ scale: 1.04, borderColor: 'rgba(124,58,237,0.6)', background: 'rgba(124,58,237,0.08)' }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '10px',
                background: 'transparent',
                border: '1px solid rgba(124,58,237,0.3)',
                color: '#e2e8f0', textDecoration: 'none',
                fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600,
                letterSpacing: '0.03em', transition: 'all 0.3s ease',
              }}
            >
              <Download size={15} /> Resume
            </motion.a>
          </motion.div>

          {/* Social links + stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}
            style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
          >
            {/* Socials */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {/* GitHub */}
              <motion.a href="https://github.com/Sudesh-2002" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }} title="GitHub"
                style={{ width: '38px', height: '38px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', color: '#7c3aed', textDecoration: 'none' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </motion.a>
              {/* LinkedIn */}
              <motion.a href="https://linkedin.com/in/sudeshhansika" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }} title="LinkedIn"
                style={{ width: '38px', height: '38px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', color: '#7c3aed', textDecoration: 'none' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </motion.a>
              {/* Email */}
              <motion.a href="mailto:sudeshhansika@gmail.com"
                whileHover={{ scale: 1.2, y: -3 }} title="Email"
                style={{ width: '38px', height: '38px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', color: '#7c3aed', textDecoration: 'none' }}
              >
                <Mail size={16} />
              </motion.a>
            </div>

            <div style={{ width: '1px', height: '28px', background: 'rgba(124,58,237,0.2)' }} />

            {/* Stats */}
            {[
              { val: '3+', lbl: 'Years' },
              { val: '20+', lbl: 'Projects' },
              { val: '15+', lbl: 'Clients' },
            ].map(({ val, lbl }) => (
              <div key={lbl} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 800,
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>{val}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#334155', letterSpacing: '0.1em', marginTop: '2px' }}>{lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'stretch' }}
        >
          {/* Terminal card */}
          <div style={{
            background: 'rgba(4,4,20,0.9)',
            border: '1px solid rgba(124,58,237,0.25)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 0 60px rgba(124,58,237,0.12), 0 20px 60px rgba(0,0,0,0.5)',
          }}>
            {/* Terminal top bar */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '12px 16px',
              background: 'rgba(124,58,237,0.08)',
              borderBottom: '1px solid rgba(124,58,237,0.15)',
            }}>
              {['#ef4444', '#f59e0b', '#22c55e'].map(c => (
                <div key={c} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c }} />
              ))}
              <span style={{
                marginLeft: '8px', fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px', color: '#334155', letterSpacing: '0.08em',
              }}>
                sudesh@portfolio ~ zsh
              </span>
              <div style={{ marginLeft: 'auto' }}>
                <Terminal size={13} color="#334155" />
              </div>
            </div>
            {/* Terminal body */}
            <div style={{ padding: '20px 22px', minHeight: '200px', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', lineHeight: 2 }}>
              <AnimatePresence>
                {termLines.map((line, i) =>
                  showLines.includes(i) && (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px', color: line.color }}
                    >
                      <ChevronRight size={11} style={{ flexShrink: 0, opacity: 0.6 }} />
                      <span>{line.txt}</span>
                      {line.blink && <span style={{ animation: 'termBlink 1s infinite' }}>▋</span>}
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Stack cards row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { icon: Code2,   label: 'Frontend', desc: 'React · Next.js · TypeScript', color: '#61dafb' },
              { icon: Server,  label: 'Backend',  desc: 'Node.js · Express · FastAPI',  color: '#68a063' },
              { icon: Database,label: 'Database', desc: 'PostgreSQL · MongoDB · Redis', color: '#f59e0b' },
              { icon: Globe,   label: 'DevOps',   desc: 'Docker · AWS · CI/CD',         color: '#06b6d4' },
            ].map(({ icon: Icon, label, desc, color }) => (
              <motion.div key={label}
                whileHover={{ scale: 1.04, y: -4 }}
                style={{
                  padding: '16px',
                  background: 'rgba(4,4,20,0.8)',
                  border: '1px solid rgba(124,58,237,0.15)',
                  borderRadius: '12px',
                  cursor: 'default',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: `${color}15`, border: `1px solid ${color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '10px',
                }}>
                  <Icon size={16} color={color} />
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700, color: '#e2e8f0', marginBottom: '3px' }}>{label}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#334155', lineHeight: 1.6 }}>{desc}</div>
              </motion.div>
            ))}
          </div>

          {/* GitHub activity bar (decorative) */}
          <div style={{
            padding: '14px 18px',
            background: 'rgba(4,4,20,0.8)',
            border: '1px solid rgba(124,58,237,0.15)',
            borderRadius: '12px',
            display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <GitBranch size={14} color="#7c3aed" />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#334155' }}>latest commit:</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#06b6d4', flex: 1 }}>
              feat: portfolio v2 🚀
            </span>
            <div style={{
              padding: '2px 8px', borderRadius: '4px',
              background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)',
              fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#4ade80',
            }}>
              main
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── CSS Keyframes via style tag ── */}
      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #4ade80; }
          50% { opacity: 0.5; box-shadow: 0 0 20px #4ade80; }
        }
        @keyframes heroGradientShift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes termBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;