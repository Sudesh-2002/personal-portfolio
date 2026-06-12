import React, { useEffect, useRef, useState, useCallback } from 'react';

// ─── Project Data ─────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'InternHub Platform',
    category: 'Full Stack',
    description:
      'A comprehensive internship management platform connecting students, companies, and administrators. Features real-time notifications, advanced search, and analytics dashboard.',
    tech: ['React', 'Laravel', 'MySQL', 'Tailwind', 'Redis'],
    github: 'https://github.com/Sudesh-2002/internhub',
    live: '#',
    featured: true,
    accent: '#c9a227',
    frame: 'gold',
    wall: 'left',
    icon: '🏢',
  },
  {
    id: 2,
    title: 'E-Commerce Store',
    category: 'Full Stack',
    description:
      'A modern e-commerce platform with real-time inventory, payment gateway integration, and a beautiful product catalog with advanced filtering.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    github: 'https://github.com/Sudesh-2002/ecommerce',
    live: '#',
    featured: true,
    accent: '#b0bec5',
    frame: 'silver',
    wall: 'right',
    icon: '🛍️',
  },
  {
    id: 3,
    title: 'AI Chat Application',
    category: 'AI/ML',
    description:
      'Real-time AI-powered chat app integrating OpenAI GPT with conversation history, context management, and custom personality modes.',
    tech: ['React', 'Node.js', 'OpenAI', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/Sudesh-2002/ai-chat',
    live: '#',
    featured: false,
    accent: '#e8c547',
    frame: 'gold',
    wall: 'left',
    icon: '🤖',
  },
  {
    id: 4,
    title: 'Task Management App',
    category: 'Frontend',
    description:
      'A Notion-inspired task management tool with drag-and-drop boards, team collaboration, real-time updates, and productivity analytics.',
    tech: ['React', 'TypeScript', 'Firebase', 'DND Kit', 'Zustand'],
    github: 'https://github.com/Sudesh-2002/taskflow',
    live: '#',
    featured: false,
    accent: '#c9a227',
    frame: 'gold',
    wall: 'right',
    icon: '📋',
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    category: 'Frontend',
    description:
      'A beautiful weather dashboard with animated icons, 7-day forecasts, air quality index, and location-based weather alerts.',
    tech: ['React', 'TypeScript', 'Chart.js', 'Weather API', 'Tailwind'],
    github: 'https://github.com/Sudesh-2002/weather-dash',
    live: '#',
    featured: false,
    accent: '#b0bec5',
    frame: 'silver',
    wall: 'left',
    icon: '🌤️',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'Frontend',
    description:
      'This very portfolio! Built with React, Tailwind, Framer Motion, and Three.js. Features 3D animations, custom cursor, and gold/silver aesthetics.',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Three.js', 'Vite'],
    github: 'https://github.com/Sudesh-2002/personal-portfolio',
    live: '#',
    featured: false,
    accent: '#e8c547',
    frame: 'gold',
    wall: 'right',
    icon: '💼',
  },
];

// ─── Global CSS ────────────────────────────────────────────────────────────────
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Rajdhani:wght@400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');

  @keyframes torchFlicker {
    0%,100% { opacity:.72; transform:scaleY(1) scaleX(1) rotate(0deg); }
    20%      { opacity:1;   transform:scaleY(1.18) scaleX(0.86) rotate(-2deg); }
    40%      { opacity:.85; transform:scaleY(0.92) scaleX(1.09) rotate(1.5deg); }
    60%      { opacity:.95; transform:scaleY(1.12) scaleX(0.91) rotate(-1deg); }
    80%      { opacity:.78; transform:scaleY(0.96) scaleX(1.05) rotate(2deg); }
  }
  @keyframes candleFlicker {
    0%,100% { opacity:.80; transform:scaleY(1) scaleX(1) translateX(0); }
    15%     { opacity:1;   transform:scaleY(1.22) scaleX(0.82) translateX(-1px); }
    35%     { opacity:.88; transform:scaleY(0.88) scaleX(1.12) translateX(1px); }
    55%     { opacity:.96; transform:scaleY(1.15) scaleX(0.88) translateX(-0.5px); }
    75%     { opacity:.82; transform:scaleY(0.94) scaleX(1.07) translateX(1.5px); }
  }
  @keyframes candleGlow {
    0%,100% { opacity:.45; }
    33%     { opacity:.72; }
    66%     { opacity:.55; }
  }
  @keyframes innerFlame {
    0%,100% { opacity:.9; transform:scaleY(1) scaleX(1); }
    50%     { opacity:1;  transform:scaleY(1.1) scaleX(0.9); }
  }
  @keyframes shimmerBar {
    0%   { background-position:-200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes popupIn {
    from { opacity:0; transform:scale(0.82) translateY(12px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes walkhint {
    0%,100% { transform:translateY(0) translateX(-50%);   opacity:.55; }
    50%     { transform:translateY(7px) translateX(-50%); opacity:1; }
  }
  @keyframes dustFloat {
    0%   { transform:translateY(0)   translateX(0);   opacity:0; }
    20%  { opacity:.55; }
    80%  { opacity:.35; }
    100% { transform:translateY(-90px) translateX(18px); opacity:0; }
  }
  @keyframes smokeDrift {
    0%   { transform:translateY(0) translateX(0) scale(1); opacity:0.35; }
    100% { transform:translateY(-28px) translateX(4px) scale(1.8); opacity:0; }
  }
  @keyframes candleSmoke {
    0%   { transform:translateY(0) translateX(0) scale(1); opacity:0.28; }
    100% { transform:translateY(-20px) translateX(-3px) scale(1.6); opacity:0; }
  }
  @keyframes breathe {
    0%,100% { transform:translateX(-50%) scaleY(1); }
    50%     { transform:translateX(-50%) scaleY(1.015); }
  }

  .gal-painting      { cursor:pointer; transition:filter .25s, transform .25s; }
  .gal-painting:hover{ filter:brightness(1.5) !important; }
  .gal-popup-btn     { transition:all .2s ease; text-decoration:none; display:block; text-align:center; }
  .gal-popup-btn:hover { opacity:.8; transform:translateY(-2px); }
  .gal-tech-tag      { transition:all .2s; cursor:default; }
  .gal-tech-tag:hover{ background:rgba(201,162,39,.13)!important; border-color:rgba(201,162,39,.5)!important; }
  .gal-hint          { animation:walkhint 1.9s ease-in-out infinite; }
`;

// ═══════════════════════════════════════════════════════════════════════════════
//  ANCIENT CANDLE SCONCE  – wall-mounted with realistic flame
// ═══════════════════════════════════════════════════════════════════════════════
const CandleSconce = ({ zPos, isLeft, index }) => {
  const delay = (index * 0.31).toFixed(2);
  const delay2 = (index * 0.19 + 0.17).toFixed(2);
  const delay3 = (index * 0.43 + 0.09).toFixed(2);
  const dur = (1.6 + index * 0.17).toFixed(2);
  const dur2 = (2.1 + index * 0.13).toFixed(2);

  return (
    <div style={{
      position: 'absolute',
      top: '33%',
      ...(isLeft ? { left: '1.8%' } : { right: '1.8%' }),
      transform: `translateZ(${zPos}px) rotateY(${isLeft ? -82 : 82}deg)`,
      width: 48,
      pointerEvents: 'none',
    }}>
      {/* Wall bracket / sconce arm */}
      <svg width="48" height="72" viewBox="0 0 48 72" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <radialGradient id={`cg${index}`} cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffe066" />
            <stop offset="40%" stopColor="#ff9500" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id={`ig${index}`} cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#fffde0" />
            <stop offset="100%" stopColor="#ffe066" />
          </radialGradient>
        </defs>

        {/* Stone bracket arm */}
        <path d={isLeft
          ? 'M48,38 Q32,38 28,44 L28,50 Q34,50 40,46 L48,46 Z'
          : 'M0,38 Q16,38 20,44 L20,50 Q14,50 8,46 L0,46 Z'}
          fill="#2a2016" stroke="#4a3820" strokeWidth="0.8" />

        {/* Decorative bracket curl */}
        <path d={isLeft
          ? 'M28,44 Q22,50 26,58 Q30,54 28,44'
          : 'M20,44 Q26,50 22,58 Q18,54 20,44'}
          fill="#1e160e" stroke="#4a3820" strokeWidth="0.7" />

        {/* Candle dish / holder base */}
        <ellipse cx="24" cy="52" rx="11" ry="4.5" fill="#3a2a14" stroke="#6b4e22" strokeWidth="0.8" />
        <ellipse cx="24" cy="51" rx="9" ry="3.5" fill="#4a3418" />

        {/* Candle body — dripping wax */}
        <rect x="18" y="22" width="12" height="30" rx="2" fill="#f0e8d0" stroke="#d4c8a8" strokeWidth="0.5" />
        {/* Wax drips */}
        <path d="M18,26 Q16,30 17,36 Q18,32 19,28 Z" fill="#e8dcc0" />
        <path d="M30,32 Q32,37 31,42 Q30,38 29,34 Z" fill="#e8dcc0" />
        <path d="M22,22 Q20,26 21,30 Q22,26 23,23 Z" fill="#ede4cc" />
        {/* Wax texture lines */}
        <line x1="18" y1="30" x2="30" y2="30" stroke="#d4c5a0" strokeWidth="0.4" />
        <line x1="18" y1="38" x2="30" y2="38" stroke="#d4c5a0" strokeWidth="0.4" />
        <line x1="18" y1="46" x2="30" y2="46" stroke="#d4c5a0" strokeWidth="0.4" />

        {/* Wick */}
        <line x1="24" y1="22" x2="24" y2="17" stroke="#2a1a08" strokeWidth="1.2" strokeLinecap="round" />

        {/* Glow halo behind flame */}
        <ellipse cx="24" cy="14" rx="16" ry="14"
          fill={`url(#cg${index})`}
          style={{ animation: `candleGlow ${dur}s ease-in-out ${delay}s infinite` }}
        />

        {/* Outer flame */}
        <ellipse cx="24" cy="13" rx="5.5" ry="9"
          fill="#ff7800"
          style={{ animation: `candleFlicker ${dur}s ease-in-out ${delay}s infinite`, transformOrigin: '24px 20px' }}
        />
        {/* Mid flame */}
        <ellipse cx="24" cy="12" rx="3.8" ry="7"
          fill="#ffaa00"
          style={{ animation: `candleFlicker ${dur2}s ease-in-out ${delay2}s infinite`, transformOrigin: '24px 19px' }}
        />
        {/* Inner flame — bright core */}
        <ellipse cx="24" cy="14" rx="2.2" ry="4.5"
          fill={`url(#ig${index})`}
          style={{ animation: `innerFlame 1.1s ease-in-out ${delay3}s infinite`, transformOrigin: '24px 18px' }}
        />
        {/* Flame tip highlight */}
        <ellipse cx="24" cy="8" rx="1" ry="2.5" fill="#fffde8" opacity="0.9"
          style={{ animation: `innerFlame 0.9s ease-in-out ${delay2}s infinite`, transformOrigin: '24px 11px' }}
        />

        {/* Smoke wisps */}
        <circle cx="24" cy="4" r="2" fill="rgba(200,190,170,0.3)"
          style={{ animation: `candleSmoke ${dur}s ease-out ${delay}s infinite` }} />
        <circle cx="25" cy="2" r="1.5" fill="rgba(200,190,170,0.2)"
          style={{ animation: `candleSmoke ${dur2}s ease-out ${delay2}s infinite` }} />
      </svg>

      {/* Ambient light pool on wall */}
      <div style={{
        position: 'absolute',
        top: -28,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 120,
        height: 90,
        background: 'radial-gradient(ellipse, rgba(255,180,40,0.22) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: `candleGlow ${dur}s ease-in-out ${delay}s infinite`,
      }} />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
//  CHIBI BACK VIEW  (walking away — fully 3D modeled)
// ═══════════════════════════════════════════════════════════════════════════════
const ChibiBack = ({ lookAngle }) => {
  const hr = lookAngle * 52;
  const br = lookAngle * 14;
  const sr = lookAngle * 9;
  const legSwing = lookAngle * 6;

  return (
    <svg width="120" height="260" viewBox="0 0 120 260"
      xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <defs>
        {/* Skin – warm SSS */}
        <radialGradient id="bsk" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#fde8c8" />
          <stop offset="60%" stopColor="#f0c090" />
          <stop offset="100%" stopColor="#d4935e" />
        </radialGradient>
        {/* Skin shadow side */}
        <radialGradient id="bskd" cx="70%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#c8784a" />
          <stop offset="100%" stopColor="#a05030" />
        </radialGradient>
        {/* Hair — deep dark brown, 3-stop */}
        <radialGradient id="bhr" cx="38%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#7a3a12" />
          <stop offset="45%" stopColor="#3e1c06" />
          <stop offset="100%" stopColor="#1e0d02" />
        </radialGradient>
        {/* Hair highlight */}
        <radialGradient id="bhrl" cx="35%" cy="20%" r="50%">
          <stop offset="0%" stopColor="rgba(220,160,80,0.55)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* Jacket — navy 3D */}
        <linearGradient id="bjkt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a5f80" />
          <stop offset="35%" stopColor="#2e3f58" />
          <stop offset="70%" stopColor="#1e2c3f" />
          <stop offset="100%" stopColor="#131d2d" />
        </linearGradient>
        {/* Jacket highlight rim */}
        <linearGradient id="bjktH" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(120,160,220,0.35)" />
          <stop offset="50%" stopColor="rgba(80,110,160,0.1)" />
          <stop offset="100%" stopColor="rgba(40,70,120,0.22)" />
        </linearGradient>
        {/* Trouser */}
        <linearGradient id="btrsr" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#354060" />
          <stop offset="50%" stopColor="#263050" />
          <stop offset="100%" stopColor="#1a2038" />
        </linearGradient>
        {/* Shoe */}
        <radialGradient id="bsh" cx="30%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#3d2560" />
          <stop offset="100%" stopColor="#0e0818" />
        </radialGradient>
        {/* Floor shadow */}
        <radialGradient id="bfshadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.6)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="60" cy="257" rx="32" ry="5" fill="url(#bfshadow)" />

      {/* ── LEGS & SHOES ─────────────────────────────────── */}
      {/* Left leg */}
      <path d={`M46,170 Q44,205 ${43 + legSwing},248 L${53 + legSwing},248 Q55,210 55,170 Z`}
        fill="url(#btrsr)" />
      {/* Right leg */}
      <path d={`M74,170 Q76,205 ${77 - legSwing},248 L${67 - legSwing},248 Q65,210 65,170 Z`}
        fill="url(#btrsr)" />
      {/* Crease lines */}
      <line x1="49" y1="175" x2="46" y2="240" stroke="rgba(150,180,230,0.12)" strokeWidth="0.7" />
      <line x1="71" y1="175" x2="74" y2="240" stroke="rgba(150,180,230,0.12)" strokeWidth="0.7" />

      {/* Left shoe */}
      <ellipse cx={47 + legSwing} cy="250" rx="12" ry="5" fill="url(#bsh)" />
      <ellipse cx={44 + legSwing} cy="248" rx="9" ry="3.5" fill="#261832" />
      <path d={`M${36 + legSwing},248 Q${47 + legSwing},244 ${58 + legSwing},248`}
        fill="none" stroke="rgba(160,130,200,0.3)" strokeWidth="0.8" />

      {/* Right shoe */}
      <ellipse cx={73 - legSwing} cy="250" rx="12" ry="5" fill="url(#bsh)" />
      <ellipse cx={76 - legSwing} cy="248" rx="9" ry="3.5" fill="#261832" />
      <path d={`M${62 - legSwing},248 Q${73 - legSwing},244 Q${84 - legSwing},248`}
        fill="none" stroke="rgba(160,130,200,0.3)" strokeWidth="0.8" />

      {/* ── BODY ─────────────────────────────────────────── */}
      <g transform={`translate(60,136) rotate(${br}) translate(-60,-136)`}
        style={{ transition: 'transform .18s cubic-bezier(.34,1.4,.64,1)' }}>

        {/* Jacket main back panel */}
        <path d="M34,112 Q26,125 24,170 L44,170 Q45,150 46,140 L74,140 Q75,150 76,170 L96,170 Q94,125 86,112 Q74,103 60,103 Q46,103 34,112 Z"
          fill="url(#bjkt)" />
        {/* Jacket left-side highlight (rim light) */}
        <path d="M34,112 Q26,125 24,170 L30,170 Q30,140 36,120 Z"
          fill="url(#bjktH)" />
        {/* Jacket right-side shadow */}
        <path d="M86,112 Q94,125 96,170 L90,170 Q90,140 84,120 Z"
          fill="rgba(0,0,0,0.18)" />
        {/* Centre seam */}
        <line x1="60" y1="108" x2="60" y2="168" stroke="rgba(90,120,180,0.28)" strokeWidth="0.8" />
        {/* Back vent */}
        <path d="M54,154 L60,168 L66,154" fill="none" stroke="rgba(80,110,160,.32)" strokeWidth="0.9" />
        {/* Plaid weave overlay */}
        {[118, 128, 138, 150, 160].map((y, i) => (
          <line key={i} x1="28" y1={y} x2="92" y2={y} stroke="rgba(130,160,210,.06)" strokeWidth="0.7" />
        ))}
        {[38, 50, 60, 70, 82].map((x, i) => (
          <line key={i} x1={x} y1="110" x2={x} y2="167" stroke="rgba(130,160,210,.06)" strokeWidth="0.7" />
        ))}
        {/* Pocket flap left */}
        <rect x="35" y="130" width="18" height="9" rx="2"
          fill="rgba(255,255,255,0.04)" stroke="rgba(100,130,180,0.25)" strokeWidth="0.6" />
        {/* Pocket flap right */}
        <rect x="67" y="130" width="18" height="9" rx="2"
          fill="rgba(255,255,255,0.04)" stroke="rgba(100,130,180,0.25)" strokeWidth="0.6" />

        {/* ── SHOULDERS & ARMS ────────────────────────────── */}
        <g transform={`translate(60,107) rotate(${sr}) translate(-60,-107)`}
          style={{ transition: 'transform .15s ease' }}>

          {/* Left shoulder cap */}
          <path d="M34,112 Q19,120 15,148 Q20,150 26,148 Q28,132 38,122 Z"
            fill="url(#bjkt)" stroke="rgba(100,130,180,.18)" strokeWidth="0.7" />
          {/* Left sleeve highlight */}
          <path d="M34,112 Q19,120 17,138 L21,136 Q22,124 30,116 Z"
            fill="url(#bjktH)" />
          {/* Left cuff */}
          <rect x="13" y="146" width="14" height="7" rx="3" fill="#e8d4b8" stroke="#c4a880" strokeWidth="0.5" />
          {/* Left hand */}
          <ellipse cx="20" cy="158" rx="7" ry="6" fill="url(#bsk)" />
          {/* Hand knuckle detail */}
          {[17, 20, 23].map((x, i) => (
            <circle key={i} cx={x} cy="155" r="1" fill="rgba(180,100,50,0.3)" />
          ))}

          {/* Right shoulder cap */}
          <path d="M86,112 Q101,120 105,148 Q100,150 94,148 Q92,132 82,122 Z"
            fill="url(#bjkt)" stroke="rgba(100,130,180,.18)" strokeWidth="0.7" />
          {/* Right sleeve highlight (opposite rim) */}
          <path d="M86,112 Q101,120 103,138 L99,136 Q98,124 90,116 Z"
            fill="rgba(0,0,0,0.15)" />
          {/* Right cuff */}
          <rect x="93" y="146" width="14" height="7" rx="3" fill="#e8d4b8" stroke="#c4a880" strokeWidth="0.5" />
          {/* Right hand */}
          <ellipse cx="100" cy="158" rx="7" ry="6" fill="url(#bsk)" />
          {[97, 100, 103].map((x, i) => (
            <circle key={i} cx={x} cy="155" r="1" fill="rgba(180,100,50,0.3)" />
          ))}
        </g>
      </g>

      {/* ── NECK ─────────────────────────────────────────── */}
      <rect x="53" y="90" width="14" height="16" rx="4" fill="url(#bsk)" />
      {/* Neck side shadows */}
      <rect x="53" y="90" width="4" height="16" rx="2" fill="rgba(160,90,40,0.25)" />
      <rect x="63" y="90" width="4" height="16" rx="2" fill="rgba(0,0,0,0.15)" />
      {/* Collar back */}
      <path d="M42,100 Q60,93 78,100" fill="none" stroke="#ede0c8" strokeWidth="2.8" strokeLinecap="round" />

      {/* ── HEAD ─────────────────────────────────────────── */}
      <g transform={`translate(60,63) rotate(${hr}) translate(-60,-63)`}
        style={{ transition: 'transform .22s cubic-bezier(.34,1.4,.64,1)' }}>

        {/* Head base – light side */}
        <ellipse cx="60" cy="63" rx="30" ry="32" fill="url(#bsk)" />
        {/* Head shadow side (right / rim) */}
        <path d="M80,40 Q94,55 90,80 Q84,90 76,94 Q86,80 86,63 Q86,50 80,40 Z"
          fill="rgba(160,80,30,0.22)" />
        {/* Subsurface scattering on ear areas */}
        <ellipse cx="31" cy="68" rx="8" ry="10" fill="rgba(240,160,100,0.18)" />
        <ellipse cx="89" cy="68" rx="8" ry="10" fill="rgba(240,160,100,0.18)" />

        {/* Hair — back bowl */}
        <path d="M30,60 Q29,34 60,29 Q91,34 90,60 Q84,40 60,38 Q36,40 30,60 Z"
          fill="url(#bhr)" />
        {/* Hair volume / top */}
        <ellipse cx="60" cy="37" rx="28" ry="12" fill="url(#bhr)" />
        {/* Hair highlight sheen */}
        <ellipse cx="50" cy="38" rx="13" ry="6" fill="url(#bhrl)"
          transform="rotate(-18, 50, 38)" />
        {/* Side tufts */}
        <path d="M30,60 Q24,70 28,80 Q30,66 33,62 Z" fill="url(#bhr)" />
        <path d="M90,60 Q96,70 92,80 Q90,66 87,62 Z" fill="url(#bhr)" />
        {/* Neck hair curl detail */}
        <path d="M50,94 Q60,100 70,94" stroke="#2e1204" strokeWidth="5"
          fill="none" strokeLinecap="round" />
        <path d="M52,94 Q60,98 68,94" stroke="#4a2008" strokeWidth="2"
          fill="none" strokeLinecap="round" />

        {/* Ears — 3D form */}
        <ellipse cx="30" cy="67" rx="6" ry="8" fill="url(#bsk)" />
        <ellipse cx="90" cy="67" rx="6" ry="8" fill="url(#bsk)" />
        {/* Inner ear */}
        <ellipse cx="30" cy="67" rx="3" ry="4.5" fill="rgba(200,120,80,0.4)" />
        <ellipse cx="90" cy="67" rx="3" ry="4.5" fill="rgba(200,120,80,0.4)" />
        {/* Ear rim shadow */}
        <path d="M26,62 Q24,67 26,74" fill="none" stroke="rgba(160,80,40,0.3)" strokeWidth="1.2" />
        <path d="M94,62 Q96,67 94,74" fill="none" stroke="rgba(160,80,40,0.3)" strokeWidth="1.2" />
      </g>
    </svg>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
//  CHIBI FRONT VIEW  (full 3D with proper lighting / SSS / shading)
// ═══════════════════════════════════════════════════════════════════════════════
const ChibiFront = ({ lookAngle }) => {
  const hr = lookAngle * 28;

  return (
    <svg width="120" height="260" viewBox="0 0 120 260"
      xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <defs>
        {/* Skin lit from upper left */}
        <radialGradient id="fsk" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#fef0d8" />
          <stop offset="55%" stopColor="#f5c890" />
          <stop offset="100%" stopColor="#c87840" />
        </radialGradient>
        {/* Forehead rim light */}
        <radialGradient id="fskhl" cx="38%" cy="18%" r="45%">
          <stop offset="0%" stopColor="rgba(255,240,200,0.7)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* Cheek SSS glow */}
        <radialGradient id="fblush" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,150,130,0.6)" />
          <stop offset="100%" stopColor="rgba(255,150,130,0)" />
        </radialGradient>
        {/* Hair — multi-tone */}
        <radialGradient id="fhr" cx="38%" cy="22%" r="68%">
          <stop offset="0%" stopColor="#8a3e14" />
          <stop offset="40%" stopColor="#3e1c06" />
          <stop offset="100%" stopColor="#1a0c02" />
        </radialGradient>
        {/* Hair specular highlight */}
        <radialGradient id="fhrl" cx="36%" cy="18%" r="45%">
          <stop offset="0%" stopColor="rgba(230,170,90,0.65)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* Eye iris — deep blue with limbal ring */}
        <radialGradient id="feye" cx="32%" cy="28%" r="62%">
          <stop offset="0%" stopColor="#8ab4e0" />
          <stop offset="40%" stopColor="#2a6aaa" />
          <stop offset="72%" stopColor="#0e3c78" />
          <stop offset="100%" stopColor="#051e4a" />
        </radialGradient>
        {/* Jacket front — lit left */}
        <linearGradient id="fjkt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4e6688" />
          <stop offset="30%" stopColor="#30435e" />
          <stop offset="70%" stopColor="#1e2c40" />
          <stop offset="100%" stopColor="#111e30" />
        </linearGradient>
        {/* Jacket left shoulder rim */}
        <linearGradient id="fjktL" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(140,180,240,0.4)" />
          <stop offset="100%" stopColor="rgba(100,140,200,0.08)" />
        </linearGradient>
        {/* Waistcoat / vest */}
        <linearGradient id="fvest" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e2c42" />
          <stop offset="100%" stopColor="#111826" />
        </linearGradient>
        {/* Trouser */}
        <linearGradient id="ftrsr" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#354060" />
          <stop offset="50%" stopColor="#243050" />
          <stop offset="100%" stopColor="#182038" />
        </linearGradient>
        {/* Shoe */}
        <radialGradient id="fsh" cx="28%" cy="22%" r="65%">
          <stop offset="0%" stopColor="#4a3070" />
          <stop offset="100%" stopColor="#0c0618" />
        </radialGradient>
        <radialGradient id="ffshadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.65)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="60" cy="257" rx="32" ry="5" fill="url(#ffshadow)" />

      {/* ── TROUSERS ─────────────────────────────────────── */}
      <path d="M44,168 L38,248 L54,248 L60,212 L66,248 L82,248 L76,168 Z"
        fill="url(#ftrsr)" />
      {/* Trouser crease left */}
      <line x1="46" y1="172" x2="41" y2="242" stroke="rgba(160,190,230,0.15)" strokeWidth="0.7" />
      {/* Trouser crease right */}
      <line x1="74" y1="172" x2="79" y2="242" stroke="rgba(160,190,230,0.15)" strokeWidth="0.7" />
      {/* Highlight inner leg */}
      <path d="M60,172 L58,248 L62,248 Z" fill="rgba(160,190,230,0.07)" />

      {/* Left shoe */}
      <ellipse cx="46" cy="251" rx="13" ry="5" fill="url(#fsh)" />
      <ellipse cx="43" cy="248" rx="9" ry="3.5" fill="#1e1030" />
      {/* Shoe highlight */}
      <ellipse cx="40" cy="247" rx="5" ry="1.8" fill="rgba(130,100,180,0.3)" />
      <path d="M34,247 Q45,243 56,247" fill="none" stroke="rgba(160,130,200,0.35)" strokeWidth="0.8" />

      {/* Right shoe */}
      <ellipse cx="74" cy="251" rx="13" ry="5" fill="url(#fsh)" />
      <ellipse cx="77" cy="248" rx="9" ry="3.5" fill="#1e1030" />
      <ellipse cx="80" cy="247" rx="5" ry="1.8" fill="rgba(130,100,180,0.3)" />
      <path d="M64,247 Q75,243 86,247" fill="none" stroke="rgba(160,130,200,0.35)" strokeWidth="0.8" />

      {/* ── JACKET & BODY ────────────────────────────────── */}
      {/* Jacket main front */}
      <path d="M35,112 Q28,126 26,170 L44,170 Q45,150 46,140 L74,140 Q75,150 76,170 L94,170 Q92,126 85,112 Q73,103 60,103 Q47,103 35,112 Z"
        fill="url(#fjkt)" />
      {/* Jacket left side rim light */}
      <path d="M35,112 Q28,126 26,170 L32,170 Q32,142 38,122 Z"
        fill="url(#fjktL)" />
      {/* Jacket right shadow */}
      <path d="M85,112 Q92,126 94,170 L88,170 Q88,142 82,122 Z"
        fill="rgba(0,0,0,0.2)" />

      {/* Lapels */}
      <path d="M40,110 L46,126 L60,119 L74,126 L80,110"
        fill="none" stroke="rgba(220,235,255,0.22)" strokeWidth="1.4" />
      {/* Collar */}
      <path d="M46,106 L54,114 L60,110 L66,114 L74,106"
        fill="none" stroke="#f2eade" strokeWidth="2.8" strokeLinecap="round" />

      {/* Waistcoat */}
      <rect x="48" y="112" width="24" height="32" rx="2"
        fill="url(#fvest)" stroke="rgba(110,140,190,0.3)" strokeWidth="0.6" />
      {/* Vest buttons */}
      {[117, 126, 135, 144].map((y, i) => (
        <g key={i}>
          <circle cx="60" cy={y} r="2.5" fill="#5c3e1a" stroke="#8b6a20" strokeWidth="0.6" />
          <ellipse cx="59.2" cy={y - 0.8} rx="1" ry="0.7" fill="rgba(255,200,100,0.4)" />
        </g>
      ))}
      {/* Pocket square */}
      <path d="M64,113 L72,111 L73,120 L65,118 Z"
        fill="rgba(240,235,225,0.75)" stroke="rgba(210,200,185,0.4)" strokeWidth="0.5" />
      {/* Tie */}
      <path d="M56,114 L54,111 L56,120 L60,170 L64,120 L66,111 L64,114 L60,116 Z"
        fill="#162138" stroke="rgba(80,110,170,0.45)" strokeWidth="0.6" />
      <path d="M56,114 Q60,116 64,114 Q62,111 60,110 Q58,111 56,114 Z"
        fill="#1e2d4a" />
      {/* Tie highlight */}
      <line x1="60" y1="117" x2="60" y2="162" stroke="rgba(120,150,210,0.12)" strokeWidth="1.5" />

      {/* Left sleeve */}
      <path d="M35,112 Q18,120 15,148 Q21,150 27,148 Q29,130 39,122 Z"
        fill="url(#fjkt)" stroke="rgba(100,130,180,0.18)" strokeWidth="0.7" />
      {/* Left sleeve rim */}
      <path d="M35,112 Q18,120 16,138 L20,136 Q22,124 30,116 Z"
        fill="url(#fjktL)" />
      {/* Left cuff */}
      <rect x="13" y="146" width="14" height="7" rx="3.5" fill="#ede0c8" stroke="#c8a878" strokeWidth="0.6" />
      {/* Left hand — 3D */}
      <ellipse cx="20" cy="159" rx="7.5" ry="6.5" fill="url(#fsk)" />
      <path d="M14,156 Q20,152 26,156" fill="none" stroke="rgba(180,100,50,0.25)" strokeWidth="0.8" />
      {[17, 20, 23].map((x, i) => (
        <ellipse key={i} cx={x} cy="157" rx="1.2" ry="0.8" fill="rgba(160,80,40,0.28)" />
      ))}

      {/* Right sleeve */}
      <path d="M85,112 Q102,120 105,148 Q99,150 93,148 Q91,130 81,122 Z"
        fill="url(#fjkt)" stroke="rgba(100,130,180,0.18)" strokeWidth="0.7" />
      {/* Right sleeve shadow */}
      <path d="M85,112 Q102,120 104,138 L100,136 Q98,124 90,116 Z"
        fill="rgba(0,0,0,0.18)" />
      {/* Right cuff */}
      <rect x="93" y="146" width="14" height="7" rx="3.5" fill="#ede0c8" stroke="#c8a878" strokeWidth="0.6" />
      {/* Right hand */}
      <ellipse cx="100" cy="159" rx="7.5" ry="6.5" fill="url(#fsk)" />
      <path d="M94,156 Q100,152 106,156" fill="none" stroke="rgba(180,100,50,0.25)" strokeWidth="0.8" />
      {[97, 100, 103].map((x, i) => (
        <ellipse key={i} cx={x} cy="157" rx="1.2" ry="0.8" fill="rgba(160,80,40,0.28)" />
      ))}

      {/* ── NECK ─────────────────────────────────────────── */}
      <rect x="53" y="90" width="14" height="16" rx="4" fill="url(#fsk)" />
      <rect x="53" y="90" width="4" height="16" rx="2" fill="rgba(200,130,60,0.2)" />
      <rect x="63" y="90" width="4" height="16" rx="2" fill="rgba(0,0,0,0.12)" />

      {/* ── HEAD ─────────────────────────────────────────── */}
      <g transform={`translate(60,59) rotate(${hr}) translate(-60,-59)`}
        style={{ transition: 'transform .2s cubic-bezier(.34,1.4,.64,1)' }}>

        {/* Head volume */}
        <ellipse cx="60" cy="59" rx="32" ry="34" fill="url(#fsk)" />
        {/* Forehead highlight (SSS lit top) */}
        <ellipse cx="52" cy="43" rx="18" ry="10" fill="url(#fskhl)"
          transform="rotate(-12,52,43)" />
        {/* Right face shadow */}
        <path d="M82,38 Q98,55 92,82 Q86,92 78,96 Q88,82 88,60 Q88,46 82,38 Z"
          fill="rgba(140,70,20,0.18)" />
        {/* Under-chin shadow */}
        <ellipse cx="60" cy="91" rx="24" ry="6" fill="rgba(120,60,20,0.2)" />

        {/* Hair */}
        <path d="M28,54 Q26,27 60,22 Q94,27 92,54 Q86,34 60,32 Q34,34 28,54 Z"
          fill="url(#fhr)" />
        {/* Hair top volume */}
        <ellipse cx="60" cy="30" rx="29" ry="14" fill="url(#fhr)" />
        {/* Fringe sweep left */}
        <path d="M28,54 Q34,44 48,47 Q40,38 60,35 Q48,40 50,52 Z" fill="url(#fhr)" />
        {/* Side hair right */}
        <path d="M92,54 Q96,65 90,76 Q88,62 84,56 Z" fill="url(#fhr)" />
        {/* Side hair left */}
        <path d="M28,54 Q24,65 30,76 Q32,62 36,56 Z" fill="url(#fhr)" />
        {/* Hair highlight sheen */}
        <ellipse cx="48" cy="36" rx="14" ry="7" fill="url(#fhrl)"
          transform="rotate(-22,48,36)" />
        {/* Secondary glint */}
        <ellipse cx="62" cy="30" rx="6" ry="3" fill="rgba(220,170,90,0.3)"
          transform="rotate(-10,62,30)" />

        {/* Ears — 3D form */}
        <ellipse cx="28" cy="63" rx="6" ry="8" fill="url(#fsk)" />
        <ellipse cx="92" cy="63" rx="6" ry="8" fill="url(#fsk)" />
        {/* Ear SSS interior */}
        <ellipse cx="28" cy="63" rx="3" ry="4.5" fill="rgba(210,130,90,0.45)" />
        <ellipse cx="92" cy="63" rx="3" ry="4.5" fill="rgba(210,130,90,0.45)" />
        {/* Ear rim shadow */}
        <path d="M24,58 Q22,63 24,70" fill="none" stroke="rgba(150,70,30,0.28)" strokeWidth="1.4" />
        <path d="M96,58 Q98,63 96,70" fill="none" stroke="rgba(150,70,30,0.28)" strokeWidth="1.4" />

        {/* ── EYEBROWS ─────────────────────────────────── */}
        <path d="M37,48 Q44,44 51,46" stroke="#3a1e0a" strokeWidth="2.4"
          fill="none" strokeLinecap="round" />
        <path d="M69,46 Q76,44 83,48" stroke="#3a1e0a" strokeWidth="2.4"
          fill="none" strokeLinecap="round" />

        {/* ── LEFT EYE — full 3D iris ───────────────────── */}
        {/* Eye white */}
        <ellipse cx="44" cy="58" rx="9" ry="10.5" fill="white" />
        {/* Eye white shadow */}
        <ellipse cx="47" cy="61" rx="6" ry="7" fill="rgba(200,220,240,0.25)" />
        {/* Upper lid shadow */}
        <path d="M35,54 Q44,50 53,54 Q48,58 44,58 Q40,58 35,54 Z"
          fill="rgba(60,40,20,0.12)" />
        {/* Iris */}
        <ellipse cx="44" cy="59" rx="6.5" ry="7.5" fill="url(#feye)" />
        {/* Limbal ring */}
        <ellipse cx="44" cy="59" rx="6.5" ry="7.5"
          fill="none" stroke="#041830" strokeWidth="1.2" />
        {/* Pupil */}
        <ellipse cx="44" cy="60" rx="3.8" ry="4.5" fill="#010e1f" />
        {/* Main catchlight */}
        <circle cx="46.5" cy="56" r="2.5" fill="white" opacity="0.92" />
        {/* Secondary catchlight */}
        <circle cx="42" cy="63" r="1.2" fill="white" opacity="0.55" />
        {/* Iris radial lines */}
        <line x1="44" y1="52" x2="44" y2="55" stroke="rgba(100,160,220,0.4)" strokeWidth="0.6" />
        <line x1="49" y1="54" x2="47" y2="56" stroke="rgba(100,160,220,0.3)" strokeWidth="0.6" />
        <line x1="50" y1="59" x2="47" y2="59" stroke="rgba(100,160,220,0.3)" strokeWidth="0.6" />
        {/* Upper lash */}
        <path d="M35,53 Q44,49 53,53" fill="none"
          stroke="#250f03" strokeWidth="1.8" strokeLinecap="round" />
        {/* Lower lash */}
        <path d="M36,64 Q44,67 52,64" fill="none"
          stroke="#3a1e0a" strokeWidth="0.8" strokeLinecap="round" />

        {/* ── RIGHT EYE ────────────────────────────────── */}
        <ellipse cx="76" cy="58" rx="9" ry="10.5" fill="white" />
        <ellipse cx="79" cy="61" rx="6" ry="7" fill="rgba(200,220,240,0.25)" />
        <path d="M67,54 Q76,50 85,54 Q80,58 76,58 Q72,58 67,54 Z"
          fill="rgba(60,40,20,0.12)" />
        <ellipse cx="76" cy="59" rx="6.5" ry="7.5" fill="url(#feye)" />
        <ellipse cx="76" cy="59" rx="6.5" ry="7.5"
          fill="none" stroke="#041830" strokeWidth="1.2" />
        <ellipse cx="76" cy="60" rx="3.8" ry="4.5" fill="#010e1f" />
        <circle cx="78.5" cy="56" r="2.5" fill="white" opacity="0.92" />
        <circle cx="74" cy="63" r="1.2" fill="white" opacity="0.55" />
        <line x1="76" y1="52" x2="76" y2="55" stroke="rgba(100,160,220,0.4)" strokeWidth="0.6" />
        <line x1="81" y1="54" x2="79" y2="56" stroke="rgba(100,160,220,0.3)" strokeWidth="0.6" />
        <line x1="82" y1="59" x2="79" y2="59" stroke="rgba(100,160,220,0.3)" strokeWidth="0.6" />
        <path d="M67,53 Q76,49 85,53" fill="none"
          stroke="#250f03" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M68,64 Q76,67 84,64" fill="none"
          stroke="#3a1e0a" strokeWidth="0.8" strokeLinecap="round" />

        {/* Nose — 3D subtle */}
        <path d="M57,70 Q60,68 63,70 Q62,73 60,73 Q58,73 57,70 Z"
          fill="rgba(190,110,70,0.45)" />
        <circle cx="57.5" cy="72" r="1.5" fill="rgba(160,80,40,0.35)" />
        <circle cx="62.5" cy="72" r="1.5" fill="rgba(160,80,40,0.35)" />

        {/* Cheek blush SSS */}
        <ellipse cx="33" cy="68" rx="11" ry="7" fill="url(#fblush)" />
        <ellipse cx="87" cy="68" rx="11" ry="7" fill="url(#fblush)" />

        {/* Mouth / smile */}
        <path d="M46,79 Q60,88 74,79" fill="none"
          stroke="#b87050" strokeWidth="2.2" strokeLinecap="round" />
        {/* Lip corners */}
        <circle cx="46" cy="79" r="1.5" fill="#b87050" opacity="0.7" />
        <circle cx="74" cy="79" r="1.5" fill="#b87050" opacity="0.7" />
        {/* Lower lip highlight */}
        <path d="M53,84 Q60,87 67,84" fill="none"
          stroke="rgba(240,180,150,0.4)" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
};

// ─── Chibi wrapper ─────────────────────────────────────────────────────────────
const ChibiCharacter = ({ lookAngle, movingForward }) => {
  const [facingBack, setFacingBack] = useState(false);
  const [visible, setVisible] = useState(true);
  const prevDir = useRef(movingForward);

  useEffect(() => {
    if (prevDir.current === movingForward) return;
    prevDir.current = movingForward;
    setVisible(false);
    const t = setTimeout(() => {
      setFacingBack(movingForward);
      setVisible(true);
    }, 140);
    return () => clearTimeout(t);
  }, [movingForward]);

  return (
    <div style={{
      position: 'absolute', bottom: 0, left: '50%',
      transform: 'translateX(-50%)',
      width: 120, height: 260,
      pointerEvents: 'none', zIndex: 20,
      opacity: visible ? 1 : 0,
      transition: 'opacity .14s ease',
    }}>
      {facingBack
        ? <ChibiBack lookAngle={lookAngle} />
        : <ChibiFront lookAngle={lookAngle} />
      }
    </div>
  );
};

// ─── Torch (wall torch — large) ───────────────────────────────────────────────
const Torch = ({ zPos, isLeft, index }) => {
  const delay = (index * 0.41).toFixed(2);
  const delay2 = (index * 0.23 + 0.15).toFixed(2);
  const dur = (1.5 + index * 0.19).toFixed(2);

  return (
    <div style={{
      position: 'absolute', top: '8%',
      ...(isLeft ? { left: '0.6%' } : { right: '0.6%' }),
      width: 26,
      transform: `translateZ(${zPos}px) rotateY(${isLeft ? -82 : 82}deg)`,
    }}>
      {/* Handle */}
      <div style={{
        width: 10, height: 24, margin: '0 auto',
        background: 'linear-gradient(180deg,#8b6020,#5a3a10,#3a2008)',
        borderRadius: '2px 2px 0 0',
        boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.5)',
      }} />
      {/* Metal band */}
      <div style={{
        width: 14, height: 5, margin: '-2px auto 0',
        background: 'linear-gradient(90deg,#9a7a30,#c9a227,#7a5a18)',
        borderRadius: 2,
      }} />
      {/* Pitch bowl */}
      <div style={{
        width: 20, height: 12, margin: '0 auto',
        background: 'linear-gradient(180deg,#2a1a08,#1a0e04)',
        borderRadius: '3px 3px 8px 8px',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.7)',
      }} />
      {/* Ember glow in bowl */}
      <div style={{
        width: 14, height: 6, margin: '-4px auto 0',
        background: 'radial-gradient(ellipse,#ff4500,#cc2200,transparent)',
        borderRadius: '50%', opacity: 0.9,
        animation: `candleGlow ${dur}s ease-in-out ${delay}s infinite`,
      }} />
      {/* Outer flame */}
      <div style={{
        width: 22, height: 36, margin: '-8px auto 0',
        background: 'radial-gradient(ellipse at bottom,#ffe44d,#ff8c00 45%,#cc4400 75%,transparent)',
        borderRadius: '50% 50% 30% 30%', filter: 'blur(1px)',
        animation: `torchFlicker ${dur}s ease-in-out ${delay}s infinite`,
        transformOrigin: 'center bottom',
      }} />
      {/* Inner flame */}
      <div style={{
        position: 'absolute', top: 48, left: '50%',
        transform: 'translateX(-50%)',
        width: 10, height: 20,
        background: 'radial-gradient(ellipse at bottom,#fff7a0,#ffe44d,transparent)',
        borderRadius: '50% 50% 30% 30%',
        animation: `innerFlame 0.9s ease-in-out ${delay2}s infinite`,
        transformOrigin: 'center bottom',
      }} />
      {/* Ambient light halo */}
      <div style={{
        position: 'absolute', top: -20, left: -50,
        width: 126, height: 130,
        background: 'radial-gradient(ellipse,rgba(255,160,30,0.22) 0%,transparent 65%)',
        pointerEvents: 'none',
        animation: `candleGlow ${dur}s ease-in-out ${delay}s infinite`,
      }} />
    </div>
  );
};

// ─── Painting ─────────────────────────────────────────────────────────────────
const Painting = ({ project, zPos, isLeft, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const fc = project.frame === 'gold' ? '#c9a227' : '#b0bec5';
  const fc2 = project.frame === 'gold' ? '#8b6914' : '#607d8b';
  const fc3 = project.frame === 'gold' ? '#e8c547' : '#cfd8dc';
  const ac = project.accent;

  return (
    <div
      className="gal-painting"
      style={{
        position: 'absolute', top: '13%',
        ...(isLeft ? { left: '2.5%' } : { right: '2.5%' }),
        transform: `translateZ(${zPos}px) rotateY(${isLeft ? -36 : 36}deg)`,
        filter: hovered ? 'brightness(1.5)' : 'brightness(1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(project)}
    >
      {/* Outer ornate frame */}
      <div style={{
        padding: 4,
        background: `linear-gradient(145deg,${fc3},${fc},${fc2},${fc},${fc3})`,
        borderRadius: 4,
        boxShadow: hovered
          ? `${isLeft ? '12px' : '-12px'} 20px 55px rgba(0,0,0,.92),0 0 40px ${ac}60`
          : `${isLeft ? '8px' : '-8px'} 14px 44px rgba(0,0,0,.85),0 0 18px ${ac}30`,
        transition: 'box-shadow .3s',
        position: 'relative',
      }}>
        {/* Inner frame layer */}
        <div style={{
          padding: 7,
          background: `linear-gradient(135deg,${fc2},${fc3}60,${fc2})`,
          borderRadius: 2,
        }}>
          {/* Innermost frame line */}
          <div style={{
            padding: 5,
            background: fc2,
            borderRadius: 1,
            boxShadow: `inset 0 0 8px rgba(0,0,0,0.5)`,
          }}>
            {/* Canvas */}
            <div style={{
              width: 178, height: 128,
              background: 'linear-gradient(135deg,#020407,#060c18 50%,#0a1520)',
              overflow: 'hidden', position: 'relative',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 5,
            }}>
              {/* Atmospheric layered bg */}
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 30% 35%,${ac}22 0%,transparent 55%),radial-gradient(ellipse at 75% 70%,${ac}12 0%,transparent 45%)` }} />
              <div style={{ position: 'absolute', top: '35%', left: 8, right: 8, height: 1, background: `linear-gradient(90deg,transparent,${ac}38,transparent)` }} />
              <div style={{ position: 'absolute', bottom: '35%', left: 8, right: 8, height: 1, background: `linear-gradient(90deg,transparent,${ac}38,transparent)` }} />
              {/* Corner ornaments */}
              {[{ top: 4, left: 4, bt: `1px solid ${ac}70`, bl: `1px solid ${ac}70` }, { top: 4, right: 4, bt: `1px solid ${ac}70`, br: `1px solid ${ac}70` }, { bottom: 4, left: 4, bb: `1px solid ${ac}70`, bl: `1px solid ${ac}70` }, { bottom: 4, right: 4, bb: `1px solid ${ac}70`, br: `1px solid ${ac}70` }].map((s, i) => (
                <div key={i} style={{ position: 'absolute', width: 16, height: 16, top: s.top, left: s.left, right: s.right, bottom: s.bottom, borderTop: s.bt, borderLeft: s.bl, borderRight: s.br, borderBottom: s.bb }} />
              ))}
              <div style={{ fontSize: 30, position: 'relative', zIndex: 1 }}>{project.icon}</div>
              <div style={{ fontFamily: 'Cinzel,serif', fontSize: 8, fontWeight: 700, color: fc, textAlign: 'center', letterSpacing: '.12em', textTransform: 'uppercase', position: 'relative', zIndex: 1, padding: '0 8px', lineHeight: 1.35 }}>{project.title}</div>
              <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 7, color: ac, letterSpacing: '.14em', position: 'relative', zIndex: 1 }}>{project.category}</div>
              {/* Canvas grain */}
              <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.06) 2px,rgba(0,0,0,.06) 4px)', pointerEvents: 'none' }} />
            </div>
          </div>
        </div>
        {/* Nameplate */}
        <div style={{
          marginTop: 4, textAlign: 'center',
          fontFamily: 'JetBrains Mono,monospace', fontSize: 6.5,
          color: fc2, letterSpacing: '.12em',
          padding: '2px 0',
        }}>── {String(project.id).padStart(2, '0')} ──</div>
      </div>
      {/* Drop shadow under frame */}
      <div style={{ position: 'absolute', bottom: -8, left: '6%', right: '6%', height: 10, background: 'rgba(0,0,0,0.65)', filter: 'blur(6px)' }} />
    </div>
  );
};

// ─── Project Popup ────────────────────────────────────────────────────────────
const ProjectPopup = ({ project, onClose }) => {
  if (!project) return null;
  const ac = project.accent;
  const fc = project.frame === 'gold' ? '#c9a227' : '#b0bec5';
  const fc2 = project.frame === 'gold' ? '#8b6914' : '#607d8b';

  return (
    <div onClick={(e) => e.target === e.currentTarget && onClose()} style={{
      position: 'fixed', inset: 0, zIndex: 300,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(4,2,1,.92)', backdropFilter: 'blur(16px)',
      animation: 'popupIn .35s cubic-bezier(.34,1.56,.64,1)',
    }}>
      <div style={{
        width: 'min(530px,92vw)',
        background: 'linear-gradient(155deg,#0a0806,#0e0b07,#070502)',
        border: `1px solid ${fc}44`, borderRadius: 8, overflow: 'hidden',
        boxShadow: `0 0 90px ${ac}30,0 40px 90px rgba(0,0,0,.92)`,
      }}>
        <div style={{ height: 3, background: `linear-gradient(90deg,transparent,${fc},${ac},${fc},transparent)`, backgroundSize: '200% 100%', animation: 'shimmerBar 2.2s linear infinite' }} />
        <div style={{ padding: '30px 36px 26px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 22 }}>
            <div>
              {project.featured && (
                <div style={{ display: 'inline-block', marginBottom: 10, fontFamily: 'JetBrains Mono,monospace', fontSize: 9, fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: ac, border: `1px solid ${ac}44`, borderRadius: 20, padding: '3px 11px', background: `${ac}12` }}>✦ Featured Work</div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontSize: 36 }}>{project.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Cinzel,serif', fontSize: 21, fontWeight: 700, color: '#e8edf5', letterSpacing: '.04em', lineHeight: 1.2 }}>{project.title}</div>
                  <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 10, color: ac, letterSpacing: '.1em', marginTop: 3 }}>{project.category}</div>
                </div>
              </div>
            </div>
            <button onClick={onClose} style={{ width: 34, height: 34, flexShrink: 0, background: 'rgba(176,190,197,.07)', border: '1px solid rgba(176,190,197,.18)', borderRadius: '50%', color: '#b0bec5', cursor: 'pointer', fontSize: 19, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s' }}>×</button>
          </div>
          <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${fc}44,transparent)`, marginBottom: 20 }} />
          <p style={{ fontFamily: 'Rajdhani,sans-serif', fontSize: 15, lineHeight: 1.8, color: '#8a9eaa', marginBottom: 22 }}>{project.description}</p>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 8, color: fc2, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 9 }}>── Tech Stack ──</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {project.tech.map(t => (
                <span key={t} className="gal-tech-tag" style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 10, padding: '4px 11px', borderRadius: 20, background: 'rgba(200,160,40,.06)', border: '1px solid rgba(200,160,40,.22)', color: '#8a9eaa' }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="gal-popup-btn" style={{ flex: 1, padding: 13, borderRadius: 6, background: `linear-gradient(135deg,${fc}18,${fc}08)`, border: `1px solid ${fc}44`, color: fc, fontFamily: 'Cinzel,serif', fontSize: 12, fontWeight: 600, letterSpacing: '.06em' }}>⬡ GitHub</a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="gal-popup-btn" style={{ flex: 1, padding: 13, borderRadius: 6, background: `linear-gradient(135deg,${ac}22,${ac}0a)`, border: `1px solid ${ac}55`, color: ac, fontFamily: 'Cinzel,serif', fontSize: 12, fontWeight: 600, letterSpacing: '.06em' }}>◈ Live Demo</a>
          </div>
        </div>
        <div style={{ height: 3, background: `linear-gradient(90deg,transparent,${fc2},transparent)` }} />
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
//  STONE BRICK WALL TEXTURE (SVG data-uri pattern)
// ═══════════════════════════════════════════════════════════════════════════════
const BRICK_PATTERN = `url("data:image/svg+xml,%3Csvg width='80' height='40' viewBox='0 0 80 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='40' fill='%230e0a06'/%3E%3Crect x='1' y='1' width='37' height='17' rx='1' fill='%23130e08' stroke='%23080502' stroke-width='1'/%3E%3Crect x='41' y='1' width='37' height='17' rx='1' fill='%23120d07' stroke='%23080502' stroke-width='1'/%3E%3Crect x='21' y='21' width='37' height='17' rx='1' fill='%23140f09' stroke='%23080502' stroke-width='1'/%3E%3Crect x='-19' y='21' width='37' height='17' rx='1' fill='%23130e08' stroke='%23080502' stroke-width='1'/%3E%3Crect x='61' y='21' width='37' height='17' rx='1' fill='%23120d07' stroke='%23080502' stroke-width='1'/%3E%3C/svg%3E")`;

// ═══════════════════════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
const Projects = () => {
  const sectionRef = useRef(null);
  const [scrollZ, setScrollZ] = useState(0);
  const [lookAngle, setLookAngle] = useState(0);
  const [movingForward, setMovingForward] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mouseInside, setMouseInside] = useState(false);

  const MAX_SCROLL = 1500;
  const HALLWAY_LEN = 2800;

  const leftProjects = projects.filter(p => p.wall === 'left');
  const rightProjects = projects.filter(p => p.wall === 'right');

  const TORCH_Z = [-280, -700, -1150, -1650, -2200];

  // Candle sconces — placed between paintings
  const LEFT_CANDLE_Z  = [-130, -520, -930, -1400, -1900, -2450];
  const RIGHT_CANDLE_Z = [-200, -600, -1020, -1500, -2000, -2500];

  const onMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width;
    setLookAngle(nx * 2 - 1);
  }, []);

  const onWheel = useCallback((e) => {
    if (!mouseInside || selectedProject) return;
    e.preventDefault();
    const delta = e.deltaY;
    if (Math.abs(delta) > 2) setMovingForward(delta > 0);
    setScrollZ(prev => Math.max(0, Math.min(MAX_SCROLL, prev + delta * 1.0)));
  }, [mouseInside, selectedProject]);

  const touchY = useRef(0);
  const onTouchStart = useCallback((e) => { touchY.current = e.touches[0].clientY; }, []);
  const onTouchMove = useCallback((e) => {
    if (selectedProject) return;
    const dy = touchY.current - e.touches[0].clientY;
    touchY.current = e.touches[0].clientY;
    if (Math.abs(dy) > 1) setMovingForward(dy > 0);
    setScrollZ(prev => Math.max(0, Math.min(MAX_SCROLL, prev + dy * 2.2)));
    setLookAngle((e.touches[0].clientX / window.innerWidth) * 2 - 1);
  }, [selectedProject]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [onWheel]);

  const perspX = 50 + lookAngle * 16;

  return (
    <section
      id="projects"
      ref={sectionRef}
      onMouseEnter={() => setMouseInside(true)}
      onMouseLeave={() => { setMouseInside(false); setMovingForward(false); }}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', overflow: 'hidden',
        padding: '56px 0 0', background: '#000',
        userSelect: 'none',
      }}
    >
      <style>{GLOBAL_STYLES}</style>

      {/* ── Title ────────────────────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginBottom: 38, position: 'relative', zIndex: 10 }}>
        <p style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, letterSpacing: '.2em', color: '#c9a227', marginBottom: 8, textTransform: 'uppercase' }}>
          // what I've built
        </p>
        <h2 style={{
          fontFamily: 'Cinzel,serif', fontSize: 'clamp(24px,4vw,40px)', fontWeight: 700,
          background: 'linear-gradient(135deg,#e8c547,#c9a227,#8b6914,#c9a227,#e8c547)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', letterSpacing: '.06em',
          animation: 'shimmerBar 4s linear infinite',
        }}>The Gallery</h2>
        <div style={{ width: 80, height: 1, margin: '12px auto 0', background: 'linear-gradient(90deg,transparent,#c9a227,transparent)' }} />
      </div>

      {/* ── Hallway Viewport ─────────────────────────────────────────────── */}
      <div style={{
        width: '100%', maxWidth: 960, height: 560,
        position: 'relative',
        perspective: 730,
        perspectiveOrigin: `${perspX}% 47%`,
        transition: 'perspective-origin .14s ease-out',
        cursor: 'crosshair', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>

          {/* ── WORLD ───────────────────────────────────────────────────── */}
          <div style={{
            position: 'absolute', inset: 0,
            transformStyle: 'preserve-3d',
            transform: `translateZ(${scrollZ}px)`,
            transition: 'transform .1s linear',
          }}>

            {/* ─── FLOOR ────────────────────────────────────────────────── */}
            <div style={{
              position: 'absolute', width: 960, height: 3600,
              bottom: -100, left: '50%',
              transform: 'translateX(-50%) rotateX(87deg)',
              transformOrigin: 'bottom center',
            }}>
              {/* Marble base */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg,#100d08,#181208 25%,#1e1810 55%,#141008)',
              }} />
              {/* Large marble tile grid */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                  repeating-linear-gradient(90deg,rgba(200,160,60,0.14) 0,transparent 1px,transparent 79px,rgba(200,160,60,0.14) 80px),
                  repeating-linear-gradient(0deg,rgba(200,160,60,0.14) 0,transparent 1px,transparent 79px,rgba(200,160,60,0.14) 80px)
                `,
              }} />
              {/* Inlaid center runner strip */}
              <div style={{
                position: 'absolute', width: 180, height: '100%', left: '50%', transform: 'translateX(-50%)',
                background: 'linear-gradient(180deg,rgba(201,162,39,0.18),rgba(201,162,39,0.07))',
                borderLeft: '2px solid rgba(201,162,39,0.22)',
                borderRight: '2px solid rgba(201,162,39,0.22)',
              }} />
              {/* Runner inner lines */}
              <div style={{
                position: 'absolute', width: 2, height: '100%', left: '50%', transform: 'translateX(-50%)',
                background: 'linear-gradient(180deg,rgba(201,162,39,0.35),rgba(201,162,39,0.08))',
              }} />
              {/* Diagonal diamond inlay hint */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `repeating-linear-gradient(45deg,rgba(201,162,39,0.04) 0,transparent 1px,transparent 55px,rgba(201,162,39,0.04) 56px)`,
              }} />
            </div>

            {/* ─── CEILING ──────────────────────────────────────────────── */}
            <div style={{
              position: 'absolute', width: 960, height: 3600,
              top: -42, left: '50%',
              transform: 'translateX(-50%) rotateX(-87deg)',
              transformOrigin: 'top center',
            }}>
              {/* Base */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg,#060503,#0c0906 60%,#080704)',
              }} />
              {/* Coffered ceiling ribs — transverse */}
              {[0, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320, 1440].map((y, i) => (
                <div key={i} style={{
                  position: 'absolute', left: 0, right: 0,
                  top: y, height: 14,
                  background: 'linear-gradient(180deg,rgba(100,80,30,0.22),rgba(60,40,15,0.3),rgba(100,80,30,0.18))',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }} />
              ))}
              {/* Coffered ceiling ribs — longitudinal */}
              {[150, 400, 560, 810].map((x, i) => (
                <div key={i} style={{
                  position: 'absolute', top: 0, bottom: 0,
                  left: x, width: 12,
                  background: 'linear-gradient(90deg,rgba(80,60,20,0.22),rgba(100,80,30,0.18),rgba(60,40,15,0.25))',
                }} />
              ))}
              {/* Spine ridge */}
              <div style={{
                position: 'absolute', width: 5, height: '100%', left: '50%', transform: 'translateX(-50%)',
                background: 'linear-gradient(180deg,rgba(230,180,50,0.8),rgba(230,180,50,0.2))',
                boxShadow: '0 0 22px rgba(220,170,50,0.35)',
              }} />
            </div>

            {/* ─── LEFT WALL ────────────────────────────────────────────── */}
            <div style={{
              position: 'absolute', width: 3600, height: 560, top: 0, left: -36,
              transform: 'rotateY(87deg)', transformOrigin: 'left center',
            }}>
              {/* Base stone */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: BRICK_PATTERN, backgroundRepeat: 'repeat' }} />
              {/* Tonal wash */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,#0e0a06,rgba(20,14,8,0.6) 50%,#0a0804)' }} />
              {/* Wainscoting panel */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 110, borderTop: '3px solid rgba(180,140,60,0.32)', background: 'linear-gradient(180deg,rgba(30,20,8,0.4),rgba(20,12,4,0.7))' }} />
              {/* Wainscoting top rail */}
              <div style={{ position: 'absolute', bottom: 110, left: 0, right: 0, height: 6, background: 'linear-gradient(90deg,rgba(180,140,60,0.15),rgba(180,140,60,0.42),rgba(180,140,60,0.15))', boxShadow: '0 -2px 8px rgba(0,0,0,0.5)' }} />
              {/* Wainscoting bottom rail */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 5, background: 'linear-gradient(90deg,rgba(120,90,30,0.2),rgba(160,120,40,0.35),rgba(120,90,30,0.2))' }} />
              {/* Chair rail mid */}
              <div style={{ position: 'absolute', top: '56%', left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,rgba(160,120,40,0.1),rgba(200,160,50,0.45),rgba(160,120,40,0.1))', boxShadow: '0 1px 6px rgba(0,0,0,0.5)' }} />
              {/* Upper wall panel lines */}
              {[200, 480, 760, 1040, 1320, 1600, 1880, 2160, 2440, 2720, 3000, 3280].map((x, i) => (
                <div key={i} style={{ position: 'absolute', top: '12%', bottom: '38%', left: x, width: 1, background: 'rgba(160,120,40,0.12)' }} />
              ))}
              {/* Mortar detail lines */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(4,3,2,0.7) 39px,rgba(4,3,2,0.7) 41px)`, pointerEvents: 'none' }} />
            </div>

            {/* ─── RIGHT WALL ───────────────────────────────────────────── */}
            <div style={{
              position: 'absolute', width: 3600, height: 560, top: 0, right: -36,
              transform: 'rotateY(-87deg)', transformOrigin: 'right center',
            }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: BRICK_PATTERN, backgroundRepeat: 'repeat' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,#0e0a06,rgba(20,14,8,0.6) 50%,#0a0804)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 110, borderTop: '3px solid rgba(180,140,60,0.32)', background: 'linear-gradient(180deg,rgba(30,20,8,0.4),rgba(20,12,4,0.7))' }} />
              <div style={{ position: 'absolute', bottom: 110, left: 0, right: 0, height: 6, background: 'linear-gradient(90deg,rgba(180,140,60,0.15),rgba(180,140,60,0.42),rgba(180,140,60,0.15))', boxShadow: '0 -2px 8px rgba(0,0,0,0.5)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 5, background: 'linear-gradient(90deg,rgba(120,90,30,0.2),rgba(160,120,40,0.35),rgba(120,90,30,0.2))' }} />
              <div style={{ position: 'absolute', top: '56%', left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,rgba(160,120,40,0.1),rgba(200,160,50,0.45),rgba(160,120,40,0.1))', boxShadow: '0 1px 6px rgba(0,0,0,0.5)' }} />
              {[200, 480, 760, 1040, 1320, 1600, 1880, 2160, 2440, 2720, 3000, 3280].map((x, i) => (
                <div key={i} style={{ position: 'absolute', top: '12%', bottom: '38%', left: x, width: 1, background: 'rgba(160,120,40,0.12)' }} />
              ))}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(4,3,2,0.7) 39px,rgba(4,3,2,0.7) 41px)`, pointerEvents: 'none' }} />
            </div>

            {/* ─── END WALL ─────────────────────────────────────────────── */}
            <div style={{
              position: 'absolute', width: 960, height: 560, top: 0, left: '50%',
              transform: `translateX(-50%) translateZ(-${HALLWAY_LEN}px)`,
              background: '#060402',
              backgroundImage: BRICK_PATTERN,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {/* Arch on end wall */}
              <div style={{
                width: 220, height: 280,
                borderTop: '3px solid rgba(180,140,60,0.25)',
                borderLeft: '3px solid rgba(180,140,60,0.18)',
                borderRight: '3px solid rgba(180,140,60,0.18)',
                borderRadius: '110px 110px 0 0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ fontFamily: 'Cinzel,serif', fontSize: 12, color: 'rgba(180,140,60,0.32)', letterSpacing: '.25em', textTransform: 'uppercase', textAlign: 'center', lineHeight: 2.2 }}>
                  — End of Gallery —<br /><span style={{ fontSize: 8, letterSpacing: '.12em' }}>More coming soon</span>
                </div>
              </div>
            </div>

            {/* ─── CEILING ARCH RIBS (atmospheric) ─────────────────────── */}
            {[-200, -600, -1100, -1650, -2250].map((z, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: 960, height: 560, top: 0, left: '50%',
                transform: `translateX(-50%) translateZ(${z}px)`,
                pointerEvents: 'none',
                borderTop: '4px solid rgba(140,110,40,0.18)',
                borderLeft: '4px solid rgba(140,110,40,0.12)',
                borderRight: '4px solid rgba(140,110,40,0.12)',
                borderRadius: '480px 480px 0 0',
                boxSizing: 'border-box',
                zIndex: 0,
              }} />
            ))}

            {/* ─── TORCHES ─────────────────────────────────────────────── */}
            {TORCH_Z.map((z, i) => (
              <React.Fragment key={z}>
                <Torch zPos={z} isLeft={true} index={i} />
                <Torch zPos={z} isLeft={false} index={i + 5} />
              </React.Fragment>
            ))}

            {/* ─── CANDLE SCONCES ──────────────────────────────────────── */}
            {LEFT_CANDLE_Z.map((z, i) => (
              <CandleSconce key={`lc${i}`} zPos={z} isLeft={true} index={i} />
            ))}
            {RIGHT_CANDLE_Z.map((z, i) => (
              <CandleSconce key={`rc${i}`} zPos={z} isLeft={false} index={i + 6} />
            ))}

            {/* ─── LEFT PAINTINGS ──────────────────────────────────────── */}
            {leftProjects.map((p, i) => {
              const sp = HALLWAY_LEN / (leftProjects.length + 1);
              return <Painting key={p.id} project={p} zPos={-((i + 1) * sp)} isLeft={true} onClick={setSelectedProject} />;
            })}

            {/* ─── RIGHT PAINTINGS ─────────────────────────────────────── */}
            {rightProjects.map((p, i) => {
              const sp = HALLWAY_LEN / (rightProjects.length + 1);
              return <Painting key={p.id} project={p} zPos={-((i + 1) * sp) - sp * 0.3} isLeft={false} onClick={setSelectedProject} />;
            })}

            {/* Floating dust motes */}
            {[...Array(12)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute', width: i % 3 === 0 ? 4 : 2.5, height: i % 3 === 0 ? 4 : 2.5,
                borderRadius: '50%',
                background: i % 4 === 0 ? 'rgba(255,200,80,0.38)' : 'rgba(201,162,39,0.28)',
                left: `${10 + i * 7.5}%`, top: `${14 + (i % 4) * 17}%`,
                transform: `translateZ(${-80 - i * 110}px)`,
                animation: `dustFloat ${2.8 + i * 0.55}s ease-in-out ${i * 0.42}s infinite`,
              }} />
            ))}

            {/* Volumetric fog planes */}
            {[-400, -800, -1300, -1900].map((z, i) => (
              <div key={i} style={{
                position: 'absolute', width: 960, height: 180, bottom: 0, left: '50%',
                transform: `translateX(-50%) translateZ(${z}px)`,
                background: `radial-gradient(ellipse at 50% 100%, rgba(201,162,39,${0.04 - i * 0.005}) 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />
            ))}
          </div>{/* /world */}

          {/* CHIBI — fixed */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100%', pointerEvents: 'none' }}>
            <ChibiCharacter lookAngle={lookAngle} movingForward={movingForward} />
          </div>

        </div>{/* /scene */}

        {/* Vignette */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 11, background: 'radial-gradient(ellipse at 50% 50%,transparent 32%,rgba(0,0,0,.78) 100%)' }} />
        {/* Floor fog */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10, background: 'linear-gradient(0deg,rgba(0,0,0,.45) 0%,transparent 30%)' }} />
        {/* Top fade */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 40, pointerEvents: 'none', zIndex: 10, background: 'linear-gradient(180deg,rgba(0,0,0,0.55),transparent)' }} />

        {/* Hint */}
        <div className="gal-hint" style={{ position: 'absolute', bottom: 16, left: '50%', textAlign: 'center', zIndex: 15, pointerEvents: 'none' }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 10, color: 'rgba(200,160,40,.72)', letterSpacing: '.15em' }}>↕ SCROLL TO WALK THE GALLERY</div>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 9, color: 'rgba(100,80,30,.62)', letterSpacing: '.1em', marginTop: 2 }}>↔ LOOK AROUND · CLICK PAINTINGS TO EXPLORE</div>
        </div>

        {/* Progress bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'rgba(100,80,20,.22)', zIndex: 15 }}>
          <div style={{ height: '100%', width: `${(scrollZ / MAX_SCROLL) * 100}%`, background: 'linear-gradient(90deg,#8b6914,#c9a227,#e8c547)', transition: 'width .1s linear' }} />
        </div>
      </div>{/* /viewport */}

      {/* ── Controls ────────────────────────────────────────────────────── */}
      <div style={{ marginTop: 22, display: 'flex', gap: 36, alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 9, color: '#455a64', letterSpacing: '.15em', marginBottom: 6, textTransform: 'uppercase' }}>Progress</div>
          <div style={{ width: 120, height: 2, background: 'rgba(176,190,197,.12)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${(scrollZ / MAX_SCROLL) * 100}%`, background: 'linear-gradient(90deg,#c9a227,#e8c547)', transition: 'width .1s linear' }} />
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 9, color: '#455a64', letterSpacing: '.15em', textTransform: 'uppercase' }}>Works</div>
          <div style={{ fontFamily: 'Cinzel,serif', fontSize: 22, fontWeight: 700, color: '#c9a227' }}>{String(projects.length).padStart(2, '0')}</div>
        </div>
      </div>

      {/* ── GitHub CTA ──────────────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginTop: 26, marginBottom: 24 }}>
        <p style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 10, letterSpacing: '.18em', color: '#455a64', textTransform: 'uppercase', marginBottom: 12 }}>Want to see more?</p>
        <a href="https://github.com/Sudesh-2002" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 28px', fontFamily: 'Cinzel,serif', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: '#b0bec5', background: 'transparent', border: '1px solid rgba(176,190,197,.22)', borderRadius: 30, textDecoration: 'none', transition: 'all .3s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,162,39,.42)'; e.currentTarget.style.color = '#c9a227'; e.currentTarget.style.background = 'rgba(201,162,39,.06)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(176,190,197,.22)'; e.currentTarget.style.color = '#b0bec5'; e.currentTarget.style.background = 'transparent'; }}
        >⬡ View All on GitHub</a>
      </div>

      {/* ── Popup ────────────────────────────────────────────────────────── */}
      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;