import React from 'react';
import instaLoop from '../assets/img/instaLoop.gif';
import vishalPhoto from '../assets/img/vishal_optimized.jpg';

function AboutMe() {
  const [showCard, setShowCard] = React.useState(true);
  const onClick2 = () => setShowCard(false);

  return (
    <div id="about" style={{ display: 'flex', alignItems: 'center', marginTop: '60px' }}>
      <img className="instaLoop" src={instaLoop} alt="iPhone animation" width="30%" />
      <div className="aboutMe" style={{ width: '100%' }}>
        <h1>
          About Me <strong style={{ color: '#f5576c' }}>.</strong>
        </h1>
        <p className="para" style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
          I'm <strong>Vishal Rao M</strong> — an <strong>iOS Developer &amp; Technical Engineer</strong> with a strong builder's mindset and deep expertise in Apple's ecosystem and robust software testing.
          <br />
          <br />
          With professional roles at <strong>SIMATS Engineering Institution</strong>, <strong>Viana Soft</strong>, and <strong>Greatify</strong>, I blend native mobile engineering (<strong>Swift, SwiftUI, UIKit, Core ML, Combine</strong>) with end-to-end technical QA across four core disciplines (<strong>Selenium, Appium, Load Testing, and Backend Vulnerability Testing</strong>).
          <br />
          <br />
          From enterprise institutional platforms like <strong>Viana 360</strong> (iPhone &amp; iPad) and AI diagnostics like <strong>Smart Ulcer Predictor</strong> and <strong>BreathTrack</strong>, to child tracking systems and wellness apps, I own the full lifecycle — requirement engineering, architecture, API integration, testing, and App Store deployment.
        </p>
        <br />
        <p className="cartoonText" style={{ fontSize: '150%', color: '#f5576c', textAlign: 'center' }}>
          ~ Building robust, production-tested mobile experiences!
        </p>

        {/* Stats highlight row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            margin: '24px auto',
            maxWidth: '650px'
          }}
        >
          <div style={{ textAlign: 'center', minWidth: '100px' }}>
            <h2 style={{ fontSize: '2.2rem', margin: 0, color: '#006AFF' }}>6+</h2>
            <p style={{ margin: 0, opacity: 0.6, fontSize: '0.9rem' }}>Projects Built</p>
          </div>
          <div style={{ textAlign: 'center', minWidth: '100px' }}>
            <h2 style={{ fontSize: '2.2rem', margin: 0, color: '#27C841' }}>5</h2>
            <p style={{ margin: 0, opacity: 0.6, fontSize: '0.9rem' }}>Live on App Store</p>
          </div>
          <div style={{ textAlign: 'center', minWidth: '100px' }}>
            <h2 style={{ fontSize: '2.2rem', margin: 0, color: '#FEBD2C' }}>4</h2>
            <p style={{ margin: 0, opacity: 0.6, fontSize: '0.9rem' }}>Testing Disciplines</p>
          </div>
          <div style={{ textAlign: 'center', minWidth: '100px' }}>
            <h2 style={{ fontSize: '2.2rem', margin: 0, color: '#f5576c' }}>B.Tech</h2>
            <p style={{ margin: 0, opacity: 0.6, fontSize: '0.9rem' }}>AI &amp; Data Science</p>
          </div>
        </div>

        {showCard ? (
          <div
            className="idCard idCard2"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '75%',
              display: 'flex',
              flexDirection: 'column',
              marginTop: 20,
              border: '2px solid lightgrey',
              borderRadius: 10,
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
            }}
          >
            <div
              style={{
                padding: '6px 12px',
                width: '100%',
                backgroundColor: '#ededed',
                fontSize: '150%',
                borderBottom: '1px solid lightgrey',
                height: 28,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                boxSizing: 'border-box'
              }}
            >
              <h1 onClick={onClick2} style={{ zIndex: 50, margin: '0 4px', cursor: 'pointer', lineHeight: 0 }} title="Close Card">
                <strong style={{ color: '#FE5E58' }}>.</strong>
              </h1>
              <h1 style={{ margin: '0 4px', lineHeight: 0 }}>
                <strong style={{ color: '#FEBD2C' }}>.</strong>
              </h1>
              <h1 style={{ margin: '0 4px', lineHeight: 0 }}>
                <strong style={{ color: '#27C841' }}>.</strong>
              </h1>
            </div>
            <a
              href="https://linkedin.com/in/vishal-rao-173a232b9"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', padding: 20 }}>
                <img
                  src={vishalPhoto}
                  className="dp2"
                  alt="Vishal Rao M"
                  style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover' }}
                />
                <div className="instaTag" style={{ paddingLeft: 20, fontSize: '80%' }}>
                  <h1 style={{ margin: '0 0 4px 0', fontSize: '1.25rem' }}>Vishal Rao M</h1>
                  <h3 style={{ fontFamily: 'EBGaramondRegular', opacity: 0.6, margin: 0 }}>
                    linkedin.com/in/vishal-rao-173a232b9 ↗
                  </h3>
                </div>
              </div>
            </a>
          </div>
        ) : (
          <br />
        )}
      </div>
    </div>
  );
}

export default AboutMe;
