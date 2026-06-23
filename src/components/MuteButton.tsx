import { useState } from 'react';

export default function MuteButton() {
  const [muted, setMuted] = useState(true);

  return (
    <button
      id="mute-btn"
      onClick={() => setMuted(m => !m)}
      title={muted ? 'Unmute ambient sound' : 'Mute'}
      style={{
        position: 'fixed', bottom: '32px', right: '32px',
        zIndex: 9000, width: '48px', height: '48px',
        borderRadius: '50%',
        background: 'rgba(8,8,8,0.8)',
        border: '1px solid rgba(212,176,106,0.3)',
        color: 'var(--gold)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'none',
        backdropFilter: 'blur(10px)',
        transition: 'border-color 0.3s ease',
        fontSize: '16px',
      }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,176,106,0.3)'}
    >
      {muted ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <line x1="23" y1="9" x2="17" y2="15"/>
          <line x1="17" y1="9" x2="23" y2="15"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        </svg>
      )}
    </button>
  );
}
