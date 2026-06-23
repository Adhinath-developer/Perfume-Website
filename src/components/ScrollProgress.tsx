import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      if (barRef.current) {
        barRef.current.style.width = progress + '%';
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      height: '2px',
      background: 'rgba(255,255,255,0.05)',
      zIndex: 99999,
      pointerEvents: 'none',
    }}>
      <div
        ref={barRef}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, var(--gold-dark), var(--gold), var(--gold-light))',
          width: '0%',
          boxShadow: '0 0 8px var(--gold)',
          transition: 'width 0.05s linear',
        }}
      />
    </div>
  );
}
