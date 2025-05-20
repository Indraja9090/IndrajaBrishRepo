import React, { useState } from 'react';
import AddTodo from './AddTodo';
import FilterTodos from './FilterTodos';

function TodoList() {
  const [todos, setTodos] = useState([]);
  console.log(todos) //intial log - empty array
                      // when 1st time user type in input textbox it logs - [{id: 1747317559725, text: 'indraja', completed: false}]
                      // when 2nd time user type in input textbox it logs - [{id: 1747317559725, text: 'indraja', completed: false}, 
                      //                                                      {id: 1747318256807, text: 'eswari', completed: false}]
  const [filter, setFilter] = useState('all');

  //Function that creates a new todo item and updates the state.
  //The spread operator ... in JavaScript, take all the items from the 'todos' array and copy them into a new array."
  //Then we’re adding the new todo item newTodo to the end of that array.
  //React state should never be mutated directly.because you're modifying the same array in memory. React may not detect changes properly.
  //Hence creates a new array → safer and React-friendly.
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      // it's shorthand for text: text.
      text,    
      completed: false,
    };
    // React’s useState hook replaces the old state with the new value when you call setTodos().
    //On the next render, React gives you updated todos array — not the old empty one.
    setTodos([...todos, newTodo]);
    console.log(todos); // due to sync, it logs empty array intially when user type text in input textbox
                        // logs [{id: 1747317559725, text: 'indraja', completed: false}] when 2nd time user type text in input box
  };

  //todos.map(...) → creates a new array by looping through each todo.
  //If todo.id === id, it returns a new `todo` object with `completed` property flipped (false ↔ true).
  // Otherwise, it returns the original `todo` object unchanged.
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    //.filter() is an array method that helps you create a new array by keeping only the items that match a condition.
    // If the array is empty, there’s nothing to check, so it just returns another empty array.
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //.filter() is an array method that helps you create a new array by keeping only the items that match a condition.
  // If the array is empty, there’s nothing to check, so it just returns another empty array.
  const filteredTodos = todos.filter((todo) => {
    console.log(todos); // when user type in input textbox it logs - [{id: 1747317559725, text: 'indraja', completed: false}]
                        // when 2nd time user type in input textbox it logs - array with 2 objects [{id: 1747317559725, text: 'indraja', completed: false}, 
                        //                                                                          {id: 1747318256807, text: 'eswari', completed: false}]
                        // when 3rd time user select the input checkbox it logs - array with 2 objects [{id: 1747317559725, text: 'indraja', completed: true},
                        //                                                                              {id: 1747318256807, text: 'eswari', completed: false}]
                        //              which is a new todos array with `completed` property flipped from (false ↔ true) due to execution of `toggleTodo` event handler.
    if (filter === 'active') return !todo.completed;  //New array filters/includes `todos` object where completed === false.
                                                      // example: for 'eswari' where completed = false → !false i.e., true → included  
                                                      //          for 'indraja' where completed = true → !true i.e., false → excluded
    if (filter === 'completed') return todo.completed;
    return true; //  When filter = 'all', So for each `todo` object, return true is called → it includes all todos.
  });
  console.log(filteredTodos); // initial render - empty array
                              // when user type in input textbox it logs - [{id: 1747317559725, text: 'indraja', completed: false}]
                              // when 2nd time user type in input textbox it logs - [{id: 1747317559725, text: 'indraja', completed: false},
                              //                                                     {id: 1747318256807, text: 'eswari', completed: false}]
  return (
    <div className="todo-list">
      {/* binds (or passes) the addTodo function as a prop to the AddTodo component, to allow child-to-parent communication. */}
      <AddTodo addTodo={addTodo} />
      <ul>
        {filteredTodos.map((todo) => ( 
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <FilterTodos setFilter={setFilter} />
    </div>
  );
}

export default TodoList;
