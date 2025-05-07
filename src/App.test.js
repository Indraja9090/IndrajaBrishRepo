/*----Following sampel code is taken from article https://www.robinwieruch.de/react-testing-library/ -----*/

// This doesn't work, because, even though debug output shows that the element with the text "Searches for JavaScript" isn't there,
// "getBy" search varient throws an error before we can make the assertion, because it cannot find the element with this text. 
// In order to assert elements which aren't there, we can exchange "getBy" with "queryBy" search varient.

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();
    //fails
    expect(screen.getByText(/Searches for JavaScript/)).toBeNull();
  });
});
