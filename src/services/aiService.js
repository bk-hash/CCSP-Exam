/**
 * AI Service for CCSP Learning Assistant
 * 
 * This service handles communication with AI APIs to provide learning assistance.
 * Configure your AI provider by setting the appropriate API key and endpoint.
 * 
 * Supported providers:
 * - OpenAI (GPT-4, GPT-3.5)
 * - Anthropic (Claude)
 * - Google AI (Gemini)
 * - Azure OpenAI
 */

const AI_CONFIG = {
  // Choose your provider: 'openai', 'anthropic', 'google', 'azure'
  provider: process.env.REACT_APP_AI_PROVIDER || 'openai',
  
  // API Configuration
  apiKey: process.env.REACT_APP_AI_API_KEY || '',
  
  // Provider-specific endpoints
  endpoints: {
    openai: 'https://api.openai.com/v1/chat/completions',
    anthropic: 'https://api.anthropic.com/v1/messages',
    google: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    azure: process.env.REACT_APP_AZURE_ENDPOINT || ''
  },
  
  // Model selection
  models: {
    openai: 'gpt-4',
    anthropic: 'claude-3-sonnet-20240229',
    google: 'gemini-pro',
    azure: 'gpt-4'
  }
};

// System prompt for the AI assistant
const SYSTEM_PROMPT = `You are an expert CCSP (Certified Cloud Security Professional) learning assistant. Your role is to help students understand cloud security concepts, prepare for the CCSP exam, and clarify complex topics.

Your expertise covers all six CCSP domains:
1. Cloud Concepts, Architecture and Design
2. Cloud Data Security
3. Cloud Platform & Infrastructure Security
4. Cloud Application Security
5. Cloud Security Operations
6. Legal, Risk, and Compliance

Guidelines:
- Provide clear, concise explanations aligned with (ISC)² CCSP CBK
- Use examples to illustrate complex concepts
- Reference relevant frameworks (NIST, ISO 27017, CSA CCM) when applicable
- Be encouraging and supportive
- When explaining answers, highlight the reasoning process
- Suggest related topics for deeper understanding

Keep responses focused and educational.`;

class AIService {
  constructor() {
    this.conversationHistory = [];
    this.maxHistoryLength = 10; // Keep last 10 messages for context
  }

  /**
   * Send a message to the AI assistant
   * @param {string} message - User's message
   * @param {Object} context - Optional context (e.g., current question being studied)
   * @returns {Promise<string>} - AI's response
   */
  async sendMessage(message, context = null) {
    if (!AI_CONFIG.apiKey) {
      return "AI Assistant is not configured. Please add your API key in the .env file (REACT_APP_AI_API_KEY).";
    }

    try {
      // Build the message with context if provided
      let enhancedMessage = message;
      if (context) {
        enhancedMessage = this.buildContextualMessage(message, context);
      }

      // Add user message to history
      this.conversationHistory.push({
        role: 'user',
        content: enhancedMessage
      });

      // Get response from AI provider
      const response = await this.callAIProvider(enhancedMessage);

      // Add assistant response to history
      this.conversationHistory.push({
        role: 'assistant',
        content: response
      });

      // Trim history if too long
      if (this.conversationHistory.length > this.maxHistoryLength * 2) {
        this.conversationHistory = this.conversationHistory.slice(-this.maxHistoryLength * 2);
      }

      return response;
    } catch (error) {
      console.error('AI Service Error:', error);
      return `I apologize, but I encountered an error: ${error.message}. Please try again.`;
    }
  }

  /**
   * Build a contextual message with quiz/flashcard information
   */
  buildContextualMessage(message, context) {
    if (context.type === 'question') {
      return `Context: I'm studying this CCSP question:

Question: ${context.question}
Domain: ${context.domain}
${context.selectedAnswer ? `My answer: ${context.selectedAnswer}` : ''}
${context.correctAnswer ? `Correct answer: ${context.correctAnswer}` : ''}
${context.explanation ? `Explanation: ${context.explanation}` : ''}

My question: ${message}`;
    } else if (context.type === 'flashcard') {
      return `Context: I'm reviewing this CCSP flashcard:

Front: ${context.front}
Back: ${context.back}
Domain: ${context.domain}

My question: ${message}`;
    }
    return message;
  }

  /**
   * Call the configured AI provider
   */
  async callAIProvider(message) {
    const provider = AI_CONFIG.provider;
    
    switch (provider) {
      case 'openai':
        return await this.callOpenAI(message);
      case 'anthropic':
        return await this.callAnthropic(message);
      case 'google':
        return await this.callGoogle(message);
      case 'azure':
        return await this.callAzureOpenAI(message);
      default:
        throw new Error(`Unsupported AI provider: ${provider}`);
    }
  }

  /**
   * OpenAI API integration
   */
  async callOpenAI(message) {
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...this.conversationHistory
    ];

    const response = await fetch(AI_CONFIG.endpoints.openai, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_CONFIG.apiKey}`
      },
      body: JSON.stringify({
        model: AI_CONFIG.models.openai,
        messages: messages,
        temperature: 0.7,
        max_tokens: 800
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'OpenAI API request failed');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }

  /**
   * Anthropic Claude API integration
   */
  async callAnthropic(message) {
    const response = await fetch(AI_CONFIG.endpoints.anthropic, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': AI_CONFIG.apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: AI_CONFIG.models.anthropic,
        system: SYSTEM_PROMPT,
        messages: this.conversationHistory,
        max_tokens: 800
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Anthropic API request failed');
    }

    const data = await response.json();
    return data.content[0].text;
  }

  /**
   * Google AI (Gemini) API integration
   */
  async callGoogle(message) {
    const endpoint = `${AI_CONFIG.endpoints.google}?key=${AI_CONFIG.apiKey}`;
    
    const prompt = `${SYSTEM_PROMPT}\n\nConversation history:\n${
      this.conversationHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n')
    }`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }]
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Google AI API request failed');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  }

  /**
   * Azure OpenAI API integration
   */
  async callAzureOpenAI(message) {
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...this.conversationHistory
    ];

    const response = await fetch(AI_CONFIG.endpoints.azure, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': AI_CONFIG.apiKey
      },
      body: JSON.stringify({
        messages: messages,
        temperature: 0.7,
        max_tokens: 800
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Azure OpenAI API request failed');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }

  /**
   * Get suggested questions based on current topic
   */
  getSuggestedQuestions(topic) {
    const suggestions = {
      'domain1': [
        "What are the key differences between IaaS, PaaS, and SaaS?",
        "Explain the shared responsibility model in cloud computing",
        "What are the essential characteristics of cloud computing per NIST?"
      ],
      'domain2': [
        "How does encryption at rest differ from encryption in transit?",
        "What is data tokenization and when should it be used?",
        "Explain the key management hierarchy in cloud environments"
      ],
      'domain3': [
        "What are the main components of network security in cloud platforms?",
        "How do you implement defense in depth in the cloud?",
        "What is microsegmentation and why is it important?"
      ],
      'domain4': [
        "What is the OWASP Top 10 and how does it apply to cloud applications?",
        "Explain secure SDLC practices for cloud applications",
        "What is the principle of least privilege in application security?"
      ],
      'domain5': [
        "What are the key aspects of cloud security monitoring?",
        "How do you implement effective incident response in the cloud?",
        "What is security orchestration and automation (SOAR)?"
      ],
      'domain6': [
        "What are the key compliance frameworks for cloud security?",
        "Explain the importance of audit and assurance in cloud computing",
        "What is the role of data residency and sovereignty?"
      ],
      'general': [
        "Can you explain this concept in simpler terms?",
        "What are some real-world examples of this?",
        "How does this relate to the CCSP exam?",
        "What are common mistakes students make with this topic?"
      ]
    };

    return suggestions[topic] || suggestions.general;
  }

  /**
   * Clear conversation history
   */
  clearHistory() {
    this.conversationHistory = [];
  }

  /**
   * Export conversation for review
   */
  exportConversation() {
    return this.conversationHistory.map(msg => ({
      role: msg.role,
      content: msg.content,
      timestamp: new Date().toISOString()
    }));
  }
}

// Export singleton instance
const aiService = new AIService();
export default aiService;
