import React, { useState, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './About';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Octahedron, Icosahedron } from '@react-three/drei';

function FloatingGem({ position, color, speed = 1 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * speed * 0.6;
      ref.current.rotation.y = clock.getElapsedTime() * speed * 0.4;
    }
  });
  return (
    <Float speed={speed} floatIntensity={1}>
      <Octahedron ref={ref} args={[0.4]} position={position}>
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.2} />
      </Octahedron>
    </Float>
  );
}

const skillCategories = [
  {
    name: 'Frontend',
    color: '#61dafb',
    goldAccent: '#e8c547',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 78 },
    ],
    desc: 'Building responsive, performant, and accessible user interfaces with modern React ecosystem tools and component-driven architecture.',
  },
  {
    name: 'Backend',
    color: '#68a063',
    goldAccent: '#c9a227',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'Laravel/PHP', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 70 },
    ],
    desc: 'Designing and implementing robust server-side APIs, microservices, and business logic with Node.js and other backend technologies.',
  },
  {
    name: 'Database',
    color: '#00ed64',
    goldAccent: '#b0bec5',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 82 },
      { name: 'Redis', level: 68 },
      { name: 'Firebase', level: 75 },
    ],
    desc: 'Working with both SQL and NoSQL databases, optimizing queries, designing schemas, and ensuring data integrity and performance.',
  },
  {
    name: 'DevOps',
    color: '#f97316',
    goldAccent: '#e8c547',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 72 },
      { name: 'AWS', level: 65 },
      { name: 'Linux', level: 78 },
      { name: 'CI/CD', level: 68 },
    ],
    desc: 'Containerizing applications, setting up CI/CD pipelines, and deploying cloud-based solutions with modern DevOps practices.',
  },
];

const techStack = [
  { name: 'React', symbol: '⚛' },
  { name: 'Node.js', symbol: '◈' },
  { name: 'TypeScript', symbol: '◆' },
  { name: 'Python', symbol: '◉' },
  { name: 'MongoDB', symbol: '◐' },
  { name: 'PostgreSQL', symbol: '◑' },
  { name: 'Docker', symbol: '◊' },
  { name: 'AWS', symbol: '☁' },
  { name: 'Git', symbol: '⑂' },
  { name: 'Next.js', symbol: '▲' },
  { name: 'Laravel', symbol: '◈' },
  { name: 'Tailwind', symbol: '✦' },
];

const SkillBar = ({ name, level, color, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.08 }}
    viewport={{ once: true }}
    className="mb-5"
  >
    <div className="flex justify-between mb-2">
      <span className="text-sm font-semibold tracking-wide" style={{ color: '#b0bec5', fontFamily: 'Rajdhani, sans-serif' }}>{name}</span>
      <span className="text-xs font-bold font-mono" style={{ color: '#c9a227' }}>{level}%</span>
    </div>
    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.4, delay: index * 0.08, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, rgba(201,162,39,0.6), #c9a227, ${color})`,
          boxShadow: `0 0 8px rgba(201,162,39,0.4)`,
        }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section-padding" style={{ background: 'rgba(5,13,26,0.6)' }}>
      <div className="w-full">
        <SectionTitle title="Skills & Expertise" subtitle="// what I work with" />

        {/* Marquee */}
        <div className="relative overflow-hidden mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, var(--bg-secondary), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(-90deg, var(--bg-secondary), transparent)' }} />
          <motion.div
            animate={{ x: [0, -56 * techStack.length] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="flex gap-3"
            style={{ width: 'max-content' }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap"
                style={{
                  background: 'rgba(7,16,35,0.8)',
                  border: '1px solid rgba(201,162,39,0.15)',
                  color: '#90a4ae',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  fontSize: '13px',
                }}
              >
                <span style={{ color: '#c9a227', fontSize: '10px' }}>{tech.symbol}</span>
                {tech.name}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {skillCategories.map((cat, i) => (
            <motion.button
              key={cat.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(i)}
              className="px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all duration-300"
              style={{
                fontFamily: 'Cinzel, serif',
                background: activeCategory === i ? 'rgba(201,162,39,0.12)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${activeCategory === i ? 'rgba(201,162,39,0.5)' : 'rgba(176,190,197,0.1)'}`,
                color: activeCategory === i ? '#c9a227' : '#607d8b',
                boxShadow: activeCategory === i ? '0 0 20px rgba(201,162,39,0.15)' : 'none',
                letterSpacing: '0.08em',
              }}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Skill bars */}
          <div className="glass-card rounded-2xl p-8" style={{ border: '1px solid rgba(201,162,39,0.12)' }}>
            <h3 className="text-base font-bold mb-6 flex items-center gap-3" style={{ color: '#c9a227', fontFamily: 'Cinzel, serif', letterSpacing: '0.08em' }}>
              <span className="w-2 h-2 rounded-full" style={{ background: '#c9a227', boxShadow: '0 0 8px rgba(201,162,39,0.8)' }} />
              {skillCategories[activeCategory].name} Skills
            </h3>
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} color={skillCategories[activeCategory].color} index={i} />
            ))}
          </div>

          {/* Info + 3D gem */}
          <div className="flex flex-col gap-4">
            {/* 3D gem viewer */}
            <div
              className="glass-card rounded-2xl overflow-hidden"
              style={{ height: '180px', border: '1px solid rgba(201,162,39,0.12)' }}
            >
              <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.4} />
                  <pointLight position={[3, 3, 3]} intensity={2} color="#c9a227" />
                  <pointLight position={[-3, -3, 3]} intensity={1} color="#b0bec5" />
                  <FloatingGem position={[-1.5, 0, 0]} color="#c9a227" speed={0.8} />
                  <FloatingGem position={[0, 0.5, 0]} color="#b0bec5" speed={1.2} />
                  <FloatingGem position={[1.5, -0.3, 0]} color="#e8c547" speed={0.9} />
                </Suspense>
              </Canvas>
            </div>

            {/* Description */}
            <div className="glass-card rounded-2xl p-6 flex-1" style={{ border: '1px solid rgba(176,190,197,0.08)' }}>
              <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Cinzel, serif' }}>
                {skillCategories[activeCategory].name} Expertise
              </h3>
              <p className="leading-relaxed mb-5" style={{ color: '#78909c', fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                {skillCategories[activeCategory].desc}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {skillCategories[activeCategory].skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 text-sm" style={{ color: '#90a4ae', fontFamily: 'Rajdhani, sans-serif' }}>
                    <span style={{ color: '#c9a227', fontSize: '8px' }}>✦</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Score */}
            <div
              className="glass-card rounded-2xl p-5 text-center"
              style={{ border: '1px solid rgba(201,162,39,0.18)' }}
            >
              <p className="text-xs mb-2 tracking-widest uppercase" style={{ color: '#455a64', fontFamily: 'JetBrains Mono, monospace' }}>Average Proficiency</p>
              <p className="text-4xl font-black gradient-text-gold">
                {Math.round(skillCategories[activeCategory].skills.reduce((a, b) => a + b.level, 0) / skillCategories[activeCategory].skills.length)}%
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;