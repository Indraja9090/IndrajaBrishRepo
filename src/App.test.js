/* ---- Changes made to above code to explain "FindBy" search varient ----- */
// After its initial render, we assert that the "Signed in as" text is not there by using the queryBy instead of the getBy search variant.
// Then we await the new element to be found, and it will be found eventually when the promise resolves and the component re-renders again.
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', async () => {
    render(<App />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });
});
