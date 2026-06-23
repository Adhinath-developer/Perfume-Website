import { useEffect, useRef } from 'react';
import HeroCanvas from './HeroCanvas';


export default function Hero() {
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [
      { el: eyebrowRef.current, delay: 200 },
      { el: titleRef.current, delay: 400 },
      { el: subtitleRef.current, delay: 600 },
      { el: descRef.current, delay: 800 },
      { el: btnRef.current, delay: 1000 },
      { el: scrollRef.current, delay: 1400 },
    ];

    items.forEach(({ el, delay }) => {
      if (!el) return;
      setTimeout(() => {
        el.style.transition = `opacity 1.2s ease, transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
      }, delay + 1600); // Wait after loader
    });

    // Hero parallax on scroll
    const onScroll = () => {
      const progress = window.scrollY / window.innerHeight;
      const heroContent = document.querySelector('.hero-content') as HTMLElement;
      if (heroContent) {
        heroContent.style.transform = `translateY(${progress * 80}px)`;
        heroContent.style.opacity = String(Math.max(0, 1 - progress * 2));
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero">
      <HeroCanvas />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'linear-gradient(90deg, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0.1) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Gold dust overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'radial-gradient(ellipse at 70% 50%, rgba(212,176,106,0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="hero-content" style={{ position: 'relative', zIndex: 10 }}>
        <div
          ref={eyebrowRef}
          className="hero-eyebrow"
          style={{ transform: 'translateY(20px)' }}
        >
          — Haute Parfumerie —
        </div>

        <h1
          ref={titleRef}
          className="hero-title"
          style={{ transform: 'translateY(40px)' }}
        >
          FLY
        </h1>

        <div
          ref={subtitleRef}
          className="hero-subtitle"
          style={{ transform: 'translateY(30px)' }}
        >
          Beyond Fragrance
        </div>

        <p
          ref={descRef}
          className="hero-desc"
          style={{ transform: 'translateY(24px)' }}
        >
          Where ancient alchemy meets modern luxury. Each bottle holds a universe of rare ingredients, 
          crafted by master perfumers for those who dare to transcend.
        </p>

        <a
          ref={btnRef}
          href="#collection"
          className="btn-luxury"
          style={{ transform: 'translateY(20px)' }}
          onClick={e => {
            e.preventDefault();
            document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="btn-shine" />
          <span>Explore Collection</span>
          <span style={{ fontSize: '16px', lineHeight: 1 }}>→</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="hero-scroll-indicator"
        style={{ opacity: 0 }}
      >
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
