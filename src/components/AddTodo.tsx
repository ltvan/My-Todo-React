import React, { Component } from "react";

export default class AddTodo extends Component<
  { addTodo?: (input) => void },
  { input }
> {
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
