/**
 * Azure OpenAI Service Wrapper
 * Handles communication with Azure OpenAI API
 * Compatible with Microsoft's Azure OpenAI Service
 */

const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

let azureClient = null;
let deploymentName = null;

/**
 * Initialize Azure OpenAI client
 * @param {string} apiKey - Azure OpenAI API key
 * @param {string} endpoint - Azure OpenAI endpoint URL
 * @param {string} deployment - Deployment name in Azure
 */
const initializeAzureOpenAI = (apiKey, endpoint, deployment) => {
  if (!azureClient) {
    azureClient = new OpenAIClient(
      endpoint,
      new AzureKeyCredential(apiKey)
    );
    deploymentName = deployment;
  }
  return azureClient;
};

/**
 * Generate chat completion using Azure OpenAI
 * @param {string} systemPrompt - System instructions
 * @param {Array} messages - Conversation messages
 * @param {object} options - Additional options
 */
const generateChatCompletion = async (systemPrompt, messages, options = {}) => {
  if (!azureClient) {
    throw new Error('Azure OpenAI client not initialized');
  }

  if (!deploymentName) {
    throw new Error('Azure OpenAI deployment name not configured');
  }

  const {
    maxTokens = 500,
    temperature = 0.7,
  } = options;

  try {
    const chatMessages = [
      { role: 'system', content: systemPrompt },
      ...messages,
    ];

    const result = await azureClient.getChatCompletions(
      deploymentName,
      chatMessages,
      {
        maxTokens: maxTokens,
        temperature: temperature,
      }
    );

    if (!result.choices || result.choices.length === 0) {
      throw new Error('No response from Azure OpenAI');
    }

    return {
      content: result.choices[0].message.content,
      usage: result.usage,
      model: deploymentName, // Azure uses deployment name
    };
  } catch (error) {
    console.error('Azure OpenAI API Error:', error);
    throw new Error(`Azure OpenAI API Error: ${error.message}`);
  }
};

module.exports = {
  initializeAzureOpenAI,
  generateChatCompletion,
};
