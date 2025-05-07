/* ------ use RTL's "fireEvent" and "waitFor" functions to simulate interactions of an end user ------*/
// If a user types into an input field, the component may re-render , and 
// the new value should be displayed (or used somewhere).
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// If your component is involved in an asynchronous task, 
// you may see the  warning showing up: "Warning: An update to App inside a test was not wrapped in act(...).

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    screen.debug();
  });
});