import React, { useEffect } from 'react';
import { useTheme } from '../contexts';

const Logo = ({ size = 'large', showText = true }) => {
  const { theme } = useTheme();
  
  // Add CSS animation safely
  useEffect(() => {
    const animationId = 'logo-shimmer-animation';
    const existingStyle = document.getElementById(animationId);
    
    if (!existingStyle) {
      const style = document.createElement('style');
      style.id = animationId;
      style.textContent = `
        @keyframes logoShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .logo-shimmer {
          animation: logoShimmer 3s infinite;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
  
  const sizes = {
    small: { icon: '24px', text: '0.9rem', gap: '8px' },
    medium: { icon: '32px', text: '1.1rem', gap: '12px' },
    large: { icon: '48px', text: '1.8rem', gap: '16px' },
    xlarge: { icon: '64px', text: '2.5rem', gap: '20px' }
  };
  
  const currentSize = sizes[size];
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: currentSize.gap,
      fontFamily: '"Segoe UI", Arial, sans-serif'
    }}>
      {/* Security Shield Icon with Animation */}
      <div style={{
        width: currentSize.icon,
        height: currentSize.icon,
        background: 'linear-gradient(135deg, #4285f4, #34a853, #ea4335)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `calc(${currentSize.icon} * 0.6)`,
        color: 'white',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(66, 133, 244, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div 
          className="logo-shimmer"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)'
          }}
        />
        <span style={{ position: 'relative', zIndex: 1 }}>🛡️</span>
      </div>
      
      {showText && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <div style={{
            fontSize: currentSize.text,
            fontWeight: '800',
            background: 'linear-gradient(135deg, #4285f4, #34a853)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Cyber Security
          </div>
          <div style={{
            fontSize: `calc(${currentSize.text} * 0.7)`,
            fontWeight: '600',
            color: theme.primary,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginTop: '-2px'
          }}>
            Study Labs
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
