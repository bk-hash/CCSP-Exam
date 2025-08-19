import React, { useState } from 'react';
import { useSubscription, useTheme } from '../contexts';

const PricingSection = () => {
  const { subscription, subscriptionTiers, upgradeSubscription } = useSubscription();
  const { theme } = useTheme();
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleUpgrade = (tier) => {
    if (tier === subscription.tier) return;
    
    // In a real app, this would integrate with Stripe
    if (window.confirm(`Upgrade to ${subscriptionTiers[tier].name}?`)) {
      upgradeSubscription(tier);
    }
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      background: theme.background
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '48px'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          background: theme.gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '16px'
        }}>
          Choose Your Learning Plan
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: theme.textSecondary,
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Accelerate your CCSP certification journey with our comprehensive study platform
        </p>
      </div>

      {/* Billing Toggle */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '40px'
      }}>
        <div style={{
          background: theme.cardBackground,
          borderRadius: '12px',
          padding: '4px',
          display: 'flex',
          border: `1px solid ${theme.border}`
        }}>
          {['monthly', 'yearly'].map((cycle) => (
            <button
              key={cycle}
              onClick={() => setBillingCycle(cycle)}
              style={{
                padding: '8px 24px',
                border: 'none',
                borderRadius: '8px',
                background: billingCycle === cycle ? theme.accent : 'transparent',
                color: billingCycle === cycle ? '#fff' : theme.text,
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
              {cycle === 'yearly' && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: theme.success,
                  color: '#fff',
                  fontSize: '0.7rem',
                  padding: '2px 6px',
                  borderRadius: '8px'
                }}>
                  Save 20%
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        alignItems: 'stretch'
      }}>
        {Object.entries(subscriptionTiers).map(([tier, details]) => (
          <PricingCard
            key={tier}
            tier={tier}
            details={details}
            isCurrentPlan={subscription.tier === tier}
            billingCycle={billingCycle}
            onUpgrade={() => handleUpgrade(tier)}
          />
        ))}
      </div>

      {/* FAQ Section */}
      <div style={{
        marginTop: '80px',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '2rem',
          color: theme.text,
          marginBottom: '32px'
        }}>
          Frequently Asked Questions
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          textAlign: 'left'
        }}>
          <FAQItem
            question="Can I cancel anytime?"
            answer="Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
          />
          <FAQItem
            question="Is there a free trial?"
            answer="Our free plan gives you access to Domain 1 questions and basic features. You can upgrade anytime to unlock more content."
          />
          <FAQItem
            question="Are the questions updated regularly?"
            answer="Yes, we regularly update our question bank to reflect the latest CCSP exam objectives and industry best practices."
          />
          <FAQItem
            question="Can I use this offline?"
            answer="Premium subscribers can download questions for offline study. This feature is perfect for studying during commutes or travel."
          />
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({ tier, details, isCurrentPlan, billingCycle, onUpgrade }) => {
  const { theme } = useTheme();
  const isPopular = tier === 'basic';
  const yearlyPrice = details.price * 10; // 20% discount for yearly
  const displayPrice = billingCycle === 'yearly' ? yearlyPrice : details.price;

  return (
    <div style={{
      background: theme.cardBackground,
      borderRadius: '16px',
      padding: '32px 24px',
      border: isPopular ? `2px solid ${theme.accent}` : `1px solid ${theme.border}`,
      position: 'relative',
      boxShadow: isPopular ? `0 8px 32px ${theme.shadow}` : `0 4px 16px ${theme.shadow}20`,
      transform: isPopular ? 'scale(1.05)' : 'scale(1)',
      transition: 'all 0.3s ease'
    }}>
      {isPopular && (
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: theme.accent,
          color: '#fff',
          padding: '6px 20px',
          borderRadius: '16px',
          fontSize: '0.8rem',
          fontWeight: '600'
        }}>
          Most Popular
        </div>
      )}

      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: theme.text,
          marginBottom: '8px'
        }}>
          {details.name}
        </h3>
        
        <div style={{ marginBottom: '16px' }}>
          {tier === 'free' ? (
            <span style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: theme.text
            }}>
              Free
            </span>
          ) : (
            <div>
              <span style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: theme.text
              }}>
                ${displayPrice}
              </span>
              <span style={{
                fontSize: '1rem',
                color: theme.textSecondary,
                marginLeft: '4px'
              }}>
                /{billingCycle === 'yearly' ? 'year' : 'month'}
              </span>
              {billingCycle === 'yearly' && (
                <div style={{
                  fontSize: '0.8rem',
                  color: theme.success,
                  marginTop: '4px'
                }}>
                  Save ${(details.price * 12) - yearlyPrice} per year
                </div>
              )}
            </div>
          )}
        </div>

        <button
          onClick={onUpgrade}
          disabled={isCurrentPlan}
          style={{
            width: '100%',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: isCurrentPlan ? 'default' : 'pointer',
            background: isCurrentPlan 
              ? theme.textSecondary 
              : isPopular 
                ? theme.accent 
                : `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
            color: '#fff',
            opacity: isCurrentPlan ? 0.7 : 1,
            transition: 'all 0.3s ease'
          }}
        >
          {isCurrentPlan ? 'Current Plan' : `Upgrade to ${details.name}`}
        </button>
      </div>

      <div style={{ space: '16px 0' }}>
        <FeatureList features={details.features} tier={tier} />
      </div>
    </div>
  );
};

const FeatureList = ({ features, tier }) => {
  const { theme } = useTheme();

  const featureDescriptions = {
    questionsPerDay: (value) => value === -1 ? 'Unlimited questions per day' : `${value} questions per day`,
    domains: (value) => value === 'all' ? 'All 6 CCSP domains' : `${value.length} domains available`,
    practiceExams: (value) => value === -1 ? 'Unlimited practice exams' : value === 0 ? 'No practice exams' : `${value} practice exams`,
    progressTracking: (value) => `${value.charAt(0).toUpperCase() + value.slice(1)} progress tracking`,
    studyTips: (value) => value ? 'Study tips and strategies' : null,
    analytics: (value) => value === 'comprehensive' ? 'Comprehensive analytics dashboard' : value === 'basic' ? 'Basic analytics' : null,
    offlineMode: (value) => value ? 'Offline study mode' : null,
    prioritySupport: (value) => value ? 'Priority customer support' : null
  };

  return (
    <div>
      {Object.entries(features).map(([feature, value]) => {
        const description = featureDescriptions[feature]?.(value);
        if (!description) return null;

        return (
          <div
            key={feature}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
              fontSize: '0.9rem'
            }}
          >
            <span style={{
              color: theme.success,
              marginRight: '12px',
              fontSize: '1.1rem'
            }}>
              ✓
            </span>
            <span style={{ color: theme.text }}>
              {description}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      background: theme.cardBackground,
      borderRadius: '8px',
      border: `1px solid ${theme.border}`,
      overflow: 'hidden'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '16px',
          border: 'none',
          background: 'transparent',
          color: theme.text,
          fontSize: '1rem',
          fontWeight: '600',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {question}
        <span style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div style={{
          padding: '0 16px 16px 16px',
          color: theme.textSecondary,
          lineHeight: '1.6'
        }}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default PricingSection;
