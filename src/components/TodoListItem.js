import React from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, checkTodo} from "../redux/actions";

const TodoListItem = ({item}) => {

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteTodo(item.id));
  };

  const handleCheck = () => {
    dispatch(checkTodo(item.id));
  };

    const todoClass = item.done ? "done" : "undone";
    return (
      <tr data-cy="todoItem">
        <td className={todoClass}>
          <span
            data-cy="markAsCompleted"
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={handleCheck}
          />
          {item.value}
          <span
            data-cy="markAsDeleted"
            className="glyphicon glyphicon-remove-sign close"
            aria-hidden="true"
            onClick={handleRemove}
          />
        </td>
      </tr>
    );
  }



export default TodoListItem;
