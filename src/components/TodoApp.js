import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoHeader = () => {
  return <h1>My Todo list</h1>;
};

const TodoApp = () => {

  return (
    <div id="main">
      <TodoHeader />
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default TodoApp;
