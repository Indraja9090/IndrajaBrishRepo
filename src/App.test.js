/* ---- include these two debug functions and verify their outputs on the command line----*/
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', async () => {
    render(<App />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    screen.debug();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

    screen.debug();
  });
});
/*
NOTE:
For any element that isn't there yet but will be there eventually, use findBy over getBy or queryBy. 
If you assert for a missing element, use queryBy. Otherwise default to getBy.
*/