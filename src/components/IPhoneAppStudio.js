import React, { useState, useEffect } from 'react';

function IPhoneAppStudio({ activeAppIndex: externalIndex, setActiveAppIndex: externalSetIndex }) {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeAppIndex = externalIndex !== undefined ? externalIndex : internalIndex;
  const setActiveAppIndex = externalSetIndex !== undefined ? externalSetIndex : setInternalIndex;
  const [tick, setTick] = useState(0);
  const [islandExpanded, setIslandExpanded] = useState(false);
  const [hairDayIndex, setHairDayIndex] = useState(1); // 0 for Day 1, 1 for Day 90

  // Real-time dynamic simulation ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev + 1) % 100);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  // Morph Dynamic Island briefly when switching apps
  useEffect(() => {
    setIslandExpanded(true);
    const timeout = setTimeout(() => setIslandExpanded(false), 800);
    return () => clearTimeout(timeout);
  }, [activeAppIndex]);

  // Dynamic values based on tick
  const packetRate = 1420 + (tick % 7) * 4 - (tick % 3) * 2;
  const vianaLatency = 11 + (tick % 3);
  const mlLatency = (7.8 + (tick % 5) * 0.1).toFixed(1);
  const heartRate = 71 + (tick % 4);

  const apps = [
    {
      id: 'viana360',
      title: 'Viana 360',
      category: 'iOS & iPadOS · Institutional Telemetry',
      status: '● Live on App Store',
      isLive: true,
      appStoreUrl: 'https://apps.apple.com/in/app/viana-360/id6760163659',
      islandText: 'Viana 360 · 24 Streams Live',
      islandColor: '#0A84FF',
      icon: '📊',
      accentColor: '#0284c7',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0284c7 100%)',
      description:
        'A comprehensive institutional application for iPhone and iPad engineered for real-time telemetry streaming, KPI monitoring, and advanced data visualization across enterprise streams.',
      architecture:
        'Clean MVVM Architecture · Combine Reactive State Management · Adaptive iPadOS SplitView · Real-time REST Data Ingestion · Swift Charts',
      qa:
        'Selenium & Appium automated UI flows · High-load endpoint latency benchmarking · Network fault tolerance validation',
      stack: ['SwiftUI', 'UIKit', 'Combine', 'Swift Charts', 'REST APIs', 'iPadOS'],
      specs: {
        target: 'iPhone & iPadOS Universal',
        minIOS: 'iOS 16.0+',
        architecture: 'MVVM + Combine Reactive Streams',
        qaStatus: 'Appium & Selenium Verified'
      },
      renderScreen: () => {
        const barHeights = [
          40 + (tick % 4) * 8,
          65 - (tick % 3) * 6,
          85 + (tick % 2) * 8,
          50 + (tick % 5) * 6,
          95 - (tick % 4) * 7,
          70 + (tick % 3) * 8,
          88 - (tick % 2) * 5,
          100,
          68 + (tick % 4) * 5,
          82 - (tick % 3) * 4,
          92 + (tick % 2) * 4,
          58 + (tick % 5) * 6
        ];

        return (
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', color: '#fff' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
              <div>
                <span style={{ fontSize: '0.64rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  Institutional Stream
                </span>
                <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>Viana 360</h4>
              </div>
              <span
                style={{
                  fontSize: '0.65rem',
                  padding: '4px 10px',
                  borderRadius: 20,
                  backgroundColor: 'rgba(34, 197, 94, 0.2)',
                  color: '#4ade80',
                  fontWeight: 700,
                  border: '1px solid rgba(74, 222, 128, 0.4)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5
                }}
              >
                <span className="status-beacon" style={{ width: 6, height: 6 }} />
                24 Live Streams
              </span>
            </div>

            {/* Live Throughput Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 12px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Ingestion Throughput</span>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#38bdf8', marginTop: 2, fontFamily: 'monospace' }}>
                  {packetRate} <span style={{ fontSize: '0.68rem', fontWeight: 500, color: '#94a3b8' }}>pkts/s</span>
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 12px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Server Latency</span>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#4ade80', marginTop: 2, fontFamily: 'monospace' }}>
                  {vianaLatency} <span style={{ fontSize: '0.68rem', fontWeight: 500, color: '#94a3b8' }}>ms</span>
                </div>
              </div>
            </div>

            {/* Dynamic Swift Charts with Live Fluctuation */}
            <div style={{ background: 'rgba(255,255,255,0.035)', padding: '12px', borderRadius: 14, border: '1px solid rgba(56, 189, 248, 0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f1f5f9' }}>
                  Swift Charts · Reactive Telemetry
                </span>
                <span style={{ fontSize: '0.62rem', color: '#38bdf8', fontFamily: 'monospace', fontWeight: 600 }}>
                  60 FPS ProMotion
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', height: '70px', gap: '5px', padding: '0 4px' }}>
                {barHeights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      background: i === 7 ? 'linear-gradient(to top, #0284c7, #38bdf8)' : 'rgba(56, 189, 248, 0.35)',
                      borderRadius: 3,
                      transition: 'height 0.8s ease-in-out',
                      boxShadow: i === 7 ? '0 0 8px rgba(56, 189, 248, 0.6)' : 'none'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Live Campus Node Status */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Active Telemetry Nodes
              </span>
              {[
                { name: 'Saveetha Campus Stream A', status: 'Online · 0 Packet Loss', ping: '8ms' },
                { name: 'SIMATS Lab IoT Gateway', status: 'Streaming · Encrypted', ping: `${vianaLatency}ms` },
                { name: 'Institutional Core Buffer', status: 'Optimal · 99.98% Uptime', ping: '11ms' }
              ].map((node, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 10,
                    border: '1px solid rgba(255,255,255,0.05)',
                    fontSize: '0.72rem'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: '#f8fafc' }}>{node.name}</div>
                    <div style={{ color: '#4ade80', fontSize: '0.62rem' }}>{node.status}</div>
                  </div>
                  <span style={{ color: '#38bdf8', fontFamily: 'monospace', fontWeight: 600 }}>{node.ping}</span>
                </div>
              ))}
            </div>
          </div>
        );
      }
    },
    {
      id: 'smartulcer',
      title: 'Smart Ulcer Predictor',
      category: 'iOS · Medical AI · Core ML',
      status: '● Live on App Store',
      isLive: true,
      appStoreUrl: 'https://apps.apple.com/in/app/smart-ulcer-predictor/id6755873140',
      islandText: 'Core ML · ANE Active 8.2ms',
      islandColor: '#0d9488',
      icon: '🔬',
      accentColor: '#0d9488',
      gradient: 'linear-gradient(135deg, #09203f 0%, #164e63 50%, #0d9488 100%)',
      description:
        'An AI-powered clinical decision-support application employing on-device deep learning computer vision to evaluate skin ulcer imagery (Healing, Not Healing, Normal Skin) with sub-second inference.',
      architecture:
        'On-device Apple Neural Engine (ANE) Inference · Core ML Model Quantization · Vision Framework Pre-processing · HIPAA-conscious Local Pipeline',
      qa:
        'Confusion matrix & model accuracy benchmarking · Memory leak validation during image capture · Extreme lighting tolerance tests',
      stack: ['Core ML', 'Vision Framework', 'SwiftUI', 'Deep Learning', 'Convolutional Nets'],
      specs: {
        target: 'Apple Neural Engine (ANE)',
        minIOS: 'iOS 16.0+',
        architecture: 'Core ML Quantized CNN + Vision',
        qaStatus: 'Clinical Accuracy & Leak Benchmarked'
      },
      renderScreen: () => (
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', color: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
            <div>
              <span style={{ fontSize: '0.64rem', color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                On-Device Vision ML
              </span>
              <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>Ulcer Predictor</h4>
            </div>
            <span style={{ fontSize: '0.65rem', padding: '3px 8px', borderRadius: 12, backgroundColor: 'rgba(45, 212, 191, 0.2)', color: '#2dd4bf', fontWeight: 700 }}>
              ANE Quantized
            </span>
          </div>

          {/* Clinical Camera Viewfinder with Laser Scanning Beam */}
          <div
            style={{
              position: 'relative',
              height: '150px',
              borderRadius: 14,
              background: 'radial-gradient(circle at 50% 50%, #134e4a 0%, #042f2e 100%)',
              border: '1px solid rgba(45, 212, 191, 0.4)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.6)'
            }}
          >
            {/* Animated Laser Scanning Line */}
            <div className="laser-beam" />

            {/* Rotating Reticle Crosshair */}
            <div
              className="reticle-rotate"
              style={{
                width: '90px',
                height: '90px',
                border: '1px dashed rgba(45, 212, 191, 0.6)',
                borderRadius: '50%',
                position: 'absolute'
              }}
            />

            {/* Bounding Box Target */}
            <div
              style={{
                width: '80px',
                height: '80px',
                border: '2px solid #2dd4bf',
                borderRadius: 8,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(45, 212, 191, 0.08)'
              }}
            >
              <span style={{ fontSize: '1.6rem' }}>🔬</span>
              <span
                style={{
                  position: 'absolute',
                  top: -12,
                  left: 2,
                  fontSize: '0.56rem',
                  background: '#2dd4bf',
                  color: '#042f2e',
                  padding: '1px 5px',
                  borderRadius: 3,
                  fontWeight: 800,
                  letterSpacing: '0.04em'
                }}
              >
                TARGET LOCK
              </span>
            </div>

            {/* Live Inference Latency Stamp */}
            <div style={{ position: 'absolute', bottom: 8, right: 10, fontSize: '0.62rem', color: '#5eead4', fontFamily: 'monospace', fontWeight: 700 }}>
              Inference: {mlLatency}ms · ANE Core
            </div>
          </div>

          {/* Diagnostic Result Card */}
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: 12, border: '1px solid rgba(45, 212, 191, 0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Clinical Classification</span>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#4ade80' }}>Stage II: Healing (Granulation)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
              <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Deep Learning Confidence</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#2dd4bf', fontFamily: 'monospace' }}>98.4%</span>
            </div>
            {/* Animated progress bar */}
            <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.1)', borderRadius: 3, marginTop: 8, overflow: 'hidden' }}>
              <div style={{ width: '98.4%', height: '100%', background: 'linear-gradient(90deg, #0d9488, #2dd4bf)', borderRadius: 3, boxShadow: '0 0 10px #2dd4bf' }} />
            </div>
          </div>

          <button
            style={{
              padding: '10px',
              backgroundColor: '#0d9488',
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              boxShadow: '0 4px 12px rgba(13, 148, 136, 0.4)'
            }}
          >
            <span>Export Clinician Report</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      )
    },
    {
      id: 'breathtrack',
      title: 'BreathTrack',
      category: 'iOS · MedTech · Vitals & Telehealth',
      status: '● Live on App Store',
      isLive: true,
      appStoreUrl: 'https://apps.apple.com/in/app/breathtrack/id6804558579',
      islandText: 'HealthKit Vitals · SpO2 99%',
      islandColor: '#4338ca',
      icon: '🫁',
      accentColor: '#4338ca',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      description:
        'A collaborative respiratory telehealth platform bridging pulmonary patients with clinical teams. Features real-time tracking for SpO2, forced vital capacity (FVC), inhaler dose reminders, and clinician ABG diagnostic reviews.',
      architecture:
        'Apple HealthKit Background Delivery · Secure REST Telehealth Integration · Interactive Vital Trend Graphing · Push Notification Dispatcher',
      qa:
        'Background HealthKit query battery impact testing · Clinician dashboard Selenium verification · Security penetration audits',
      stack: ['SwiftUI', 'HealthKit', 'Combine', 'REST APIs', 'Interactive Charts'],
      specs: {
        target: 'Apple HealthKit Telehealth',
        minIOS: 'iOS 16.0+',
        architecture: 'HealthKit Background Delivery + REST',
        qaStatus: 'Battery & Penetration Audited'
      },
      renderScreen: () => (
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', color: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
            <div>
              <span style={{ fontSize: '0.64rem', color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                Pulmonary Health
              </span>
              <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>BreathTrack</h4>
            </div>
            <span style={{ fontSize: '0.65rem', padding: '3px 8px', borderRadius: 12, backgroundColor: 'rgba(99, 102, 241, 0.2)', color: '#c7d2fe', fontWeight: 700 }}>
              HealthKit Live
            </span>
          </div>

          {/* Vitals Telemetry Card */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 12px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Blood Oxygen (SpO2)</span>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#38bdf8', marginTop: 2, fontFamily: 'monospace' }}>
                99%
              </div>
              <span style={{ fontSize: '0.6rem', color: '#4ade80' }}>● Optimal Clinical Range</span>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 12px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Heart Rate</span>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f43f5e', marginTop: 2, fontFamily: 'monospace' }}>
                {heartRate} <span style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 400 }}>BPM</span>
              </div>
              <span style={{ fontSize: '0.6rem', color: '#fda4af' }}>Normal Resting Rhythm</span>
            </div>
          </div>

          {/* Live Animated ECG / Respiratory Waveform */}
          <div style={{ background: 'rgba(255,255,255,0.035)', padding: '12px', borderRadius: 12, border: '1px solid rgba(99, 102, 241, 0.25)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#e0e7ff' }}>
                Real-Time Vital Waveform
              </span>
              <span style={{ fontSize: '0.6rem', color: '#4ade80', fontFamily: 'monospace' }}>
                ● Real-time Sync
              </span>
            </div>
            {/* SVG Wave */}
            <svg width="100%" height="45" viewBox="0 0 280 45" style={{ overflow: 'visible' }}>
              <path
                d="M 0 22 L 40 22 L 50 10 L 60 36 L 70 4 L 80 28 L 90 22 L 130 22 L 140 10 L 150 36 L 160 4 L 170 28 L 180 22 L 220 22 L 230 10 L 240 36 L 250 4 L 260 28 L 270 22 L 280 22"
                fill="none"
                stroke="#6366f1"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ecg-path"
              />
            </svg>
          </div>

          {/* Calm Inhale / Exhale Breathing Simulation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', background: 'rgba(99, 102, 241, 0.12)', borderRadius: 12, border: '1px solid rgba(99, 102, 241, 0.25)' }}>
            <div className="breathing-element" style={{ width: 34, height: 34, borderRadius: '50%', backgroundColor: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
              🫁
            </div>
            <div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#e0e7ff' }}>FVC Vital Capacity: 3.8 L</div>
              <div style={{ fontSize: '0.64rem', color: '#c7d2fe' }}>Gentle 4s breathing cycle rhythm tracking active.</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'corecare',
      title: 'CoreCare',
      category: 'iOS · Digital Health & Wellness',
      status: '● Live on App Store',
      isLive: true,
      appStoreUrl: 'https://apps.apple.com/in/app/corecare/id6753789920',
      islandText: 'CoreCare · Activity Rings 88%',
      islandColor: '#10b981',
      icon: '🌿',
      accentColor: '#10b981',
      gradient: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)',
      description:
        'A holistic wellness management platform engineered to simplify daily health routines. Integrates intuitive modules for nutrition, fitness tracking, hydration pacing, mood logging, and vital biometric analytics.',
      architecture:
        'Offline-First Core Data Persistence · Combine Reactive Binding · Modular Micro-Feature Architecture · Dark Mode HIG Design',
      qa:
        'Core Data schema migration testing · Automated regression test suites · Memory footprint profiling under continuous session loops',
      stack: ['SwiftUI', 'Combine', 'Core Data', 'Health Analytics', 'Apple HIG'],
      specs: {
        target: 'Offline-First Core Data',
        minIOS: 'iOS 16.0+',
        architecture: 'Modular SwiftUI + Combine',
        qaStatus: 'Core Data Schema Migration Tested'
      },
      renderScreen: () => (
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', color: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
            <div>
              <span style={{ fontSize: '0.64rem', color: '#6ee7b7', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                Daily Lifestyle
              </span>
              <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>CoreCare</h4>
            </div>
            <span style={{ fontSize: '0.65rem', padding: '3px 8px', borderRadius: 12, backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7', fontWeight: 700 }}>
              Offline Ready
            </span>
          </div>

          {/* Apple Activity Rings Visual */}
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '14px', borderRadius: 14, border: '1px solid rgba(16, 185, 129, 0.25)', display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Multi-layered SVG Rings */}
            <div style={{ position: 'relative', width: 72, height: 72 }}>
              <svg width="72" height="72" viewBox="0 0 72 72">
                <circle cx="36" cy="36" r="28" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                <circle
                  cx="36"
                  cy="36"
                  r="28"
                  stroke="#10b981"
                  strokeWidth="6"
                  strokeDasharray="175"
                  strokeDashoffset="35"
                  strokeLinecap="round"
                  fill="none"
                  style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', transition: 'stroke-dashoffset 1s ease' }}
                />
                <circle cx="36" cy="36" r="18" stroke="rgba(255,255,255,0.1)" strokeWidth="5" fill="none" />
                <circle
                  cx="36"
                  cy="36"
                  r="18"
                  stroke="#38bdf8"
                  strokeWidth="5"
                  strokeDasharray="113"
                  strokeDashoffset="20"
                  strokeLinecap="round"
                  fill="none"
                  style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', transition: 'stroke-dashoffset 1s ease' }}
                />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, color: '#10b981' }}>
                88%
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f8fafc' }}>Health Rings Closed</div>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: 2 }}>Hydration, Movement &amp; Mindfulness on track.</div>
            </div>
          </div>

          {/* Live Hydration & Recovery Trackers */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div style={{ background: 'rgba(255,255,255,0.035)', padding: '10px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>💧 Water</span>
                <span style={{ fontSize: '0.6rem', color: '#38bdf8', fontWeight: 700 }}>80%</span>
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#38bdf8', marginTop: 3 }}>2.4 / 3.0 L</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.035)', padding: '10px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>😴 Recovery</span>
                <span style={{ fontSize: '0.6rem', color: '#a78bfa', fontWeight: 700 }}>Optimal</span>
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#a78bfa', marginTop: 3 }}>8h 15m</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'hairjourney',
      title: 'HairJourneyTracker',
      category: 'iOS · Health & Lifestyle · PhotosUI',
      status: '● Live on App Store',
      isLive: true,
      appStoreUrl: 'https://apps.apple.com/in/app/hairjourneytracker/id6760697820',
      islandText: 'PhotosUI · High-Res Milestones',
      islandColor: '#c026d3',
      icon: '✨',
      accentColor: '#c026d3',
      gradient: 'linear-gradient(135deg, #4a044e 0%, #701a75 50%, #c026d3 100%)',
      description:
        'A visual regimen companion allowing users to record high-resolution photographic milestones, analyze hair growth trends over time, evaluate treatment efficacy, and receive scheduled regimen notifications.',
      architecture:
        'PhotosUI Modern Photo Picker · Asynchronous Image Compression Pipeline · Local Core Data Photo Cache · UserNotifications Framework',
      qa:
        'High-res image memory spike profiling · Scheduled notifications background delivery testing · UI rendering smoothness tests',
      stack: ['SwiftUI', 'PhotosUI', 'Core Data', 'UserNotifications', 'Combine'],
      specs: {
        target: 'PhotosUI & Image Cache',
        minIOS: 'iOS 16.0+',
        architecture: 'Async Image Pipeline + Core Data',
        qaStatus: 'Zero Memory Spike Profiling'
      },
      renderScreen: () => (
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', color: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
            <div>
              <span style={{ fontSize: '0.64rem', color: '#f0abfc', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                Visual Regimen Tracker
              </span>
              <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>HairJourney</h4>
            </div>
            <span style={{ fontSize: '0.65rem', padding: '3px 8px', borderRadius: 12, backgroundColor: 'rgba(217, 70, 239, 0.2)', color: '#f0abfc', fontWeight: 700 }}>
              PhotosUI
            </span>
          </div>

          {/* Interactive Before & After Toggle */}
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: 14, border: '1px solid rgba(217, 70, 239, 0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700 }}>Milestone Comparison</span>
              <div style={{ display: 'flex', gap: 4 }}>
                <button
                  onClick={() => setHairDayIndex(0)}
                  style={{
                    padding: '2px 8px',
                    borderRadius: 6,
                    border: 'none',
                    backgroundColor: hairDayIndex === 0 ? '#c026d3' : 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Day 1
                </button>
                <button
                  onClick={() => setHairDayIndex(1)}
                  style={{
                    padding: '2px 8px',
                    borderRadius: 6,
                    border: 'none',
                    backgroundColor: hairDayIndex === 1 ? '#c026d3' : 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Day 90
                </button>
              </div>
            </div>

            {/* Display Active Milestone */}
            <div
              style={{
                height: '85px',
                borderRadius: 10,
                background: hairDayIndex === 0 ? 'linear-gradient(135deg, #2e1065, #4c1d95)' : 'linear-gradient(135deg, #701a75, #c026d3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'all 0.4s ease'
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>✨</span>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#fff', marginTop: 2 }}>
                {hairDayIndex === 0 ? 'Baseline: Day 1 Session' : 'Milestone 3: +34% Density'}
              </div>
              <span style={{ fontSize: '0.62rem', color: '#f5d0fe' }}>PhotosUI 4K High-Res Compression</span>
            </div>
          </div>

          <div style={{ padding: '10px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, fontSize: '0.72rem', color: '#cbd5e1' }}>
            🔔 Scheduled notification: Daily vitamin &amp; serum application at 09:00 PM.
          </div>
        </div>
      )
    },
    {
      id: 'schoolbus',
      title: 'School Bus Child Tracker',
      category: 'iOS · Safety & Location · Dual App',
      status: '● Production Tested',
      isLive: false,
      appStoreUrl: '#socials',
      islandText: 'Live MapKit · ETA 4m',
      islandColor: '#f59e0b',
      icon: '🚌',
      accentColor: '#f59e0b',
      gradient: 'linear-gradient(135deg, #78350f 0%, #b45309 50%, #f59e0b 100%)',
      description:
        'A dual-application safety ecosystem composed of dedicated Parent and Bus Driver applications. Features live bus location streaming on Apple Maps, automated geofence boundary alerts, and electronic student boarding attendance.',
      architecture:
        'MapKit & Core Location Sub-meter Accuracy · Firebase Realtime DB Location Telemetry · Geofence Region Monitoring · Dual App Architecture',
      qa:
        'Simulated moving GPS route stress tests · Reconnection resilience on cell signal loss · High-frequency location battery optimization',
      stack: ['Swift', 'MapKit', 'Core Location', 'Firebase', 'Geofencing'],
      specs: {
        target: 'Dual App (Parent & Driver)',
        minIOS: 'iOS 15.0+',
        architecture: 'MapKit + Firebase Realtime Stream',
        qaStatus: 'GPS Route Stress & Battery Tested'
      },
      renderScreen: () => (
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', color: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
            <div>
              <span style={{ fontSize: '0.64rem', color: '#fde047', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                Location Telemetry
              </span>
              <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>Bus Tracker</h4>
            </div>
            <span style={{ fontSize: '0.65rem', padding: '3px 8px', borderRadius: 12, backgroundColor: 'rgba(250, 204, 21, 0.2)', color: '#fde047', fontWeight: 700 }}>
              Live MapKit
            </span>
          </div>

          {/* Interactive Animated Map */}
          <div
            style={{
              position: 'relative',
              height: '145px',
              borderRadius: 14,
              background: '#1c1917',
              border: '1px solid rgba(250, 204, 21, 0.35)',
              overflow: 'hidden',
              boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8)'
            }}
          >
            {/* Map Road Grid */}
            <div style={{ position: 'absolute', top: '45%', left: 0, right: 0, height: 10, background: '#44403c' }} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '55%', width: 10, background: '#44403c' }} />
            <div style={{ position: 'absolute', top: '30%', left: '55%', right: 0, height: 8, background: '#44403c' }} />
            <div style={{ position: 'absolute', top: '30%', bottom: 0, left: '75%', width: 8, background: '#44403c' }} />

            {/* Geofence Perimeter Zone */}
            <div
              style={{
                position: 'absolute',
                top: '20%',
                left: '42%',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(250, 204, 21, 0.12)',
                border: '1.5px dashed #fde047'
              }}
            />

            {/* Traveling School Bus Icon along route */}
            <div className="animated-bus">
              <div style={{ position: 'relative', width: 28, height: 28, background: '#f59e0b', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', boxShadow: '0 0 12px #f59e0b' }}>
                🚌
                <div className="radar-sonar" />
              </div>
            </div>

            {/* Real-time Map telemetry banner */}
            <div
              style={{
                position: 'absolute',
                bottom: 8,
                left: 10,
                fontSize: '0.64rem',
                color: '#fef08a',
                background: 'rgba(0,0,0,0.8)',
                padding: '3px 8px',
                borderRadius: 6,
                fontWeight: 700,
                fontFamily: 'monospace'
              }}
            >
              Speed: 38 km/h · ETA: 4m (En Route)
            </div>
          </div>

          {/* Student Boarding Verification */}
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 12px', borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(250, 204, 21, 0.2)' }}>
            <div>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#f8fafc' }}>Student Attendance</div>
              <div style={{ fontSize: '0.62rem', color: '#4ade80' }}>Boarded at 07:45 AM (Verified Safe)</div>
            </div>
            <span style={{ fontSize: '0.74rem', color: '#fde047', fontWeight: 700 }}>✓ Onboard</span>
          </div>
        </div>
      )
    }
  ];

  const currentApp = apps[activeAppIndex];

  return (
    <div id="iphone-studio" style={{ marginTop: '20px', marginBottom: '60px', scrollMarginTop: '100px' }}>
      {/* Studio Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            borderRadius: '20px',
            backgroundColor: 'rgba(10, 132, 255, 0.12)',
            color: '#64D2FF',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '10px',
            border: '1px solid rgba(10, 132, 255, 0.25)'
          }}
        >
           INTERACTIVE APPLE DEVICE STUDIO
        </span>
        <h3 style={{ fontSize: '2.2rem', margin: '0 0 8px 0', color: '#ffffff' }}>
          Test-Drive Apps on <span className="gradient-text-blue">iPhone 16 Pro</span>
        </h3>
        <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.98rem' }}>
          Select an app below to test the UI running inside the native Apple hardware frame with real-time animated telemetry.
        </p>
      </div>

      {/* App Switcher Pills */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '36px'
        }}
      >
        {apps.map((app, idx) => {
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
                backgroundColor: isSelected ? 'rgba(10, 132, 255, 0.22)' : 'rgba(255, 255, 255, 0.04)',
                border: `1px solid ${isSelected ? '#0A84FF' : 'rgba(255, 255, 255, 0.08)'}`,
                color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.86rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: isSelected ? '0 4px 20px rgba(10, 132, 255, 0.35)' : 'none'
              }}
            >
              <span>{app.icon}</span>
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

      {/* Dual Column: iPhone Showcase + Details Design */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 360px) minmax(0, 1fr)',
          gap: '48px',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '36px',
          backdropFilter: 'blur(20px)'
        }}
        className="studio-grid"
      >
        {/* Left Column: iPhone Hardware Mockup with Hardware Side Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div className="iphone-chassis floating-device">
            {/* Physical Buttons on Chassis Rim */}
            <div className="iphone-btn-action" title="Action Button" />
            <div className="iphone-btn-vol-up" title="Volume Up" />
            <div className="iphone-btn-vol-down" title="Volume Down" />
            <div className="iphone-btn-power" title="Side Button" />

            <div className="iphone-screen">
              {/* Glare Glass Overlay */}
              <div className="iphone-glare" />

              {/* Dynamic Island with Expansion Animation */}
              <div
                className={`dynamic-island ${islandExpanded ? 'island-pop' : ''}`}
                style={{
                  width: islandExpanded ? '140px' : '105px',
                  height: islandExpanded ? '30px' : '26px',
                  backgroundColor: '#000000',
                  boxShadow: '0 0 15px rgba(0,0,0,0.8)'
                }}
              >
                <span className="dynamic-island-camera" />
                <span
                  style={{
                    fontSize: '0.62rem',
                    color: '#ffffff',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    maxWidth: '85px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {currentApp.islandText}
                </span>
                <span className="dynamic-island-sensor" style={{ backgroundColor: currentApp.islandColor }} />
              </div>

              {/* iOS Status Bar */}
              <div className="ios-status-bar">
                <span>9:41</span>
                <div className="ios-status-icons">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="currentColor">
                    <path d="M1 9h1V8H1v1zm3 0h1V6H4v3zm3 0h1V4H7v5zm3 0h1V1h-1v8z" />
                  </svg>
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="currentColor">
                    <path d="M6 1C3.5 1 1.5 2.5.5 3.5L6 9.5l5.5-6C10.5 2.5 8.5 1 6 1z" />
                  </svg>
                  <span style={{ fontSize: '0.68rem' }}>100%</span>
                </div>
              </div>

              {/* Screen Content: Live Interactive Simulation */}
              <div style={{ flex: 1, overflowY: 'auto' }}>
                {currentApp.renderScreen()}
              </div>

              {/* Home Indicator */}
              <div className="home-indicator" />
            </div>
          </div>
        </div>

        {/* Right Column: Details Design Panel */}
        <div>
          {/* Status and Category */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: 20,
                backgroundColor: currentApp.isLive ? 'rgba(48, 209, 88, 0.2)' : 'rgba(255, 159, 10, 0.2)',
                color: currentApp.isLive ? '#30d158' : '#ff9f0a',
                border: `1px solid ${currentApp.isLive ? 'rgba(48, 209, 88, 0.4)' : 'rgba(255, 159, 10, 0.4)'}`
              }}
            >
              {currentApp.status}
            </span>
            <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              {currentApp.category}
            </span>
          </div>

          <h3 style={{ fontSize: '2.4rem', margin: '0 0 14px 0', color: '#ffffff', fontWeight: 800 }}>
            {currentApp.title}
          </h3>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '24px' }}>
            {currentApp.description}
          </p>

          {/* Technical Specifications Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              marginBottom: '24px'
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                Device Target
              </span>
              <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 600, marginTop: 4 }}>
                {currentApp.specs.target}
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                Architecture
              </span>
              <div style={{ fontSize: '0.92rem', color: '#64D2FF', fontWeight: 600, marginTop: 4 }}>
                {currentApp.specs.architecture}
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                QA Discipline
              </span>
              <div style={{ fontSize: '0.92rem', color: '#30D158', fontWeight: 600, marginTop: 4 }}>
                {currentApp.specs.qaStatus}
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div style={{ marginBottom: '28px' }}>
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
          </div>
        </div>
      </div>

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
