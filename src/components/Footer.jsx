import React from 'react';
import { motion } from 'framer-motion';
import { GitFork as Github, Link2 as Linkedin, Share2 as Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => (
  <footer
    className="relative py-12 px-8"
    style={{ borderTop: '1px solid rgba(201,162,39,0.1)', background: 'rgba(3,7,18,0.8)' }}
  >
    {/* Top gold line */}
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.4), transparent)' }} />

    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Logo */}
      <motion.a href="#home" whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #c9a227, #8b6914)', boxShadow: '0 0 16px rgba(201,162,39,0.3)' }}
        >
          <span style={{ fontFamily: 'Cinzel, serif', fontWeight: 900, fontSize: '15px', color: '#030712' }}>S</span>
        </div>
        <div>
          <p style={{ fontFamily: 'Cinzel, serif', color: '#c9a227', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em' }}>SUDESH HANSIKA</p>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', color: '#455a64', fontSize: '10px', letterSpacing: '0.05em' }}>Software Engineer</p>
        </div>
      </motion.a>

      {/* Center */}
      <p className="text-xs text-center" style={{ color: '#455a64', fontFamily: 'JetBrains Mono, monospace' }}>
        Built with <Heart size={10} style={{ display: 'inline', color: '#c9a227' }} /> using React & Three.js
        <br />
        <span style={{ color: '#37474f' }}>© {new Date().getFullYear()} Sudesh Hansika. All rights reserved.</span>
      </p>

      {/* Socials */}
      <div className="flex gap-3">
        {[
          { icon: Github, href: 'https://github.com/Sudesh-2002' },
          { icon: Linkedin, href: 'https://linkedin.com/in/sudeshhansika' },
          { icon: Twitter, href: 'https://twitter.com/sudeshhansika' },
          { icon: Mail, href: 'mailto:sudeshhansika@gmail.com' },
        ].map(({ icon: Icon, href }, i) => (
          <motion.a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(201,162,39,0.06)',
              border: '1px solid rgba(201,162,39,0.15)',
              color: '#607d8b',
            }}
          >
            <Icon size={15} />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;