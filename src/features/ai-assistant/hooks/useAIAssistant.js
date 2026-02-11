/**
 * useAIAssistant Hook
 * Handles AI service integration
 */

import { useState, useCallback } from 'react';
import { sendChatMessage } from '../services/aiService';

export const useAIAssistant = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Send message to AI
   * @param {string} message - User message
   * @param {Array} conversationHistory - Previous messages
   * @returns {Promise<string>} - AI response
   */
  const sendMessage = useCallback(async (message, conversationHistory = []) => {
    setIsProcessing(true);
    setError(null);

    try {
      const result = await sendChatMessage(message, conversationHistory);
      setIsProcessing(false);
      return result.response;
    } catch (err) {
      setIsProcessing(false);
      setError(err.message);
      throw err;
    }
  }, []);

  /**
   * Clear error state
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    sendMessage,
    isProcessing,
    error,
    clearError
  };
};
