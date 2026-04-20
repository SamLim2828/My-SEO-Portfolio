
// Shared components for Sam Lim Portfolio
// Exported to window for cross-script access

const { useState, useEffect, useRef } = React;

// ─── NAV ────────────────────────────────────────────────────────────────────
function Nav({ currentPage, navigate, accent }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [caseOpen, setCaseOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cases = [
    { id: 'dialpad', label: 'Dialpad' },
    { id: 'mydeal', label: 'MyDeal' },
    { id: 'cleanco', label: 'CleanCo' },
  ];

  const navLink = (id, label) => {
    const active = currentPage === id;
    return (
      <a
        key={id}
        onClick={e => { e.preventDefault(); navigate(id); setMenuOpen(false); }}
        href="#"
        style={{
          fontSize: 14, fontWeight: active ? 600 : 400,
          color: active ? accent : '#111',
          textDecoration: 'none', letterSpacing: '0.02em',
          transition: 'color 0.2s',
          borderBottom: active ? `2px solid ${accent}` : '2px solid transparent',
          paddingBottom: 2,
        }}
        onMouseEnter={e => e.currentTarget.style.color = accent}
        onMouseLeave={e => e.currentTarget.style.color = active ? accent : '#111'}
      >{label}</a>
    );
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
      backdropFilter: 'blur(8px)',
      borderBottom: `1px solid ${scrolled ? '#e8e8e8' : '#f0f0f0'}`,
      transition: 'all 0.3s',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a onClick={e => { e.preventDefault(); navigate('home'); }} href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: accent, display: 'inline-block' }} />
          <span style={{ fontSize: 15, fontWeight: 700, color: '#111', letterSpacing: '-0.01em' }}>Sam Lim</span>
          <span style={{ fontSize: 12, color: '#888', fontWeight: 400, marginLeft: 4 }}>SEO Strategist</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {navLink('home', 'Home')}
          {navLink('about', 'About Me')}
          
          {/* Case Studies Dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setCaseOpen(true)}
            onMouseLeave={() => setCaseOpen(false)}
          >
            <a href="#" onClick={e => { e.preventDefault(); navigate('case-studies'); }}
              style={{
                fontSize: 14, fontWeight: ['case-studies','dialpad','mydeal','cleanco'].includes(currentPage) ? 600 : 400,
                color: ['case-studies','dialpad','mydeal','cleanco'].includes(currentPage) ? accent : '#111',
                textDecoration: 'none', letterSpacing: '0.02em',
                borderBottom: ['case-studies','dialpad','mydeal','cleanco'].includes(currentPage) ? `2px solid ${accent}` : '2px solid transparent',
                paddingBottom: 2,
              }}
              onMouseEnter={e => e.currentTarget.style.color = accent}
              onMouseLeave={e => e.currentTarget.style.color = ['case-studies','dialpad','mydeal','cleanco'].includes(currentPage) ? accent : '#111'}
            >Case Studies ▾</a>
            {caseOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: -16, marginTop: 8,
                background: '#fff', border: '1px solid #e8e8e8', borderRadius: 8,
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '8px 0', minWidth: 160,
              }}>
                {cases.map(c => (
                  <a key={c.id} href="#" onClick={e => { e.preventDefault(); navigate(c.id); setCaseOpen(false); }}
                    style={{ display: 'block', padding: '10px 20px', fontSize: 14, color: '#111', textDecoration: 'none', fontWeight: currentPage === c.id ? 600 : 400 }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#fef2f2'; e.currentTarget.style.color = accent; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#111'; }}
                  >{c.label}</a>
                ))}
              </div>
            )}
          </div>

          {navLink('contact', 'Contact')}

          <a onClick={e => { e.preventDefault(); navigate('contact'); }} href="#"
            style={{
              background: accent, color: '#fff', padding: '9px 20px', borderRadius: 6,
              fontSize: 13, fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = 0.85}
            onMouseLeave={e => e.currentTarget.style.opacity = 1}
          >Free Strategy Call</a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="mobile-menu-btn">
          <div style={{ width: 22, height: 2, background: '#111', marginBottom: 5, transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <div style={{ width: 22, height: 2, background: '#111', marginBottom: 5, opacity: menuOpen ? 0 : 1 }} />
          <div style={{ width: 22, height: 2, background: '#111', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #e8e8e8', padding: '16px 32px 24px' }}>
          {['home', 'about', 'case-studies', 'dialpad', 'mydeal', 'cleanco', 'contact'].map(id => {
            const labels = { home: 'Home', about: 'About Me', 'case-studies': 'Case Studies', dialpad: '→ Dialpad', mydeal: '→ MyDeal', cleanco: '→ CleanCo', contact: 'Contact' };
            return (
              <a key={id} href="#" onClick={e => { e.preventDefault(); navigate(id); setMenuOpen(false); }}
                style={{ display: 'block', padding: '10px 0', fontSize: 15, color: currentPage === id ? accent : '#111', textDecoration: 'none', fontWeight: currentPage === id ? 600 : 400, borderBottom: '1px solid #f0f0f0' }}
              >{labels[id]}</a>
            );
          })}
        </div>
      )}
    </nav>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────
function Footer({ navigate, accent }) {
  return (
    <footer style={{ background: '#111', color: '#fff', padding: '64px 32px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: accent, display: 'inline-block' }} />
              <span style={{ fontSize: 16, fontWeight: 700 }}>Sam Lim</span>
            </div>
            <p style={{ fontSize: 14, color: '#aaa', lineHeight: 1.7, maxWidth: 240 }}>Revenue-focused SEO strategist turning organic traffic into real business growth.</p>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#666', textTransform: 'uppercase', marginBottom: 16 }}>Pages</div>
            {[['home','Home'],['about','About Me'],['case-studies','Case Studies'],['contact','Contact']].map(([id, label]) => (
              <a key={id} href="#" onClick={e => { e.preventDefault(); navigate(id); window.scrollTo(0,0); }}
                style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: 14, marginBottom: 10 }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
              >{label}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#666', textTransform: 'uppercase', marginBottom: 16 }}>Case Studies</div>
            {[['dialpad','Dialpad'],['mydeal','MyDeal'],['cleanco','CleanCo']].map(([id, label]) => (
              <a key={id} href="#" onClick={e => { e.preventDefault(); navigate(id); window.scrollTo(0,0); }}
                style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: 14, marginBottom: 10 }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
              >{label}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#666', textTransform: 'uppercase', marginBottom: 16 }}>Contact</div>
            <div style={{ fontSize: 14, color: '#ccc', marginBottom: 10 }}>+63 9451262651</div>
            <a href="mailto:limsamuele@gmail.com" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: 14, marginBottom: 10 }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
            >limsamuele@gmail.com</a>
            <a href="https://www.linkedin.com/in/samuel-e-lim/" target="_blank" style={{ color: accent, textDecoration: 'none', fontSize: 14 }}>LinkedIn →</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #222', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 13, color: '#555' }}>© 2026 Samuel E. Lim. All rights reserved.</span>
          <span style={{ fontSize: 13, color: '#555' }}>Fairview, Quezon City, Metro Manila, Philippines</span>
        </div>
      </div>
    </footer>
  );
}

// ─── SHARED UI ─────────────────────────────────────────────────────────────
function Btn({ children, onClick, variant = 'primary', accent }) {
  const [hov, setHov] = useState(false);
  const isPrimary = variant === 'primary';
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: isPrimary ? (hov ? '#a82020' : accent) : 'transparent',
        color: isPrimary ? '#fff' : accent,
        border: isPrimary ? 'none' : `2px solid ${accent}`,
        padding: isPrimary ? '14px 28px' : '12px 26px',
        borderRadius: 6, fontSize: 14, fontWeight: 600,
        cursor: 'pointer', letterSpacing: '0.02em',
        transition: 'all 0.2s', fontFamily: 'inherit',
      }}
    >{children}</button>
  );
}

function StatBadge({ value, label, accent }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 48, fontWeight: 800, color: accent, lineHeight: 1, letterSpacing: '-0.03em' }}>{value}</div>
      <div style={{ fontSize: 13, color: '#666', marginTop: 6, maxWidth: 140, margin: '6px auto 0' }}>{label}</div>
    </div>
  );
}

function ProblemSolution({ problem, solution }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid #e8e8e8', borderRadius: 10, overflow: 'hidden', marginBottom: 16 }}>
      <div style={{ padding: '28px 32px', background: '#fafafa', borderRight: '1px solid #e8e8e8' }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#dc2626', marginBottom: 10 }}>Problem</div>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7, margin: 0 }}>{problem}</p>
      </div>
      <div style={{ padding: '28px 32px', background: '#fff' }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#16a34a', marginBottom: 10 }}>Solution</div>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7, margin: 0 }}>{solution}</p>
      </div>
    </div>
  );
}

function CaseStudyHero({ title, company, companyDesc, stat, statLabel, accent }) {
  return (
    <div style={{ background: '#111', color: '#fff', padding: '120px 32px 80px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 20 }}>Case Study</div>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, margin: '0 0 20px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{title}</h1>
        <p style={{ fontSize: 18, color: '#aaa', maxWidth: 700, lineHeight: 1.7, margin: '0 0 48px' }}>{companyDesc}</p>
        <div style={{ display: 'inline-block', background: accent, borderRadius: 10, padding: '24px 40px', textAlign: 'center' }}>
          <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>{stat}</div>
          <div style={{ fontSize: 14, marginTop: 6, opacity: 0.9 }}>{statLabel}</div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Nav, Footer, Btn, StatBadge, ProblemSolution, CaseStudyHero });
