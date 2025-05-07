/* --------Changes made to the code to make Suitable Scenario to explain "findBy" search varient of React testing Library ----*/

/* Code Explanation :  
After its initial render, the App component fetches a user from a simulated API. 
The API returns a JavaScript promise which immediately resolves with a user object, and
the component stores the user from the promise in the component's state. 
The component updates and re-renders; and afterward the conditional rendering should render "Signed in as" after the component update:*/
import * as React from 'react';

const getUser = () => {
  return Promise.resolve({ id: '1', name: 'Robin' });
};
function App() {
  const [search, setSearch] = React.useState('');
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null} 

      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
}

function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
