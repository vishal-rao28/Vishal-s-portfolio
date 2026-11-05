import React, { useState } from 'react';

function SkillSet() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'ios', label: ' iOS & Apple Ecosystem' },
    { id: 'qa', label: '🛡️ QA & Automation' },
    { id: 'ai', label: '🧠 AI & Vision' },
    { id: 'tools', label: '⚡ Languages & Backend' }
  ];

  const skillGroups = [
    {
      category: 'ios',
      title: 'iOS Native Development',
      icon: '',
      accentColor: '#0A84FF',
      skills: [
        { name: 'Swift', level: 'Expert', highlight: 'Primary Language' },
        { name: 'SwiftUI', level: 'Advanced', highlight: 'Declarative UI & Animations' },
        { name: 'UIKit', level: 'Advanced', highlight: 'Custom Controls & ViewControllers' },
        { name: 'Combine', level: 'Advanced', highlight: 'Reactive State & Pipelines' },
        { name: 'Core Data', level: 'Intermediate', highlight: 'Offline Persistence' },
        { name: 'Core ML', level: 'Advanced', highlight: 'ANE On-Device Inference' },
        { name: 'HealthKit', level: 'Intermediate', highlight: 'Vitals & Telehealth' },
        { name: 'MapKit & CoreLocation', level: 'Advanced', highlight: 'Live GPS Telemetry' },
        { name: 'Swift Charts', level: 'Advanced', highlight: 'Data Visualization' },
        { name: 'Xcode & TestFlight', level: 'Expert', highlight: 'Build, Profile & Deploy' }
      ]
    },
    {
      category: 'qa',
      title: 'QA, Automation & Security',
      icon: '🛡️',
      accentColor: '#30D158',
      skills: [
        { name: 'Appium', level: 'Advanced', highlight: 'iOS & Android Mobile Automation' },
        { name: 'Selenium', level: 'Advanced', highlight: 'Web Automated Regressions' },
        { name: 'Postman', level: 'Expert', highlight: 'REST API Contract Validation' },
        { name: 'Load Testing', level: 'Advanced', highlight: 'Server Stress & Latency Benchmarks' },
        { name: 'Backend Vulnerability', level: 'Advanced', highlight: 'Security Risk Audits' },
        { name: 'CI/CD Pipelines', level: 'Intermediate', highlight: 'Automated Build Verification' }
      ]
    },
    {
      category: 'ai',
      title: 'AI, Machine Learning & Vision',
      icon: '🧠',
      accentColor: '#BF5AF2',
      skills: [
        { name: 'Vision Framework', level: 'Advanced', highlight: 'Computer Vision Pre-processing' },
        { name: 'Model Quantization', level: 'Intermediate', highlight: 'Optimizing for Apple Neural Engine' },
        { name: 'Deep Neural Networks', level: 'Intermediate', highlight: 'CNNs & Classifier Architectures' },
        { name: 'Python', level: 'Advanced', highlight: 'Model Training & Evaluation' },
        { name: 'Data Science', level: 'Graduate', highlight: 'Saveetha B.Tech Specialization' },
        { name: 'Core ML Tools', level: 'Advanced', highlight: 'Model Conversion & Profiling' }
      ]
    },
    {
      category: 'tools',
      title: 'Languages, Backend & Tools',
      icon: '⚡',
      accentColor: '#FF9F0A',
      skills: [
        { name: 'RESTful APIs', level: 'Expert', highlight: 'Enterprise Endpoint Ingestion' },
        { name: 'Firebase', level: 'Advanced', highlight: 'Realtime DB, Auth & Push Notifications' },
        { name: 'Git & GitHub', level: 'Advanced', highlight: 'Version Control & Workflows' },
        { name: 'AWS Cloud', level: 'Certified', highlight: 'Cloud Architecture (6-mo Cert)' },
        { name: 'Java & C/C++', level: 'Intermediate', highlight: 'Core Algorithms & Data Structures' },
        { name: 'Figma & UI/UX', level: 'Intermediate', highlight: 'Apple HIG Design Specs' }
      ]
    }
  ];

  const filteredGroups =
    activeCategory === 'all'
      ? skillGroups
      : skillGroups.filter((group) => group.category === activeCategory);

  return (
    <section id="skills" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">COMPETENCY MATRIX</span>
        <h2 className="section-title">
          Technical Skills &amp; <span className="gradient-text-blue">Tooling</span>.
        </h2>
        <p className="section-subtitle">
          Engineered across Apple native frameworks, automated testing infrastructure, machine learning pipelines, and cloud APIs.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '40px'
        }}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '8px 18px',
                borderRadius: '30px',
                border: `1px solid ${isActive ? 'var(--apple-blue)' : 'var(--border-subtle)'}`,
                backgroundColor: isActive ? 'var(--apple-blue)' : 'var(--bg-card)',
                color: isActive ? '#ffffff' : 'var(--text-primary)',
                boxShadow: isActive ? '0 4px 14px var(--apple-blue-glow)' : '0 2px 6px rgba(0, 0, 0, 0.04)',
                fontWeight: 600,
                fontSize: '0.86rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Skills Groups Grid: Clean Symmetrical Matrix */}
      <div className={`skills-groups-grid ${filteredGroups.length === 1 ? 'single-card' : ''}`}>
        {filteredGroups.map((group, gIdx) => (
          <div
            key={gIdx}
            className="glass-card"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              borderTop: `3px solid ${group.accentColor}`
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px',
                paddingBottom: '12px',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              <span
                className="skills-card-icon-pod"
                data-group-id={group.category}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  border: `1px solid ${group.accentColor}40`
                }}
              >
                {group.icon}
              </span>
              <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-primary)' }}>
                {group.title}
              </h3>
            </div>

            {/* Skills Tiles Grid: Exact 2-Column Horizontal & Vertical Alignment */}
            <div className="skills-tiles-grid">
              {group.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="skill-tile-item"
                  onMouseEnter={(e) => {
                    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
                    e.currentTarget.style.borderColor = group.accentColor;
                    e.currentTarget.style.boxShadow = isLight
                      ? `0 0 0 1px ${group.accentColor}50, inset 0 2px 2px #ffffff, 0 8px 24px ${group.accentColor}25`
                      : `0 0 0 1px ${group.accentColor}50, inset 0 1.5px 2px rgba(255, 255, 255, 0.4), 0 8px 24px ${group.accentColor}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  {/* Left Column: Skill Name & Subtitle */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0, flex: 1 }}>
                    <span
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        lineHeight: 1.2,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      title={skill.name}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.3,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      title={skill.highlight}
                    >
                      {skill.highlight}
                    </span>
                  </div>

                  {/* Right Side Small Bar: Aligned Equally Horizontally & Vertically */}
                  <span
                    className="skill-level-badge"
                    style={{
                      backgroundColor: `${group.accentColor}18`,
                      color: group.accentColor,
                      border: `1px solid ${group.accentColor}40`
                    }}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillSet;
