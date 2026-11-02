import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function DialogProjects({
  title,
  category,
  status,
  icon,
  gradient,
  description,
  architecture,
  qa,
  stack,
  src,
  github
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

  const changeSize = () => {
    setSize((prev) => (prev === 'md' ? 'lg' : 'md'));
  };

  const isLive = status && status.toLowerCase().includes('live');

  return (
    <div>
      {/* Project Card */}
      <div
        className="projectCard"
        onClick={handleClickOpen}
        style={{
          background: '#ffffff',
          borderRadius: 14,
          overflow: 'hidden',
          boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
          border: '1px solid #e2e8f0',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          margin: '16px 12px',
          minWidth: '320px',
          maxWidth: '380px'
        }}
      >
        {/* Banner Area */}
        <div
          style={{
            background: gradient || 'linear-gradient(135deg, #1e293b, #0f172a)',
            padding: '24px 20px',
            color: '#fff',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12
            }}
          >
            <span
              style={{
                fontSize: '2rem',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}
            >
              {icon}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: 20,
                backgroundColor: isLive ? 'rgba(34, 197, 94, 0.2)' : 'rgba(234, 179, 8, 0.2)',
                color: isLive ? '#4ade80' : '#fef08a',
                border: isLive ? '1px solid rgba(74, 222, 128, 0.4)' : '1px solid rgba(254, 240, 138, 0.4)',
                letterSpacing: '0.04em'
              }}
            >
              {status}
            </span>
          </div>

          <h3
            style={{
              margin: '0 0 6px 0',
              fontSize: '1.25rem',
              color: '#ffffff',
              fontFamily: 'EBGaramondBold, sans-serif',
              fontWeight: 700
            }}
          >
            {title}
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '0.02em'
            }}
          >
            {category}
          </p>
        </div>

        {/* Card Body */}
        <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <p
            style={{
              fontSize: '0.9rem',
              color: '#475569',
              lineHeight: 1.5,
              margin: '0 0 16px 0',
              fontFamily: 'EBGaramondRegular, sans-serif'
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
              stack.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.72rem',
                    backgroundColor: '#f1f5f9',
                    color: '#334155',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}
                >
                  {tech}
                </span>
              ))}
            {stack && stack.length > 3 && (
              <span
                style={{
                  fontSize: '0.72rem',
                  backgroundColor: '#f8fafc',
                  color: '#64748b',
                  padding: '3px 6px',
                  borderRadius: '6px',
                  fontWeight: 600
                }}
              >
                +{stack.length - 3} more
              </span>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 14,
              paddingTop: 12,
              borderTop: '1px solid #f1f5f9'
            }}
          >
            <span
              style={{
                fontSize: '0.8rem',
                color: '#006AFF',
                fontWeight: 'bold'
              }}
            >
              Inspect Specs &amp; Architecture ↗
            </span>
          </div>
        </div>
      </div>

      {/* Modal Dialog (macOS window style) */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={size}
        PaperProps={{
          style: {
            borderRadius: 14,
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.3)'
          }
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {/* macOS title bar */}
          <div
            style={{
              padding: '10px 16px',
              backgroundColor: '#f1f5f9',
              borderBottom: '1px solid #e2e8f0',
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
                fontSize: '0.78rem',
                color: '#64748b',
                fontFamily: 'monospace',
                fontWeight: 600
              }}
            >
              {title}
            </span>
            <div style={{ width: 40 }} />
          </div>

          {/* Modal Header Banner */}
          <div
            style={{
              background: gradient || 'linear-gradient(135deg, #1e293b, #0f172a)',
              padding: '28px 24px',
              color: '#fff'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '2.5rem' }}>{icon}</span>
              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: 20,
                    backgroundColor: isLive ? 'rgba(34, 197, 94, 0.25)' : 'rgba(234, 179, 8, 0.25)',
                    color: isLive ? '#4ade80' : '#fef08a',
                    border: isLive ? '1px solid rgba(74, 222, 128, 0.4)' : '1px solid rgba(254, 240, 138, 0.4)',
                    display: 'inline-block',
                    marginBottom: 6
                  }}
                >
                  {status}
                </span>
                <h2 style={{ margin: '0 0 4px 0', fontSize: '1.5rem', color: '#fff' }}>{title}</h2>
                <p style={{ margin: 0, opacity: 0.8, fontSize: '0.85rem' }}>{category}</p>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div style={{ padding: '24px 28px', backgroundColor: '#ffffff' }}>
            {/* Description */}
            <div style={{ marginBottom: 20 }}>
              <h4
                style={{
                  margin: '0 0 8px 0',
                  fontSize: '0.82rem',
                  textTransform: 'uppercase',
                  color: '#64748b',
                  letterSpacing: '0.06em'
                }}
              >
                Overview
              </h4>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#1e293b',
                  margin: 0,
                  fontFamily: 'EBGaramondRegular, sans-serif'
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
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 10,
                  padding: '14px 18px'
                }}
              >
                <h4
                  style={{
                    margin: '0 0 6px 0',
                    fontSize: '0.82rem',
                    textTransform: 'uppercase',
                    color: '#0284c7',
                    letterSpacing: '0.06em'
                  }}
                >
                  🏛️ Architecture &amp; System Design
                </h4>
                <p style={{ margin: 0, fontSize: '0.92rem', color: '#334155', lineHeight: 1.5 }}>
                  {architecture}
                </p>
              </div>
            )}

            {/* QA & Verification */}
            {qa && (
              <div
                style={{
                  marginBottom: 20,
                  backgroundColor: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: 10,
                  padding: '14px 18px'
                }}
              >
                <h4
                  style={{
                    margin: '0 0 6px 0',
                    fontSize: '0.82rem',
                    textTransform: 'uppercase',
                    color: '#16a34a',
                    letterSpacing: '0.06em'
                  }}
                >
                  🧪 Quality Assurance &amp; Testing Discipline
                </h4>
                <p style={{ margin: 0, fontSize: '0.92rem', color: '#166534', lineHeight: 1.5 }}>
                  {qa}
                </p>
              </div>
            )}

            {/* Technology Stack Tags */}
            <div style={{ marginBottom: 24 }}>
              <h4
                style={{
                  margin: '0 0 8px 0',
                  fontSize: '0.82rem',
                  textTransform: 'uppercase',
                  color: '#64748b',
                  letterSpacing: '0.06em'
                }}
              >
                Tech Stack
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {stack &&
                  stack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.8rem',
                        backgroundColor: '#f1f5f9',
                        color: '#0f172a',
                        padding: '5px 12px',
                        borderRadius: 8,
                        fontWeight: 600,
                        border: '1px solid #e2e8f0'
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
                paddingTop: 16,
                borderTop: '1px solid #e2e8f0'
              }}
            >
              {src && src.startsWith('http') ? (
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    backgroundColor: '#006AFF',
                    color: '#ffffff',
                    padding: '10px 22px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.92rem'
                  }}
                >
                  <span>Download on App Store</span>
                  <OpenInNewIcon fontSize="small" />
                </a>
              ) : (
                <a
                  href="#socials"
                  onClick={handleClose}
                  style={{
                    textDecoration: 'none',
                    backgroundColor: '#006AFF',
                    color: '#ffffff',
                    padding: '10px 22px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.92rem'
                  }}
                >
                  <span>Inquire Architecture Details</span>
                </a>
              )}

              <button
                onClick={handleClose}
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  backgroundColor: '#f1f5f9',
                  border: '1px solid #cbd5e1',
                  color: '#475569',
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
    </div>
  );
}

export default DialogProjects;
