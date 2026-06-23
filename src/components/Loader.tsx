import { useEffect, useRef, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressNumRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const curtainLeftRef = useRef<HTMLDivElement>(null);
  const curtainRightRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let animFrameId: number;
    let particles: Particle[] = [];
    let time = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    class Particle {
      x: number; y: number;
      tx: number; ty: number;
      vx: number; vy: number;
      size: number;
      alpha: number;
      color: string;
      gathered: boolean;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.tx = cx + (Math.random() - 0.5) * 300;
        this.ty = cy + (Math.random() - 0.5) * 100;
        this.vx = 0; this.vy = 0;
        this.size = Math.random() * 2.5 + 0.5;
        this.alpha = Math.random() * 0.8 + 0.2;
        const lightness = Math.floor(Math.random() * 30 + 60);
        this.color = `hsl(42, ${Math.floor(Math.random() * 30 + 50)}%, ${lightness}%)`;
        this.gathered = false;
      }

      update(progress: number, t: number) {
        const gatherSpeed = progress / 100;
        const noise = Math.sin(t * 0.02 + this.x * 0.01) * 2;
        const dx = this.tx - this.x;
        const dy = this.ty - this.y;
        this.vx = this.vx * 0.85 + dx * gatherSpeed * 0.05;
        this.vy = this.vy * 0.85 + dy * gatherSpeed * 0.05;
        if (progress < 70) {
          this.x += this.vx + noise;
          this.y += this.vy + noise;
        } else {
          this.x += this.vx;
          this.y += this.vy;
        }
        const dist = Math.hypot(dx, dy);
        this.gathered = dist < 8;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#D4B06A';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    for (let i = 0; i < 600; i++) particles.push(new Particle());

    // Logo glow particles around text positions
    const logoTargets: { x: number, y: number }[] = [];
    for (let i = 0; i < 200; i++) {
      const angle = (i / 200) * Math.PI * 2;
      const r = 80 + Math.random() * 60;
      logoTargets.push({
        x: cx + Math.cos(angle) * r * 2.5,
        y: cy + Math.sin(angle) * r * 0.6
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;
      particles.forEach((p, i) => {
        if (logoTargets[i]) {
          p.tx = logoTargets[i].x;
          p.ty = logoTargets[i].y;
        }
        p.update(progress, time);
        p.draw(ctx);
      });
      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Animate progress
    let prog = 0;
    const interval = setInterval(() => {
      prog += Math.random() * 3 + 1;
      if (prog >= 100) prog = 100;
      setProgress(Math.floor(prog));
      if (progressRef.current) progressRef.current.style.width = prog + '%';
      if (progressNumRef.current) progressNumRef.current.textContent = Math.floor(prog) + '%';

      if (prog >= 100) {
        clearInterval(interval);
        // Logo fade in
        setTimeout(() => {
          if (logoRef.current) {
            logoRef.current.style.transition = 'opacity 0.8s ease';
            logoRef.current.style.opacity = '1';
          }
          if (taglineRef.current) {
            taglineRef.current.style.transition = 'opacity 0.8s ease 0.4s';
            taglineRef.current.style.opacity = '1';
          }
        }, 200);

        // Curtain open
        setTimeout(() => {
          cancelAnimationFrame(animFrameId);
          if (loaderRef.current) {
            loaderRef.current.style.transition = 'opacity 0.5s ease';
            loaderRef.current.style.opacity = '0';
          }
          if (curtainLeftRef.current && curtainRightRef.current) {
            curtainLeftRef.current.style.transition = 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)';
            curtainLeftRef.current.style.transform = 'translateX(-100%)';
            curtainRightRef.current.style.transition = 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)';
            curtainRightRef.current.style.transform = 'translateX(100%)';
          }
          setTimeout(() => {
            if (loaderRef.current) loaderRef.current.style.display = 'none';
            onComplete();
          }, 1300);
        }, 2000);
      }
    }, 60);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animFrameId);
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <div id="fly-loader" ref={loaderRef}>
        <canvas id="loader-canvas" ref={canvasRef} />
        <div id="loader-logo" ref={logoRef}>FLY</div>
        <div id="loader-tagline" ref={taglineRef}>HAUTE PARFUMERIE</div>
        <div id="loader-progress-wrap">
          <div id="loader-progress-bar">
            <div id="loader-progress-fill" ref={progressRef} />
          </div>
          <span id="loader-progress-num" ref={progressNumRef}>0%</span>
        </div>
      </div>
      <div id="curtain-left" ref={curtainLeftRef} />
      <div id="curtain-right" ref={curtainRightRef} />
    </>
  );
}
