/*-------------- using debug() function on screen object , 
                Writing Implicit assertion without 'expect()' and Exlicit assertion with 'expect()' jest funcion -----*/
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  screen.debug() // 👈 This shows the rendered HTML in your terminal or the virtual HTML that RTL rendered.

  /* Implicit assertion because 'getByText' would throw error if element wouldn't be there even if you don't write expect(...)*/

  // screen.getByText(/learn react/i);

  /* Best recommended practice: write Explicit assertion with jest's expect() function */

  expect(screen.getByText(/learn react/i)).toBeInTheDocument();

});
