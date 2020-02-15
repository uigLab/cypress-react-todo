import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const addItem = () => {
    if (value && value !== "") {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  return (
    <div className="pure-form pure-form-aligned">
      <input
        type="text"
        value={value}
        data-cy="newItemField"
        className="form-control"
        placeholder="add a new item..."
        onChange={handleChange}
      />
      <button
        className="pure-button pure-button-primary"
        id="addBtn"
        onClick={addItem}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
