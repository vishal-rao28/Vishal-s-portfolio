import { useState, useEffect, useRef, useCallback } from 'react';
import { useAudio } from '../hooks/useAudio';
import {
  WebArchitectureCanvas,
  ChatUpSocketStreamCanvas,
  RoastingAITokenStreamCanvas,
  EdgeResumeATSParserCanvas
} from './TimelineVisualizers';
import MaskedTitle from './MaskedTitle';

export default function Timeline() {
  const { playHoverSound, playClickSound } = useAudio();
  const [activeEpochIndex, setActiveEpochIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const epochs = [
    {
      epoch: '01',
      date: '2021 – 2025 • B.TECH DEGREE',
      stageLabel: 'STAGE 01',
      category: 'ACADEMIC FOUNDATION',
      dockLabel: 'B.TECH AI & DS',
      title: 'B.Tech in Artificial Intelligence & Data Science',
      headline: 'Dhanalakshmi Srinivasan Engineering College • CGPA 7.5',
      summary:
        'Specialized in Artificial Intelligence, Deep Learning neural networks, and mobile software architectures. Published an iOS development research paper in the International Journal of Research Publication and Reviews (IJRPR) and earned a 6-month AWS Cloud Computing certification.',
      metrics: [
        { label: 'Degree', value: 'B.Tech AI & DS' },
        { label: 'Academics', value: '7.5 CGPA' },
        { label: 'Research', value: 'IJRPR Published' }
      ],
      techStack: ['Swift', 'Core ML', 'Python', 'Deep Learning', 'AWS Cloud', 'Git'],
      Visualizer: WebArchitectureCanvas
    },
    {
      epoch: '02',
      date: 'JAN 2025 – JUL 2025 • INTERNSHIP',
      stageLabel: 'STAGE 02',
      category: 'ENTERPRISE MOBILE',
      dockLabel: 'GREATIFY INTERN',
      title: 'iOS Development Intern at Greatify',
      headline: 'AI-Enhanced Enterprise ERP & Examination Platforms',
      summary:
        'Engineered native mobile modules for AI-powered enterprise solutions spanning ERP, LMS, and digital examination suites. Integrated RESTful backend endpoints, optimized client-side state transitions, and collaborated with QA teams on test case design.',
      metrics: [
        { label: 'Role', value: 'iOS Intern' },
        { label: 'Architecture', value: 'Enterprise ERP/LMS' },
        { label: 'Integration', value: 'RESTful Endpoints' }
      ],
      techStack: ['Swift', 'UIKit', 'REST APIs', 'State Sync', 'QA Validation', 'Xcode'],
      Visualizer: ChatUpSocketStreamCanvas
    },
    {
      epoch: '03',
      date: 'OCT 2025 – PRESENT • PROMOTION',
      stageLabel: 'STAGE 03',
      category: 'HIGH-VELOCITY DELIVERY',
      dockLabel: 'VIANA SOFT',
      title: 'iOS Developer at Viana Soft (SIMATS)',
      headline: 'Promoted for Delivery Velocity • Viana 360 App Store Launch',
      summary:
        'Promoted from intern to Full-Time iOS Developer in recognition of rapid feature turnaround and architecture design. Spearheaded the creation of “Viana 360” across iPhone and iPad, delivering reactive Combine telemetry, sub-meter CoreLocation geofencing, and launching live on the App Store in ~3 months.',
      metrics: [
        { label: 'App Store Status', value: '● Live on App Store' },
        { label: 'Delivery Sprint', value: '~3 Months' },
        { label: 'Platforms', value: 'iPhone & iPad' }
      ],
      techStack: ['SwiftUI', 'UIKit', 'Combine', 'CoreLocation', 'APNs Push', 'iPadOS SplitView'],
      Visualizer: RoastingAITokenStreamCanvas
    },
    {
      epoch: '04',
      date: '2026 – PRESENT • CURRENT ROLE',
      stageLabel: 'STAGE 04',
      category: 'ENGINEERING & MENTORSHIP',
      dockLabel: 'SIMATS TRAINER',
      title: 'iOS Developer & Technical Trainer at SIMATS',
      headline: 'Production Architect & 4 Automated QA Verification Gates',
      summary:
        'Architecting and shipping production iOS applications using SwiftUI, UIKit, and Core ML while training future mobile engineers. Established 4 automated verification gates—Selenium (Web), Appium (Mobile), Security Audits, and Load Stress Testing—enforcing zero-crash production releases.',
      metrics: [
        { label: 'Institution', value: 'SIMATS Chennai' },
        { label: 'Quality Standard', value: '4 QA Gates' },
        { label: 'Production Apps', value: '5+ Shipped' }
      ],
      techStack: ['SwiftUI', 'Core ML', 'Selenium', 'Appium', 'Performance Profiling', 'TestFlight'],
      Visualizer: EdgeResumeATSParserCanvas
    }
  ];

  // Auto-running loop across 4 stages (pauses on hover so user can read)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveEpochIndex((prev) => (prev + 1) % epochs.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, epochs.length]);

  // Move button controls (loops infinitely in both directions)
  const handleNext = useCallback(() => {
    playClickSound();
    setActiveEpochIndex((prev) => (prev + 1) % epochs.length);
  }, [epochs.length, playClickSound]);

  const handlePrev = useCallback(() => {
    playClickSound();
    setActiveEpochIndex((prev) => (prev - 1 + epochs.length) % epochs.length);
  }, [epochs.length, playClickSound]);

  const goToEpoch = useCallback((targetIndex) => {
    if (targetIndex < 0 || targetIndex >= epochs.length) return;
    playClickSound();
    setActiveEpochIndex(targetIndex);
  }, [epochs.length, playClickSound]);

  // Keyboard Arrow navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section className="container timeline-section" id="experience">
      {/* Aligned Section Header matching #about, #work, #skills */}
      <div className="timeline-header">
        <div className="gsap-reveal">
          <MaskedTitle text="Engineering Journey" />
          <div className="divider" />
        </div>
        <div className="timeline-header-meta font-mono">
          <div className="timeline-meta-pill">
            <span className={`meta-pulse-dot ${isPaused ? 'is-paused' : ''}`} />
            <span className="meta-pill-text">
              STAGE 0{activeEpochIndex + 1}/04 • {isPaused ? 'INTERACTIVE' : 'AUTO-RUNNING'}
            </span>
          </div>
          <div className="timeline-jump-strip">
            {epochs.map((ep, i) => (
              <button
                key={ep.epoch}
                type="button"
                onClick={() => goToEpoch(i)}
                onMouseEnter={playHoverSound}
                className={`timeline-jump-pill hoverable ${activeEpochIndex === i ? 'is-active' : ''}`}
                aria-label={`Jump to stage 0${i + 1}`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Stage Slider with Side Navigation Arrows & Auto-running Loop */}
      <div
        className="timeline-stage-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="timeline-side-arrow timeline-arrow-prev hoverable font-mono"
          onClick={handlePrev}
          onMouseEnter={playHoverSound}
          aria-label="Previous phase"
          title="Previous stage"
        >
          ‹
        </button>

        <div className="timeline-carousel-shell">
          <div
            className="timeline-cards-track"
            style={{ transform: `translateX(-${activeEpochIndex * 100}%)` }}
          >
            {epochs.map((item, idx) => {
              const Visualizer = item.Visualizer;
              const isActive = activeEpochIndex === idx;

              return (
                <div
                  key={item.epoch}
                  className={`timeline-card-slide ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => {
                    if (!isActive) playHoverSound();
                  }}
                >
                  {/* Stage Container Card */}
                  <div className="timeline-stage-card hoverable">
                    {/* Left Pane: Narrative & Technical Telemetry */}
                    <div className="timeline-narrative-pane">
                      <div className="stage-topbar font-mono">
                        <div className="stage-topbar-left">
                          <span className="stage-badge uppercase">{item.category}</span>
                          <span className="stage-date uppercase">{item.date}</span>
                        </div>
                        <span className="stage-step-tag text-gray">{item.stageLabel}</span>
                      </div>

                      <div className="stage-title-wrap">
                        <h3 className="stage-title uppercase text-glow">{item.title}</h3>
                        <div className="stage-headline font-mono text-gray uppercase">{item.headline}</div>
                      </div>

                      <p className="stage-summary text-gray">{item.summary}</p>

                      {/* Telemetry Metrics Grid */}
                      <div className="stage-metrics-grid font-mono">
                        {item.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="stage-metric-box">
                            <span className="metric-lbl text-gray">{m.label}</span>
                            <span className="metric-val">{m.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills matching .skill-pill */}
                      <div className="stage-tech-pills font-mono">
                        {item.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="stage-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Pane: 2D Live Visualizer Canvas */}
                    <div className="timeline-simulation-pane">
                      <div className="terminal-canvas-wrapper">
                        <Visualizer isActive={isActive} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="timeline-side-arrow timeline-arrow-next hoverable font-mono"
          onClick={handleNext}
          onMouseEnter={playHoverSound}
          aria-label="Next phase"
          title="Next stage"
        >
          ›
        </button>
      </div>
    </section>
  );
}
