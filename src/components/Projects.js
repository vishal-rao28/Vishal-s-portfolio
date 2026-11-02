import React, { useState } from 'react';
import DialogProjects from './DialogProjects';
import IPhoneAppStudio from './IPhoneAppStudio';

function Projects() {
  const [filter, setFilter] = useState('all');
  const [studioAppIndex, setStudioAppIndex] = useState(0);

  const projectList = [
    {
      title: 'Viana 360',
      category: 'iOS & iPadOS · Institutional Telemetry',
      filterTag: 'enterprise',
      status: '● Live on App Store',
      icon: '📊',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0284c7 100%)',
      accentColor: '#0284c7',
      src: 'https://apps.apple.com/in/app/viana-360/id6760163659',
      description:
        'A comprehensive institutional application for iPhone and iPad designed for real-time monitoring and advanced data visualization across enterprise streams.',
      architecture:
        'Clean MVVM Architecture · Combine Reactive State Management · Adaptive iPadOS SplitView · Real-time REST Data Ingestion · Swift Charts',
      qa:
        'Selenium & Appium automated UI flows · High-load endpoint latency benchmarking · Network fault tolerance validation',
      stack: ['SwiftUI', 'UIKit', 'Combine', 'Swift Charts', 'REST APIs', 'iPadOS'],
      github: false
    },
    {
      title: 'Smart Ulcer Predictor',
      category: 'iOS · Medical AI · Core ML',
      filterTag: 'health',
      status: '● Live on App Store',
      icon: '🔬',
      gradient: 'linear-gradient(135deg, #09203f 0%, #164e63 50%, #0d9488 100%)',
      accentColor: '#0d9488',
      src: 'https://apps.apple.com/in/app/smart-ulcer-predictor/id6755873140',
      description:
        'An AI-powered clinical decision-support mobile application employing deep learning computer vision on-device to evaluate skin ulcer imagery (Healing, Not Healing, Normal Skin) with sub-second inference.',
      architecture:
        'On-device Apple Neural Engine (ANE) Inference · Core ML Model Quantization · Vision Framework Pre-processing · HIPAA-conscious Local Pipeline',
      qa:
        'Confusion matrix & model accuracy benchmarking · Memory leak validation during image capture · Extreme lighting tolerance tests',
      stack: ['Core ML', 'Vision Framework', 'SwiftUI', 'Deep Learning', 'Convolutional Nets'],
      github: false
    },
    {
      title: 'BreathTrack',
      category: 'iOS · MedTech · Vitals & Telehealth',
      filterTag: 'health',
      status: '● Live on App Store',
      icon: '🫁',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      accentColor: '#4338ca',
      src: 'https://apps.apple.com/in/app/breathtrack/id6804558579',
      description:
        'A collaborative respiratory telehealth platform bridging pulmonary patients with clinical teams. Features real-time tracking for SpO2, forced vital capacity (FVC), inhaler dose reminders, and clinician ABG diagnostic reviews.',
      architecture:
        'Apple HealthKit Background Delivery · Secure REST Telehealth Integration · Interactive Vital Trend Graphing · Push Notification Dispatcher',
      qa:
        'Background HealthKit query battery impact testing · Clinician dashboard Selenium verification · Security penetration audits',
      stack: ['SwiftUI', 'HealthKit', 'Combine', 'REST APIs', 'Interactive Charts'],
      github: false
    },
    {
      title: 'CoreCare',
      category: 'iOS · Digital Health & Wellness',
      filterTag: 'health',
      status: '● Live on App Store',
      icon: '🌿',
      gradient: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)',
      accentColor: '#10b981',
      src: 'https://apps.apple.com/in/app/corecare/id6753789920',
      description:
        'A holistic wellness management platform engineered to simplify daily health routines. Integrates intuitive modules for nutrition, fitness tracking, hydration pacing, mood logging, and vital biometric analytics.',
      architecture:
        'Offline-First Core Data Persistence · Combine Reactive Binding · Modular Micro-Feature Architecture · Dark Mode HIG Design',
      qa:
        'Core Data schema migration testing · Automated regression test suites · Memory footprint profiling under continuous session loops',
      stack: ['SwiftUI', 'Combine', 'Core Data', 'Health Analytics', 'Apple HIG'],
      github: false
    },
    {
      title: 'HairJourneyTracker',
      category: 'iOS · Health & Lifestyle · PhotosUI',
      filterTag: 'health',
      status: '● Live on App Store',
      icon: '✨',
      gradient: 'linear-gradient(135deg, #4a044e 0%, #701a75 50%, #c026d3 100%)',
      accentColor: '#c026d3',
      src: 'https://apps.apple.com/in/app/hairjourneytracker/id6760697820',
      description:
        'A visual regimen companion allowing users to record high-resolution photographic milestones, analyze hair growth trends over time, evaluate treatment efficacy, and receive scheduled regimen notifications.',
      architecture:
        'PhotosUI Modern Photo Picker · Asynchronous Image Compression Pipeline · Local Core Data Photo Cache · UserNotifications Framework',
      qa:
        'High-res image memory spike profiling · Scheduled notifications background delivery testing · UI rendering smoothness tests',
      stack: ['SwiftUI', 'PhotosUI', 'Core Data', 'UserNotifications', 'Combine'],
      github: false
    },
    {
      title: 'School Bus Child Tracker',
      category: 'iOS · Safety & Location · Dual App',
      filterTag: 'enterprise',
      status: '● Production Tested',
      icon: '🚌',
      gradient: 'linear-gradient(135deg, #78350f 0%, #b45309 50%, #f59e0b 100%)',
      accentColor: '#f59e0b',
      src: '#socials',
      description:
        'A dual-application safety ecosystem composed of dedicated Parent and Bus Driver applications. Features live bus location streaming on Apple Maps, automated geofence boundary alerts, and electronic student boarding attendance.',
      architecture:
        'MapKit & Core Location Sub-meter Accuracy · Firebase Realtime DB Location Telemetry · Geofence Region Monitoring · Dual App Architecture',
      qa:
        'Simulated moving GPS route stress tests · Reconnection resilience on cell signal loss · High-frequency location battery optimization',
      stack: ['Swift', 'MapKit', 'Core Location', 'Firebase', 'Geofencing'],
      github: false
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Projects (6)' },
    { id: 'appstore', label: ' App Store Live (5)' },
    { id: 'health', label: '🔬 HealthTech & AI (4)' },
    { id: 'enterprise', label: '📊 Enterprise & Location (2)' }
  ];

  const filteredProjects = projectList.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'appstore') return project.status.toLowerCase().includes('live');
    if (filter === 'health') return project.filterTag === 'health';
    if (filter === 'enterprise') return project.filterTag === 'enterprise';
    return true;
  });

  return (
    <section id="projects" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">APPLE HARDWARE &amp; ARCHITECTURE</span>
        <h2 className="section-title">
          Interactive <span className="gradient-text-blue">iPhone Studio</span> &amp; Projects.
        </h2>
        <p className="section-subtitle">
          Experience native iOS applications running with real-time animated telemetry inside the iPhone 16 Pro chassis, paired with deep architecture specs.
        </p>
      </div>

      {/* Featured Interactive Apple Device Studio */}
      <IPhoneAppStudio
        activeAppIndex={studioAppIndex}
        setActiveAppIndex={setStudioAppIndex}
      />

      {/* Project Library Header & Filters */}
      <div style={{ marginTop: '70px', marginBottom: '28px', textAlign: 'center' }}>
        <span className="section-tag">DETAILED SYSTEM ARCHITECTURE &amp; QA</span>
        <h3 style={{ fontSize: '1.9rem', color: '#ffffff', margin: '4px 0 10px 0' }}>
          Production App Library
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
          Click on any app card below to inspect full system architecture, MVVM state flows, and QA automation matrices.
        </p>
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '40px'
        }}
      >
        {filterTabs.map((tab) => {
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
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
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px'
        }}
      >
        {filteredProjects.map((data, index) => {
          const appIndex = projectList.findIndex((p) => p.title === data.title);
          return (
            <DialogProjects
              key={index}
              title={data.title}
              category={data.category}
              status={data.status}
              icon={data.icon}
              gradient={data.gradient}
              accentColor={data.accentColor}
              src={data.src}
              description={data.description}
              architecture={data.architecture}
              qa={data.qa}
              stack={data.stack}
              github={data.github}
              onTestOnIPhone={() => setStudioAppIndex(appIndex >= 0 ? appIndex : 0)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
