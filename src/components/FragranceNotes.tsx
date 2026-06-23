import { useEffect, useRef } from 'react';

const notes = [
  {
    type: 'Top Notes',
    className: 'sphere-top',
    ingredients: ['Bergamot', 'Mandarin', 'Pink Pepper'],
    emoji: '✦',
    desc: 'The opening whisper',
    particleColor: 'rgba(255, 220, 150,',
  },
  {
    type: 'Heart Notes',
    className: 'sphere-heart',
    ingredients: ['Rose', 'Saffron', 'Jasmine'],
    emoji: '◈',
    desc: 'The soul of the fragrance',
    particleColor: 'rgba(255, 160, 160,',
  },
  {
    type: 'Base Notes',
    className: 'sphere-base',
    ingredients: ['Vanilla', 'Amber', 'Musk'],
    emoji: '◉',
    desc: 'The eternal signature',
    particleColor: 'rgba(180, 120, 60,',
  },
];

export default function FragranceNotes() {
  const sectionRef = useRef<HTMLElement>(null);
  const sphereRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const particleAnims = useRef<number[]>([]);

  useEffect(() => {
    // Observe section
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const children = sectionRef.current.querySelectorAll('.fade-up');
      children.forEach(el => observer.observe(el));
    }

    // Track section visibility to pause/resume particle rendering
    const sectionVisibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          particleAnims.current.forEach(id => cancelAnimationFrame(id));
          particleAnims.current = [];
        }
      },
      { rootMargin: '100px' }
    );
    if (sectionRef.current) sectionVisibilityObserver.observe(sectionRef.current);

    // Particle canvas for each sphere
    canvasRefs.current.forEach((canvas, idx) => {
      if (!canvas) return;
      const ctx = canvas.getContext('2d')!;
      canvas.width = 240;
      canvas.height = 240;

      const particleColor = notes[idx].particleColor;
      const ps: { x: number, y: number, vx: number, vy: number, life: number, maxLife: number, size: number }[] = [];

      const spawnParticle = () => {
        const angle = Math.random() * Math.PI * 2;
        const r = 65 + Math.random() * 15;
        ps.push({
          x: 120 + Math.cos(angle) * r,
          y: 120 + Math.sin(angle) * r,
          vx: Math.cos(angle) * 0.4 + (Math.random() - 0.5) * 0.5,
          vy: Math.sin(angle) * 0.4 - Math.random() * 0.8,
          life: 0,
          maxLife: 80 + Math.random() * 60,
          size: Math.random() * 2.5 + 0.5,
        });
      };

      let frame = 0;
      const animate = () => {
        const raf = requestAnimationFrame(animate);
        particleAnims.current[idx] = raf;
        frame++;

        if (frame % 3 === 0) spawnParticle();

        ctx.clearRect(0, 0, 240, 240);

        for (let i = ps.length - 1; i >= 0; i--) {
          const p = ps[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy -= 0.01;
          p.life++;

          if (p.life >= p.maxLife) { ps.splice(i, 1); continue; }

          const alpha = (1 - p.life / p.maxLife) * 0.7;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${particleColor}${alpha})`;
          ctx.fill();
        }
      };
      animate();
    });

    // Mouse tilt on spheres
    sphereRefs.current.forEach(sphere => {
      if (!sphere) return;
      const onMove = (e: MouseEvent) => {
        const rect = sphere.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        sphere.style.transform = `perspective(400px) rotateX(${-dy * 15}deg) rotateY(${dx * 15}deg) scale(1.1) translateY(-8px)`;
      };
      const onLeave = () => {
        sphere.style.transform = '';
        sphere.style.transition = 'transform 0.5s ease';
      };
      sphere.addEventListener('mousemove', onMove);
      sphere.addEventListener('mouseleave', onLeave);
    });

    return () => {
      observer.disconnect();
      particleAnims.current.forEach(id => cancelAnimationFrame(id));
      sectionVisibilityObserver.disconnect();
    };
  }, []);

  return (
    <section id="notes" ref={sectionRef} style={{
      padding: 'clamp(80px, 10vw, 160px) clamp(20px, 8vw, 120px)',
      background: 'radial-gradient(ellipse at center, rgba(212,176,106,0.04) 0%, transparent 70%)',
      textAlign: 'center',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div className="noise-overlay" />

      <div className="fade-up" style={{ marginBottom: '16px' }}>
        <div className="section-label">— Olfactory Pyramid —</div>
      </div>

      <h2 className="section-title fade-up" style={{ marginBottom: '24px' }}>
        The Fragrance <em>Architecture</em>
      </h2>

      <p className="fade-up" style={{
        fontSize: '15px',
        color: 'rgba(245,245,240,0.4)',
        maxWidth: '480px',
        margin: '0 auto 80px',
        lineHeight: 1.8,
      }}>
        Every FLY creation unfolds in three acts — a symphony of rare ingredients 
        that reveal themselves across hours, days, and memories.
      </p>

      <div className="notes-spheres">
        {notes.map((note, idx) => (
          <div key={idx} className={`sphere-wrap fade-up`} style={{ transitionDelay: `${idx * 0.15}s` }}>
            {/* Canvas for particles */}
            <div style={{ position: 'relative', width: 'clamp(140px, 16vw, 200px)', height: 'clamp(140px, 16vw, 200px)' }}>
              <canvas
                ref={el => { canvasRefs.current[idx] = el; }}
                style={{
                  position: 'absolute', inset: '-20%',
                  width: '140%', height: '140%',
                  pointerEvents: 'none', zIndex: 3,
                }}
                width={240} height={240}
              />

              <div
                ref={el => { sphereRefs.current[idx] = el; }}
                className={`sphere ${note.className}`}
                style={{ width: '100%', height: '100%', transition: 'transform 0.3s ease' }}
              >
                <div className="sphere-inner" />
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                  <div style={{
                    fontSize: '28px', color: 'var(--gold)',
                    marginBottom: '8px', display: 'block',
                  }}>{note.emoji}</div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '9px',
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '4px',
                  }}>
                    {note.type}
                  </div>
                </div>
              </div>
            </div>

            {/* Info below sphere */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'var(--gray)',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}>
                {note.desc}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
                {note.ingredients.map(ing => (
                  <div key={ing} className="ingredient">
                    {ing}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative horizontal line */}
      <div style={{
        width: '100%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(212,176,106,0.2), transparent)',
        marginTop: '100px',
      }} />
    </section>
  );
}
