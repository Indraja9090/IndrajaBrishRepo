// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Login Window/i);
    expect(titleElement).toBeInTheDocument();
  });
});
