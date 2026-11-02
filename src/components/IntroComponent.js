import React, { useState } from 'react';
import vishalPhoto from '../assets/img/vishal_optimized1.jpg';

function IntroComponent() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vishalrao5432@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.95fr)',
          gap: '48px',
          alignItems: 'center'
        }}
        className="hero-grid"
      >
        {/* Left Column: Headline & Action */}
        <div>
          {/* Status Badge */}
          <div style={{ marginBottom: '20px' }}>
            <span className="status-pill">
              <span className="status-beacon" />
              Available for iOS &amp; AI Engineering Roles
            </span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.12,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              color: '#ffffff'
            }}
          >
            Crafting High-Performance{' '}
            <span className="gradient-text-blue">iOS Apps</span> &amp; Intelligent{' '}
            <span className="gradient-text-purple">Apple Systems</span>.
          </h1>

          {/* Subtitle / Bio */}
          <p
            style={{
              fontSize: '1.12rem',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              marginBottom: '32px',
              maxWidth: '580px'
            }}
          >
            I'm <strong style={{ color: '#ffffff' }}>Vishal Rao M</strong> — an iOS Developer &amp; Technical Engineer specializing in native <strong style={{ color: '#64D2FF' }}>SwiftUI, UIKit, Core ML</strong> on-device AI, and <strong style={{ color: '#30D158' }}>full-discipline automated QA testing</strong>. Fast-tracked from intern to full-time developer in 2 months with 5+ production apps shipped live to the App Store.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              alignItems: 'center',
              marginBottom: '40px'
            }}
          >
            <a href="#projects" onClick={scrollTo('projects')}>
              <button className="btn-primary">
                <span>View App Store Projects</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
            </a>

            <a
              href="./Vishal_Rao_UDI.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-secondary">
                <span>Resume ↗</span>
              </button>
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-secondary"
              title="Copy email address"
              style={{
                borderColor: copied ? '#30D158' : 'var(--border-subtle)',
                color: copied ? '#30D158' : 'var(--text-primary)'
              }}
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Copied Email!</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Key Metrics Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
              gap: '16px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div>
              <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0A84FF', lineHeight: 1 }}>5+</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 4 }}>App Store Apps</div>
            </div>
            <div>
              <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#30D158', lineHeight: 1 }}>2 Mo</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 4 }}>Fast Promotion</div>
            </div>
            <div>
              <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#FF9F0A', lineHeight: 1 }}>4</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 4 }}>QA Disciplines</div>
            </div>
            <div>
              <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#BF5AF2', lineHeight: 1 }}>B.Tech</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 4 }}>AI &amp; Data Science</div>
            </div>
          </div>
        </div>

        {/* Right Column: Apple-Inspired Showcase Card */}
        <div style={{ position: 'relative' }}>
          {/* Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '15%',
              left: '10%',
              width: '80%',
              height: '80%',
              background: 'radial-gradient(circle, rgba(10, 132, 255, 0.25) 0%, rgba(191, 90, 242, 0.15) 50%, transparent 70%)',
              filter: 'blur(40px)',
              zIndex: 0,
              pointerEvents: 'none'
            }}
          />

          <div
            className="glass-card"
            style={{
              position: 'relative',
              zIndex: 1,
              padding: '28px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }}
          >
            {/* Window header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                marginBottom: '20px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#FE5E58', display: 'inline-block' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#FEBD2C', display: 'inline-block' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#27C841', display: 'inline-block' }} />
              </div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                vishal.developer.swift
              </span>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(10, 132, 255, 0.15)',
                  color: '#64D2FF',
                  fontWeight: 600
                }}
              >
                iOS Architect
              </span>
            </div>

            {/* Profile Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '24px'
              }}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={vishalPhoto}
                  alt="Vishal Rao M"
                  style={{
                    width: '84px',
                    height: '84px',
                    borderRadius: '20px',
                    objectFit: 'cover',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    right: -2,
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    backgroundColor: '#30D158',
                    border: '3px solid #090d16',
                    boxShadow: '0 0 10px rgba(48, 209, 88, 0.6)'
                  }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h3 style={{ fontSize: '1.4rem', margin: 0, color: '#ffffff' }}>Vishal Rao M</h3>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A84FF">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <p style={{ margin: '3px 0 0 0', fontSize: '0.88rem', color: '#94a3b8' }}>
                  iOS Dev &amp; Technical Trainer @ SIMATS
                </p>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: '#64748b' }}>
                  Chennai, India · Saveetha / DSEC B.Tech AI &amp; DS
                </p>
              </div>
            </div>

            {/* Apple Engineering Highlights */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '20px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '10px'
                }}
              >
                <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                   Native Frameworks
                </span>
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#64D2FF' }}>
                  SwiftUI · UIKit · Combine
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '10px'
                }}
              >
                <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  🧠 On-Device Intelligence
                </span>
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#BF5AF2' }}>
                  Core ML · Apple Neural Engine
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '10px'
                }}
              >
                <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  🛡️ Verification Suite
                </span>
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#30D158' }}>
                  Selenium · Appium · Load QA
                </span>
              </div>
            </div>

            {/* Live App Store badge ticker */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                backgroundColor: 'rgba(10, 132, 255, 0.08)',
                border: '1px solid rgba(10, 132, 255, 0.2)',
                borderRadius: '10px'
              }}
            >
              <span style={{ fontSize: '1rem' }}>🚀</span>
              <span style={{ fontSize: '0.8rem', color: '#e2e8f0', lineHeight: 1.4 }}>
                <strong style={{ color: '#64D2FF' }}>Latest Releases:</strong> Viana 360, Smart Ulcer Predictor, BreathTrack &amp; CoreCare
              </span>
            </div>

            {/* Live Xcode Telemetry Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                marginTop: '16px',
                paddingTop: '14px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                fontSize: '0.72rem',
                fontFamily: 'monospace'
              }}
            >
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '6px 8px', borderRadius: 8, textAlign: 'center' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.62rem' }}>PROMOTION</div>
                <div style={{ color: '#38bdf8', fontWeight: 700 }}>120 Hz</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '6px 8px', borderRadius: 8, textAlign: 'center' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.62rem' }}>REST SYNC</div>
                <div style={{ color: '#4ade80', fontWeight: 700 }}>11ms Latency</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '6px 8px', borderRadius: 8, textAlign: 'center' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.62rem' }}>ANE INFER</div>
                <div style={{ color: '#c084fc', fontWeight: 700 }}>8.2ms Neural</div>
              </div>
            </div>
          </div>

          {/* Floating Technology Badges with Smooth Levitation */}
          <div
            className="floating-badge-top"
            style={{
              position: 'absolute',
              top: '-14px',
              right: '-10px',
              zIndex: 3,
              background: 'rgba(10, 132, 255, 0.22)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(10, 132, 255, 0.45)',
              borderRadius: '20px',
              padding: '6px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 8px 24px rgba(10, 132, 255, 0.35)'
            }}
          >
            <span style={{ fontSize: '0.85rem' }}></span>
            <span style={{ fontSize: '0.75rem', color: '#64D2FF', fontWeight: 700 }}>SwiftUI 6 · 120 FPS</span>
          </div>

          <div
            className="floating-badge-bottom"
            style={{
              position: 'absolute',
              bottom: '-12px',
              left: '-10px',
              zIndex: 3,
              background: 'rgba(191, 90, 242, 0.22)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(191, 90, 242, 0.45)',
              borderRadius: '20px',
              padding: '6px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 8px 24px rgba(191, 90, 242, 0.35)'
            }}
          >
            <span style={{ fontSize: '0.85rem' }}>🧠</span>
            <span style={{ fontSize: '0.75rem', color: '#e0a5ff', fontWeight: 700 }}>Core ML · 8.2ms ANE</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatBadgeTop {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(1deg);
          }
        }

        @keyframes floatBadgeBottom {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(6px) rotate(-1deg);
          }
        }

        .floating-badge-top {
          animation: floatBadgeTop 4s ease-in-out infinite;
        }

        .floating-badge-bottom {
          animation: floatBadgeBottom 4.5s ease-in-out infinite;
        }

        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default IntroComponent;
