/**
 * AI Chat Function
 * Firebase Cloud Function for AI chat endpoint
 */

const { initializeOpenAI, generateChatCompletion } = require('./openai');
const { extractRelevantContext } = require('./contextBuilder');

const SYSTEM_PROMPT = `You are an expert CCSP (Certified Cloud Security Professional) tutor.
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

// Rate limiting cache (in-memory, simple implementation)
const rateLimitCache = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 100;

/**
 * Check rate limit for IP
 * @param {string} ip - Client IP address
 * @returns {boolean} - Whether request is allowed
 */
const checkRateLimit = (ip) => {
  const now = Date.now();
  const userRequests = rateLimitCache.get(ip) || [];
  
  // Remove old requests outside the window
  const recentRequests = userRequests.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
  );
  
  if (recentRequests.length >= RATE_LIMIT_MAX) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitCache.set(ip, recentRequests);
  
  return true;
};

/**
 * Handle AI chat request
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const handleChatRequest = async (req, res) => {
  // CORS headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }
  
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  
  try {
    // Get client IP for rate limiting
    const clientIp = req.ip || req.connection.remoteAddress || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      res.status(429).json({ 
        error: 'Rate limit exceeded. Please try again later.' 
      });
      return;
    }
    
    // Validate request body
    const { message, history = [] } = req.body;
    
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }
    
    // Sanitize and validate message length
    const sanitizedMessage = message.trim().substring(0, 1000);
    
    // Initialize OpenAI if not already done
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OpenAI API key not configured');
    }
    initializeOpenAI(apiKey);
    
    // Build context
    const context = extractRelevantContext(sanitizedMessage);
    const systemPromptWithContext = `${SYSTEM_PROMPT}\n\nContext:\n${context}`;
    
    // Format conversation history
    const formattedHistory = history
      .slice(-10) // Limit to last 10 messages
      .map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content.substring(0, 500), // Limit content length
      }));
    
    // Add current message
    formattedHistory.push({
      role: 'user',
      content: sanitizedMessage,
    });
    
    // Generate response
    const result = await generateChatCompletion(
      systemPromptWithContext,
      formattedHistory,
      {
        maxTokens: 500,
        temperature: 0.7,
      }
    );
    
    // Return response
    res.status(200).json({
      response: result.content,
      metadata: {
        model: result.model,
        tokensUsed: result.usage?.total_tokens || 0,
      },
    });
  } catch (error) {
    console.error('Chat function error:', error);
    res.status(500).json({ 
      error: 'An error occurred processing your request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = {
  handleChatRequest,
};
