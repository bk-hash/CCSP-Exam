import React from 'react';
import { render } from '@testing-library/react';
import AIAssistantWidget from '../components/AIAssistantWidget';

describe('AIAssistantWidget', () => {
  test('renders without crashing', () => {
    const { container } = render(<AIAssistantWidget />);
    expect(container).toBeInTheDocument();
  });

  test('renders floating button', () => {
    const { container } = render(<AIAssistantWidget />);
    const button = container.querySelector('.ai-assistant-floating-button');
    expect(button).toBeInTheDocument();
  });
});
