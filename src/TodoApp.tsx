import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./styles.css";

interface TodoItem {
  id: number;
  content: string;
  completed?: boolean;
}
const initialState = {
  allIds: [1, 2],
  byIds: {
    "1": {
      content: "Task 1",
      completed: false
    },
    "2": {
      content: "Task 2",
      completed: true
    }
  }
};

export default class TodoApp extends React.Component<any, { allIds; byIds }> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList
          todos={this.state.allIds.map(id => ({ ...this.state.byIds[id], id }))}
        />
        {/* <VisibilityFilters /> */}
      </div>
    );
  }
}
