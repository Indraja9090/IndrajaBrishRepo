/* 'npx create-react-app <project-name>' command run chesinappudu, pre-configure/pre-structured React app build avthundi. 
Hence below code is what pre-written in App.test.js file */

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

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

/*-------------- using debug() function on screen object , 
                Writing Implicit assertion without 'expect()' and Exlicit assertion with 'expect()' jest funcion -----*/
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);

//   screen.debug() // 👈 This shows the rendered HTML in your terminal or the virtual HTML that RTL rendered.

//   /* Implicit assertion because 'getByText' would throw error if element wouldn't be there even if you don't write expect(...)*/

//   // screen.getByText(/learn react/i);

//   /* Best recommended practice: write Explicit assertion with jest's expect() function */

//   expect(screen.getByText(/learn react/i)).toBeInTheDocument();

// });


/*-------------- Like getByText(), Exploring  other search functions (like 'getByRole') in React Testing Library. -----*/
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);

//   // screen.debug() // 👈 This shows the rendered HTML in your terminal or the virtual HTML that RTL rendered.

//   // expect(screen.getByText(/learn react/i)).toBeInTheDocument();

//   /* The neat thing about 'getByRole', it shows all the selectable roles 
//   if you provide a role that isn't available in the rendered component's HTML*/

//   screen.getByRole(''); 

// });

/*-------------- getByRole() mainly DOM elements ni provide chesins accessible roles base chesi find cheyyadaniki. Idi accessibility standards ni follow chestundi 
                role should be (string): Ikkada role ante HTML element yokka semantic role. For example:"button","textbox","heading","link","checkbox","radio"-----*/
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);

//   // screen.debug() // 👈 This shows the rendered HTML in your terminal or the virtual HTML that RTL rendered.

//   /* Implicit assertion because getByText would throw error if element wouldn't be there*/
//   // screen.getByText(/learn react/i);

//   /* Best recommended practice: write Explicit assertion with jest's expect() function */
//   expect(screen.getByText(/learn react/i)).toBeInTheDocument();

//   // screen.getByRole('img'); 

// });

/*----Following sampel code is taken from article https://www.robinwieruch.de/react-testing-library/ -----*/

// // This doesn't work, because, even though debug output shows that the element with the text "Searches for JavaScript" isn't there,
// // "getBy" search varient throws an error before we can make the assertion, because it cannot find the element with this text. 
// // In order to assert elements which aren't there, we can exchange "getBy" with "queryBy" search varient.

// import * as React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);

//     screen.debug();
//     //fails
//     expect(screen.getByText(/Searches for JavaScript/)).toBeNull();
//   });
// });

/*------In order to assert elements which aren't there, we can exchange getBy with "queryBy" search varient:----*/

// import * as React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);

//     screen.debug();
//     expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
//   });
// });



/* ---- Changes made to above code to explain "FindBy" search varient ----- */
// // After its initial render, we assert that the "Signed in as" text is not there by using the queryBy instead of the getBy search variant.
// // Then we await the new element to be found, and it will be found eventually when the promise resolves and the component re-renders again.
// import * as React from 'react';
// import { render, screen } from '@testing-library/react';

// import App from './App';

// describe('App', () => {
//   it('renders App component', async () => {
//     render(<App />);

//     expect(screen.queryByText(/Signed in as/)).toBeNull();

//     expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
//   });
// });

/* ---- include these two debug functions and verify their outputs on the command line----*/
// import * as React from 'react';
// import { render, screen } from '@testing-library/react';

// import App from './App';

// describe('App', () => {
//   it('renders App component', async () => {
//     render(<App />);

//     expect(screen.queryByText(/Signed in as/)).toBeNull();

//     screen.debug();

//     expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

//     screen.debug();
//   });
// });
/*
NOTE:
For any element that isn't there yet but will be there eventually, use findBy over getBy or queryBy. 
If you assert for a missing element, use queryBy. Otherwise default to getBy.
*/

/* ------ use RTL's "fireEvent" and "waitFor" functions to simulate interactions of an end user ------*/
// // If a user types into an input field, the component may re-render , and 
// // the new value should be displayed (or used somewhere).

// import * as React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import App from './App';

// // If your component is involved in an asynchronous task, 
// // you may see the  warning showing up: "Warning: An update to App inside a test was not wrapped in act(...).

// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);

//     screen.debug();

//     fireEvent.change(screen.getByRole('textbox'), {
//       target: { value: 'JavaScript' },
//     });

//     screen.debug();
//   });
// });

/* --- change the above test() to make sure that our components handles asynchronous task .*/
// import * as React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';

// import App from './App';
// describe('App', () => {
//   //Async 
//   it('renders App component', async () => {
//     render(<App />);

//     // Wait for the async user data to load (this handles the act() warning)
//     await screen.findByText(/Signed in as/);

//     screen.debug();
//     // Now simulate typing in the input
//     fireEvent.change(screen.getByRole('textbox'), {
//       target: { value: 'JavaScript' },
//     });

//     screen.debug();
//   });
// });


/*---- we can make the assertions from before and after the event----*/
// import * as React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import App from './App';
// describe('App', () => {
//   it('renders App component', async () => {
//     render(<App />);

//     // wait for the user to resolve
//     await screen.findByText(/Signed in as/);
//     //assertion
//     expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
//     //assertion
//     fireEvent.change(screen.getByRole('textbox'), {
//       target: { value: 'JavaScript' },
//     });

//     expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
//   });
// });

/*--- As alternative, we can also literally wait for an asynchronous update to happen with React Testing Library's "waitFor" function*/
// // In this section,
// //       we have used the queryBy search variant to check whether the element isn't there before the event and 
// //                    the getBy search variant to check whether the element there after the event. 
// import * as React from 'react';
// // waitFor() is a utility from React Testing Library used to wait for asynchronous changes in the DOM to complete before running assertions.
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import App from './App';

// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);

//     expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

//     fireEvent.change(screen.getByRole('textbox'), {
//       target: { value: 'JavaScript' },
//     });

//     waitFor(() =>
//       expect(
//         screen.getByText(/Searches for JavaScript/)
//       ).toBeInTheDocument()
//     );
//   });
// });

/*----------userEvent mimics the actual browser behavior more closely than the fireEvent API.-----------*/

// // అంటే మనం అక్షరాలు టైప్ చేసినట్టు simulate చేయడం కాకుండా, ఒక్కసారిగా value మారిపోయినట్టు చూపుతుంది.
// // So, fireEvent.change(); 
// //        ఇది basically: "Input value మారిపోయింది అని React కు చెప్పటం".
// // userEvent.type() : ఇది keyboard typing ను simulate చేస్తుంది. ఇది keyDown → keyPress → input → change → keyUp అనే మొత్తం order లో events simulate చేస్తుంది.

// import * as React from 'react';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// import App from './App';

// describe('App', () => {
//   it('renders App component', async () => {
//     render(<App />);

//     // wait for the user to resolve
//     await screen.findByText(/Signed in as/);

//     expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

//     await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

//     expect(
//       screen.getByText(/Searches for JavaScript/)
//     ).toBeInTheDocument();
//   });
// });

/*-------------Code Related to article from https://keploy.io/blog/community/a-guide-to-testing-react-components-with-jest-and-react-testing-library#let-s-start-writing-testcases -----*/
// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Todo App/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the TodoList component', () => {
    render(<App />);
    // You can test for an element that is known to be inside TodoList
    // For example, a button or input from the TodoList
    const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
    expect(inputElement).toBeInTheDocument();
  });
});
