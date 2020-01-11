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
    <form onSubmit={submitForm} className="mb-2">
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter a todo"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
      </div>
      <div className="btn-group" role="group">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
        <button
          type="submit"
          className="btn btn-warning"
          onClick={() => clearForm()}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default Form;
