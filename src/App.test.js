import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add a New Task text', () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/Add New Item/i); // Ensure the text matches exactly
  expect(inputElement).toBeInTheDocument();
});
