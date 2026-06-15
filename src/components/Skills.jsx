import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './About';

const categories = [
  {
    name: 'Frontend & Mobile',
    color: '#00F5FF',
    icon: '⚛',
    note: 'TypeScript · Dart',
    techs: [
      { name: 'React',       icon: 'react/react-original.svg' },
      { name: 'Flutter',     icon: 'flutter/flutter-original.svg' },
      { name: 'TypeScript',  icon: 'typescript/typescript-original.svg' },
      { name: 'Dart',        icon: 'dart/dart-original.svg' },
      { name: 'Next.js',     icon: 'nextjs/nextjs-original.svg' },
      { name: 'Tailwind',    icon: 'tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    name: 'Backend',
    color: '#7B2FFF',
    icon: '⚙',
    note: 'Python · PHP',
    techs: [
      { name: 'FastAPI',   icon: 'fastapi/fastapi-original.svg' },
      { name: 'Laravel',   icon: 'laravel/laravel-original.svg' },
      { name: 'Python',    icon: 'python/python-original.svg' },
      { name: 'Node.js',   icon: 'nodejs/nodejs-original.svg' },
      { name: 'PHP',       icon: 'php/php-original.svg' },
      { name: 'Express',   icon: 'express/express-original.svg' },
    ],
  },
  {
    name: 'AI / ML',
    color: '#A87AFF',
    icon: '🧠',
    note: 'Python · NumPy',
    techs: [
      { name: 'PyTorch',    icon: 'pytorch/pytorch-original.svg' },
      { name: 'TensorFlow', icon: 'tensorflow/tensorflow-original.svg' },
      { name: 'OpenCV',     icon: 'opencv/opencv-original.svg' },
      { name: 'NumPy',      icon: 'numpy/numpy-original.svg' },
      { name: 'Jupyter',    icon: 'jupyter/jupyter-original.svg' },
      { name: 'Pandas',     icon: 'pandas/pandas-original.svg' },
    ],
  },
  {
    name: 'Data',
    color: '#00E676',
    icon: '🗄',
    note: 'SQL · NoSQL',
    techs: [
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
      { name: 'MySQL',      icon: 'mysql/mysql-original.svg' },
      { name: 'Supabase',   icon: 'supabase/supabase-original.svg' },
      { name: 'Firebase',   icon: 'firebase/firebase-original.svg' },
      { name: 'Redis',      icon: 'redis/redis-original.svg' },
      { name: 'MongoDB',    icon: 'mongodb/mongodb-original.svg' },
    ],
  },
  {
    name: 'DevOps & Tools',
    color: '#FF9500',
    icon: '🛠',
    note: 'CI/CD · Deploy',
    techs: [
      { name: 'Docker',  icon: 'docker/docker-original.svg' },
      { name: 'Git',     icon: 'git/git-original.svg' },
      { name: 'GitHub',  icon: 'github/github-original.svg' },
      { name: 'Linux',   icon: 'linux/linux-original.svg' },
      { name: 'Vercel',  icon: 'vercel/vercel-original.svg' },
      { name: 'Nginx',   icon: 'nginx/nginx-original.svg' },
    ],
  },
];

/* Project-specific tools without devicons */
const extraTech = [
  { name: 'Groq API',      color: '#00F5FF' },
  { name: 'LangChain',     color: '#A87AFF' },
  { name: 'TFLite',        color: '#7B2FFF' },
  { name: 'Render',        color: '#00F5FF' },
  { name: 'PyGithub',      color: '#00E676' },
  { name: 'GitHub Apps',   color: '#E8EDF2' },
  { name: 'RAF-DB',        color: '#A87AFF' },
  { name: 'Framer Motion', color: '#FF9500' },
  { name: 'REST APIs',     color: '#00F5FF' },
  { name: 'Supabase Auth', color: '#00E676' },
];

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

function TechCard({ name, icon, delay }) {
  return (
    <motion.div
      className="skill-icon-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
      whileHover={{ scale: 1.08, y: -4 }}
    >
      <img
        src={`${CDN}${icon}`}
        alt={name}
        width={36}
        height={36}
        style={{ filter: 'drop-shadow(0 0 6px rgba(0,245,255,0.2))' }}
        onError={e => {
          e.target.style.display = 'none';
          if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
        }}
      />
      {/* Icon fallback */}
      <span style={{
        display: 'none',
        width: '36px', height: '36px',
        alignItems: 'center', justifyContent: 'center',
        fontFamily: 'JetBrains Mono', fontSize: '11px',
        color: 'var(--cyan)', fontWeight: 700,
        background: 'rgba(0,245,255,0.08)', borderRadius: '8px',
      }}>
        {'</>'}
      </span>
      <span style={{
        fontFamily: 'JetBrains Mono', fontSize: '10px',
        color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.3,
      }}>
        {name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle label="// what I work with" title="Tech" titleAccent="Stack" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: ci * 0.07 }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div style={{
                  width: '34px', height: '34px', borderRadius: '9px',
                  background: `${cat.color}12`, border: `1px solid ${cat.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '15px',
                }}>
                  {cat.icon}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'Space Grotesk', fontSize: '15px', fontWeight: 700,
                    color: cat.color, textShadow: `0 0 16px ${cat.color}40`,
                    lineHeight: 1.1,
                  }}>
                    {cat.name}
                  </h3>
                  <span style={{
                    fontFamily: 'JetBrains Mono', fontSize: '9px',
                    color: 'var(--text-dim)', letterSpacing: '0.1em',
                  }}>
                    {cat.note}
                  </span>
                </div>
                <div style={{
                  flex: 1, height: '1px',
                  background: `linear-gradient(90deg, ${cat.color}40, transparent)`,
                }} />
              </div>

              {/* Icon grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
                gap: '10px',
              }}>
                {cat.techs.map((tech, ti) => (
                  <TechCard
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    delay={ci * 0.05 + ti * 0.04}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra project-specific tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: '56px' }}
        >
          <div style={{
            fontFamily: 'JetBrains Mono', fontSize: '10px',
            color: 'var(--text-dim)', letterSpacing: '0.14em', marginBottom: '14px',
          }}>
            // also used in projects
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {extraTech.map(({ name, color }) => (
              <motion.span
                key={name}
                whileHover={{ scale: 1.08 }}
                style={{
                  padding: '5px 14px', borderRadius: '100px',
                  fontFamily: 'JetBrains Mono', fontSize: '11px',
                  background: `${color}0D`, border: `1px solid ${color}28`,
                  color, cursor: 'default', transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = `${color}20`; e.currentTarget.style.boxShadow = `0 0 12px ${color}30`; }}
                onMouseLeave={e => { e.currentTarget.style.background = `${color}0D`; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Marquee strip */}
        <div style={{ marginTop: '56px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(90deg, var(--bg), transparent)', zIndex: 1 }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(-90deg, var(--bg), transparent)', zIndex: 1 }} />
          <motion.div
            animate={{ x: [0, -1800] }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', gap: '12px', width: 'max-content' }}
          >
            {[
              ...categories.flatMap(c => c.techs),
              ...extraTech.map(e => ({ name: e.name })),
              ...categories.flatMap(c => c.techs),
            ].map((tech, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '5px 16px', borderRadius: '100px',
                background: 'var(--bg-surface)',
                border: '1px solid rgba(0,245,255,0.08)',
                fontFamily: 'JetBrains Mono', fontSize: '11px',
                color: 'var(--text-muted)', whiteSpace: 'nowrap',
              }}>
                <span style={{ color: 'var(--cyan)', fontSize: '7px' }}>◆</span>
                {tech.name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}