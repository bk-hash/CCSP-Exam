/**
 * ChatWindow Component
 * Main chat interface window
 */

import React, { useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import SuggestedPrompts from './SuggestedPrompts';
import { useAIChat } from '../hooks/useAIChat';

const ChatWindow = ({ onClose }) => {
  const { messages, sendMessage, clearConversation, initialize, isLoading } = useAIChat();

  // Initialize chat on mount
  useEffect(() => {
    initialize();
  }, [initialize]);

  const handleSendMessage = (message) => {
    sendMessage(message);
  };

  const handlePromptClick = (prompt) => {
    sendMessage(prompt);
  };

  const handleClearConversation = () => {
    if (window.confirm('Are you sure you want to clear the conversation?')) {
      clearConversation();
      initialize();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="ai-assistant-chat-window"
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-label="AI Study Assistant Chat"
      aria-modal="false"
    >
      {/* Header */}
      <div className="ai-assistant-header">
        <div className="ai-assistant-header-title">
          <span>🤖</span>
          <span>AI Study Assistant</span>
        </div>
        <div className="ai-assistant-header-actions">
          <button
            className="ai-assistant-header-button"
            onClick={handleClearConversation}
            aria-label="Clear conversation"
            title="Clear conversation"
          >
            🗑️
          </button>
          <button
            className="ai-assistant-header-button"
            onClick={onClose}
            aria-label="Close chat"
            title="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Messages */}
      <MessageList messages={messages} isLoading={isLoading} />

      {/* Suggested Prompts (only show when no user messages) */}
      {messages.filter(m => m.role === 'user').length === 0 && (
        <SuggestedPrompts 
          onPromptClick={handlePromptClick} 
          disabled={isLoading}
        />
      )}

      {/* Input */}
      <MessageInput 
        onSendMessage={handleSendMessage} 
        disabled={isLoading}
      />
    </div>
  );
};

export default ChatWindow;
