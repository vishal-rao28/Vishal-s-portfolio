import { useAudio } from '../hooks/useAudio';
import profilePhoto from '../assets/MYphoto.jpeg';

export default function EngineeringTelemetry() {
  const { playHoverSound, playClickSound } = useAudio();

  return (
    <div className="telemetry-command-deck gsap-reveal font-mono">
      {/* Top Header Bar - Clean and Professional */}
      <div className="telemetry-header">
        <div className="telemetry-header-left">
          <span className="telemetry-live-dot" />
          <span className="telemetry-hud-tag">Current Activity & Profiles</span>
        </div>
        <span className="telemetry-hud-status">Active in 2026 • Open for iOS Engineering Roles</span>
      </div>

      {/* 3-Column Profile & Activity Grid */}
      <div className="telemetry-grid">
        {/* Card 1: What I'm Working On */}
        <div className="telemetry-card hoverable">
          <div className="telemetry-card-top">
            <span className="card-badge">CURRENT FOCUS</span>
            <span className="card-indicator">Active</span>
          </div>
          <h3 className="telemetry-card-title">Native iOS & Edge AI</h3>
          <p className="telemetry-card-text text-gray">
            Architecting production iOS ecosystems with SwiftUI, UIKit, Combine, and on-device Core ML vision intelligence for enterprise and clinical applications.
          </p>
          <div className="telemetry-meta-row text-gray">
            <span>CORE STACK:</span>
            <span className="meta-highlight">Swift, SwiftUI, UIKit, Core Location, MapKit, Firebase, Appium, Selenium</span>
          </div>
        </div>

        {/* Card 2: GitHub Projects */}
        <div className="telemetry-card hoverable">
          <div className="telemetry-card-top">
            <span className="card-badge">GITHUB CODE</span>
            <span className="card-indicator">10+ Repositories</span>
          </div>
          <h3 className="telemetry-card-title">Production Systems</h3>
          <p className="telemetry-card-text text-gray">
            Over 10 public and private repositories—including Viana 360 (App Store), clinical ulcer predictors, COPD vitals, and enterprise automation suites.
          </p>
          <div className="telemetry-actions-list">
            <a
              href="https://github.com/vishal-rao28"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn hoverable"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span>View GitHub Repositories</span>
              <span className="telemetry-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Card 3: LinkedIn Profile & Quick Contact */}
        <div className="telemetry-card telemetry-card-comms hoverable">
          <div className="telemetry-card-top">
            <span className="card-badge">PROFESSIONAL PROFILE</span>
            <span className="card-indicator">Open to Roles</span>
          </div>

          {/* Clean LinkedIn Identity Preview */}
          <div className="linkedin-profile-preview">
            <img
              src={profilePhoto}
              alt="Vishal Rao M"
              className="linkedin-preview-avatar"
            />
            <div className="linkedin-preview-info">
              <div className="linkedin-preview-name">
                <span>Vishal Rao M</span>
                <span className="linkedin-check" title="Verified Profile">✓</span>
              </div>
              <div className="linkedin-preview-role text-gray">
                iOS Developer & Technical Engineer • SIMATS
              </div>
            </div>
          </div>

          <p className="telemetry-card-text text-gray" style={{ marginBottom: '1rem' }}>
            Available for native iOS engineering roles, Core ML integration, TestFlight deployment, and enterprise iOS contract development.
          </p>

          <div className="telemetry-actions-list">
            <a
              href="https://www.linkedin.com/in/vishal-rao-173a232b9"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn hoverable"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span>Connect on LinkedIn</span>
              <span className="telemetry-arrow">↗</span>
            </a>

            <a
              href="https://wa.me/916382190388?text=Hi%20Vishal,%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn telemetry-btn-ping hoverable"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span>Chat on WhatsApp</span>
              <span className="telemetry-arrow">💬</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
