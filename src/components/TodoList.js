import React from "react";
import {useSelector} from "react-redux";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  return (
    <table className="pure-table pure-table-horizontal">
      <tbody>
        {todos.map(item => (
          <TodoListItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
