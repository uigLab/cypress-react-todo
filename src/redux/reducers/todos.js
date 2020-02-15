import { ADD_TODO, DELETE_TODO, CHECK_TODO } from "../actions/actionTypes";

const todoItems = [];
todoItems.push({ id: 1, value: "Buy Milk", done: false });
todoItems.push({ id: 2, value: "Call Dad", done: false });
todoItems.push({ id: 3, value: "Fill Gas", done: false });

const todosReducer = (state = todoItems, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: state.length + 1, value: action.payload, done: false }
      ];
    case DELETE_TODO:
      return state.filter(item => item.id !== action.payload);
    case CHECK_TODO:
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            done: !item.done
          };
        }
        return item;
      });
    default:
      return state;
  }
};

export default todosReducer;
