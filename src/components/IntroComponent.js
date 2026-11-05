import React from 'react';
import vishalPhoto from '../assets/img/vishal_optimized1.jpg';

function IntroComponent() {
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
              color: 'var(--text-primary)'
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
            I'm <strong style={{ color: 'var(--text-primary)' }}>Vishal Rao M</strong> — an iOS Developer &amp; Technical Engineer specializing in native <strong style={{ color: 'var(--apple-cyan, #0284c7)' }}>SwiftUI, UIKit, Core ML</strong> on-device AI, and <strong style={{ color: 'var(--apple-green, #248a3d)' }}>automated testing across 4 quality verification gates</strong>. Pioneering high-velocity rapid development with 5+ production apps shipped live to the App Store.
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
                <span>See Resume ↗</span>
              </button>
            </a>
          </div>

          {/* Key Metrics Strip */}
          <div
            className="hero-metrics-strip"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
              gap: '16px',
              paddingTop: '24px',
              borderTop: '1px solid var(--border-subtle)'
            }}
          >
            <div className="hero-metric-item">
              <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--apple-blue)', lineHeight: 1 }}>5+</div>
              <div className="hero-metric-label" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 4, fontWeight: 500 }}>App Store Apps</div>
            </div>
            <div className="hero-metric-item">
              <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--apple-green)', lineHeight: 1 }}>Rapid</div>
              <div className="hero-metric-label" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 4, fontWeight: 500 }}>Fast Development</div>
            </div>
            <div className="hero-metric-item">
              <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--apple-amber)', lineHeight: 1 }}>4</div>
              <div className="hero-metric-label" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 4, fontWeight: 500 }}>Quality Gates</div>
            </div>
            <div className="hero-metric-item">
              <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--apple-purple)', lineHeight: 1 }}>B.Tech</div>
              <div className="hero-metric-label" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 4, fontWeight: 500 }}>AI &amp; Data Science</div>
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
            className="glass-card hero-showcase-glass"
            style={{
              position: 'relative',
              zIndex: 1,
              padding: '28px'
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
                borderBottom: '1px solid var(--border-subtle)'
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
                  color: 'var(--apple-blue)',
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
                    border: '3px solid var(--bg-primary)',
                    boxShadow: '0 0 10px rgba(48, 209, 88, 0.6)'
                  }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h3 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-primary)' }}>Vishal Rao M</h3>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A84FF">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <p style={{ margin: '3px 0 0 0', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  iOS Dev &amp; Technical Trainer @ SIMATS
                </p>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
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
                className="hero-feature-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="glossy-icon-badge apple-blue"></span>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                    Native Frameworks
                  </span>
                </div>
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--apple-cyan, #0284c7)' }}>
                  SwiftUI · UIKit · Combine
                </span>
              </div>

              <div
                className="hero-feature-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="glossy-icon-badge apple-purple">🧠</span>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                    On-Device Intelligence
                  </span>
                </div>
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--apple-purple, #9333ea)' }}>
                  Core ML · Apple Neural Engine
                </span>
              </div>

              <div
                className="hero-feature-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="glossy-icon-badge apple-green">🛡️</span>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                    Verification Suite
                  </span>
                </div>
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--apple-green, #248a3d)' }}>
                  Selenium · Appium · Load QA
                </span>
              </div>
            </div>

            {/* Live App Store badge ticker */}
            <div
              className="hero-release-ticker"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                backgroundColor: 'rgba(10, 132, 255, 0.08)',
                border: '1px solid rgba(10, 132, 255, 0.22)',
                borderRadius: '10px'
              }}
            >
              <span className="glossy-icon-badge apple-amber" style={{ fontSize: '0.9rem' }}>🚀</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>
                <strong style={{ color: 'var(--apple-blue)' }}>Latest Releases:</strong> Smart Ulcer Predictor, BreathTrack, CoreCare &amp; HairJourneyTracker
              </span>
            </div>

            {/* Live Xcode Telemetry Bar */}
            <div
              className="hero-telemetry-bar"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                marginTop: '16px',
                paddingTop: '14px',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.72rem',
                fontFamily: 'monospace'
              }}
            >
              <div className="hero-telemetry-item" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '6px 8px', borderRadius: 8, textAlign: 'center' }}>
                <div className="telemetry-label" style={{ color: 'var(--text-muted)', fontSize: '0.62rem' }}>PROMOTION</div>
                <div style={{ color: 'var(--apple-cyan, #0284c7)', fontWeight: 700 }}>120 Hz</div>
              </div>
              <div className="hero-telemetry-item" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '6px 8px', borderRadius: 8, textAlign: 'center' }}>
                <div className="telemetry-label" style={{ color: 'var(--text-muted)', fontSize: '0.62rem' }}>REST SYNC</div>
                <div style={{ color: 'var(--apple-green, #248a3d)', fontWeight: 700 }}>11ms Latency</div>
              </div>
              <div className="hero-telemetry-item" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '6px 8px', borderRadius: 8, textAlign: 'center' }}>
                <div className="telemetry-label" style={{ color: 'var(--text-muted)', fontSize: '0.62rem' }}>ANE INFER</div>
                <div style={{ color: 'var(--apple-purple, #9333ea)', fontWeight: 700 }}>8.2ms Neural</div>
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
            <span style={{ fontSize: '0.75rem', color: 'var(--apple-cyan, #0284c7)', fontWeight: 700 }}>SwiftUI 6 · 120 FPS</span>
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
            <span style={{ fontSize: '0.75rem', color: 'var(--apple-purple, #9333ea)', fontWeight: 700 }}>Core ML · 8.2ms ANE</span>
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
