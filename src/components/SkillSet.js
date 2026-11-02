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
        { name: 'Data Science', level: 'Graduate', highlight: 'Saveetha B.Tech Specialization' }
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
                border: `1px solid ${isActive ? '#0A84FF' : 'rgba(255, 255, 255, 0.1)'}`,
                backgroundColor: isActive ? 'rgba(10, 132, 255, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                color: isActive ? '#64D2FF' : 'var(--text-secondary)',
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

      {/* Skills Groups Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}
      >
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
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <span
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  border: `1px solid ${group.accentColor}40`
                }}
              >
                {group.icon}
              </span>
              <h3 style={{ fontSize: '1.25rem', margin: 0, color: '#ffffff' }}>
                {group.title}
              </h3>
            </div>

            {/* Skills Pills List */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {group.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    padding: '8px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    flex: '1 1 calc(50% - 10px)',
                    minWidth: '130px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                    e.currentTarget.style.borderColor = group.accentColor;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        color: group.accentColor,
                        fontWeight: 600
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    {skill.highlight}
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
