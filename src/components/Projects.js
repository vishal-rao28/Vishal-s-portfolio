import React, { useState } from 'react';
import DialogProjects from './DialogProjects';
import IPhoneAppStudio from './IPhoneAppStudio';

// Viana 360 Assets
import vianaIcon from '../assets/img/viana/app_icon.jpg';
import vianaScreen1 from '../assets/img/viana/screen1.webp';
import vianaScreen2 from '../assets/img/viana/screen2.webp';
import vianaScreen3 from '../assets/img/viana/screen3.webp';
import vianaScreen4 from '../assets/img/viana/screen4.webp';
import vianaScreen5 from '../assets/img/viana/screen5.webp';

// Smart Ulcer Predictor Assets
import smartulcerIcon from '../assets/img/smartulcer/app_icon.jpg';
import smartulcerScreen1 from '../assets/img/smartulcer/screen1.webp';
import smartulcerScreen2 from '../assets/img/smartulcer/screen2.webp';
import smartulcerScreen3 from '../assets/img/smartulcer/screen3.webp';
import smartulcerScreen4 from '../assets/img/smartulcer/screen4.webp';
import smartulcerScreen5 from '../assets/img/smartulcer/screen5.webp';

// BreathTrack Assets
import breathtrackIcon from '../assets/img/breathtrack/app_icon.jpg';
import breathtrackScreen1 from '../assets/img/breathtrack/screen1.webp';
import breathtrackScreen2 from '../assets/img/breathtrack/screen2.webp';
import breathtrackScreen3 from '../assets/img/breathtrack/screen3.webp';
import breathtrackScreen4 from '../assets/img/breathtrack/screen4.webp';
import breathtrackScreen5 from '../assets/img/breathtrack/screen5.webp';
import breathtrackScreen6 from '../assets/img/breathtrack/screen6.webp';

// CoreCare Assets
import corecareIcon from '../assets/img/corecare/app_icon.jpg';
import corecareScreen1 from '../assets/img/corecare/screen1.webp';
import corecareScreen2 from '../assets/img/corecare/screen2.webp';
import corecareScreen3 from '../assets/img/corecare/screen3.webp';
import corecareScreen4 from '../assets/img/corecare/screen4.webp';

// HairJourneyTracker Assets
import hairjourneyIcon from '../assets/img/hairjourney/app_icon.jpg';
import hairjourneyScreen1 from '../assets/img/hairjourney/screen1.webp';
import hairjourneyScreen2 from '../assets/img/hairjourney/screen2.webp';
import hairjourneyScreen3 from '../assets/img/hairjourney/screen3.webp';
import hairjourneyScreen4 from '../assets/img/hairjourney/screen4.webp';
import hairjourneyScreen5 from '../assets/img/hairjourney/screen5.webp';
import hairjourneyScreen6 from '../assets/img/hairjourney/screen6.webp';

function Projects() {
  const [filter, setFilter] = useState('all');
  const [studioAppIndex, setStudioAppIndex] = useState(0);

  const projectList = [
    {
      title: 'Viana 360',
      category: 'iOS & iPadOS · Institutional Enterprise',
      filterTag: 'enterprise',
      status: '● Live on App Store',
      icon: '📊',
      appIcon: vianaIcon,
      screenshots: [vianaScreen1, vianaScreen2, vianaScreen3, vianaScreen4, vianaScreen5],
      rating: '★ 4.4 (13 Ratings)',
      version: 'v4.7 (Production)',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0284c7 100%)',
      accentColor: '#0284c7',
      src: 'https://apps.apple.com/in/app/viana-360/id6760163659',
      description:
        'Secure employee app for attendance, leave, claims, and work management. Live on the Apple App Store for iPhone and iPad, developed by Viana Soft with native SwiftUI & UIKit architecture.',
      architecture:
        'Clean MVVM Architecture · Combine Reactive State Management · Adaptive iPadOS SplitView · Real-time REST Data Ingestion · CoreLocation Geofencing · APNs Broadcast Dispatcher',
      qa:
        'Selenium & Appium automated UI flows · High-load endpoint latency benchmarking · GPS boundary edge tolerance validation',
      stack: ['SwiftUI', 'UIKit', 'Combine', 'CoreLocation', 'APNs Push', 'REST APIs', 'iPadOS'],
      github: false
    },
    {
      title: 'Smart Ulcer Predictor',
      category: 'iOS · Medical AI · Core ML',
      filterTag: 'health',
      status: '● Live on App Store',
      icon: '🔬',
      appIcon: smartulcerIcon,
      screenshots: [smartulcerScreen1, smartulcerScreen2, smartulcerScreen3, smartulcerScreen4, smartulcerScreen5],
      rating: '★ 5.0 (Clinical)',
      version: 'v2.1 (Production)',
      gradient: 'linear-gradient(135deg, #09203f 0%, #164e63 50%, #0d9488 100%)',
      accentColor: '#0d9488',
      src: 'https://apps.apple.com/in/app/smart-ulcer-predictor/id6755873140',
      description:
        'An AI-powered clinical decision-support mobile application employing deep learning computer vision on-device to evaluate skin ulcer imagery (Granulation, Slough, Necrotic, Epithelialisation) with sub-second inference.',
      architecture:
        'On-device Apple Neural Engine (ANE) Inference · Core ML Model Quantization · Vision Framework Pre-processing · HIPAA-conscious Local Pipeline',
      qa:
        'Confusion matrix & model accuracy benchmarking · Memory leak validation during image capture · Extreme lighting tolerance tests',
      stack: ['Core ML', 'Vision Framework', 'SwiftUI', 'Deep Learning', 'Convolutional Nets', 'Apple Neural Engine'],
      github: false
    },
    {
      title: 'BreathTrack',
      category: 'iOS · MedTech · Vitals & Telehealth',
      filterTag: 'health',
      status: '● Live on App Store',
      icon: '🫁',
      appIcon: breathtrackIcon,
      screenshots: [breathtrackScreen1, breathtrackScreen2, breathtrackScreen3, breathtrackScreen4, breathtrackScreen5, breathtrackScreen6],
      rating: '★ 5.0 (Telehealth)',
      version: 'v3.0 (Production)',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      accentColor: '#4338ca',
      src: 'https://apps.apple.com/in/app/breathtrack/id6804558579',
      description:
        'BreathTrack helps COPD patients track vitals, symptoms, medications, and vaccinations while enabling doctors to monitor health, reports, and treatment adherence. Features real-time tracking for SpO2, forced vital capacity (FVC), inhaler dose reminders, and clinician ABG diagnostic reviews.',
      architecture:
        'Apple HealthKit Background Delivery · Secure REST Telehealth Integration · Interactive Vital Trend Graphing · Push Notification Dispatcher',
      qa:
        'Background HealthKit query battery impact testing · Clinician dashboard Selenium verification · Security penetration audits',
      stack: ['SwiftUI', 'HealthKit', 'Combine', 'REST APIs', 'Interactive Charts', 'Core Data'],
      github: false
    },
    {
      title: 'CoreCare',
      category: 'iOS · Digital Health & Wellness',
      filterTag: 'health',
      status: '● Live on App Store',
      icon: '🌿',
      appIcon: corecareIcon,
      screenshots: [corecareScreen1, corecareScreen2, corecareScreen3, corecareScreen4],
      rating: '★ 5.0 (Cardiology)',
      version: 'v2.4 (Production)',
      gradient: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)',
      accentColor: '#10b981',
      src: 'https://apps.apple.com/in/app/corecare/id6753789920',
      description:
        'CoreCare is an all-in-one wellness companion designed to simplify daily cardiovascular tracking and wellness routines. Features comprehensive modules for BPM telemetry, blood pressure monitoring, and instant clinician PDF reporting.',
      architecture:
        'Offline-First Core Data Persistence · Combine Reactive Binding · Modular Micro-Feature Architecture · Dark Mode HIG Design',
      qa:
        'Core Data schema migration testing · Automated regression test suites · Memory footprint profiling under continuous session loops',
      stack: ['SwiftUI', 'Combine', 'Core Data', 'HealthKit', 'PDFKit', 'Apple HIG'],
      github: false
    },
    {
      title: 'HairJourneyTracker',
      category: 'iOS · Health & Lifestyle · PhotosUI',
      filterTag: 'health',
      status: '● Live on App Store',
      icon: '✨',
      appIcon: hairjourneyIcon,
      screenshots: [hairjourneyScreen1, hairjourneyScreen2, hairjourneyScreen3, hairjourneyScreen4, hairjourneyScreen5, hairjourneyScreen6],
      rating: '★ 5.0 (Research)',
      version: 'v1.8 (Latest Release)',
      gradient: 'linear-gradient(135deg, #4a044e 0%, #701a75 50%, #c026d3 100%)',
      accentColor: '#c026d3',
      src: 'https://apps.apple.com/in/app/hairjourneytracker/id6760697820',
      description:
        'HairJourneyTracker is a visual regimen companion allowing users to record high-resolution photographic milestones, analyze hair growth trends over time, evaluate treatment efficacy, and receive scheduled regimen notifications.',
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
    { label: 'All Projects', value: 'all' },
    { label: ' Live on App Store', value: 'live' },
    { label: 'Enterprise & Telemetry', value: 'enterprise' },
    { label: 'Health & Medical AI', value: 'health' }
  ];

  const filteredProjects = projectList.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'live') return item.status && item.status.includes('Live');
    return item.filterTag === filter;
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
          Experience native iOS applications running with real-time animated telemetry inside the iPhone 18 Pro Max chassis, paired with deep architecture specs.
        </p>
      </div>

      {/* Featured Interactive Apple Device Studio */}
      <IPhoneAppStudio
        activeAppIndex={studioAppIndex}
        setActiveAppIndex={setStudioAppIndex}
      />

      {/* Project Library Header & Filters */}
      <div style={{ marginTop: '70px', marginBottom: '28px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', margin: '0 0 10px 0' }}>
          Production iOS Portfolio
        </h3>
        <p style={{ color: 'var(--text-secondary)', margin: '0 0 24px 0', fontSize: '0.95rem' }}>
          Explore full technical write-ups, architecture patterns, and automated QA verification for each published build.
        </p>

        {/* Filter Pills */}
        <div style={{ display: 'inline-flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filterTabs.map((tab) => {
            const isActive = filter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                style={{
                  padding: '7px 18px',
                  borderRadius: '20px',
                  border: isActive ? '1px solid var(--apple-blue)' : '1px solid var(--border-subtle)',
                  backgroundColor: isActive ? 'var(--apple-blue)' : 'var(--bg-card)',
                  color: isActive ? '#ffffff' : 'var(--text-primary)',
                  boxShadow: isActive ? '0 4px 14px var(--apple-blue-glow)' : '0 2px 6px rgba(0, 0, 0, 0.04)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
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
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
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
              appIcon={data.appIcon}
              screenshots={data.screenshots}
              rating={data.rating}
              version={data.version}
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
