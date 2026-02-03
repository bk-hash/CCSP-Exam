import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts';

const MobileBottomNav = ({ section, setSection }) => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { key: "Dashboard", icon: "🏠", label: "Home" },
    { key: "Quiz", icon: "📝", label: "Quiz" },
    { key: "Flashcards", icon: "🃏", label: "Cards" },
    { key: "PracticeExams", icon: "📊", label: "Exams" },
    { key: "Pricing", icon: "⭐", label: "Premium" }
  ];

  // Hide/show bottom nav on scroll for mobile
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    if (window.innerWidth <= 768) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .mobile-bottom-nav {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 100 !important;
            transform: translateY(${isVisible ? '0' : '100%'}) !important;
            transition: transform 0.3s ease !important;
            border-top: 1px solid ${theme.border} !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
          }
          
          .mobile-nav-item {
            min-height: 60px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            flex: 1 !important;
            text-decoration: none !important;
            border: none !important;
            background: none !important;
            cursor: pointer !important;
            transition: all 0.2s ease !important;
            padding: 8px 4px !important;
          }
          
          .mobile-nav-item:active {
            transform: scale(0.95) !important;
          }
          
          .mobile-nav-icon {
            font-size: 1.2rem !important;
            margin-bottom: 2px !important;
            transition: transform 0.2s ease !important;
          }
          
          .mobile-nav-label {
            font-size: 0.7rem !important;
            font-weight: 500 !important;
            text-align: center !important;
            line-height: 1 !important;
          }
          
          .mobile-nav-item.active .mobile-nav-icon {
            transform: scale(1.1) !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-bottom-nav {
            display: none !important;
          }
        }
        
        /* Add safe area padding for iOS devices */
        @supports (padding-bottom: env(safe-area-inset-bottom)) {
          .mobile-bottom-nav {
            padding-bottom: env(safe-area-inset-bottom) !important;
          }
        }
      `}</style>
      
      <nav 
        className="mobile-bottom-nav"
        style={{
          background: `${theme.cardBackground}f0`, // Semi-transparent
          borderTop: `1px solid ${theme.border}`,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingBottom: '8px',
          boxShadow: `0 -4px 20px ${theme.shadow}`
        }}
      >
        {navItems.map(({ key, icon, label }) => (
          <button
            key={key}
            className={`mobile-nav-item ${section === key ? 'active' : ''}`}
            onClick={() => setSection(key)}
            style={{
              color: section === key ? theme.primary : theme.textSecondary,
              background: section === key ? `${theme.primary}15` : 'transparent',
              borderRadius: section === key ? '12px' : '8px',
              margin: '4px 2px'
            }}
          >
            <div className="mobile-nav-icon">{icon}</div>
            <div className="mobile-nav-label">{label}</div>
          </button>
        ))}
      </nav>
    </>
  );
};

export default MobileBottomNav;
