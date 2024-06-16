import React, { Component } from "react";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      date: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      date: new Date().toLocaleString('en-US')
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim()) {
      this.props.addTodo({
        content: this.state.content,
        date: this.state.date,
      });
      this.setState({
        content: "",
        date: "",
      });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.content}
          aria-label="Add New Item"
        />
        <button onClick={this.handleSubmit} data-testid="new-item-button">
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
