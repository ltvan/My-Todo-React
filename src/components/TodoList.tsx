import React from "react";
import Todo from "./Todo";
import { getTodos } from "../store/todos/todos.selectors";
import { connect } from "react-redux";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = state => {
  const todos = getTodos(state);
  console.log(state, todos);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
