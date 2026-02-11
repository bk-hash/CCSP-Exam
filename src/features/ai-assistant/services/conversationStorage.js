/**
 * Conversation Storage Service
 * Manages local storage of conversation history
 */

const STORAGE_KEY = 'ai_assistant_conversation';
const MAX_STORED_MESSAGES = 50;

/**
 * Save conversation to local storage
 * @param {Array} messages - Array of message objects
 */
export const saveConversation = (messages) => {
  try {
    // Limit stored messages to prevent storage bloat
    const messagesToStore = messages.slice(-MAX_STORED_MESSAGES);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messagesToStore));
  } catch (error) {
    console.error('Failed to save conversation:', error);
  }
};

/**
 * Load conversation from local storage
 * @returns {Array} - Array of message objects
 */
export const loadConversation = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const messages = JSON.parse(stored);
    return Array.isArray(messages) ? messages : [];
  } catch (error) {
    console.error('Failed to load conversation:', error);
    return [];
  }
};

/**
 * Clear conversation from local storage
 */
export const clearConversation = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear conversation:', error);
  }
};

/**
 * Get conversation summary for display
 * @returns {object} - Conversation summary
 */
export const getConversationSummary = () => {
  const messages = loadConversation();
  return {
    messageCount: messages.length,
    lastUpdated: messages.length > 0 ? messages[messages.length - 1].timestamp : null
  };
};
