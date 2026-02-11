/**
 * MessageList Component
 * Displays the conversation messages
 */

import React, { useEffect, useRef } from 'react';

const LoadingIndicator = () => (
  <div className="ai-assistant-loading">
    <div className="ai-assistant-loading-dot"></div>
    <div className="ai-assistant-loading-dot"></div>
    <div className="ai-assistant-loading-dot"></div>
  </div>
);

const Message = ({ message }) => {
  const isUser = message.role === 'user';
  const isError = message.isError;
  
  return (
    <div className={`ai-assistant-message ${isUser ? 'ai-assistant-message-user' : 'ai-assistant-message-assistant'} ${isError ? 'ai-assistant-message-error' : ''}`}>
      {!isUser && (
        <div className="ai-assistant-message-avatar">
          {isError ? '⚠️' : '🤖'}
        </div>
      )}
      <div className="ai-assistant-message-content">
        {message.content}
      </div>
      {isUser && (
        <div className="ai-assistant-message-avatar">
          👤
        </div>
      )}
    </div>
  );
};

const MessageList = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div 
      className="ai-assistant-message-list"
      role="log"
      aria-live="polite"
      aria-label="Chat messages"
    >
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      {isLoading && (
        <div className="ai-assistant-message ai-assistant-message-assistant">
          <div className="ai-assistant-message-avatar">🤖</div>
          <div className="ai-assistant-message-content">
            <LoadingIndicator />
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
