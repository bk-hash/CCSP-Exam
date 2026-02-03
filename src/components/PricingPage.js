import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts';
import PaymentModal from './PaymentModal';
import { PRICING, FEATURES } from '../config/stripe';

const PricingSection = () => {
  const { user, isDemoUser } = useAuth();
  const { theme } = useTheme();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  // Don't show to premium users
  if (!isDemoUser(user)) return null;

  const handleUpgrade = (planType) => {
    setSelectedPlan(planType);
    setShowPaymentModal(true);
  };

  const monthlyPrice = PRICING.premium.monthly.amount / 100;
  const yearlyPrice = PRICING.premium.yearly.amount / 100;
  const monthlySavings = (monthlyPrice * 12) - yearlyPrice;

  return (
    <div style={{
      padding: '40px 20px',
      background: theme.background,
      borderRadius: '16px',
      margin: '20px 0',
      border: `1px solid ${theme.border}`
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{
          color: theme.text,
          fontSize: '2.2rem',
          fontWeight: '700',
          marginBottom: '12px',
          background: 'linear-gradient(135deg, #4285f4, #34a853)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          🚀 Upgrade to Premium
        </h2>
        <p style={{
          color: theme.textSecondary,
          fontSize: '1.1rem',
          margin: 0,
          lineHeight: '1.5'
        }}>
          Unlock the full power of CCSP exam preparation
        </p>
      </div>

      {/* Billing Toggle */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px'
      }}>
        <div style={{
          background: theme.cardBackground,
          padding: '4px',
          borderRadius: '50px',
          border: `1px solid ${theme.border}`,
          display: 'flex',
          gap: '4px'
        }}>
          <button
            onClick={() => setBillingPeriod('monthly')}
            style={{
              padding: '12px 24px',
              background: billingPeriod === 'monthly' ? '#4285f4' : 'transparent',
              color: billingPeriod === 'monthly' ? 'white' : theme.text,
              border: 'none',
              borderRadius: '46px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('yearly')}
            style={{
              padding: '12px 24px',
              background: billingPeriod === 'yearly' ? '#4285f4' : 'transparent',
              color: billingPeriod === 'yearly' ? 'white' : theme.text,
              border: 'none',
              borderRadius: '46px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              position: 'relative'
            }}
          >
            Yearly
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: '#e74c3c',
              color: 'white',
              fontSize: '0.7rem',
              padding: '2px 6px',
              borderRadius: '10px',
              fontWeight: '600'
            }}>
              SAVE ${monthlySavings}
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Demo Plan */}
        <div style={{
          background: theme.cardBackground,
          padding: '30px',
          borderRadius: '16px',
          border: `2px solid ${theme.border}`,
          textAlign: 'center',
          position: 'relative',
          opacity: 0.7
        }}>
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#95a5a6',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '0.8rem',
            fontWeight: '600'
          }}>
            CURRENT
          </div>
          
          <h3 style={{
            color: theme.text,
            fontSize: '1.4rem',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            🎯 Demo Account
          </h3>
          
          <div style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: theme.text,
            marginBottom: '20px'
          }}>
            FREE
          </div>

          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 30px 0'
          }}>
            {FEATURES.demo.map((feature, index) => (
              <li key={index} style={{
                color: theme.textSecondary,
                marginBottom: '8px',
                textAlign: 'left'
              }}>
                ❌ {feature}
              </li>
            ))}
          </ul>

          <button
            disabled
            style={{
              width: '100%',
              padding: '16px',
              background: '#95a5a6',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'not-allowed'
            }}
          >
            Current Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div style={{
          background: theme.cardBackground,
          padding: '30px',
          borderRadius: '16px',
          border: '2px solid #4285f4',
          textAlign: 'center',
          position: 'relative',
          boxShadow: '0 8px 32px rgba(66, 133, 244, 0.2)'
        }}>
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'linear-gradient(135deg, #4285f4, #34a853)',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '0.8rem',
            fontWeight: '600'
          }}>
            RECOMMENDED
          </div>
          
          <h3 style={{
            color: theme.text,
            fontSize: '1.4rem',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            ⭐ Premium Account
          </h3>
          
          <div style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#4285f4',
            marginBottom: '8px'
          }}>
            ${billingPeriod === 'monthly' ? monthlyPrice : Math.round(yearlyPrice / 12)}
            <span style={{ fontSize: '1rem', color: theme.textSecondary }}>
              /month
            </span>
          </div>

          {billingPeriod === 'yearly' && (
            <div style={{
              color: '#27ae60',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              Billed annually (${yearlyPrice}) • Save ${monthlySavings}
            </div>
          )}

          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 30px 0'
          }}>
            {FEATURES.premium.map((feature, index) => (
              <li key={index} style={{
                color: theme.text,
                marginBottom: '8px',
                textAlign: 'left'
              }}>
                ✅ {feature}
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleUpgrade(billingPeriod)}
            style={{
              width: '100%',
              padding: '16px',
              background: 'linear-gradient(135deg, #4285f4, #34a853)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 24px rgba(66, 133, 244, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            🚀 Upgrade Now
          </button>
        </div>
      </div>

      {/* Guarantee */}
      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        padding: '20px',
        background: theme.background,
        borderRadius: '12px',
        border: `1px solid ${theme.border}`
      }}>
        <p style={{
          color: theme.textSecondary,
          margin: 0,
          fontSize: '0.9rem'
        }}>
          💝 <strong>30-day money-back guarantee</strong> • Cancel anytime • 
          Secure payment processing • No hidden fees
        </p>
      </div>

      <PaymentModal 
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
};

export default PricingSection;
