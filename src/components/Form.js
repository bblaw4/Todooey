import React, { useState } from "react";

function Form({ addTodo }) {
  const [todo, setTodo] = useState("");
  //
  const clearForm = () => {
    setTodo("");
  };
  //
  const submitForm = e => {
    e.preventDefault();
    if (todo === "") return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <input
          type="text"
          placeholder="Enter a todo"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
      <button type="submit" onClick={() => clearForm()}>
        Clear
      </button>
    </form>
  );
}

export default Form;
