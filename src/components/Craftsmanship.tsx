import { useEffect, useRef } from 'react';

const stages = [
  {
    num: '01',
    icon: '✦',
    name: 'Sketching',
    desc: 'Every creation begins as a vision. Our master perfumers sketch the olfactory map — charting the emotional journey a fragrance will take its wearer on across hours.',
    detail: 'Paris Atelier',
  },
  {
    num: '02',
    icon: '◈',
    name: 'Ingredients',
    desc: 'Rare botanicals are sourced from the four corners of the earth. Bulgarian rose. Indonesian patchouli. Taif oud. Each ingredient chosen for its singular, irreplaceable character.',
    detail: 'Global Sourcing',
  },
  {
    num: '03',
    icon: '◉',
    name: 'Extraction',
    desc: 'Ancient steam distillation, cold-press extraction, and solvent maceration coax the soul from each material. No shortcuts. No compromises. Pure essence, captured.',
    detail: 'Grasse Method',
  },
  {
    num: '04',
    icon: '⬡',
    name: 'Blending',
    desc: 'In a temperature-controlled sanctuary, our perfumer composes. Hundreds of iterations. Years of refinement. Until a single formula feels like it has always existed.',
    detail: 'Master Perfumer',
  },
  {
    num: '05',
    icon: '◇',
    name: 'Packaging',
    desc: 'Each bottle is hand-blown by Venetian artisans. Gold fittings cast to specification. Every component assembled by hand in our Paris maison. Art you hold.',
    detail: 'Venice Crafted',
  },
];

export default function Craftsmanship() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const stages = entry.target.querySelectorAll('.timeline-stage');
            stages.forEach((stage, i) => {
              setTimeout(() => {
                (stage as HTMLElement).style.opacity = '1';
                (stage as HTMLElement).style.transform = 'translateY(0)';
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const headerEls = document.querySelectorAll('#craftsmanship .fade-up');
    const headerObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );

    headerEls.forEach(el => headerObserver.observe(el));

    if (trackRef.current) {
      const stageDivs = trackRef.current.querySelectorAll('.timeline-stage');
      stageDivs.forEach(s => {
        (s as HTMLElement).style.opacity = '0';
        (s as HTMLElement).style.transform = 'translateY(40px)';
        (s as HTMLElement).style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      });
      observer.observe(trackRef.current);
    }

    return () => {
      observer.disconnect();
      headerObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="craftsmanship"
      ref={sectionRef}
      style={{
        padding: 'clamp(80px, 10vw, 160px) 0',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--black) 0%, #0A0A08 50%, var(--black) 100%)',
        position: 'relative',
      }}
    >
      {/* Background grain - CSS based for performance */}
      <div className="noise-overlay" />

      {/* Gold lines */}
      <div style={{
        position: 'absolute', top: '50%', left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(212,176,106,0.1), transparent)',
        pointerEvents: 'none',
      }} />

      <div className="craftsmanship-header">
        <div className="section-label fade-up">— The Art of Making —</div>
        <h2 className="section-title fade-up">
          Five Acts of <em>Creation</em>
        </h2>
        <p className="fade-up" style={{
          fontSize: '15px', color: 'rgba(245,245,240,0.4)',
          maxWidth: '480px', lineHeight: 1.8, marginTop: '24px',
        }}>
          From the first pencil stroke to the final fitting — every FLY creation 
          passes through five sacred stages of meticulous craftsmanship.
        </p>
      </div>

      <div ref={trackRef} className="timeline-track" style={{ overflowX: 'auto', display: 'flex' }}>
        {stages.map((stage) => (
          <div key={stage.num} className="timeline-stage">
            <div className="timeline-num">{stage.num}</div>
            <div className="timeline-icon">{stage.icon}</div>

            <div style={{
              fontFamily: 'var(--font-sans)', fontSize: '10px',
              letterSpacing: '0.4em', color: 'var(--gold)',
              textTransform: 'uppercase', marginBottom: '12px',
            }}>
              {stage.detail}
            </div>

            <div className="timeline-name">{stage.name}</div>
            <p className="timeline-desc">{stage.desc}</p>

            {/* Bottom gold accent */}
            <div style={{
              position: 'absolute', bottom: '32px', left: '48px',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <div style={{ width: '24px', height: '1px', background: 'var(--gold)', opacity: 0.4 }} />
              <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--gray)' }}>
                Stage {stage.num}
              </span>
            </div>

            <div className="timeline-line" />
          </div>
        ))}
      </div>
    </section>
  );
}
