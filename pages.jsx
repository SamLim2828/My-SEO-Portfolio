
// All page components for Sam Lim Portfolio
const { useState, useEffect } = React;

// ─── HOME PAGE ──────────────────────────────────────────────────────────────
function HomePage({ navigate, accent, heroLayout }) {
  const clients = ['Dialpad','PandaDoc','Brightpearl','Databricks','Automation Anywhere','MyDeal','RingCentral','Global App Testing'];
  const industries = ['Medical','Tech','Legal','Construction','Retail','Finance'];
  const bizTypes = ['SaaS','B2B','Ecommerce','Lead Generation','B2C','Brick & Mortar','D2C'];

  return (
    <div>
      {/* HERO */}
      <section style={{ paddingTop: 68, minHeight: '92vh', display: 'flex', alignItems: 'center', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 32px', width: '100%' }}>
          {heroLayout === 'split' ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 80, alignItems: 'center' }}>
              <div>
                <HeroContent navigate={navigate} accent={accent} />
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: 16, overflow: 'hidden', background: '#f0ebe4' }}>
                  <img src="uploads/photo-1776652643181.JPG" alt="Sam Lim" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <div style={{ position: 'absolute', bottom: -20, left: -20, background: accent, color: '#fff', borderRadius: 10, padding: '16px 22px' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em' }}>6+</div>
                  <div style={{ fontSize: 12, opacity: 0.9 }}>Years Experience</div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
              <div style={{ width: 110, height: 110, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 28px', border: `3px solid ${accent}`, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <img src="uploads/photo-1776652643181.JPG" alt="Sam Lim" style={{ width: '150%', height: '150%', objectFit: 'scale-down', objectPosition: '35% 12%', marginLeft: '-25%', marginTop: '-8%' }} />
              </div>
              <HeroContent navigate={navigate} accent={accent} centered />
            </div>
          )}
        </div>
      </section>

      {/* HOW I DELIVER RESULTS */}
      <section style={{ background: '#f8f8f7', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 14 }}>Approach</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 56px', maxWidth: 560 }}>Strategic SEO That Drives Sales</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 }}>
            {[
              { num: '01', title: 'Revenue-First Strategy', body: 'Your industry, audience, and revenue goals shape every recommendation. No vanity metrics — only strategies that move the needle.' },
              { num: '02', title: 'Conversion Psychology + Search', body: 'Rankings mean little without revenue. I optimize for both search engines and human psychology to maximize ROI from every visitor.' },
              { num: '03', title: 'ROI-Focused Analytics', body: 'Clear and honest reporting that shows exactly how SEO impacts your bottom line, with no jargon and no fluff.' },
            ].map(p => (
              <div key={p.num} style={{ background: '#fff', padding: '40px 36px', borderRadius: 2 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: accent, marginBottom: 16, letterSpacing: '0.04em' }}>{p.num}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 14px', letterSpacing: '-0.01em' }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section style={{ padding: '96px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 14 }}>Results</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>Real Results. Real Stories.</h2>
            </div>
            <button onClick={() => navigate('case-studies')} style={{ background: 'none', border: `2px solid #111`, color: '#111', padding: '12px 24px', borderRadius: 6, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#111'; }}
            >View All Case Studies</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {[
              { id: 'dialpad', name: 'Dialpad', type: 'SaaS / Tech', stat: '773%', label: 'Organic traffic growth in 20 months', desc: 'Grew monthly organic visitors from 98,736 to 763,430 — saving $776K in paid traffic costs.', color: '#1a1a2e' },
              { id: 'mydeal', name: 'MyDeal', type: 'eCommerce', stat: '87%', label: 'Traffic surge in just 13 days', desc: 'Seasonal SEO sprint during Boxing Day delivered 87% more organic traffic overnight.', color: '#0a2e1a' },
              { id: 'cleanco', name: 'CleanCo', type: 'Lead Generation', stat: '3,913%', label: 'Traffic increase in 8 months', desc: 'Took a brand-new site from 23 to 923 monthly organic visitors through content and structure.', color: '#1a1228' },
            ].map(cs => (
              <div key={cs.id} onClick={() => navigate(cs.id)} style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #e8e8e8', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ background: cs.color, padding: '40px 32px', color: '#fff' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>{cs.type}</div>
                  <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.04em', color: accent, lineHeight: 1 }}>{cs.stat}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 6 }}>{cs.label}</div>
                </div>
                <div style={{ padding: '24px 32px', background: '#fff' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>{cs.name}</h3>
                  <p style={{ fontSize: 14, color: '#666', lineHeight: 1.65, margin: '0 0 16px' }}>{cs.desc}</p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: accent }}>View Case Study →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ background: '#f8f8f7', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#999', marginBottom: 40, textAlign: 'center' }}>Websites I've Worked With</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {clients.map(c => (
              <div key={c} style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 6, padding: '10px 20px', fontSize: 14, fontWeight: 500, color: '#444' }}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES + BIZ TYPES */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 20 }}>Business Types</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {bizTypes.map(b => <span key={b} style={{ background: '#f8f8f7', border: '1px solid #e8e8e8', borderRadius: 4, padding: '6px 14px', fontSize: 13, color: '#444' }}>{b}</span>)}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 20 }}>Industries</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {industries.map(i => <span key={i} style={{ background: '#f8f8f7', border: '1px solid #e8e8e8', borderRadius: 4, padding: '6px 14px', fontSize: 13, color: '#444' }}>{i}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: '#111', color: '#fff', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 14 }}>Process</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 56px' }}>Easy Onboarding to Kickstart Your SEO Growth</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 2 }}>
            {[
              { step: 'Connect', desc: 'A brief chat to understand your needs and goals.', num: '01' },
              { step: 'Strategize', desc: 'Create a custom SEO plan that aligns with your business objectives.', num: '02' },
              { step: 'Execute', desc: 'Kick off the project, monitor progress, and adjust for ongoing success.', num: '03' },
              { step: 'Grow', desc: 'Watch your business scale and your revenue skyrocket.', num: '04' },
            ].map(s => (
              <div key={s.num} style={{ background: 'rgba(255,255,255,0.04)', padding: '36px 28px', borderRadius: 2 }}>
                <div style={{ fontSize: 42, fontWeight: 800, color: accent, letterSpacing: '-0.04em', marginBottom: 16, lineHeight: 1 }}>{s.num}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>{s.step}</h3>
                <p style={{ fontSize: 14, color: '#aaa', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '96px 32px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 20px' }}>Book a Free Strategy Call</h2>
          <p style={{ fontSize: 17, color: '#555', lineHeight: 1.7, margin: '0 0 36px' }}>I'll analyze your current SEO performance and share 3 actionable ways to increase your organic revenue.</p>
          <button onClick={() => navigate('contact')} style={{ background: accent, color: '#fff', border: 'none', padding: '16px 36px', borderRadius: 6, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#a82020'}
            onMouseLeave={e => e.currentTarget.style.background = accent}
          >Let's Talk →</button>
        </div>
      </section>
    </div>
  );
}

function HeroContent({ navigate, accent, centered }) {
  return (
    <div style={{ textAlign: centered ? 'center' : 'left' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fef2f2', border: `1px solid ${accent}20`, borderRadius: 20, padding: '6px 14px', marginBottom: 28 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
        <span style={{ fontSize: 12, fontWeight: 600, color: accent, letterSpacing: '0.04em' }}>Available for new projects</span>
      </div>
      <h1 style={{ fontSize: 'clamp(36px, 5vw, 68px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 24px', textWrap: 'pretty', textAlign: centered ? 'center' : 'left' }}>
        Getting organic traffic<br/>but not generating <span style={{ color: accent }}>revenue?</span>
      </h1>
      <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 560, textAlign: centered ? 'center' : 'left', marginLeft: centered ? 'auto' : 0, marginRight: centered ? 'auto' : 0 }}>
        I'm Sam — a revenue-focused SEO strategist with 6+ years of experience transforming search visibility into real business growth.
      </p>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: centered ? 'center' : 'flex-start' }}>
        <button onClick={() => navigate('contact')} style={{ background: accent, color: '#fff', border: 'none', padding: '15px 30px', borderRadius: 6, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.background = '#a82020'}
          onMouseLeave={e => e.currentTarget.style.background = accent}
        >Get Free Strategy Call</button>
        <button onClick={() => navigate('case-studies')} style={{ background: 'none', border: '2px solid #e8e8e8', color: '#111', padding: '13px 28px', borderRadius: 6, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#111'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; }}
        >View Case Studies</button>
      </div>
    </div>
  );
}

// ─── ABOUT PAGE ─────────────────────────────────────────────────────────────
function AboutPage({ navigate, accent }) {
  const jobs = [
    { title: 'SEO Manager', company: 'VisiClix', period: 'August 2025 – Present', bullets: ['Lead high-level SEO strategy and execution to drive organic growth and revenue.','Designed and deployed AI agents to automate and optimize core SEO workflows, increasing team efficiency and scalability.','Performed in-depth technical SEO audits using Screaming Frog and GSC to resolve crawl and indexation issues.'] },
    { title: 'SEO Specialist', company: 'Qball Digital Marketing Agency', period: 'May 2025 – Present', bullets: ['Develop tailored SEO proposals for prospective clients, aligning with industry benchmarks and competitive analyses.','Create and schedule Google Business Profile (GBP) posts to boost local visibility and engagement.','Execute backlink acquisition campaigns through outreach and content marketing to improve domain authority.'] },
    { title: 'SEO Executive', company: 'Woolworths (MyDeal)', period: 'November 2024 – February 2025', bullets: ['Conducted keyword research and competitor analysis to identify opportunities for organic traffic growth.','Performed comprehensive on-page optimizations, including metadata enhancements and header tag improvements.','Developed detailed content briefs to guide writers and ensure alignment with SEO best practices.'] },
    { title: 'SEO Strategist & SEO Manager', company: 'JRNY Digital', period: 'April 2023 – November 2024', bullets: ['Managed 18 client accounts across lead generation, eCommerce, and B2B segments.','Led a cross-functional team of writers, web designers, and developers to ensure cohesive SEO execution.','Analyzed and reported on key SEO metrics — including traffic, rankings, and conversion rates — using GA4 and Ahrefs.','Developed SEO proposals for potential clients (closed the agency\'s biggest SEO client).','Created content calendars and briefs for writers.','Conducted regular technical SEO audits and built the agency\'s entire link-building process.'] },
    { title: 'SEO Executive', company: 'Accelerate Agency (SaaS & B2B Clients)', period: 'September 2021 – May 2023', bullets: ['Performed in-depth keyword research, including discovering and expanding keyword opportunities.','Analyzed competitor strategies and implemented off-page optimization tactics such as link building and guest posting.','Identified potential link exchange partners.','Provided regular analytics reports and insights, demonstrating the impact of SEO efforts on client goals.','Collaborated closely with cross-functional teams, including design, content, and product.','Recommended changes to website architecture, content, linking, and other factors.','Trained new team members in SEO.'] },
    { title: 'SEO Specialist', company: 'Erfolk Agency', period: null, bullets: ['Enhanced the agency\'s current SEO processes and strategies.','Implemented technical changes, including site structure improvements and meta tag optimization.','Conducted keyword research and competitive analysis.','Identified opportunities to improve the customer experience on the website.'] },
  ];

  const certs = [
    { name: 'SEO Training Masterclass 2021: Beginner to Advanced', issuer: 'Udemy' },
    { name: 'Writing Tools: Copywriting / Blogging / Content Writing', issuer: 'Udemy' },
    { name: 'Google Analytics for Beginners', issuer: 'Google Analytics Academy' },
    { name: 'Introduction to Google Data Studio', issuer: 'Google Analytics Academy' },
    { name: 'Grammar and Punctuation', issuer: 'Coursera' },
    { name: 'Increase SEO Traffic with WordPress', issuer: 'Coursera' },
    { name: 'Viral Marketing and How to Craft Contagious Content', issuer: 'Coursera' },
    { name: 'Entrepreneurship and Personal Branding', issuer: 'University of the East' },
  ];

  return (
    <div style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{ background: '#f8f8f7', padding: '80px 32px 64px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 14 }}>About Me</div>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 24px', lineHeight: 1.1 }}>I'm Sam Lim,<br/>SEO Strategist.</h1>
            <p style={{ fontSize: 17, color: '#555', lineHeight: 1.8, maxWidth: 560, margin: '0 0 20px' }}>I'm a revenue-focused SEO strategist with 6+ years of experience turning organic search visibility into real business growth. While many focus solely on rankings, I specialize in transforming organic traffic into consistent revenue streams.</p>
            <p style={{ fontSize: 16, color: '#777', lineHeight: 1.8, maxWidth: 560, margin: 0 }}>In my free time, I play guitar or piano to calm my mind. I love basketball and enjoy badminton and volleyball. I run with my wife, do HIIT workouts, practice calisthenics, and train in Muay Thai.</p>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '3/4', background: '#e8e0d8' }}>
              <img src="uploads/photo-1776652643181.JPG" alt="Sam Lim" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Key Skills */}
      <section style={{ padding: '56px 32px', background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 20 }}>Key Skills</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['Technical SEO Audits','AI-Driven SEO Workflows','Keyword Research & Clustering','On-Page & Off-Page Optimization','GA4 & Search Console Analysis','Team Leadership & Strategy','Content Strategy','Link Building','Competitor Analysis','Local SEO'].map(s => (
              <span key={s} style={{ background: '#f8f8f7', border: '1px solid #e8e8e8', borderRadius: 6, padding: '8px 16px', fontSize: 14, fontWeight: 500, color: '#333' }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 14 }}>Experience</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 56px' }}>Work History</h2>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: '#f0f0f0' }} />
            {jobs.map((job, i) => (
              <div key={i} style={{ paddingLeft: 36, marginBottom: 56, position: 'relative' }}>
                <div style={{ position: 'absolute', left: -6, top: 6, width: 14, height: 14, borderRadius: '50%', background: accent, border: '3px solid #fff', boxShadow: `0 0 0 2px ${accent}` }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: accent, letterSpacing: '0.02em' }}>{job.company}</span>
                  {job.period && <span style={{ fontSize: 12, color: '#999', fontWeight: 400 }}>{job.period}</span>}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 16px', letterSpacing: '-0.01em' }}>{job.title}</h3>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 8 }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ background: '#f8f8f7', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 14 }}>Certifications</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 48px' }}>Certifications & Training</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {certs.map((c, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 8, padding: '20px 24px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: accent, marginTop: 7, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, margin: '0 0 4px', color: '#111' }}>{c.name}</div>
                  <div style={{ fontSize: 13, color: '#888' }}>{c.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 14 }}>Education</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 40px' }}>Academic Background</h2>
          <div style={{ background: '#f8f8f7', border: '1px solid #e8e8e8', borderRadius: 12, padding: '40px 48px' }}>
            <div style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>2013 – 2017 · University of the East</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 20px' }}>Bachelor of Science in Business Administration, Major in Business Management</h3>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, margin: '0 0 12px' }}>My degree in business and marketing provided a foundation in business strategy and management. I learned to analyze data, lead teams, and improve operations.</p>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, margin: '0 0 12px' }}>I studied branding, digital marketing, social media, and CRM to understand consumer behavior and implement targeted marketing campaigns.</p>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, margin: 0 }}>I also learned financial planning and accounting to manage budgets, pricing, and financial strategies.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: accent, padding: '80px 32px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>Want to turn organic traffic into real revenue?</h2>
        <p style={{ fontSize: 16, opacity: 0.9, margin: '0 0 32px' }}>I help businesses grow through strategic SEO focused on real results.</p>
        <button onClick={() => navigate('contact')} style={{ background: '#fff', color: accent, border: 'none', padding: '14px 32px', borderRadius: 6, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = 0.9}
          onMouseLeave={e => e.currentTarget.style.opacity = 1}
        >Contact Me →</button>
      </section>
    </div>
  );
}

// ─── CASE STUDIES INDEX ──────────────────────────────────────────────────────
function CaseStudiesPage({ navigate, accent }) {
  const cases = [
    { id: 'dialpad', name: 'Dialpad', type: 'SaaS / B2B Tech', stat: '773%', label: 'organic traffic growth', period: '20 months', highlight: '$776,360 saved in paid traffic', desc: 'Transformed Dialpad\'s organic presence from 98K to 763K monthly visitors through content strategy, backlink cleanup, and international SEO.' },
    { id: 'mydeal', name: 'MyDeal Australia', type: 'eCommerce Marketplace', stat: '87%', label: 'daily traffic increase', period: '13 days', highlight: '87% more Boxing Day revenue', desc: 'A tactical seasonal SEO sprint that supercharged traffic just before Boxing Day and maintained the gains two days after.' },
    { id: 'cleanco', name: 'CleanCo Commercial Cleaning', type: 'Local Lead Generation', stat: '3,913%', label: 'traffic growth', period: '8 months', highlight: '2,295% savings on paid traffic', desc: 'Built a local SEO presence from scratch — 23 to 923 monthly visitors — through content creation, site architecture, and service page optimization.' },
  ];

  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: '#f8f8f7', padding: '80px 32px 64px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 14 }}>Portfolio</div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 20px' }}>Case Studies</h1>
          <p style={{ fontSize: 18, color: '#555', maxWidth: 600, lineHeight: 1.7, margin: 0 }}>Real results from real projects. See how I've helped businesses achieve measurable growth through strategic SEO.</p>
        </div>
      </section>

      <section style={{ padding: '64px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
          {cases.map((cs, i) => (
            <div key={cs.id} onClick={() => navigate(cs.id)} style={{ border: '1px solid #e8e8e8', borderRadius: 12, overflow: 'hidden', display: 'grid', gridTemplateColumns: '280px 1fr', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{ background: '#111', padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 56, fontWeight: 800, color: accent, letterSpacing: '-0.04em', lineHeight: 1 }}>{cs.stat}</div>
                <div style={{ fontSize: 14, color: '#aaa', marginTop: 8 }}>{cs.label}</div>
                <div style={{ fontSize: 12, color: '#555', marginTop: 4 }}>in {cs.period}</div>
              </div>
              <div style={{ padding: '40px 48px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999', marginBottom: 10 }}>{cs.type}</div>
                <h2 style={{ fontSize: 26, fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.02em' }}>{cs.name}</h2>
                <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, margin: '0 0 20px' }}>{cs.desc}</p>
                <div style={{ display: 'inline-block', background: '#f8f8f7', border: '1px solid #e8e8e8', borderRadius: 6, padding: '8px 16px', fontSize: 13, fontWeight: 600, color: '#111', marginBottom: 20 }}>{cs.highlight}</div>
                <div><span style={{ fontSize: 14, fontWeight: 600, color: accent }}>Read case study →</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── DIALPAD CASE STUDY ─────────────────────────────────────────────────────
function DialpadPage({ navigate, accent }) {
  return (
    <div style={{ paddingTop: 68 }}>
      <CaseStudyHero accent={accent}
        title="Dialpad"
        companyDesc="An AI-powered communication platform for businesses, providing phone systems, video conferencing, cloud contact centers, and messaging — all in one unified platform."
        stat="773%"
        statLabel="Organic traffic growth in 20 months"
      />
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Traffic numbers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginBottom: 64 }}>
            {[
              { val: '98,736', label: 'Monthly visitors at start', sub: 'September 2021' },
              { val: '763,430', label: 'Monthly visitors at peak', sub: '20 months later' },
              { val: '$776K', label: 'Saved in paid traffic costs', sub: 'Organic value delivered' },
            ].map((s, i) => (
              <div key={i} style={{ background: i === 1 ? accent : '#f8f8f7', borderRadius: 8, padding: '36px 32px', textAlign: 'center', color: i === 1 ? '#fff' : '#111' }}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: 14, marginTop: 8, opacity: 0.8 }}>{s.label}</div>
                <div style={{ fontSize: 12, marginTop: 4, opacity: 0.5 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 12px' }}>How did I achieve a 773% increase in organic traffic?</h2>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7, margin: '0 0 40px' }}>After conducting a thorough website audit, I identified three critical issues hampering Dialpad's visibility and performance.</p>

          <ProblemSolution
            problem="Lack of high-quality content. Blogs and service pages had no clear structure, making them difficult for readers to engage with."
            solution="Enhanced content structure and authority. I restructured underperforming pages, conducted keyword research, created targeted content briefs, and incorporated expert insights from SMEs."
          />
          <ProblemSolution
            problem="Bad or outdated backlinks. Low-quality, unnatural, or irrelevant backlinks were damaging the website's authority and reputation."
            solution="Cleaned and strengthened the backlink profile. Removed bad links, established an outreach and guest posting process, built partnerships with relevant non-competitor sites, and monitored link authenticity continuously."
          />
          <ProblemSolution
            problem="No hreflang tags for local pages. As a global company with multiple location pages, there was no language/geo targeting in place — causing duplicate content issues."
            solution="Optimized local pages. Implemented hreflang tags, updated language settings to prevent duplicate content, and created unique local pages to improve both SEO and user experience."
          />

          {/* Savings callout */}
          <div style={{ background: '#111', borderRadius: 12, padding: '48px', marginTop: 48, textAlign: 'center', color: '#fff' }}>
            <div style={{ fontSize: 48, fontWeight: 800, color: accent, letterSpacing: '-0.04em' }}>$776,360</div>
            <div style={{ fontSize: 18, marginTop: 12, marginBottom: 16 }}>Saved in paid traffic costs</div>
            <p style={{ fontSize: 15, color: '#aaa', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>Would you pay $776K for traffic? Dialpad would have spent that much to reach 763,430 monthly visitors through paid ads. My organic strategy delivered the same results for free.</p>
          </div>

          <div style={{ marginTop: 56, textAlign: 'center' }}>
            <p style={{ fontSize: 16, color: '#555', marginBottom: 24 }}>Want this traffic growth for your website?</p>
            <button onClick={() => navigate('contact')} style={{ background: accent, color: '#fff', border: 'none', padding: '15px 32px', borderRadius: 6, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Get a FREE Website Audit</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── MYDEAL CASE STUDY ───────────────────────────────────────────────────────
function MyDealPage({ navigate, accent }) {
  return (
    <div style={{ paddingTop: 68 }}>
      <CaseStudyHero accent={accent}
        title="MyDeal Australia"
        companyDesc="A leading Australian online marketplace connecting shoppers with thousands of sellers across home & lifestyle, electronics, fashion, toys, pets, and sports equipment."
        stat="87%"
        statLabel="Daily organic traffic increase in just 13 days"
      />
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginBottom: 64 }}>
            {[
              { val: '117,347', label: 'Daily visitors at start', sub: 'Before Boxing Day sprint' },
              { val: '134,237', label: 'Daily visitors at peak', sub: '13 days later' },
              { val: '+90%', label: 'Traffic retained 2 days after', sub: 'Sustained organic gains' },
            ].map((s, i) => (
              <div key={i} style={{ background: i === 1 ? accent : '#f8f8f7', borderRadius: 8, padding: '36px 32px', textAlign: 'center', color: i === 1 ? '#fff' : '#111' }}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: 14, marginTop: 8, opacity: 0.8 }}>{s.label}</div>
                <div style={{ fontSize: 12, marginTop: 4, opacity: 0.5 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 12px' }}>How did I achieve an 87% increase in just 13 days?</h2>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7, margin: '0 0 40px' }}>I began preparing for the upcoming Boxing Day in December. After a thorough audit, I found three critical gaps.</p>

          <ProblemSolution
            problem="Not prepared for seasonal keywords. The website targeted branded keywords with strong brand visibility but was completely missing seasonal sale opportunities."
            solution="Updated content to align with seasonal trends. Updated product descriptions, titles, and content to align with seasonal and holiday relevance."
          />
          <ProblemSolution
            problem="Missed the search intent of targeted keywords. With millions of URLs, many pages had content that didn't match searcher intent — causing lower CTR and higher bounce rates."
            solution="Optimized content and refined keyword strategy. Conducted in-depth keyword research, optimized commercial intent targeting, and created new category pages to capture missed opportunities."
          />
          <ProblemSolution
            problem="Lack of product reviews and insufficient category descriptions. The site lacked product reviews and many categories had little to no descriptions — reducing trust and engagement."
            solution="Added product reviews and enhanced category descriptions. Analyzed competitor categories, added product reviews, and wrote rich category descriptions to meet customer information needs."
          />

          <div style={{ background: '#111', borderRadius: 12, padding: '48px', marginTop: 48, textAlign: 'center', color: '#fff' }}>
            <div style={{ fontSize: 48, fontWeight: 800, color: accent, letterSpacing: '-0.04em' }}>87%</div>
            <div style={{ fontSize: 18, marginTop: 12, marginBottom: 16 }}>More revenue during Boxing Day</div>
            <p style={{ fontSize: 15, color: '#aaa', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>Even after Boxing Day ended, the website still received 90% more organic traffic two days later — proving the changes had lasting impact.</p>
          </div>

          <div style={{ marginTop: 56, textAlign: 'center' }}>
            <p style={{ fontSize: 16, color: '#555', marginBottom: 24 }}>Want this traffic growth for your website?</p>
            <button onClick={() => navigate('contact')} style={{ background: accent, color: '#fff', border: 'none', padding: '15px 32px', borderRadius: 6, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Get a FREE Website Audit</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── CLEANCO CASE STUDY ─────────────────────────────────────────────────────
function CleanCoPage({ navigate, accent }) {
  return (
    <div style={{ paddingTop: 68 }}>
      <CaseStudyHero accent={accent}
        title="CleanCo Commercial Cleaning"
        companyDesc="A 100% Australian-owned Brisbane-based company specializing in commercial cleaning services for various industries, with nearly a decade of on-the-ground experience."
        stat="3,913%"
        statLabel="Organic traffic growth in 8 months"
      />
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginBottom: 64 }}>
            {[
              { val: '23', label: 'Monthly visitors at start', sub: 'December 2023' },
              { val: '923', label: 'Monthly visitors at peak', sub: '8 months later' },
              { val: '2,295%', label: 'Saved on paid traffic costs', sub: 'Reinvested to scale startup' },
            ].map((s, i) => (
              <div key={i} style={{ background: i === 1 ? accent : '#f8f8f7', borderRadius: 8, padding: '36px 32px', textAlign: 'center', color: i === 1 ? '#fff' : '#111' }}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: 14, marginTop: 8, opacity: 0.8 }}>{s.label}</div>
                <div style={{ fontSize: 12, marginTop: 4, opacity: 0.5 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 12px' }}>How did I achieve a 3,913% increase within 8 months?</h2>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7, margin: '0 0 40px' }}>Starting with just 23 monthly visitors, I audited the site and found three foundational problems to fix first.</p>

          <ProblemSolution
            problem="No quality content. The website had no blogs or service pages to cover the top, middle, and bottom of the funnel."
            solution="Added well-researched blogs and service pages. Conducted keyword research and competitive analysis, identified customer-focused keywords, and wrote fresh, relevant content."
          />
          <ProblemSolution
            problem="Poor site architecture. Difficult navigation, deeply buried important pages, and weak internal linking hindered both user experience and search engine crawlability."
            solution="Optimized site structure. Developed a clear and logical site structure with strategically placed menus and internal links to improve the customer journey."
          />
          <ProblemSolution
            problem="Weak service pages with insufficient content and no conversion-focused copy. As a lead generation site, it lacked content to effectively drive lead conversions."
            solution="Optimized existing service pages and added new ones. Conducted an SEO audit, optimized keywords and meta tags, improved content quality, enhanced UX with clear navigation and compelling CTAs."
          />

          <div style={{ background: '#111', borderRadius: 12, padding: '48px', marginTop: 48, textAlign: 'center', color: '#fff' }}>
            <div style={{ fontSize: 48, fontWeight: 800, color: accent, letterSpacing: '-0.04em' }}>2,295%</div>
            <div style={{ fontSize: 18, marginTop: 12, marginBottom: 16 }}>Increase in savings on paid traffic costs</div>
            <p style={{ fontSize: 15, color: '#aaa', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>Due to organic traffic growth, CleanCo saved a significant amount in advertising spend, which they reinvested to scale their startup further.</p>
          </div>

          <div style={{ marginTop: 56, textAlign: 'center' }}>
            <p style={{ fontSize: 16, color: '#555', marginBottom: 24 }}>Want this traffic growth for your website?</p>
            <button onClick={() => navigate('contact')} style={{ background: accent, color: '#fff', border: 'none', padding: '15px 32px', borderRadius: 6, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Get a FREE Website Audit</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── CONTACT PAGE ────────────────────────────────────────────────────────────
function ContactPage({ accent }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', budget: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputStyle = (field) => ({
    width: '100%', padding: '12px 16px', fontSize: 15, fontFamily: 'inherit',
    border: `1px solid ${errors[field] ? accent : '#e8e8e8'}`, borderRadius: 6,
    outline: 'none', boxSizing: 'border-box', background: '#fff', color: '#111',
    transition: 'border-color 0.2s',
  });

  return (
    <div style={{ paddingTop: 68 }}>
      <section style={{ background: '#f8f8f7', padding: '80px 32px 64px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 14 }}>Get In Touch</div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 20px' }}>Book a Free Strategy Call</h1>
          <p style={{ fontSize: 18, color: '#555', maxWidth: 560, lineHeight: 1.7, margin: 0 }}>I'll analyze your current SEO performance and share 3 actionable ways to increase your organic revenue. No fluff, no commitments.</p>
        </div>
      </section>

      <section style={{ padding: '64px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 400px', gap: 80, alignItems: 'start' }}>
          {/* Form */}
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '80px 40px' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 28 }}>✓</div>
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 12px', color: '#111' }}>Message sent!</h2>
              <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7 }}>Thanks for reaching out. I'll get back to you within 24 hours with your personalized SEO insights.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#333' }}>Name *</label>
                  <input style={inputStyle('name')} value={form.name} onChange={e => { setForm({...form, name: e.target.value}); setErrors({...errors, name: null}); }} placeholder="Your full name"
                    onFocus={e => e.target.style.borderColor = accent}
                    onBlur={e => e.target.style.borderColor = errors.name ? accent : '#e8e8e8'}
                  />
                  {errors.name && <div style={{ fontSize: 12, color: accent, marginTop: 4 }}>{errors.name}</div>}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#333' }}>Email *</label>
                  <input style={inputStyle('email')} type="email" value={form.email} onChange={e => { setForm({...form, email: e.target.value}); setErrors({...errors, email: null}); }} placeholder="you@company.com"
                    onFocus={e => e.target.style.borderColor = accent}
                    onBlur={e => e.target.style.borderColor = errors.email ? accent : '#e8e8e8'}
                  />
                  {errors.email && <div style={{ fontSize: 12, color: accent, marginTop: 4 }}>{errors.email}</div>}
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#333' }}>Company / Website</label>
                <input style={inputStyle('company')} value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="yourwebsite.com"
                  onFocus={e => e.target.style.borderColor = accent}
                  onBlur={e => e.target.style.borderColor = '#e8e8e8'}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#333' }}>Monthly SEO Budget</label>
                <select style={{...inputStyle('budget'), appearance: 'none', cursor: 'pointer'}} value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}
                  onFocus={e => e.target.style.borderColor = accent}
                  onBlur={e => e.target.style.borderColor = '#e8e8e8'}
                >
                  <option value="">Select a range...</option>
                  <option value="<500">Under $500/mo</option>
                  <option value="500-1500">$500 – $1,500/mo</option>
                  <option value="1500-5000">$1,500 – $5,000/mo</option>
                  <option value="5000+">$5,000+/mo</option>
                </select>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#333' }}>How can I help? *</label>
                <textarea style={{...inputStyle('message'), minHeight: 140, resize: 'vertical'}} value={form.message} onChange={e => { setForm({...form, message: e.target.value}); setErrors({...errors, message: null}); }} placeholder="Tell me about your website and what you'd like to achieve..."
                  onFocus={e => e.target.style.borderColor = accent}
                  onBlur={e => e.target.style.borderColor = errors.message ? accent : '#e8e8e8'}
                />
                {errors.message && <div style={{ fontSize: 12, color: accent, marginTop: 4 }}>{errors.message}</div>}
              </div>
              <button type="submit" style={{ width: '100%', background: accent, color: '#fff', border: 'none', padding: '15px', borderRadius: 6, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#a82020'}
                onMouseLeave={e => e.currentTarget.style.background = accent}
              >Send Message →</button>
            </form>
          )}

          {/* Contact info */}
          <div>
            <div style={{ background: '#f8f8f7', borderRadius: 12, padding: '36px' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 28px' }}>Contact Details</h3>
              {[
                { label: 'Phone', val: '+63 9451262651', href: 'tel:+639451262651' },
                { label: 'Email', val: 'limsamuele@gmail.com', href: 'mailto:limsamuele@gmail.com' },
                { label: 'LinkedIn', val: 'samuel-e-lim', href: 'https://www.linkedin.com/in/samuel-e-lim/' },
                { label: 'Location', val: 'Fairview, Quezon City, Metro Manila, Philippines' },
              ].map(c => (
                <div key={c.label} style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: 4 }}>{c.label}</div>
                  {c.href ? <a href={c.href} target="_blank" style={{ fontSize: 15, color: accent, textDecoration: 'none', fontWeight: 500 }}>{c.val}</a>
                    : <div style={{ fontSize: 15, color: '#333' }}>{c.val}</div>}
                </div>
              ))}
            </div>

            <div style={{ background: '#111', borderRadius: 12, padding: '36px', marginTop: 16, color: '#fff' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 12px' }}>What happens next?</h3>
              {['I review your website and current SEO performance','We schedule a 30-min strategy call at your convenience','You receive 3 specific, actionable recommendations — free'].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: accent, color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i+1}</div>
                  <span style={{ fontSize: 14, color: '#bbb', lineHeight: 1.6 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage, AboutPage, CaseStudiesPage, DialpadPage, MyDealPage, CleanCoPage, ContactPage, HeroContent });
