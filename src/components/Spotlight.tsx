import { useEffect, useRef } from 'react';

export default function Spotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0;
    let targetX = 0, targetY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      if (spotRef.current) {
        spotRef.current.style.left = x + 'px';
        spotRef.current.style.top = y + 'px';
      }
    };

    animate();
    window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div
      id="spotlight"
      ref={spotRef}
      style={{
        position: 'fixed', pointerEvents: 'none',
        zIndex: 1,
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,176,106,0.04) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'screen',
      }}
    />
  );
}
