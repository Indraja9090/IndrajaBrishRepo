/*------In order to assert elements which aren't there, we can exchange getBy with "queryBy" search varient:----*/

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
});

