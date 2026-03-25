import React, { createContext, useContext, useState } from 'react';

/**
 * AI Assistant Context
 * Provides global access to AI assistant state and functions for opening it with context
 */
const AIAssistantContext = createContext();

export const useAIAssistant = () => {
  const context = useContext(AIAssistantContext);
  if (!context) {
    throw new Error('useAIAssistant must be used within AIAssistantProvider');
  }
  return context;
};

export const AIAssistantProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [context, setContext] = useState(null);

  const openWithContext = (newContext) => {
    setContext(newContext);
    setIsOpen(true);
  };

  const open = () => {
    setContext(null);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    // Keep context for a brief moment to allow smooth transition
    setTimeout(() => setContext(null), 300);
  };

  const value = {
    isOpen,
    context,
    openWithContext,
    open,
    close
  };

  return (
    <AIAssistantContext.Provider value={value}>
      {children}
    </AIAssistantContext.Provider>
  );
};

export default AIAssistantContext;
