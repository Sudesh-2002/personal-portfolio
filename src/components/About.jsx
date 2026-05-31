import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Globe, Cpu, Coffee } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3"
    >
      {subtitle}
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-black"
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: '80px' }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="h-1 mx-auto mt-4 rounded-full"
      style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }}
    />
  </div>
);

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: Code2, label: 'Clean Code', desc: 'Writing maintainable, scalable code following best practices' },
    { icon: Globe, label: 'Full Stack', desc: 'End-to-end development from design to deployment' },
    { icon: Cpu, label: 'Performance', desc: 'Optimizing apps for speed, SEO and great UX' },
    { icon: Coffee, label: 'Passionate', desc: 'Always learning the latest technologies and frameworks' },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="w-full">
        <SectionTitle title="About Me" subtitle="// get to know me" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative">
              <div
                className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  boxShadow: '0 30px 80px rgba(99, 102, 241, 0.2)',
                }}
              >
                <img
                  src="/profile.png"
                  alt="Sudesh Hansika"
                  className="w-full object-cover"
                  style={{ filter: 'brightness(1.05) contrast(1.05)' }}
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: 'linear-gradient(135deg, #6366f1, transparent)' }}
                />
              </div>

              {/* Floating experience card */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 text-center"
                style={{ border: '1px solid rgba(6, 182, 212, 0.3)' }}
              >
                <p className="text-3xl font-black gradient-text">3+</p>
                <p className="text-slate-400 text-xs mt-1">Years of<br/>Experience</p>
              </motion.div>

              {/* Floating tech count */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -left-4 glass-card rounded-2xl p-4 text-center"
                style={{ border: '1px solid rgba(139, 92, 246, 0.3)' }}
              >
                <p className="text-3xl font-black" style={{ color: '#8b5cf6' }}>20+</p>
                <p className="text-slate-400 text-xs mt-1">Projects<br/>Completed</p>
              </motion.div>
            </div>

            {/* Decorative dots */}
            <div
              className="absolute -z-10 w-48 h-48 opacity-30"
              style={{
                bottom: '-30px',
                left: '-20px',
                backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                I build things for the <span className="gradient-text">web</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm <strong className="text-white">Sudesh Hansika</strong>, a passionate Software Engineer
                based in Sri Lanka. I specialize in building exceptional digital experiences that
                are fast, accessible, and visually stunning.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                With 3+ years of experience in full-stack development, I've worked on everything
                from small startup MVPs to large-scale enterprise applications. I love turning
                complex problems into elegant, simple solutions.
              </p>
              <p className="text-slate-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or leveling up my DSA skills.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="glass-card rounded-xl p-4 cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))' }}
                  >
                    <Icon size={20} style={{ color: '#a5b4fc' }} />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{label}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Info list */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { label: 'Name', value: 'Sudesh Hansika' },
                { label: 'Location', value: 'Sri Lanka 🇱🇰' },
                { label: 'Email', value: 'sudeshhansika@gmail.com' },
                { label: 'Availability', value: 'Open to Offers' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-xs text-slate-500 uppercase tracking-wider">{label}</span>
                  <span className="text-sm text-white font-medium">{value}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary w-fit px-8 py-3 rounded-full text-white font-semibold mt-2"
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { SectionTitle };
export default About;
