import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { GitFork, Link2, Mail, Download, ArrowDown, Share2 } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="section-padding relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[80px]"
          style={{ background: 'radial-gradient(circle,#6366f1,#8b5cf6)', top: '-80px', left: '-100px' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[80px]"
          style={{ background: 'radial-gradient(circle,#06b6d4,#6366f1)', bottom: '0px', right: '-80px' }} />
      </div>

      {/* ── Centered content wrapper ── */}
      <div className="relative z-10 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit text-sm font-medium"
              style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', color: '#a5b4fc' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Work
            </motion.div>

            {/* Greeting + Name */}
            <div>
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="text-slate-400 text-base font-medium mb-1"
              >Hello, I'm</motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="font-black leading-[1.05] mb-1"
                style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}
              >
                <span className="gradient-text">Sudesh</span><br />
                <span className="text-white">Hansika</span>
              </motion.h1>
            </div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
              className="text-lg font-semibold h-7"
              style={{ color: '#06b6d4' }}
            >
              <TypeAnimation
                sequence={['Software Engineer',2000,'Full Stack Developer',2000,'React Developer',2000,'Backend Developer',2000,'Problem Solver',2000]}
                wrapper="span" speed={50} repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="text-slate-400 text-[15px] leading-relaxed max-w-md"
            >
              Crafting beautiful, high-performance web applications with modern technologies.
              Passionate about clean code, great UX, and scalable architectures.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm">
                View My Work <ArrowDown size={16} />
              </motion.a>
              <motion.a href="/resume.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm">
                <Download size={16} /> Download CV
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
              className="flex items-center gap-3"
            >
              {[
                { icon: GitFork, href: 'https://github.com/sudeshhansika',    label: 'GitHub'    },
                { icon: Share2,  href: 'https://twitter.com/sudeshhansika',   label: 'Twitter'   },
                { icon: Link2,   href: 'https://linkedin.com/in/sudeshhansika', label: 'LinkedIn' },
                { icon: Mail,    href: 'mailto:sudeshhansika@gmail.com',       label: 'Email'     },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 transition-all duration-200 hover:text-indigo-300"
                  style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
                  title={label}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}
              className="flex gap-8 pt-4"
              style={{ borderTop: '1px solid rgba(99,102,241,0.12)' }}
            >
              {[
                { label: 'Years Experience', value: '3+' },
                { label: 'Projects Done',    value: '20+' },
                { label: 'Happy Clients',    value: '15+' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xl font-black gradient-text">{value}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative flex items-center justify-center order-1 md:order-2"
            style={{ height: '420px' }}
          >

            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute rounded-full"
              style={{ width: '340px', height: '340px', border: '1px dashed rgba(99,102,241,0.25)' }}
            />
            {/* Inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute rounded-full"
              style={{ width: '270px', height: '270px', border: '1px dashed rgba(6,182,212,0.25)' }}
            />

            {/* Profile image */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-full overflow-hidden z-10"
              style={{
                width: '200px', height: '200px',
                border: '3px solid rgba(99,102,241,0.5)',
                boxShadow: '0 0 50px rgba(99,102,241,0.35), 0 0 100px rgba(99,102,241,0.12)',
                flexShrink: 0,
              }}
            >
              <img src="/profile.png" alt="Sudesh Hansika" className="w-full h-full object-cover" />
            </motion.div>

            {/* Floating tech badges — positioned relative to this column */}
            {[
              { label: 'React',      color: '#61dafb', top: '6%',  left: '58%'  },
              { label: 'Node.js',    color: '#68a063', top: '22%', right: '2%'  },
              { label: 'TypeScript', color: '#3178c6', bottom: '22%', right: '0%' },
              { label: 'Python',     color: '#ffd43b', bottom: '8%',  left: '52%' },
              { label: 'MongoDB',    color: '#00ed64', top: '32%', left: '2%'   },
            ].map(({ label, color, ...pos }) => (
              <motion.div
                key={label}
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
                className="absolute glass-card px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ color, border: `1px solid ${color}35`, boxShadow: `0 0 12px ${color}18`, ...pos }}
              >
                {label}
              </motion.div>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
