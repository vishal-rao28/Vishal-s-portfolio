import React from 'react';

function Experience() {
  const experiences = [
    {
      period: '2026 – Present',
      role: 'iOS Developer & Technical Trainer',
      organization: 'SIMATS Engineering Institution · Chennai',
      type: 'Engineering & Mentorship',
      accentColor: '#0A84FF',
      bullets: [
        'Serve as iOS Developer & Technical Trainer, blending hands-on native iOS engineering with developer mentorship.',
        'Architect and deploy production native iOS applications using Swift, SwiftUI, UIKit, and Core ML.',
        'Mentor developers in iOS architecture, debugging, App Store submission standards, and interview readiness.',
        'Execute structured testing across four automated quality verification gates: Selenium (Web), Appium (Android & iOS), Backend Vulnerability, and Load Testing.',
        'Partner cross-functionally with development and QA teams to benchmark latency, resolve defects, and ensure zero-crash releases.'
      ]
    },
    {
      period: 'Oct 2025 – Present',
      role: 'iOS Developer',
      organization: 'Viana Soft Private Limited (SIMATS)',
      type: 'High-Velocity Rapid Development',
      accentColor: '#30D158',
      bullets: [
        'Promoted from iOS Intern to Full-Time iOS Developer in recognition of rapid development and high delivery velocity.',
        'Spearheaded development of “Viana 360,” a cross-device institutional application built for iPhone and iPad on App Store.',
        'Engineered scalable responsive SwiftUI layouts with Combine reactive streams and real-time REST API telemetry.',
        'Led end-to-end testing of VBuy Food application across iOS devices, confirming functionality, UI consistency, and performance.',
        'Delivered the application within an aggressive ~3-month timeline and successfully launched it live on the Apple App Store.'
      ]
    },
    {
      period: 'Jan 2025 – Jul 2025',
      role: 'iOS Development Intern',
      organization: 'Greatify',
      type: 'AI-Enhanced Enterprise Platforms',
      accentColor: '#FF9F0A',
      bullets: [
        'Engineered mobile modules for AI-enhanced ERP, LMS, and digital examination enterprise solutions.',
        'Integrated RESTful APIs and optimized client-side state handling to ensure fluid user navigation.',
        'Collaborated with QA teams on test case design, regression validation, and defect tracking.'
      ]
    },
    {
      period: 'Nov 2021 – May 2025',
      role: 'B.Tech in Artificial Intelligence & Data Science',
      organization: 'Dhanalakshmi Srinivasan Engineering College',
      type: 'Degree · CGPA 7.5',
      accentColor: '#BF5AF2',
      bullets: [
        'Specialized in Artificial Intelligence, Machine Learning, Deep Neural Networks, and Mobile Systems.',
        'Published research paper on iOS Development in International Journal of Research Publication and Reviews (IJRPR).',
        'Completed 6-month AWS Cloud Computing Architecture certification.'
      ]
    }
  ];

  return (
    <section id="experience" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">CAREER MILESTONES</span>
        <h2 className="section-title">
          Experience &amp; <span className="gradient-text-blue">Journey</span>.
        </h2>
        <p className="section-subtitle">
          From fast-track promotion to shipping institutional App Store platforms and mentoring mobile engineers.
        </p>
      </div>

      {/* Timeline Container */}
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        {/* Vertical timeline spine */}
        <div
          style={{
            position: 'absolute',
            top: 15,
            bottom: 15,
            left: 20,
            width: 2,
            background: 'linear-gradient(to bottom, #0A84FF 0%, #30D158 35%, #FF9F0A 70%, #BF5AF2 100%)',
            opacity: 0.35
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '24px',
                position: 'relative'
              }}
            >
              {/* Timeline indicator node */}
              <div
                className="experience-timeline-node"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-secondary)',
                  border: `2px solid ${exp.accentColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  zIndex: 2,
                  boxShadow: `0 0 16px ${exp.accentColor}40`
                }}
              >
                <div
                  className="timeline-node-core"
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    backgroundColor: exp.accentColor
                  }}
                />
              </div>

              {/* Experience Card */}
              <div
                className="glass-card"
                style={{
                  flex: 1,
                  padding: '28px',
                  borderLeft: `4px solid ${exp.accentColor}`
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '10px'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.35rem', margin: '0 0 4px 0', color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <h4 style={{ fontSize: '0.98rem', margin: 0, color: 'var(--text-secondary)', fontWeight: 500 }}>
                      {exp.organization}
                    </h4>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: 20,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: exp.accentColor,
                        border: `1px solid ${exp.accentColor}40`
                      }}
                    >
                      {exp.type}
                    </span>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'monospace'
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul
                  style={{
                    margin: '16px 0 0 0',
                    paddingLeft: '20px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.94rem',
                    lineHeight: '1.65'
                  }}
                >
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ marginBottom: '8px' }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

