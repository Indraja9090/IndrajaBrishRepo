//App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading for snapshot testing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Snapshot testing on components/i);
  expect(linkElement).toBeInTheDocument();
});

/* snapshot testing*/
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

test('matches snapshot', () => {
  /* You’re telling React Testing Library to give you a "snapshot fragment" — basically, a snapshot of the entire rendered DOM tree at that point in time.*/
  // const { asFragment } = render(<App />);

  // expect(asFragment()).toMatchSnapshot();

  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();

});



