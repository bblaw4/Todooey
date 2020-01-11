import React, { useState } from "react";

//components
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  //
  const addTodo = todo => {
    if (todos.includes(todo)) {
      alert(`${todo} already exists`);
      return;
    }
    setTodos([...todos, todo]);
  };
  //
  const removeTodo = i => {
    const todosCopy = todos.filter(t => t !== i);
    setTodos(todosCopy);
  };
  //
  const renderTodos = todos.map((todo, i) => (
    <Todo key={i} name={todo} remove={removeTodo} />
  ));
  return (
    <div className="App">
      <Header title="Todooey" />
      <div className="container">
        {" "}
        <Form addTodo={addTodo} />
        {renderTodos}
      </div>
    </div>
  );
}
