import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Study Time widget', () => {
  render(<App />);
  const widget = screen.getByText(/Study Time/i);
  expect(widget).toBeInTheDocument();
});
