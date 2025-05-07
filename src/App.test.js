/* 'npx create-react-app <project-name>' command run chesinappudu, pre-configure/pre-structured React app build avthundi. 
Hence below code is what pre-written in App.test.js file */

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*
Code Definitions:

The 'render()' function from React Testing Library takes JSX as an argument and renders it into a virtual DOM (not the real browser DOM). 
This allows you to test the behavior or appearance of a component without displaying it in a browser.

'getByText()' search function from React Testing Library used  to find an element
that contains the text "learn react" — using a regular expression instead of a plain string.

/learn react/: This regular expression pattern looks for the exact phrase "learn react" in the text content of the DOM element.
i (at the end): This is called the "case-insensitive" flag.
Example:
screen.getByText("Learn React"); // Exact match, case-sensitive
screen.getByText(/learn react/i); // Flexible match, case-insensitive

*/