/**
 * Message formatter utilities
 * Formats AI responses for display
 */

/**
 * Format AI response text
 * @param {string} text - Raw AI response text
 * @returns {string} - Formatted text
 */
export const formatMessage = (text) => {
  if (!text) return '';
  
  // Remove excessive whitespace
  let formatted = text.trim();
  
  // Ensure proper line breaks
  formatted = formatted.replace(/\n{3,}/g, '\n\n');
  
  return formatted;
};

/**
 * Truncate long messages for previews
 * @param {string} text - Message text
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
export const truncateMessage = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Parse markdown-style formatting (basic support)
 * @param {string} text - Text with markdown
 * @returns {string} - HTML formatted text
 */
export const parseMarkdown = (text) => {
  if (!text) return '';
  
  let parsed = text;
  
  // Bold: **text** or __text__
  parsed = parsed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  parsed = parsed.replace(/__(.+?)__/g, '<strong>$1</strong>');
  
  // Italic: *text* or _text_
  parsed = parsed.replace(/\*(.+?)\*/g, '<em>$1</em>');
  parsed = parsed.replace(/_(.+?)_/g, '<em>$1</em>');
  
  // Code: `code`
  parsed = parsed.replace(/`(.+?)`/g, '<code>$1</code>');
  
  // Line breaks
  parsed = parsed.replace(/\n/g, '<br>');
  
  return parsed;
};

/**
 * Extract domain references from text
 * @param {string} text - Message text
 * @returns {Array} - Array of domain numbers mentioned
 */
export const extractDomainReferences = (text) => {
  if (!text) return [];
  
  const domains = [];
  const domainPattern = /Domain\s+(\d)/gi;
  let match;
  
  while ((match = domainPattern.exec(text)) !== null) {
    const domainNum = parseInt(match[1]);
    if (domainNum >= 1 && domainNum <= 6 && !domains.includes(domainNum)) {
      domains.push(domainNum);
    }
  }
  
  return domains.sort();
};
