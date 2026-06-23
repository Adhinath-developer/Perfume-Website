import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const label = labelRef.current!;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Dot follows immediately
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';

      // Ring follows with easing
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      label.style.left = ringX + 'px';
      label.style.top = ringY + 'px';

      rafId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('mousemove', onMove);

    // Hover interactions
    const addHoverEffects = () => {
      const buttons = document.querySelectorAll('button, .btn-luxury, .btn-watch, .newsletter-btn, .nav-icon, #mute-btn, .footer-social');
      const products = document.querySelectorAll('.perfume-card');
      const images = document.querySelectorAll('.gallery-item, .story-image-wrap');
      const links = document.querySelectorAll('a');

      const enterBtn = () => ring.classList.add('cursor-hover');
      const leaveBtn = () => ring.classList.remove('cursor-hover');

      const enterProduct = () => {
        ring.classList.add('cursor-view');
        label.textContent = 'VIEW';
        label.classList.add('visible');
      };
      const leaveProduct = () => {
        ring.classList.remove('cursor-view');
        label.classList.remove('visible');
      };

      buttons.forEach(el => {
        el.addEventListener('mouseenter', enterBtn);
        el.addEventListener('mouseleave', leaveBtn);
      });

      products.forEach(el => {
        el.addEventListener('mouseenter', enterProduct);
        el.addEventListener('mouseleave', leaveProduct);
      });

      images.forEach(el => {
        el.addEventListener('mouseenter', enterBtn);
        el.addEventListener('mouseleave', leaveBtn);
      });

      links.forEach(el => {
        el.addEventListener('mouseenter', enterBtn);
        el.addEventListener('mouseleave', leaveBtn);
      });
    };

    // Delay to allow DOM to render
    setTimeout(addHoverEffects, 1500);

    // Re-attach on DOM changes
    const observer = new MutationObserver(() => setTimeout(addHoverEffects, 100));
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
      <div id="cursor-label" ref={labelRef} />
    </>
  );
}
