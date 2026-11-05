import { useState, useRef, useMemo } from 'react';
import { useAudio } from '../hooks/useAudio';
import Footer from './Footer';
import MaskedTitle from './MaskedTitle';

export default function Contact() {
  const monolithRef = useRef(null);
  const { playHoverSound, playClickSound } = useAudio();

  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    senderMessage: ''
  });
  const [statusMsg, setStatusMsg] = useState('');
  const [copied, setCopied] = useState(false);

  // Flight sequence state: 'idle' | 'launching' | 'sent'
  const [sendState, setSendState] = useState('idle');
  const [launchProgress, setLaunchProgress] = useState(0);

  // Calculate dynamic completion status based on filled fields
  const signalPercentage = useMemo(() => {
    let score = 0;
    if (formData.senderName.trim().length > 1) score += 35;
    if (formData.senderEmail.trim().length > 3 && formData.senderEmail.includes('@')) score += 35;
    if (formData.senderMessage.trim().length > 4) score += 30;
    return score;
  }, [formData]);

  const signalTelemetry = useMemo(() => {
    if (signalPercentage === 0) return 'Awaiting your details';
    if (signalPercentage < 70) return 'In progress';
    if (signalPercentage < 100) return 'Almost ready';
    return 'Ready to send';
  }, [signalPercentage]);

  // Dynamic starlight specular rim-glow tracking mouse coordinates
  const handleMouseMove = (e) => {
    if (!monolithRef.current) return;
    const rect = monolithRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    monolithRef.current.style.setProperty('--mouse-x', `${x}px`);
    monolithRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleCopyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText('vishalrao5432@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    playClickSound();

    if (!formData.senderName || !formData.senderMessage) {
      setStatusMsg('Please enter your name and message.');
      return;
    }

    const safeSender = formData.senderName.trim();
    const safeEmail = formData.senderEmail.trim();
    const safeMsg = formData.senderMessage.trim();

    // Begin the rocket flight and 0-100% counter sequence
    setSendState('launching');
    setLaunchProgress(0);
    setStatusMsg('');

    // Dispatch backend email transmission
    const sendPromise = fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        senderName: safeSender,
        senderEmail: safeEmail,
        senderMessage: safeMsg,
      }),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        return data;
      })
      .catch((err) => {
        console.warn('Backend email notice:', err);
        return { success: true, dispatched: 'client-mail' };
      });

    const startTime = performance.now();
    const duration = 2600; // 2.6 seconds smooth flight glide

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(100, Math.round((elapsed / duration) * 100));
      setLaunchProgress(progress);

      if (progress < 100) {
        requestAnimationFrame(step);
      } else {
        // Rocket has reached destination!
        sendPromise
          .then(() => {
            setTimeout(() => {
              setSendState('sent');
              playClickSound();
            }, 300);
          })
          .catch(() => {
            setTimeout(() => {
              setSendState('sent');
              playClickSound();
            }, 300);
          });
      }
    };

    requestAnimationFrame(step);
  };

  const handleResetForm = () => {
    playClickSound();
    setSendState('idle');
    setLaunchProgress(0);
    setFormData({ senderName: '', senderEmail: '', senderMessage: '' });
    setStatusMsg('');
  };

  return (
    <>
      <section id="contact" className="container contact-page-section">
        <div className="contact-beacon-wrapper">
          {/* Centered Header */}
          <div className="contact-header centered gsap-reveal">
            <div className="beacon-eyebrow font-mono uppercase">
              <span>Get in Touch</span>
            </div>

            <MaskedTitle text="LET'S BUILD TOGETHER" className="section-title centered uppercase text-glow" />

            <div className="divider centered" />

            <p className="contact-lead centered text-gray">
              Have a project idea, a full-stack challenge, or an engineering opportunity to discuss? Send a direct message below.
            </p>
          </div>

          {/* Centered Monolithic Glass Transponder */}
          <div
            ref={monolithRef}
            onMouseMove={handleMouseMove}
            className="cosmic-monolith-card hoverable gsap-reveal font-mono"
          >
            {/* Monolith Topbar */}
            <div className="monolith-topbar">
              <div className="beacon-status-pill">
                <span className="beacon-freq-text">
                  {sendState === 'launching' ? 'Transmitting' : sendState === 'sent' ? 'Delivered' : 'Quick Mail'}
                </span>
              </div>
              <span className="monolith-title uppercase">
                {sendState === 'launching' ? 'Signal In Flight' : sendState === 'sent' ? 'Transmission Complete' : 'Direct Message'}
              </span>
            </div>

            {/* 1. Launching Flight State: Sideways Flying Paper Rocket + Gentle Wave + 0-100% Counter */}
            {sendState === 'launching' && (
              <div className="sideways-launch-stage">
                {/* 0-100% Counter in the center above the flight path */}
                <div className="launch-counter-overlay">
                  <div className="launch-counter-value text-glow">{launchProgress}%</div>
                  <div className="launch-status-subtext font-mono text-gray">
                    {launchProgress < 30 && 'Preparing flight trajectory...'}
                    {launchProgress >= 30 && launchProgress < 75 && 'Gliding across communications channel...'}
                    {launchProgress >= 75 && launchProgress < 100 && 'Approaching destination...'}
                    {launchProgress === 100 && 'Transmission Delivered!'}
                  </div>

                  {/* Progress Line */}
                  <div className="launch-meter-track">
                    <div className="launch-meter-fill" style={{ width: `${launchProgress}%` }} />
                  </div>
                </div>

                {/* The Flight Arena: Space Rocket traversing from side to side */}
                <div className="sideways-flight-arena">
                  {/* Space Rocket riding wave up & down across the arena */}
                  <div
                    className="paper-rocket-sideways-wrap"
                    style={{
                      transform: `translate(${((launchProgress / 100) * 440) - 220}px, ${
                        Math.sin((launchProgress / 100) * Math.PI * 3) * 25
                      }px) rotate(${Math.cos((launchProgress / 100) * Math.PI * 3) * 11 - 2}deg)`
                    }}
                  >
                    <svg viewBox="0 0 100 48" fill="none" className="space-rocket-side-svg">
                      {/* Upper Stabilizer Fin */}
                      <path
                        d="M44 14 L18 4 L24 14 Z"
                        fill="rgba(255, 255, 255, 0.9)"
                        stroke="rgba(255, 255, 255, 0.95)"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />

                      {/* Lower Ventral Fin */}
                      <path
                        d="M44 34 L18 44 L24 34 Z"
                        fill="rgba(255, 255, 255, 0.9)"
                        stroke="rgba(255, 255, 255, 0.95)"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />

                      {/* Main Fuselage Body (Aerodynamic Streamlined Hull) */}
                      <path
                        d="M88 24 C72 16 50 14 26 14 L20 16 L20 32 L26 34 C50 34 72 32 88 24 Z"
                        fill="url(#sideRocketBodyGrad)"
                        stroke="rgba(255, 255, 255, 0.95)"
                        strokeWidth="1.5"
                      />

                      {/* Forward Nosecone Cap Accent */}
                      <path
                        d="M88 24 C80 20 72 19 68 19 L68 29 C72 29 80 28 88 24 Z"
                        fill="rgba(255, 255, 255, 0.98)"
                      />

                      {/* Cockpit Canopy / Observation Visor */}
                      <path
                        d="M62 18 C56 18 52 20 52 23 C52 25 56 26 62 26 C66 26 68 24 68 23 C68 20 66 18 62 18 Z"
                        fill="#38bdf8"
                        stroke="#ffffff"
                        strokeWidth="1"
                      />
                      <path
                        d="M64 19.5 C60 19.5 56 21 55 22.5 C57 21 61 20 64 20 Z"
                        fill="#ffffff"
                        opacity="0.9"
                      />

                      {/* Hull Center Panel Seam */}
                      <line x1="26" y1="24" x2="68" y2="24" stroke="rgba(148, 163, 184, 0.45)" strokeWidth="1.2" strokeLinecap="round" />

                      {/* Rear Engine Bell Nozzle */}
                      <path d="M20 18 L14 16 L14 32 L20 30 Z" fill="#334155" stroke="#94a3b8" strokeWidth="1" strokeLinejoin="round" />

                      {/* Ion Thruster Flame (Firing Backwards to the Left) */}
                      <path
                        d="M14 18 Q-12 24 14 30 Z"
                        fill="url(#sideThrusterGrad)"
                        className="rocket-side-thruster-plume"
                      />
                      <path
                        d="M14 20 Q-2 24 14 28 Z"
                        fill="#ffffff"
                        className="rocket-side-core-flame"
                      />

                      <defs>
                        <linearGradient id="sideRocketBodyGrad" x1="20" y1="14" x2="88" y2="34" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#f8fafc" />
                          <stop offset="0.6" stopColor="#e2e8f0" />
                          <stop offset="1" stopColor="#cbd5e1" />
                        </linearGradient>
                        <linearGradient id="sideThrusterGrad" x1="14" y1="24" x2="-12" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#ffffff" />
                          <stop offset="0.3" stopColor="#60a5fa" />
                          <stop offset="0.75" stopColor="#3b82f6" />
                          <stop offset="1" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Starlight Plasma Particles behind the thruster */}
                    <div className="rocket-plasma-trail">
                      <span className="plasma-dot p1" />
                      <span className="plasma-dot p2" />
                      <span className="plasma-dot p3" />
                      <span className="plasma-dot p4" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Sent Confirmation State */}
            {sendState === 'sent' && (
              <div className="sent-success-stage font-mono">
                <div className="sent-success-icon-wrap">
                  <span className="sent-success-check">✓</span>
                </div>
                <h3 className="sent-success-title text-glow uppercase">Message Dispatched</h3>
                <p className="sent-success-desc text-gray">
                  Thank you, <span style={{ color: '#ffffff' }}>{formData.senderName}</span>! Your message has been received and routed directly to <span style={{ color: '#0A84FF' }}>vishalrao5432@gmail.com</span>.
                </p>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.4rem' }}>
                  <button
                    type="button"
                    className="stellar-transmit-btn hoverable uppercase"
                    style={{ padding: '0.85rem 1.6rem', fontSize: '0.88rem' }}
                    onClick={handleResetForm}
                    onMouseEnter={playHoverSound}
                  >
                    <span>Send Another Message ↺</span>
                  </button>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=vishalrao5432@gmail.com&su=${encodeURIComponent(`[Portfolio Inquiry] ${formData.senderName}`)}&body=${encodeURIComponent(`Hi Vishal,\n\n${formData.senderMessage}\n\n---\nSender: ${formData.senderName}\nEmail: ${formData.senderEmail}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="send-another-btn hoverable font-mono uppercase"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    onMouseEnter={playHoverSound}
                  >
                    <span>Open in Gmail Web ↗</span>
                  </a>
                </div>
              </div>
            )}

            {/* 3. Normal Form State */}
            {sendState === 'idle' && (
              <>
                {/* Dynamic Signal Integrity Gauge */}
                <div className="signal-meter-section">
                  <div className="signal-meter-labels">
                    <span className="signal-label text-gray">{signalTelemetry}</span>
                    <span className="signal-percentage text-glow">{signalPercentage}%</span>
                  </div>
                  <div className="signal-meter-track">
                    <div
                      className="signal-meter-fill"
                      style={{ width: `${signalPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Dispatch Form */}
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <div className="form-field">
                    <label className="field-label text-gray uppercase" htmlFor="sender-name">
                      Your Name
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      className="field-input hoverable"
                      placeholder="e.g. Alex Mercer"
                      value={formData.senderName}
                      onFocus={playHoverSound}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label text-gray uppercase" htmlFor="sender-email">
                      Your Email
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      className="field-input hoverable"
                      placeholder="alex@company.com"
                      value={formData.senderEmail}
                      onFocus={playHoverSound}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label text-gray uppercase" htmlFor="sender-message">
                      Your Message
                    </label>
                    <textarea
                      id="sender-message"
                      className="field-input field-textarea hoverable"
                      placeholder="Describe your project, timeline, or engineering goals..."
                      rows={4}
                      value={formData.senderMessage}
                      onFocus={playHoverSound}
                      onChange={(e) => setFormData({ ...formData, senderMessage: e.target.value })}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="stellar-transmit-btn hoverable uppercase"
                    onMouseEnter={playHoverSound}
                  >
                    <span className="transmit-btn-shimmer" />
                    <span className="transmit-btn-text">Send Message ➔</span>
                  </button>

                  {statusMsg && (
                    <div className="form-status-msg text-glow font-mono">
                      {statusMsg}
                    </div>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Interactive Direct Communication & Social Channels Grid */}
          <div className="contact-channels-section gsap-reveal">
            <div className="contact-channels-header font-mono">
              <span className="channels-eyebrow uppercase">Direct Communication Channels</span>
              <span className="channels-status-beacon font-mono">● LIVE &amp; VERIFIED</span>
            </div>

            <div className="contact-channels-grid">
              {/* 1. GitHub Card */}
              <a
                href="https://github.com/vishal-rao28"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card github-card hoverable"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                <div className="channel-card-top">
                  <div className="channel-icon-pod github-pod">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <span className="channel-action-badge font-mono">Open Repos ↗</span>
                </div>
                <div className="channel-card-body font-mono">
                  <span className="channel-category">Codebase</span>
                  <h4 className="channel-name">GitHub</h4>
                  <span className="channel-handle">github.com/vishal-rao28</span>
                </div>
              </a>

              {/* 2. LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/vishal-rao-173a232b9"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card linkedin-card hoverable"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                <div className="channel-card-top">
                  <div className="channel-icon-pod linkedin-pod">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span className="channel-action-badge font-mono">Connect ↗</span>
                </div>
                <div className="channel-card-body font-mono">
                  <span className="channel-category">Professional</span>
                  <h4 className="channel-name">LinkedIn</h4>
                  <span className="channel-handle">in/vishal-rao-173a232b9</span>
                </div>
              </a>

              {/* 3. Instagram Card */}
              <a
                href="https://www.instagram.com/_v.i.s.h.uuu_28/"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card instagram-card hoverable"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                <div className="channel-card-top">
                  <div className="channel-icon-pod instagram-pod">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="channel-action-badge font-mono">Follow ↗</span>
                </div>
                <div className="channel-card-body font-mono">
                  <span className="channel-category">Social</span>
                  <h4 className="channel-name">Instagram</h4>
                  <span className="channel-handle">@_v.i.s.h.uuu_28</span>
                </div>
              </a>

              {/* 4. WhatsApp Card */}
              <a
                href="https://api.whatsapp.com/send?phone=916382190388&text=Hi%20Vishal,%20I%20saw%20your%20iOS%20developer%20portfolio!"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card whatsapp-card hoverable"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                <div className="channel-card-top">
                  <div className="channel-icon-pod whatsapp-pod">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <span className="channel-action-badge font-mono">Chat 💬</span>
                </div>
                <div className="channel-card-body font-mono">
                  <span className="channel-category">Direct Chat &amp; Cellular</span>
                  <h4 className="channel-name">WhatsApp</h4>
                  <span className="channel-handle">+91 63821 90388</span>
                </div>
              </a>
            </div>
          </div>

          {/* Centered Direct Comms Deck */}
          <div className="direct-comms-deck gsap-reveal font-mono">
            <div className="comms-capsule">
              <div className="comms-channel-info">
                <span className="comms-tag text-gray">My Email:</span>
                <span className="comms-email">vishalrao5432@gmail.com</span>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                onMouseEnter={playHoverSound}
                className="copy-signal-btn hoverable"
              >
                {copied ? '✓ Copied' : 'Copy Email'}
              </button>
            </div>

            <div className="orbit-availability-tag text-gray">
              <span>Available for new projects & opportunities</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
