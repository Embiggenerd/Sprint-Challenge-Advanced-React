import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders parent component', () => {
  const { getByTestId } = render(<App />);
  const parent = getByTestId(/app/i);
  expect(parent).toBeInTheDocument();
});