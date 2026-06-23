import { useEffect, useRef, useState } from 'react';

export default function Newsletter() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && cardRef.current) {
            cardRef.current.style.opacity = '1';
            cardRef.current.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" style={{ padding: 'clamp(80px, 10vw, 160px) clamp(20px, 8vw, 120px)', position: 'relative' }}>
      <div className="noise-overlay" />

      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(212,176,106,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div
        ref={cardRef}
        className="glass-card newsletter-card"
        style={{
          maxWidth: '720px', margin: '0 auto',
          padding: 'clamp(48px, 8vw, 80px) clamp(32px, 6vw, 80px)',
          textAlign: 'center',
          opacity: 0, transform: 'translateY(40px)',
          transition: 'opacity 1s ease, transform 1s ease',
          position: 'relative',
        }}
      >
        {/* Corner accents */}
        {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(pos => {
          const isTop = pos.includes('top');
          const isLeft = pos.includes('left');
          return (
            <div
              key={pos}
              style={{
                position: 'absolute',
                top: isTop ? 0 : 'auto',
                bottom: isTop ? 'auto' : 0,
                left: isLeft ? 0 : 'auto',
                right: isLeft ? 'auto' : 0,
                width: '20px', height: '20px',
                borderTop: isTop ? '1px solid var(--gold)' : 'none',
                borderBottom: isTop ? 'none' : '1px solid var(--gold)',
                borderLeft: isLeft ? '1px solid var(--gold)' : 'none',
                borderRight: isLeft ? 'none' : '1px solid var(--gold)',
                opacity: 0.5,
              }}
            />
          );
        })}

        <div className="section-label" style={{ marginBottom: '24px' }}>
          — Stay Connected —
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 600, color: 'var(--white)',
          lineHeight: 1.1, marginBottom: '20px',
        }}>
          Join The<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>House of FLY</em>
        </h2>

        <p style={{
          fontSize: '14px', color: 'rgba(245,245,240,0.45)',
          lineHeight: 1.7, marginBottom: '48px', maxWidth: '400px', margin: '0 auto 48px',
        }}>
          Receive exclusive access to new collections, private events, 
          and the intimate stories behind each creation.
        </p>

        {submitted ? (
          <div style={{
            padding: '20px',
            border: '1px solid rgba(212,176,106,0.4)',
            color: 'var(--gold)',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '18px',
            animation: 'fadeIn 0.5s ease',
          }}>
            Welcome to the House of FLY
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', gap: 0, maxWidth: '480px', margin: '0 auto' }}
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              className="newsletter-input"
              required
              style={{
                flex: 1, padding: '16px 24px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(212,176,106,0.2)',
                borderRight: 'none',
                color: 'var(--white)', fontSize: '13px',
                letterSpacing: '0.05em', outline: 'none',
                fontFamily: 'var(--font-sans)',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(212,176,106,0.5)'}
              onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(212,176,106,0.2)'}
            />
            <button
              type="submit"
              className="newsletter-btn"
              style={{
                padding: '16px 32px',
                background: 'var(--gold)',
                border: '1px solid var(--gold)',
                color: 'var(--black)',
                fontSize: '11px', letterSpacing: '0.3em',
                textTransform: 'uppercase', fontWeight: 600,
                cursor: 'none', position: 'relative', overflow: 'hidden',
              }}
            >
              <div className="btn-shine" />
              Subscribe
            </button>
          </form>
        )}

        <p style={{
          fontSize: '11px', color: 'rgba(245,245,240,0.2)',
          marginTop: '20px', letterSpacing: '0.1em',
        }}>
          No spam. Unsubscribe anytime. Your privacy is sacred.
        </p>

        <style>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        `}</style>
      </div>
    </section>
  );
}
