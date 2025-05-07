/* --- change the above test() to make sure that our components handles asynchronous task .*/
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';
describe('App', () => {
  //Async 
  it('renders App component', async () => {
    render(<App />);

    // Wait for the async user data to load (this handles the act() warning)
    await screen.findByText(/Signed in as/);

    screen.debug();
    // Now simulate typing in the input
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    screen.debug();
  });
});