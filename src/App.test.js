/*---- we can make the assertions from before and after the event----*/
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
describe('App', () => {
  it('renders App component', async () => {
    render(<App />);

    // wait for the user to resolve
    await screen.findByText(/Signed in as/);
    //assertion
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    //assertion
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
  });
});