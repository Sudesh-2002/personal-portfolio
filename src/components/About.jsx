import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Globe, Cpu, Zap } from 'lucide-react';

export const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-xs font-medium mb-3 tracking-widest uppercase"
      style={{ color: '#c9a227', fontFamily: 'JetBrains Mono, monospace' }}
    >
      {subtitle}
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-black gradient-text-silver"
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: '80px' }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="h-px mx-auto mt-5 rounded-full"
      style={{ background: 'linear-gradient(90deg, transparent, #c9a227, transparent)' }}
    />
  </div>
);

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: Code2, label: 'Clean Code', desc: 'Maintainable, scalable code following SOLID principles' },
    { icon: Globe, label: 'Full Stack', desc: 'End-to-end development from design to deployment' },
    { icon: Cpu, label: 'Performance', desc: 'Optimizing apps for speed, SEO and stellar UX' },
    { icon: Zap, label: 'Passionate', desc: 'Always learning the latest technologies and patterns' },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="w-full">
        <SectionTitle title="About Me" subtitle="// get to know me" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-20"
                style={{ background: 'linear-gradient(135deg, #c9a227, transparent, #b0bec5)' }}
              />
              <div
                className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden relative"
                style={{
                  border: '1px solid rgba(201,162,39,0.25)',
                  boxShadow: '0 30px 80px rgba(201,162,39,0.12), 0 0 0 1px rgba(201,162,39,0.08)',
                }}
              >
                <img
                  src="/profile.png"
                  alt="Sudesh Hansika"
                  className="w-full object-cover"
                  style={{ filter: 'brightness(1.05) contrast(1.05) saturate(0.95)' }}
                />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: 'linear-gradient(135deg, rgba(201,162,39,0.4), transparent 60%)' }}
                />
                {/* Corner accents */}
                {[
                  { top: 0, left: 0, borderTop: '2px solid #c9a227', borderLeft: '2px solid #c9a227', borderTopLeftRadius: '1rem' },
                  { top: 0, right: 0, borderTop: '2px solid #c9a227', borderRight: '2px solid #c9a227', borderTopRightRadius: '1rem' },
                  { bottom: 0, left: 0, borderBottom: '2px solid #c9a227', borderLeft: '2px solid #c9a227', borderBottomLeftRadius: '1rem' },
                  { bottom: 0, right: 0, borderBottom: '2px solid #c9a227', borderRight: '2px solid #c9a227', borderBottomRightRadius: '1rem' },
                ].map((s, i) => (
                  <div key={i} className="absolute w-6 h-6" style={s} />
                ))}
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 text-center"
                style={{ border: '1px solid rgba(201,162,39,0.25)' }}
              >
                <p className="text-3xl font-black gradient-text-gold">3+</p>
                <p className="text-[11px] mt-1 tracking-wider" style={{ color: '#607d8b', fontFamily: 'JetBrains Mono, monospace' }}>Years<br />Experience</p>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -left-4 glass-card rounded-2xl p-4 text-center"
                style={{ border: '1px solid rgba(176,190,197,0.2)' }}
              >
                <p className="text-3xl font-black gradient-text-silver">20+</p>
                <p className="text-[11px] mt-1 tracking-wider" style={{ color: '#607d8b', fontFamily: 'JetBrains Mono, monospace' }}>Projects<br />Completed</p>
              </motion.div>
            </div>

            {/* Dot grid */}
            <div
              className="absolute -z-10 w-40 h-40 opacity-20"
              style={{
                bottom: '-20px', left: '-10px',
                backgroundImage: 'radial-gradient(circle, #c9a227 1px, transparent 1px)',
                backgroundSize: '18px 18px',
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
                I build things for the <span className="gradient-text-gold">web</span>
              </h3>
              <p className="leading-relaxed mb-4" style={{ color: '#78909c', fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                I'm <strong style={{ color: '#e8edf5' }}>Sudesh Hansika</strong>, a passionate Software Engineer
                based in Sri Lanka. I specialize in building exceptional digital experiences that
                are fast, accessible, and visually stunning.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#78909c', fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                With 3+ years of experience in full-stack development, I've worked on everything
                from startup MVPs to large-scale enterprise applications. I love turning
                complex problems into elegant, simple solutions.
              </p>
              <p className="leading-relaxed" style={{ color: '#78909c', fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or leveling up my DSA skills.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, borderColor: 'rgba(201,162,39,0.3)' }}
                  className="glass-card rounded-xl p-4 cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: 'linear-gradient(135deg, rgba(201,162,39,0.15), rgba(139,105,20,0.1))' }}
                  >
                    <Icon size={18} style={{ color: '#c9a227' }} />
                  </div>
                  <h4 className="font-bold text-sm mb-1" style={{ color: '#e8edf5', fontFamily: 'Cinzel, serif' }}>{label}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#546e7a', fontFamily: 'Rajdhani, sans-serif' }}>{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Info list */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { label: 'Name', value: 'Sudesh Hansika' },
                { label: 'Location', value: 'Sri Lanka 🇱🇰' },
                { label: 'Email', value: 'sudeshhansika@gmail.com' },
                { label: 'Availability', value: 'Open to Offers ✦' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-[10px] tracking-widest uppercase" style={{ color: '#455a64', fontFamily: 'JetBrains Mono, monospace' }}>{label}</span>
                  <span className="text-sm font-semibold" style={{ color: '#b0bec5' }}>{value}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gold w-fit px-8 py-3 rounded-full text-sm mt-2"
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { SectionTitle as default_SectionTitle };
export default About;