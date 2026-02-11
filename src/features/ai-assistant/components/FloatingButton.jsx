/**
 * FloatingButton Component
 * Floating button in bottom-right corner
 */

import React from 'react';

const FloatingButton = ({ onClick, isOpen }) => {
  return (
    <button
      className="ai-assistant-floating-button"
      onClick={onClick}
      aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
      aria-expanded={isOpen}
      title="AI Study Assistant"
    >
      {isOpen ? '✕' : '🤖'}
    </button>
  );
};

export default FloatingButton;
