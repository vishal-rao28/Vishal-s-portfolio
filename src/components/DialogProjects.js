import * as React from 'react';
import Dialog from '@mui/material/Dialog';

function DialogProjects({
  title,
  category,
  status,
  icon,
  appIcon,
  screenshots,
  rating,
  version,
  gradient,
  accentColor,
  description,
  architecture,
  qa,
  stack,
  src,
  github,
  onTestOnIPhone
}) {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState('md');
  const [activeScreenIndex, setActiveScreenIndex] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
    setSize('md');
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTestOnIPhone = () => {
    if (onTestOnIPhone) {
      onTestOnIPhone();
    }
    const el = document.getElementById('iphone-studio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const changeSize = () => {
    setSize((prev) => (prev === 'md' ? 'lg' : 'md'));
  };

  const isLive = status && status.toLowerCase().includes('live');

  return (
    <>
      {/* Project Card */}
      <div
        className="glass-card project-glass-card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          const isLight = document.documentElement.getAttribute('data-theme') === 'light';
          const clr = accentColor || (isLight ? '#0071E3' : '#0A84FF');
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.borderColor = clr;
          e.currentTarget.style.boxShadow = isLight
            ? `0 0 0 1px ${clr}80, inset 0 2px 2.5px 0 #ffffff, 0 32px 70px -10px ${clr}40, 0 6px 18px rgba(15, 23, 42, 0.08)`
            : `0 0 0 1px ${clr}80, inset 0 2px 3px 0 rgba(255, 255, 255, 0.45), 0 28px 65px -10px rgba(0, 0, 0, 0.75), 0 0 40px ${clr}35`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = '';
          e.currentTarget.style.boxShadow = '';
        }}
      >
        {/* Banner Area */}
        <div
          className="project-banner-gloss"
          style={{
            background: gradient || 'linear-gradient(135deg, #0f172a, #1e293b)',
            padding: '22px 18px',
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 14,
              gap: '8px'
            }}
          >
            {appIcon ? (
              <img
                src={appIcon}
                alt={title}
                className="project-card-app-icon-img"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '11px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
                  objectFit: 'cover',
                  flexShrink: 0
                }}
              />
            ) : (
              <span
                style={{
                  fontSize: '2rem',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
                  flexShrink: 0
                }}
              >
                {icon}
              </span>
            )}

            <div
              style={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center',
                flexShrink: 0,
                flexWrap: 'nowrap',
                whiteSpace: 'nowrap'
              }}
            >
              {rating && (
                <span
                  style={{
                    fontSize: '0.67rem',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: 20,
                    backgroundColor: 'rgba(251, 191, 36, 0.2)',
                    color: '#fbbf24',
                    border: '1px solid rgba(251, 191, 36, 0.4)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    lineHeight: '1.2'
                  }}
                >
                  {rating}
                </span>
              )}
              <span
                style={{
                  fontSize: '0.67rem',
                  fontWeight: 600,
                  padding: '3px 9px',
                  borderRadius: 20,
                  backgroundColor: isLive ? 'rgba(48, 209, 88, 0.2)' : 'rgba(255, 159, 10, 0.2)',
                  color: isLive ? '#30d158' : '#ff9f0a',
                  border: isLive ? '1px solid rgba(48, 209, 88, 0.4)' : '1px solid rgba(255, 159, 10, 0.4)',
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  lineHeight: '1.2'
                }}
              >
                {status}
              </span>
            </div>
          </div>

          <h3
            className="project-banner-title"
            style={{
              margin: '0 0 4px 0',
              fontSize: '1.4rem',
              color: '#ffffff',
              fontWeight: 700
            }}
          >
            {title}
          </h3>
          <p
            className="project-banner-category"
            style={{
              margin: 0,
              fontSize: '0.8rem',
              color: 'rgba(255, 255, 255, 0.75)',
              letterSpacing: '0.02em'
            }}
          >
            {category}
          </p>
        </div>

        {/* Card Body */}
        <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <p
            style={{
              fontSize: '0.92rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              margin: '0 0 18px 0'
            }}
          >
            {description}
          </p>

          {/* Tech tags preview */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginTop: 'auto',
              paddingTop: '10px'
            }}
          >
            {stack &&
              stack.map((tech, idx) => (
                <span key={idx} className="tech-pill">
                  {tech}
                </span>
              ))}
          </div>

          {/* Action Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 18,
              paddingTop: 16,
              borderTop: '1px solid var(--border-subtle)'
            }}
          >
            <button
              onClick={handleClickOpen}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--apple-blue)',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 0'
              }}
            >
              <span>Architecture &amp; QA Specs</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {src && src.startsWith('http') && (
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  border: '1px solid var(--border-subtle)',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--apple-blue)';
                  e.currentTarget.style.borderColor = 'var(--apple-blue)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                <span>App Store</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            )}
          </div>

          {/* Test in iPhone Studio CTA */}
          <button
            onClick={handleTestOnIPhone}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              padding: '10px 14px',
              borderRadius: '12px',
              backgroundColor: 'rgba(10, 132, 255, 0.12)',
              border: '1px solid rgba(10, 132, 255, 0.3)',
              color: 'var(--apple-blue)',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer',
              marginTop: 14,
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(10, 132, 255, 0.25)';
              e.currentTarget.style.borderColor = '#0A84FF';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(10, 132, 255, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(10, 132, 255, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(10, 132, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span> Test-Drive on iPhone 18 Pro Max</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Modal Dialog (Apple macOS Dark style) */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={size}
        PaperProps={{
          style: {
            borderRadius: 18,
            overflow: 'hidden',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
            color: 'var(--text-primary)'
          }
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {/* macOS title bar */}
          <div
            style={{
              padding: '12px 18px',
              backgroundColor: 'var(--bg-card)',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                onClick={handleClose}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#FE5E58',
                  cursor: 'pointer',
                  display: 'inline-block'
                }}
                title="Close"
              />
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#FEBD2C',
                  display: 'inline-block'
                }}
                title="Minimize"
              />
              <span
                onClick={changeSize}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#27C841',
                  cursor: 'pointer',
                  display: 'inline-block'
                }}
                title="Toggle Size"
              />
            </div>
            <span
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                fontFamily: 'monospace',
                fontWeight: 600
              }}
            >
              {title}.swift · specs
            </span>
            <div style={{ width: 40 }} />
          </div>

          {/* Modal Header Banner */}
          <div
            style={{
              background: gradient || 'linear-gradient(135deg, #0f172a, #1e293b)',
              padding: '28px 24px',
              color: '#ffffff'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              {appIcon ? (
                <img
                  src={appIcon}
                  alt={title}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                <span style={{ fontSize: '2.6rem' }}>{icon}</span>
              )}
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: 6, flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: 20,
                      backgroundColor: isLive ? 'rgba(48, 209, 88, 0.25)' : 'rgba(255, 159, 10, 0.25)',
                      color: isLive ? '#30d158' : '#ff9f0a',
                      border: isLive ? '1px solid rgba(48, 209, 88, 0.4)' : '1px solid rgba(255, 159, 10, 0.4)',
                      display: 'inline-block',
                      whiteSpace: 'nowrap',
                      flexShrink: 0
                    }}
                  >
                    {status}
                  </span>
                  {rating && (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: 20,
                        backgroundColor: 'rgba(251, 191, 36, 0.2)',
                        color: '#fbbf24',
                        border: '1px solid rgba(251, 191, 36, 0.4)',
                        whiteSpace: 'nowrap',
                        flexShrink: 0
                      }}
                    >
                      {rating}
                    </span>
                  )}
                  {version && (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: 20,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: '#e2e8f0',
                        border: '1px solid rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      {version}
                    </span>
                  )}
                </div>
                <h2 style={{ margin: '0 0 4px 0', fontSize: '1.6rem', color: '#ffffff' }}>{title}</h2>
                <p style={{ margin: 0, opacity: 0.8, fontSize: '0.86rem' }}>{category}</p>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div style={{ padding: '26px 28px', backgroundColor: 'var(--bg-secondary)' }}>
            {/* Real App Store Screenshots Gallery */}
            {screenshots && screenshots.length > 0 && (
              <div style={{ marginBottom: 24 }}>
                <h4
                  style={{
                    margin: '0 0 10px 0',
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    color: 'var(--apple-blue)',
                    letterSpacing: '0.08em',
                    fontWeight: 700
                  }}
                >
                  Official App Store Screenshots
                </h4>
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    overflowX: 'auto',
                    paddingBottom: '10px'
                  }}
                >
                  {screenshots.map((imgSrc, sIdx) => (
                    <div
                      key={sIdx}
                      onClick={() => setActiveScreenIndex(sIdx)}
                      style={{
                        width: '120px',
                        height: '245px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: `2px solid ${activeScreenIndex === sIdx ? 'var(--apple-blue)' : 'var(--border-subtle)'}`,
                        boxShadow: activeScreenIndex === sIdx ? '0 0 16px var(--apple-blue-glow)' : 'none',
                        flexShrink: 0,
                        transition: 'all 0.25s ease',
                        background: 'var(--bg-card)'
                      }}
                    >
                      <img
                        src={imgSrc}
                        alt={`Screenshot ${sIdx + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overview */}
            <div style={{ marginBottom: 22 }}>
              <h4
                style={{
                  margin: '0 0 8px 0',
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  color: 'var(--apple-blue)',
                  letterSpacing: '0.08em',
                  fontWeight: 700
                }}
              >
                Executive Summary
              </h4>
              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: '1.65',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}
              >
                {description}
              </p>
            </div>

            {/* Architecture Highlights */}
            {architecture && (
              <div
                style={{
                  marginBottom: 20,
                  backgroundColor: 'rgba(10, 132, 255, 0.08)',
                  border: '1px solid rgba(10, 132, 255, 0.22)',
                  borderRadius: 12,
                  padding: '16px 20px'
                }}
              >
                <h4
                  style={{
                    margin: '0 0 6px 0',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    color: 'var(--apple-blue)',
                    letterSpacing: '0.06em',
                    fontWeight: 700
                  }}
                >
                  🏛️ Architecture &amp; System Design
                </h4>
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {architecture}
                </p>
              </div>
            )}

            {/* QA & Verification */}
            {qa && (
              <div
                style={{
                  marginBottom: 22,
                  backgroundColor: 'rgba(48, 209, 88, 0.08)',
                  border: '1px solid rgba(48, 209, 88, 0.22)',
                  borderRadius: 12,
                  padding: '16px 20px'
                }}
              >
                <h4
                  style={{
                    margin: '0 0 6px 0',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    color: 'var(--apple-green, #248a3d)',
                    letterSpacing: '0.06em',
                    fontWeight: 700
                  }}
                >
                  🧪 Quality Assurance &amp; Testing Discipline
                </h4>
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {qa}
                </p>
              </div>
            )}

            {/* Technology Stack Tags */}
            <div style={{ marginBottom: 26 }}>
              <h4
                style={{
                  margin: '0 0 10px 0',
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  fontWeight: 700
                }}
              >
                Core Technologies
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {stack &&
                  stack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.82rem',
                        backgroundColor: 'var(--bg-card)',
                        color: 'var(--text-primary)',
                        padding: '5px 12px',
                        borderRadius: 8,
                        fontWeight: 600,
                        border: '1px solid var(--border-subtle)',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.03)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                paddingTop: 18,
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              {src && src.startsWith('http') ? (
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    backgroundColor: 'var(--apple-blue)',
                    color: '#ffffff',
                    padding: '10px 22px',
                    borderRadius: '10px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.92rem',
                    boxShadow: '0 4px 16px var(--apple-blue-glow)'
                  }}
                >
                  <span>Download on App Store</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              ) : (
                <a
                  href="#socials"
                  onClick={handleClose}
                  style={{
                    textDecoration: 'none',
                    backgroundColor: 'var(--apple-blue)',
                    color: '#ffffff',
                    padding: '10px 22px',
                    borderRadius: '10px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.92rem'
                  }}
                >
                  <span>Inquire Architecture Specs</span>
                </a>
              )}

              <button
                onClick={() => {
                  handleClose();
                  handleTestOnIPhone();
                }}
                style={{
                  padding: '10px 18px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(10, 132, 255, 0.12)',
                  border: '1px solid rgba(10, 132, 255, 0.3)',
                  color: 'var(--apple-blue)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span> Launch on iPhone 18 Pro Max</span>
              </button>

              <button
                onClick={handleClose}
                style={{
                  padding: '10px 18px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.92rem'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default DialogProjects;
