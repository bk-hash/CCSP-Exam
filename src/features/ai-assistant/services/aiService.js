/**
 * AI Service
 * Handles communication with AI backend
 */

import { getFeatureConfig } from '../../../config/features';
import { ERROR_MESSAGES } from '../utils/prompts';

const TIMEOUT_MS = 30000; // 30 seconds
const MAX_RETRIES = 2;

/**
 * Create timeout promise
 * @param {number} ms - Timeout in milliseconds
 */
const timeoutPromise = (ms) => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('timeout')), ms);
  });
};

/**
 * Retry logic for fetch requests
 * @param {Function} fn - Function to retry
 * @param {number} retries - Number of retries
 */
const retryFetch = async (fn, retries = MAX_RETRIES) => {
  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries) throw error;
      // Wait before retry with exponential backoff
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
};

/**
 * Send chat message to AI backend
 * @param {string} message - User message
 * @param {Array} conversationHistory - Previous messages
 * @returns {Promise<object>} - AI response
 */
export const sendChatMessage = async (message, conversationHistory = []) => {
  const config = getFeatureConfig('AI_ASSISTANT');
  
  if (!config.apiEndpoint) {
    throw new Error('API endpoint not configured');
  }
  
  if (!message || message.trim().length === 0) {
    throw new Error('Message cannot be empty');
  }
  
  // Sanitize message
  const sanitizedMessage = message.trim().substring(0, 1000); // Limit message length
  
  // Prepare request
  const requestBody = {
    message: sanitizedMessage,
    history: conversationHistory.slice(-10).map(msg => ({
      role: msg.role,
      content: msg.content
    }))
  };
  
  try {
    const fetchFn = async () => {
      const response = await fetch(`${config.apiEndpoint}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      
      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('rate_limit');
        }
        throw new Error(`HTTP ${response.status}`);
      }
      
      return await response.json();
    };
    
    // Execute with timeout and retry logic
    const result = await Promise.race([
      retryFetch(fetchFn),
      timeoutPromise(TIMEOUT_MS)
    ]);
    
    return {
      response: result.response || result.message || 'No response received',
      metadata: result.metadata || {}
    };
  } catch (error) {
    console.error('AI Service Error:', error);
    
    // Return user-friendly error messages
    if (error.message === 'timeout') {
      throw new Error(ERROR_MESSAGES.TIMEOUT_ERROR);
    } else if (error.message === 'rate_limit') {
      throw new Error(ERROR_MESSAGES.RATE_LIMIT);
    } else if (error.message.includes('fetch') || error.message.includes('network')) {
      throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
    } else if (error.message === 'API endpoint not configured') {
      throw new Error('AI service is not configured. Please check environment variables.');
    } else {
      throw new Error(ERROR_MESSAGES.API_ERROR);
    }
  }
};

/**
 * Generate practice question (placeholder for future implementation)
 * @param {number} domain - Domain number (1-6)
 * @param {string} difficulty - Difficulty level
 * @returns {Promise<object>} - Generated question
 */
export const generateQuestion = async (domain, difficulty = 'medium') => {
  // TODO: Implement when backend endpoint is available
  throw new Error('Question generation not yet implemented');
};

/**
 * Explain answer (placeholder for future implementation)
 * @param {string} questionId - Question ID
 * @param {string} userAnswer - User's answer
 * @param {string} correctAnswer - Correct answer
 * @returns {Promise<object>} - Explanation
 */
export const explainAnswer = async (questionId, userAnswer, correctAnswer) => {
  // TODO: Implement when backend endpoint is available
  throw new Error('Answer explanation not yet implemented');
};
