import { ADD_TODO, DELETE_TODO, CHECK_TODO } from "./actionTypes";

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const checkTodo = id => {
  return {
    type: CHECK_TODO,
    payload: id
  };
};
