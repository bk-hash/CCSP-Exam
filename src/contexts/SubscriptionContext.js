import React, { createContext, useContext, useState, useEffect } from 'react';

const SubscriptionContext = createContext();

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};

export const SubscriptionProvider = ({ children }) => {
  const [subscription, setSubscription] = useState({
    tier: 'free', // free, basic, premium
    status: 'active', // active, cancelled, expired
    currentPeriodEnd: null,
    features: {
      questionsPerDay: 10,
      domains: ['Domain 1'],
      practiceExams: 0,
      progressTracking: 'basic',
      studyTips: false,
      analytics: false,
      offlineMode: false,
      prioritySupport: false
    }
  });

  const [usage, setUsage] = useState({
    questionsToday: 0,
    lastResetDate: new Date().toDateString()
  });

  // Subscription tiers configuration
  const subscriptionTiers = {
    free: {
      name: "Free",
      price: 0,
      features: {
        questionsPerDay: 10,
        domains: ['Domain 1'],
        practiceExams: 0,
        progressTracking: 'basic',
        studyTips: false,
        analytics: false,
        offlineMode: false,
        prioritySupport: false
      }
    },
    basic: {
      name: "Basic",
      price: 9.99,
      period: "monthly",
      features: {
        questionsPerDay: 50,
        domains: ['Domain 1', 'Domain 2', 'Domain 3'],
        practiceExams: 2,
        progressTracking: 'advanced',
        studyTips: true,
        analytics: 'basic',
        offlineMode: false,
        prioritySupport: false
      }
    },
    premium: {
      name: "Premium",
      price: 19.99,
      period: "monthly",
      features: {
        questionsPerDay: -1, // unlimited
        domains: 'all',
        practiceExams: -1, // unlimited
        progressTracking: 'advanced',
        studyTips: true,
        analytics: 'comprehensive',
        offlineMode: true,
        prioritySupport: true
      }
    }
  };

  // Reset daily usage
  useEffect(() => {
    const today = new Date().toDateString();
    if (usage.lastResetDate !== today) {
      setUsage({
        questionsToday: 0,
        lastResetDate: today
      });
    }
  }, [usage.lastResetDate]);

  // Load subscription from localStorage
  useEffect(() => {
    const savedSubscription = localStorage.getItem('subscription');
    const savedUsage = localStorage.getItem('usage');
    
    if (savedSubscription) {
      setSubscription(JSON.parse(savedSubscription));
    }
    
    if (savedUsage) {
      setUsage(JSON.parse(savedUsage));
    }
  }, []);

  // Save to localStorage when subscription changes
  useEffect(() => {
    localStorage.setItem('subscription', JSON.stringify(subscription));
  }, [subscription]);

  useEffect(() => {
    localStorage.setItem('usage', JSON.stringify(usage));
  }, [usage]);

  const checkFeatureAccess = (feature) => {
    return subscription.features[feature];
  };

  const canAccessQuestions = () => {
    if (subscription.features.questionsPerDay === -1) return true;
    return usage.questionsToday < subscription.features.questionsPerDay;
  };

  const canAccessDomain = (domain) => {
    if (subscription.features.domains === 'all') return true;
    return subscription.features.domains.includes(domain);
  };

  const canAccessPracticeExams = () => {
    return subscription.features.practiceExams > 0 || subscription.features.practiceExams === -1;
  };

  const incrementQuestionUsage = () => {
    if (subscription.features.questionsPerDay !== -1) {
      setUsage(prev => ({
        ...prev,
        questionsToday: prev.questionsToday + 1
      }));
    }
  };

  const upgradeSubscription = (tier) => {
    const newSubscription = {
      ...subscription,
      tier: tier,
      features: subscriptionTiers[tier].features,
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
    };
    setSubscription(newSubscription);
  };

  const cancelSubscription = () => {
    setSubscription(prev => ({
      ...prev,
      status: 'cancelled'
    }));
  };

  const value = {
    subscription,
    usage,
    subscriptionTiers,
    checkFeatureAccess,
    canAccessQuestions,
    canAccessDomain,
    canAccessPracticeExams,
    incrementQuestionUsage,
    upgradeSubscription,
    cancelSubscription
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};
