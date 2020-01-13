import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/todos/todos.actions";

class AddTodo extends Component<{ addTodo?: (input) => void }, { input }> {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = event => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form>
          <input
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
          />
          <button
            type="submit"
            className="add-todo"
            onClick={this.handleAddTodo}
          >
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
