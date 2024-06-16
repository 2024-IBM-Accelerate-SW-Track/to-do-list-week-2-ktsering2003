import React, { Component } from "react";
import AddTodo from "../component/AddTodo";
import Todos from "../component/todos";
import "./Home.css";

class Home extends Component {
  // A default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo) => {
    // Check if the item already exists
    if (this.state.todos.find((t) => t.content === todo.content)) {
      return;
    }
    
    todo.id = Math.random();
    let new_list = [...this.state.todos, todo];
    this.setState({
      todos: new_list,
    });
  };

  // The deleteTodo function removes an item from the Todo list
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="home-wrapper">
        <div className="hero-section">
          <h2>Welcome to Your To-Do List</h2>
          <h5>Organize your tasks efficiently</h5>
        </div>
        <div className="home-container">
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default Home;
