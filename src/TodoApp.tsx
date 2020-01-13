import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./styles.css";

export default class TodoApp extends React.Component<any, { allIds; byIds }> {
  render() {
    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        {/* <VisibilityFilters /> */}
      </div>
    );
  }
}
