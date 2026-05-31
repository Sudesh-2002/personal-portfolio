import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './About';

const skillCategories = [
  {
    name: 'Frontend',
    color: '#61dafb',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 78 },
    ],
  },
  {
    name: 'Backend',
    color: '#68a063',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'Laravel/PHP', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    name: 'Database',
    color: '#00ed64',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 82 },
      { name: 'Redis', level: 68 },
      { name: 'Firebase', level: 75 },
    ],
  },
  {
    name: 'DevOps & Tools',
    color: '#f97316',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 72 },
      { name: 'AWS', level: 65 },
      { name: 'Linux', level: 78 },
      { name: 'CI/CD', level: 68 },
    ],
  },
];

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Python', icon: '🐍' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Git', icon: '🔀' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Laravel', icon: '🔴' },
  { name: 'Tailwind', icon: '🎨' },
];

const SkillBar = ({ name, level, color, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="mb-4"
  >
    <div className="flex justify-between mb-1.5">
      <span className="text-sm text-slate-300 font-medium">{name}</span>
      <span className="text-sm font-bold" style={{ color }}>{level}%</span>
    </div>
    <div
      className="w-full h-2 rounded-full overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.05)' }}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, ${color}99, ${color})`,
          boxShadow: `0 0 10px ${color}50`,
        }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section-padding" style={{ background: 'rgba(10, 15, 30, 0.5)' }}>
      <div className="w-full">
        <SectionTitle title="Skills & Expertise" subtitle="// what I work with" />

        {/* Tech Stack Marquee */}
        <div className="relative overflow-hidden mb-16">
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, var(--bg-primary), transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(-90deg, var(--bg-primary), transparent)' }}
          />
          <motion.div
            animate={{ x: [0, -50 * techStack.length] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4"
            style={{ width: 'max-content' }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card whitespace-nowrap"
                style={{ border: '1px solid rgba(99,102,241,0.2)' }}
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm text-slate-300 font-medium">{tech.name}</span>
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
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: activeCategory === i
                  ? `linear-gradient(135deg, ${cat.color}30, ${cat.color}10)`
                  : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeCategory === i ? cat.color + '60' : 'rgba(255,255,255,0.08)'}`,
                color: activeCategory === i ? cat.color : '#94a3b8',
                boxShadow: activeCategory === i ? `0 0 20px ${cat.color}20` : 'none',
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
          <div className="glass-card rounded-2xl p-8">
            <h3
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ color: skillCategories[activeCategory].color }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: skillCategories[activeCategory].color }} />
              {skillCategories[activeCategory].name} Skills
            </h3>
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                {...skill}
                color={skillCategories[activeCategory].color}
                index={i}
              />
            ))}
          </div>

          {/* Skill description card */}
          <div className="flex flex-col gap-4">
            <div className="glass-card rounded-2xl p-8 flex-1">
              <h3 className="text-xl font-bold text-white mb-4">
                {skillCategories[activeCategory].name} Expertise
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {activeCategory === 0 && 'Building responsive, performant, and accessible user interfaces with modern React ecosystem tools and component-driven architecture.'}
                {activeCategory === 1 && 'Designing and implementing robust server-side APIs, microservices, and business logic with Node.js and other backend technologies.'}
                {activeCategory === 2 && 'Working with both SQL and NoSQL databases, optimizing queries, designing schemas, and ensuring data integrity and performance.'}
                {activeCategory === 3 && 'Containerizing applications, setting up CI/CD pipelines, and deploying cloud-based solutions with modern DevOps practices.'}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {skillCategories[activeCategory].skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: '#94a3b8' }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: skillCategories[activeCategory].color }}
                    />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Overall score */}
            <div
              className="glass-card rounded-2xl p-6 text-center"
              style={{ border: `1px solid ${skillCategories[activeCategory].color}30` }}
            >
              <p className="text-slate-400 text-sm mb-2">Average Proficiency</p>
              <p
                className="text-4xl font-black"
                style={{ color: skillCategories[activeCategory].color }}
              >
                {Math.round(
                  skillCategories[activeCategory].skills.reduce((a, b) => a + b.level, 0) /
                  skillCategories[activeCategory].skills.length
                )}%
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
