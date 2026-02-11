/**
 * useAIChat Hook
 * Main hook that combines conversation management and AI integration
 */

import { useState, useCallback } from 'react';
import { useConversation } from './useConversation';
import { useAIAssistant } from './useAIAssistant';
import { WELCOME_MESSAGE } from '../utils/prompts';

export const useAIChat = () => {
  const { messages, addMessage, clear, getRecentMessages } = useConversation();
  const { sendMessage: sendToAI, isProcessing, error, clearError } = useAIAssistant();
  const [isInitialized, setIsInitialized] = useState(false);

  /**
   * Initialize chat with welcome message
   */
  const initialize = useCallback(() => {
    if (!isInitialized && messages.length === 0) {
      addMessage({
        role: 'assistant',
        content: WELCOME_MESSAGE
      });
      setIsInitialized(true);
    }
  }, [isInitialized, messages.length, addMessage]);

  /**
   * Send user message and get AI response
   * @param {string} messageText - User message
   */
  const sendMessage = useCallback(async (messageText) => {
    if (!messageText || messageText.trim().length === 0) {
      return;
    }

    // Add user message
    addMessage({
      role: 'user',
      content: messageText.trim()
    });

    try {
      // Get AI response
      const conversationHistory = getRecentMessages(10);
      const response = await sendToAI(messageText, conversationHistory);

      // Add AI response
      addMessage({
        role: 'assistant',
        content: response
      });
    } catch (err) {
      // Add error message as assistant message
      addMessage({
        role: 'assistant',
        content: err.message || 'Sorry, I encountered an error. Please try again.',
        isError: true
      });
    }
  }, [addMessage, getRecentMessages, sendToAI]);

  /**
   * Clear conversation
   */
  const clearConversation = useCallback(() => {
    clear();
    setIsInitialized(false);
    clearError();
  }, [clear, clearError]);

  return {
    messages,
    sendMessage,
    clearConversation,
    initialize,
    isLoading: isProcessing,
    error
  };
};
