import React from 'react';
import iphoneImg from '../assets/img/iphoneAnonimo.png';
import macLw from '../assets/img/macLw.png';
import textBubble from '../assets/img/textbubble.gif';
import vishalPhoto from '../assets/img/vishal_optimized1.jpg';

function IntroComponent() {
  const [showResults, setShowResults] = React.useState(true);
  const onClick = () => setShowResults(false);

  return (
    <div className="IntroComponent">
      <div className="IntroComponentWrapper" style={{ padding: 20, width: '50%' }}>
        <div style={{ fontSize: '150%' }}>
          <h1 className="headingIntro">
            <span></span>
            <strong style={{ color: 'var(--blue)' }}> .</strong>
          </h1>
        </div>
        <img src={textBubble} className="textBubble" alt="Speech bubble animation" />

        <div className="hiddenText">
          <p style={{ color: '#000', opacity: 0.7, fontSize: '1.05rem', lineHeight: '1.6' }}>
            Hey There! I am <strong>Vishal Rao M</strong> — an iOS Developer &amp; Technical Engineer specializing in SwiftUI, UIKit, Core ML, and automated QA testing. 5+ apps live on the App Store.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
            <a
              href="#socials"
              onClick={(e) => {
                const menu = document.getElementById('socials');
                e.preventDefault();
                menu && menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <button className="btn">Connect Now</button>
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                const menu = document.getElementById('projects');
                e.preventDefault();
                menu && menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <button className="btn2">My Projects</button>
            </a>
            <a
              href="./Vishal_Rao_UDI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button
                className="btn2"
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  border: '1px solid #000'
                }}
              >
                Resume ↗
              </button>
            </a>
          </div>
        </div>
        {showResults ? (
          <div
            className="idCard"
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 30,
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
              <h1 onClick={onClick} style={{ margin: '0 4px', cursor: 'pointer', lineHeight: 0 }} title="Close Card">
                <strong style={{ color: '#FE5E58' }}>.</strong>
              </h1>
              <h1 style={{ margin: '0 4px', lineHeight: 0 }}>
                <strong style={{ color: '#FEBD2C' }}>.</strong>
              </h1>
              <h1 style={{ margin: '0 4px', lineHeight: 0 }}>
                <strong style={{ color: '#27C841' }}>.</strong>
              </h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', padding: 20 }}>
              <img
                src={vishalPhoto}
                className="dp"
                alt="Vishal Rao M"
                style={{ width: 70, height: 70, borderRadius: '50%', objectFit: 'cover' }}
              />
              <div className="idText" style={{ paddingLeft: 18, fontSize: '80%' }}>
                <h1 style={{ margin: '0 0 6px 0', fontSize: '1.4rem' }}>Vishal Rao M</h1>
                <h3 style={{ fontFamily: 'EBGaramondRegular', opacity: 0.6, margin: 0, fontSize: '1rem' }}>
                  iOS Dev &amp; QA Engineer @ SIMATS · B.Tech AI &amp; DS
                </h3>
              </div>
            </div>
          </div>
        ) : (
          <br />
        )}
      </div>

      <div className="imageIntro" id="imageIntro1">
        <img className="iphoneImg" src={iphoneImg} alt="iOS showcase mockup" width="50%" />
        <span style={{ fontSize: '150%' }} className="specialtext">
          <p
            style={{
              left: '-120px',
              position: 'relative',
              marginTop: -45,
              textAlign: 'right',
              color: 'orange'
            }}
            className="cartoonText cartoonTextIntro"
          >
            ~ 5+ Apps Live on the App Store! ~
          </p>
        </span>
        <img className="macLw" src={macLw} alt="Macbook telemetry showcase" width="100%" />
      </div>
    </div>
  );
}

export default IntroComponent;
