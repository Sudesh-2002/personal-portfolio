import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './About';

const categories = [
  {
    name: 'Frontend',
    color: '#00F5FF',
    icon: '⚛',
    techs: [
      { name: 'React',     icon: 'react/react-original.svg' },
      { name: 'Flutter',   icon: 'flutter/flutter-original.svg' },
      { name: 'HTML5',     icon: 'html5/html5-original.svg' },
      { name: 'CSS3',      icon: 'css3/css3-original.svg' },
      { name: 'Tailwind',  icon: 'tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    name: 'Backend',
    color: '#7B2FFF',
    icon: '⚙',
    techs: [
      { name: 'FastAPI',   icon: 'fastapi/fastapi-original.svg' },
      { name: 'Laravel',   icon: 'laravel/laravel-original.svg' },
      { name: 'Node.js',   icon: 'nodejs/nodejs-original.svg' },
      { name: 'Python',    icon: 'python/python-original.svg' },
      { name: 'Express',   icon: 'express/express-original.svg' },
    ],
  },
  {
    name: 'AI / ML',
    color: '#A87AFF',
    icon: '🧠',
    techs: [
      { name: 'PyTorch',   icon: 'pytorch/pytorch-original.svg' },
      { name: 'OpenCV',    icon: 'opencv/opencv-original.svg' },
      { name: 'TensorFlow',icon: 'tensorflow/tensorflow-original.svg' },
      { name: 'Jupyter',   icon: 'jupyter/jupyter-original.svg' },
      { name: 'NumPy',     icon: 'numpy/numpy-original.svg' },
    ],
  },
  {
    name: 'Data',
    color: '#00E676',
    icon: '🗄',
    techs: [
      { name: 'PostgreSQL',icon: 'postgresql/postgresql-original.svg' },
      { name: 'Supabase',  icon: 'supabase/supabase-original.svg' },
      { name: 'Firebase',  icon: 'firebase/firebase-original.svg' },
      { name: 'MySQL',     icon: 'mysql/mysql-original.svg' },
      { name: 'Redis',     icon: 'redis/redis-original.svg' },
    ],
  },
  {
    name: 'DevOps / Tools',
    color: '#FF9500',
    icon: '🛠',
    techs: [
      { name: 'Docker',    icon: 'docker/docker-original.svg' },
      { name: 'GitHub',    icon: 'github/github-original.svg' },
      { name: 'Git',       icon: 'git/git-original.svg' },
      { name: 'Linux',     icon: 'linux/linux-original.svg' },
      { name: 'Vercel',    icon: 'vercel/vercel-original.svg' },
    ],
  },
];

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

function TechCard({ name, icon, categoryColor, delay }) {
  return (
    <motion.div
      className="skill-icon-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
    >
      <img
        src={`${CDN}${icon}`}
        alt={name}
        width={36}
        height={36}
        style={{ filter: 'drop-shadow(0 0 6px rgba(0,245,255,0.25))' }}
        onError={e => { e.target.style.display = 'none'; }}
      />
      <span style={{
        fontFamily: 'JetBrains Mono',
        fontSize: '10px',
        color: 'var(--text-muted)',
        textAlign: 'center',
        lineHeight: 1.3,
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.08 }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: `${cat.color}15`,
                  border: `1px solid ${cat.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px',
                }}>
                  {cat.icon}
                </div>
                <h3 style={{
                  fontFamily: 'Space Grotesk', fontSize: '16px', fontWeight: 700,
                  color: cat.color,
                  textShadow: `0 0 20px ${cat.color}50`,
                }}>
                  {cat.name}
                </h3>
                <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${cat.color}40, transparent)` }} />
              </div>

              {/* Tech icon grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
                gap: '12px',
              }}>
                {cat.techs.map((tech, ti) => (
                  <TechCard
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    categoryColor={cat.color}
                    delay={ci * 0.06 + ti * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom marquee */}
        <div style={{ marginTop: '72px', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px',
            background: 'linear-gradient(90deg, var(--bg), transparent)', zIndex: 1,
          }} />
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px',
            background: 'linear-gradient(-90deg, var(--bg), transparent)', zIndex: 1,
          }} />
          <motion.div
            animate={{ x: [0, -1500] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', gap: '12px', width: 'max-content' }}
          >
            {[...categories.flatMap(c => c.techs), ...categories.flatMap(c => c.techs)].map((tech, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px', borderRadius: '100px',
                background: 'var(--bg-surface)',
                border: '1px solid rgba(0,245,255,0.1)',
                fontFamily: 'JetBrains Mono', fontSize: '11px',
                color: 'var(--text-muted)', whiteSpace: 'nowrap',
              }}>
                <span style={{ color: 'var(--cyan)', fontSize: '8px' }}>◆</span>
                {tech.name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}