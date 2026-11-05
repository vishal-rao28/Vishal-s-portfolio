import React from 'react';

function Footer() {
  return (
    <footer id="socials" style={{ paddingTop: '80px', paddingBottom: '50px' }}>
      {/* Top Header Badge & Tagline */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '24px',
            backgroundColor: 'rgba(48, 209, 88, 0.12)',
            color: '#30D158',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            border: '1px solid rgba(48, 209, 88, 0.3)',
            marginBottom: '14px'
          }}
        >
          <span className="status-beacon" />
          ● ACTIVE DISPATCH · READY FOR NEW OPPORTUNITIES
        </span>
        <h2
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            margin: '0 0 10px 0',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            lineHeight: 1.15
          }}
        >
          Let's Engineer <span className="gradient-text-blue">Something Iconic</span>.
        </h2>
        <p
          style={{
            fontSize: '1.02rem',
            color: 'var(--text-secondary)',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          Available for high-impact native iOS engineering, on-device Core ML vision architectures, and industrial automated testing pipelines.
        </p>
      </div>

      {/* Main Glass Console (Left Side Frame Only, in Horizontal Layout) */}
      <div
        className="glass-card"
        style={{
          padding: '32px 32px 36px 32px',
          borderRadius: '24px',
          marginBottom: '50px'
        }}
      >
        {/* Frame Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px', flexWrap: 'wrap', gap: '10px' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--apple-cyan, #0284c7)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
            Direct Engineering Ingestion
          </span>
          <span style={{ fontSize: '0.76rem', color: '#30D158', fontWeight: 600 }}>
            ● Encrypted &amp; Direct
          </span>
        </div>

        {/* 4 Interactive Channels in Horizontal Layout */}
        <div className="contact-horizontal-grid">
          {/* Tile 1: Mail Vishal via Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vishalrao5432@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div
              style={{
                borderRadius: '16px',
                padding: '20px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                height: '100%',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => {
                const isLight = document.documentElement.getAttribute('data-theme') === 'light';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#0A84FF';
                e.currentTarget.style.boxShadow = isLight 
                  ? '0 0 0 1px rgba(0, 113, 227, 0.4), inset 0 2px 2px #ffffff, 0 20px 45px -6px rgba(0, 113, 227, 0.25)' 
                  : '0 0 0 1px rgba(10, 132, 255, 0.45), inset 0 2px 3px 0 rgba(255, 255, 255, 0.45), 0 20px 48px -6px rgba(10, 132, 255, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  className="contact-channel-icon-pod pod-mail"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(10, 132, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--apple-blue)',
                    border: '1px solid rgba(10, 132, 255, 0.3)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.49l8.073-5.997c1.618-1.214 3.927-.059 3.927 1.964z"/>
                  </svg>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--apple-cyan, #0284c7)', fontWeight: 700 }}>Open Gmail ↗</span>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                  Direct Inbox
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: 3 }}>
                  Mail Vishal
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  vishalrao5432@gmail.com
                </div>
              </div>
            </div>
          </a>

          {/* Tile 2: Direct Phone & WhatsApp */}
          <a href="tel:+916382190388" style={{ textDecoration: 'none' }}>
            <div
              style={{
                borderRadius: '16px',
                padding: '20px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                height: '100%',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => {
                const isLight = document.documentElement.getAttribute('data-theme') === 'light';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#FF9F0A';
                e.currentTarget.style.boxShadow = isLight 
                  ? '0 0 0 1px rgba(217, 119, 6, 0.4), inset 0 2px 2px #ffffff, 0 20px 45px -6px rgba(217, 119, 6, 0.25)' 
                  : '0 0 0 1px rgba(255, 159, 10, 0.45), inset 0 2px 3px 0 rgba(255, 255, 255, 0.45), 0 20px 48px -6px rgba(255, 159, 10, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  className="contact-channel-icon-pod pod-phone"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 159, 10, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FF9F0A',
                    border: '1px solid rgba(255, 159, 10, 0.3)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--apple-amber)', fontWeight: 700 }}>Direct Call ↗</span>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                  Cellular &amp; WhatsApp
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: 3 }}>
                  +91 63821 90388
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  Voice, SMS &amp; Instant Messaging
                </div>
              </div>
            </div>
          </a>

          {/* Tile 3: Verified Executive Resume */}
          <a href="./Vishal_Rao_UDI.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div
              style={{
                borderRadius: '16px',
                padding: '20px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                height: '100%',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => {
                const isLight = document.documentElement.getAttribute('data-theme') === 'light';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#BF5AF2';
                e.currentTarget.style.boxShadow = isLight 
                  ? '0 0 0 1px rgba(147, 51, 234, 0.4), inset 0 2px 2px #ffffff, 0 20px 45px -6px rgba(147, 51, 234, 0.25)' 
                  : '0 0 0 1px rgba(191, 90, 242, 0.45), inset 0 2px 3px 0 rgba(255, 255, 255, 0.45), 0 20px 48px -6px rgba(191, 90, 242, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  className="contact-channel-icon-pod pod-resume"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(191, 90, 242, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#BF5AF2',
                    border: '1px solid rgba(191, 90, 242, 0.3)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--apple-purple)', fontWeight: 700 }}>PDF Dossier ↗</span>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                  Official Credentials
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: 3 }}>
                  Download Resume
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  Verified Technical Dossier
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          paddingTop: '20px',
          borderTop: '1px solid var(--border-subtle)'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>Vishal Rao M</span>
            <span style={{ color: '#0A84FF', fontWeight: 800 }}>·</span>
            <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>iOS Developer &amp; Technical Engineer</span>
          </div>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © 2026 Vishal Rao M. Crafted with React &amp; Apple HIG paradigms.
          </p>
        </div>

        {/* Social Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/vishal-rao-173a232b9"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="footer-social-icon-btn linkedin"
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0A84FF';
              e.currentTarget.style.borderColor = '#0A84FF';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-card)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/vishal-rao28"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="footer-social-icon-btn github"
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-card)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>

          {/* Email (Opens Gmail) */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vishalrao5432@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Gmail (vishalrao5432@gmail.com)"
            className="footer-social-icon-btn email"
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#EA4335';
              e.currentTarget.style.borderColor = '#EA4335';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-card)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.49l8.073-5.997c1.618-1.214 3.927-.059 3.927 1.964z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/_v.i.s.h.uuu_28/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram Profile (@_v.i.s.h.uuu_28)"
            className="footer-social-icon-btn instagram"
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E1306C';
              e.currentTarget.style.borderColor = '#E1306C';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(225, 48, 108, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-card)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
      </div>
    </div>
  </footer>
);
}

export default Footer;
