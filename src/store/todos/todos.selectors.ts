export const getTodosState = state => state.todos;

export const getTodoList = state =>
  getTodosState(state) ? getTodosState(state).allIds : [];

export const getTodoById = (state, id) =>
  getTodosState(state) ? { ...getTodosState(state).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from state combining information from multiple reducers
 */
export const getTodos = state =>
  getTodoList(state).map(id => getTodoById(state, id));
