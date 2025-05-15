/*----follwing is the Pre-existing code which comes with "npx create-react-app <project-name>" create React project command ----*/
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

/*----Following sampel code is taken from article https://www.robinwieruch.de/react-testing-library/ -----*/

// // React Testing Library doesn't care much about the actual components. 
// // Let's take the following React components which utilize different React features (useState, event handler, props) and concepts (controlled component):
// import * as React from 'react';

// function App() {
//   const [search, setSearch] = React.useState('');

//   function handleChange(event) {
//     setSearch(event.target.value);
//   }

//   return (
//     <div>
//       <Search value={search} onChange={handleChange}>
//         Search:
//       </Search>

//       <p>Searches for {search ? search : '...'}</p>
//     </div>
//   );
// }

// function Search({ value, onChange, children }) {
//   return (
//     <div>
//       <label htmlFor="search">{children}</label>
//       <input
//         id="search"
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// }

// export default App;

/* --------Changes made to above code to make Suitable Scenario to explain "findBy" search varient of React testing Library ----*/

/* Code Explanation :  
After its initial render, the App component fetches a user from a simulated API. 
The API returns a JavaScript promise which immediately resolves with a user object, and
the component stores the user from the promise in the component's state. 
The component updates and re-renders; and afterward the conditional rendering should render "Signed in as" after the component update:*/
// import * as React from 'react';

// const getUser = () => {
//   return Promise.resolve({ id: '1', name: 'Robin' });
// };
// function App() {
//   const [search, setSearch] = React.useState('');
//   const [user, setUser] = React.useState(null);

//   React.useEffect(() => {
//     const loadUser = async () => {
//       const user = await getUser();
//       setUser(user);
//     };

//     loadUser();
//   }, []);

//   function handleChange(event) {
//     setSearch(event.target.value);
//   }

//   return (
//     <div>
//       {user ? <p>Signed in as {user.name}</p> : null} 

//       <Search value={search} onChange={handleChange}>
//         Search:
//       </Search>

//       <p>Searches for {search ? search : '...'}</p>
//     </div>
//   );
// }

// function Search({ value, onChange, children }) {
//   return (
//     <div>
//       <label htmlFor="search">{children}</label>
//       <input
//         id="search"
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// }

// export default App;

/*---------------Code Taken from https://keploy.io/blog/community/a-guide-to-testing-react-components-with-jest-and-react-testing-library#let-s-start-writing-testcases -----*/
import React from 'react';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
function App() {
  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <TodoList />
      <Counter/>
    </div>
  );
}

export default App;