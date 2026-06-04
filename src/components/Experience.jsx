import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { SectionTitle } from './About';

const experiences = [
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Tech Solutions Ltd.',
    location: 'Colombo, Sri Lanka',
    period: '2023 – Present',
    description: 'Leading frontend development for enterprise web applications using React and TypeScript. Architecting scalable component systems and collaborating with cross-functional teams.',
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    accentColor: '#c9a227',
  },
  {
    type: 'work',
    title: 'Junior Full Stack Developer',
    company: 'Digital Agency Co.',
    location: 'Remote',
    period: '2022 – 2023',
    description: 'Built and maintained multiple client websites and web applications using Laravel and Vue.js. Implemented RESTful APIs, optimized database queries, and ensured cross-browser compatibility.',
    skills: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
    accentColor: '#b0bec5',
  },
  {
    type: 'work',
    title: 'Freelance Developer',
    company: 'Self-Employed',
    location: 'Sri Lanka',
    period: '2021 – 2022',
    description: 'Delivered full-stack web solutions for local businesses. Managed the entire development lifecycle from requirements gathering to deployment and client training.',
    skills: ['React', 'PHP', 'MySQL', 'Tailwind'],
    accentColor: '#e8c547',
  },
  {
    type: 'education',
    title: 'BSc in Software Engineering',
    company: 'University of Kelaniya',
    location: 'Kelaniya, Sri Lanka',
    period: '2019 – 2023',
    description: 'Graduated with honors in Software Engineering. Core subjects included Data Structures & Algorithms, Database Systems, Software Architecture, and Machine Learning.',
    skills: ['Java', 'Python', 'Algorithms', 'OOP'],
    accentColor: '#c9a227',
  },
  {
    type: 'education',
    title: 'AWS Certified Developer',
    company: 'Amazon Web Services',
    location: 'Online',
    period: '2023',
    description: 'Achieved AWS Certified Developer – Associate certification, demonstrating expertise in developing and deploying cloud-based applications using AWS services.',
    skills: ['AWS Lambda', 'EC2', 'S3', 'DynamoDB'],
    accentColor: '#b0bec5',
  },
];

const TimelineItem = ({ item, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative flex gap-6 md:gap-8"
  >
    {/* Timeline line + dot */}
    <div className="flex flex-col items-center flex-shrink-0">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
        viewport={{ once: true }}
        className="w-10 h-10 rounded-full flex items-center justify-center z-10 relative"
        style={{
          background: item.type === 'work'
            ? 'linear-gradient(135deg, rgba(201,162,39,0.2), rgba(139,105,20,0.15))'
            : 'linear-gradient(135deg, rgba(176,190,197,0.2), rgba(96,125,139,0.15))',
          border: `1px solid ${item.type === 'work' ? 'rgba(201,162,39,0.4)' : 'rgba(176,190,197,0.3)'}`,
          boxShadow: `0 0 16px ${item.type === 'work' ? 'rgba(201,162,39,0.2)' : 'rgba(176,190,197,0.15)'}`,
        }}
      >
        {item.type === 'work'
          ? <Briefcase size={16} style={{ color: '#c9a227' }} />
          : <GraduationCap size={16} style={{ color: '#b0bec5' }} />
        }
      </motion.div>
      {!isLast && (
        <div
          className="w-px flex-1 mt-2"
          style={{ background: 'linear-gradient(180deg, rgba(201,162,39,0.3), rgba(176,190,197,0.1))' }}
        />
      )}
    </div>

    {/* Content */}
    <motion.div
      whileHover={{ x: 4 }}
      className="glass-card rounded-2xl p-6 flex-1 mb-6 group"
      style={{ border: `1px solid ${item.type === 'work' ? 'rgba(201,162,39,0.12)' : 'rgba(176,190,197,0.1)'}` }}
    >
      {/* Top accent */}
      <div
        className="h-px w-full mb-4 rounded-full"
        style={{ background: `linear-gradient(90deg, ${item.accentColor}, transparent)`, opacity: 0.4 }}
      />

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-base font-bold text-white mb-0.5" style={{ fontFamily: 'Cinzel, serif', fontSize: '14px', letterSpacing: '0.04em' }}>
            {item.title}
          </h3>
          <p className="font-semibold text-sm" style={{ color: item.accentColor, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.04em' }}>
            {item.company}
          </p>
        </div>
        <div className="flex flex-col gap-1 text-xs sm:text-right" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <span className="flex items-center gap-1 sm:justify-end" style={{ color: '#546e7a' }}>
            <Calendar size={10} /> {item.period}
          </span>
          <span className="flex items-center gap-1 sm:justify-end" style={{ color: '#455a64' }}>
            <MapPin size={10} /> {item.location}
          </span>
        </div>
      </div>

      <p className="text-sm leading-relaxed mb-4" style={{ color: '#607d8b', fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {item.skills.map((s) => (
          <span
            key={s}
            className="text-[11px] px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(201,162,39,0.06)',
              border: '1px solid rgba(201,162,39,0.15)',
              color: '#90a4ae',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const Experience = () => (
  <section id="experience" className="section-padding" style={{ background: 'rgba(5,13,26,0.6)' }}>
    <div className="w-full">
      <SectionTitle title="Experience" subtitle="// my journey" />

      <div className="max-w-3xl mx-auto">
        {experiences.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} isLast={i === experiences.length - 1} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;