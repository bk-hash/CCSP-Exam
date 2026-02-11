/**
 * SuggestedPrompts Component
 * Displays quick action buttons for common prompts
 */

import React from 'react';
import { SUGGESTED_PROMPTS } from '../utils/prompts';

const SuggestedPrompts = ({ onPromptClick, disabled = false }) => {
  return (
    <div className="ai-assistant-suggested-prompts">
      {SUGGESTED_PROMPTS.map((prompt, index) => (
        <button
          key={index}
          className="ai-assistant-prompt-button"
          onClick={() => onPromptClick(prompt)}
          disabled={disabled}
          aria-label={`Send prompt: ${prompt}`}
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default SuggestedPrompts;
