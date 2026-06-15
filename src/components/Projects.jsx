import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './About';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    tag: 'AI',
    tagClass: 'tag-ai',
    name: 'AI Code Review Agent',
    desc: 'GitHub App that automatically reviews PRs with LLaMA 3.3 70B — deployed on Render.',
    long: 'Built a production GitHub App that hooks into pull request events, extracts diffs, and uses LLaMA 3.3 70B via Groq API to generate structured code reviews. Full FastAPI backend with PyGithub integration.',
    stack: ['FastAPI', 'Groq API', 'LLaMA 3.3 70B', 'PyGithub', 'Render'],
    github: 'https://github.com/Sudesh-2002',
    accent: '#00F5FF',
  },
  {
    tag: 'AI · CV',
    tagClass: 'tag-ai',
    name: 'Outfit Perception AI',
    desc: 'Deep learning system predicting social perception of outfit choices using CV + Likert-scale annotation.',
    long: 'Final Year Project. Trains a CNN on annotated outfit images scored on social perception (professionalism, approachability, confidence) using Likert-scale labels. Includes an AR try-on prototype.',
    stack: ['Computer Vision', 'PyTorch', 'OpenCV', 'Flask', 'Annotation Pipeline'],
    github: 'https://github.com/Sudesh-2002',
    accent: '#7B2FFF',
  },
  {
    tag: 'Mobile',
    tagClass: 'tag-mobile',
    name: 'Mood Music App',
    desc: 'Flutter app detecting facial emotions via RAF-DB trained model and recommending music accordingly.',
    long: 'Real-time emotion detection pipeline using TFLite on-device inference. RAF-DB trained model identifies 7 emotions from the front camera and maps them to music recommendations via YouTube & Spotify.',
    stack: ['Flutter', 'TFLite', 'RAF-DB', 'Spotify API', 'Dart'],
    github: 'https://github.com/Sudesh-2002',
    accent: '#A87AFF',
  },
  {
    tag: 'Full Stack',
    tagClass: 'tag-fullstack',
    name: 'InternHub',
    desc: 'Internship platform with React frontend on Vercel + Laravel backend on Render + Supabase DB.',
    long: 'Full-stack internship marketplace. React SPA on Vercel with Tailwind UI, RESTful Laravel API on Render, and Supabase for auth and PostgreSQL database. Supports employer and student roles.',
    stack: ['React', 'Laravel', 'Supabase', 'PostgreSQL', 'Vercel'],
    github: 'https://github.com/Sudesh-2002',
    accent: '#FF9500',
  },
  {
    tag: 'Creative',
    tagClass: 'tag-creative',
    name: 'Portfolio v1',
    desc: 'Animated gallery hallway with chibi characters, SVG sconces, volumetric fog — because why not.',
    long: 'First-gen portfolio: a scroll-driven 3D-like hallway made entirely in React, Framer Motion, and CSS. Chibi character avatars, custom SVG wall sconces, volumetric fog effects and GSAP-powered transitions.',
    stack: ['React', 'Framer Motion', 'GSAP', 'SVG', 'CSS'],
    github: 'https://github.com/Sudesh-2002',
    accent: '#00E676',
  },
  {
    tag: 'Coming Soon',
    tagClass: 'tag-ai',
    name: 'More in progress...',
    desc: 'A few more things are being shipped. Check GitHub for the latest.',
    long: 'Always building. The next thing is probably already halfway done.',
    stack: [],
    github: 'https://github.com/Sudesh-2002',
    accent: '#5A6A7A',
    muted: true,
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{
        background: 'var(--bg-surface)',
        border: `1px solid ${project.muted ? 'rgba(90,106,122,0.15)' : 'rgba(0,245,255,0.12)'}`,
        borderRadius: '18px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.175,0.885,0.32,1.275)',
        opacity: project.muted ? 0.55 : 1,
      }}
      whileHover={!project.muted ? {
        y: -8,
        borderColor: project.accent,
        boxShadow: `0 0 40px ${project.accent}20, 0 20px 60px rgba(0,0,0,0.5)`,
      } : {}}
    >
      {/* Top glow accent */}
      {!project.muted && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          opacity: 0.6,
        }} />
      )}

      {/* Domain tag */}
      <div>
        <span style={{
          display: 'inline-block',
          padding: '3px 10px', borderRadius: '6px',
          fontFamily: 'JetBrains Mono', fontSize: '10px', fontWeight: 600,
          letterSpacing: '0.1em',
        }} className={project.tagClass}>
          {project.tag}
        </span>
      </div>

      {/* Name + desc */}
      <div>
        <h3 style={{
          fontFamily: 'Space Grotesk', fontSize: '1.15rem', fontWeight: 700,
          color: 'var(--text-h)', marginBottom: '8px',
        }}>
          {project.name}
        </h3>
        <p style={{ fontFamily: 'Inter', fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
          {project.long}
        </p>
      </div>

      {/* Stack pills */}
      {project.stack.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.stack.map(s => (
            <span key={s} style={{
              padding: '3px 10px', borderRadius: '100px',
              fontFamily: 'JetBrains Mono', fontSize: '10px',
              background: `${project.accent}10`,
              border: `1px solid ${project.accent}25`,
              color: project.accent,
            }}>
              {s}
            </span>
          ))}
        </div>
      )}

      {/* GitHub link */}
      {!project.muted && (
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontFamily: 'Inter', fontSize: '13px', fontWeight: 600,
            color: project.accent, textDecoration: 'none',
            marginTop: 'auto', paddingTop: '4px',
            transition: 'gap 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.gap = '10px'}
          onMouseLeave={e => e.currentTarget.style.gap = '6px'}
        >
          GitHub <ArrowUpRight size={14} />
        </a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: 'rgba(10,22,40,0.5)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle label="// things I've built" title="Selected" titleAccent="Projects" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '20px',
        }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '56px' }}
        >
          <a href="https://github.com/Sudesh-2002" target="_blank" rel="noopener noreferrer"
            className="btn-cyan" style={{ fontSize: '13px', padding: '11px 28px' }}>
            View all on GitHub <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}