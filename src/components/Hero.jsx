import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight, ChevronDown } from 'lucide-react';

/* ── Neural Network Canvas ─────────────────────────────────────── */
function NeuralCanvas() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h, particles, raf;

    const PARTICLE_COUNT = 75;
    const CONNECT_DIST   = 150;
    const MOUSE_ATTRACT  = 120;

    const init = () => {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2.2 + 0.8,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => {
        // mouse attraction
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_ATTRACT) {
          p.vx += dx * 0.00015;
          p.vy += dy * 0.00015;
        }
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.03;

        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

        const glow = 0.4 + 0.3 * Math.sin(p.pulse);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,245,255,${glow})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00F5FF';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.35;
            // alternate cyan / violet
            const useViolet = (i + j) % 3 === 0;
            const color = useViolet
              ? `rgba(123,47,255,${alpha})`
              : `rgba(0,245,255,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = color;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onMouse = e => { mouse.current = { x: e.clientX, y: e.clientY }; };
    const onResize = () => { init(); };

    init();
    draw();
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
  );
}

/* ── Main Hero ─────────────────────────────────────────────────── */
const stagger = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="home" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', background: 'var(--bg)',
      padding: '0 5%',
    }}>
      <NeuralCanvas />

      {/* gradient orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position:'absolute', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 70%)', top:'-150px', left:'-150px', filter:'blur(60px)' }} />
        <div style={{ position:'absolute', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(123,47,255,0.10) 0%, transparent 70%)', bottom:'-100px', right:'-80px', filter:'blur(60px)' }} />
      </div>

      {/* Scanline */}
      <div style={{ position:'absolute', inset:0, zIndex:1, pointerEvents:'none', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:'linear-gradient(90deg,transparent,rgba(0,245,255,0.6),transparent)', animation:'scanline 8s linear infinite', opacity:0.3 }} />
      </div>

      {/* Content */}
      <div style={{ position:'relative', zIndex:2, width:'100%', maxWidth:'900px', margin:'0 auto', paddingTop:'90px', paddingBottom:'60px', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:'24px' }}>

        {/* Eyebrow */}
        <motion.div {...stagger(0.1)} style={{ display:'flex', alignItems:'center', gap:'10px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            padding: '6px 14px', borderRadius: '100px',
            background: 'rgba(0,245,255,0.07)', border: '1px solid rgba(0,245,255,0.25)',
          }}>
            <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#00E676', boxShadow:'0 0 8px #00E676', animation:'pulse 2s infinite' }} />
            <span style={{ fontFamily:'JetBrains Mono', fontSize:'11px', color:'#00E676', letterSpacing:'0.14em' }}>
              FINAL YEAR · CS · SRI LANKA 🇱🇰
            </span>
          </span>
        </motion.div>

        {/* Name */}
        <motion.div {...stagger(0.25)}>
          <h1 style={{
            fontFamily: 'Space Grotesk', fontWeight: 700,
            fontSize: 'clamp(4rem, 12vw, 9rem)',
            lineHeight: 0.95, letterSpacing: '-0.03em',
            color: '#FFFFFF',
            textShadow: '0 0 80px rgba(0,245,255,0.15)',
          }}>
            SUDESH
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div {...stagger(0.4)} style={{ height: '28px', display:'flex', alignItems:'center', gap:'8px' }}>
          <span style={{ fontFamily:'JetBrains Mono', fontSize:'12px', color:'var(--cyan)', letterSpacing:'0.08em' }}>//</span>
          <span style={{ fontFamily:'Inter', fontSize:'clamp(14px,2.5vw,20px)', fontWeight:600, color:'#E8EDF2' }}>
            <TypeAnimation
              sequence={[
                'Full Stack Engineer',        2400,
                'AI/ML Engineer',             2400,
                'Computer Vision Builder',    2400,
                'GitHub App Developer',       2400,
              ]}
              wrapper="span" speed={60} repeat={Infinity}
            />
          </span>
          <span style={{ fontFamily:'JetBrains Mono', fontSize:'18px', color:'var(--cyan)', animation:'blink 1s infinite' }}>▋</span>
        </motion.div>

        {/* Tagline */}
        <motion.p {...stagger(0.55)} style={{
          fontFamily: 'Inter', fontSize: 'clamp(14px,2vw,17px)',
          color: 'var(--text-muted)', maxWidth: '540px', lineHeight: 1.7,
        }}>
          I build systems that ship — web apps, mobile apps, and the occasional neural network.
          Final year CS. Full time builder.
        </motion.p>

        {/* CTAs */}
        <motion.div {...stagger(0.7)} style={{ display:'flex', flexWrap:'wrap', gap:'12px', justifyContent:'center' }}>
          <a href="#projects" className="btn-solid-cyan">
            View Projects <ArrowRight size={15} />
          </a>
          <a href="/resume.pdf" download className="btn-cyan">
            <Download size={15} /> Download CV
          </a>
        </motion.div>

        {/* Social quick links */}
        <motion.div {...stagger(0.85)} style={{ display:'flex', gap:'10px', alignItems:'center' }}>
          {[
            { label:'GitHub',   href:'https://github.com/Sudesh-2002', svg:<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>, },
            { label:'LinkedIn', href:'https://linkedin.com/in/sudeshhansika', svg:<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>, },
            { label:'Email',    href:'mailto:sudeshhansika@gmail.com', svg:<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>, },
          ].map(({ label, href, svg }) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }} title={label}
              style={{
                width:'38px', height:'38px', borderRadius:'9px',
                display:'flex', alignItems:'center', justifyContent:'center',
                background:'rgba(0,245,255,0.06)', border:'1px solid rgba(0,245,255,0.2)',
                color:'var(--cyan)', textDecoration:'none',
              }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">{svg}</svg>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        style={{
          position:'absolute', bottom:'32px', left:'50%', transform:'translateX(-50%)',
          display:'flex', flexDirection:'column', alignItems:'center', gap:'6px',
          zIndex:2, cursor:'pointer',
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior:'smooth' })}>
        <span style={{ fontFamily:'JetBrains Mono', fontSize:'9px', color:'var(--text-dim)', letterSpacing:'0.14em' }}>SCROLL</span>
        <ChevronDown size={18} color="var(--cyan)" style={{ opacity:0.6 }} />
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
        @keyframes scanline { 0%{top:-2px} 100%{top:100%} }
      `}</style>
    </section>
  );
}