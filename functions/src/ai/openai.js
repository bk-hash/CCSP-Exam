/**
 * OpenAI Service Wrapper
 * Handles communication with OpenAI API
 */

const OpenAI = require('openai');

let openaiClient = null;

/**
 * Initialize OpenAI client
 * @param {string} apiKey - OpenAI API key
 */
const initializeOpenAI = (apiKey) => {
  if (!openaiClient) {
    openaiClient = new OpenAI({
      apiKey: apiKey,
    });
  }
  return openaiClient;
};

/**
 * Generate chat completion
 * @param {string} systemPrompt - System instructions
 * @param {Array} messages - Conversation messages
 * @param {object} options - Additional options
 */
const generateChatCompletion = async (systemPrompt, messages, options = {}) => {
  if (!openaiClient) {
    throw new Error('OpenAI client not initialized');
  }

  const {
    model = 'gpt-4-turbo-preview',
    maxTokens = 500,
    temperature = 0.7,
  } = options;

  try {
    const completion = await openaiClient.chat.completions.create({
      model: model,
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      max_tokens: maxTokens,
      temperature: temperature,
    });

    return {
      content: completion.choices[0].message.content,
      usage: completion.usage,
      model: completion.model,
    };
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error(`OpenAI API Error: ${error.message}`);
  }
};

module.exports = {
  initializeOpenAI,
  generateChatCompletion,
};
