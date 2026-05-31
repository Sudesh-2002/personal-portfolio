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
    description: 'Leading frontend development for enterprise web applications using React and TypeScript. Architecting scalable component systems and collaborating with cross-functional teams to deliver high-quality software.',
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    color: '#6366f1',
  },
  {
    type: 'work',
    title: 'Junior Full Stack Developer',
    company: 'Digital Agency Co.',
    location: 'Remote',
    period: '2022 – 2023',
    description: 'Built and maintained multiple client websites and web applications using Laravel and Vue.js. Implemented RESTful APIs, optimized database queries, and ensured cross-browser compatibility.',
    skills: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
    color: '#8b5cf6',
  },
  {
    type: 'work',
    title: 'Freelance Developer',
    company: 'Self-Employed',
    location: 'Sri Lanka',
    period: '2021 – 2022',
    description: 'Delivered full-stack web solutions for local businesses. Managed the entire development lifecycle from requirements gathering to deployment and client training.',
    skills: ['React', 'PHP', 'MySQL', 'Tailwind'],
    color: '#06b6d4',
  },
  {
    type: 'education',
    title: 'BSc in Software Engineering',
    company: 'University of Kelaniya',
    location: 'Kelaniya, Sri Lanka',
    period: '2019 – 2023',
    description: 'Graduated with honors in Software Engineering. Core subjects included Data Structures & Algorithms, Database Systems, Software Architecture, and Machine Learning.',
    skills: ['Java', 'Python', 'Algorithms', 'OOP'],
    color: '#ec4899',
  },
  {
    type: 'education',
    title: 'AWS Certified Developer',
    company: 'Amazon Web Services',
    location: 'Online',
    period: '2023',
    description: 'Achieved AWS Certified Developer – Associate certification, demonstrating expertise in developing, deploying, and debugging cloud-based applications using AWS services.',
    skills: ['AWS Lambda', 'EC2', 'S3', 'DynamoDB'],
    color: '#f59e0b',
  },
];

const TimelineItem = ({ item, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`relative flex gap-6 mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row'}`}
  >
    {/* Timeline line & dot */}
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        viewport={{ once: true }}
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10"
        style={{
          background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
          border: `2px solid ${item.color}60`,
          boxShadow: `0 0 20px ${item.color}30`,
        }}
      >
        {item.type === 'work'
          ? <Briefcase size={18} style={{ color: item.color }} />
          : <GraduationCap size={18} style={{ color: item.color }} />
        }
      </motion.div>
      {!isLast && (
        <div
          className="w-0.5 flex-1 mt-2 min-h-8"
          style={{
            background: `linear-gradient(180deg, ${item.color}50, transparent)`,
          }}
        />
      )}
    </div>

    {/* Content */}
    <motion.div
      whileHover={{ x: 4 }}
      className="glass-card rounded-2xl p-6 flex-1 mb-4"
      style={{ border: `1px solid ${item.color}20` }}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
          <p className="font-semibold" style={{ color: item.color }}>{item.company}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1.5 text-slate-400 text-xs">
            <Calendar size={12} />
            {item.period}
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <MapPin size={12} />
            {item.location}
          </div>
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {item.skills.map(skill => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-full text-xs font-medium"
            style={{
              background: `${item.color}15`,
              color: item.color,
              border: `1px solid ${item.color}30`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="section-padding" style={{ background: 'rgba(10, 15, 30, 0.5)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="Experience & Education" subtitle="// my journey" />

        {/* Legend */}
        <div className="flex gap-6 justify-center mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Briefcase size={14} style={{ color: '#6366f1' }} />
            Work Experience
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <GraduationCap size={14} style={{ color: '#ec4899' }} />
            Education
          </div>
        </div>

        {/* Timeline */}
        <div>
          {experiences.map((item, i) => (
            <TimelineItem
              key={i}
              item={item}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
