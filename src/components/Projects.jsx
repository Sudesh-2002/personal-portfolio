import React, { useEffect, useRef, useState, useCallback } from 'react';

// ─── Project Data ────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'InternHub Platform',
    category: 'Full Stack',
    description: 'A comprehensive internship management platform connecting students, companies, and administrators. Features real-time notifications, advanced search, and analytics dashboard.',
    tech: ['React', 'Laravel', 'MySQL', 'Tailwind', 'Redis'],
    github: 'https://github.com/Sudesh-2002/internhub',
    live: '#',
    featured: true,
    accentColor: '#c9a227',
    wall: 'left',
    icon: '🏢',
    frame: 'gold',
  },
  {
    id: 2,
    title: 'E-Commerce Store',
    category: 'Full Stack',
    description: 'A modern e-commerce platform with real-time inventory, payment gateway integration, and a beautiful product catalog with advanced filtering.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    github: 'https://github.com/Sudesh-2002/ecommerce',
    live: '#',
    featured: true,
    accentColor: '#b0bec5',
    wall: 'right',
    icon: '🛍️',
    frame: 'silver',
  },
  {
    id: 3,
    title: 'AI Chat Application',
    category: 'AI/ML',
    description: 'Real-time AI-powered chat app integrating OpenAI GPT with conversation history, context management, and custom personality modes.',
    tech: ['React', 'Node.js', 'OpenAI', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/Sudesh-2002/ai-chat',
    live: '#',
    featured: false,
    accentColor: '#e8c547',
    wall: 'left',
    icon: '🤖',
    frame: 'gold',
  },
  {
    id: 4,
    title: 'Task Management App',
    category: 'Frontend',
    description: 'A Notion-inspired task management tool with drag-and-drop boards, team collaboration, real-time updates, and productivity analytics.',
    tech: ['React', 'TypeScript', 'Firebase', 'DND Kit', 'Zustand'],
    github: 'https://github.com/Sudesh-2002/taskflow',
    live: '#',
    featured: false,
    accentColor: '#c9a227',
    wall: 'right',
    icon: '📋',
    frame: 'gold',
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    category: 'Frontend',
    description: 'A beautiful weather dashboard with animated icons, 7-day forecasts, air quality index, and location-based weather alerts.',
    tech: ['React', 'TypeScript', 'Chart.js', 'Weather API', 'Tailwind'],
    github: 'https://github.com/Sudesh-2002/weather-dash',
    live: '#',
    featured: false,
    accentColor: '#b0bec5',
    wall: 'left',
    icon: '🌤️',
    frame: 'silver',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'Frontend',
    description: 'This very portfolio! Built with React, Tailwind, Framer Motion, and Three.js. Features 3D animations, custom cursor, and gold/silver aesthetics.',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Three.js', 'Vite'],
    github: 'https://github.com/Sudesh-2002/personal-portfolio',
    live: '#',
    featured: false,
    accentColor: '#e8c547',
    wall: 'right',
    icon: '💼',
    frame: 'gold',
  },
];

// ─── Painting Component ───────────────────────────────────────────────────────
const Painting = ({ project, position, onClick, isActive }) => {
  const { wall, accentColor, frame } = project;
  const isLeft = wall === 'left';

  const frameGold = '#c9a227';
  const frameSilver = '#b0bec5';
  const frameColor = frame === 'gold' ? frameGold : frameSilver;
  const frameColorDim = frame === 'gold' ? '#8b6914' : '#607d8b';

  return (
    <div
      className="painting-wrapper"
      style={{
        position: 'absolute',
        top: position.top,
        left: isLeft ? '0' : 'auto',
        right: isLeft ? 'auto' : '0',
        width: '180px',
        cursor: 'pointer',
        transform: isLeft
          ? `translateZ(${position.z}px) translateX(-50px) rotateY(35deg)`
          : `translateZ(${position.z}px) translateX(50px) rotateY(-35deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.4s ease',
        zIndex: isActive ? 10 : 1,
      }}
      onClick={() => onClick(project)}
    >
      {/* Picture Frame */}
      <div
        style={{
          position: 'relative',
          padding: '10px',
          background: `linear-gradient(145deg, ${frameColor}, ${frameColorDim}, ${frameColor})`,
          borderRadius: '4px',
          boxShadow: isActive
            ? `0 0 40px ${accentColor}88, 0 0 80px ${accentColor}44, -20px 20px 60px rgba(0,0,0,0.8)`
            : `-10px 15px 40px rgba(0,0,0,0.7), 0 0 15px ${accentColor}22`,
          transition: 'box-shadow 0.4s ease',
        }}
      >
        {/* Inner frame bevel */}
        <div style={{
          position: 'absolute', inset: '4px',
          border: `2px solid ${frameColorDim}`,
          borderRadius: '2px',
          pointerEvents: 'none',
          zIndex: 2,
        }} />

        {/* Canvas / Painting */}
        <div
          style={{
            width: '160px',
            height: '110px',
            background: `linear-gradient(135deg, #030712 0%, #071023 50%, #0a1628 100%)`,
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          {/* Abstract art background */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse at 30% 40%, ${accentColor}18 0%, transparent 60%),
                         radial-gradient(ellipse at 70% 70%, ${accentColor}0d 0%, transparent 50%)`,
          }} />

          {/* Corner ornaments */}
          {['0 0', '100% 0', '0 100%', '100% 100%'].map((pos, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: '16px', height: '16px',
              left: i % 2 === 0 ? '4px' : 'auto',
              right: i % 2 === 1 ? '4px' : 'auto',
              top: i < 2 ? '4px' : 'auto',
              bottom: i >= 2 ? '4px' : 'auto',
              borderTop: i < 2 ? `1px solid ${accentColor}66` : 'none',
              borderBottom: i >= 2 ? `1px solid ${accentColor}66` : 'none',
              borderLeft: i % 2 === 0 ? `1px solid ${accentColor}66` : 'none',
              borderRight: i % 2 === 1 ? `1px solid ${accentColor}66` : 'none',
            }} />
          ))}

          {/* Icon */}
          <div style={{ fontSize: '28px', position: 'relative', zIndex: 1 }}>
            {project.icon}
          </div>

          {/* Title */}
          <div style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '9px',
            fontWeight: '700',
            color: frameColor,
            textAlign: 'center',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            position: 'relative', zIndex: 1,
            padding: '0 8px',
            lineHeight: 1.3,
          }}>
            {project.title}
          </div>

          {/* Category badge */}
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '7px',
            color: accentColor,
            letterSpacing: '0.12em',
            position: 'relative', zIndex: 1,
          }}>
            {project.category}
          </div>

          {/* Scan line effect */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
            pointerEvents: 'none',
          }} />

          {/* Hover glow overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(135deg, ${accentColor}00, ${accentColor}08)`,
            opacity: isActive ? 1 : 0,
            transition: 'opacity 0.3s',
          }} />
        </div>

        {/* Nameplate */}
        <div style={{
          marginTop: '6px',
          textAlign: 'center',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '7px',
          color: frameColorDim,
          letterSpacing: '0.1em',
        }}>
          ── {project.id.toString().padStart(2, '0')} ──
        </div>
      </div>

      {/* Wall mounting shadow */}
      <div style={{
        position: 'absolute',
        bottom: '-8px',
        left: '10%', right: '10%',
        height: '8px',
        background: 'rgba(0,0,0,0.5)',
        filter: 'blur(6px)',
      }} />
    </div>
  );
};

// ─── Human Figure SVG ─────────────────────────────────────────────────────────
const HumanFigure = ({ lookAngle }) => {
  // lookAngle: -1 = full left, 0 = center, 1 = full right
  const headRotate = lookAngle * 55;
  const bodyRotate = lookAngle * 20;
  const shoulderTilt = lookAngle * 8;

  return (
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '200px',
      zIndex: 5,
      pointerEvents: 'none',
    }}>
      <svg width="80" height="200" viewBox="0 0 80 200" xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}>
        <defs>
          <radialGradient id="goldGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e8c547" />
            <stop offset="100%" stopColor="#8b6914" />
          </radialGradient>
          <radialGradient id="skinGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#f5d5a8" />
            <stop offset="100%" stopColor="#d4a574" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="coatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a2a4a" />
            <stop offset="50%" stopColor="#0d1f3c" />
            <stop offset="100%" stopColor="#071023" />
          </linearGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="40" cy="198" rx="22" ry="4" fill="rgba(0,0,0,0.5)" />

        {/* === BODY GROUP (slight tilt with look direction) === */}
        <g transform={`translate(40,100) rotate(${bodyRotate}) translate(-40,-100)`}
          style={{ transition: 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1)' }}>

          {/* Coat/Jacket body */}
          <path d="M22,85 Q18,100 16,140 L26,140 Q28,115 30,105 L50,105 Q52,115 54,140 L64,140 Q62,100 58,85 Q50,80 40,80 Q30,80 22,85 Z"
            fill="url(#coatGrad)" stroke="rgba(201,162,39,0.3)" strokeWidth="0.5" />

          {/* Lapels */}
          <path d="M32,83 L36,100 L40,95 L44,100 L48,83" fill="none" stroke="#c9a227" strokeWidth="0.8" opacity="0.6" />

          {/* Gold buttons */}
          {[92, 100, 108].map((y, i) => (
            <circle key={i} cx="40" cy={y} r="1.5" fill="#c9a227" filter="url(#glow)" />
          ))}

          {/* Pants */}
          <path d="M26,140 L22,200 L32,200 L40,165 L48,200 L58,200 L54,140 Z"
            fill="#0a1628" stroke="rgba(176,190,197,0.2)" strokeWidth="0.5" />

          {/* Leg crease highlight */}
          <line x1="28" y1="145" x2="25" y2="195" stroke="rgba(176,190,197,0.15)" strokeWidth="0.5" />
          <line x1="52" y1="145" x2="55" y2="195" stroke="rgba(176,190,197,0.15)" strokeWidth="0.5" />

          {/* Shoes */}
          <ellipse cx="27" cy="200" rx="7" ry="3" fill="#1a1a2e" />
          <ellipse cx="53" cy="200" rx="7" ry="3" fill="#1a1a2e" />

          {/* === SHOULDERS (tilt with look) === */}
          <g transform={`translate(40,83) rotate(${shoulderTilt}) translate(-40,-83)`}
            style={{ transition: 'transform 0.5s ease' }}>

            {/* Left arm */}
            <path d="M22,85 Q10,90 8,115 Q12,116 16,115 Q18,100 26,95 Z"
              fill="url(#coatGrad)" stroke="rgba(201,162,39,0.2)" strokeWidth="0.5" />
            {/* Left hand */}
            <ellipse cx="10" cy="118" rx="5" ry="4" fill="url(#skinGrad)" />

            {/* Right arm */}
            <path d="M58,85 Q70,90 72,115 Q68,116 64,115 Q62,100 54,95 Z"
              fill="url(#coatGrad)" stroke="rgba(201,162,39,0.2)" strokeWidth="0.5" />
            {/* Right hand */}
            <ellipse cx="70" cy="118" rx="5" ry="4" fill="url(#skinGrad)" />
          </g>
        </g>

        {/* === NECK === */}
        <g style={{ transition: 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1)' }}
          transform={`translate(40,80) rotate(${headRotate * 0.15}) translate(-40,-80)`}>
          <rect x="36" y="68" width="8" height="14" rx="3" fill="url(#skinGrad)" />

          {/* Collar */}
          <path d="M30,78 L36,74 L40,76 L44,74 L50,78" fill="none"
            stroke="#c9a227" strokeWidth="1" opacity="0.7" />
        </g>

        {/* === HEAD GROUP (full rotation) === */}
        <g transform={`translate(40,60) rotate(${headRotate}) translate(-40,-60)`}
          style={{ transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)' }}>

          {/* Hair */}
          <path d="M25,56 Q27,44 40,42 Q53,44 55,56 Q52,48 40,47 Q28,48 25,56 Z"
            fill="#1a0a00" />

          {/* Head */}
          <ellipse cx="40" cy="60" rx="15" ry="16" fill="url(#skinGrad)" />

          {/* Face details */}
          {/* Eyes */}
          <ellipse cx="35" cy="57" rx="2.5" ry="3" fill="#2a1a0a" />
          <ellipse cx="45" cy="57" rx="2.5" ry="3" fill="#2a1a0a" />
          {/* Eye shine */}
          <circle cx="36" cy="56" r="0.8" fill="white" opacity="0.8" />
          <circle cx="46" cy="56" r="0.8" fill="white" opacity="0.8" />

          {/* Eyebrows */}
          <path d="M32,54 Q35,52 38,53" stroke="#1a0a00" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M42,53 Q45,52 48,54" stroke="#1a0a00" strokeWidth="1.2" fill="none" strokeLinecap="round" />

          {/* Nose */}
          <path d="M39,61 Q38,64 40,65 Q42,64 41,61" stroke="#c4906a" strokeWidth="0.8" fill="none" />

          {/* Mouth */}
          <path d="M36,69 Q40,72 44,69" stroke="#a0644a" strokeWidth="1" fill="none" strokeLinecap="round" />

          {/* Ear */}
          <ellipse cx="25" cy="62" rx="3" ry="4" fill="#d4a574" />
          <ellipse cx="55" cy="62" rx="3" ry="4" fill="#d4a574" />

          {/* Gold aura when looking sideways */}
          {Math.abs(lookAngle) > 0.3 && (
            <circle cx="40" cy="60" r="18" fill="none"
              stroke="#c9a227" strokeWidth="0.5" opacity={Math.abs(lookAngle) * 0.4}
              filter="url(#glow)" />
          )}
        </g>
      </svg>
    </div>
  );
};

// ─── Project Popup ────────────────────────────────────────────────────────────
const ProjectPopup = ({ project, onClose }) => {
  if (!project) return null;
  const { accentColor, frame } = project;
  const frameColor = frame === 'gold' ? '#c9a227' : '#b0bec5';
  const frameColorDim = frame === 'gold' ? '#8b6914' : '#607d8b';

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(3,7,18,0.88)',
        backdropFilter: 'blur(12px)',
        animation: 'popupIn 0.35s cubic-bezier(0.34,1.56,0.64,1)',
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .popup-btn:hover { opacity: 0.85; transform: translateY(-2px); }
        .popup-btn { transition: all 0.2s ease; }
        .tech-tag:hover { border-color: ${accentColor}88 !important; background: rgba(201,162,39,0.12) !important; }
        .tech-tag { transition: all 0.2s ease; }
      `}</style>

      <div style={{
        width: 'min(520px, 92vw)',
        background: 'linear-gradient(145deg, #030712, #071023, #050d1a)',
        border: `1px solid ${frameColor}44`,
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: `0 0 80px ${accentColor}33, 0 40px 80px rgba(0,0,0,0.8), inset 0 1px 0 ${frameColor}22`,
        position: 'relative',
      }}>
        {/* Frame border decoration - top */}
        <div style={{
          height: '3px',
          background: `linear-gradient(90deg, transparent 0%, ${frameColor} 20%, ${accentColor} 50%, ${frameColor} 80%, transparent 100%)`,
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s linear infinite',
        }} />

        {/* Corner ornaments */}
        {[
          { top: 12, left: 12 },
          { top: 12, right: 12 },
          { bottom: 12, left: 12 },
          { bottom: 12, right: 12 },
        ].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute', width: '20px', height: '20px',
            ...pos,
            borderTop: i < 2 ? `1px solid ${frameColor}66` : 'none',
            borderBottom: i >= 2 ? `1px solid ${frameColor}66` : 'none',
            borderLeft: i % 2 === 0 ? `1px solid ${frameColor}66` : 'none',
            borderRight: i % 2 === 1 ? `1px solid ${frameColor}66` : 'none',
          }} />
        ))}

        <div style={{ padding: '32px 36px 28px' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div>
              {project.featured && (
                <div style={{
                  display: 'inline-block',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '9px', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: accentColor,
                  border: `1px solid ${accentColor}44`,
                  borderRadius: '20px',
                  padding: '3px 10px',
                  marginBottom: '10px',
                  background: `${accentColor}11`,
                }}>
                  ✦ Featured Work
                </div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '36px' }}>{project.icon}</span>
                <div>
                  <h3 style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '20px', fontWeight: 700,
                    color: '#e8edf5', letterSpacing: '0.04em',
                    lineHeight: 1.2,
                  }}>
                    {project.title}
                  </h3>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px', color: accentColor,
                    letterSpacing: '0.1em', marginTop: '2px',
                  }}>
                    {project.category}
                  </div>
                </div>
              </div>
            </div>

            <button onClick={onClose} style={{
              width: '32px', height: '32px',
              background: 'rgba(176,190,197,0.06)',
              border: '1px solid rgba(176,190,197,0.15)',
              borderRadius: '50%', color: '#b0bec5',
              cursor: 'pointer', fontSize: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', flexShrink: 0,
            }}>×</button>
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${frameColor}44, transparent)`,
            marginBottom: '20px',
          }} />

          {/* Description */}
          <p style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: '15px', lineHeight: '1.7',
            color: '#90a4ae', marginBottom: '24px',
          }}>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '9px', color: frameColorDim,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              marginBottom: '10px',
            }}>
              ── Tech Stack ──
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.map((t) => (
                <span key={t} className="tech-tag" style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  background: 'rgba(201,162,39,0.06)',
                  border: '1px solid rgba(201,162,39,0.2)',
                  color: '#90a4ae',
                  cursor: 'default',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="popup-btn"
              style={{
                flex: 1, padding: '12px',
                background: `linear-gradient(135deg, ${frameColor}18, ${frameColor}08)`,
                border: `1px solid ${frameColor}44`,
                borderRadius: '6px',
                color: frameColor,
                textDecoration: 'none',
                fontFamily: 'Cinzel, serif',
                fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.06em',
                textAlign: 'center', display: 'block',
                cursor: 'pointer',
              }}>
              ⬡ GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="popup-btn"
              style={{
                flex: 1, padding: '12px',
                background: `linear-gradient(135deg, ${accentColor}22, ${accentColor}0a)`,
                border: `1px solid ${accentColor}55`,
                borderRadius: '6px',
                color: accentColor,
                textDecoration: 'none',
                fontFamily: 'Cinzel, serif',
                fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.06em',
                textAlign: 'center', display: 'block',
                cursor: 'pointer',
              }}>
              ◈ Live Demo
            </a>
          </div>
        </div>

        {/* Bottom frame */}
        <div style={{
          height: '3px',
          background: `linear-gradient(90deg, transparent 0%, ${frameColorDim} 50%, transparent 100%)`,
        }} />
      </div>
    </div>
  );
};

// ─── Main Hallway Component ───────────────────────────────────────────────────
const Projects = () => {
  const containerRef = useRef(null);
  const [scrollZ, setScrollZ] = useState(0);       // how far we've walked
  const [lookAngle, setLookAngle] = useState(0);   // -1 to 1
  const [hoveredWall, setHoveredWall] = useState(null); // 'left' | 'right' | null
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredPainting, setHoveredPainting] = useState(null);

  const MAX_SCROLL = 1200;
  const HALLWAY_LENGTH = MAX_SCROLL + 400;

  // Mouse move → look angle
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientWidth } = { clientX: e.clientX, clientWidth: window.innerWidth };
    const normalized = (clientX / clientWidth) * 2 - 1; // -1 to 1
    setLookAngle(normalized);

    // Determine which wall side
    if (normalized < -0.25) setHoveredWall('left');
    else if (normalized > 0.25) setHoveredWall('right');
    else setHoveredWall(null);
  }, []);

  // Touch support
  const handleTouchMove = useCallback((e) => {
    const touch = e.touches[0];
    const normalized = (touch.clientX / window.innerWidth) * 2 - 1;
    setLookAngle(normalized);
    if (normalized < -0.25) setHoveredWall('left');
    else if (normalized > 0.25) setHoveredWall('right');
    else setHoveredWall(null);
  }, []);

  // Scroll → walk forward
  const handleWheel = useCallback((e) => {
    if (selectedProject) return;
    setScrollZ(prev => Math.max(0, Math.min(MAX_SCROLL, prev + e.deltaY * 0.8)));
  }, [selectedProject]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMouseMove, handleWheel, handleTouchMove]);

  // Layout paintings along the hallway
  const leftProjects = projects.filter(p => p.wall === 'left');
  const rightProjects = projects.filter(p => p.wall === 'right');

  const getPaintingStyle = (index, side) => {
    const spacing = HALLWAY_LENGTH / (leftProjects.length + 1);
    const zPos = -(index + 1) * spacing;
    return { z: zPos, top: '30%' };
  };

  // Camera z position based on scroll
  const cameraZ = scrollZ;

  // Fog / depth effect color
  const fogAmount = Math.min(scrollZ / MAX_SCROLL, 1);

  return (
    <section id="projects" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
      padding: '60px 0 0',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Rajdhani:wght@400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .hallway-section { font-family: 'Rajdhani', sans-serif; }

        .painting-wrapper:hover .painting-glow { opacity: 1 !important; }

        @keyframes torchFlicker {
          0%, 100% { opacity: 0.7; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
          25%, 75% { opacity: 0.85; transform: scaleY(0.95); }
        }

        @keyframes dustMote {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.4; }
          100% { transform: translateY(-80px) translateX(20px); opacity: 0; }
        }

        @keyframes floorShimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes scrollHint {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(8px); opacity: 1; }
        }

        .scroll-hint { animation: scrollHint 1.8s ease-in-out infinite; }

        .painting-wrapper {
          transition: filter 0.3s ease;
        }
        .painting-wrapper:hover {
          filter: brightness(1.2);
        }
      `}</style>

      {/* Section Title */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px',
        position: 'relative', zIndex: 10,
      }}>
        <p style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px', letterSpacing: '0.2em',
          color: '#c9a227', marginBottom: '8px',
          textTransform: 'uppercase',
        }}>
          // what I've built
        </p>
        <h2 style={{
          fontFamily: 'Cinzel, serif',
          fontSize: 'clamp(24px, 4vw, 38px)',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #e8c547, #c9a227, #8b6914, #c9a227, #e8c547)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.06em',
        }}>
          The Gallery
        </h2>
        <div style={{
          width: '80px', height: '1px', margin: '12px auto 0',
          background: 'linear-gradient(90deg, transparent, #c9a227, transparent)',
        }} />
      </div>

      {/* Hallway Viewport */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          maxWidth: '900px',
          height: '520px',
          position: 'relative',
          perspective: '800px',
          perspectiveOrigin: `${50 + lookAngle * 15}% 55%`,
          transition: 'perspective-origin 0.3s ease',
          cursor: 'crosshair',
          overflow: 'hidden',
        }}
      >
        {/* 3D Scene */}
        <div style={{
          position: 'absolute', inset: 0,
          transformStyle: 'preserve-3d',
        }}>
          {/* ── HALLWAY GEOMETRY ── */}
          <div style={{
            position: 'absolute', inset: 0,
            transformStyle: 'preserve-3d',
            transform: `translateZ(${cameraZ}px)`,
            transition: 'transform 0.1s linear',
          }}>

            {/* FLOOR */}
            <div style={{
              position: 'absolute',
              width: '900px', height: `${HALLWAY_LENGTH + 800}px`,
              bottom: '-100px', left: '0',
              transform: 'rotateX(85deg) translateZ(-60px)',
              transformOrigin: 'bottom center',
              background: `
                linear-gradient(180deg, #030712 0%, #050d1a 20%, #071023 60%, #0a1628 100%)
              `,
              backgroundSize: '60px 60px',
            }}>
              {/* Floor tiles */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(201,162,39,0.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201,162,39,0.06) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }} />
              {/* Floor center runner */}
              <div style={{
                position: 'absolute',
                width: '120px', height: '100%',
                left: '50%', transform: 'translateX(-50%)',
                background: 'linear-gradient(180deg, rgba(201,162,39,0.12), rgba(201,162,39,0.04))',
                borderLeft: '1px solid rgba(201,162,39,0.15)',
                borderRight: '1px solid rgba(201,162,39,0.15)',
              }} />
              {/* Reflection shimmer */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(201,162,39,0.05) 0%, transparent 40%)',
                animation: 'floorShimmer 3s ease-in-out infinite',
              }} />
            </div>

            {/* CEILING */}
            <div style={{
              position: 'absolute',
              width: '900px', height: `${HALLWAY_LENGTH + 800}px`,
              top: '-50px', left: '0',
              transform: 'rotateX(-85deg) translateZ(-20px)',
              transformOrigin: 'top center',
              background: 'linear-gradient(180deg, #030712 0%, #050d1a 100%)',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(176,190,197,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(176,190,197,0.03) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
              }} />
              {/* Ceiling center light strip */}
              <div style={{
                position: 'absolute',
                width: '2px', height: '100%',
                left: '50%', transform: 'translateX(-50%)',
                background: 'linear-gradient(180deg, rgba(201,162,39,0.6), rgba(201,162,39,0.1))',
                boxShadow: '0 0 20px rgba(201,162,39,0.4)',
              }} />
            </div>

            {/* LEFT WALL */}
            <div style={{
              position: 'absolute',
              width: `${HALLWAY_LENGTH + 800}px`, height: '520px',
              top: '0', left: '-30px',
              transform: 'rotateY(85deg)',
              transformOrigin: 'left center',
              background: `linear-gradient(180deg, #050d1a 0%, #071023 40%, #0a1628 100%)`,
            }}>
              {/* Wall texture */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(176,190,197,0.02) 40px, rgba(176,190,197,0.02) 41px),
                  repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(176,190,197,0.015) 80px, rgba(176,190,197,0.015) 81px)
                `,
              }} />
              {/* Wainscoting */}
              <div style={{
                position: 'absolute', bottom: '0', left: '0', right: '0',
                height: '80px',
                background: 'linear-gradient(180deg, transparent, rgba(201,162,39,0.04))',
                borderTop: '1px solid rgba(201,162,39,0.12)',
              }} />
              {/* Chair rail */}
              <div style={{
                position: 'absolute', top: '60%', left: '0', right: '0',
                height: '2px',
                background: 'linear-gradient(90deg, rgba(201,162,39,0.3), rgba(201,162,39,0.1))',
              }} />

              {/* Torch sconces */}
              {[200, 500, 800, 1100].map((x, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  left: `${x}px`, top: '15%',
                  width: '20px',
                }}>
                  {/* Sconce bracket */}
                  <div style={{
                    width: '12px', height: '20px',
                    background: '#c9a227',
                    margin: '0 auto',
                    borderRadius: '2px 2px 0 0',
                  }} />
                  {/* Flame */}
                  <div style={{
                    width: '16px', height: '24px',
                    margin: '-4px auto 0',
                    background: 'radial-gradient(ellipse at bottom, #e8c547, #ff8800, transparent)',
                    borderRadius: '50% 50% 30% 30%',
                    animation: `torchFlicker ${1.5 + i * 0.3}s ease-in-out infinite`,
                    filter: 'blur(1px)',
                  }} />
                  {/* Light pool */}
                  <div style={{
                    position: 'absolute', top: '0', left: '-30px',
                    width: '80px', height: '120px',
                    background: 'radial-gradient(ellipse, rgba(201,162,39,0.12) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }} />
                </div>
              ))}
            </div>

            {/* RIGHT WALL */}
            <div style={{
              position: 'absolute',
              width: `${HALLWAY_LENGTH + 800}px`, height: '520px',
              top: '0', right: '-30px',
              transform: 'rotateY(-85deg)',
              transformOrigin: 'right center',
              background: `linear-gradient(180deg, #050d1a 0%, #071023 40%, #0a1628 100%)`,
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(176,190,197,0.02) 40px, rgba(176,190,197,0.02) 41px),
                  repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(176,190,197,0.015) 80px, rgba(176,190,197,0.015) 81px)
                `,
              }} />
              <div style={{
                position: 'absolute', bottom: '0', left: '0', right: '0',
                height: '80px',
                background: 'linear-gradient(180deg, transparent, rgba(201,162,39,0.04))',
                borderTop: '1px solid rgba(201,162,39,0.12)',
              }} />
              <div style={{
                position: 'absolute', top: '60%', left: '0', right: '0',
                height: '2px',
                background: 'linear-gradient(90deg, rgba(201,162,39,0.1), rgba(201,162,39,0.3))',
              }} />

              {/* Torch sconces right */}
              {[300, 600, 900, 1200].map((x, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  left: `${x}px`, top: '15%',
                  width: '20px',
                }}>
                  <div style={{
                    width: '12px', height: '20px',
                    background: '#c9a227', margin: '0 auto',
                    borderRadius: '2px 2px 0 0',
                  }} />
                  <div style={{
                    width: '16px', height: '24px',
                    margin: '-4px auto 0',
                    background: 'radial-gradient(ellipse at bottom, #e8c547, #ff8800, transparent)',
                    borderRadius: '50% 50% 30% 30%',
                    animation: `torchFlicker ${1.8 + i * 0.25}s ease-in-out infinite`,
                    filter: 'blur(1px)',
                  }} />
                </div>
              ))}
            </div>

            {/* END WALL */}
            <div style={{
              position: 'absolute',
              width: '900px', height: '520px',
              top: '0', left: '0',
              transform: `translateZ(-${HALLWAY_LENGTH}px)`,
              background: 'linear-gradient(180deg, #030712, #050d1a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '14px', color: 'rgba(201,162,39,0.3)',
                letterSpacing: '0.3em', textTransform: 'uppercase',
                textAlign: 'center',
              }}>
                — End of Gallery —<br />
                <span style={{ fontSize: '10px', letterSpacing: '0.15em' }}>
                  More coming soon
                </span>
              </div>
            </div>

            {/* ── PAINTINGS ── */}
            {/* Left wall paintings */}
            {leftProjects.map((project, i) => {
              const spacing = HALLWAY_LENGTH / (leftProjects.length + 1);
              const zPos = -(i + 1) * spacing;
              const relZ = zPos + cameraZ; // relative to camera
              const isVisible = relZ > -800 && relZ < 200;
              const isHovered = hoveredPainting === project.id;

              return (
                <div
                  key={project.id}
                  style={{
                    position: 'absolute',
                    top: '18%',
                    left: '2%',
                    transform: `translateZ(${zPos}px)`,
                    opacity: isVisible ? Math.max(0.2, 1 - Math.abs(relZ) / 600) : 0,
                    transition: 'opacity 0.3s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHoveredPainting(project.id)}
                  onMouseLeave={() => setHoveredPainting(null)}
                  onClick={() => setSelectedProject(project)}
                >
                  <Painting
                    project={project}
                    position={{ top: 0, z: 0 }}
                    onClick={setSelectedProject}
                    isActive={isHovered}
                  />
                </div>
              );
            })}

            {/* Right wall paintings */}
            {rightProjects.map((project, i) => {
              const spacing = HALLWAY_LENGTH / (rightProjects.length + 1);
              const zPos = -(i + 1) * spacing - spacing * 0.3; // slightly offset
              const relZ = zPos + cameraZ;
              const isVisible = relZ > -800 && relZ < 200;
              const isHovered = hoveredPainting === project.id;

              return (
                <div
                  key={project.id}
                  style={{
                    position: 'absolute',
                    top: '18%',
                    right: '2%',
                    transform: `translateZ(${zPos}px)`,
                    opacity: isVisible ? Math.max(0.2, 1 - Math.abs(relZ) / 600) : 0,
                    transition: 'opacity 0.3s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHoveredPainting(project.id)}
                  onMouseLeave={() => setHoveredPainting(null)}
                  onClick={() => setSelectedProject(project)}
                >
                  <Painting
                    project={{ ...project, wall: 'right' }}
                    position={{ top: 0, z: 0 }}
                    onClick={setSelectedProject}
                    isActive={isHovered}
                  />
                </div>
              );
            })}

            {/* Dust motes */}
            {[...Array(8)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: '3px', height: '3px',
                borderRadius: '50%',
                background: 'rgba(201,162,39,0.4)',
                left: `${15 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
                transform: `translateZ(${-100 - i * 80}px)`,
                animation: `dustMote ${3 + i * 0.7}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }} />
            ))}
          </div>

          {/* ── HUMAN FIGURE (fixed, doesn't scroll) ── */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0', right: '0',
            height: '100%',
            pointerEvents: 'none',
          }}>
            <HumanFigure lookAngle={lookAngle} />
          </div>

          {/* Look direction indicator lines */}
          {Math.abs(lookAngle) > 0.3 && (
            <div style={{
              position: 'absolute',
              bottom: '30%',
              left: lookAngle < 0 ? '10%' : '50%',
              right: lookAngle > 0 ? '10%' : '50%',
              height: '1px',
              background: `linear-gradient(${lookAngle < 0 ? '90deg' : '270deg'}, transparent, rgba(201,162,39,${Math.abs(lookAngle) * 0.3}))`,
              pointerEvents: 'none',
              transition: 'all 0.3s ease',
            }} />
          )}
        </div>

        {/* Fog overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(3,7,18,${0.2 + fogAmount * 0.3}) 100%)`,
          pointerEvents: 'none',
          zIndex: 4,
        }} />

        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(3,7,18,0.7) 100%)',
          pointerEvents: 'none',
          zIndex: 4,
        }} />

        {/* Wall hover highlight */}
        {hoveredWall && (
          <div style={{
            position: 'absolute',
            top: 0, bottom: 0,
            left: hoveredWall === 'left' ? 0 : 'auto',
            right: hoveredWall === 'right' ? 0 : 'auto',
            width: '30%',
            background: `linear-gradient(${hoveredWall === 'left' ? '90deg' : '270deg'}, rgba(201,162,39,0.04), transparent)`,
            pointerEvents: 'none',
            zIndex: 5,
            transition: 'opacity 0.3s',
          }} />
        )}
      </div>

      {/* Controls UI */}
      <div style={{
        marginTop: '24px',
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Scroll progress */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '9px', color: '#455a64',
            letterSpacing: '0.15em', marginBottom: '6px',
            textTransform: 'uppercase',
          }}>
            Progress
          </div>
          <div style={{
            width: '120px', height: '2px',
            background: 'rgba(176,190,197,0.1)',
            borderRadius: '2px', overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${(scrollZ / MAX_SCROLL) * 100}%`,
              background: 'linear-gradient(90deg, #c9a227, #e8c547)',
              transition: 'width 0.1s linear',
            }} />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint" style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '9px', color: '#c9a227',
            letterSpacing: '0.12em',
          }}>
            ↕ scroll to walk
          </div>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '9px', color: '#455a64',
            letterSpacing: '0.1em', marginTop: '2px',
          }}>
            ↔ move to look · click to explore
          </div>
        </div>

        {/* Project counter */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '9px', color: '#455a64',
            letterSpacing: '0.15em', marginBottom: '4px',
            textTransform: 'uppercase',
          }}>
            Works
          </div>
          <div style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '18px', fontWeight: 700,
            color: '#c9a227',
          }}>
            {String(projects.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* GitHub CTA */}
      <div style={{ textAlign: 'center', marginTop: '32px', marginBottom: '20px' }}>
        <p style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '10px', letterSpacing: '0.18em',
          color: '#455a64', textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          Want to see more?
        </p>
        <a
          href="https://github.com/Sudesh-2002"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 28px',
            fontFamily: 'Cinzel, serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: '#b0bec5',
            background: 'transparent',
            border: '1px solid rgba(176,190,197,0.2)',
            borderRadius: '30px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            e.target.style.borderColor = 'rgba(201,162,39,0.4)';
            e.target.style.color = '#c9a227';
            e.target.style.background = 'rgba(201,162,39,0.06)';
          }}
          onMouseLeave={e => {
            e.target.style.borderColor = 'rgba(176,190,197,0.2)';
            e.target.style.color = '#b0bec5';
            e.target.style.background = 'transparent';
          }}
        >
          ⬡ View All on GitHub
        </a>
      </div>

      {/* Project Popup */}
      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;