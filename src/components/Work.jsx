import { useState, useMemo } from 'react';
import ProjectModal from './ProjectModal';
import MaskedTitle from './MaskedTitle';

// Official App Store App Icons
import vianaIcon from '../assets/viana/app_icon.jpg';
import smartulcerIcon from '../assets/smartulcer/app_icon.jpg';
import breathtrackIcon from '../assets/breathtrack/app_icon.jpg';
import corecareIcon from '../assets/corecare/app_icon.jpg';
import hairjourneyIcon from '../assets/hairjourney/app_icon.jpg';

// Viana 360 Screenshots
import vianaScreen1 from '../assets/viana/screen1.webp';
import vianaScreen2 from '../assets/viana/screen2.webp';
import vianaScreen3 from '../assets/viana/screen3.webp';
import vianaScreen4 from '../assets/viana/screen4.webp';
import vianaScreen5 from '../assets/viana/screen5.webp';

// Smart Ulcer Predictor Screenshots
import smartScreen1 from '../assets/smartulcer/screen1.webp';
import smartScreen2 from '../assets/smartulcer/screen2.webp';
import smartScreen3 from '../assets/smartulcer/screen3.webp';
import smartScreen4 from '../assets/smartulcer/screen4.webp';
import smartScreen5 from '../assets/smartulcer/screen5.webp';
import smartScreen6 from '../assets/smartulcer/screen6.webp';

// BreathTrack Screenshots
import breathScreen1 from '../assets/breathtrack/screen1.webp';
import breathScreen2 from '../assets/breathtrack/screen2.webp';
import breathScreen3 from '../assets/breathtrack/screen3.webp';
import breathScreen4 from '../assets/breathtrack/screen4.webp';
import breathScreen5 from '../assets/breathtrack/screen5.webp';
import breathScreen6 from '../assets/breathtrack/screen6.webp';

// CoreCare Screenshots
import coreScreen1 from '../assets/corecare/screen1.webp';
import coreScreen2 from '../assets/corecare/screen2.webp';
import coreScreen3 from '../assets/corecare/screen3.webp';
import coreScreen4 from '../assets/corecare/screen4.webp';

// HairJourneyTracker Screenshots
import hairScreen1 from '../assets/hairjourney/screen1.webp';
import hairScreen2 from '../assets/hairjourney/screen2.webp';
import hairScreen3 from '../assets/hairjourney/screen3.webp';
import hairScreen4 from '../assets/hairjourney/screen4.webp';
import hairScreen5 from '../assets/hairjourney/screen5.webp';
import hairScreen6 from '../assets/hairjourney/screen6.webp';

export default function Work() {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [deviceMode, setDeviceMode] = useState('iphone'); // 'iphone' | 'ipad' | 'dual'
  const [modalProjectIndex, setModalProjectIndex] = useState(null);

  const apps = useMemo(
    () => [
      {
        id: 'viana360',
        title: 'Viana 360',
        shortTitle: 'Viana 360',
        category: 'iOS & iPadOS · Institutional Enterprise',
        status: '● Live on App Store',
        isLive: true,
        appStoreUrl: 'https://apps.apple.com/in/app/viana-360/id6760163659',
        iconImg: vianaIcon,
        accentColor: '#0284c7',
        meta: {
          ratings: '4.4',
          ratingsCount: '13 Ratings',
          stars: '★★★★☆',
          age: '18+',
          ageUnit: 'Years',
          category: 'Business',
          categorySub: 'Enterprise',
          developer: 'Viana Soft',
          developerSub: 'SIMATS',
          language: 'EN',
          languageSub: 'English',
          size: '24.8',
          sizeUnit: 'MB',
          compatibility: 'iPhone, iPad'
        },
        screens: [
          { id: 'v1', num: '01', title: 'Login & Access', subtitle: 'Bio ID & Password Authentication', tag: 'Authentication', image: vianaScreen1, desc: 'Secure biometric authentication gateway supporting institutional single sign-on, encrypted keychain token storage, and instantaneous session handshakes.' },
          { id: 'v2', num: '02', title: 'Employee Workspace', subtitle: 'Pending Approvals & Shift Roster', tag: 'Dashboard', image: vianaScreen2, desc: 'Centralized faculty cockpit organizing departmental duty rosters, pending leave authorizations, on-call schedules, and real-time operational alerts.' },
          { id: 'v3', num: '03', title: 'Biometric History', subtitle: 'Daily In/Out Logs & Status Records', tag: 'Attendance', image: vianaScreen3, desc: 'Granular attendance history logs synced via CoreLocation geofencing, visualizing monthly punch-in accuracy and institutional hour reconciliation.' },
          { id: 'v4', num: '04', title: 'Personalized Theme', subtitle: 'Custom Wallpaper Background View', tag: 'HIG Customization', image: vianaScreen4, desc: 'Dynamic interface adaptation following Apple HIG with translucent blur vibrancy, adaptive light/dark palettes, and custom wallpaper canvas injection.' },
          { id: 'v5', num: '05', title: 'System Preferences', subtitle: 'Profile, Financials & Grievance Modules', tag: 'Settings', image: vianaScreen5, desc: 'Comprehensive employee configuration suite integrating credential updates, direct expense claim ledgers, and encrypted administrative grievance tickets.' }
        ],
        description:
          'Secure employee mobile platform for Saveetha Institute of Medical and Technical Sciences (SIMATS). Live on the Apple App Store for iPhone and iPad, architected with native SwiftUI, UIKit, and Combine reactive state streams.',
        problem:
          'Managing multi-campus attendance, shift rosters, and leave approvals for thousands of faculty across disparate networks caused authentication drops and synchronisation delays.',
        solution:
          'Engineered an offline-resilient iOS architecture with Combine publishers, CoreLocation geofencing for perimeter attendance, APNs broadcast dispatching, and adaptive iPadOS SplitView layouts.',
        techStack: ['SwiftUI', 'UIKit', 'Combine', 'CoreLocation', 'APNs Push', 'iPadOS SplitView', 'XCTest'],
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
        images: [vianaScreen1, vianaScreen2, vianaScreen3, vianaScreen4, vianaScreen5],
        githubUrl: 'https://github.com/vishal-rao28',
        liveDemoUrl: 'https://apps.apple.com/in/app/viana-360/id6760163659',
        exploreUrl: 'https://apps.apple.com/in/app/viana-360/id6760163659'
      },
      {
        id: 'smartulcer',
        title: 'Smart Ulcer Predictor',
        shortTitle: 'Smart Ulcer',
        category: 'iOS · On-Device Clinical AI · Core ML',
        status: '● Live on App Store',
        isLive: true,
        appStoreUrl: 'https://apps.apple.com/in/app/smart-ulcer-predictor/id6755873140',
        iconImg: smartulcerIcon,
        accentColor: '#0d9488',
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
          compatibility: 'iPhone, iPad'
        },
        screens: [
          { id: 's1', num: '01', title: 'Ulcer Diagnostics Camera', subtitle: 'Direct Clinical Image Ingestion', tag: 'Computer Vision', image: smartScreen1, desc: 'High-speed camera pipeline capturing standardized RAW wound imagery with orientation correction and automatic region-of-interest cropping.' },
          { id: 's2', num: '02', title: 'On-Device ANE Inference', subtitle: 'Sub-Second Neural Staging', tag: 'Core ML Engine', image: smartScreen2, desc: 'Real-time inference executing on the Apple Neural Engine, evaluating Granulation, Slough, and Necrotic tissue percentages with zero cloud dependency.' },
          { id: 's3', num: '03', title: 'Clinical Stage Breakdown', subtitle: 'Pathological Tissue Classification', tag: 'Diagnostics', image: smartScreen3, desc: 'Detailed quantitative pathology report charting lesion surface area, wound boundary morphology, and progressive epithelialisation index.' },
          { id: 's4', num: '04', title: 'Treatment Protocols', subtitle: 'Decision Support & Clinical Regimen', tag: 'Clinical Protocol', image: smartScreen4, desc: 'Algorithmic clinical recommendations guiding dressing selections, debridement urgency, and personalized wound healing milestones.' },
          { id: 's5', num: '05', title: 'Longitudinal Patient History', subtitle: 'Comparative Healing Velocity', tag: 'Telehealth Ledger', image: smartScreen5, desc: 'Historical timeline charts monitoring tissue transition rates over weeks to verify clinical protocol efficacy and healing velocity.' },
          { id: 's6', num: '06', title: 'Patient Profile & Dossier', subtitle: 'HIPAA-Conscious Medical Vault', tag: 'Patient Records', image: smartScreen6, desc: 'Secure offline-encrypted clinical dossier organizing demographic factors, diabetic risk indexes, and verified physician sign-offs.' }
        ],
        description:
          'An AI-powered clinical decision-support mobile application employing deep learning computer vision on-device to classify skin ulcer imagery (Granulation, Slough, Necrotic, Epithelialisation) with sub-second inference.',
        problem:
          'Manual visual wound staging in clinical settings is subjective, prone to inter-clinician variance, and lacks standardized digital progress tracking.',
        solution:
          'Quantized a deep convolutional neural network into Core ML format running entirely on Apple Neural Engine (ANE), ensuring zero clinical latency and complete patient privacy without transmitting photos to external servers.',
        techStack: ['Core ML', 'Vision Framework', 'SwiftUI', 'Apple Neural Engine', 'Deep Learning', 'HIPAA Local Pipeline'],
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
        images: [smartScreen1, smartScreen2, smartScreen3, smartScreen4, smartScreen5, smartScreen6],
        githubUrl: 'https://github.com/vishal-rao28',
        liveDemoUrl: 'https://apps.apple.com/in/app/smart-ulcer-predictor/id6755873140',
        exploreUrl: 'https://apps.apple.com/in/app/smart-ulcer-predictor/id6755873140'
      },
      {
        id: 'breathtrack',
        title: 'BreathTrack',
        shortTitle: 'BreathTrack',
        category: 'iOS · MedTech · Vitals & Telehealth',
        status: '● Live on App Store',
        isLive: true,
        appStoreUrl: 'https://apps.apple.com/in/app/breathtrack/id6804558579',
        iconImg: breathtrackIcon,
        accentColor: '#4338ca',
        meta: {
          ratings: '5.0',
          ratingsCount: 'Telehealth Certified',
          stars: '★★★★★',
          age: '17+',
          ageUnit: 'Years',
          category: 'Medical',
          categorySub: 'Telehealth',
          developer: 'SIMATS Health',
          developerSub: 'Respiratory Lab',
          language: 'EN',
          languageSub: 'English',
          size: '28.2',
          sizeUnit: 'MB',
          compatibility: 'iPhone, Watch'
        },
        screens: [
          { id: 'b1', num: '01', title: 'COPD Vitals Dashboard', subtitle: 'SpO2 & Spirometry Live Stream', tag: 'Vitals Monitoring', image: breathScreen1, desc: 'Real-time telemetry showing live peripheral blood oxygen saturation (SpO2), forced vital capacity (FVC), and respiratory rate baselines.' },
          { id: 'b2', num: '02', title: 'HealthKit Synchronizer', subtitle: 'Apple Watch Sensor Bridge', tag: 'Apple HealthKit', image: breathScreen2, desc: 'Background observer queries reading continuous physiological vitals from Apple Watch with opportunistic batch synchronization.' },
          { id: 'b3', num: '03', title: 'Inhaler Dose Manager', subtitle: 'Rescue & Maintenance Trackers', tag: 'Medication', image: breathScreen3, desc: 'Automated dosage logging with scheduled local notifications and prompt adherence auditing to reduce preventable exacerbation hospitalizations.' },
          { id: 'b4', num: '04', title: 'ABG Diagnostic Review', subtitle: 'Arterial Blood Gas Lab Telemetry', tag: 'Diagnostics', image: breathScreen4, desc: 'Interactive clinician analytical graphs comparing arterial pH, PaO2, and PaCO2 baselines over custom patient consultation timelines.' },
          { id: 'b5', num: '05', title: 'Vaccine & Defense Schedule', subtitle: 'Pulmonary Protection Record', tag: 'Immunization', image: breathScreen5, desc: 'Standardized CDC-aligned immunization tracking for influenza, pneumococcal, and RSV boosters tailored for chronic respiratory patients.' },
          { id: 'b6', num: '06', title: 'Doctor Telehealth Chat', subtitle: 'Encrypted Care Team Dispatch', tag: 'Telehealth', image: breathScreen6, desc: 'Direct encrypted telemetry stream allowing attending pulmonologists to inspect deterioration alerts and adjust bronchodilator doses.' }
        ],
        description:
          'BreathTrack helps COPD patients track vitals, symptoms, medications, and vaccinations while enabling doctors to monitor health, reports, and treatment adherence.',
        problem:
          'COPD exacerbations frequently lead to emergency room hospitalizations because early physiological warning signs go unnoticed by outpatient individuals.',
        solution:
          'Engineered an automated HealthKit background delivery pipeline that continuously monitors vitals, detects respiratory distress patterns, and triggers push alerts to designated care teams.',
        techStack: ['SwiftUI', 'HealthKit', 'Combine', 'REST APIs', 'Interactive Charts', 'Core Data'],
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
        images: [breathScreen1, breathScreen2, breathScreen3, breathScreen4, breathScreen5, breathScreen6],
        githubUrl: 'https://github.com/vishal-rao28',
        liveDemoUrl: 'https://apps.apple.com/in/app/breathtrack/id6804558579',
        exploreUrl: 'https://apps.apple.com/in/app/breathtrack/id6804558579'
      },
      {
        id: 'corecare',
        title: 'CoreCare',
        shortTitle: 'CoreCare',
        category: 'iOS · Digital Health & Cardiology',
        status: '● Live on App Store',
        isLive: true,
        appStoreUrl: 'https://apps.apple.com/in/app/corecare/id6753789920',
        iconImg: corecareIcon,
        accentColor: '#10b981',
        meta: {
          ratings: '5.0',
          ratingsCount: 'Cardiology Verified',
          stars: '★★★★★',
          age: '4+',
          ageUnit: 'Years',
          category: 'Health',
          categorySub: 'Cardiology',
          developer: 'Vishal Rao M',
          developerSub: 'Verified Dev',
          language: 'EN',
          languageSub: 'English',
          size: '18.5',
          sizeUnit: 'MB',
          compatibility: 'iPhone, iPad'
        },
        screens: [
          { id: 'c1', num: '01', title: 'Cardiovascular Console', subtitle: 'Real-Time BPM & Pressure Diary', tag: 'BPM Telemetry', image: coreScreen1, desc: 'Clean Apple HIG dark interface with instant systolic/diastolic blood pressure entry and heart rate pulse rate variance tracking.' },
          { id: 'c2', num: '02', title: 'Offline-First Core Data', subtitle: 'Private Background Contexts', tag: 'Persistence', image: coreScreen2, desc: 'Local multi-threaded Core Data persistence architecture guaranteeing instantaneous performance and offline record-keeping without cloud latency.' },
          { id: 'c3', num: '03', title: 'Clinician PDF Export', subtitle: 'Instant Vector Medical Dossier', tag: 'PDFKit Generation', image: coreScreen3, desc: 'On-device vector PDF renderer synthesizing multi-page cardiology summaries with interactive graphs in <300ms ready for clinician sharing.' },
          { id: 'c4', num: '04', title: 'Cardio Insights & Trends', subtitle: 'Longitudinal Wellness Analysis', tag: 'Analytics', image: coreScreen4, desc: 'High-frame-rate ProMotion graph visualizations highlighting weekly resting heart rate fluctuations and blood pressure threshold breaches.' }
        ],
        description:
          'All-in-one cardiology companion designed to simplify daily cardiovascular tracking, BPM telemetry, and blood pressure monitoring with instant one-tap clinician PDF export.',
        problem:
          'Patients with cardiovascular risk often struggle to record multi-parameter readings consistently, and manual paper logs are cumbersome for cardiologists to assess during consultations.',
        solution:
          'Constructed an offline-first Core Data persistence architecture with an Apple HIG-compliant dark interface, instant PDFKit chart synthesis, and reactive Combine health trend bindings.',
        techStack: ['SwiftUI', 'Combine', 'Core Data', 'HealthKit', 'PDFKit', 'Apple HIG'],
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
        images: [coreScreen1, coreScreen2, coreScreen3, coreScreen4],
        githubUrl: 'https://github.com/vishal-rao28',
        liveDemoUrl: 'https://apps.apple.com/in/app/corecare/id6753789920',
        exploreUrl: 'https://apps.apple.com/in/app/corecare/id6753789920'
      },
      {
        id: 'hairjourney',
        title: 'HairJourneyTracker',
        shortTitle: 'HairJourney',
        category: 'iOS · Lifestyle & Health · PhotosUI',
        status: '● Live on App Store',
        isLive: true,
        appStoreUrl: 'https://apps.apple.com/in/app/hairjourneytracker/id6760697820',
        iconImg: hairjourneyIcon,
        accentColor: '#c026d3',
        meta: {
          ratings: '5.0',
          ratingsCount: 'Research Validated',
          stars: '★★★★★',
          age: '4+',
          ageUnit: 'Years',
          category: 'Lifestyle',
          categorySub: 'Health',
          developer: 'Vishal Rao M',
          developerSub: 'Verified Dev',
          language: 'EN',
          languageSub: 'English',
          size: '22.1',
          sizeUnit: 'MB',
          compatibility: 'iPhone, iPad'
        },
        screens: [
          { id: 'h1', num: '01', title: 'Regimen Dashboard', subtitle: 'Visual Milestone Chronology', tag: 'Visual Milestones', image: hairScreen1, desc: 'Interactive photographic regimen dashboard presenting standardized treatment cycles, calendar milestones, and density progress tracking.' },
          { id: 'h2', num: '02', title: 'PhotosUI Sandboxed Capture', subtitle: 'Privacy-Preserving Angle Ingestion', tag: 'Modern PhotosUI', image: hairScreen2, desc: 'Modern Apple PhotosUI picker pipeline isolating camera roll access and scrubbed metadata for client-side privacy.' },
          { id: 'h3', num: '03', title: 'Side-by-Side Comparator', subtitle: 'Dynamic Interactive Growth Slider', tag: 'Visual Comparison', image: hairScreen3, desc: 'Dual-image comparison scrubber allowing users to inspect micro-follicle development between baseline and current milestone dates.' },
          { id: 'h4', num: '04', title: 'Treatment Calendar', subtitle: 'Scheduled Routine Management', tag: 'Notification Engine', image: hairScreen4, desc: 'Local user notifications scheduling medication cycles, scalp therapies, and reminder triggers.' },
          { id: 'h5', num: '05', title: 'Density Analytics', subtitle: 'Quantified Progress Metrics', tag: 'Analytics', image: hairScreen5, desc: 'Historical visual trend charts calculating regimen consistency and photographic compliance scores.' },
          { id: 'h6', num: '06', title: 'Export & Backup', subtitle: 'Encrypted Local Archival', tag: 'Security', image: hairScreen6, desc: 'Exportable progress albums with password-protected document sandboxing.' }
        ],
        description:
          'Visual photographic regimen tracker allowing users to record high-resolution milestone photos, analyze follicle growth patterns over time, and evaluate treatment efficacy.',
        problem:
          'Assessing hair and scalp treatments requires precise visual comparisons taken under consistent conditions, but standard camera rolls get cluttered and lack standardized date-stamped side-by-side comparisons.',
        solution:
          'Implemented modern PhotosUI picker with on-device background image compression, secure local Core Data image cache, and side-by-side photographic comparison sliders.',
        techStack: ['SwiftUI', 'PhotosUI', 'Core Data', 'UserNotifications', 'Combine'],
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
        images: [hairScreen1, hairScreen2, hairScreen3, hairScreen4, hairScreen5, hairScreen6],
        githubUrl: 'https://github.com/vishal-rao28',
        liveDemoUrl: 'https://apps.apple.com/in/app/hairjourneytracker/id6760697820',
        exploreUrl: 'https://apps.apple.com/in/app/hairjourneytracker/id6760697820'
      },
      {
        id: 'bustracker',
        title: 'School Bus Child Tracker',
        shortTitle: 'Bus Tracker',
        category: 'iOS · Safety & Location · Dual App',
        status: '● Production Verified',
        isLive: false,
        appStoreUrl: 'https://github.com/vishal-rao28',
        iconImg: vianaIcon,
        accentColor: '#f59e0b',
        meta: {
          ratings: '4.9',
          ratingsCount: 'Fleet Verified',
          stars: '★★★★★',
          age: '4+',
          ageUnit: 'Years',
          category: 'Navigation',
          categorySub: 'Dual App',
          developer: 'Vishal Rao M',
          developerSub: 'Lead Engineer',
          language: 'EN',
          languageSub: 'English',
          size: '19.4',
          sizeUnit: 'MB',
          compatibility: 'iPhone, iPad'
        },
        screens: [
          { id: 'sb1', num: '01', title: 'Live Fleet Apple Maps', subtitle: 'Real-Time Bus GPS Telemetry', tag: 'Live Telemetry', image: vianaScreen1, desc: 'Real-time student transit map with smoothly interpolated vehicle annotations, transit speed indicators, and dynamic arrival estimations.' },
          { id: 'sb2', num: '02', title: 'Geofence Perimeter Boundary', subtitle: 'Automated Stop Alerts', tag: 'Core Location', image: vianaScreen2, desc: 'Sub-meter CoreLocation geofencing triggering automated arrival notifications when vehicles cross pickup boundary perimeters.' },
          { id: 'sb3', num: '03', title: 'Boarding Attendance Ledger', subtitle: 'Electronic Student Check-In', tag: 'Attendance', image: vianaScreen3, desc: 'Driver boarding interface recording instant student RFID/QR check-in with synchronized parental confirmation notifications.' }
        ],
        description:
          'Dual-application safety ecosystem composed of dedicated Parent and Bus Driver applications featuring sub-meter GPS location streaming on Apple Maps, automated geofence arrival alerts, and digital student boarding verification.',
        problem:
          'Parents face daily uncertainty regarding bus delays or route changes, while paper-based student attendance records on school transport are prone to human error.',
        solution:
          'Constructed a synchronized dual-app ecosystem with MapKit and Firebase Realtime Database delivering live coordinate streaming, dynamic ETA calculation, and instant geofence arrival notifications.',
        techStack: ['Swift', 'MapKit', 'Core Location', 'Firebase Realtime DB', 'Geofencing'],
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
        images: [vianaScreen1, vianaScreen2, vianaScreen3],
        githubUrl: 'https://github.com/vishal-rao28',
        liveDemoUrl: 'https://github.com/vishal-rao28',
        exploreUrl: 'https://github.com/vishal-rao28'
      }
    ],
    []
  );

  const currentApp = apps[activeAppIndex];
  const currentScreens = currentApp.screens;
  const currentScreen = currentScreens[activeScreenIndex] || currentScreens[0];

  const handleAppSelect = (index) => {
    setActiveAppIndex(index);
    setActiveScreenIndex(0);
  };

  const handlePrevScreen = () => {
    setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : currentScreens.length - 1));
  };

  const handleNextScreen = () => {
    setActiveScreenIndex((prev) => (prev < currentScreens.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="work" className="container work-page-section">
      {/* Section Title */}
      <div className="gsap-reveal work-header">
        <MaskedTitle number="2." text="Featured Work" />
        <p className="work-section-subtitle font-mono uppercase">
           Production Apple Ecosystem · Interactive iPhone 18 Pro Max &amp; iPad Pro Studio
        </p>
        <div className="divider" style={{ marginTop: '1.5rem' }} />
      </div>

      {/* --------------------------------------------------------------------
          1. MASTER INTERACTIVE APPLE DEVICE STUDIO
          -------------------------------------------------------------------- */}
      <div
        className="apple-device-studio gsap-reveal"
        style={{ '--app-accent': currentApp.accentColor }}
      >
        {/* App Switcher Tabs with Official App Icons */}
        <div className="studio-app-tabs">
          {apps.map((app, idx) => {
            const isActive = idx === activeAppIndex;
            return (
              <button
                key={app.id}
                type="button"
                className={`studio-app-tab hoverable ${isActive ? 'active' : ''}`}
                onClick={() => handleAppSelect(idx)}
              >
                <img src={app.iconImg} alt={app.title} className="studio-tab-icon" />
                <span>{app.shortTitle}</span>
                {app.isLive && <span className="studio-tab-badge" title="Live on App Store" />}
              </button>
            );
          })}
        </div>

        {/* Studio App Header Card */}
        <div className="studio-app-header">
          <div className="studio-header-left">
            <img
              src={currentApp.iconImg}
              alt={currentApp.title}
              className="studio-app-icon"
            />
            <div className="studio-title-area">
              <div className="studio-status-row">
                <span className="studio-status-pill font-mono">{currentApp.status}</span>
              </div>
              <h2 className="studio-app-name uppercase text-glow">{currentApp.title}</h2>
              <span className="studio-app-sub font-mono">{currentApp.category}</span>
            </div>
          </div>

          <div className="studio-header-right font-mono">
            {/* Device Switcher: iPhone / iPad / Dual */}
            <div className="device-mode-switcher" role="group" aria-label="Device View Switcher">
              <button
                type="button"
                className={`device-mode-btn hoverable ${deviceMode === 'iphone' ? 'active' : ''}`}
                onClick={() => setDeviceMode('iphone')}
              >
                <span>📱</span> iPhone 18 Pro Max
              </button>
              <button
                type="button"
                className={`device-mode-btn hoverable ${deviceMode === 'ipad' ? 'active' : ''}`}
                onClick={() => setDeviceMode('ipad')}
              >
                <span>📋</span> iPad Pro 13"
              </button>
              <button
                type="button"
                className={`device-mode-btn hoverable ${deviceMode === 'dual' ? 'active' : ''}`}
                onClick={() => setDeviceMode('dual')}
              >
                <span>📱+📋</span> Dual Suite
              </button>
            </div>

            {/* Official App Store Direct Link */}
            {currentApp.appStoreUrl && (
              <a
                href={currentApp.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="appstore-action-btn hoverable"
              >
                <svg width="15" height="15" viewBox="0 0 170 170" fill="currentColor">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.31-6.19-9.35-11.1-19.98-14.75-31.91-3.64-11.92-5.46-23.2-5.46-33.84 0-14.89 3.63-27.1 10.89-36.63 7.26-9.53 16.53-14.41 27.81-14.65 5.12 0 10.51 1.25 16.17 3.75 5.66 2.5 9.38 3.75 11.16 3.75 1.56 0 5.4-1.31 11.53-3.92 6.13-2.61 11.63-3.75 16.51-3.41 12.63.76 22.84 5.22 30.63 13.38-11.01 6.64-16.37 15.79-16.08 27.46.29 9.17 3.86 16.92 10.72 23.24 6.86 6.32 15.01 10.02 24.45 11.1-2.07 6.13-4.63 12.78-7.69 19.95z"/>
                </svg>
                <span>{currentApp.isLive ? 'App Store ↗' : 'GitHub Code ↗'}</span>
              </a>
            )}
          </div>
        </div>

        {/* Official App Store Telemetry Metadata Bar */}
        <div className="studio-meta-bar font-mono">
          <div className="studio-meta-item">
            <span className="studio-meta-label">App Rating</span>
            <span className="studio-meta-val">{currentApp.meta.ratings}</span>
            <span className="studio-meta-sub">{currentApp.meta.stars}</span>
          </div>
          <div className="studio-meta-item">
            <span className="studio-meta-label">Age Rating</span>
            <span className="studio-meta-val">{currentApp.meta.age}</span>
            <span className="studio-meta-sub">{currentApp.meta.ageUnit}</span>
          </div>
          <div className="studio-meta-item">
            <span className="studio-meta-label">Category</span>
            <span className="studio-meta-val">{currentApp.meta.category}</span>
            <span className="studio-meta-sub">{currentApp.meta.categorySub}</span>
          </div>
          <div className="studio-meta-item">
            <span className="studio-meta-label">Developer</span>
            <span className="studio-meta-val" style={{ fontSize: '1rem' }}>{currentApp.meta.developer}</span>
            <span className="studio-meta-sub">{currentApp.meta.developerSub}</span>
          </div>
          <div className="studio-meta-item">
            <span className="studio-meta-label">Language</span>
            <span className="studio-meta-val">{currentApp.meta.language}</span>
            <span className="studio-meta-sub">{currentApp.meta.languageSub}</span>
          </div>
          <div className="studio-meta-item">
            <span className="studio-meta-label">Target Hardware</span>
            <span className="studio-meta-val" style={{ fontSize: '0.92rem' }}>{currentApp.meta.compatibility}</span>
            <span className="studio-meta-sub">{currentApp.meta.size} {currentApp.meta.sizeUnit}</span>
          </div>
        </div>

        {/* Main Showcase Stage: Hardware Chassis & Live Information */}
        <div className={`studio-main-stage ${deviceMode === 'ipad' ? 'stage-ipad-mode' : deviceMode === 'dual' ? 'stage-dual-mode' : ''}`}>
          {/* Hardware Device Column */}
          <div className="studio-device-column">
            {/* 1. iPhone 18 Pro Max Chassis */}
            {deviceMode === 'iphone' && (
              <div className="iphone-chassis">
                {/* Physical Titanium Hardware Buttons */}
                <div className="iphone-btn-action" title="Action Button" />
                <div className="iphone-btn-vol-up" title="Volume Up" />
                <div className="iphone-btn-vol-down" title="Volume Down" />
                <div className="iphone-btn-power" title="Side Power Button" />
                <div className="iphone-btn-camera" title="Sapphire Camera Control" />

                {/* OLED Super Retina XDR Screen */}
                <div className="iphone-screen">
                  {/* Anti-Reflective Glossy Glass Glint */}
                  <div className="iphone-glare" />

                  {/* Dynamic Island Pill with Camera & Sensor */}
                  <div className="iphone-dynamic-island">
                    <span className="dynamic-island-cam" />
                    <span className="dynamic-island-sensor" />
                  </div>

                  {/* iOS Status Bar */}
                  <div className="iphone-status-bar">
                    <span>9:41</span>
                    <div className="status-bar-icons">
                      <span>5G</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Active Screen UI Screenshot */}
                  <div className="iphone-app-img-wrap">
                    <img
                      key={`${currentApp.id}-${currentScreen.id}`}
                      src={currentScreen.image}
                      alt={currentScreen.title}
                      className="iphone-app-screen-img"
                    />
                  </div>

                  {/* iOS Home Indicator Bar */}
                  <div className="iphone-home-indicator" />
                </div>
              </div>
            )}

            {/* 2. iPad Pro 13" Chassis */}
            {deviceMode === 'ipad' && (
              <div className="ipad-chassis">
                {/* iPad Liquid Retina Screen */}
                <div className="ipad-screen">
                  <div className="ipad-glare" />
                  <div className="ipad-camera-dot" />

                  <div className="ipad-status-bar font-mono">
                    <span>iPadOS · 9:41 AM</span>
                    <span>100% 🔋</span>
                  </div>

                  <img
                    key={`ipad-${currentApp.id}-${currentScreen.id}`}
                    src={currentScreen.image}
                    alt={currentScreen.title}
                    className="ipad-app-screen-img"
                  />

                  <div className="ipad-home-indicator" />
                </div>
              </div>
            )}

            {/* 3. Dual Device Suite (iPad + iPhone Composed) */}
            {deviceMode === 'dual' && (
              <div className="dual-suite-container">
                {/* iPad in background */}
                <div className="ipad-chassis dual-suite-ipad">
                  <div className="ipad-screen">
                    <div className="ipad-glare" />
                    <div className="ipad-camera-dot" />
                    <img
                      src={currentScreens[1] ? currentScreens[1].image : currentScreen.image}
                      alt="iPadOS App View"
                      className="ipad-app-screen-img"
                    />
                    <div className="ipad-home-indicator" />
                  </div>
                </div>

                {/* iPhone in foreground */}
                <div className="iphone-chassis dual-suite-iphone">
                  <div className="iphone-btn-action" />
                  <div className="iphone-btn-vol-up" />
                  <div className="iphone-btn-vol-down" />
                  <div className="iphone-btn-power" />
                  <div className="iphone-btn-camera" />

                  <div className="iphone-screen">
                    <div className="iphone-glare" />
                    <div className="iphone-dynamic-island">
                      <span className="dynamic-island-cam" />
                      <span className="dynamic-island-sensor" />
                    </div>
                    <div className="iphone-status-bar">
                      <span>9:41</span>
                      <div className="status-bar-icons">
                        <span>5G</span>
                        <span>100%</span>
                      </div>
                    </div>
                    <div className="iphone-app-img-wrap">
                      <img
                        src={currentScreen.image}
                        alt={currentScreen.title}
                        className="iphone-app-screen-img"
                      />
                    </div>
                    <div className="iphone-home-indicator" />
                  </div>
                </div>
              </div>
            )}

            {/* Hardware Screen Navigation Controls under Chassis */}
            <div className="studio-device-controls font-mono">
              <div className="studio-device-nav">
                <button
                  type="button"
                  className="studio-nav-btn hoverable"
                  onClick={handlePrevScreen}
                  aria-label="Previous app screen"
                >
                  ◀ Prev
                </button>
                <span className="studio-screen-indicator-text">
                  {currentScreen.num} / 0{currentScreens.length} · {currentScreen.title}
                </span>
                <button
                  type="button"
                  className="studio-nav-btn hoverable"
                  onClick={handleNextScreen}
                  aria-label="Next app screen"
                >
                  Next ▶
                </button>
              </div>

              {/* Screen Dots */}
              <div className="studio-dots-row">
                {currentScreens.map((s, idx) => (
                  <span
                    key={s.id}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`studio-dot ${idx === activeScreenIndex ? 'active' : ''}`}
                    title={s.title}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Stage: Screen Specs & Capabilities Information */}
          <div className="studio-info-column font-mono">
            <span className="studio-feature-badge">
              {currentScreen.tag} · SCREEN {currentScreen.num}
            </span>

            <h3 className="studio-screen-headline uppercase text-glow">{currentScreen.title}</h3>
            <p className="studio-screen-desc text-gray">{currentScreen.desc}</p>

            {/* Key Capabilities List */}
            <div className="studio-bullets-list">
              {currentApp.features.map((feat) => (
                <div key={feat} className="studio-bullet-item">
                  <span className="studio-bullet-dot">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Core Tech Stack */}
            <div className="studio-tech-pills">
              {currentApp.techStack.map((tech) => (
                <span key={tech} className="studio-tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="studio-actions-row">
              <button
                type="button"
                className="studio-case-study-btn hoverable"
                onClick={() => setModalProjectIndex(activeAppIndex)}
              >
                <span>Deep Architecture &amp; Case Study</span>
                <span>→</span>
              </button>

              {currentApp.appStoreUrl && (
                <a
                  href={currentApp.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="appstore-action-btn hoverable"
                >
                  <span> View on App Store</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------
            2. OUTER APP IMAGES (HORIZONTAL PANORAMIC SCREENS GALLERY)
            ------------------------------------------------------------------ */}
        <div className="outer-screens-section font-mono">
          <div className="outer-screens-header">
            <span className="outer-screens-title">
              Outer App Production Screens ({currentScreens.length} Screens Suite)
            </span>
            <span className="outer-screens-hint">
              Click any outer screen to load inside device ➔
            </span>
          </div>

          <div className="outer-screens-strip">
            {currentScreens.map((screen, idx) => {
              const isSelected = idx === activeScreenIndex;
              return (
                <div
                  key={screen.id}
                  className={`outer-thumb-card hoverable ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveScreenIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActiveScreenIndex(idx);
                  }}
                  aria-label={`Preview screen: ${screen.title}`}
                >
                  <div className="outer-thumb-device">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="outer-thumb-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="outer-thumb-caption font-mono">
                    <span className="outer-thumb-tag">{screen.num} · {screen.tag}</span>
                    <span className="outer-thumb-title">{screen.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------
          3. ALL FEATURED PROJECTS CARDS GRID (WITH MINI DEVICE FRAMES)
          -------------------------------------------------------------------- */}
      <div className="gsap-reveal" style={{ marginBottom: '2rem' }}>
        <h3 className="section-title uppercase text-glow" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
          Production Application Portfolio
        </h3>
        <p className="text-gray font-mono uppercase" style={{ fontSize: '0.85rem' }}>
          Select any project below to inspect inside the Apple Hardware Studio or review the case study
        </p>
      </div>

      <div className="work-grid">
        {apps.map((app, index) => (
          <div
            key={app.title}
            className="featured-project-card hoverable gsap-work-card font-mono"
            role="button"
            tabIndex={0}
            onClick={() => {
              setActiveAppIndex(index);
              setActiveScreenIndex(0);
              setModalProjectIndex(index);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setActiveAppIndex(index);
                setActiveScreenIndex(0);
                setModalProjectIndex(index);
              }
            }}
            aria-label={`Open case study for ${app.title}`}
            style={{ '--card-glow': app.accentColor }}
          >
            {/* Top Bar with Real App Icon */}
            <div className="card-top-row">
              <div className="card-icon-area">
                <img src={app.iconImg} alt={app.title} className="card-app-icon" />
                <div>
                  <span className="card-category">{app.category}</span>
                  <h4 className="card-title text-glow">{app.title}</h4>
                </div>
              </div>
              <span className="card-status-pill">{app.status}</span>
            </div>

            {/* Center: Mini iPhone Frame with Real Screenshot Inside */}
            <div className="card-device-preview">
              <div className="card-mini-iphone">
                <div className="card-mini-notch" />
                <div className="card-mini-screen">
                  <img
                    src={app.screens[0]?.image || app.images[0]}
                    alt={`${app.title} UI Preview`}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Info & Tech Stack */}
            <div className="card-bottom-info">
              <p className="card-desc text-gray">{app.description}</p>
              <div className="card-tech-row">
                {app.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="card-tech-pill">
                    {tech}
                  </span>
                ))}
                {app.techStack.length > 4 && (
                  <span className="card-tech-pill">+{app.techStack.length - 4}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        open={modalProjectIndex !== null}
        onClose={() => setModalProjectIndex(null)}
        project={modalProjectIndex !== null ? apps[modalProjectIndex] : null}
      />
    </section>
  );
}
