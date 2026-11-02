import React, { useEffect, useState } from 'react';
import DrawerComponent from './DrawerComponent';

function Header() {
  const [visibilityDrawer, setVisibilityDrawer] = useState('none');
  const [visibilityLinks, setVisibilityLinks] = useState('flex');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setVisibilityDrawer('flex');
        setVisibilityLinks('none');
      } else {
        setVisibilityDrawer('none');
        setVisibilityLinks('flex');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        padding: '0 24px',
        top: 0,
        position: 'fixed',
        zIndex: 100,
        backgroundColor: '#fff',
        width: '100vw',
        borderBottom: '1px solid #ededed',
        alignItems: 'center',
        height: '64px',
        boxSizing: 'border-box'
      }}
    >
      <h1 style={{ textAlign: 'left', width: 'auto', margin: 0, fontSize: '1.45rem', cursor: 'pointer' }} onClick={scrollTo('root')}>
        Vishal Rao <strong style={{ color: '#006AFF' }}>.</strong>
      </h1>
      <div
        style={{
          display: 'flex',
          paddingRight: 10,
          alignItems: 'center',
          marginLeft: 'auto',
          justifyContent: 'end'
        }}
      >
        <span style={{ display: visibilityLinks, alignItems: 'center' }}>
          <a href="#about" onClick={scrollTo('about')}>
            <p className="headernav">About</p>
          </a>
          <a href="#skills" onClick={scrollTo('skills')}>
            <p className="headernav">Skills</p>
          </a>
          <a href="#projects" onClick={scrollTo('projects')}>
            <p className="headernav">Projects</p>
          </a>
          <a href="#experience" onClick={scrollTo('experience')}>
            <p className="headernav">Experience</p>
          </a>
          <a href="#socials" onClick={scrollTo('socials')}>
            <p className="headernav">Contact</p>
          </a>
          <a
            href="./Vishal_Rao_UDI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <p
              className="headernav"
              style={{
                backgroundColor: '#006AFF',
                color: '#fff',
                borderRadius: '8px',
                padding: '6px 14px',
                marginLeft: '8px'
              }}
            >
              Resume ↗
            </p>
          </a>
        </span>
        <span style={{ display: visibilityDrawer }}>
          <DrawerComponent />
        </span>
      </div>
    </div>
  );
}

export default Header;
