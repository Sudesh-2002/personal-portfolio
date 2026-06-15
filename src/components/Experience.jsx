import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './About';
import { Calendar, MapPin, Cpu, Code2, Briefcase } from 'lucide-react';

const timeline = [
  {
    type: 'project',
    title: 'Final Year Research Project',
    org: 'University — AI Researcher',
    period: '2025 → 2026',
    location: 'Sri Lanka',
    desc: 'Designing and implementing a deep learning pipeline for social perception prediction of outfit choices. Likert-scale annotation, CNN-based classification, and an AR try-on prototype.',
    tags: ['Computer Vision', 'PyTorch', 'Research', 'AR'],
    icon: Cpu,
    accent: '#7B2FFF',
  },
  {
    type: 'project',
    title: 'AI Code Review Agent',
    org: 'Personal Project — Full Stack & AI',
    period: '2025',
    location: 'Remote',
    desc: 'Built and deployed a GitHub App that reviews pull requests automatically using LLaMA 3.3 70B via Groq API. FastAPI backend, PyGithub webhooks, deployed on Render.',
    tags: ['FastAPI', 'Groq', 'LLaMA 3.3 70B', 'GitHub Apps'],
    icon: Code2,
    accent: '#00F5FF',
  },
  {
    type: 'project',
    title: 'Full Stack & AI Developer',
    org: 'Personal Projects',
    period: '2023 → Present',
    location: 'Sri Lanka',
    desc: 'Shipped InternHub (React + Laravel + Supabase), the Mood Music App (Flutter + TFLite), and multiple client web apps. Obsessed with making AI systems that actually run in production.',
    tags: ['React', 'Flutter', 'FastAPI', 'Python', 'Supabase'],
    icon: Briefcase,
    accent: '#FF9500',
  },
  {
    type: 'open',
    title: 'Open to Opportunities',
    org: 'Internship / Part-time',
    period: '2026',
    location: 'Remote or Sri Lanka',
    desc: 'Actively looking for internships, part-time roles, and interesting problems worth solving. Especially interested in AI/ML engineering, full-stack SaaS, or any team building something real.',
    tags: ['Available Now', 'AI/ML', 'Full Stack', 'Remote OK'],
    icon: Briefcase,
    accent: '#00E676',
  },
];

function TimelineItem({ item, index, isLast }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ display: 'flex', gap: '24px', position: 'relative' }}
    >
      {/* Line + dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <motion.div
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={{ once: true }} transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
          style={{
            width: '42px', height: '42px', borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `${item.accent}12`,
            border: `1px solid ${item.accent}40`,
            boxShadow: `0 0 20px ${item.accent}20`,
            zIndex: 1,
          }}
        >
          <Icon size={17} color={item.accent} />
        </motion.div>
        {!isLast && (
          <div style={{
            width: '1px', flex: 1, marginTop: '8px', marginBottom: '0',
            background: `linear-gradient(180deg, ${item.accent}50, rgba(0,245,255,0.05))`,
          }} />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ x: 6 }}
        style={{
          flex: 1, marginBottom: isLast ? 0 : '28px',
          background: 'var(--bg-surface)',
          border: `1px solid ${item.accent}20`,
          borderRadius: '14px', padding: '22px 24px',
          transition: 'all 0.25s ease',
        }}
      >
        {/* Top accent line */}
        <div style={{ height: '1px', background: `linear-gradient(90deg, ${item.accent}60, transparent)`, marginBottom: '16px', borderRadius: '2px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap', marginBottom: '10px' }}>
          <div>
            <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '15px', fontWeight: 700, color: 'var(--text-h)', marginBottom: '4px' }}>
              {item.title}
            </h3>
            <p style={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 600, color: item.accent }}>{item.org}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'right' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'var(--text-dim)', justifyContent: 'flex-end' }}>
              <Calendar size={10} /> {item.period}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'var(--text-dim)', justifyContent: 'flex-end' }}>
              <MapPin size={10} /> {item.location}
            </span>
          </div>
        </div>

        <p style={{ fontFamily: 'Inter', fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '14px' }}>
          {item.desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {item.tags.map(t => (
            <span key={t} style={{
              padding: '3px 10px', borderRadius: '100px',
              fontFamily: 'JetBrains Mono', fontSize: '10px',
              background: `${item.accent}10`, border: `1px solid ${item.accent}25`,
              color: item.accent,
            }}>
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle label="// my journey" title="Experience &" titleAccent="Timeline" />
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} isLast={i === timeline.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}