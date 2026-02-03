import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import PaymentModal from './PaymentModal';

const UpgradePrompt = ({ 
  title = "🚀 Upgrade to Premium", 
  subtitle = "Unlock unlimited access to all questions and features",
  feature = "questions",
  currentCount = 0,
  maxCount = 5
}) => {
  const { user, isDemoUser } = useAuth();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Only show to demo users
  if (!isDemoUser(user)) return null;

  const handleUpgrade = () => {
    setShowPaymentModal(true);
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '24px',
        borderRadius: '16px',
        margin: '20px 0',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ 
          margin: '0 0 8px 0', 
          fontSize: '1.4rem',
          fontWeight: '600'
        }}>
          {title}
        </h3>
        <p style={{ 
          margin: '0 0 12px 0', 
          opacity: 0.9,
          fontSize: '1rem',
          lineHeight: '1.5'
        }}>
          {subtitle}
        </p>
        
        <div style={{
          background: 'rgba(255, 255, 255, 0.15)',
          padding: '12px',
          borderRadius: '8px',
          margin: '16px 0',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '0.9rem', marginBottom: '8px' }}>
            📊 Your {feature} usage: <strong>{currentCount} of {maxCount}</strong>
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            height: '8px',
            overflow: 'hidden',
            margin: '8px 0'
          }}>
            <div style={{
              background: currentCount >= maxCount ? '#ff6b6b' : '#4ecdc4',
              height: '100%',
              width: `${Math.min((currentCount / maxCount) * 100, 100)}%`,
              transition: 'width 0.3s ease'
            }} />
          </div>
          {currentCount >= maxCount && (
            <div style={{ 
              color: '#ffeb3b', 
              fontSize: '0.85rem',
              fontWeight: '500' 
            }}>
              ⚠️ You've reached your demo limit
            </div>
          )}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ 
          margin: '0 0 12px 0', 
          fontSize: '1.1rem',
          color: '#ffeb3b'
        }}>
          ⭐ Premium Features:
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
          textAlign: 'left'
        }}>
          <div style={{ fontSize: '0.9rem' }}>
            <div>✅ Unlimited questions</div>
            <div>✅ All domains access</div>
          </div>
          <div style={{ fontSize: '0.9rem' }}>
            <div>✅ Full practice exams</div>
            <div>✅ Detailed analytics</div>
          </div>
          <div style={{ fontSize: '0.9rem' }}>
            <div>✅ Progress tracking</div>
            <div>✅ Export results</div>
          </div>
        </div>
      </div>

      <button
        onClick={handleUpgrade}
        style={{
          background: 'linear-gradient(135deg, #4CAF50, #45a049)',
          color: 'white',
          border: 'none',
          padding: '14px 32px',
          borderRadius: '25px',
          fontSize: '1.1rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
          minWidth: '200px'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';
        }}
      >
        🚀 Upgrade to Premium - $9.99/month
      </button>

      <div style={{ 
        marginTop: '16px', 
        fontSize: '0.8rem', 
        opacity: 0.8 
      }}>
        💝 30-day money-back guarantee • Cancel anytime
      </div>

      <PaymentModal 
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        selectedPlan="monthly"
      />
    </div>
  );
};

export default UpgradePrompt;
