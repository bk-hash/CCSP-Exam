import React from 'react';
import { useTheme } from '../contexts';

const ThemeToggle = () => {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: theme.cardBackground,
        color: theme.text,
        fontSize: '1.5rem',
        cursor: 'pointer',
        boxShadow: `0 4px 12px ${theme.shadow}`,
        border: `1px solid ${theme.border}`,
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.boxShadow = `0 6px 16px ${theme.shadow}`;
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = `0 4px 12px ${theme.shadow}`;
      }}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
