import React, { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { GitFork, Link2 as Linkedin, Mail, Download, ArrowDown, Share2 as Twitter } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Torus, Box, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D floating orb
function GoldOrb() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1.3, 64, 64]}>
        <MeshDistortMaterial
          color="#c9a227"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          wireframe={false}
        />
      </Sphere>
    </Float>
  );
}

function SilverTorus() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.4;
      ref.current.rotation.z = clock.getElapsedTime() * 0.2;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
      <Torus ref={ref} args={[2.2, 0.06, 16, 80]}>
        <meshStandardMaterial
          color="#b0bec5"
          metalness={1}
          roughness={0.1}
          emissive="#607d8b"
          emissiveIntensity={0.3}
        />
      </Torus>
    </Float>
  );
}

function GoldRing() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * -0.3;
      ref.current.rotation.x = Math.PI / 3 + Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });
  return (
    <Torus ref={ref} args={[1.8, 0.04, 16, 80]}>
      <meshStandardMaterial
        color="#e8c547"
        metalness={1}
        roughness={0.05}
        emissive="#c9a227"
        emissiveIntensity={0.4}
      />
    </Torus>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#e8c547" />
      <directionalLight position={[-5, -5, 5]} intensity={0.8} color="#b0bec5" />
      <pointLight position={[0, 0, 3]} intensity={2} color="#c9a227" distance={8} />
      <GoldOrb />
      <SilverTorus />
      <GoldRing />
    </>
  );
}

const Hero = () => {
  return (
    <section id="home" className="section-padding relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #c9a227, #8b6914)', top: '-150px', left: '-150px' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[100px]"
          style={{ background: 'radial-gradient(circle, #b0bec5, #607d8b)', bottom: '0px', right: '-100px' }} />
        {/* Horizontal lines decorations */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute left-0 right-0 h-px opacity-5"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a227, transparent)', top: `${15 + i * 20}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="flex flex-col gap-5 order-2 md:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit text-sm font-semibold"
              style={{
                background: 'rgba(201,162,39,0.08)',
                border: '1px solid rgba(201,162,39,0.3)',
                color: '#c9a227',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.05em',
                fontSize: '12px',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Work
            </motion.div>

            {/* Greeting */}
            <div>
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="text-sm font-medium mb-2 tracking-widest uppercase"
                style={{ color: '#607d8b', fontFamily: 'JetBrains Mono, monospace' }}
              >// Hello, I'm</motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="font-black leading-[1.05] mb-2"
                style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)' }}
              >
                <span className="gradient-text-gold">Sudesh</span><br />
                <span className="gradient-text-silver">Hansika</span>
              </motion.h1>
            </div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
              className="text-lg font-bold h-8"
              style={{ color: '#b0bec5', fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.1em' }}
            >
              <TypeAnimation
                sequence={['Software Engineer', 2000, 'Full Stack Developer', 2000, 'React Specialist', 2000, 'Backend Architect', 2000]}
                wrapper="span" speed={50} repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="leading-relaxed max-w-md"
              style={{ color: '#78909c', fontSize: '15px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
            >
              Crafting exceptional digital experiences with precision and elegance.
              Passionate about clean architecture, stunning UI, and scalable solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="btn-gold flex items-center gap-2 px-7 py-3 rounded-full text-sm">
                View Work <ArrowDown size={14} />
              </motion.a>
              <motion.a href="/resume.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="btn-silver flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold">
                <Download size={14} /> Download CV
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
              className="flex items-center gap-3"
            >
              {[
                { icon: GitFork, href: 'https://github.com/Sudesh-2002', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/sudeshhansika', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com/sudeshhansika', label: 'Twitter' },
                { icon: Mail, href: 'mailto:sudeshhansika@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(201,162,39,0.06)',
                    border: '1px solid rgba(201,162,39,0.2)',
                    color: '#90a4ae',
                  }}
                  title={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}
              className="flex gap-8 pt-4"
              style={{ borderTop: '1px solid rgba(201,162,39,0.1)' }}
            >
              {[
                { label: 'Years Experience', value: '3+' },
                { label: 'Projects Done', value: '20+' },
                { label: 'Happy Clients', value: '15+' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-2xl font-black gradient-text-gold">{value}</p>
                  <p className="text-[11px] mt-0.5 tracking-wider uppercase" style={{ color: '#455a64', fontFamily: 'JetBrains Mono, monospace' }}>{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative flex items-center justify-center order-1 md:order-2"
            style={{ height: '460px' }}
          >
            {/* 3D Canvas */}
            <div className="absolute inset-0 rounded-full overflow-hidden" style={{ zIndex: 1 }}>
              <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <Suspense fallback={null}>
                  <Scene3D />
                </Suspense>
              </Canvas>
            </div>

            {/* Profile image overlaid in center */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 rounded-full overflow-hidden"
              style={{
                width: '185px', height: '185px',
                border: '2px solid rgba(201,162,39,0.6)',
                boxShadow: '0 0 40px rgba(201,162,39,0.3), 0 0 80px rgba(201,162,39,0.1), inset 0 0 40px rgba(201,162,39,0.05)',
              }}
            >
              <img src="/profile.png" alt="Sudesh Hansika" className="w-full h-full object-cover" />
              {/* Gold overlay tint */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(201,162,39,0.15), transparent)', mixBlendMode: 'overlay' }} />
            </motion.div>

            {/* Floating tech badges */}
            {[
              { label: 'React', color: '#61dafb', top: '8%', left: '60%' },
              { label: 'Node.js', color: '#68a063', top: '25%', right: '2%' },
              { label: 'TypeScript', color: '#b0bec5', bottom: '22%', right: '0%' },
              { label: 'Python', color: '#e8c547', bottom: '8%', left: '54%' },
              { label: 'MongoDB', color: '#c9a227', top: '30%', left: '0%' },
            ].map(({ label, color, ...pos }) => (
              <motion.div
                key={label}
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
                className="absolute glass-card px-3 py-1.5 rounded-full text-xs font-bold z-20"
                style={{
                  color,
                  border: `1px solid ${color}30`,
                  boxShadow: `0 0 12px ${color}20`,
                  fontFamily: 'JetBrains Mono, monospace',
                  ...pos,
                }}
              >
                {label}
              </motion.div>
            ))}

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 z-20" style={{ borderTop: '2px solid rgba(201,162,39,0.5)', borderLeft: '2px solid rgba(201,162,39,0.5)' }} />
            <div className="absolute bottom-4 right-4 w-8 h-8 z-20" style={{ borderBottom: '2px solid rgba(201,162,39,0.5)', borderRight: '2px solid rgba(201,162,39,0.5)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;