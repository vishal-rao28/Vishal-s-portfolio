import * as React from 'react';
import DialogProjects from './DialogProjects';

function Projects() {
  const projectList = [
    {
      title: 'Viana 360',
      category: 'iOS & iPadOS · Institutional Telemetry',
      status: '● Live on App Store',
      icon: '📊',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0284c7 100%)',
      src: 'https://apps.apple.com/in/app/viana-360/id6760163659',
      description:
        'A comprehensive institutional application for iPhone and iPad designed for real-time monitoring and advanced data visualization across enterprise streams.',
      architecture:
        'Clean MVVM Architecture · Combine Reactive State Management · Adaptive iPadOS SplitView · Real-time REST Data Ingestion',
      qa:
        'Selenium & Appium automated UI flows · High-load endpoint latency benchmarking · Network fault tolerance validation',
      stack: ['SwiftUI', 'UIKit', 'Combine', 'Swift Charts', 'REST APIs', 'iPadOS'],
      github: false
    },
    {
      title: 'Smart Ulcer Predictor',
      category: 'iOS · Medical AI · Core ML',
      status: '● Live on App Store',
      icon: '🔬',
      gradient: 'linear-gradient(135deg, #09203f 0%, #164e63 50%, #0d9488 100%)',
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
      status: '● Live on App Store',
      icon: '🫁',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
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
      status: '● Live on App Store',
      icon: '🌿',
      gradient: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)',
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
      status: '● Live on App Store',
      icon: '✨',
      gradient: 'linear-gradient(135deg, #4a044e 0%, #701a75 50%, #c026d3 100%)',
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
      status: '● Production Tested',
      icon: '🚌',
      gradient: 'linear-gradient(135deg, #78350f 0%, #b45309 50%, #f59e0b 100%)',
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

  return (
    <div id="projects" style={{ marginTop: '80px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.4rem', margin: 0 }}>
          Projects <strong style={{ color: '#006AFF' }}>.</strong>
        </h1>
        <p
          className="cartoonText"
          style={{ fontSize: '1.4rem', color: '#006AFF', marginTop: '6px' }}
        >
          ~ 5 Production Applications Live on the Apple App Store ~
        </p>
      </div>

      <div
        className="projectsDiv"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          padding: '0 10px'
        }}
      >
        {projectList.map((data, index) => {
          return (
            <DialogProjects
              key={index}
              title={data.title}
              category={data.category}
              status={data.status}
              icon={data.icon}
              gradient={data.gradient}
              src={data.src}
              description={data.description}
              architecture={data.architecture}
              qa={data.qa}
              stack={data.stack}
              github={data.github}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
