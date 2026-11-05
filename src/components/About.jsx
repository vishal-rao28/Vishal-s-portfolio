import vishalPhoto from '../assets/MYphoto.jpeg';
import EngineeringTelemetry from './EngineeringTelemetry';
import Timeline from './Timeline';
import MaskedTitle from './MaskedTitle';

export default function About() {
  return (
    <div className="about-page-wrapper">
      {/* 1. Core Background & Engineering Philosophy */}
      <section id="about" className="container about-intro-section">
        <div className="about-grid">
          <div className="gsap-reveal">
            <MaskedTitle number="1." text="About Me" />
            <div className="divider" />
            <p className="text-gray about-text">
              I’m Vishal Rao M, an iOS Developer and Technical Trainer at SIMATS Engineering Institution with a B.Tech in Artificial Intelligence &amp; Data Science. I architect and deploy high-performance native iOS applications using Swift, SwiftUI, UIKit, and Core ML, with 5+ apps shipped live to the Apple App Store. I specialize in building reactive, enterprise-grade architectures (MVVM, Combine) and enforcing industrial quality through automated QA verification across Web, Android, iOS, and API backends.
            </p>
            <div className="font-mono text-gray skill-list text-sm">
              <p><span style={{ color: '#0A84FF' }}>●</span> Native iOS &amp; iPadOS Architecture (SwiftUI, UIKit, Xcode, Core Location)</p>
              <p><span style={{ color: '#BF5AF2' }}>●</span> 4-Discipline Automated QA (Selenium, Appium, Vulnerability &amp; Load Testing)</p>
              <p><span style={{ color: '#30D158' }}>●</span> Backend &amp; Real-Time Systems (Firebase, RESTful APIs, Postman Testing)</p>
              <p><span style={{ color: '#FF9F0A' }}>●</span> Leadership &amp; Delivery (SIMATS Technical Trainer, IJRPR Published Author)</p>
            </div>
          </div>

          <div className="abstract-box hoverable gsap-reveal">
            <div className="about-photo-wrapper">
              <img
                src={vishalPhoto}
                alt="Vishal Rao M - iOS Developer &amp; Technical Engineer"
                className="about-photo-img"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Real-Time Engineering Telemetry & Verified Command Channels */}
        <EngineeringTelemetry />
      </section>

      {/* 2. Interactive Evolution Roadmap (Auto-looping + Move Buttons) */}
      <Timeline />
    </div>
  );
}


