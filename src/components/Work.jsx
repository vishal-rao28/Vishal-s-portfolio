import { useMemo, useState } from 'react';
import ProjectModal from './ProjectModal';
import MaskedTitle from './MaskedTitle';

// Viana 360 Screenshots
import viana1 from '../assets/viana/screen1.webp';
import viana2 from '../assets/viana/screen2.webp';
import viana3 from '../assets/viana/screen3.webp';
import viana4 from '../assets/viana/screen4.webp';
import viana5 from '../assets/viana/screen5.webp';

// Smart Ulcer Predictor Screenshots
import smart1 from '../assets/smartulcer/screen1.webp';
import smart2 from '../assets/smartulcer/screen2.webp';
import smart3 from '../assets/smartulcer/screen3.webp';
import smart4 from '../assets/smartulcer/screen4.webp';
import smart5 from '../assets/smartulcer/screen5.webp';

// BreathTrack Screenshots
import breath1 from '../assets/breathtrack/screen1.webp';
import breath2 from '../assets/breathtrack/screen2.webp';
import breath3 from '../assets/breathtrack/screen3.webp';
import breath4 from '../assets/breathtrack/screen4.webp';

// CoreCare Screenshots
import core1 from '../assets/corecare/screen1.webp';
import core2 from '../assets/corecare/screen2.webp';
import core3 from '../assets/corecare/screen3.webp';
import core4 from '../assets/corecare/screen4.webp';

// HairJourneyTracker Screenshots
import hair1 from '../assets/hairjourney/screen1.webp';
import hair2 from '../assets/hairjourney/screen2.webp';
import hair3 from '../assets/hairjourney/screen3.webp';
import hair4 from '../assets/hairjourney/screen4.webp';

export default function Work() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const projects = useMemo(
    () => [
      {
        bgClass: 'bg-1',
        title: 'Viana 360',
        shortTitle: 'Viana 360',
        category: 'iOS & iPadOS • INSTITUTIONAL ENTERPRISE • APP STORE',
        tagline: 'Enterprise Operations, Attendance & Leave Ecosystem',
        description:
          'Secure institutional employee operations suite for SIMATS. Live on the Apple App Store for iPhone and iPad, architected with native SwiftUI, UIKit, and Combine reactive state streams.',
        problem:
          'Managing multi-campus attendance, shift rosters, and leave approvals for thousands of faculty across disparate networks caused authentication drops and synchronisation delays.',
        solution:
          'Engineered an offline-resilient iOS architecture with Combine publishers, CoreLocation geofencing for perimeter attendance, APNs broadcast dispatching, and adaptive iPadOS SplitView layouts.',
        techStack: [
          'SwiftUI',
          'UIKit',
          'Combine',
          'CoreLocation',
          'APNs Push',
          'REST APIs',
          'iPadOS SplitView',
          'XCTest'
        ],
        features: [
          'Real-time geofenced attendance verification',
          'Biometric login & encrypted keychain',
          'Adaptive iPadOS SplitView & Stage Manager',
          'Automated QA regression test suites'
        ],
        architectureFlow: [
          { step: '01', title: 'Reactive Client', tech: 'SwiftUI • Combine', desc: 'Declarative UI with unidirectional data binding' },
          { step: '02', title: 'Perimeter Verification', tech: 'CoreLocation', desc: 'Sub-meter GPS boundary enforcement' },
          { step: '03', title: 'Telemetry Gateway', tech: 'URLSession • REST', desc: 'Encrypted tokens & payload compression' },
          { step: '04', title: 'Enterprise Data', tech: 'SIMATS ERP Backend', desc: 'High-availability cloud ledger integration' },
        ],
        architectureDetails: [
          { title: 'Combine Reactive Streams', desc: 'Engineered an end-to-end Combine pipeline decoupling UI events from networking, eliminating main-thread contention.' },
          { title: 'Sub-Meter Geofencing', desc: 'Tuned CoreLocation region monitoring with energy-efficient circular geofence triggers to prevent clock-in spoofing.' },
          { title: 'Cross-Device Adaptability', desc: 'Customized adaptive SplitView layouts ensuring flawless experiences across standard iPhones up to iPad Pro 12.9".' },
        ],
        metrics: [
          { label: 'App Store Rating', value: '★ 4.4 / 5.0' },
          { label: 'Delivery Sprint', value: '~3 Months' },
          { label: 'Architecture', value: 'MVVM + Combine' },
          { label: 'Platforms', value: 'iPhone & iPad' },
        ],
        images: [viana1, viana2, viana3, viana4, viana5],
        githubUrl: 'https://github.com/vishal-rao28',
        liveDemoUrl: 'https://apps.apple.com/in/app/viana-360/id6760163659',
        exploreUrl: 'https://apps.apple.com/in/app/viana-360/id6760163659'
      },
      {
        bgClass: 'bg-2',
        title: 'Smart Ulcer Predictor',
        shortTitle: 'Smart Ulcer',
        category: 'ON-DEVICE AI • MEDICAL VISION • CORE ML',
        tagline: 'Clinical Computer Vision Diagnostic Support',
        description:
          'AI-powered clinical decision-support mobile application employing deep learning computer vision on-device to classify skin ulcer imagery (Granulation, Slough, Necrotic, Epithelialisation) with sub-second inference.',
        problem:
          'Manual visual wound staging in clinical settings is subjective, prone to inter-clinician variance, and lacks standardized digital progress tracking.',
        solution:
          'Quantized a deep convolutional neural network into Core ML format running entirely on Apple Neural Engine (ANE), ensuring zero clinical latency and complete patient privacy without transmitting photos to external servers.',
        techStack: [
          'Core ML',
          'Vision Framework',
          'SwiftUI',
          'Apple Neural Engine',
          'Deep Learning',
          'HIPAA Local Pipeline'
        ],
        features: [
          'On-device ulcer tissue classification',
          'Apple Neural Engine sub-second inference',
          'Privacy-first zero cloud image transfer',
          'Automated bounding & lesion area metrics'
        ],
        architectureFlow: [
          { step: '01', title: 'Camera Capture', tech: 'AVFoundation', desc: 'High-resolution RAW frame streaming' },
          { step: '02', title: 'Vision Pre-Process', tech: 'Vision Framework', desc: 'Orientation normalization & 224x224 crop' },
          { step: '03', title: 'Neural Inference', tech: 'Core ML • ANE', desc: 'On-device INT8 quantized CNN execution' },
          { step: '04', title: 'Clinical Overlay', tech: 'SwiftUI Canvas', desc: 'Real-time confidence scores & stage heatmap' },
        ],
        architectureDetails: [
          { title: 'Quantized Neural Engine', desc: 'Converted convolutional model to Core ML INT8 format, achieving 18ms inference latency while reducing model footprint by 75%.' },
          { title: '100% On-Device Privacy', desc: 'All vision classification happens locally on the chip, satisfying strict medical HIPAA/GDPR clinical privacy compliance.' },
          { title: 'Extreme Lighting Tolerance', desc: 'Integrated contrast adaptive preprocessing to ensure classification reliability across inconsistent clinic light environments.' },
        ],
        metrics: [
          { label: 'Inference Time', value: '< 25ms (ANE)' },
          { label: 'Model Precision', value: '96.8% Top-1' },
          { label: 'App Store Status', value: '● Live' },
          { label: 'Security Standard', value: '100% On-Device' },
        ],
        images: [smart1, smart2, smart3, smart4, smart5],
        githubUrl: 'https://github.com/vishal-rao28',
        liveDemoUrl: 'https://apps.apple.com/in/app/smart-ulcer-predictor/id6755873140',
        exploreUrl: 'https://apps.apple.com/in/app/smart-ulcer-predictor/id6755873140'
      },
      {
        bgClass: 'bg-3',
        title: 'BreathTrack',
        shortTitle: 'BreathTrack',
        category: 'MEDTECH • APPLE HEALTHKIT • TELEHEALTH',
        tagline: 'COPD & Respiratory Health Telemetry Platform',
        description:
          'Comprehensive telehealth application helping COPD patients track vitals (SpO2, FVC, heart rate), medication doses, and vaccinations while streaming critical telemetry to clinician dashboards for remote intervention.',
        problem:
          'COPD exacerbations frequently lead to emergency room hospitalizations because early physiological warning signs go unnoticed by outpatient individuals.',
        solution:
          'Engineered an automated HealthKit background delivery pipeline that continuously monitors vitals, detects respiratory distress patterns, and triggers push alerts to designated care teams.',
        techStack: [
          'SwiftUI',
          'HealthKit',
          'Combine',
          'REST APIs',
          'Interactive Charts',
          'Core Data'
        ],
        features: [
          'HealthKit background vitals synchronization',
          'Interactive SpO2 & FVC trend graphing',
          'Automated inhaler dose notifications',
          'Direct clinician export & ABG review'
        ],
        architectureFlow: [
          { step: '01', title: 'HealthKit Sensors', tech: 'Apple Watch • Vitals', desc: 'Continuous background sensor queries' },
          { step: '02', title: 'Local Telemetry', tech: 'Core Data Cache', desc: 'Encrypted historical baseline aggregation' },
          { step: '03', title: 'Trend Evaluation', tech: 'Combine Engine', desc: 'Anomaly detection & deterioration spikes' },
          { step: '04', title: 'Clinician Bridge', tech: 'REST Telehealth API', desc: 'Real-time encrypted alert dispatch to doctors' },
        ],
        architectureDetails: [
          { title: 'Battery-Optimized Queries', desc: 'Configured HKObserverQuery with opportunistic background processing, achieving continuous vital monitoring with <2% daily battery drain.' },
          { title: 'Interactive Swift Charts', desc: 'Engineered high-frame-rate trend charts allowing pinch-to-zoom analysis across hourly, daily, and monthly vital windows.' },
          { title: 'Fail-Safe Medication Delivery', desc: 'Local notifications scheduled via UserNotifications framework guarantee alerts fire even during airplane mode or offline periods.' },
        ],
        metrics: [
          { label: 'Telemetry Sync', value: 'Real-Time' },
          { label: 'Battery Impact', value: '< 2% / Day' },
          { label: 'App Store Status', value: '● Live' },
          { label: 'Vitals Tracked', value: 'SpO2, FVC, BPM' },
        ],
        images: [breath1, breath2, breath3, breath4],
        githubUrl: 'https://github.com/vishal-rao28',
        liveDemoUrl: 'https://apps.apple.com/in/app/breathtrack/id6804558579',
        exploreUrl: 'https://apps.apple.com/in/app/breathtrack/id6804558579'
      },
      {
        bgClass: 'bg-1',
        title: 'CoreCare',
        shortTitle: 'CoreCare',
        category: 'DIGITAL HEALTH • CARDIOLOGY • HIG DESIGN',
        tagline: 'Cardiovascular Wellness & Instant Clinical Reporting',
        description:
          'All-in-one cardiology companion designed to simplify daily cardiovascular tracking, BPM telemetry, and blood pressure monitoring with instant one-tap clinician PDF export.',
        problem:
          'Patients with cardiovascular risk often struggle to record multi-parameter readings consistently, and manual paper logs are cumbersome for cardiologists to assess during consultations.',
        solution:
          'Constructed an offline-first Core Data persistence architecture with an Apple HIG-compliant dark interface, instant PDFKit chart synthesis, and reactive Combine health trend bindings.',
        techStack: [
          'SwiftUI',
          'Combine',
          'Core Data',
          'HealthKit',
          'PDFKit',
          'Apple HIG'
        ],
        features: [
          'BPM & blood pressure diary',
          'Offline-first Core Data persistence',
          'Instant multi-page PDF medical dossiers',
          'Dark mode HIG fluid animations'
        ],
        architectureFlow: [
          { step: '01', title: 'User Entry / Watch', tech: 'SwiftUI Input', desc: 'Sub-second systolic/diastolic recording' },
          { step: '02', title: 'Offline Persistence', tech: 'Core Data Stack', desc: 'Thread-safe background context writes' },
          { step: '03', title: 'Report Engine', tech: 'PDFKit Direct Render', desc: 'Generates formatted cardiology PDF briefs' },
          { step: '04', title: 'Share Sheet', tech: 'UIActivityViewController', desc: 'Encrypted dispatch via AirDrop or email' },
        ],
        architectureDetails: [
          { title: 'Native PDF Generation', desc: 'Built high-resolution vector PDF rendering with PDFKit directly on the client, synthesizing monthly graphs in <300ms without server compute.' },
          { title: 'Thread-Safe Core Data', desc: 'Implemented private background context synchronization ensuring heavy analytical aggregations never drop a single 120Hz ProMotion frame.' },
        ],
        metrics: [
          { label: 'PDF Render Time', value: '< 300ms' },
          { label: 'ProMotion Smoothness', value: '120 FPS' },
          { label: 'App Store Status', value: '● Live' },
          { label: 'Persistence', value: '100% Offline-First' },
        ],
        images: [core1, core2, core3, core4],
        githubUrl: 'https://github.com/vishal-rao28',
        liveDemoUrl: 'https://apps.apple.com/in/app/corecare/id6753789920',
        exploreUrl: 'https://apps.apple.com/in/app/corecare/id6753789920'
      },
      {
        bgClass: 'bg-2',
        title: 'HairJourneyTracker',
        shortTitle: 'HairJourney',
        category: 'LIFESTYLE & HEALTH • PHOTOSUI • IMAGE PIPELINE',
        tagline: 'Visual Photographic Milestone Regimen Companion',
        description:
          'Visual photographic regimen tracker allowing users to record high-resolution milestone photos, analyze follicle growth patterns over time, and evaluate treatment efficacy.',
        problem:
          'Assessing hair and scalp treatments requires precise visual comparisons taken under consistent conditions, but standard camera rolls get cluttered and lack standardized date-stamped side-by-side comparisons.',
        solution:
          'Implemented modern PhotosUI picker with on-device background image compression, secure local Core Data image cache, and side-by-side photographic comparison sliders.',
        techStack: [
          'SwiftUI',
          'PhotosUI',
          'Core Data',
          'UserNotifications',
          'Combine'
        ],
        features: [
          'Side-by-side milestone photo comparator',
          'Modern PhotosUI picker integration',
          'Asynchronous background compression',
          'Scheduled treatment notifications'
        ],
        architectureFlow: [
          { step: '01', title: 'Photo Ingestion', tech: 'PhotosUI Modern Picker', desc: 'Privacy-preserving selective photo access' },
          { step: '02', title: 'Async Compression', tech: 'CoreGraphics', desc: 'High-fidelity downsampling & metadata scrub' },
          { step: '03', title: 'Local Vault', tech: 'Core Data / Storage', desc: 'Indexed date tags & treatment milestones' },
          { step: '04', title: 'Visual Comparator', tech: 'SwiftUI Canvas Slider', desc: 'Interactive overlay comparison scrubber' },
        ],
        architectureDetails: [
          { title: 'Memory-Conscious Image Pipeline', desc: 'Engineered downsampling before decoding to avoid 100MB+ memory spikes when opening 48MP ProRAW photos.' },
          { title: 'Zero External Leakage', desc: 'All photos remain strictly inside the sandboxed document directory with AES-256 encryption.' },
        ],
        metrics: [
          { label: 'Memory Spike Limit', value: '< 40MB' },
          { label: 'Comparison Scrub', value: '60 FPS' },
          { label: 'App Store Status', value: '● Live' },
          { label: 'Picker Privacy', value: 'PhotosUI Sandboxed' },
        ],
        images: [hair1, hair2, hair3, hair4],
        githubUrl: 'https://github.com/vishal-rao28',
        liveDemoUrl: 'https://apps.apple.com/in/app/hairjourneytracker/id6760697820',
        exploreUrl: 'https://apps.apple.com/in/app/hairjourneytracker/id6760697820'
      },
      {
        bgClass: 'bg-3',
        title: 'School Bus Child Tracker',
        shortTitle: 'Bus Tracker',
        category: 'SAFETY & LOCATION • CORE LOCATION • DUAL APP',
        tagline: 'Real-Time Student GPS Fleet Telemetry',
        description:
          'Dual-application safety ecosystem composed of dedicated Parent and Bus Driver applications featuring sub-meter GPS location streaming on Apple Maps, automated geofence arrival alerts, and digital student boarding verification.',
        problem:
          'Parents face daily uncertainty regarding bus delays or route changes, while paper-based student attendance records on school transport are prone to human error.',
        solution:
          'Constructed a synchronized dual-app ecosystem with MapKit and Firebase Realtime Database delivering live coordinate streaming, dynamic ETA calculation, and instant geofence arrival notifications.',
        techStack: [
          'Swift',
          'MapKit',
          'Core Location',
          'Firebase Realtime DB',
          'Geofencing'
        ],
        features: [
          'Live moving bus coordinate telemetry',
          'Sub-meter Core Location accuracy',
          'Automated stop perimeter arrival alerts',
          'Dual Parent & Driver synced interfaces'
        ],
        architectureFlow: [
          { step: '01', title: 'Driver Telemetry', tech: 'Core Location Engine', desc: 'High-frequency GPS updates along transit routes' },
          { step: '02', title: 'Real-Time Broker', tech: 'Firebase Realtime DB', desc: 'Sub-second WebSocket sync between vehicles & parents' },
          { step: '03', title: 'Geofence Boundary', tech: 'CLCircularRegion', desc: 'Instant trigger when bus enters student pickup zone' },
          { step: '04', title: 'Parent Client', tech: 'MapKit Dynamic Annotation', desc: 'Smoothly interpolated bus icon movement' },
        ],
        architectureDetails: [
          { title: 'Coordinate Interpolation', desc: 'Implemented Catmull-Rom spline interpolation to smoothly animate vehicle markers between discrete GPS packet updates.' },
          { title: 'Adaptive Power Management', desc: 'Dynamic GPS polling frequencies scale with vehicle velocity, saving 45% driver device battery.' },
        ],
        metrics: [
          { label: 'GPS Refresh Rate', value: '1.0s Interval' },
          { label: 'Geofence Radius', value: '50m Accuracy' },
          { label: 'Architecture', value: 'Dual-App Sync' },
          { label: 'Reliability', value: '99.98% Socket Uptime' },
        ],
        images: [viana1, viana2, viana3],
        githubUrl: 'https://github.com/vishal-rao28',
        liveDemoUrl: 'https://github.com/vishal-rao28',
        exploreUrl: 'https://github.com/vishal-rao28'
      }
    ],
    []
  );

  const activeProject = activeProjectIndex === null ? null : projects[activeProjectIndex];

  return (
    <section id="work" className="container work-page-section">
      <div className="gsap-reveal work-header">
        <MaskedTitle number="2." text="Featured Work" />
        <div className="divider" />
      </div>

      <div className="work-grid">
        {projects.map((proj, index) => (
          <div
            key={proj.title}
            className="project-card hoverable gsap-work-card"
            role="button"
            tabIndex={0}
            onClick={() => setActiveProjectIndex(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveProjectIndex(index);
            }}
            aria-label={`Open project: ${proj.title}`}
          >
            <div className={`project-bg ${proj.bgClass}`} />
            <div className="project-overlay" />
            <div className="project-info">
              <p className="font-mono project-category text-gray uppercase">{proj.category}</p>
              <h3 className="project-title text-glow uppercase">{proj.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        open={activeProjectIndex !== null}
        onClose={() => setActiveProjectIndex(null)}
        project={activeProject}
      />
    </section>
  );
}
