import { useEffect, useRef } from 'react';

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const parasRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    // Parallax image on scroll
    const onScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / (rect.height - window.innerHeight);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      imageRef.current.style.transform = `translateY(${clampedProgress * 60 - 30}px) scale(1.12)`;
    };

    // Intersection for text reveals
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const lines = entry.target.querySelectorAll('.line');
            lines.forEach((line, i) => {
              setTimeout(() => {
                (line as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    const titleObs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && titleRef.current) {
            titleRef.current.style.opacity = '1';
            titleRef.current.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) titleObs.observe(titleRef.current);
    parasRef.current.forEach(p => { if (p) observer.observe(p); });

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      titleObs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const paragraphs = [
    "Born from the whispers of ancient perfumers and the vision of tomorrow, FLY is not merely a fragrance house. It is an institution — a living archive of the world's most extraordinary scents.",
    "Our master perfumer, after thirty years traversing the rose valleys of Taif, the oud forests of Borneo, and the jasmine fields of Grasse, distilled a single truth: the most powerful perfumes don't just smell — they remember.",
    "Each FLY creation begins with a story. Then a silence. Then a single note that captures the soul of a moment frozen in time, translated into liquid form for those who understand the language of scent.",
  ];

  return (
    <section id="story" ref={sectionRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden', position: 'relative' }}>
      <div className="noise-overlay" />

      {/* Left - Text */}
      <div className="story-left">
        <div className="section-label" style={{ marginBottom: '24px' }}>— The Story —</div>

        <h2
          ref={titleRef}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(52px, 7vw, 100px)',
            fontWeight: 600,
            lineHeight: 0.95,
            marginBottom: '60px',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 1.2s ease, transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          The Art of<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Invisible</em>
          <br />Architecture
        </h2>

        {paragraphs.map((text, i) => (
          <p
            key={i}
            ref={el => { parasRef.current[i] = el; }}
            className="story-paragraph"
            style={{
              fontSize: '15px',
              lineHeight: 1.9,
              color: 'rgba(245,245,240,0.55)',
              marginBottom: '28px',
              overflow: 'hidden',
            }}
          >
            {text.split('. ').map((sentence, j) => (
              <span
                key={j}
                className="line"
                style={{
                  display: 'block',
                  transform: 'translateY(100%)',
                  transition: `transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${j * 0.15}s`,
                }}
              >
                {sentence}{j < text.split('. ').length - 1 ? '. ' : ''}
              </span>
            ))}
          </p>
        ))}

        <div style={{ marginTop: '48px' }}>
          <a
            href="#notes"
            className="btn-luxury"
            onClick={e => { e.preventDefault(); document.getElementById('notes')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{ opacity: 1 }}
          >
            <div className="btn-shine" />
            <span>Discover Our Notes</span>
          </a>
        </div>

        {/* Decorative line */}
        <div style={{
          width: '60px', height: '1px',
          background: 'var(--gold)',
          marginTop: '60px',
          opacity: 0.4,
        }} />
        <div style={{
          marginTop: '20px',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '14px',
          color: 'var(--gray)',
          letterSpacing: '0.05em',
        }}>
          "Perfume is the art that makes memory speak."
        </div>
      </div>

      {/* Right - Image */}
      <div className="story-right" style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          ref={imageRef}
          style={{
            position: 'absolute',
            inset: '-10%',
            backgroundImage: `url(/images/story-bg.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.12)',
            transition: 'transform 0.05s ease-out',
            filter: 'brightness(0.6) saturate(0.8)',
          }}
        />

        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(8,8,8,0.4) 0%, rgba(8,8,8,0.1) 100%)',
          zIndex: 1,
        }} />

        {/* Side gold line */}
        <div style={{
          position: 'absolute', left: 0, top: '10%', bottom: '10%',
          width: '1px',
          background: 'linear-gradient(180deg, transparent, var(--gold), transparent)',
          opacity: 0.3, zIndex: 2,
        }} />

        {/* Quote overlay */}
        <div style={{
          position: 'absolute', bottom: '60px', right: '48px',
          zIndex: 2,
          textAlign: 'right',
        }}>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(60px, 8vw, 100px)',
            fontWeight: 700,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(212,176,106,0.2)',
            lineHeight: 1,
          }}>
            1993
          </div>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase' }}>
            Est. Paris
          </div>
        </div>
      </div>
    </section>
  );
}
