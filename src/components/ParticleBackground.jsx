import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouseX = 0, mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });

    // Gold and silver palette
    const colors = [
      'rgba(201,162,39,',
      'rgba(232,197,71,',
      'rgba(176,190,197,',
      'rgba(232,237,245,',
      'rgba(139,105,20,',
    ];

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.2 + 0.3;
        this.opacity = Math.random() * 0.45 + 0.1;
        const c = colors[Math.floor(Math.random() * colors.length)];
        this.color = c + this.opacity + ')';
        this.baseColor = c;
      }
      update() {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 180) {
          const force = (180 - dist) / 180;
          this.vx -= (dx / dist) * force * 0.4;
          this.vy -= (dy / dist) * force * 0.4;
        }
        this.vx *= 0.99;
        this.vy *= 0.99;
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < 130; i++) particles.push(new Particle());

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i+1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 100) {
            ctx.beginPath();
            const alpha = 0.12 * (1 - dist/100);
            ctx.strokeStyle = `rgba(201,162,39,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0, opacity: 0.65,
      }}
    />
  );
};

export default ParticleBackground;