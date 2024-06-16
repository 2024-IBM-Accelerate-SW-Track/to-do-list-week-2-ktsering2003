// src/App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';  // Add this import
import App from './App';

test('renders Add a New Task text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add a New Task/i);
  expect(linkElement).toBeInTheDocument();
});
