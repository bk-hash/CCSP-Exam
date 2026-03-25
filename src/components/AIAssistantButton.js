import React from 'react';
import { useTheme } from '../contexts';

/**
 * Floating AI Assistant Button
 * Shows a persistent button that opens the AI assistant
 */
function AIAssistantButton({ onClick, hasUnread = false }) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: 'none',
        background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
        color: '#fff',
        fontSize: '28px',
        cursor: 'pointer',
        boxShadow: isHovered 
          ? '0 8px 24px rgba(67, 160, 71, 0.4)' 
          : '0 4px 12px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Segoe UI", Arial, sans-serif'
      }}
      title="Open AI Learning Assistant"
    >
      <span style={{ position: 'relative' }}>
        🤖
        {hasUnread && (
          <span
            style={{
              position: 'absolute',
              top: -2,
              right: -2,
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#ff5252',
              border: '2px solid #fff'
            }}
          />
        )}
      </span>
      
      {/* Tooltip */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            right: '70px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: theme.cardBackground,
            color: theme.text,
            padding: '8px 12px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            whiteSpace: 'nowrap',
            fontSize: '14px',
            fontWeight: 500,
            pointerEvents: 'none'
          }}
        >
          AI Learning Assistant
          <div
            style={{
              position: 'absolute',
              right: '-6px',
              top: '50%',
              transform: 'translateY(-50%) rotate(45deg)',
              width: '12px',
              height: '12px',
              background: theme.cardBackground
            }}
          />
        </div>
      )}
    </button>
  );
}

export default AIAssistantButton;
