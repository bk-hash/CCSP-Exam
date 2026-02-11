/**
 * useConversation Hook
 * Manages conversation history and persistence
 */

import { useState, useEffect } from 'react';
import { 
  saveConversation, 
  loadConversation, 
  clearConversation 
} from '../services/conversationStorage';

export const useConversation = () => {
  const [messages, setMessages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load conversation on mount
  useEffect(() => {
    const loadedMessages = loadConversation();
    setMessages(loadedMessages);
    setIsLoaded(true);
  }, []);

  // Save conversation when messages change
  useEffect(() => {
    if (isLoaded && messages.length > 0) {
      saveConversation(messages);
    }
  }, [messages, isLoaded]);

  /**
   * Add message to conversation
   * @param {object} message - Message object with role and content
   */
  const addMessage = (message) => {
    const newMessage = {
      ...message,
      id: Date.now() + Math.random(),
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  /**
   * Clear all messages
   */
  const clear = () => {
    setMessages([]);
    clearConversation();
  };

  /**
   * Get messages for API (last N messages)
   * @param {number} limit - Number of recent messages
   */
  const getRecentMessages = (limit = 10) => {
    return messages.slice(-limit);
  };

  return {
    messages,
    addMessage,
    clear,
    getRecentMessages,
    isLoaded
  };
};
