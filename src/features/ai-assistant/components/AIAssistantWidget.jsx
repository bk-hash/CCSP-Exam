/**
 * AIAssistantWidget Component
 * Main widget that manages the AI assistant UI
 */

import React, { useState, useEffect } from 'react';
import FloatingButton from './FloatingButton';
import ChatWindow from './ChatWindow';
import { AIProvider } from '../context/AIContext';
import '../styles/ai-assistant.css';

const AIAssistantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeChat();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <AIProvider>
      <div className="ai-assistant-widget" aria-label="AI Study Assistant">
        {isOpen && <ChatWindow onClose={closeChat} />}
        <FloatingButton onClick={toggleChat} isOpen={isOpen} />
      </div>
    </AIProvider>
  );
};

export default AIAssistantWidget;
