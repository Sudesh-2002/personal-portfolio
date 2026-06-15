import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const cursorMainRef  = useRef(null);
  const cursorTrailRef = useRef(null);
  const cursorGlowRef  = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    let rafId;

    const onMouseMove = e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorMainRef.current) {
        cursorMainRef.current.style.left = mouseX + 'px';
        cursorMainRef.current.style.top  = mouseY + 'px';
      }
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = mouseX + 'px';
        cursorGlowRef.current.style.top  = mouseY + 'px';
      }
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;
      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.left = trailX + 'px';
        cursorTrailRef.current.style.top  = trailY + 'px';
      }
      rafId = requestAnimationFrame(animateTrail);
    };
    animateTrail();

    const onEnter = () => {
      if (cursorMainRef.current) {
        cursorMainRef.current.style.width  = '6px';
        cursorMainRef.current.style.height = '6px';
        cursorMainRef.current.style.background = '#7B2FFF';
      }
      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.width  = '48px';
        cursorTrailRef.current.style.height = '48px';
        cursorTrailRef.current.style.borderColor = 'rgba(123,47,255,0.6)';
      }
    };
    const onLeave = () => {
      if (cursorMainRef.current) {
        cursorMainRef.current.style.width  = '10px';
        cursorMainRef.current.style.height = '10px';
        cursorMainRef.current.style.background = '#00F5FF';
      }
      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.width  = '32px';
        cursorTrailRef.current.style.height = '32px';
        cursorTrailRef.current.style.borderColor = 'rgba(0,245,255,0.4)';
      }
    };

    const attach = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attach();

    // re-attach after any dynamic renders settle
    const timer = setTimeout(attach, 1500);

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative' }}>
      {/* Custom cursor */}
      <div ref={cursorGlowRef}  className="cursor-glow" />
      <div ref={cursorTrailRef} className="cursor-trail" />
      <div ref={cursorMainRef}  className="cursor-main" />

      {/* Portfolio */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;