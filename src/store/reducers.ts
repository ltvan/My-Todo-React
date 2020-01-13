import { combineReducers } from "redux";
// import visibilityFilter from "./visibilityFilter";
import todos from "./todos/todos.reducer";

export default combineReducers({ todos });
