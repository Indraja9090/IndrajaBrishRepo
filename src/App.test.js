/*-------------- getByRole() mainly DOM elements ni provide chesins accessible roles base chesi find cheyyadaniki. Idi accessibility standards ni follow chestundi 
                role should be (string): Ikkada role ante HTML element yokka semantic role. For example:"button","textbox","heading","link","checkbox","radio"-----*/
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  expect(screen.getByText(/learn react/i)).toBeInTheDocument();

  screen.getByRole('img'); 

});
