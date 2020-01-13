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

let nextId = 3;

export default class TodoApp extends React.Component<any, { allIds; byIds }> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  addTodo = (input: string) => {
    let todo: TodoItem = {
      id: nextId++,
      content: input
    };
    console.log(todo);
    this.setState(prev => ({
      allIds: [...prev.allIds, todo.id],
      byIds: {
        ...prev.byIds,
        [todo.id]: {
          content: todo.content,
          completed: false
        }
      }
    }));
  };

  toggleTodo = id => {
    this.setState(prev => ({
      ...prev,
      byIds: {
        ...prev.byIds,
        [id]: {
          ...prev.byIds[id],
          completed: !prev.byIds[id].completed
        }
      }
    }));
  };

  render() {
    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo addTodo={this.addTodo} />
        <TodoList
          todos={this.state.allIds.map(id => ({ ...this.state.byIds[id], id }))}
          toggleTodo={this.toggleTodo}
        />
        {/* <VisibilityFilters /> */}
      </div>
    );
  }
}
