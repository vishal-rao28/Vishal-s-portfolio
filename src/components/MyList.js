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
              border: '2px solid #090d16'
            }}
          />
        </div>
        <h3 style={{ margin: '0 0 4px 0', fontSize: '1.15rem', color: '#ffffff' }}>Vishal Rao M</h3>
        <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>iOS Developer &amp; QA Engineer</p>
      </div>

      {/* Navigation List */}
      <List style={{ width: '100%' }}>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={scrollTo(item.href)}
            style={{ textDecoration: 'none', color: '#ffffff' }}
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
                    color: '#e2e8f0'
                  }
                }}
              />
            </ListItem>
          </a>
        ))}
      </List>

      {/* Resume CTA */}
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
              boxShadow: '0 4px 15px rgba(10, 132, 255, 0.3)'
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
      </div>
    </div>
  );
}

export default MyList;
