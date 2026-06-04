import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import './index.css';

function App() {
  const cursorMainRef = useRef(null);
  const cursorTrailRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    let rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorMainRef.current) {
        cursorMainRef.current.style.left = mouseX + 'px';
        cursorMainRef.current.style.top = mouseY + 'px';
      }
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = mouseX + 'px';
        cursorGlowRef.current.style.top = mouseY + 'px';
      }
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.left = trailX + 'px';
        cursorTrailRef.current.style.top = trailY + 'px';
      }
      rafId = requestAnimationFrame(animateTrail);
    };
    animateTrail();

    // Hover effect on interactive elements
    const handleEnter = () => {
      if (cursorMainRef.current) {
        cursorMainRef.current.style.width = '8px';
        cursorMainRef.current.style.height = '8px';
        cursorMainRef.current.style.background = '#e8c547';
      }
      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.width = '52px';
        cursorTrailRef.current.style.height = '52px';
        cursorTrailRef.current.style.borderColor = 'rgba(232,197,71,0.7)';
      }
    };
    const handleLeave = () => {
      if (cursorMainRef.current) {
        cursorMainRef.current.style.width = '14px';
        cursorMainRef.current.style.height = '14px';
        cursorMainRef.current.style.background = '#c9a227';
      }
      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.width = '36px';
        cursorTrailRef.current.style.height = '36px';
        cursorTrailRef.current.style.borderColor = 'rgba(201,162,39,0.5)';
      }
    };

    const interactiveEls = document.querySelectorAll('a, button, [role="button"]');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Custom Cursors */}
      <div ref={cursorGlowRef} className="cursor-glow" />
      <div ref={cursorTrailRef} className="cursor-trail" />
      <div ref={cursorMainRef} className="cursor-main" />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;