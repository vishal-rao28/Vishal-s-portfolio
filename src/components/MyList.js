import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import vishalPhoto from '../assets/img/vishal_optimized1.jpg';

function MyList() {
  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: ' iPhone Studio', href: '#iphone-studio' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#socials' }
  ];

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Profile Header */}
      <div style={{ textAlign: 'center', marginBottom: 24, paddingTop: 10 }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Avatar
            src={vishalPhoto}
            alt="Vishal Rao M"
            style={{
              height: 84,
              width: 84,
              margin: '0 auto 12px auto',
              border: '2px solid #0A84FF',
              boxShadow: '0 0 20px rgba(10, 132, 255, 0.3)'
            }}
          />
          <span
            style={{
              position: 'absolute',
              bottom: 12,
              right: 4,
              width: 14,
              height: 14,
              borderRadius: '50%',
              backgroundColor: '#30D158',
              border: '2px solid var(--bg-primary)'
            }}
          />
        </div>
        <h3 style={{ margin: '0 0 4px 0', fontSize: '1.15rem', color: 'var(--text-primary)' }}>Vishal Rao M</h3>
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>iOS Developer &amp; QA Engineer</p>
      </div>

      {/* Navigation List */}
      <List style={{ width: '100%' }}>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={scrollTo(item.href)}
            style={{ textDecoration: 'none', color: 'var(--text-primary)' }}
          >
            <ListItem
              button
              style={{
                borderRadius: 10,
                marginBottom: 6,
                padding: '10px 16px',
                transition: 'background-color 0.2s ease'
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  style: {
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)'
                  }
                }}
              />
            </ListItem>
          </a>
        ))}
      </List>

      {/* Resume CTA & Instagram */}
      <div style={{ marginTop: 'auto', paddingTop: 20 }}>
        <a
          href="./Vishal_Rao_UDI.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button
            style={{
              width: '100%',
              padding: '12px 16px',
              backgroundColor: '#0A84FF',
              color: '#ffffff',
              border: 'none',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              boxShadow: '0 4px 15px rgba(10, 132, 255, 0.3)',
              marginBottom: 10
            }}
          >
            <span>Download Resume</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </a>

        {/* Quick Instagram link in Drawer */}
        <a
          href="https://www.instagram.com/_v.i.s.h.uuu_28/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button
            style={{
              width: '100%',
              padding: '10px 16px',
              backgroundColor: 'rgba(225, 48, 108, 0.12)',
              color: '#E1306C',
              border: '1px solid rgba(225, 48, 108, 0.35)',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#E1306C' }}>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram @_v.i.s.h.uuu_28</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default MyList;
