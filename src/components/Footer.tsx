export default function Footer() {
  const columns = [
    {
      title: 'Collection',
      links: ['Noir Essence', 'Amber Gold', 'Midnight Oud', 'Royal Elixir', 'Limited Editions'],
    },
    {
      title: 'Story',
      links: ['About FLY', 'Master Perfumer', 'Philosophy', 'Awards', 'Press'],
    },
    {
      title: 'Journal',
      links: ['The Art of Scent', 'Ingredient Diaries', 'Behind the Bottle', 'Events', 'Collaborations'],
    },
    {
      title: 'Contact',
      links: ['Our Boutiques', 'Online Boutique', 'Concierge', 'Wholesale', 'Careers'],
    },
  ];

  return (
    <footer id="footer" style={{
      padding: 'clamp(60px, 10vw, 120px) clamp(20px, 8vw, 120px) 40px',
      position: 'relative',
      borderTop: '1px solid rgba(212,176,106,0.1)',
      overflow: 'hidden',
      background: 'var(--black)',
    }}>
      {/* Background noise */}
      <div className="noise-overlay" />

      {/* Background logo watermark */}
      <div style={{
        position: 'absolute',
        bottom: '-40px', left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(120px, 20vw, 280px)',
        fontWeight: 700, letterSpacing: '0.15em',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(212,176,106,0.04)',
        pointerEvents: 'none', userSelect: 'none',
        whiteSpace: 'nowrap',
      }}>
        FLY
      </div>

      {/* Top section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
        gap: '60px',
        marginBottom: '80px',
        position: 'relative', zIndex: 1,
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '40px', fontWeight: 700,
            letterSpacing: '0.3em', color: 'var(--gold)',
            marginBottom: '20px',
          }}>
            FLY
          </div>
          <p style={{
            fontSize: '13px', lineHeight: 1.8,
            color: 'rgba(245,245,240,0.35)',
            maxWidth: '260px',
          }}>
            Haute Parfumerie since 1993. Crafting extraordinary fragrances for those who understand 
            that the most powerful art is invisible.
          </p>

          {/* Awards */}
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {['Best Niche House 2024', 'Fragrance Icon Award'].map(award => (
              <div key={award} style={{
                fontSize: '10px', letterSpacing: '0.2em',
                color: 'rgba(212,176,106,0.5)',
                border: '1px solid rgba(212,176,106,0.2)',
                padding: '4px 12px',
                textTransform: 'uppercase',
              }}>
                {award}
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {columns.map(col => (
          <div key={col.title}>
            <div style={{
              fontSize: '10px', letterSpacing: '0.4em',
              textTransform: 'uppercase', color: 'var(--gold)',
              marginBottom: '24px',
            }}>
              {col.title}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {col.links.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    style={{
                      fontSize: '13px', color: 'rgba(245,245,240,0.45)',
                      textDecoration: 'none', letterSpacing: '0.05em',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--gold)'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(245,245,240,0.45)'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Gold divider */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(212,176,106,0.2), transparent)',
        marginBottom: '40px',
        position: 'relative', zIndex: 1,
      }} />

      {/* Bottom section */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '20px',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          fontSize: '12px', color: 'rgba(245,245,240,0.25)',
          letterSpacing: '0.1em',
        }}>
          &copy; {new Date().getFullYear()} FLY Haute Parfumerie. All rights reserved. Paris, France.
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {/* Socials */}
          {[
            { label: 'IG', href: '#' },
            { label: 'FB', href: '#' },
            { label: 'X', href: '#' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              onClick={e => e.preventDefault()}
              style={{
                width: '36px', height: '36px', borderRadius: '50%',
                border: '1px solid rgba(212,176,106,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(245,245,240,0.45)', fontSize: '11px',
                textDecoration: 'none', letterSpacing: '0.05em',
                transition: 'border-color 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--gold)';
                el.style.color = 'var(--gold)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(212,176,106,0.2)';
                el.style.color = 'rgba(245,245,240,0.45)';
              }}
            >
              {s.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy Policy', 'Terms', 'Cookies'].map(link => (
            <a
              key={link}
              href="#"
              onClick={e => e.preventDefault()}
              style={{
                fontSize: '11px', color: 'rgba(245,245,240,0.2)',
                textDecoration: 'none', letterSpacing: '0.1em',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = 'rgba(212,176,106,0.6)'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(245,245,240,0.2)'}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
