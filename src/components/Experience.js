import React from 'react';

function Experience() {
  const experiences = [
    {
      period: '2026 – Present',
      role: 'iOS Developer & Technical Engineer',
      organization: 'SIMATS Engineering Institution · Chennai',
      type: 'Engineering & Training',
      accentColor: '#006AFF',
      bullets: [
        'Serve as iOS Developer & Technical Trainer / Engineer, blending hands-on iOS engineering with mentorship.',
        'Architect and deploy production native iOS applications using Swift, SwiftUI, UIKit, and Core ML.',
        'Mentor developers in iOS architecture, debugging, App Store submission, and interview readiness.'
      ]
    },
    {
      period: 'Industry Role',
      role: 'iOS Developer',
      organization: 'Viana Soft',
      type: 'Mobile Engineering',
      accentColor: '#27C841',
      bullets: [
        'Engineered institutional telemetry and monitoring application Viana 360 for iPhone & iPad.',
        'Integrated real-time streaming REST APIs with Combine reactive data publishers and Swift Charts.',
        'Optimized responsive split-views for iPadOS and led full TestFlight beta testing and App Store release.'
      ]
    },
    {
      period: 'Industry Role',
      role: 'Technical QA & Automation Engineer',
      organization: 'Greatify',
      type: 'QA & Verification',
      accentColor: '#FEBD2C',
      bullets: [
        'Architected multi-platform automated regression test suites using Selenium (Web) and Appium (iOS & Android).',
        'Conducted backend vulnerability testing, endpoint load benchmarking, and performance stress simulations.',
        'Implemented Postman API collections and streamlined CI/CD verification pipelines.'
      ]
    },
    {
      period: 'Education',
      role: 'B.Tech in Artificial Intelligence & Data Science',
      organization: 'Saveetha Engineering College / SIMATS',
      type: 'Degree & Research',
      accentColor: '#f5576c',
      bullets: [
        'Specialized in Artificial Intelligence, Machine Learning, Deep Neural Networks, and Mobile Systems.',
        'Researched and built clinical computer vision diagnostics on Apple Neural Engine (ANE).'
      ]
    }
  ];

  return (
    <div id="experience" style={{ marginTop: '90px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.4rem', margin: 0 }}>
          Experience &amp; Journey <strong style={{ color: '#27C841' }}>.</strong>
        </h1>
        <p
          className="cartoonText"
          style={{ fontSize: '1.4rem', color: '#27C841', marginTop: '6px' }}
        >
          ~ From Enterprise iOS Apps to Automated QA Systems ~
        </p>
      </div>

      <div
        style={{
          maxWidth: '850px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}
      >
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#fff',
              borderRadius: 14,
              border: '1px solid #e2e8f0',
              padding: '24px 28px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              borderLeft: `5px solid ${exp.accentColor}`,
              transition: 'transform 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: 8
              }}
            >
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  color: exp.accentColor,
                  fontFamily: 'monospace'
                }}
              >
                {exp.period}
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  backgroundColor: '#f1f5f9',
                  color: '#475569',
                  padding: '3px 10px',
                  borderRadius: 12,
                  fontWeight: 600
                }}
              >
                {exp.type}
              </span>
            </div>

            <h3
              style={{
                margin: '0 0 4px 0',
                fontSize: '1.35rem',
                color: '#0f172a',
                fontFamily: 'EBGaramondBold, sans-serif'
              }}
            >
              {exp.role}
            </h3>
            <h4
              style={{
                margin: '0 0 14px 0',
                fontSize: '1rem',
                color: '#64748b',
                fontFamily: 'EBGaramondRegular, sans-serif',
                fontWeight: 500
              }}
            >
              {exp.organization}
            </h4>

            <ul
              style={{
                margin: 0,
                paddingLeft: '20px',
                color: '#334155',
                fontSize: '0.96rem',
                lineHeight: '1.6',
                fontFamily: 'EBGaramondRegular, sans-serif'
              }}
            >
              {exp.bullets.map((b, bIdx) => (
                <li key={bIdx} style={{ marginBottom: '6px' }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
