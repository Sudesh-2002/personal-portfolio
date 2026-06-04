import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitFork as Github, ExternalLink, Star } from 'lucide-react';
import { SectionTitle } from './About';

const projects = [
  {
    id: 1,
    title: 'InternHub Platform',
    category: 'Full Stack',
    description: 'A comprehensive internship management platform connecting students, companies, and administrators. Features real-time notifications, advanced search, and analytics dashboard.',
    tech: ['React', 'Laravel', 'MySQL', 'Tailwind', 'Redis'],
    github: 'https://github.com/Sudesh-2002/internhub',
    live: '#',
    featured: true,
    accentColor: '#c9a227',
  },
  {
    id: 2,
    title: 'E-Commerce Store',
    category: 'Full Stack',
    description: 'A modern e-commerce platform with real-time inventory, payment gateway integration, and a beautiful product catalog with advanced filtering.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    github: 'https://github.com/Sudesh-2002/ecommerce',
    live: '#',
    featured: true,
    accentColor: '#b0bec5',
  },
  {
    id: 3,
    title: 'AI Chat Application',
    category: 'AI/ML',
    description: 'Real-time AI-powered chat app integrating OpenAI GPT with conversation history, context management, and custom personality modes.',
    tech: ['React', 'Node.js', 'OpenAI', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/Sudesh-2002/ai-chat',
    live: '#',
    featured: false,
    accentColor: '#e8c547',
  },
  {
    id: 4,
    title: 'Task Management App',
    category: 'Frontend',
    description: 'A Notion-inspired task management tool with drag-and-drop boards, team collaboration, real-time updates, and productivity analytics.',
    tech: ['React', 'TypeScript', 'Firebase', 'DND Kit', 'Zustand'],
    github: 'https://github.com/Sudesh-2002/taskflow',
    live: '#',
    featured: false,
    accentColor: '#c9a227',
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    category: 'Frontend',
    description: 'A beautiful weather dashboard with animated icons, 7-day forecasts, air quality index, and location-based weather alerts.',
    tech: ['React', 'TypeScript', 'Chart.js', 'Weather API', 'Tailwind'],
    github: 'https://github.com/Sudesh-2002/weather-dash',
    live: '#',
    featured: false,
    accentColor: '#b0bec5',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'Frontend',
    description: 'This very portfolio! Built with React, Tailwind, Framer Motion, and Three.js. Features 3D animations, custom cursor, and gold/silver aesthetics.',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Three.js', 'Vite'],
    github: 'https://github.com/Sudesh-2002/personal-portfolio',
    live: '#',
    featured: false,
    accentColor: '#e8c547',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML'];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="project-card glass-card rounded-2xl overflow-hidden group relative"
    style={{ border: `1px solid rgba(${project.accentColor === '#c9a227' ? '201,162,39' : project.accentColor === '#b0bec5' ? '176,190,197' : '232,197,71'},0.1)` }}
  >
    {/* Top accent line */}
    <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }} />

    {/* Card content */}
    <div className="p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          {project.featured && (
            <span
              className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-2"
              style={{
                background: 'rgba(201,162,39,0.1)',
                border: '1px solid rgba(201,162,39,0.25)',
                color: '#c9a227',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              <Star size={8} fill="currentColor" /> Featured
            </span>
          )}
          <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Cinzel, serif', fontSize: '15px' }}>
            {project.title}
          </h3>
          <span
            className="text-xs tracking-wider"
            style={{ color: project.accentColor, fontFamily: 'JetBrains Mono, monospace' }}
          >
            {project.category}
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.2)', color: '#c9a227' }}
          >
            <Github size={14} />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(176,190,197,0.08)', border: '1px solid rgba(176,190,197,0.2)', color: '#b0bec5' }}
          >
            <ExternalLink size={14} />
          </motion.a>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-5" style={{ color: '#607d8b', fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2.5 py-1 rounded-full font-medium"
            style={{
              background: 'rgba(201,162,39,0.06)',
              border: '1px solid rgba(201,162,39,0.15)',
              color: '#90a4ae',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* Hover glow */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ boxShadow: `inset 0 0 40px rgba(201,162,39,0.04)` }}
    />
  </motion.div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="w-full">
        <SectionTitle title="My Projects" subtitle="// what I've built" />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat)}
              className="px-5 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-300"
              style={{
                fontFamily: 'Cinzel, serif',
                background: activeFilter === cat ? 'rgba(201,162,39,0.12)' : 'transparent',
                border: `1px solid ${activeFilter === cat ? 'rgba(201,162,39,0.4)' : 'rgba(176,190,197,0.1)'}`,
                color: activeFilter === cat ? '#c9a227' : '#607d8b',
                letterSpacing: '0.06em',
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="mb-4 text-sm tracking-widest uppercase" style={{ color: '#455a64', fontFamily: 'JetBrains Mono, monospace' }}>
            Want to see more?
          </p>
          <motion.a
            href="https://github.com/Sudesh-2002"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-silver inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold"
          >
            <Github size={16} /> View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;