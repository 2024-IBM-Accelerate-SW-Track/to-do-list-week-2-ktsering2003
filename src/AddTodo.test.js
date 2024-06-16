import React, { Component } from "react";
import { Button, TextField } from "@mui/material";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      date: "", // Add a new key for the date
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      date: new Date().toLocaleString('en-US'), // Update date with current date and time
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
        date: "", // Reset date to an empty string
      });
    }
  };

  render() {
    return (
      <div>
        <TextField
          label="Add New Item"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <Button
          style={{ marginLeft: "10px" }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddTodo;
