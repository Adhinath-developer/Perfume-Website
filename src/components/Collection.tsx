import { useEffect, useRef } from 'react';

const perfumes = [
  {
    id: '01',
    name: 'Noir Essence',
    desc: 'A hypnotic darkness. Black orchid, smoked oud, and liquid velvet whispered into existence.',
    price: '€380',
    gradient: 'linear-gradient(145deg, #0D0A06 0%, #1A0F05 40%, #0A0808 100%)',
    accent: '#D4B06A',
    notes: 'Oud · Black Orchid · Vetiver',
    image: 'https://images.pexels.com/photos/11517300/pexels-photo-11517300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: '02',
    name: 'Amber Gold',
    desc: 'Liquid sun captured. Raw amber, warm saffron, and honeyed benzoin from ancient bazaars.',
    price: '€420',
    gradient: 'linear-gradient(145deg, #150A02 0%, #2A1506 40%, #0F0C06 100%)',
    accent: '#E8CC8A',
    notes: 'Saffron · Amber · Benzoin',
    image: 'https://images.pexels.com/photos/10924522/pexels-photo-10924522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: '03',
    name: 'Midnight Oud',
    desc: 'The hour between dusk and dawn. Vietnamese oud, rose absolue, and crystalline musk.',
    price: '€560',
    gradient: 'linear-gradient(145deg, #060810 0%, #0A0D1A 40%, #060608 100%)',
    accent: '#A090D4',
    notes: 'Vietnamese Oud · Rose · Musk',
    image: 'https://images.pexels.com/photos/29986521/pexels-photo-29986521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: '04',
    name: 'Royal Elixir',
    desc: 'The crowning jewel. Grasse jasmine, Taif rose, and a heart of precious agarwood.',
    price: '€680',
    gradient: 'linear-gradient(145deg, #100808 0%, #200D0A 40%, #100808 100%)',
    accent: '#D48A6A',
    notes: 'Jasmine · Taif Rose · Agarwood',
    image: 'https://images.pexels.com/photos/28664171/pexels-photo-28664171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

export default function Collection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    // Intersection Observer for header reveal
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);

    // Cards stagger
    const cards = document.querySelectorAll('.perfume-card');
    const cardObserver = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = '1';
              (entry.target as HTMLElement).style.transform = 'translateY(0)';
            }, i * 120);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach(card => {
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(60px)';
      (card as HTMLElement).style.transition = 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      cardObserver.observe(card);
    });

    // Drag to scroll
    const track = trackRef.current!;

    const onMouseDown = (e: MouseEvent) => {
      isDown.current = true;
      track.classList.add('active');
      startX.current = e.pageX - track.offsetLeft;
      scrollLeft.current = track.scrollLeft;
    };
    const onMouseLeave = () => { isDown.current = false; track.classList.remove('active'); };
    const onMouseUp = () => { isDown.current = false; track.classList.remove('active'); };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      track.scrollLeft = scrollLeft.current - walk;
    };

    track.addEventListener('mousedown', onMouseDown);
    track.addEventListener('mouseleave', onMouseLeave);
    track.addEventListener('mouseup', onMouseUp);
    track.addEventListener('mousemove', onMouseMove);

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
      track.removeEventListener('mousedown', onMouseDown);
      track.removeEventListener('mouseleave', onMouseLeave);
      track.removeEventListener('mouseup', onMouseUp);
      track.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section id="collection" style={{ padding: 'clamp(80px, 10vw, 160px) 0', background: 'var(--black)', overflow: 'hidden' }}>
      <div className="noise-overlay" />

      <div ref={headerRef} className="collection-header fade-up" style={{ padding: '0 clamp(20px, 6vw, 120px)' }}>
        <div className="section-label">— Our Signature Collection —</div>
        <h2 className="section-title">
          Rare. <em>Eternal.</em>
          <br />Unmistakable.
        </h2>
      </div>

      <div ref={trackRef} className="collection-track">
        {perfumes.map((p) => (
          <div key={p.id} className="perfume-card glass-card">
            <div
              className="perfume-card-bg"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className="perfume-card-overlay" />
            <div className="perfume-card-glow" />

            {/* Top shimmer line */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
              background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
              opacity: 0.6, zIndex: 3,
            }} />

            <div className="perfume-card-content" style={{ position: 'relative', zIndex: 4 }}>
              <div className="perfume-card-number">{p.id}</div>
              <div className="perfume-card-name">{p.name}</div>
              <div className="perfume-card-desc">{p.desc}</div>

              <div style={{
                fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(212,176,106,0.6)',
                textTransform: 'uppercase', marginBottom: '20px',
              }}>
                {p.notes}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="perfume-card-price">{p.price}</div>
                <button style={{
                  background: 'none', border: '1px solid rgba(212,176,106,0.4)',
                  color: 'var(--gold)', fontSize: '10px', letterSpacing: '0.3em',
                  padding: '8px 16px', textTransform: 'uppercase', cursor: 'none',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.background = 'var(--gold)';
                    (e.target as HTMLElement).style.color = 'var(--black)';
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.background = 'none';
                    (e.target as HTMLElement).style.color = 'var(--gold)';
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        padding: '28px clamp(32px, 8vw, 120px) 0',
        color: 'rgba(245,245,240,0.25)',
        fontSize: '11px', letterSpacing: '0.3em',
      }}>
        <span>←</span>
        <span>Drag to explore</span>
        <span>→</span>
      </div>
    </section>
  );
}
