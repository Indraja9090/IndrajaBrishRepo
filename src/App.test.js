/*-------------- Like getByText(), Exploring  other search functions (like 'getByRole') in React Testing Library. -----*/
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  // screen.debug() // 👈 This shows the rendered HTML in your terminal or the virtual HTML that RTL rendered.

  // expect(screen.getByText(/learn react/i)).toBeInTheDocument();

  /* The neat thing about 'getByRole', it shows all the selectable roles 
  if you provide a role that isn't available in the rendered component's HTML*/

  screen.getByRole('');  // TestingLibraryElementError: Unable to find an accessible element with the role ""

});
