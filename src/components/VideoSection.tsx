import { useEffect, useRef } from 'react';

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (eyebrowRef.current) {
                eyebrowRef.current.style.opacity = '1';
                eyebrowRef.current.style.transform = 'translateY(0)';
              }
            }, 100);
            setTimeout(() => {
              if (titleRef.current) {
                titleRef.current.style.opacity = '1';
                titleRef.current.style.transform = 'translateY(0)';
              }
            }, 300);
            setTimeout(() => {
              if (btnRef.current) {
                btnRef.current.style.opacity = '1';
                btnRef.current.style.transform = 'translateY(0)';
              }
            }, 600);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="video-section"
      ref={sectionRef}
      style={{
        position: 'relative',
        height: 'clamp(60vh, 100vh, 100vh)',
        minHeight: '500px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Cinematic background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse at 30% 50%, rgba(212,176,106,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 50%, rgba(180,100,40,0.06) 0%, transparent 50%),
          linear-gradient(180deg, #080808 0%, #0D0A04 50%, #080808 100%)
        `,
        zIndex: 0,
      }} />

      {/* Animated light beams */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '2px',
            height: '60vh',
            background: `linear-gradient(180deg, rgba(212,176,106,${0.06 - i * 0.01}), transparent)`,
            transformOrigin: 'top center',
            transform: `translate(-50%, -5%) rotate(${(i - 2) * 15}deg)`,
            zIndex: 1,
            animation: `beamPulse ${3 + i}s ease infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Grain overlay */}
      <div className="noise-overlay" style={{ zIndex: 2 }} />

      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.4)', zIndex: 3 }} />

      {/* Content */}
      <div className="video-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 32px' }}>
        <div
          ref={eyebrowRef}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px', letterSpacing: '0.6em',
            textTransform: 'uppercase', color: 'var(--gold)',
            marginBottom: '28px',
            opacity: 0, transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          — Behind the Veil —
        </div>

        <h2
          ref={titleRef}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(48px, 8vw, 120px)',
            fontWeight: 600, lineHeight: 1,
            color: 'var(--white)',
            marginBottom: '48px',
            opacity: 0, transform: 'translateY(40px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          Crafted<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Beyond Time</em>
        </h2>

        <button
          ref={btnRef}
          className="btn-watch"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '16px',
            padding: '20px 48px',
            background: 'rgba(212,176,106,0.1)',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            fontSize: '11px', letterSpacing: '0.3em',
            textTransform: 'uppercase', cursor: 'none',
            backdropFilter: 'blur(10px)',
            opacity: 0, transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease, background 0.3s ease, color 0.3s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = 'var(--gold)';
            (e.currentTarget as HTMLElement).style.color = 'var(--black)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(212,176,106,0.1)';
            (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
          }}
        >
          <span style={{
            width: '36px', height: '36px',
            borderRadius: '50%',
            border: '1px solid currentColor',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '12px',
          }}>
            ▶
          </span>
          Watch Story
        </button>

        {/* Decorative dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '60px' }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{
              width: i === 1 ? '24px' : '6px',
              height: '2px',
              background: i === 1 ? 'var(--gold)' : 'rgba(212,176,106,0.3)',
              transition: 'width 0.3s ease',
            }} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes beamPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
