import React, { useState, useEffect, useRef, useCallback } from 'react';

// Custom Hook to manage theme globally
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlTheme = urlParams.get('theme');
      if (urlTheme === 'light' || urlTheme === 'dark') {
        return urlTheme;
      }
    }
    return localStorage.getItem('apple_portfolio_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('apple_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, setTheme, toggleTheme };
}

// Interactive Apple Glass Gesture Capsule
export function GestureThemeCapsule({ theme, setTheme, compact = false }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const startXRef = useRef(0);
  const currentDragRef = useRef(0);

  // Maximum drag travel distance
  const maxTravel = compact ? 26 : 38;

  // Compute knob offset: 0 for dark (left), maxTravel for light (right)
  const isLight = theme === 'light';
  const baseOffset = isLight ? maxTravel : 0;
  const currentOffset = Math.max(0, Math.min(maxTravel, baseOffset + dragX));

  const triggerThemeChange = useCallback((newTheme, method = 'Drag Gesture') => {
    if (newTheme !== theme) {
      setTheme(newTheme);
      setToastMessage(newTheme === 'light' ? '☀️ Light Mode · Cupertino Pearl Glass' : '🌙 Dark Mode · Midnight Obsidian Glass');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2400);
    }
  }, [theme, setTheme]);

  const handlePointerDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    startXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    currentDragRef.current = 0;
    setDragX(0);

    const onPointerMove = (moveEvent) => {
      const clientX = moveEvent.clientX || (moveEvent.touches && moveEvent.touches[0].clientX) || 0;
      const delta = clientX - startXRef.current;
      currentDragRef.current = delta;
      setDragX(delta);
    };

    const onPointerUp = () => {
      setIsDragging(false);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      const delta = currentDragRef.current;
      const threshold = maxTravel * 0.35;

      if (!isLight && delta > threshold) {
        triggerThemeChange('light', 'Swipe Right');
      } else if (isLight && delta < -threshold) {
        triggerThemeChange('dark', 'Swipe Left');
      } else if (Math.abs(delta) < 4) {
        // Simple tap toggles
        triggerThemeChange(isLight ? 'dark' : 'light', 'Tap Gesture');
      }
      setDragX(0);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('touchmove', onPointerMove);
    window.addEventListener('touchend', onPointerUp);
  };

  // Keyboard shortcut listener (Cmd/Ctrl + Shift + T) & Double tap listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === 'T' || e.key === 't')) {
        e.preventDefault();
        triggerThemeChange(theme === 'dark' ? 'light' : 'dark', 'Shortcut Gesture');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [theme, triggerThemeChange]);

  return (
    <>
      <div
        className="gesture-theme-pill"
        title="Swipe or drag to toggle Light / Dark theme"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: compact ? '6px' : '10px',
          padding: compact ? '4px 6px' : '6px 10px',
          borderRadius: '24px',
          background: isLight 
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 243, 249, 0.85))'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
          border: isLight ? '1px solid rgba(0, 0, 0, 0.12)' : '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: isLight
            ? '0 4px 18px rgba(0, 0, 0, 0.08), inset 0 1px 1px #ffffff'
            : '0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          touchAction: 'none',
          position: 'relative'
        }}
        onPointerDown={handlePointerDown}
      >
        {/* Left Icon (Dark - Moon) */}
        <span
          style={{
            fontSize: compact ? '0.78rem' : '0.92rem',
            opacity: isLight ? 0.45 : 1,
            transition: 'opacity 0.25s ease',
            lineHeight: 1
          }}
        >
          🌙
        </span>

        {/* Track */}
        <div
          style={{
            width: compact ? '48px' : '64px',
            height: compact ? '22px' : '26px',
            borderRadius: '14px',
            background: isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.08)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            padding: '2px',
            boxSizing: 'border-box'
          }}
        >
          {/* Draggable Knob */}
          <div
            style={{
              width: compact ? '18px' : '22px',
              height: compact ? '18px' : '22px',
              borderRadius: '50%',
              background: isLight 
                ? 'linear-gradient(135deg, #0071e3 0%, #005bb5 100%)'
                : 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
              boxShadow: isLight
                ? '0 2px 8px rgba(0, 113, 227, 0.5), inset 0 1px 1px #ffffff'
                : '0 2px 10px rgba(255, 255, 255, 0.4), inset 0 1px 1px #ffffff',
              transform: `translateX(${currentOffset}px)`,
              transition: isDragging ? 'none' : 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isLight ? '#ffffff' : '#090d16',
              fontSize: compact ? '9px' : '11px',
              fontWeight: 800
            }}
          >
            {isLight ? '☀️' : '●'}
          </div>
        </div>

        {/* Right Icon (Light - Sun) */}
        <span
          style={{
            fontSize: compact ? '0.78rem' : '0.92rem',
            opacity: isLight ? 1 : 0.45,
            transition: 'opacity 0.25s ease',
            lineHeight: 1
          }}
        >
          ☀️
        </span>

        {!compact && (
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: isLight ? '#475569' : '#94a3b8',
              marginLeft: '2px'
            }}
          >
            Swipe Theme
          </span>
        )}
      </div>

      {/* Apple HUD Toast Confirmation */}
      {showToast && (
        <div
          style={{
            position: 'fixed',
            top: '84px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            padding: '10px 22px',
            borderRadius: '20px',
            background: isLight ? 'rgba(255, 255, 255, 0.92)' : 'rgba(15, 23, 42, 0.92)',
            color: isLight ? '#0f172a' : '#ffffff',
            border: isLight ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: isLight
              ? '0 16px 40px rgba(0, 0, 0, 0.12), inset 0 1px 1px #ffffff'
              : '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            fontSize: '0.86rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'appleFadeDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span>{toastMessage}</span>
          <span style={{ fontSize: '0.72rem', color: isLight ? '#0071e3' : '#64D2FF', fontWeight: 600 }}>
            ● Gesture Activated
          </span>
        </div>
      )}
    </>
  );
}

// Floating Apple Gesture Dock Pill at bottom corner
export default function FloatingGestureThemeDock({ theme, setTheme }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <GestureThemeCapsule theme={theme} setTheme={setTheme} compact={false} />
    </div>
  );
}
