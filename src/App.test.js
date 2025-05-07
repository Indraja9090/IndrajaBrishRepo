/*--- As alternative to use Async and await to test asynchronous task, 
      we can also literally wait for an asynchronous update to happen with React Testing Library's "waitFor" function*/
// In this section,
//       we have used the queryBy search variant to check whether the element isn't there before the event and 
//                    the getBy search variant to check whether the element there after the event. 
import * as React from 'react';
// waitFor() is a utility from React Testing Library used to wait for asynchronous changes in the DOM to complete before running assertions.
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
    // Means: “Wait until the text 'Searches for JavaScript appears' in the document.”
    waitFor(() =>
      expect(
        screen.getByText(/Searches for JavaScript/)
      ).toBeInTheDocument()
    );
  });
});