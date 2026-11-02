import * as React from 'react';
import Dialog from '@mui/material/Dialog';

function DialogProjects({
  title,
  category,
  status,
  icon,
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
        className="glass-card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.borderColor = accentColor ? `${accentColor}80` : 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.boxShadow = `0 16px 40px rgba(0, 0, 0, 0.4), 0 0 25px ${accentColor || '#0A84FF'}25`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Banner Area */}
        <div
          style={{
            background: gradient || 'linear-gradient(135deg, #0f172a, #1e293b)',
            padding: '24px 22px',
            color: '#ffffff',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 14
            }}
          >
            <span
              style={{
                fontSize: '2.2rem',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))'
              }}
            >
              {icon}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '4px 12px',
                borderRadius: 20,
                backgroundColor: isLive ? 'rgba(48, 209, 88, 0.2)' : 'rgba(255, 159, 10, 0.2)',
                color: isLive ? '#30d158' : '#ff9f0a',
                border: isLive ? '1px solid rgba(48, 209, 88, 0.4)' : '1px solid rgba(255, 159, 10, 0.4)',
                letterSpacing: '0.03em'
              }}
            >
              {status}
            </span>
          </div>

          <h3
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
              borderTop: '1px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            <button
              onClick={handleClickOpen}
              style={{
                background: 'none',
                border: 'none',
                color: '#64D2FF',
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
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A84FF';
                  e.currentTarget.style.borderColor = '#0A84FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
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
              color: '#64D2FF',
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
            <span> Test-Drive on iPhone 16 Pro</span>
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
            backgroundColor: '#0d131f',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8)',
            color: '#ffffff'
          }
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {/* macOS title bar */}
          <div
            style={{
              padding: '12px 18px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
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
              <span style={{ fontSize: '2.6rem' }}>{icon}</span>
              <div>
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
                    marginBottom: 6
                  }}
                >
                  {status}
                </span>
                <h2 style={{ margin: '0 0 4px 0', fontSize: '1.6rem', color: '#ffffff' }}>{title}</h2>
                <p style={{ margin: 0, opacity: 0.8, fontSize: '0.86rem' }}>{category}</p>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div style={{ padding: '26px 28px', backgroundColor: '#090d16' }}>
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
                  color: '#e2e8f0',
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
                  backgroundColor: 'rgba(10, 132, 255, 0.05)',
                  border: '1px solid rgba(10, 132, 255, 0.2)',
                  borderRadius: 12,
                  padding: '16px 20px'
                }}
              >
                <h4
                  style={{
                    margin: '0 0 6px 0',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    color: '#64D2FF',
                    letterSpacing: '0.06em',
                    fontWeight: 700
                  }}
                >
                  🏛️ Architecture &amp; System Design
                </h4>
                <p style={{ margin: 0, fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  {architecture}
                </p>
              </div>
            )}

            {/* QA & Verification */}
            {qa && (
              <div
                style={{
                  marginBottom: 22,
                  backgroundColor: 'rgba(48, 209, 88, 0.05)',
                  border: '1px solid rgba(48, 209, 88, 0.2)',
                  borderRadius: 12,
                  padding: '16px 20px'
                }}
              >
                <h4
                  style={{
                    margin: '0 0 6px 0',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    color: '#30D158',
                    letterSpacing: '0.06em',
                    fontWeight: 700
                  }}
                >
                  🧪 Quality Assurance &amp; Testing Discipline
                </h4>
                <p style={{ margin: 0, fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6 }}>
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
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#f8fafc',
                        padding: '5px 12px',
                        borderRadius: 8,
                        fontWeight: 600,
                        border: '1px solid rgba(255, 255, 255, 0.1)'
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
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {src && src.startsWith('http') ? (
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    backgroundColor: '#0A84FF',
                    color: '#ffffff',
                    padding: '10px 22px',
                    borderRadius: '10px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.92rem',
                    boxShadow: '0 4px 16px rgba(10, 132, 255, 0.4)'
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
                    backgroundColor: '#0A84FF',
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
                  backgroundColor: 'rgba(10, 132, 255, 0.18)',
                  border: '1px solid rgba(10, 132, 255, 0.4)',
                  color: '#64D2FF',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span> Launch on iPhone 16 Pro</span>
              </button>

              <button
                onClick={handleClose}
                style={{
                  padding: '10px 18px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
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
