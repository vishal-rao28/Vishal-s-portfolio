import React, { useEffect, useState } from 'react';
import DrawerComponent from './DrawerComponent';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 860);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '68px',
        backgroundColor: scrolled ? 'rgba(9, 13, 22, 0.88)' : 'rgba(9, 13, 22, 0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'}`,
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#root"
          onClick={scrollTo('root')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none'
          }}
        >
          {/* Apple style icon */}
          <svg width="20" height="24" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.31-6.19-9.35-11.1-19.98-14.75-31.91-3.64-11.92-5.46-23.2-5.46-33.84 0-14.89 3.63-27.1 10.89-36.63 7.26-9.53 16.53-14.41 27.81-14.65 5.12 0 10.51 1.25 16.17 3.75 5.66 2.5 9.38 3.75 11.16 3.75 1.56 0 5.4-1.31 11.53-3.92 6.13-2.61 11.63-3.75 16.51-3.41 12.63.76 22.84 5.22 30.63 13.38-11.01 6.64-16.37 15.79-16.08 27.46.29 9.17 3.86 16.92 10.72 23.24 6.86 6.32 15.01 10.02 24.45 11.1-2.07 6.13-4.63 12.78-7.69 19.95zM119.22 33.54c0-7.39 2.66-14.41 7.98-21.05 5.32-6.64 12.01-10.96 20.08-12.95.12 1.34.18 2.51.18 3.51 0 7.39-2.76 14.51-8.28 21.36-5.52 6.85-12.29 11.08-20.31 12.69-.13-1.12-.19-2.14-.19-3.07z"
              fill="#0A84FF"
            />
          </svg>
          <span
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#ffffff'
            }}
          >
            Vishal Rao <span style={{ color: '#0A84FF' }}>.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        {!isMobile ? (
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '28px'
            }}
          >
            <a
              href="#about"
              onClick={scrollTo('about')}
              style={{
                fontSize: '0.92rem',
                fontWeight: 500,
                color: 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              About
            </a>
            <a
              href="#skills"
              onClick={scrollTo('skills')}
              style={{
                fontSize: '0.92rem',
                fontWeight: 500,
                color: 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Skills
            </a>
            <a
              href="#iphone-studio"
              onClick={scrollTo('iphone-studio')}
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#64D2FF',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64D2FF')}
            >
              <span> iPhone Studio</span>
            </a>
            <a
              href="#projects"
              onClick={scrollTo('projects')}
              style={{
                fontSize: '0.92rem',
                fontWeight: 500,
                color: 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={scrollTo('experience')}
              style={{
                fontSize: '0.92rem',
                fontWeight: 500,
                color: 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Experience
            </a>
            <a
              href="#socials"
              onClick={scrollTo('socials')}
              style={{
                fontSize: '0.92rem',
                fontWeight: 500,
                color: 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Contact
            </a>

            {/* Resume button */}
            <a
              href="./Vishal_Rao_UDI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 18px',
                borderRadius: '10px',
                background: 'rgba(10, 132, 255, 0.12)',
                color: '#64D2FF',
                border: '1px solid rgba(10, 132, 255, 0.3)',
                fontSize: '0.88rem',
                fontWeight: 600,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0A84FF';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(10, 132, 255, 0.12)';
                e.currentTarget.style.color = '#64D2FF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Resume</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </nav>
        ) : (
          /* Mobile Drawer trigger */
          <DrawerComponent />
        )}
      </div>
    </header>
  );
}

export default Header;
