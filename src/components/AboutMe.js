import React from 'react';

function AboutMe() {
  const pillars = [
    {
      icon: '',
      title: 'Native Apple Engineering',
      color: '#0A84FF',
      gradient: 'linear-gradient(135deg, rgba(10, 132, 255, 0.15) 0%, rgba(10, 132, 255, 0.03) 100%)',
      borderColor: 'rgba(10, 132, 255, 0.25)',
      description:
        'Deep mastery of Swift, SwiftUI, and UIKit. Crafting responsive cross-device layouts for iPhone and iPad (Viana 360), reactive data streams with Combine, local persistence via Core Data, and system integrations with HealthKit and MapKit.'
    },
    {
      icon: '🧠',
      title: 'On-Device Core ML & AI',
      color: '#BF5AF2',
      gradient: 'linear-gradient(135deg, rgba(191, 90, 242, 0.15) 0%, rgba(191, 90, 242, 0.03) 100%)',
      borderColor: 'rgba(191, 90, 242, 0.25)',
      description:
        'Leveraging a B.Tech in Artificial Intelligence & Data Science to deploy quantized neural networks directly to the Apple Neural Engine (ANE). Engineered real-time clinical vision diagnostics in Smart Ulcer Predictor with zero cloud dependency.'
    },
    {
      icon: '🛡️',
      title: 'Industrial QA & Testing',
      color: '#30D158',
      gradient: 'linear-gradient(135deg, rgba(48, 209, 88, 0.15) 0%, rgba(48, 209, 88, 0.03) 100%)',
      borderColor: 'rgba(48, 209, 88, 0.25)',
      description:
        'Unrivaled cross-discipline quality engineering across 4 pillars: Selenium (Web), Appium (iOS & Android), backend vulnerability assessments, and load benchmarking. Ensuring zero crashes, bulletproof security, and seamless App Store approval.'
    }
  ];

  const highlights = [
    {
      title: 'High-Velocity Fast Development',
      subtitle: 'Rapid iOS engineering & production shipping at Viana Soft',
      badge: 'Recognition',
      badgeColor: '#0A84FF'
    },
    {
      title: 'Technical Trainer & Mentor',
      subtitle: 'Training aspiring mobile engineers at SIMATS',
      badge: 'Leadership',
      badgeColor: '#30D158'
    },
    {
      title: 'Published Research Author',
      subtitle: 'Paper on iOS Development in IJRPR Journal',
      badge: 'Academic',
      badgeColor: '#BF5AF2'
    },
    {
      title: 'AWS Cloud Certified',
      subtitle: 'Cloud Computing Architecture certification',
      badge: 'Certified',
      badgeColor: '#FF9F0A'
    }
  ];

  return (
    <section id="about" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">ENGINEERING PHILOSOPHY</span>
        <h2 className="section-title">
          Where Native Precision Meets <span className="gradient-text-blue">Industrial Quality</span>.
        </h2>
        <p className="section-subtitle">
          I bridge the gap between creative Apple design thinking and rock-solid software verification — engineering apps that look exceptional and run flawlessly under load.
        </p>
      </div>

      {/* Story & Background Box */}
      <div
        className="glass-card"
        style={{
          padding: '36px',
          marginBottom: '40px'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '36px',
            alignItems: 'center'
          }}
          className="about-story-grid"
        >
          <div>
            <h3 style={{ fontSize: '1.45rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
              Full-Lifecycle Mobile Ownership
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '16px' }}>
              At <strong>SIMATS Engineering Institution</strong> and <strong>Viana Soft</strong>, I own the entire engineering lifecycle: translating complex institutional and clinical requirements into sleek Swift architectures, integrating REST APIs, running automated testing pipelines, and driving smooth App Store reviews.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
              Recognized for delivery velocity, I was promoted from intern to full-time iOS developer in just two months. Today, I also double as a <strong>Technical Trainer</strong>, mentoring developers in Swift, SwiftUI, App Store deployment, and industry-grade testing practices.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }}
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '20px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '14px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: item.badgeColor,
                    marginBottom: '8px'
                  }}
                >
                  {item.badge}
                </span>
                <h4 style={{ fontSize: '1.05rem', margin: '0 0 6px 0', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {item.title}
                </h4>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3 Core Engineering Pillars */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}
      >
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="glass-card about-pillar-card"
            style={{
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              borderTop: `3px solid ${pillar.color}`
            }}
            onMouseEnter={(e) => {
              const isLight = document.documentElement.getAttribute('data-theme') === 'light';
              e.currentTarget.style.borderColor = pillar.color;
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = isLight
                ? `0 0 0 1px ${pillar.color}80, inset 0 2px 2px 0 #ffffff, 0 24px 55px -10px ${pillar.color}35, 0 6px 18px rgba(15, 23, 42, 0.08)`
                : `0 0 0 1px ${pillar.color}60, inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.4), 0 24px 60px rgba(0, 0, 0, 0.5), 0 0 35px ${pillar.color}30`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '';
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div
              className="about-pillar-icon"
              data-pillar-idx={index}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                marginBottom: '20px',
                border: `1px solid ${pillar.borderColor}`
              }}
            >
              {pillar.icon}
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
              {pillar.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.65', margin: 0 }}>
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-story-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default AboutMe;
