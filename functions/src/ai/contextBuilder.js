/**
 * Context Builder
 * Builds context from question bank for more informed responses
 */

/**
 * Build context about CCSP domains
 * This can be expanded to include actual question data
 */
const buildDomainContext = () => {
  return `
CCSP Domain Overview:
1. Cloud Concepts, Architecture and Design - Cloud computing concepts, reference architecture, security concepts
2. Cloud Data Security - Data classification, storage, encryption, DLP, rights management
3. Cloud Platform and Infrastructure Security - Infrastructure components, network security, compute and storage
4. Cloud Application Security - SDLC, application security testing, IAM
5. Cloud Security Operations - Operations, incident response, disaster recovery, business continuity
6. Legal, Risk and Compliance - Legal requirements, risk management, audit processes, compliance frameworks
  `.trim();
};

/**
 * Extract relevant context based on user message
 * @param {string} message - User message
 * @returns {string} - Relevant context
 */
const extractRelevantContext = (message) => {
  const lowercaseMessage = message.toLowerCase();
  let context = buildDomainContext();

  // Add specific context based on keywords
  if (lowercaseMessage.includes('shared responsibility')) {
    context += '\n\nShared Responsibility Model: Cloud provider manages infrastructure security, customer manages data and application security.';
  }

  if (lowercaseMessage.includes('iaas') || lowercaseMessage.includes('paas') || lowercaseMessage.includes('saas')) {
    context += '\n\nService Models: IaaS (Infrastructure), PaaS (Platform), SaaS (Software) - each has different security responsibilities.';
  }

  if (lowercaseMessage.includes('encryption')) {
    context += '\n\nEncryption: Data encryption at rest and in transit is crucial. Key management is a critical security control.';
  }

  return context;
};

module.exports = {
  buildDomainContext,
  extractRelevantContext,
};
