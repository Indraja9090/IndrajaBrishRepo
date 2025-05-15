import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [text, setText] = useState('');

  // e is the event object representing the form submission event.
  const handleSubmit = (e) => {
    // Prevents the default behavior of a form, which is to reload the page when submitted.
    // This line is crucial for single-page apps like React where we want to handle form logic manually without refreshing.
    e.preventDefault();
    // In JS, an empty string is a falsy value
    // .trim() removes all leading/trailing spaces on string
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;

/*
If the user enters nothing in UI inputbox, 'text' variable will remain an empty string "".

text.trim() will also return "".

!text.trim() evaluates to true.

So the function exits early (return;) and does not add a todo.
*/
