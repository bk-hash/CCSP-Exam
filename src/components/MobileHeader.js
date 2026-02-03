import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts';
import Logo from './Logo';

const MobileHeader = ({ currentMessageIndex, motivationalMessages }) => {
  const { theme } = useTheme();
  const [isMinimized, setIsMinimized] = useState(false);

  // Auto-minimize header on scroll for mobile
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsMinimized(true);
      } else if (currentScrollY < lastScrollY) {
        setIsMinimized(false);
      }
      
      lastScrollY = currentScrollY;
    };

    // Only add scroll listener on mobile
    if (window.innerWidth <= 768) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .mobile-header {
            position: sticky !important;
            top: 0 !important;
            z-index: 100 !important;
            transition: all 0.3s ease !important;
          }
          .mobile-header.minimized {
            padding: 8px 0 !important;
            transform: translateY(0) !important;
          }
          .mobile-header.minimized .logo-container {
            transform: scale(0.8) !important;
          }
          .mobile-header.minimized .motivational-text {
            opacity: 0 !important;
            height: 0 !important;
            margin: 0 !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-header {
            position: relative !important;
          }
        }
      `}</style>
      
      <header 
        className={`mobile-header ${isMinimized ? 'minimized' : ''}`}
        style={{
          width: "100%",
          background: theme.gradient,
          padding: isMinimized ? "8px 0" : "20px 0 16px 0",
          textAlign: "center",
          color: "#fff",
          boxShadow: `0 2px 12px 0 ${theme.shadow}`,
          transition: "all 0.3s ease",
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div 
          className="logo-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: isMinimized ? '0' : '12px',
            transition: 'all 0.3s ease'
          }}
        >
          <Logo 
            size={window.innerWidth <= 768 ? (isMinimized ? 'small' : 'medium') : 'large'} 
            showText={true}
          />
        </div>
        
        <div 
          className="motivational-text"
          style={{
            fontSize: "clamp(0.9rem, 3vw, 1.3rem)",
            fontWeight: 500,
            letterSpacing: "0.02em",
            opacity: isMinimized ? 0 : 1,
            height: isMinimized ? 0 : 'auto',
            overflow: 'hidden',
            transition: "all 0.3s ease",
            margin: isMinimized ? '0' : '0 20px',
            lineHeight: '1.3'
          }}
        >
          🚀 {motivationalMessages[currentMessageIndex]}
        </div>
        
        {/* Mobile-specific subtitle */}
        {window.innerWidth <= 768 && !isMinimized && (
          <div style={{
            fontSize: '0.75rem',
            opacity: 0.9,
            marginTop: '4px',
            fontWeight: 400
          }}>
            Interactive CCSP Exam Preparation
          </div>
        )}
      </header>
    </>
  );
};

export default MobileHeader;
