
const testimonials = [
  {
    initial: 'V',
    name: 'Victoria Laurent',
    location: 'Paris, France',
    quote: 'Noir Essence transported me to another dimension. I have worn Dior, Tom Ford, MFK — but nothing has ever felt like this. FLY is in a league of its own.',
  },
  {
    initial: 'R',
    name: 'Rafael Monteiro',
    location: 'Sao Paulo, Brazil',
    quote: 'The Amber Gold is liquid fire. It opens with saffron that feels warm on skin, then settles into the most hypnotic base I have ever encountered. Masterwork.',
  },
  {
    initial: 'S',
    name: 'Sofia Andersen',
    location: 'Copenhagen, Denmark',
    quote: 'I ordered Midnight Oud on a whim. Three bottles later, I cannot imagine my life without it. The longevity is extraordinary — 18 hours on skin.',
  },
  {
    initial: 'A',
    name: 'Amara Chen',
    location: 'Hong Kong',
    quote: 'Royal Elixir is the most beautiful fragrance I have ever smelled. The Taif rose heart is astonishing. I received more compliments in one evening than in years.',
  },
  {
    initial: 'L',
    name: 'Luca Rossi',
    location: 'Milan, Italy',
    quote: 'FLY understands what luxury truly means. Not just the scent, but the ritual — the bottle, the unboxing, the entire experience. Perfection.',
  },
  {
    initial: 'N',
    name: 'Nadia Volkov',
    location: 'Moscow, Russia',
    quote: 'I gifted Noir Essence to my partner and he has never let me forget it. The reactions he receives wherever he goes are remarkable. Pure class.',
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="glass-card"
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(-8px)';
        el.style.boxShadow = '0 20px 60px rgba(212,176,106,0.1)';
        el.style.borderColor = 'rgba(212,176,106,0.3)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = '';
        el.style.boxShadow = '';
        el.style.borderColor = '';
      }}
      style={{
        flex: '0 0 380px', padding: '40px 36px', cursor: 'none',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: 'var(--gold)', fontSize: '12px' }}>&#9733;</span>
        ))}
      </div>

      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '17px', fontStyle: 'italic', lineHeight: 1.7,
        color: 'rgba(245,245,240,0.75)',
        marginBottom: '28px',
      }}>
        &ldquo;{t.quote}&rdquo;
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #A8862A, #D4B06A)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--black)',
          fontWeight: 700,
        }}>
          {t.initial}
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--white)', letterSpacing: '0.05em' }}>
            {t.name}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--gray)', letterSpacing: '0.1em' }}>
            {t.location}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: 'clamp(80px, 10vw, 160px) 0', overflow: 'hidden', background: 'var(--black)', position: 'relative' }}>
      <div className="noise-overlay" />

      <div style={{ textAlign: 'center', padding: '0 32px', marginBottom: '80px' }}>
        <div className="section-label fade-up">— Our Clients —</div>
        <h2 className="section-title fade-up">
          Words of the <em>House</em>
        </h2>
      </div>

      <div style={{ overflow: 'hidden', marginBottom: '24px' }}>
        <div style={{
          display: 'flex', gap: '24px',
          animation: 'marqueeScroll 50s linear infinite',
          width: 'max-content',
        }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex', gap: '24px',
          animation: 'marqueeScrollReverse 55s linear infinite',
          width: 'max-content',
        }}>
          {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeScrollReverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
