import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, GitFork, Link2, Share2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative py-12 border-t"
      style={{
        borderColor: 'rgba(99, 102, 241, 0.15)',
        background: 'rgba(5, 8, 22, 0.8)',
      }}
    >
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              <Code2 size={18} className="text-white" />
            </div>
            <span
              className="font-bold text-lg gradient-text"
              style={{ fontFamily: 'Space Grotesk' }}
            >
              Sudesh<span style={{ color: '#06b6d4' }}>.dev</span>
            </span>
          </motion.div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Designed & Built with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-pink-500 fill-pink-500" />
            </motion.span>
            by <span className="text-white font-medium">Sudesh Hansika</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </p>

          {/* Social + Scroll Top */}
          <div className="flex items-center gap-3">
            {[
              { icon: GitFork, href: 'https://github.com/sudeshhansika' },
              { icon: Link2, href: 'https://linkedin.com/in/sudeshhansika' },
              { icon: Share2, href: 'https://twitter.com/sudeshhansika' },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(99,102,241,0.2)' }}
              >
                <Icon size={16} />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white ml-2"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              title="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 text-xs font-mono">
            &lt;Built with React + Tailwind + Framer Motion /&gt;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
