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
    github: 'https://github.com/Sudesh-2002/code-review-agent',
    accent: '#00F5FF',
  },
  {
    tag: 'AI · Full Stack',
    tagClass: 'tag-ai',
    name: 'AI Resume Matcher',
    desc: 'Full-stack app that semantically matches resumes to job descriptions using vector embeddings and LLM-generated gap analysis.',
    long: 'Upload a PDF resume → Groq LLaMA-3.3-70b extracts structured JSON (skills, experience, education). Add a job description → same pipeline runs. Both docs are embedded into 384-dim vectors (HuggingFace all-MiniLM-L6-v2) and compared via MongoDB Atlas Vector Search. Final score = 60% semantic similarity + 40% skill overlap, plus a Groq-generated coaching narrative with strengths, gaps, and a hiring verdict.',
    stack: ['React', 'FastAPI', 'Groq API', 'LLaMA 3.3 70B', 'MongoDB Atlas', 'Vector Search', 'HuggingFace', 'Vercel', 'Render'],
    github: 'https://github.com/Sudesh-2002/ai-resume-matcher',
    live: 'https://ai-resume-matcher-psi-five.vercel.app',
    accent: '#7B2FFF',
  },
  {
    tag: 'Mobile',
    tagClass: 'tag-mobile',
    name: 'Mood Music App',
    desc: 'Flutter app detecting facial emotions via RAF-DB trained model and recommending music accordingly.',
    long: 'Real-time emotion detection pipeline using TFLite on-device inference. RAF-DB trained model identifies 7 emotions from the front camera and maps them to music recommendations via YouTube & Spotify.',
    stack: ['Flutter', 'TFLite', 'RAF-DB', 'Spotify API', 'Dart'],
    github: 'https://github.com/Sudesh-2002/mood_music_app',
    accent: '#A87AFF',
  },
  {
    tag: 'Full Stack',
    tagClass: 'tag-fullstack',
    name: 'InternHub',
    desc: 'Internship platform with React frontend on Vercel + Laravel backend on Render + Supabase DB.',
    long: 'Full-stack internship marketplace. React SPA on Vercel with Tailwind UI, RESTful Laravel API on Render, and Supabase for auth and PostgreSQL database. Supports employer and student roles.',
    stack: ['React', 'Laravel', 'Supabase', 'PostgreSQL', 'Vercel'],
    github: 'https://github.com/Sudesh-2002/InternHub',
    accent: '#FF9500',
  },
  {
    tag: 'Backend · Java',
    tagClass: 'tag-fullstack',
    name: 'Warehouse Order & Inventory System',
    desc: 'Production-grade Spring Boot backend for multi-warehouse stock management, order lifecycle, and concurrency-safe inventory deduction.',
    long: 'Models real-world foodservice distribution: tracks stock across multiple warehouses, manages full order lifecycle (PENDING → CONFIRMED → SHIPPED / CANCELLED), applies tiered bulk-discount pricing via Strategy pattern, and uses pessimistic locking to prevent overselling under concurrent load. Includes Swagger/OpenAPI 3 docs, GitHub Actions CI, and full Testcontainers integration tests against a real PostgreSQL instance.',
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'JUnit 5', 'Mockito', 'Testcontainers', 'Swagger / OpenAPI 3', 'GitHub Actions', 'Maven'],
    github: 'https://github.com/Sudesh-2002/warehouse-management-system',
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

      {/* Links */}
      {!project.muted && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: 'auto', paddingTop: '4px', flexWrap: 'wrap' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontFamily: 'Inter', fontSize: '13px', fontWeight: 600,
              color: project.accent, textDecoration: 'none',
              transition: 'gap 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.gap = '10px'}
            onMouseLeave={e => e.currentTarget.style.gap = '6px'}
          >
            GitHub <ArrowUpRight size={14} />
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontFamily: 'Inter', fontSize: '13px', fontWeight: 600,
                color: '#00E676', textDecoration: 'none',
                transition: 'gap 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.gap = '10px'}
              onMouseLeave={e => e.currentTarget.style.gap = '6px'}
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          )}
        </div>
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