import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HookCounterOne from '../components/useEffect'; // adjust the path if needed

describe('HookCounterOne Component', () => {
  test('renders initial count and updates on click', () => {
    render(<HookCounterOne />);

    // Check initial button text
    const button = screen.getByRole('button', { name: /clickme/i });
    expect(button).toHaveTextContent('Clickme 0 times');

    // Click the button
    fireEvent.click(button);

    // After 1 click
    expect(button).toHaveTextContent('Clickme 1 times');

    // Check if document title is updated
    expect(document.title).toBe('you clicked 1 times');
  });
});
