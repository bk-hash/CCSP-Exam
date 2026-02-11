/**
 * AI Context Provider
 * Provides AI assistant state to the application
 */

import React, { createContext, useContext, useState, useCallback } from 'react';

const AIContext = createContext(null);

export const AIProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    autoSuggest: true,
    soundEnabled: false
  });
  const [usageStats, setUsageStats] = useState({
    messagesCount: 0,
    sessionsCount: 0
  });

  /**
   * Toggle chat window
   */
  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  /**
   * Open chat window
   */
  const openChat = useCallback(() => {
    setIsOpen(true);
  }, []);

  /**
   * Close chat window
   */
  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  /**
   * Update preferences
   * @param {object} newPreferences - New preference values
   */
  const updatePreferences = useCallback((newPreferences) => {
    setPreferences(prev => ({ ...prev, ...newPreferences }));
  }, []);

  /**
   * Increment usage stats
   * @param {string} type - Type of stat to increment
   */
  const incrementUsage = useCallback((type) => {
    setUsageStats(prev => ({
      ...prev,
      [`${type}Count`]: (prev[`${type}Count`] || 0) + 1
    }));
  }, []);

  const value = {
    isOpen,
    toggleChat,
    openChat,
    closeChat,
    preferences,
    updatePreferences,
    usageStats,
    incrementUsage
  };

  return <AIContext.Provider value={value}>{children}</AIContext.Provider>;
};

/**
 * Hook to use AI context
 */
export const useAIContext = () => {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAIContext must be used within AIProvider');
  }
  return context;
};
