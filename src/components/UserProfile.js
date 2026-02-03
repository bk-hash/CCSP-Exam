import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts';
import PaymentModal from './PaymentModal';

const UserProfile = () => {
  const { user, signOut, isDemoUser } = useAuth();
  const { theme } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!user) return null;

  const handleSignOut = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      signOut();
    }
  };

  return (
    <div
      ref={dropdownRef}
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: theme.cardBackground,
          padding: '8px 16px',
          borderRadius: '25px',
          boxShadow: `0 4px 12px ${theme.shadow}`,
          border: `1px solid ${theme.border}`,
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <img
          src={user.picture}
          alt={user.name}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: `2px solid ${isDemoUser(user) ? '#ff9800' : '#4285f4'}`
          }}
        />
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: '600',
              color: theme.text,
              lineHeight: '1.2'
            }}
          >
            {user.given_name}
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              color: theme.textSecondary,
              lineHeight: '1.2'
            }}
          >
            {isDemoUser(user) ? '🎯 Demo User' : '⭐ Premium User'}
          </span>
        </div>

        <span
          style={{
            fontSize: '0.8rem',
            color: theme.textSecondary,
            transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}
        >
          ▼
        </span>
      </div>

      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: '0',
            marginTop: '8px',
            background: theme.cardBackground,
            borderRadius: '12px',
            boxShadow: `0 8px 24px ${theme.shadow}`,
            border: `1px solid ${theme.border}`,
            padding: '12px',
            minWidth: '200px',
            zIndex: 1001
          }}
        >
          <div style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: `1px solid ${theme.border}` }}>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: theme.text, marginBottom: '4px' }}>
              {user.name}
            </div>
            <div style={{ fontSize: '0.8rem', color: theme.textSecondary, marginBottom: '8px' }}>
              {user.email}
            </div>
            <div
              style={{
                fontSize: '0.75rem',
                padding: '4px 8px',
                borderRadius: '12px',
                background: isDemoUser(user) ? '#fff3cd' : '#d4edda',
                color: isDemoUser(user) ? '#856404' : '#155724',
                display: 'inline-block'
              }}
            >
              {isDemoUser(user) ? '🎯 Demo Account' : '⭐ Premium Account'}
            </div>
          </div>

          {isDemoUser(user) && (
            <button
              onClick={() => setShowPaymentModal(true)}
              style={{
                width: '100%',
                padding: '8px 12px',
                background: 'linear-gradient(135deg, #4285f4, #34a853)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: '500',
                cursor: 'pointer',
                marginBottom: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 4px 12px rgba(66, 133, 244, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              🚀 Upgrade to Premium
            </button>
          )}

          <button
            onClick={handleSignOut}
            style={{
              width: '100%',
              padding: '8px 12px',
              background: 'transparent',
              color: '#dc3545',
              border: `1px solid #dc3545`,
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#dc3545';
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#dc3545';
            }}
          >
            🚪 Sign Out
          </button>
        </div>
      )}

      <PaymentModal 
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        selectedPlan="monthly"
      />
    </div>
  );
};

export default UserProfile;
