import React from 'react';
import { useSubscription, useTheme } from '../contexts';

const SubscriptionGate = ({ 
  requiredTier = 'basic', 
  feature = null, 
  children, 
  fallback = null 
}) => {
  const { subscription, subscriptionTiers } = useSubscription();
  const { theme } = useTheme();

  // Check if user has required tier or higher
  const tierHierarchy = ['free', 'basic', 'premium'];
  const userTierIndex = tierHierarchy.indexOf(subscription.tier);
  const requiredTierIndex = tierHierarchy.indexOf(requiredTier);
  
  let hasAccess = userTierIndex >= requiredTierIndex;

  // If checking for a specific feature
  if (feature) {
    hasAccess = subscription.features[feature];
  }

  if (hasAccess) {
    return children;
  }

  // Default upgrade prompt if no fallback provided
  if (!fallback) {
    return (
      <div style={{
        padding: '24px',
        background: theme.cardBackground,
        borderRadius: '12px',
        border: `2px solid ${theme.accent}`,
        textAlign: 'center',
        margin: '16px 0'
      }}>
        <div style={{
          fontSize: '48px',
          marginBottom: '16px'
        }}>
          🔒
        </div>
        <h3 style={{
          color: theme.text,
          marginBottom: '12px',
          fontSize: '1.5rem'
        }}>
          Premium Feature
        </h3>
        <p style={{
          color: theme.textSecondary,
          marginBottom: '20px',
          lineHeight: '1.6'
        }}>
          {feature ? 
            `This feature requires ${subscriptionTiers[requiredTier].name} subscription` :
            `Upgrade to ${subscriptionTiers[requiredTier].name} to access this content`
          }
        </p>
        <UpgradeButton targetTier={requiredTier} />
      </div>
    );
  }

  return fallback;
};

const UpgradeButton = ({ targetTier }) => {
  const { subscriptionTiers, upgradeSubscription } = useSubscription();
  const { theme } = useTheme();

  const handleUpgrade = () => {
    // In a real app, this would integrate with Stripe/payment processor
    if (window.confirm(`Upgrade to ${subscriptionTiers[targetTier].name} for $${subscriptionTiers[targetTier].price}/month?`)) {
      upgradeSubscription(targetTier);
    }
  };

  return (
    <button
      onClick={handleUpgrade}
      style={{
        background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`,
        color: '#fff',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        boxShadow: `0 4px 12px ${theme.shadow}`
      }}
      onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
      onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
    >
      Upgrade to {subscriptionTiers[targetTier].name} - ${subscriptionTiers[targetTier].price}/month
    </button>
  );
};

const UsageMeter = () => {
  const { subscription, usage, canAccessQuestions } = useSubscription();
  const { theme } = useTheme();

  if (subscription.features.questionsPerDay === -1) {
    return null; // Unlimited usage
  }

  const percentage = (usage.questionsToday / subscription.features.questionsPerDay) * 100;
  const isNearLimit = percentage > 80;

  return (
    <div style={{
      background: theme.cardBackground,
      padding: '16px',
      borderRadius: '8px',
      margin: '8px 0',
      border: `1px solid ${theme.border}`
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
      }}>
        <span style={{
          fontSize: '0.9rem',
          color: theme.textSecondary
        }}>
          Daily Questions
        </span>
        <span style={{
          fontSize: '0.9rem',
          color: isNearLimit ? theme.error : theme.text,
          fontWeight: '600'
        }}>
          {usage.questionsToday}/{subscription.features.questionsPerDay}
        </span>
      </div>
      
      <div style={{
        width: '100%',
        height: '8px',
        background: theme.background,
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${Math.min(percentage, 100)}%`,
          height: '100%',
          background: isNearLimit ? theme.error : theme.accent,
          transition: 'width 0.3s ease'
        }} />
      </div>
      
      {!canAccessQuestions() && (
        <div style={{
          marginTop: '12px',
          padding: '8px',
          background: `${theme.error}20`,
          borderRadius: '4px',
          fontSize: '0.85rem',
          color: theme.error
        }}>
          Daily limit reached. Upgrade for more questions!
        </div>
      )}
    </div>
  );
};

const SubscriptionStatus = () => {
  const { subscription, subscriptionTiers } = useSubscription();
  const { theme } = useTheme();

  const currentTier = subscriptionTiers[subscription.tier];

  return (
    <div style={{
      background: theme.cardBackground,
      padding: '20px',
      borderRadius: '12px',
      border: `1px solid ${theme.border}`,
      margin: '16px 0'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <h3 style={{
          color: theme.text,
          margin: 0,
          fontSize: '1.2rem'
        }}>
          Current Plan: {currentTier.name}
        </h3>
        {subscription.tier !== 'free' && (
          <span style={{
            background: theme.accent,
            color: '#fff',
            padding: '4px 12px',
            borderRadius: '16px',
            fontSize: '0.8rem',
            fontWeight: '600'
          }}>
            ${currentTier.price}/month
          </span>
        )}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '12px'
      }}>
        <FeatureItem 
          label="Questions per day" 
          value={subscription.features.questionsPerDay === -1 ? 'Unlimited' : subscription.features.questionsPerDay}
        />
        <FeatureItem 
          label="Available domains" 
          value={subscription.features.domains === 'all' ? 'All 6 domains' : `${subscription.features.domains.length} domains`}
        />
        <FeatureItem 
          label="Practice exams" 
          value={subscription.features.practiceExams === -1 ? 'Unlimited' : subscription.features.practiceExams}
        />
        <FeatureItem 
          label="Study tips" 
          value={subscription.features.studyTips ? '✅' : '❌'}
        />
        <FeatureItem 
          label="Analytics" 
          value={subscription.features.analytics || '❌'}
        />
        <FeatureItem 
          label="Offline mode" 
          value={subscription.features.offlineMode ? '✅' : '❌'}
        />
      </div>
    </div>
  );
};

const FeatureItem = ({ label, value }) => {
  const { theme } = useTheme();
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 0'
    }}>
      <span style={{
        color: theme.textSecondary,
        fontSize: '0.9rem'
      }}>
        {label}
      </span>
      <span style={{
        color: theme.text,
        fontWeight: '600',
        fontSize: '0.9rem'
      }}>
        {value}
      </span>
    </div>
  );
};

export { SubscriptionGate, UpgradeButton, UsageMeter, SubscriptionStatus };
