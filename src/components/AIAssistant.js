import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts';
import aiService from '../services/aiService';

/**
 * AI Learning Assistant Component
 * 
 * Provides an interactive AI chat interface for CCSP exam preparation.
 * Students can ask questions about concepts, get explanations, and receive study guidance.
 */
function AIAssistant({ context = null, isOpen, onClose }) {
  const { theme } = useTheme();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initial greeting message
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      setMessages([{
        role: 'assistant',
        content: `👋 Hi! I'm your CCSP learning assistant. I'm here to help you understand cloud security concepts and prepare for your exam.

${context ? 'I can see you\'re working on a question. ' : ''}Feel free to ask me anything about CCSP topics, or use one of the suggested questions below!`,
        timestamp: new Date()
      }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (messageText = null) => {
    const textToSend = messageText || inputMessage.trim();
    if (!textToSend || isLoading) return;

    // Add user message to chat
    const userMessage = {
      role: 'user',
      content: textToSend,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setShowSuggestions(false);
    setIsLoading(true);

    try {
      // Get AI response
      const response = await aiService.sendMessage(textToSend, context);

      // Add AI response to chat
      const assistantMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '❌ Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  const clearChat = () => {
    aiService.clearHistory();
    setMessages([{
      role: 'assistant',
      content: '🔄 Chat cleared! How can I help you with your CCSP studies?',
      timestamp: new Date()
    }]);
    setShowSuggestions(true);
  };

  // Get suggested questions based on context
  const getSuggestions = () => {
    if (context?.domain) {
      const domainKey = context.domain.toLowerCase().includes('domain 1') ? 'domain1' :
                       context.domain.toLowerCase().includes('domain 2') ? 'domain2' :
                       context.domain.toLowerCase().includes('domain 3') ? 'domain3' :
                       context.domain.toLowerCase().includes('domain 4') ? 'domain4' :
                       context.domain.toLowerCase().includes('domain 5') ? 'domain5' :
                       context.domain.toLowerCase().includes('domain 6') ? 'domain6' : 'general';
      return aiService.getSuggestedQuestions(domainKey);
    }
    return aiService.getSuggestedQuestions('general');
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: '400px',
        maxWidth: 'calc(100vw - 40px)',
        height: '600px',
        maxHeight: 'calc(100vh - 100px)',
        background: theme.cardBackground,
        border: `2px solid ${theme.primary}`,
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000,
        fontFamily: '"Segoe UI", Arial, sans-serif'
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
          padding: '16px 20px',
          borderRadius: '14px 14px 0 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#fff'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '24px' }}>🤖</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>
              CCSP AI Assistant
            </h3>
            <p style={{ margin: 0, fontSize: '12px', opacity: 0.9 }}>
              Ask me anything about cloud security
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={clearChat}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 10px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 500
            }}
            title="Clear chat"
          >
            🔄
          </button>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 10px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '18px'
            }}
            title="Close assistant"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%'
            }}
          >
            <div
              style={{
                background: msg.role === 'user' 
                  ? `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`
                  : theme.background,
                color: msg.role === 'user' ? '#fff' : theme.text,
                padding: '12px 16px',
                borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                fontSize: '14px',
                lineHeight: '1.5',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word'
              }}
            >
              {msg.content}
            </div>
            <div
              style={{
                fontSize: '11px',
                color: theme.textSecondary,
                marginTop: '4px',
                textAlign: msg.role === 'user' ? 'right' : 'left'
              }}
            >
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {isLoading && (
          <div style={{ alignSelf: 'flex-start', maxWidth: '85%' }}>
            <div
              style={{
                background: theme.background,
                padding: '12px 16px',
                borderRadius: '16px 16px 16px 4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <div className="typing-dot" style={{ 
                  width: '8px', height: '8px', borderRadius: '50%', 
                  background: theme.primary, animation: 'typing 1.4s infinite' 
                }} />
                <div className="typing-dot" style={{ 
                  width: '8px', height: '8px', borderRadius: '50%', 
                  background: theme.primary, animation: 'typing 1.4s infinite 0.2s' 
                }} />
                <div className="typing-dot" style={{ 
                  width: '8px', height: '8px', borderRadius: '50%', 
                  background: theme.primary, animation: 'typing 1.4s infinite 0.4s' 
                }} />
              </div>
            </div>
          </div>
        )}

        {/* Suggested questions */}
        {showSuggestions && messages.length <= 1 && !isLoading && (
          <div style={{ marginTop: '10px' }}>
            <p style={{ 
              fontSize: '13px', 
              color: theme.textSecondary, 
              marginBottom: '10px',
              fontWeight: 600
            }}>
              💡 Suggested questions:
            </p>
            {getSuggestions().slice(0, 3).map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(suggestion)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: theme.background,
                  border: `1px solid ${theme.border || theme.textSecondary}`,
                  borderRadius: '8px',
                  padding: '10px 12px',
                  marginBottom: '8px',
                  fontSize: '13px',
                  color: theme.text,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = theme.primary;
                  e.target.style.color = '#fff';
                  e.target.style.borderColor = theme.primary;
                }}
                onMouseOut={(e) => {
                  e.target.style.background = theme.background;
                  e.target.style.color = theme.text;
                  e.target.style.borderColor = theme.border || theme.textSecondary;
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div
        style={{
          padding: '16px',
          borderTop: `1px solid ${theme.border || theme.textSecondary}`,
          background: theme.background
        }}
      >
        <div style={{ display: 'flex', gap: '10px' }}>
          <textarea
            ref={inputRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question here..."
            disabled={isLoading}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '8px',
              border: `1px solid ${theme.border || theme.textSecondary}`,
              background: theme.cardBackground,
              color: theme.text,
              fontSize: '14px',
              fontFamily: '"Segoe UI", Arial, sans-serif',
              resize: 'vertical',
              minHeight: '44px',
              maxHeight: '120px'
            }}
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputMessage.trim() || isLoading}
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              border: 'none',
              background: inputMessage.trim() && !isLoading
                ? `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`
                : theme.textSecondary,
              color: '#fff',
              fontSize: '18px',
              cursor: inputMessage.trim() && !isLoading ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
              fontWeight: 600
            }}
          >
            ➤
          </button>
        </div>
        <p style={{ 
          fontSize: '11px', 
          color: theme.textSecondary, 
          marginTop: '8px',
          marginBottom: 0
        }}>
          Press Enter to send • Shift+Enter for new line
        </p>
      </div>

      <style>
        {`
          @keyframes typing {
            0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
            30% { opacity: 1; transform: translateY(-4px); }
          }
        `}
      </style>
    </div>
  );
}

export default AIAssistant;
