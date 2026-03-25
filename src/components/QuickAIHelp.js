import React from 'react';
import { useTheme } from '../contexts';
import { useAIAssistant } from '../contexts/AIAssistantContext';

/**
 * Quick AI Help Button
 * Shows a button to ask AI about the current question directly from the quiz interface
 */
function QuickAIHelp({ question, domain, selectedAnswer, correctAnswer, explanation }) {
  const { theme } = useTheme();
  const { openWithContext } = useAIAssistant();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {
    openWithContext({
      type: 'question',
      question,
      domain,
      selectedAnswer,
      correctAnswer,
      explanation
    });
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '8px 16px',
        borderRadius: '8px',
        border: `1px solid ${theme.primary}`,
        background: isHovered 
          ? `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`
          : 'transparent',
        color: isHovered ? '#fff' : theme.primary,
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        fontFamily: '"Segoe UI", Arial, sans-serif'
      }}
      title="Ask AI to explain this question"
    >
      <span style={{ fontSize: '16px' }}>🤖</span>
      Ask AI for Help
    </button>
  );
}

export default QuickAIHelp;
