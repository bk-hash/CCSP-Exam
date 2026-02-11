/**
 * Prompt templates and suggested prompts for AI Assistant
 */

export const SYSTEM_PROMPT = `You are an expert CCSP (Certified Cloud Security Professional) tutor.
Help students understand cloud security concepts clearly and concisely.
Reference the 6 CCSP domains when relevant:
1. Cloud Concepts, Architecture and Design
2. Cloud Data Security
3. Cloud Platform and Infrastructure Security
4. Cloud Application Security
5. Cloud Security Operations
6. Legal, Risk and Compliance

Be encouraging and provide practical examples.
Keep responses concise (under 200 words when possible).`;

export const WELCOME_MESSAGE = "👋 Hi! I'm your CCSP study assistant. Ask me anything about cloud security concepts, or use one of the suggested prompts below!";

export const SUGGESTED_PROMPTS = [
  "Explain the shared responsibility model",
  "What's covered in Domain 1?",
  "Tell me about data classification",
  "What is the difference between IaaS, PaaS, and SaaS?",
  "Explain cloud security controls",
  "What are the key compliance frameworks?"
];

export const ERROR_MESSAGES = {
  NETWORK_ERROR: "I'm having trouble connecting. Please check your internet connection and try again.",
  TIMEOUT_ERROR: "The request took too long. Please try again.",
  API_ERROR: "I'm temporarily unavailable. Please try again in a moment.",
  RATE_LIMIT: "Too many requests. Please wait a moment before trying again.",
  GENERIC_ERROR: "Something went wrong. Please try again."
};

export const buildChatPrompt = (message, conversationHistory = []) => {
  const historyText = conversationHistory
    .slice(-10) // Only use last 10 messages
    .map(msg => `${msg.role === 'user' ? 'Student' : 'Tutor'}: ${msg.content}`)
    .join('\n');
  
  return {
    system: SYSTEM_PROMPT,
    history: historyText,
    message: message
  };
};
