import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Collection', 'Story', 'Craftsmanship', 'Gallery', 'Contact'];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileOpen(false); }}>
          FLY
        </a>

        <ul className="nav-links">
          <li><a href="#hero" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a></li>
          {navLinks.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={e => { e.preventDefault(); scrollTo(link); }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Search */}
          <button className="nav-icon" aria-label="Search" style={{ background: 'none', border: 'none', cursor: 'none', padding: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>

          {/* Cart */}
          <button className="nav-icon" aria-label="Cart" style={{ background: 'none', border: 'none', cursor: 'none', padding: 0, position: 'relative' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <line x1="3" x2="21" y1="6" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute', top: '-6px', right: '-6px',
                width: '16px', height: '16px', borderRadius: '50%',
                background: 'var(--gold)', color: 'var(--black)',
                fontSize: '9px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontWeight: 700
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              flexDirection: 'column',
              gap: '5px',
            }}
            className="mobile-menu-btn"
            aria-label="Menu"
          >
            <span style={{
              width: '20px', height: '2px',
              background: mobileOpen ? 'var(--gold)' : 'var(--white)',
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span style={{
              width: '20px', height: '2px',
              background: mobileOpen ? 'transparent' : 'var(--white)',
              transition: 'all 0.3s ease',
            }} />
            <span style={{
              width: '20px', height: '2px',
              background: mobileOpen ? 'var(--gold)' : 'var(--white)',
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(8, 8, 8, 0.98)',
        zIndex: 8999,
        display: mobileOpen ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
      }}>
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileOpen(false); }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            color: 'var(--gold)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          Home
        </a>
        {navLinks.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={e => { e.preventDefault(); scrollTo(link); }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '28px',
              color: 'rgba(245, 245, 240, 0.7)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--gold)'}
            onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(245, 245, 240, 0.7)'}
          >
            {link}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
