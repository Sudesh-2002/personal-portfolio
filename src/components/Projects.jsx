import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitFork, ExternalLink, Star } from 'lucide-react';
import { SectionTitle } from './About';

const projects = [
  {
    id: 1,
    title: 'InternHub Platform',
    category: 'Full Stack',
    description: 'A comprehensive internship management platform connecting students, companies, and administrators. Features real-time notifications, advanced search, and analytics dashboard.',
    tech: ['React', 'Laravel', 'MySQL', 'Tailwind', 'Redis'],
    github: 'https://github.com/sudeshhansika/internhub',
    live: '#',
    featured: true,
    gradient: 'from-indigo-500 to-purple-600',
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'E-Commerce Store',
    category: 'Full Stack',
    description: 'A modern e-commerce platform with real-time inventory, payment gateway integration, and a beautiful product catalog with advanced filtering.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    github: 'https://github.com/sudeshhansika/ecommerce',
    live: '#',
    featured: true,
    gradient: 'from-cyan-500 to-blue-600',
    color: '#06b6d4',
  },
  {
    id: 3,
    title: 'AI Chat Application',
    category: 'AI/ML',
    description: 'Real-time AI-powered chat app integrating OpenAI GPT. Features conversation history, context management, and custom personality modes.',
    tech: ['React', 'Node.js', 'OpenAI', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/sudeshhansika/ai-chat',
    live: '#',
    featured: false,
    gradient: 'from-pink-500 to-rose-600',
    color: '#ec4899',
  },
  {
    id: 4,
    title: 'Task Management App',
    category: 'Frontend',
    description: 'A Notion-inspired task management tool with drag-and-drop boards, team collaboration, real-time updates, and productivity analytics.',
    tech: ['React', 'TypeScript', 'Firebase', 'DND Kit', 'Zustand'],
    github: 'https://github.com/sudeshhansika/taskflow',
    live: '#',
    featured: false,
    gradient: 'from-amber-500 to-orange-600',
    color: '#f59e0b',
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    category: 'Frontend',
    description: 'A beautiful weather dashboard with animated weather icons, 7-day forecasts, air quality index, and location-based weather alerts.',
    tech: ['React', 'TypeScript', 'Chart.js', 'Weather API', 'Tailwind'],
    github: 'https://github.com/sudeshhansika/weather-dash',
    live: '#',
    featured: false,
    gradient: 'from-sky-500 to-cyan-600',
    color: '#0ea5e9',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'Frontend',
    description: 'This very portfolio! Built with React, Tailwind, Framer Motion, and Three.js. Features particle animations, 3D elements, and smooth transitions.',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Three.js', 'Vite'],
    github: 'https://github.com/sudeshhansika/portfolio',
    live: '#',
    featured: false,
    gradient: 'from-violet-500 to-purple-600',
    color: '#8b5cf6',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML'];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="project-card glass-card rounded-2xl overflow-hidden cursor-pointer group"
      style={{ border: `1px solid rgba(255,255,255,0.06)` }}
    >
      {/* Image / Banner area */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
      >
        {/* Animated mesh/grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Project Number */}
        <div className="absolute top-4 left-4">
          <span
            className="text-xs font-mono font-bold px-2 py-1 rounded-md"
            style={{ background: 'rgba(0,0,0,0.3)', color: 'rgba(255,255,255,0.8)' }}
          >
            {project.category}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span
              className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md"
              style={{ background: 'rgba(0,0,0,0.4)', color: '#fbbf24' }}
            >
              <Star size={10} fill="#fbbf24" />
              Featured
            </span>
          </div>
        )}

        {/* Large number in background */}
        <div
          className="absolute -bottom-4 -right-2 text-8xl font-black opacity-10 text-white"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          0{project.id}
        </div>

        {/* Hover overlay with links */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center gap-4"
              style={{ background: 'rgba(0,0,0,0.4)' }}
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 text-white text-sm font-medium hover:bg-black/80 transition-colors"
              >
                <GitFork size={16} />
                Code
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={{ background: project.color, color: 'white' }}
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                background: `${project.color}15`,
                color: project.color,
                border: `1px solid ${project.color}30`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="w-full">
        <SectionTitle title="My Projects" subtitle="// what I've built" />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: filter === cat
                  ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                  : 'rgba(255,255,255,0.03)',
                border: `1px solid ${filter === cat ? 'transparent' : 'rgba(255,255,255,0.08)'}`,
                color: filter === cat ? 'white' : '#94a3b8',
                boxShadow: filter === cat ? '0 0 20px rgba(99,102,241,0.3)' : 'none',
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/sudeshhansika"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold"
          >
            <GitFork size={18} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
