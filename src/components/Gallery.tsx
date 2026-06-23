import { useEffect } from 'react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/11517300/pexels-photo-11517300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Noir perfume bottle',
  },
  {
    src: 'https://images.pexels.com/photos/8450107/pexels-photo-8450107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Perfume crafting',
  },
  {
    src: 'https://images.pexels.com/photos/29986521/pexels-photo-29986521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Elegant bottle design',
  },
  {
    src: 'https://images.pexels.com/photos/8450399/pexels-photo-8450399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Aromatherapy ingredients',
  },
  {
    src: 'https://images.pexels.com/photos/10924522/pexels-photo-10924522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Luxury perfume display',
  },
  {
    src: 'https://images.pexels.com/photos/33179453/pexels-photo-33179453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Saffron flowers',
  },
  {
    src: 'https://images.pexels.com/photos/28664171/pexels-photo-28664171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Perfume collection display',
  },
];

const gridPositions = [
  { col: '1 / 6', row: '1 / 3' },
  { col: '6 / 9', row: '1 / 2' },
  { col: '9 / 13', row: '1 / 3' },
  { col: '6 / 9', row: '2 / 3' },
  { col: '1 / 5', row: '3 / 4' },
  { col: '5 / 9', row: '3 / 4' },
  { col: '9 / 13', row: '3 / 4' },
];

export default function Gallery() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('#gallery .fade-up, #gallery .fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" style={{
      padding: 'clamp(80px, 10vw, 160px) clamp(20px, 6vw, 80px)',
      background: 'var(--black)',
      position: 'relative',
    }}>
      <div className="noise-overlay" />

      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <div className="section-label fade-up">— Visual Journey —</div>
        <h2 className="section-title fade-up">
          The <em>Gallery</em>
        </h2>
      </div>

      {/* Desktop grid */}
      <div
        className="gallery-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(3, 220px)',
          gap: '16px',
        }}
      >
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="gallery-item fade-in"
            style={{
              gridColumn: gridPositions[i].col,
              gridRow: gridPositions[i].row,
              overflow: 'hidden',
              position: 'relative',
              cursor: 'none',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              const inner = el.querySelector('.gallery-img') as HTMLElement;
              const overlay = el.querySelector('.gallery-item-overlay') as HTMLElement;
              if (inner) {
                inner.style.transform = 'scale(1.08)';
                inner.style.filter = 'brightness(1) saturate(1.1)';
              }
              if (overlay) overlay.style.borderColor = 'rgba(212,176,106,0.5)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              const inner = el.querySelector('.gallery-img') as HTMLElement;
              const overlay = el.querySelector('.gallery-item-overlay') as HTMLElement;
              if (inner) {
                inner.style.transform = '';
                inner.style.filter = 'brightness(0.8) saturate(0.9)';
              }
              if (overlay) overlay.style.borderColor = 'rgba(212,176,106,0)';
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="gallery-img"
              loading="lazy"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.5s ease',
                filter: 'brightness(0.8) saturate(0.9)',
              }}
            />
            <div
              className="gallery-item-overlay"
              style={{
                position: 'absolute', inset: 0,
                border: '1px solid rgba(212,176,106,0)',
                transition: 'border-color 0.4s ease',
                zIndex: 1,
              }}
            />
            {/* Number overlay */}
            <div style={{
              position: 'absolute', bottom: '16px', right: '16px',
              fontFamily: 'var(--font-serif)',
              fontSize: '11px', letterSpacing: '0.3em',
              color: 'rgba(212,176,106,0.6)',
              zIndex: 2,
            }}>
              {String(i + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      {/* View all link */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <a
          href="#"
          className="btn-luxury"
          style={{ opacity: 1 }}
          onClick={e => e.preventDefault()}
        >
          <div className="btn-shine" />
          <span>View Full Gallery</span>
        </a>
      </div>
    </section>
  );
}
