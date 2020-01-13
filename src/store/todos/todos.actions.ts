import { ADD_TODO, TOGGLE_TODO } from "./todos.action-types";

let nextTodoId = 3;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});
