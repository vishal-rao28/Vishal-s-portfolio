import React, { useState, useEffect } from 'react';

// Official App Store Icons
import vianaIcon from '../assets/img/viana/app_icon.jpg';
import smartulcerIcon from '../assets/img/smartulcer/app_icon.jpg';
import breathtrackIcon from '../assets/img/breathtrack/app_icon.jpg';
import corecareIcon from '../assets/img/corecare/app_icon.jpg';
import hairjourneyIcon from '../assets/img/hairjourney/app_icon.jpg';

// Viana 360 Screenshots
import vianaScreen1 from '../assets/img/viana/screen1.webp';
import vianaScreen2 from '../assets/img/viana/screen2.webp';
import vianaScreen3 from '../assets/img/viana/screen3.webp';
import vianaScreen4 from '../assets/img/viana/screen4.webp';
import vianaScreen5 from '../assets/img/viana/screen5.webp';

// Smart Ulcer Predictor Screenshots
import smartulcerScreen1 from '../assets/img/smartulcer/screen1.webp';
import smartulcerScreen2 from '../assets/img/smartulcer/screen2.webp';
import smartulcerScreen3 from '../assets/img/smartulcer/screen3.webp';
import smartulcerScreen4 from '../assets/img/smartulcer/screen4.webp';
import smartulcerScreen5 from '../assets/img/smartulcer/screen5.webp';

// BreathTrack Screenshots
import breathtrackScreen1 from '../assets/img/breathtrack/screen1.webp';
import breathtrackScreen2 from '../assets/img/breathtrack/screen2.webp';
import breathtrackScreen3 from '../assets/img/breathtrack/screen3.webp';
import breathtrackScreen4 from '../assets/img/breathtrack/screen4.webp';
import breathtrackScreen5 from '../assets/img/breathtrack/screen5.webp';
import breathtrackScreen6 from '../assets/img/breathtrack/screen6.webp';

// CoreCare Screenshots
import corecareScreen1 from '../assets/img/corecare/screen1.webp';
import corecareScreen2 from '../assets/img/corecare/screen2.webp';
import corecareScreen3 from '../assets/img/corecare/screen3.webp';
import corecareScreen4 from '../assets/img/corecare/screen4.webp';

// HairJourneyTracker Screenshots
import hairjourneyScreen1 from '../assets/img/hairjourney/screen1.webp';
import hairjourneyScreen2 from '../assets/img/hairjourney/screen2.webp';
import hairjourneyScreen3 from '../assets/img/hairjourney/screen3.webp';
import hairjourneyScreen4 from '../assets/img/hairjourney/screen4.webp';
import hairjourneyScreen5 from '../assets/img/hairjourney/screen5.webp';
import hairjourneyScreen6 from '../assets/img/hairjourney/screen6.webp';

const portfolioApps = [
  {
    id: 'viana360',
    title: 'Viana 360',
    developer: 'Viana Soft',
    category: 'Business · Institutional Enterprise',
    status: '● Live on App Store',
    isLive: true,
    appStoreUrl: 'https://apps.apple.com/in/app/viana-360/id6760163659',
    iconImg: vianaIcon,
    accentColor: '#0284c7',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0284c7 100%)',
    meta: {
      ratings: '4.4',
      ratingsCount: '13 Ratings',
      stars: '★★★★☆',
      age: '18+',
      ageUnit: 'Years',
      category: 'Business',
      categorySub: 'Enterprise',
      developer: 'Viana Soft',
      developerSub: 'Verified Dev',
      language: 'EN',
      languageSub: 'English',
      size: '24.8',
      sizeUnit: 'MB',
      compatibility: 'iPhone, iPad',
      tagline: 'Secure employee app for attendance, leave, claims, and work management.'
    },
    screens: [
      { id: 'v1', num: '01', title: 'Login & Access', subtitle: 'Bio ID & Password Authentication', tag: 'Authentication', image: vianaScreen1 },
      { id: 'v2', num: '02', title: 'Employee Workspace', subtitle: 'Pending Approvals & Shift Roster', tag: 'Dashboard', image: vianaScreen2 },
      { id: 'v3', num: '03', title: 'Biometric History', subtitle: 'Daily In/Out Logs & Status Records', tag: 'Attendance', image: vianaScreen3 },
      { id: 'v4', num: '04', title: 'Personalized Theme', subtitle: 'Custom Wallpaper Background View', tag: 'HIG Customization', image: vianaScreen4 },
      { id: 'v5', num: '05', title: 'System Preferences', subtitle: 'Profile, Financials & Grievance Modules', tag: 'Settings', image: vianaScreen5 }
    ],
    description:
      'Viana 360 is the comprehensive official enterprise mobile platform developed for Saveetha Institute of Medical and Technical Sciences (SIMATS) by Viana Soft. Live on the App Store to streamline everyday institutional workforce management, GPS-geofenced attendance clock-ins, instant leave submissions, automated expense claims, and real-time campus-wide push circulars.',
    architecture:
      'Clean MVVM Architecture · Combine Reactive State Management · Adaptive iPadOS SplitView · Real-time REST Data Ingestion · CoreLocation Geofencing · APNs Broadcast Dispatcher',
    qa:
      'Selenium & Appium automated UI flows · High-load endpoint latency benchmarking · GPS boundary edge tolerance validation',
    stack: ['SwiftUI', 'UIKit', 'Combine', 'CoreLocation', 'APNs Push', 'REST APIs', 'iPadOS'],
    specs: {
      target: 'iPhone 18 Pro Max & iPadOS Universal',
      minIOS: 'iOS 16.0+',
      architecture: 'MVVM + Combine Reactive Streams',
      qaStatus: 'Appium & Selenium Verified'
    }
  },
  {
    id: 'smartulcer',
    title: 'Smart Ulcer Predictor',
    developer: 'Saveetha Institute of Medical & Technical Sciences',
    category: 'Medical · On-Device Clinical AI',
    status: '● Live on App Store',
    isLive: true,
    appStoreUrl: 'https://apps.apple.com/in/app/smart-ulcer-predictor/id6755873140',
    iconImg: smartulcerIcon,
    accentColor: '#0d9488',
    gradient: 'linear-gradient(135deg, #09203f 0%, #164e63 50%, #0d9488 100%)',
    meta: {
      ratings: '5.0',
      ratingsCount: 'Verified Clinical',
      stars: '★★★★★',
      age: '13+',
      ageUnit: 'Years',
      category: 'Medical',
      categorySub: 'Clinical AI',
      developer: 'Saveetha Institute',
      developerSub: 'SIMATS Medical',
      language: 'EN',
      languageSub: 'English',
      size: '24.6',
      sizeUnit: 'MB',
      compatibility: 'iPhone, iPad',
      tagline: 'AI-powered medical support tool using deep learning to predict skin ulcer stages (Healing, Not Healing, Normal Skin).'
    },
    screens: [
      { id: 'u1', num: '01', title: 'Detection Gateway', subtitle: 'Check Your Feet Stop Ulcers Early', tag: 'Welcome', image: smartulcerScreen1 },
      { id: 'u2', num: '02', title: 'Patient Portal', subtitle: 'Hello, Loki · Ready to Scan Dashboard', tag: 'Dashboard', image: smartulcerScreen2 },
      { id: 'u3', num: '03', title: 'Clinical Guide', subtitle: 'Wound Assessment Guide & Staging', tag: 'Diagnostics', image: smartulcerScreen3 },
      { id: 'u4', num: '04', title: 'Vision Scanner', subtitle: 'Live Camera Capture & Gallery Upload', tag: 'Core ML Vision', image: smartulcerScreen4 },
      { id: 'u5', num: '05', title: 'Patient History', subtitle: 'Longitudinal Skin Healing Logs', tag: 'Medical Records', image: smartulcerScreen5 }
    ],
    description:
      'Smart Ulcer Predictor is an AI-powered clinical decision-support mobile application employing deep learning computer vision on-device to evaluate skin ulcer imagery (Granulation, Slough, Necrotic, Epithelialisation) with sub-second inference.',
    architecture:
      'On-device Apple Neural Engine (ANE) Inference · Core ML Model Quantization · Vision Framework Pre-processing · HIPAA-conscious Local Pipeline',
    qa:
      'Confusion matrix & model accuracy benchmarking · Memory leak validation during image capture · Extreme lighting tolerance tests',
    stack: ['Core ML', 'Vision Framework', 'SwiftUI', 'Deep Learning', 'Convolutional Nets', 'Apple Neural Engine'],
    specs: {
      target: 'Apple Neural Engine & iPhone 18 Pro Max',
      minIOS: 'iOS 16.0+',
      architecture: 'Core ML Quantized CNN + Vision',
      qaStatus: 'Clinical Accuracy & Leak Benchmarked'
    }
  },
  {
    id: 'breathtrack',
    title: 'BreathTrack',
    developer: 'Saveetha University',
    category: 'Medical · COPD Management & Telehealth',
    status: '● Live on App Store',
    isLive: true,
    appStoreUrl: 'https://apps.apple.com/in/app/breathtrack/id6804558579',
    iconImg: breathtrackIcon,
    accentColor: '#4338ca',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
    meta: {
      ratings: '5.0',
      ratingsCount: 'Clinical Trial',
      stars: '★★★★★',
      age: '4+',
      ageUnit: 'Years',
      category: 'Medical',
      categorySub: 'Telehealth',
      developer: 'Saveetha Univ',
      developerSub: 'Pulmonary Care',
      language: 'EN',
      languageSub: 'English',
      size: '28.2',
      sizeUnit: 'MB',
      compatibility: 'iPhone, iPad',
      tagline: 'Collaborative COPD management platform bridging pulmonary patients with clinical teams for vital tracking and adherence.'
    },
    screens: [
      { id: 'b1', num: '01', title: 'Pulmonary Gateway', subtitle: 'COPD Management & Daily Monitoring', tag: 'Welcome', image: breathtrackScreen1 },
      { id: 'b2', num: '02', title: 'Main Dashboard', subtitle: 'Medical Checkup & Treatment Plans', tag: 'Dashboard', image: breathtrackScreen2 },
      { id: 'b3', num: '03', title: 'Health Checkup', subtitle: 'Body Temperature & Vital Monitoring (98.4°F)', tag: 'HealthKit Vitals', image: breathtrackScreen3 },
      { id: 'b4', num: '04', title: 'My Reminders', subtitle: 'Inhaler Reminders & Vaccine Alerts', tag: 'Medication', image: breathtrackScreen4 },
      { id: 'b5', num: '05', title: 'Clinical Analysis', subtitle: 'Anthropometrics & Pulmonary Assessment', tag: 'Analytics', image: breathtrackScreen5 },
      { id: 'b6', num: '06', title: 'COPD Questionnaire', subtitle: 'Validated Health Symptoms Questionnaire', tag: 'Survey', image: breathtrackScreen6 }
    ],
    description:
      'BreathTrack helps COPD patients track vitals, symptoms, medications, and vaccinations while enabling doctors to monitor health, reports, and treatment adherence. Features real-time tracking for SpO2, forced vital capacity (FVC), inhaler dose reminders, and clinician ABG diagnostic reviews.',
    architecture:
      'Apple HealthKit Background Delivery · Secure REST Telehealth Integration · Interactive Vital Trend Graphing · Push Notification Dispatcher',
    qa:
      'Background HealthKit query battery impact testing · Clinician dashboard Selenium verification · Security penetration audits',
    stack: ['SwiftUI', 'HealthKit', 'Combine', 'REST APIs', 'Interactive Charts', 'Core Data'],
    specs: {
      target: 'Apple HealthKit & iPhone 18 Pro Max',
      minIOS: 'iOS 16.0+',
      architecture: 'HealthKit Background Delivery + REST',
      qaStatus: 'Battery & Penetration Audited'
    }
  },
  {
    id: 'corecare',
    title: 'CoreCare',
    developer: 'Saveetha University',
    category: 'Health & Fitness · Cardiac Analytics',
    status: '● Live on App Store',
    isLive: true,
    appStoreUrl: 'https://apps.apple.com/in/app/corecare/id6753789920',
    iconImg: corecareIcon,
    accentColor: '#10b981',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)',
    meta: {
      ratings: '5.0',
      ratingsCount: 'Top Rated',
      stars: '★★★★★',
      age: '4+',
      ageUnit: 'Years',
      category: 'Health',
      categorySub: 'Cardiac Care',
      developer: 'Saveetha Univ',
      developerSub: 'Wellness Lab',
      language: 'EN',
      languageSub: 'English',
      size: '22.4',
      sizeUnit: 'MB',
      compatibility: 'iPhone, iPad',
      tagline: 'All-in-one wellness companion for tracking cardiac analytics, blood pressure, and PDF report generation.'
    },
    screens: [
      { id: 'c1', num: '01', title: 'Cardiac Analytics', subtitle: 'Avg BPM 77 & Blood Pressure 107/63', tag: 'Cardiology', image: corecareScreen1 },
      { id: 'c2', num: '02', title: 'Export Health Data', subtitle: 'Professional Healthcare PDF Reports', tag: 'PDF Generation', image: corecareScreen2 },
      { id: 'c3', num: '03', title: 'Secure Authentication', subtitle: 'Biometric Login & Encryption Gateway', tag: 'Biometrics', image: corecareScreen3 },
      { id: 'c4', num: '04', title: 'Privacy & Security', subtitle: 'Medical Data Protection & Local Storage', tag: 'Data Privacy', image: corecareScreen4 }
    ],
    description:
      'CoreCare is an all-in-one wellness companion designed to simplify daily cardiovascular tracking and wellness routines. Features comprehensive modules for BPM telemetry, blood pressure monitoring, and instant clinician PDF reporting.',
    architecture:
      'Offline-First Core Data Persistence · Combine Reactive Binding · Modular Micro-Feature Architecture · Dark Mode HIG Design',
    qa:
      'Core Data schema migration testing · Automated regression test suites · Memory footprint profiling under continuous session loops',
    stack: ['SwiftUI', 'Combine', 'Core Data', 'HealthKit', 'PDFKit', 'Apple HIG'],
    specs: {
      target: 'Offline-First Core Data & iPhone 18 Pro Max',
      minIOS: 'iOS 16.0+',
      architecture: 'Modular SwiftUI + Combine',
      qaStatus: 'Core Data Schema Migration Tested'
    }
  },
  {
    id: 'hairjourney',
    title: 'HairJourneyTracker',
    developer: 'Saveetha University',
    category: 'Lifestyle · Health & Habit Tracking',
    status: '● Live on App Store',
    isLive: true,
    appStoreUrl: 'https://apps.apple.com/in/app/hairjourneytracker/id6760697820',
    iconImg: hairjourneyIcon,
    accentColor: '#c026d3',
    gradient: 'linear-gradient(135deg, #4a044e 0%, #701a75 50%, #c026d3 100%)',
    meta: {
      ratings: '5.0',
      ratingsCount: 'Student Thesis',
      stars: '★★★★★',
      age: '4+',
      ageUnit: 'Years',
      category: 'Lifestyle',
      categorySub: 'Habit Tracker',
      developer: 'Saveetha Univ',
      developerSub: 'Academic Research',
      language: 'EN',
      languageSub: 'English',
      size: '25.1',
      sizeUnit: 'MB',
      compatibility: 'iPhone, iPad',
      tagline: 'Track hair care routines and wellness habits, set daily reminders, and connect with mentors.'
    },
    screens: [
      { id: 'h1', num: '01', title: 'Regimen Dashboard', subtitle: 'Good Afternoon, john · Weekly Momentum', tag: 'Habits', image: hairjourneyScreen1 },
      { id: 'h2', num: '02', title: 'Hair Journey AI', subtitle: 'Interactive 24/7 Scalp Health Assistant', tag: 'AI Chat', image: hairjourneyScreen2 },
      { id: 'h3', num: '03', title: 'Serum Calendar', subtitle: 'Serum & Habit Tracker Monthly Calendar', tag: 'Compliance', image: hairjourneyScreen3 },
      { id: 'h4', num: '04', title: 'Scalp Assessment', subtitle: 'Diagnostic Scalp Classification Questionnaire', tag: 'Assessment', image: hairjourneyScreen4 },
      { id: 'h5', num: '05', title: 'Specialist Workspace', subtitle: 'Expert Hari · Member Portfolios & Schedule', tag: 'Mentor Desk', image: hairjourneyScreen5 },
      { id: 'h6', num: '06', title: 'Appointment Requests', subtitle: 'Consultation Desk · Pending & Approved', tag: 'Consultations', image: hairjourneyScreen6 }
    ],
    description:
      'HairJourneyTracker is a visual regimen companion allowing users to record high-resolution photographic milestones, analyze hair growth trends over time, evaluate treatment efficacy, and receive scheduled regimen notifications.',
    architecture:
      'PhotosUI Modern Photo Picker · Asynchronous Image Compression Pipeline · Local Core Data Photo Cache · UserNotifications Framework',
    qa:
      'High-res image memory spike profiling · Scheduled notifications background delivery testing · UI rendering smoothness tests',
    stack: ['SwiftUI', 'PhotosUI', 'Core Data', 'UserNotifications', 'Combine'],
    specs: {
      target: 'PhotosUI & iPhone 18 Pro Max',
      minIOS: 'iOS 16.0+',
      architecture: 'Async Image Pipeline + Core Data',
      qaStatus: 'Zero Memory Spike Profiling'
    }
  }
];

function IPhoneAppStudio({ activeAppIndex: externalIndex, setActiveAppIndex: externalSetIndex }) {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeAppIndex = externalIndex !== undefined ? externalIndex : internalIndex;
  const setActiveAppIndex = externalSetIndex !== undefined ? externalSetIndex : setInternalIndex;

  // Active Screen Index & View Mode
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [viewMode, setViewMode] = useState('appstore'); // 'appstore' (panoramic suite) or 'studio' (focused iPhone 18 Pro Max)

  // Reset screen index when switching apps
  useEffect(() => {
    setActiveScreenIndex(0);
  }, [activeAppIndex]);

  const currentApp = portfolioApps[activeAppIndex] || portfolioApps[0];
  const screens = currentApp.screens || [];

  return (
    <div id="iphone-studio" style={{ marginTop: '20px', marginBottom: '60px', scrollMarginTop: '100px' }}>
      {/* App Switcher Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '32px'
        }}
      >
        {portfolioApps.map((app, idx) => {
          const isSelected = activeAppIndex === idx;
          return (
            <button
              key={app.id}
              onClick={() => setActiveAppIndex(idx)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '30px',
                backgroundColor: isSelected ? 'var(--apple-blue)' : 'var(--bg-card)',
                border: `1px solid ${isSelected ? 'var(--apple-blue)' : 'var(--border-subtle)'}`,
                color: isSelected ? '#ffffff' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.86rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: isSelected ? '0 4px 18px var(--apple-blue-glow)' : '0 2px 6px rgba(0, 0, 0, 0.04)'
              }}
            >
              <img
                src={app.iconImg}
                alt={app.title}
                className="studio-tab-icon-img"
                style={{ width: 20, height: 20, borderRadius: 5, objectFit: 'cover' }}
              />
              <span>{app.title}</span>
              {app.isLive && (
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: '#30D158'
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* OFFICIAL APP STORE PANORAMIC SUITE CONTAINER */}
      <div className="appstore-suite-container">
        {/* App Store Top Header Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '18px',
            marginBottom: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img
              src={currentApp.iconImg}
              alt={currentApp.title}
              className="studio-current-app-icon-img"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                border: '1px solid var(--border-subtle)',
                boxShadow: `0 8px 24px ${currentApp.accentColor}55`
              }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  App Store for iPhone &amp; iPad
                </span>
                <span
                  style={{
                    fontSize: '0.64rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: 12,
                    backgroundColor: 'rgba(48, 209, 88, 0.2)',
                    color: '#30d158',
                    border: '1px solid rgba(48, 209, 88, 0.4)'
                  }}
                >
                  {currentApp.status}
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', margin: '2px 0 0 0', color: 'var(--text-primary)', fontWeight: 800 }}>
                {currentApp.title}
              </h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--apple-cyan, #0284c7)', fontWeight: 600 }}>
                {currentApp.developer} · {currentApp.category}
              </span>
            </div>
          </div>

          {/* Panoramic Devices Badge */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                backgroundColor: 'rgba(10, 132, 255, 0.1)',
                border: '1px solid rgba(10, 132, 255, 0.25)',
                color: 'var(--apple-blue)',
                fontSize: '0.8rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6
              }}
            >
              <span>📱 Panoramic Devices Suite</span>
            </span>
          </div>
        </div>

        {/* Official App Store Metadata Specs Bar */}
        <div className="appstore-meta-bar">
          <div className="appstore-meta-item">
            <span className="appstore-meta-label">{currentApp.meta.ratingsCount}</span>
            <span className="appstore-meta-value">{currentApp.meta.ratings}</span>
            <span className="appstore-meta-sub">{currentApp.meta.stars}</span>
          </div>
          <div style={{ width: 1, height: 36, background: 'var(--border-subtle)' }} />

          <div className="appstore-meta-item">
            <span className="appstore-meta-label">Age Rating</span>
            <span className="appstore-meta-value">{currentApp.meta.age}</span>
            <span className="appstore-meta-sub">{currentApp.meta.ageUnit}</span>
          </div>
          <div style={{ width: 1, height: 36, background: 'var(--border-subtle)' }} />

          <div className="appstore-meta-item">
            <span className="appstore-meta-label">Category</span>
            <span className="appstore-meta-value">{currentApp.meta.category}</span>
            <span className="appstore-meta-sub">{currentApp.meta.categorySub}</span>
          </div>
          <div style={{ width: 1, height: 36, background: 'var(--border-subtle)' }} />

          <div className="appstore-meta-item">
            <span className="appstore-meta-label">Developer</span>
            <span className="appstore-meta-value" style={{ fontSize: '0.94rem' }}>{currentApp.meta.developer}</span>
            <span className="appstore-meta-sub">{currentApp.meta.developerSub}</span>
          </div>
          <div style={{ width: 1, height: 36, background: 'var(--border-subtle)' }} />

          <div className="appstore-meta-item">
            <span className="appstore-meta-label">Language</span>
            <span className="appstore-meta-value">{currentApp.meta.language}</span>
            <span className="appstore-meta-sub">{currentApp.meta.languageSub}</span>
          </div>
          <div style={{ width: 1, height: 36, background: 'var(--border-subtle)' }} />

          <div className="appstore-meta-item">
            <span className="appstore-meta-label">Size</span>
            <span className="appstore-meta-value">{currentApp.meta.size}</span>
            <span className="appstore-meta-sub">{currentApp.meta.sizeUnit}</span>
          </div>
        </div>

        {/* VIEW MODE 1: EXACT APP STORE IPHONE 18 PRO MAX PANORAMIC ROW */}
        {viewMode === 'appstore' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Exact App Store Screens Layout ({screens.length} Devices Row)
              </span>
              <span style={{ fontSize: '0.74rem', color: 'var(--apple-blue)' }}>
                Scroll horizontally ➔ or click any phone to focus
              </span>
            </div>

            {/* Panoramic Devices Row */}
            <div className="appstore-screens-row">
              {screens.map((s, idx) => {
                const isSelected = activeScreenIndex === idx;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`appstore-iphone-card ${isSelected ? 'active' : ''}`}
                  >
                    <div className="appstore-iphone-frame">
                      <div className="iphone-glare" />
                      <div className="appstore-iphone-screen">
                        <img src={s.image} alt={s.title} />
                      </div>
                    </div>

                    <div className="appstore-screen-caption">
                      <div className="appstore-screen-num">{s.num} · {s.tag}</div>
                      <div className="appstore-screen-title">{s.title}</div>
                      <div className="appstore-screen-sub">{s.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* App Store Subtitle & Action Bar */}
            <div
              style={{
                marginTop: '16px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: '0.76rem', color: 'var(--apple-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Device Target:
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    {currentApp.meta.compatibility} Universal
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '0.94rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                  "{currentApp.meta.tagline}"
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <a href={currentApp.appStoreUrl} target="_blank" rel="noopener noreferrer">
                  <button className="btn-primary">
                    <svg width="15" height="15" viewBox="0 0 170 170" fill="currentColor">
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.31-6.19-9.35-11.1-19.98-14.75-31.91-3.64-11.92-5.46-23.2-5.46-33.84 0-14.89 3.63-27.1 10.89-36.63 7.26-9.53 16.53-14.41 27.81-14.65 5.12 0 10.51 1.25 16.17 3.75 5.66 2.5 9.38 3.75 11.16 3.75 1.56 0 5.4-1.31 11.53-3.92 6.13-2.61 11.63-3.75 16.51-3.41 12.63.76 22.84 5.22 30.63 13.38-11.01 6.64-16.37 15.79-16.08 27.46.29 9.17 3.86 16.92 10.72 23.24 6.86 6.32 15.01 10.02 24.45 11.1-2.07 6.13-4.63 12.78-7.69 19.95z"/>
                    </svg>
                    <span>Download on App Store</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* VIEW MODE 2: DUAL COLUMN SINGLE IPHONE 18 PRO MAX STUDIO DEEP DIVE */}
      {viewMode === 'studio' && (
        <div
          className="glass-card studio-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 360px) minmax(0, 1fr)',
            gap: '48px',
            alignItems: 'center',
            padding: '36px',
            borderRadius: '24px'
          }}
        >
          {/* Left Column: iPhone 18 Pro Max Chassis */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div className="iphone-chassis floating-device">
              <div className="iphone-btn-action" title="Action Button" />
              <div className="iphone-btn-vol-up" title="Volume Up" />
              <div className="iphone-btn-vol-down" title="Volume Down" />
              <div className="iphone-btn-power" title="Side Button" />
              <div className="iphone-btn-camera" title="Camera Control (Capacitive Sapphire Button)" />

              <div className="iphone-screen">
                <div className="iphone-glare" />

                {/* Inside Screen: Render the exact original screenshot fitted perfectly */}
                <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#000000', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {screens[activeScreenIndex] && (
                      <img
                        key={activeScreenIndex}
                        src={screens[activeScreenIndex].image}
                        alt={screens[activeScreenIndex].title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          display: 'block',
                          animation: 'vianaSlideFade 0.35s ease'
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls under iPhone 18 Pro Max */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: '100%', maxWidth: '330px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 8 }}>
                <button
                  onClick={() => setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : screens.length - 1))}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 8,
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  ◀ Prev
                </button>

                <span style={{ fontSize: '0.78rem', color: 'var(--apple-blue)', fontWeight: 700, textAlign: 'center' }}>
                  {screens[activeScreenIndex] ? `${screens[activeScreenIndex].num} / 0${screens.length} · ${screens[activeScreenIndex].title}` : ''}
                </span>

                <button
                  onClick={() => setActiveScreenIndex((prev) => (prev < screens.length - 1 ? prev + 1 : 0))}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 8,
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Next ▶
                </button>
              </div>

              {/* Indicator Dots */}
              <div style={{ display: 'flex', gap: 6 }}>
                {screens.map((s, idx) => (
                  <div
                    key={s.id}
                    onClick={() => setActiveScreenIndex(idx)}
                    style={{
                      width: idx === activeScreenIndex ? 18 : 6,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: idx === activeScreenIndex ? 'var(--apple-blue)' : 'var(--border-subtle)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Details & Technical Specifications */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <img
                src={currentApp.iconImg}
                alt={currentApp.title}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: `0 8px 24px ${currentApp.accentColor}55`,
                  flexShrink: 0
                }}
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: 20,
                      backgroundColor: currentApp.isLive ? 'rgba(48, 209, 88, 0.2)' : 'rgba(255, 159, 10, 0.2)',
                      color: currentApp.isLive ? '#30d158' : '#ff9f0a',
                      border: `1px solid ${currentApp.isLive ? 'rgba(48, 209, 88, 0.4)' : 'rgba(255, 159, 10, 0.4)'}`
                    }}
                  >
                    {currentApp.status}
                  </span>

                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: 20,
                      backgroundColor: 'rgba(251, 191, 36, 0.15)',
                      color: '#fbbf24',
                      border: '1px solid rgba(251, 191, 36, 0.35)'
                    }}
                  >
                    ★ {currentApp.meta.ratings} ({currentApp.meta.ratingsCount})
                  </span>
                </div>

                <h3 style={{ fontSize: '2.2rem', margin: 0, color: 'var(--text-primary)', fontWeight: 800 }}>
                  {currentApp.title}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.68', marginBottom: '20px' }}>
              {currentApp.description}
            </p>

            {/* Technical Specifications Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '12px',
                marginBottom: '20px'
              }}
            >
              <div style={{ background: 'var(--bg-card)', padding: '12px 14px', borderRadius: 10, border: '1px solid var(--border-subtle)', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                  Device Target
                </span>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600, marginTop: 4 }}>
                  {currentApp.specs.target}
                </div>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '12px 14px', borderRadius: 10, border: '1px solid var(--border-subtle)', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                  Architecture
                </span>
                <div style={{ fontSize: '0.9rem', color: 'var(--apple-blue)', fontWeight: 600, marginTop: 4 }}>
                  {currentApp.specs.architecture}
                </div>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '12px 14px', borderRadius: 10, border: '1px solid var(--border-subtle)', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                  Quality Verification
                </span>
                <div style={{ fontSize: '0.9rem', color: 'var(--apple-green, #248a3d)', fontWeight: 600, marginTop: 4 }}>
                  {currentApp.specs.qaStatus}
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, display: 'block', marginBottom: 8 }}>
                Native Technology Stack
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {currentApp.stack.map((tech, idx) => (
                  <span key={idx} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              {currentApp.appStoreUrl && currentApp.appStoreUrl.startsWith('http') && (
                <a href={currentApp.appStoreUrl} target="_blank" rel="noopener noreferrer">
                  <button className="btn-primary">
                    <svg width="15" height="15" viewBox="0 0 170 170" fill="currentColor">
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.31-6.19-9.35-11.1-19.98-14.75-31.91-3.64-11.92-5.46-23.2-5.46-33.84 0-14.89 3.63-27.1 10.89-36.63 7.26-9.53 16.53-14.41 27.81-14.65 5.12 0 10.51 1.25 16.17 3.75 5.66 2.5 9.38 3.75 11.16 3.75 1.56 0 5.4-1.31 11.53-3.92 6.13-2.61 11.63-3.75 16.51-3.41 12.63.76 22.84 5.22 30.63 13.38-11.01 6.64-16.37 15.79-16.08 27.46.29 9.17 3.86 16.92 10.72 23.24 6.86 6.32 15.01 10.02 24.45 11.1-2.07 6.13-4.63 12.78-7.69 19.95z"/>
                    </svg>
                    <span>Download on App Store</span>
                  </button>
                </a>
              )}

              <button
                onClick={() => setViewMode('appstore')}
                className="btn-secondary"
                style={{
                  padding: '12px 18px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer'
                }}
              >
                <span>View Full Panoramic Suite</span>
                <span>➔</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .studio-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default IPhoneAppStudio;
