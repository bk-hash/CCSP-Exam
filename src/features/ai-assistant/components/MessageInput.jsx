/**
 * MessageInput Component
 * User input field for sending messages
 */

import React, { useState, useRef } from 'react';

const MessageInput = ({ onSendMessage, disabled = false }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput('');
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="ai-assistant-input-container">
      <form onSubmit={handleSubmit} className="ai-assistant-input-wrapper">
        <input
          ref={inputRef}
          type="text"
          className="ai-assistant-input"
          placeholder="Ask me anything about CCSP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-label="Message input"
          maxLength={1000}
        />
        <button
          type="submit"
          className="ai-assistant-send-button"
          disabled={disabled || !input.trim()}
          aria-label="Send message"
        >
          ➤
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
