import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import axios from 'axios'


test('renders parent component', () => {
  const { getByTestId } = render(<App />);
  const parent = getByTestId(/app/i);
  expect(parent).toBeInTheDocument();
});

test('renders player list', () => {
  const { getByTestId } = render(<App />);
  const parent = getByTestId(/player-list/i);
  expect(parent).toBeInTheDocument();
})

test('renders player card', async () => {
  const res = [{
    name: "lala",
    country: "haha"
  },
  {
    name: "lela",
    country: "heha"
  }]

  jest.doMock('axios',() => {
    return Promise.resolve({
      data: () => Promise.resolve(res),
    })
  })
  const { getByTestId } = render(<App />);
  const parent = getByTestId(/player-card/i);
  expect(parent).toBeInTheDocument();
})


