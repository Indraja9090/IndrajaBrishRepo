import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //fetch() returns a Promise that resolves to a Response object
    //Then res.json() is called, which itself returns a Promise that resolves to the actual data (like an array)
    fetch('http://localhost:3001/users').then((res) => {
        console.log(res)
        return res.json()
      }).then((data) => {
        console.log(data)
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h2>User List (from JSON Server)</h2>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UserList;

/* Here fetch() work fine in a real browser environment(like chrome,safari, Firefox where you run your React APP )
         because fetch is a browser API, you don’t need to import it.  */




