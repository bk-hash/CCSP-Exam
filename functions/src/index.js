/**
 * Firebase Functions Index
 * Main entry point for Cloud Functions
 */

const functions = require('firebase-functions');
const { handleChatRequest } = require('./ai/chat');

// AI Chat endpoint
exports.ai = functions.https.onRequest(async (req, res) => {
  // Route to appropriate handler based on path
  if (req.path === '/chat' || req.path === '/') {
    return handleChatRequest(req, res);
  }
  
  res.status(404).json({ error: 'Endpoint not found' });
});
